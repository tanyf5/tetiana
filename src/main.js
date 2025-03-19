// Easter Egg

function detectDevTools() {
  const devTools = /./;
  devTools.toString = function () {
    console.log(
      '%cWow! You are a real professional! Check out my code here 😏',
      'font-size: 24px; color: white; background-color: #ff69b4; padding: 10px; border-radius: 5px;'
    );
  };
  console.log(devTools);
}

document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.shiftKey && event.key === 'I') {
    console.log(
      '%cWow! You are a real professional! Check out my code here 😏',
      'font-size: 24px; color: white; background-color: #ff69b4; padding: 10px; border-radius: 5px;'
    );
  }
});

let devToolsOpen = false;
const checkDevTools = () => {
  const threshold = 160;
  if (window.outerHeight - window.innerHeight > threshold) {
    if (!devToolsOpen) {
      devToolsOpen = true;
      console.log(
        '%cWow! You are a real professional! Check out my code here 😏',
        'font-size: 24px; color: white; background-color: #ff69b4; padding: 10px; border-radius: 5px;'
      );
    }
  } else {
    devToolsOpen = false;
  }
};

setInterval(checkDevTools, 500);

detectDevTools();

// Progress bar

window.addEventListener('scroll', handleScroll);

function handleScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  document.getElementById('progressBar').style.width = scrolled + '%';
}

//Change language

