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
    sentSuccessfuly: 'Sent successfuly!',
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
    sentSuccessfuly: 'Wysłane pomyślnie!',
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
    .querySelectorAll("[data-lang-key='sent-successfuly']")
    .forEach(el => (el.textContent = translations[lang].sentSuccessfuly));
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

const contactBtn = document.querySelectorAll('[href*="#contact"]');
if (contactBtn) {
  contactBtn.addEventListener('click', scrollToSection);
}
