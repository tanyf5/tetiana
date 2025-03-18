document.querySelector('.logos-track').addEventListener('click', function () {
  this.classList.toggle('paused');
});

// Type here

function getTwoDecimal(num) {
  return parseFloat(num.toFixed(2) + 0.5);
}

const mouse = {
  decimal(coord, size) {
    return getTwoDecimal(coord / size);
  },
  x(e, element) {
    return (
      e.clientX -
      (element.getBoundingClientRect().left + element.offsetWidth / 2)
    );
  },
  y(e, element) {
    return (
      e.clientY -
      (element.getBoundingClientRect().top + element.offsetHeight / 2)
    );
  },
};

const changeTextAlphaVal = (txt, e) => {
  const root = document.querySelector(':root');
  const cssVar = '--alpha';
  const currentAlpha = getComputedStyle(root).getPropertyValue(cssVar).trim();

  const max = parseFloat(currentAlpha);
  const dx = mouse.decimal(mouse.x(e, txt), txt.offsetWidth);
  const dy = mouse.decimal(mouse.y(e, txt), txt.offsetHeight);

  let alphaVal = Math.max(dx, dy);
  txt.style.setProperty(cssVar, alphaVal);
};

function createShadow(e, currTarget) {
  const walk = 60;

  const x = mouse.x(e, currTarget);
  const y = mouse.y(e, currTarget);
  const xWalk = (x / currTarget.offsetWidth) * walk;
  const yWalk = (y / currTarget.offsetHeight) * walk;

  const yellow = [251, 218, 97];
  const pink = [255, 90, 205];
  const typoAlpha = 0.6;

  const typo = currTarget.querySelector('.typo');
  changeTextAlphaVal(typo, e);

  typo.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(${yellow}, ${typoAlpha}),
        ${-xWalk}px ${-yWalk}px 0 rgba(${pink}, ${typoAlpha})
      `;
}

function onMouseMove(e) {
  createShadow(e, e.currentTarget);
}
function onTouchMove(e) {
  createShadow(e.changedTouches[0], e.currentTarget);
}

const heading = document.querySelector('.skills-item-one');
heading.addEventListener('mousemove', onMouseMove);
heading.addEventListener('touchmove', onTouchMove);

// Bouncing shapes

const doc = document;
const types = [
  'circle',
  'semi-circle',
  'square',
  'triangle',
  'triangle-2',
  'rectangle',
];
const colors = [
  '#836ee5',
  '#fe94b4',
  '#49d2f5',
  '#ff5354',
  '#00b1b4',
  '#ffe465',
  '#0071ff',
  '#03274b',
];

let shapes = doc.querySelectorAll('.shape');

shapes.forEach(shape => {
  setInterval(() => {
    let cl = shape.classList;
    cl.forEach(cls => {
      if (types.includes(cls)) cl.remove(cls);
    });

    cl.add(types[Math.floor(Math.random() * types.length)]);

    let offset = Math.random() * 4 - 2;
    let opp = offset >= 0 ? '+ ' : '- ';
    let base_scale = Math.random() * 4 + 4;
    let styles = [
      ['left', `calc(50% ${opp} ${offset}vw)`],
      ['--bounce-variance', `${Math.random() * 2 - 10}vh`],
      ['--base_scale', `${base_scale}vh`],
      ['--rotation', `${Math.random() * 180 - 90}deg`],
      ['--color', colors[Math.floor(Math.random() * colors.length)]],
    ];

    styles.forEach(style => shape.style.setProperty(style[0], style[1]));

    if (!cl.contains('bounce-up')) cl.add('bounce-up');
    cl.replace('bounce-down', 'bounce-up');
    setTimeout(() => cl.replace('bounce-up', 'bounce-down'), 400);
  }, 740);
});

// Load more btn

const loadMoreBtn = document.querySelector('.load-more-skills');
const allItems = document.querySelectorAll('#skills-item');

let visibleItems = 0;
const itemsPerLoad = {
  mobile: 2,
  tablet: 2,
  desktop: 2,
};

function setInitialVisibleItems() {
  visibleItems = itemsPerLoad[getCurrentDevice()];
  showVisibleItems();
}

function loadMoreItems() {
  visibleItems += itemsPerLoad[getCurrentDevice()];
  showVisibleItems();
}

function getCurrentDevice() {
  const width = window.innerWidth;

  if (width <= 767) return 'mobile';
  if (width <= 1199) return 'tablet';
  return 'desktop';
}

function showVisibleItems() {
  allItems.forEach((item, index) => {
    if (index < visibleItems) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });

  if (visibleItems >= allItems.length) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'block';
  }
}

window.addEventListener('resize', () => {
  visibleItems = itemsPerLoad[getCurrentDevice()];
  showVisibleItems();
});

loadMoreBtn.addEventListener('click', loadMoreItems);

setInitialVisibleItems();

// Typed.js

const elements = document.querySelectorAll('.lang-i-speak-span');

elements.forEach(element => {
  new Typed(element, {
    strings: [element.innerText],
    typeSpeed: 400,
    showCursor: false,
    loop: true,
  });
});