const translations = {
  en: {
    home: 'Home',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    themeToggle: 'Switch to dark mode',
    langToggle: 'Switch to Polish',
    closeMenu: 'Close menu',
    buttonText: 'PL',
    profession:
      'As a beginner in front-end development, I bring a fresh perspective and a strong eagerness to learn. I have a solid understanding of core web technologies, and my passion for building intuitive, user-friendly interfaces drives me to continuously improve.',
    skillsDescr:
      'Logos above represent the skills I am familiar with. However, it is not just about knowing these tools — it is about how I apply them. Below, you can see real examples of how I use these skills in action. The logos are a visual representation, but the projects below showcase my ability to bring these tools to life and solve real-world problems.',
    interactive: 'interactive',
    seeMore: 'See more',
    langDescr:
      'Being multilingual opens up countless opportunities for communication and understanding in diverse environments. Not only does it allow me to connect with people from different cultures, but it also helps me approach problem-solving with a broader perspective. Below, you’ll find the languages I speak.',
    fluent: 'FLUENT',
    simplyChocolate:
      'Simply Chocolate is a landing page offering handcrafted chocolates with a user-friendly design. It provides a featuring easy navigation and a modern, visually appealing interface.',
    webStudio:
      'The site is fully responsive, ensuring a seamless experience across all devices. A user-friendly interface with smooth navigation and optimized performance, highlighting its capabilities in crafting custom websites for businesses.',
    smartNotes:
      'An intuitive note-taking and collaboration platform designed to streamline productivity. The website is fully responsive and optimized for seamless use across devices. A user-friendly interface.',
    devPortfolio:
      'This project was a team effort, where I led the development of a portfolio website for a client. As the team lead, I managed the process, ensuring smooth collaboration and delivering a modern, user-friendly site that effectively showcases work of client.',
    yachtJet:
      'This website was developed by the team to offer a premium platform for luxury yacht rentals. The project aimed to provide users with an intuitive interface to explore and book unforgettable yacht experiences. The design highlights the luxurious nature of the yachts, while the user experience ensures smooth navigation and seamless booking functionality.',
    adaptability: 'adaptability',
    detail: 'attention to detail',
    fastLearning: 'fast learning',
    proactiveness: 'proactiveness',
    teamwork: 'teamwork',
    empathy: 'empathy',
    flexibility: 'flexibility in communication',
    teamWorkCard: 'team work',
    reachMe: 'Reach me out',
    location: 'Poland, Cracow',
    name: 'Name',
    subject: 'Subject',
    message: 'Message',
    send: 'Send',
    footerTitle: 'Website Description',
    footerDescr:
      'This landing is a portfolio website showcasing my skills in creating modern, responsive, and functional websites. My projects are focused on achieving high performance and ease of use for the end users. Here are some key aspects of my site:',
    htmlCss: 'HTML5 and CSS3',
    htmlCssTitle:
      'Core technologies for structuring and styling pages, ensuring modern and clean markup with high accessibility',
    js: 'JavaScript (ES6)',
    jsTitle:
      'Used for interactive elements of the site, such as animations, sliders, and other dynamic features',
    responsiveness: 'Responsiveness',
    mobiles: 'Mobile Devices',
    mobilesTitle: "The container's maximum width is 375px",
    smallTablets: 'Small tablets',
    smallTabletsTitle: "The container's maximum width is 744px",
    largeTablets: 'Large tablets',
    largeTabletsTitle: "The container's maximum width is 1024px",
    desktops: 'Desktops',
    desktopsTitle: "The container's maximum width is 1440px",
    interactiveElements: 'Interactive Elements',
    vanillaTilt: 'Vanilla Tilt',
    vanillaTiltTitle:
      'A lightweight library for creating 3D effects when hovering over elements',
    typedJs: 'Typed.js',
    typedJsTitle: 'For creating animated text on the site, adding dynamism',
    sweetalert2: 'SweetAlert2',
    sweetalert2Title:
      'For implementing beautiful and user-friendly pop-up windows (alerts)',
    emailJs: 'EmailJS',
    emailJsTitle:
      'For integrating contact forms, allowing users to send messages without server-side configuration',
    animationsEffects: 'Animations and Effects',
    cssAnimations:
      'CSS animations are used for smooth color transitions, as well as hover transitions for buttons and other elements',
    progressBar:
      'A progress bar shows the page load progress, adding interactivity and improving the user experience',
    optimization: 'Optimization',
    fontImageOptimization: 'Font and image optimization for fast page loading',
    adaptiveScrollbar: 'Adaptive scrollbar width for different browsers',
    advancedCss:
      'Advanced CSS techniques like font-smoothing and text-rendering are applied to ensure high-quality text rendering on all devices.',
    darkTheme: 'Dark Theme',
    darkThemeDescription:
      'The website supports a dark theme for a more comfortable viewing experience in low light conditions. All styles automatically change using CSS variables, allowing for efficient management of colors and backgrounds',
    externalLibraries: 'External Libraries',
    externalLibrariesDescription:
      'For user interaction, SweetAlert2 is used for pop-ups, and EmailJS integrates with the contact form on the site',
    footerCopyright:
      "© <span id='year'></span> Tetiana Bachariewa. All rights reserved",
  },
  pl: {
    home: 'Główna',
    skills: 'Umiejętności',
    projects: 'Projekty',
    contact: 'Kontakt',
    themeToggle: 'Przełącz na tryb ciemny',
    langToggle: 'Zmień na angielski',
    closeMenu: 'Zamknij menu',
    buttonText: 'EN',
    profession:
      'Jako początkujący programista front-end wnoszę świeże spojrzenie i silną chęć do nauki. Mam solidne zrozumienie podstawowych technologii internetowych, a moja pasja do budowania intuicyjnych, przyjaznych dla użytkownika interfejsów napędza mnie do ciągłego doskonalenia.',
    skillsDescr:
      'Powyższe logotypy reprezentują umiejętności, z którymi jestem zaznajomiona. Jednak nie chodzi tylko o znajomość tych narzędzi - chodzi o to, jak je stosuję. Poniżej można zobaczyć prawdziwe przykłady tego, jak wykorzystuję te umiejętności w akcji. Logotypy są wizualną reprezentacją, ale poniższe projekty pokazują moją zdolność do wprowadzania tych narzędzi w życie i rozwiązywania rzeczywistych problemów.',
    interactive: 'interaktywny',
    seeMore: 'Rozwiń',
    langDescr:
      'Bycie wielojęzycznym otwiera niezliczone możliwości komunikacji i zrozumienia w różnych środowiskach. Nie tylko pozwala mi to nawiązywać kontakty z ludźmi z różnych kultur, ale także pomaga mi podchodzić do rozwiązywania problemów z szerszej perspektywy. Poniżej znajdziesz języki, którymi się posługuję.',
    fluent: 'BIEGŁY',
    simplyChocolate:
      'Simply Chocolate to strona docelowa oferująca ręcznie robione czekoladki o przyjaznym dla użytkownika wyglądzie. Zapewnia łatwą nawigację i nowoczesny, atrakcyjny wizualnie interfejs.',
    webStudio:
      'Strona jest w pełni responsywna, zapewniając płynną obsługę na wszystkich urządzeniach. Przyjazny dla użytkownika interfejs z płynną nawigacją i zoptymalizowaną wydajnością, podkreślający jego możliwości w tworzeniu niestandardowych stron internetowych dla firm.',
    smartNotes:
      'Intuicyjna platforma do tworzenia notatek i współpracy, zaprojektowana w celu usprawnienia produktywności. Witryna jest w pełni responsywna i zoptymalizowana pod kątem płynnego korzystania na różnych urządzeniach. Przyjazny dla użytkownika interfejs.',
    devPortfolio:
      'Ten projekt jest pracą zespołową, w której kierowałam rozwojem strony portfolio dla klienta. Jako lider zespołu zarządzałam procesem, zapewniając płynną współpracę i dostarczając nowoczesną, przyjazną dla użytkownika witrynę, która skutecznie prezentuje pracę klienta.',
    yachtJet:
      'Ta strona internetowa została opracowana przez zespół, aby zaoferować platformę premium do wynajmu luksusowych jachtów. Projekt miał na celu zapewnienie użytkownikom intuicyjnego interfejsu do odkrywania i rezerwowania niezapomnianych przeżyć na jachcie. Projekt podkreśla luksusowy charakter jachtów, a doświadczenie użytkownika zapewnia płynną nawigację i bezproblemową funkcjonalność rezerwacji.',
    adaptability: 'adaptacyjność',
    detail: 'dbałość o szczegóły',
    fastLearning: 'szybkie uczenie się',
    proactiveness: 'proaktywność',
    teamwork: 'praca zespołowa',
    empathy: 'empatia',
    flexibility: 'elastyczność w komunikacji',
    teamWorkCard: 'praca zespołowa',
    reachMe: 'Skontaktuj się ze mną',
    location: 'Polska, Kraków',
    name: 'Imię',
    subject: 'Temat',
    message: 'Wiadomość',
    send: 'Wyślij',
    sentSuccessfuly: 'Wysłano!',
    form_sent_text: 'Skontaktuję się z Tobą jak najszybciej',
    ok_button: 'OK',
    footerTitle: 'Opis strony',
    footerDescr:
      'Ta strona to witryna portfolio, która prezentuje moje umiejętności w tworzeniu nowoczesnych, responsywnych i funkcjonalnych stron internetowych. Moje projekty skupiają się na osiąganiu wysokiej wydajności i łatwości użytkowania dla końcowego użytkownika. Oto niektóre kluczowe aspekty mojej strony:',
    htmlCss: 'HTML5 i CSS3',
    htmlCssTitle:
      'Podstawowe technologie do strukturyzowania i stylizacji stron, zapewniające nowoczesny i czysty kod z wysoką dostępnością',
    js: 'JavaScript (ES6)',
    jsTitle:
      'Wykorzystywane do interaktywnych elementów strony, takich jak animacje, suwaki i inne dynamiczne funkcje',
    responsiveness: 'Responsywność',
    mobiles: 'Urządzenia mobilne',
    mobilesTitle: 'Maksymalna szerokość kontenera to 375px',
    smallTablets: 'Małe tablety',
    smallTabletsTitle: 'Maksymalna szerokość kontenera to 744px',
    largeTablets: 'Duże tablety',
    largeTabletsTitle: 'Maksymalna szerokość kontenera to 1024px',
    desktops: 'Komputery stacjonarne',
    desktopsTitle: 'Maksymalna szerokość kontenera to 1440px',
    interactiveElements: 'Elementy interaktywne',
    vanillaTilt: 'Vanilla Tilt',
    vanillaTiltTitle:
      'Lekka biblioteka do tworzenia efektów 3D po najechaniu na elementy',
    typedJs: 'Typed.js',
    typedJsTitle:
      'Do tworzenia animowanego tekstu na stronie, dodającego dynamiki',
    sweetalert2: 'SweetAlert2',
    sweetalert2Title:
      'Do implementacji pięknych i przyjaznych dla użytkownika okienek pop-up (powiadomień)',
    emailJs: 'EmailJS',
    emailJsTitle:
      'Do integracji formularzy kontaktowych, umożliwiająca użytkownikom wysyłanie wiadomości bez konfiguracji po stronie serwera',
    animationsEffects: 'Animacje i efekty',
    cssAnimations:
      'Animacje CSS są używane do płynnych przejść kolorów oraz przejść przy najechaniu na przyciski i inne elementy',
    progressBar:
      'Pasek postępu pokazuje postęp ładowania strony, dodając interaktywność i poprawiając doświadczenie użytkownika',
    optimization: 'Optymalizacja',
    fontImageOptimization:
      'Optymalizacja czcionek i obrazów w celu szybszego ładowania strony',
    adaptiveScrollbar:
      'Adaptacyjna szerokość paska przewijania dla różnych przeglądarek',
    advancedCss:
      'Zaawansowane techniki CSS, takie jak font-smoothing i text-rendering, są stosowane w celu zapewnienia wysokiej jakości renderowania tekstu na wszystkich urządzeniach.',
    darkTheme: 'Ciemny motyw',
    darkThemeDescription:
      'Strona internetowa obsługuje ciemny motyw, zapewniając bardziej komfortowe przeglądanie w warunkach słabego oświetlenia. Wszystkie style automatycznie zmieniają się za pomocą zmiennych CSS, co umożliwia efektywne zarządzanie kolorami i tłem.',
    externalLibraries: 'Zewnętrzne biblioteki',
    externalLibrariesDescription:
      'Do interakcji użytkownika wykorzystywane są SweetAlert2 do okienek pop-up, a EmailJS do integracji z formularzem kontaktowym na stronie.',
    footerCopyright:
      "© <span id='year'></span> Tetiana Bachariewa. Wszystkie prawa zastrzeżone",
  },
};

