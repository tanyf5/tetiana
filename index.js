(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function _(){const t=/./;t.toString=function(){console.log("%cWow! You are a real professional! Check out my code here 😏","font-size: 24px; color: white; background-color: #ff69b4; padding: 10px; border-radius: 5px;")},console.log(t)}document.addEventListener("keydown",function(t){t.ctrlKey&&t.shiftKey&&t.key==="I"&&console.log("%cWow! You are a real professional! Check out my code here 😏","font-size: 24px; color: white; background-color: #ff69b4; padding: 10px; border-radius: 5px;")});let f=!1;const O=()=>{window.outerHeight-window.innerHeight>160?f||(f=!0,console.log("%cWow! You are a real professional! Check out my code here 😏","font-size: 24px; color: white; background-color: #ff69b4; padding: 10px; border-radius: 5px;")):f=!1};setInterval(O,500);_();window.addEventListener("scroll",J);function J(){var t=document.body.scrollTop||document.documentElement.scrollTop,e=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=t/e*100;document.getElementById("progressBar").style.width=n+"%"}const o={en:{home:"Home",skills:"Skills",projects:"Projects",contact:"Contact",themeToggle:"Switch to dark mode",langToggle:"Switch to Polish",closeMenu:"Close menu",buttonText:"PL",profession:"As a beginner in front-end development, I bring a fresh perspective and a strong eagerness to learn. I have a solid understanding of core web technologies, and my passion for building intuitive, user-friendly interfaces drives me to continuously improve.",skillsDescr:"Logos above represent the skills I am familiar with. However, it is not just about knowing these tools — it is about how I apply them. Below, you can see real examples of how I use these skills in action. The logos are a visual representation, but the projects below showcase my ability to bring these tools to life and solve real-world problems.",interactive:"interactive",seeMore:"See more",langDescr:"Being multilingual opens up countless opportunities for communication and understanding in diverse environments. Not only does it allow me to connect with people from different cultures, but it also helps me approach problem-solving with a broader perspective. Below, you’ll find the languages I speak.",fluent:"FLUENT",simplyChocolate:"Simply Chocolate is a landing page offering handcrafted chocolates with a user-friendly design. It provides a featuring easy navigation and a modern, visually appealing interface.",webStudio:"The site is fully responsive, ensuring a seamless experience across all devices. A user-friendly interface with smooth navigation and optimized performance, highlighting its capabilities in crafting custom websites for businesses.",smartNotes:"An intuitive note-taking and collaboration platform designed to streamline productivity. The website is fully responsive and optimized for seamless use across devices. A user-friendly interface.",devPortfolio:"This project was a team effort, where I led the development of a portfolio website for a client. As the team lead, I managed the process, ensuring smooth collaboration and delivering a modern, user-friendly site that effectively showcases work of client.",yachtJet:"This website was developed by the team to offer a premium platform for luxury yacht rentals. The project aimed to provide users with an intuitive interface to explore and book unforgettable yacht experiences. The design highlights the luxurious nature of the yachts, while the user experience ensures smooth navigation and seamless booking functionality.",adaptability:"adaptability",detail:"attention to detail",fastLearning:"fast learning",proactiveness:"proactiveness",teamwork:"teamwork",empathy:"empathy",flexibility:"flexibility in communication",teamWorkCard:"team work",reachMe:"Reach me out",location:"Poland, Cracow",name:"Name",subject:"Subject",message:"Message",send:"Send",footerTitle:"Website Description",footerDescr:"This landing is a portfolio website showcasing my skills in creating modern, responsive, and functional websites. My projects are focused on achieving high performance and ease of use for the end users. Here are some key aspects of my site:",htmlCss:"HTML5 and CSS3",htmlCssTitle:"Core technologies for structuring and styling pages, ensuring modern and clean markup with high accessibility",js:"JavaScript (ES6)",jsTitle:"Used for interactive elements of the site, such as animations, sliders, and other dynamic features",responsiveness:"Responsiveness",mobiles:"Mobile Devices",mobilesTitle:"The container's maximum width is 375px",smallTablets:"Small tablets",smallTabletsTitle:"The container's maximum width is 744px",largeTablets:"Large tablets",largeTabletsTitle:"The container's maximum width is 1024px",desktops:"Desktops",desktopsTitle:"The container's maximum width is 1440px",interactiveElements:"Interactive Elements",vanillaTilt:"Vanilla Tilt",vanillaTiltTitle:"A lightweight library for creating 3D effects when hovering over elements",typedJs:"Typed.js",typedJsTitle:"For creating animated text on the site, adding dynamism",sweetalert2:"SweetAlert2",sweetalert2Title:"For implementing beautiful and user-friendly pop-up windows (alerts)",emailJs:"EmailJS",emailJsTitle:"For integrating contact forms, allowing users to send messages without server-side configuration",animationsEffects:"Animations and Effects",cssAnimations:"CSS animations are used for smooth color transitions, as well as hover transitions for buttons and other elements",progressBar:"A progress bar shows the page load progress, adding interactivity and improving the user experience",optimization:"Optimization",fontImageOptimization:"Font and image optimization for fast page loading",adaptiveScrollbar:"Adaptive scrollbar width for different browsers",advancedCss:"Advanced CSS techniques like font-smoothing and text-rendering are applied to ensure high-quality text rendering on all devices.",darkTheme:"Dark Theme",darkThemeDescription:"The website supports a dark theme for a more comfortable viewing experience in low light conditions. All styles automatically change using CSS variables, allowing for efficient management of colors and backgrounds",externalLibraries:"External Libraries",externalLibrariesDescription:"For user interaction, SweetAlert2 is used for pop-ups, and EmailJS integrates with the contact form on the site",footerCopyright:"© <span id='year'></span> Tetiana Bachariewa. All rights reserved"},pl:{home:"Główna",skills:"Umiejętności",projects:"Projekty",contact:"Kontakt",themeToggle:"Przełącz na tryb ciemny",langToggle:"Zmień na angielski",closeMenu:"Zamknij menu",buttonText:"EN",profession:"Jako początkujący programista front-end wnoszę świeże spojrzenie i silną chęć do nauki. Mam solidne zrozumienie podstawowych technologii internetowych, a moja pasja do budowania intuicyjnych, przyjaznych dla użytkownika interfejsów napędza mnie do ciągłego doskonalenia.",skillsDescr:"Powyższe logotypy reprezentują umiejętności, z którymi jestem zaznajomiona. Jednak nie chodzi tylko o znajomość tych narzędzi - chodzi o to, jak je stosuję. Poniżej można zobaczyć prawdziwe przykłady tego, jak wykorzystuję te umiejętności w akcji. Logotypy są wizualną reprezentacją, ale poniższe projekty pokazują moją zdolność do wprowadzania tych narzędzi w życie i rozwiązywania rzeczywistych problemów.",interactive:"interaktywny",seeMore:"Rozwiń",langDescr:"Bycie wielojęzycznym otwiera niezliczone możliwości komunikacji i zrozumienia w różnych środowiskach. Nie tylko pozwala mi to nawiązywać kontakty z ludźmi z różnych kultur, ale także pomaga mi podchodzić do rozwiązywania problemów z szerszej perspektywy. Poniżej znajdziesz języki, którymi się posługuję.",fluent:"BIEGŁY",simplyChocolate:"Simply Chocolate to strona docelowa oferująca ręcznie robione czekoladki o przyjaznym dla użytkownika wyglądzie. Zapewnia łatwą nawigację i nowoczesny, atrakcyjny wizualnie interfejs.",webStudio:"Strona jest w pełni responsywna, zapewniając płynną obsługę na wszystkich urządzeniach. Przyjazny dla użytkownika interfejs z płynną nawigacją i zoptymalizowaną wydajnością, podkreślający jego możliwości w tworzeniu niestandardowych stron internetowych dla firm.",smartNotes:"Intuicyjna platforma do tworzenia notatek i współpracy, zaprojektowana w celu usprawnienia produktywności. Witryna jest w pełni responsywna i zoptymalizowana pod kątem płynnego korzystania na różnych urządzeniach. Przyjazny dla użytkownika interfejs.",devPortfolio:"Ten projekt jest pracą zespołową, w której kierowałam rozwojem strony portfolio dla klienta. Jako lider zespołu zarządzałam procesem, zapewniając płynną współpracę i dostarczając nowoczesną, przyjazną dla użytkownika witrynę, która skutecznie prezentuje pracę klienta.",yachtJet:"Ta strona internetowa została opracowana przez zespół, aby zaoferować platformę premium do wynajmu luksusowych jachtów. Projekt miał na celu zapewnienie użytkownikom intuicyjnego interfejsu do odkrywania i rezerwowania niezapomnianych przeżyć na jachcie. Projekt podkreśla luksusowy charakter jachtów, a doświadczenie użytkownika zapewnia płynną nawigację i bezproblemową funkcjonalność rezerwacji.",adaptability:"adaptacyjność",detail:"dbałość o szczegóły",fastLearning:"szybkie uczenie się",proactiveness:"proaktywność",teamwork:"praca zespołowa",empathy:"empatia",flexibility:"elastyczność w komunikacji",teamWorkCard:"praca zespołowa",reachMe:"Skontaktuj się ze mną",location:"Polska, Kraków",name:"Imię",subject:"Temat",message:"Wiadomość",send:"Wyślij",sentSuccessfuly:"Wysłano!",form_sent_text:"Skontaktuję się z Tobą jak najszybciej",ok_button:"OK",footerTitle:"Opis strony",footerDescr:"Ta strona to witryna portfolio, która prezentuje moje umiejętności w tworzeniu nowoczesnych, responsywnych i funkcjonalnych stron internetowych. Moje projekty skupiają się na osiąganiu wysokiej wydajności i łatwości użytkowania dla końcowego użytkownika. Oto niektóre kluczowe aspekty mojej strony:",htmlCss:"HTML5 i CSS3",htmlCssTitle:"Podstawowe technologie do strukturyzowania i stylizacji stron, zapewniające nowoczesny i czysty kod z wysoką dostępnością",js:"JavaScript (ES6)",jsTitle:"Wykorzystywane do interaktywnych elementów strony, takich jak animacje, suwaki i inne dynamiczne funkcje",responsiveness:"Responsywność",mobiles:"Urządzenia mobilne",mobilesTitle:"Maksymalna szerokość kontenera to 375px",smallTablets:"Małe tablety",smallTabletsTitle:"Maksymalna szerokość kontenera to 744px",largeTablets:"Duże tablety",largeTabletsTitle:"Maksymalna szerokość kontenera to 1024px",desktops:"Komputery stacjonarne",desktopsTitle:"Maksymalna szerokość kontenera to 1440px",interactiveElements:"Elementy interaktywne",vanillaTilt:"Vanilla Tilt",vanillaTiltTitle:"Lekka biblioteka do tworzenia efektów 3D po najechaniu na elementy",typedJs:"Typed.js",typedJsTitle:"Do tworzenia animowanego tekstu na stronie, dodającego dynamiki",sweetalert2:"SweetAlert2",sweetalert2Title:"Do implementacji pięknych i przyjaznych dla użytkownika okienek pop-up (powiadomień)",emailJs:"EmailJS",emailJsTitle:"Do integracji formularzy kontaktowych, umożliwiająca użytkownikom wysyłanie wiadomości bez konfiguracji po stronie serwera",animationsEffects:"Animacje i efekty",cssAnimations:"Animacje CSS są używane do płynnych przejść kolorów oraz przejść przy najechaniu na przyciski i inne elementy",progressBar:"Pasek postępu pokazuje postęp ładowania strony, dodając interaktywność i poprawiając doświadczenie użytkownika",optimization:"Optymalizacja",fontImageOptimization:"Optymalizacja czcionek i obrazów w celu szybszego ładowania strony",adaptiveScrollbar:"Adaptacyjna szerokość paska przewijania dla różnych przeglądarek",advancedCss:"Zaawansowane techniki CSS, takie jak font-smoothing i text-rendering, są stosowane w celu zapewnienia wysokiej jakości renderowania tekstu na wszystkich urządzeniach.",darkTheme:"Ciemny motyw",darkThemeDescription:"Strona internetowa obsługuje ciemny motyw, zapewniając bardziej komfortowe przeglądanie w warunkach słabego oświetlenia. Wszystkie style automatycznie zmieniają się za pomocą zmiennych CSS, co umożliwia efektywne zarządzanie kolorami i tłem.",externalLibraries:"Zewnętrzne biblioteki",externalLibrariesDescription:"Do interakcji użytkownika wykorzystywane są SweetAlert2 do okienek pop-up, a EmailJS do integracji z formularzem kontaktowym na stronie.",footerCopyright:"© <span id='year'></span> Tetiana Bachariewa. Wszystkie prawa zastrzeżone"}};function W(t){document.querySelectorAll("[data-lang-key='home']").forEach(e=>e.textContent=o[t].home),document.querySelectorAll("[data-lang-key='skills']").forEach(e=>e.textContent=o[t].skills),document.querySelectorAll("[data-lang-key='projects']").forEach(e=>e.textContent=o[t].projects),document.querySelectorAll("[data-lang-key='contact']").forEach(e=>e.textContent=o[t].contact),document.querySelectorAll("[data-lang-key='hero-contact']").forEach(e=>e.textContent=o[t].contact),document.querySelectorAll("[data-lang-key='hero-projects']").forEach(e=>e.textContent=o[t].projects),document.querySelectorAll("[data-lang-key='menu-home']").forEach(e=>e.textContent=o[t].home),document.querySelectorAll("[data-lang-key='menu-skills']").forEach(e=>e.textContent=o[t].skills),document.querySelectorAll("[data-lang-key='menu-projects']").forEach(e=>e.textContent=o[t].projects),document.querySelectorAll("[data-lang-key='menu-contact']").forEach(e=>e.textContent=o[t].contact),document.querySelectorAll("[data-lang-key='prof-descr-deskt']").forEach(e=>e.textContent=o[t].profession),document.querySelectorAll("[data-lang-key='prof-descr-mob']").forEach(e=>e.textContent=o[t].profession),document.querySelectorAll("[data-lang-key='section-skills-title']").forEach(e=>e.textContent=o[t].skills),document.querySelectorAll("[data-lang-key='skills-par']").forEach(e=>e.textContent=o[t].skillsDescr),document.querySelectorAll("[data-lang-key='lang-par']").forEach(e=>e.textContent=o[t].langDescr),document.querySelectorAll("[data-lang-key='interactive']").forEach(e=>e.textContent=o[t].interactive),document.querySelectorAll("[data-lang-key='see-more']").forEach(e=>e.textContent=o[t].seeMore),document.querySelectorAll("[data-lang-key='fluent']").forEach(e=>e.textContent=o[t].fluent),document.querySelectorAll("[data-lang-key='section-projects-title']").forEach(e=>e.textContent=o[t].projects),document.querySelectorAll("[data-lang-key='simply-chocolate']").forEach(e=>e.textContent=o[t].simplyChocolate),document.querySelectorAll("[data-lang-key='web-studio']").forEach(e=>e.textContent=o[t].webStudio),document.querySelectorAll("[data-lang-key='smart-notes']").forEach(e=>e.textContent=o[t].smartNotes),document.querySelectorAll("[data-lang-key='dev-portfolio']").forEach(e=>e.textContent=o[t].devPortfolio),document.querySelectorAll("[data-lang-key='yacht-jet']").forEach(e=>e.textContent=o[t].yachtJet),document.querySelectorAll("[data-lang-key='adaptability']").forEach(e=>e.textContent=o[t].adaptability),document.querySelectorAll("[data-lang-key='detail']").forEach(e=>e.textContent=o[t].detail),document.querySelectorAll("[data-lang-key='fast-learning']").forEach(e=>e.textContent=o[t].fastLearning),document.querySelectorAll("[data-lang-key='proactiveness']").forEach(e=>e.textContent=o[t].proactiveness),document.querySelectorAll("[data-lang-key='teamwork']").forEach(e=>e.textContent=o[t].teamwork),document.querySelectorAll("[data-lang-key='empathy']").forEach(e=>e.textContent=o[t].empathy),document.querySelectorAll("[data-lang-key='flexibility']").forEach(e=>e.textContent=o[t].flexibility),document.querySelectorAll("[data-lang-key='team-work']").forEach(e=>e.textContent=o[t].teamWorkCard),document.querySelectorAll("[data-lang-key='section-contact-title']").forEach(e=>e.textContent=o[t].contact),document.querySelectorAll("[data-lang-key='reach-me']").forEach(e=>e.textContent=o[t].reachMe),document.querySelectorAll("[data-lang-key='location']").forEach(e=>e.textContent=o[t].location),document.querySelectorAll("[data-lang-key='name']").forEach(e=>e.textContent=o[t].name),document.querySelectorAll("[data-lang-key='subject']").forEach(e=>e.textContent=o[t].subject),document.querySelectorAll("[data-lang-key='message']").forEach(e=>e.textContent=o[t].message),document.querySelectorAll("[data-lang-key='send']").forEach(e=>e.value=o[t].send),document.querySelectorAll("[data-lang-key='footer-title']").forEach(e=>e.textContent=o[t].footerTitle),document.querySelectorAll("[data-lang-key='footer-descr']").forEach(e=>e.textContent=o[t].footerDescr),document.querySelectorAll("[data-lang-key='html-css']").forEach(e=>{e.innerHTML=`<span class="tech-used-title">${o[t].htmlCss}</span>: ${o[t].htmlCssTitle}`}),document.querySelectorAll("[data-lang-key='js']").forEach(e=>{e.innerHTML=`<span class="tech-used-title">${o[t].js}</span>: ${o[t].jsTitle}`}),document.querySelectorAll("[data-lang-key='responsiveness']").forEach(e=>e.textContent=o[t].responsiveness),document.querySelectorAll("[data-lang-key='mobile']").forEach(e=>{e.innerHTML=`<span class="tech-used-title">${o[t].mobiles}</span>: ${o[t].mobilesTitle}`}),document.querySelectorAll("[data-lang-key='small-tablets']").forEach(e=>{e.innerHTML=`<span class="tech-used-title">${o[t].smallTablets}</span>: ${o[t].smallTabletsTitle}`}),document.querySelectorAll("[data-lang-key='large-tablets']").forEach(e=>{e.innerHTML=`<span class="tech-used-title">${o[t].largeTablets}</span>: ${o[t].largeTabletsTitle}`}),document.querySelectorAll("[data-lang-key='desktops']").forEach(e=>{e.innerHTML=`<span class="tech-used-title">${o[t].desktops}</span>: ${o[t].desktopsTitle}`}),document.querySelectorAll("[data-lang-key='interactive-elements']").forEach(e=>e.textContent=o[t].interactiveElements),document.querySelectorAll("[data-lang-key='vanilla-tilt']").forEach(e=>{e.innerHTML=`<span class="tech-used-title">${o[t].vanillaTilt}</span>: ${o[t].vanillaTiltTitle}`}),document.querySelectorAll("[data-lang-key='typed-js']").forEach(e=>{e.innerHTML=`<span class="tech-used-title">${o[t].typedJs}</span>: ${o[t].typedJsTitle}`}),document.querySelectorAll("[data-lang-key='sweetalert2']").forEach(e=>{e.innerHTML=`<span class="tech-used-title">${o[t].sweetalert2}</span>: ${o[t].sweetalert2Title}`}),document.querySelectorAll("[data-lang-key='emailjs']").forEach(e=>{e.innerHTML=`<span class="tech-used-title">${o[t].emailJs}</span>: ${o[t].emailJsTitle}`}),document.querySelectorAll("[data-lang-key='animations-effects']").forEach(e=>e.textContent=o[t].animationsEffects),document.querySelectorAll("[data-lang-key='css-animations']").forEach(e=>e.textContent=o[t].cssAnimations),document.querySelectorAll("[data-lang-key='progress-bar']").forEach(e=>e.textContent=o[t].progressBar),document.querySelectorAll("[data-lang-key='optimization']").forEach(e=>e.textContent=o[t].optimization),document.querySelectorAll("[data-lang-key='font-image-optimization']").forEach(e=>e.textContent=o[t].fontImageOptimization),document.querySelectorAll("[data-lang-key='adaptive-scrollbar']").forEach(e=>e.textContent=o[t].adaptiveScrollbar),document.querySelectorAll("[data-lang-key='advanced-css']").forEach(e=>e.innerHTML=o[t].advancedCss),document.querySelectorAll("[data-lang-key='font-smoothing']").forEach(e=>e.textContent=o[t].fontSmoothing),document.querySelectorAll("[data-lang-key='text-rendering']").forEach(e=>e.textContent=o[t].textRendering),document.querySelectorAll("[data-lang-key='dark-theme']").forEach(e=>e.textContent=o[t].darkTheme),document.querySelectorAll("[data-lang-key='dark-theme-description']").forEach(e=>e.textContent=o[t].darkThemeDescription),document.querySelectorAll("[data-lang-key='external-libraries']").forEach(e=>e.textContent=o[t].externalLibraries),document.querySelectorAll("[data-lang-key='external-libraries-description']").forEach(e=>e.textContent=o[t].externalLibrariesDescription),document.querySelectorAll("[data-lang-key='footer-copyright']").forEach(e=>e.innerHTML=o[t].footerCopyright),document.querySelector("#theme-toggle").title=o[t].themeToggle,document.querySelector(".lang-toggle").title=o[t].langToggle,document.querySelector(".close-menu-btn").title=o[t].closeMenu,document.querySelector(".lang-toggle").textContent=o[t].buttonText}document.querySelector(".lang-toggle").addEventListener("click",function(){const t=this.getAttribute("data-lang")==="en"?"pl":"en";W(t),this.setAttribute("data-lang",t)});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("[title]").forEach(t=>{const e=t.getAttribute("title");t.setAttribute("data-title",e),t.removeAttribute("title")}),document.addEventListener("mouseover",t=>{const e=t.target.closest("[data-title]");if(!e)return;let n=document.createElement("div");n.className="custom-tooltip",n.textContent=e.getAttribute("data-title"),document.body.appendChild(n);const i=e.getBoundingClientRect();n.style.left=`${i.left+window.scrollX+i.width/2}px`,n.style.top=`${i.top+window.scrollY+n.offsetHeight+22}px`,e.addEventListener("mouseleave",()=>{n.remove()})})});const p=t=>{t.preventDefault();const e=document.querySelector("header").offsetHeight,n=t.target.getAttribute("href"),i=document.querySelector(n);if(i){const a=i.offsetTop-e;window.scrollTo({top:a,behavior:"smooth"})}};document.querySelectorAll(".nav-item").forEach(t=>{t.addEventListener("click",p)});document.querySelectorAll(".menu-item").forEach(t=>{t.addEventListener("click",p)});document.querySelectorAll(".hero-projects-btn").forEach(t=>{t.addEventListener("click",p)});document.querySelectorAll('[href="#contact"]').forEach(t=>{t.addEventListener("click",p)});const c=document.getElementById("theme-toggle"),h=document.body,I=`<svg class="theme-icon" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 1C11 0.447715 11.4477 0 12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1Z" fill="#111111" stroke-width="0.5" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12ZM8.06167 12C8.06167 14.1751 9.82492 15.9383 12 15.9383C14.1751 15.9383 15.9383 14.1751 15.9383 12C15.9383 9.82492 14.1751 8.06167 12 8.06167C9.82492 8.06167 8.06167 9.82492 8.06167 12Z" fill="#111111" stroke-width="0.5"/>
<path d="M20.4853 3.51472C20.0947 3.12419 19.4616 3.12419 19.0711 3.51472L17.6568 4.92893C17.2663 5.31946 17.2663 5.95262 17.6568 6.34315C18.0474 6.73367 18.6805 6.73367 19.0711 6.34315L20.4853 4.92893C20.8758 4.53841 20.8758 3.90524 20.4853 3.51472Z" fill="#111111" stroke-width="0.5"/>
<path d="M1 13C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11H3C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13H1Z" fill="#111111" stroke-width="0.5"/>
<path d="M3.51472 3.51472C3.1242 3.90524 3.1242 4.53841 3.51472 4.92893L4.92894 6.34315C5.31946 6.73367 5.95263 6.73367 6.34315 6.34315C6.73368 5.95262 6.73368 5.31946 6.34315 4.92893L4.92894 3.51472C4.53841 3.12419 3.90525 3.12419 3.51472 3.51472Z" fill="#111111" stroke-width="0.5"/>
<path d="M11 21C11 20.4477 11.4477 20 12 20C12.5523 20 13 20.4477 13 21V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V21Z" fill="#111111" stroke-width="0.5"/>
<path d="M6.34315 17.6569C5.95263 17.2663 5.31946 17.2663 4.92894 17.6569L3.51473 19.0711C3.1242 19.4616 3.1242 20.0948 3.51473 20.4853C3.90525 20.8758 4.53842 20.8758 4.92894 20.4853L6.34315 19.0711C6.73368 18.6805 6.73368 18.0474 6.34315 17.6569Z" fill="#111111" stroke-width="0.5"/>
<path d="M21 13C20.4477 13 20 12.5523 20 12C20 11.4477 20.4477 11 21 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H21Z" fill="#111111" stroke-width="0.5"/>
<path d="M17.6568 17.6569C17.2663 18.0474 17.2663 18.6805 17.6568 19.0711L19.0711 20.4853C19.4616 20.8758 20.0947 20.8758 20.4853 20.4853C20.8758 20.0948 20.8758 19.4616 20.4853 19.0711L19.0711 17.6569C18.6805 17.2663 18.0474 17.2663 17.6568 17.6569Z" fill="#111111" stroke-width="0.5"/>
</svg>`,$=`<svg class="theme-icon" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g transform="scale(-1,1) translate(-24,0)">
    <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" 
      stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>`;function F(){const t=h.classList.toggle("dark-theme");c.innerHTML=t?$:I,c.setAttribute("title",t?"Switch to light mode":"Switch to dark mode"),localStorage.setItem("theme",t?"dark":"light")}document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("theme"),e=window.matchMedia("(prefers-color-scheme: dark)").matches,n=t?t==="dark":e;n&&h.classList.add("dark-theme"),c.innerHTML=n?$:I,c.setAttribute("title",n?"Switch to light mode":"Switch to dark mode")});c.addEventListener("click",F);const y=document.querySelector(".mobile-menu"),d=document.querySelector(".burger-menu"),Z=document.querySelector(".close-menu-btn"),V=document.querySelectorAll(".menu-item"),z=()=>{const t=d.getAttribute("aria-expanded")==="true";d.setAttribute("aria-expanded",!t),y.classList.toggle("is-open"),h.classList.toggle("no-scroll",y.classList.contains("is-open"))},N=t=>{!y.contains(t.target)&&!d.contains(t.target)&&(y.classList.remove("is-open"),d.setAttribute("aria-expanded","false"),h.classList.remove("no-scroll"))};d.addEventListener("click",z);Z.addEventListener("click",z);V.forEach(t=>t.addEventListener("click",z));document.addEventListener("click",N);document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".desktop-menu-btn"),e=document.querySelector(".nav-list");let n=!1;function i(){n||e.classList.add("active")}function a(){setTimeout(()=>{!e.matches(":hover")&&!t.matches(":hover")&&(e.classList.remove("active"),n=!1)},3e3)}t.addEventListener("mouseenter",function(){i()}),e.addEventListener("mouseenter",function(){i()}),t.addEventListener("mouseleave",function(){a()}),e.addEventListener("mouseleave",function(){a()})});document.querySelector(".logos-track").addEventListener("click",function(){this.classList.toggle("paused")});function K(t){return parseFloat(t.toFixed(2)+.5)}const l={decimal(t,e){return K(t/e)},x(t,e){return t.clientX-(e.getBoundingClientRect().left+e.offsetWidth/2)},y(t,e){return t.clientY-(e.getBoundingClientRect().top+e.offsetHeight/2)}},R=(t,e)=>{const n=document.querySelector(":root"),i="--alpha";getComputedStyle(n).getPropertyValue(i).trim();const a=l.decimal(l.x(e,t),t.offsetWidth),r=l.decimal(l.y(e,t),t.offsetHeight);let s=Math.max(a,r);t.style.setProperty(i,s)};function D(t,e){const i=l.x(t,e),a=l.y(t,e),r=i/e.offsetWidth*60,s=a/e.offsetHeight*60,P=[251,218,97],B=[255,90,205],T=.6,A=e.querySelector(".typo");R(A,t),A.style.textShadow=`
        ${r}px ${s}px 0 rgba(${P}, ${T}),
        ${-r}px ${-s}px 0 rgba(${B}, ${T})
      `}function Y(t){D(t,t.currentTarget)}function U(t){D(t.changedTouches[0],t.currentTarget)}const H=document.querySelector("#skills-item");H.addEventListener("mousemove",Y);H.addEventListener("touchmove",U,{passive:!0});const G=document,k=["circle","semi-circle","square","triangle","triangle-2","rectangle"],q=["#836ee5","#fe94b4","#49d2f5","#ff5354","#00b1b4","#ffe465","#0071ff","#03274b"];let X=G.querySelectorAll(".shape");X.forEach(t=>{setInterval(()=>{let e=t.classList;e.forEach(s=>{k.includes(s)&&e.remove(s)}),e.add(k[Math.floor(Math.random()*k.length)]);let n=Math.random()*4-2,i=n>=0?"+ ":"- ",a=Math.random()*4+4;[["left",`calc(50% ${i} ${n}vw)`],["--bounce-variance",`${Math.random()*2-10}vh`],["--base_scale",`${a}vh`],["--rotation",`${Math.random()*180-90}deg`],["--color",q[Math.floor(Math.random()*q.length)]]].forEach(s=>t.style.setProperty(s[0],s[1])),e.contains("bounce-up")||e.add("bounce-up"),e.replace("bounce-down","bounce-up"),setTimeout(()=>e.replace("bounce-up","bounce-down"),400)},740)});const g=document.querySelector(".load-more-skills"),L=document.querySelectorAll("#skills-item");let u=0;const v={mobile:2,tablet:2,desktop:2};function Q(){u=v[S()],j()}function ee(){u+=v[S()],j()}function S(){const t=window.innerWidth;return t<=767?"mobile":t<=1199?"tablet":"desktop"}function j(){L.forEach((t,e)=>{e<u?t.style.display="flex":t.style.display="none"}),u>=L.length?g.style.display="none":g.style.display="block"}window.addEventListener("resize",()=>{u=v[S()],j()});g.addEventListener("click",ee);Q();const te=document.querySelectorAll(".lang-i-speak-span");te.forEach(t=>{new Typed(t,{strings:[t.innerText],typeSpeed:400,showCursor:!1,loop:!0})});const b=document.querySelector(".load-more-projects"),M=document.querySelectorAll(".projects-item");let m=0;const C={mobile:2,tablet:2,desktop:2};function oe(){m=C[x()],E()}function ne(){m+=C[x()],E()}function x(){const t=window.innerWidth;return t<=767?"mobile":t<=1199?"tablet":"desktop"}function E(){M.forEach((t,e)=>{e<m?t.style.display="flex":t.style.display="none"}),m>=M.length?b.style.display="none":b.style.display="block"}window.addEventListener("resize",()=>{m=C[x()],E()});b.addEventListener("click",ne);oe();const ae={en:{sent_successfuly:"Sent!",form_sent_text:"I will contact you as soon as possible",ok_button:"OK"},pl:{sent_successfuly:"Wysłano!",form_sent_text:"Skontaktuję się z Tobą jak najszybciej",ok_button:"OK"}};function w(t,e){return ae[e][t]||t}(function(){emailjs.init({publicKey:"4eTk94HzTNoT8tO49"})})();function ie(){const t=document.querySelector(".lang-toggle").getAttribute("data-lang");Swal.fire({title:w("sent_successfuly",t),text:w("form_sent_text",t),icon:"success",confirmButtonText:w("ok_button",t),showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"},background:"var(--bg-color)",color:"var(--text-color)",confirmButtonColor:"#ff5acd"})}window.onload=function(){document.getElementById("contact-form").addEventListener("submit",function(t){t.preventDefault(),emailjs.sendForm("service_p80kddx","template_hacilqb",this).then(()=>{console.log("SUCCESS!"),this.reset(),ie()},e=>{console.log("FAILED...",e)})})};document.getElementById("year").textContent=new Date().getFullYear();
//# sourceMappingURL=index.js.map