function changeLanguage(lang) {
  document
    .querySelectorAll("[data-lang-key='home']")
    .forEach(el => (el.textContent = translations[lang].home));
  document
    .querySelectorAll("[data-lang-key='skills']")
    .forEach(el => (el.textContent = translations[lang].skills));
  document
    .querySelectorAll("[data-lang-key='projects']")
    .forEach(el => (el.textContent = translations[lang].projects));
  document
    .querySelectorAll("[data-lang-key='contact']")
    .forEach(el => (el.textContent = translations[lang].contact));
  document
    .querySelectorAll("[data-lang-key='hero-contact']")
    .forEach(el => (el.textContent = translations[lang].contact));
  document
    .querySelectorAll("[data-lang-key='hero-projects']")
    .forEach(el => (el.textContent = translations[lang].projects));
  document
    .querySelectorAll("[data-lang-key='menu-home']")
    .forEach(el => (el.textContent = translations[lang].home));
  document
    .querySelectorAll("[data-lang-key='menu-skills']")
    .forEach(el => (el.textContent = translations[lang].skills));
  document
    .querySelectorAll("[data-lang-key='menu-projects']")
    .forEach(el => (el.textContent = translations[lang].projects));
  document
    .querySelectorAll("[data-lang-key='menu-contact']")
    .forEach(el => (el.textContent = translations[lang].contact));
  document
    .querySelectorAll("[data-lang-key='prof-descr-deskt']")
    .forEach(el => (el.textContent = translations[lang].profession));
  document
    .querySelectorAll("[data-lang-key='prof-descr-mob']")
    .forEach(el => (el.textContent = translations[lang].profession));
  document
    .querySelectorAll("[data-lang-key='section-skills-title']")
    .forEach(el => (el.textContent = translations[lang].skills));
  document
    .querySelectorAll("[data-lang-key='skills-par']")
    .forEach(el => (el.textContent = translations[lang].skillsDescr));
  document
    .querySelectorAll("[data-lang-key='lang-par']")
    .forEach(el => (el.textContent = translations[lang].langDescr));
  document
    .querySelectorAll("[data-lang-key='interactive']")
    .forEach(el => (el.textContent = translations[lang].interactive));
  document
    .querySelectorAll("[data-lang-key='see-more']")
    .forEach(el => (el.textContent = translations[lang].seeMore));
  document
    .querySelectorAll("[data-lang-key='fluent']")
    .forEach(el => (el.textContent = translations[lang].fluent));
  document
    .querySelectorAll("[data-lang-key='section-projects-title']")
    .forEach(el => (el.textContent = translations[lang].projects));
  document
    .querySelectorAll("[data-lang-key='simply-chocolate']")
    .forEach(el => (el.textContent = translations[lang].simplyChocolate));
  document
    .querySelectorAll("[data-lang-key='web-studio']")
    .forEach(el => (el.textContent = translations[lang].webStudio));
  document
    .querySelectorAll("[data-lang-key='smart-notes']")
    .forEach(el => (el.textContent = translations[lang].smartNotes));
  document
    .querySelectorAll("[data-lang-key='dev-portfolio']")
    .forEach(el => (el.textContent = translations[lang].devPortfolio));
  document
    .querySelectorAll("[data-lang-key='yacht-jet']")
    .forEach(el => (el.textContent = translations[lang].yachtJet));
  document
    .querySelectorAll("[data-lang-key='adaptability']")
    .forEach(el => (el.textContent = translations[lang].adaptability));
  document
    .querySelectorAll("[data-lang-key='detail']")
    .forEach(el => (el.textContent = translations[lang].detail));
  document
    .querySelectorAll("[data-lang-key='fast-learning']")
    .forEach(el => (el.textContent = translations[lang].fastLearning));
  document
    .querySelectorAll("[data-lang-key='proactiveness']")
    .forEach(el => (el.textContent = translations[lang].proactiveness));
  document
    .querySelectorAll("[data-lang-key='teamwork']")
    .forEach(el => (el.textContent = translations[lang].teamwork));
  document
    .querySelectorAll("[data-lang-key='empathy']")
    .forEach(el => (el.textContent = translations[lang].empathy));
  document
    .querySelectorAll("[data-lang-key='flexibility']")
    .forEach(el => (el.textContent = translations[lang].flexibility));
  document
    .querySelectorAll("[data-lang-key='team-work']")
    .forEach(el => (el.textContent = translations[lang].teamWorkCard));
  document
    .querySelectorAll("[data-lang-key='section-contact-title']")
    .forEach(el => (el.textContent = translations[lang].contact));
  document
    .querySelectorAll("[data-lang-key='reach-me']")
    .forEach(el => (el.textContent = translations[lang].reachMe));
  document
    .querySelectorAll("[data-lang-key='location']")
    .forEach(el => (el.textContent = translations[lang].location));
  document
    .querySelectorAll("[data-lang-key='name']")
    .forEach(el => (el.textContent = translations[lang].name));
  document
    .querySelectorAll("[data-lang-key='subject']")
    .forEach(el => (el.textContent = translations[lang].subject));
  document
    .querySelectorAll("[data-lang-key='message']")
    .forEach(el => (el.textContent = translations[lang].message));
  document
    .querySelectorAll("[data-lang-key='send']")
    .forEach(el => (el.value = translations[lang].send));
  document
    .querySelectorAll("[data-lang-key='footer-title']")
    .forEach(el => (el.textContent = translations[lang].footerTitle));
  document
    .querySelectorAll("[data-lang-key='footer-descr']")
    .forEach(el => (el.textContent = translations[lang].footerDescr));
  document.querySelectorAll("[data-lang-key='html-css']").forEach(el => {
    el.innerHTML = `<span class="tech-used-title">${translations[lang].htmlCss}</span>: ${translations[lang].htmlCssTitle}`;
  });
  document.querySelectorAll("[data-lang-key='js']").forEach(el => {
    el.innerHTML = `<span class="tech-used-title">${translations[lang].js}</span>: ${translations[lang].jsTitle}`;
  });
  document
    .querySelectorAll("[data-lang-key='responsiveness']")
    .forEach(el => (el.textContent = translations[lang].responsiveness));
  document.querySelectorAll("[data-lang-key='mobile']").forEach(el => {
    el.innerHTML = `<span class="tech-used-title">${translations[lang].mobiles}</span>: ${translations[lang].mobilesTitle}`;
  });
  document.querySelectorAll("[data-lang-key='small-tablets']").forEach(el => {
    el.innerHTML = `<span class="tech-used-title">${translations[lang].smallTablets}</span>: ${translations[lang].smallTabletsTitle}`;
  });
  document.querySelectorAll("[data-lang-key='large-tablets']").forEach(el => {
    el.innerHTML = `<span class="tech-used-title">${translations[lang].largeTablets}</span>: ${translations[lang].largeTabletsTitle}`;
  });
  document.querySelectorAll("[data-lang-key='desktops']").forEach(el => {
    el.innerHTML = `<span class="tech-used-title">${translations[lang].desktops}</span>: ${translations[lang].desktopsTitle}`;
  });
  document
    .querySelectorAll("[data-lang-key='interactive-elements']")
    .forEach(el => (el.textContent = translations[lang].interactiveElements));
  document.querySelectorAll("[data-lang-key='vanilla-tilt']").forEach(el => {
    el.innerHTML = `<span class="tech-used-title">${translations[lang].vanillaTilt}</span>: ${translations[lang].vanillaTiltTitle}`;
  });
  document.querySelectorAll("[data-lang-key='typed-js']").forEach(el => {
    el.innerHTML = `<span class="tech-used-title">${translations[lang].typedJs}</span>: ${translations[lang].typedJsTitle}`;
  });
  document.querySelectorAll("[data-lang-key='sweetalert2']").forEach(el => {
    el.innerHTML = `<span class="tech-used-title">${translations[lang].sweetalert2}</span>: ${translations[lang].sweetalert2Title}`;
  });
  document.querySelectorAll("[data-lang-key='emailjs']").forEach(el => {
    el.innerHTML = `<span class="tech-used-title">${translations[lang].emailJs}</span>: ${translations[lang].emailJsTitle}`;
  });
  document
    .querySelectorAll("[data-lang-key='animations-effects']")
    .forEach(el => (el.textContent = translations[lang].animationsEffects));
  document
    .querySelectorAll("[data-lang-key='css-animations']")
    .forEach(el => (el.textContent = translations[lang].cssAnimations));
  document
    .querySelectorAll("[data-lang-key='progress-bar']")
    .forEach(el => (el.textContent = translations[lang].progressBar));
  document
    .querySelectorAll("[data-lang-key='optimization']")
    .forEach(el => (el.textContent = translations[lang].optimization));
  document
    .querySelectorAll("[data-lang-key='font-image-optimization']")
    .forEach(el => (el.textContent = translations[lang].fontImageOptimization));
  document
    .querySelectorAll("[data-lang-key='adaptive-scrollbar']")
    .forEach(el => (el.textContent = translations[lang].adaptiveScrollbar));
  document
    .querySelectorAll("[data-lang-key='advanced-css']")
    .forEach(el => (el.innerHTML = translations[lang].advancedCss));
  document
    .querySelectorAll("[data-lang-key='font-smoothing']")
    .forEach(el => (el.textContent = translations[lang].fontSmoothing));
  document
    .querySelectorAll("[data-lang-key='text-rendering']")
    .forEach(el => (el.textContent = translations[lang].textRendering));
  document
    .querySelectorAll("[data-lang-key='dark-theme']")
    .forEach(el => (el.textContent = translations[lang].darkTheme));
  document
    .querySelectorAll("[data-lang-key='dark-theme-description']")
    .forEach(el => (el.textContent = translations[lang].darkThemeDescription));
  document
    .querySelectorAll("[data-lang-key='external-libraries']")
    .forEach(el => (el.textContent = translations[lang].externalLibraries));
  document
    .querySelectorAll("[data-lang-key='external-libraries-description']")
    .forEach(
      el => (el.textContent = translations[lang].externalLibrariesDescription)
    );
  document
    .querySelectorAll("[data-lang-key='footer-copyright']")
    .forEach(el => (el.innerHTML = translations[lang].footerCopyright));
  document.querySelector('#theme-toggle').title =
    translations[lang].themeToggle;
  document.querySelector('.lang-toggle').title = translations[lang].langToggle;
  document.querySelector('.close-menu-btn').title =
    translations[lang].closeMenu;
  document.querySelector('.lang-toggle').textContent =
    translations[lang].buttonText;
}

// Switch lang
document.querySelector('.lang-toggle').addEventListener('click', function () {
  const newLang = this.getAttribute('data-lang') === 'en' ? 'pl' : 'en';
  changeLanguage(newLang);
  this.setAttribute('data-lang', newLang);
});

// data-title
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[title]').forEach(el => {
    const titleText = el.getAttribute('title');
    el.setAttribute('data-title', titleText);
    el.removeAttribute('title');
  });

  document.addEventListener('mouseover', e => {
    const target = e.target.closest('[data-title]');
    if (!target) return;

    let tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    tooltip.textContent = target.getAttribute('data-title');
    document.body.appendChild(tooltip);

    const rect = target.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
    tooltip.style.top = `${
      rect.top + window.scrollY + tooltip.offsetHeight + 22
    }px`;

    target.addEventListener('mouseleave', () => {
      tooltip.remove();
    });
  });
});

/* Scroll + header height*/

const scrollToSection = event => {
  event.preventDefault();

  const headerHeight = document.querySelector('header').offsetHeight;
  const targetId = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    const targetPosition = targetSection.offsetTop - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
};

document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', scrollToSection);
});

document.querySelectorAll('.menu-item').forEach(link => {
  link.addEventListener('click', scrollToSection);
});

const contactBtn = document
  .querySelectorAll('[href="#contact"]')
  .forEach(el => {
    el.addEventListener('click', scrollToSection);
  });
