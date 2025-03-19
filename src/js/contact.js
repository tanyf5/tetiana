const translations = {
  en: {
    sent_successfuly: 'Sent!',
    form_sent_text: 'I will contact you as soon as possible',
    ok_button: 'OK',
  },
  pl: {
    sent_successfuly: 'Wysłano!',
    form_sent_text: 'Skontaktuję się z Tobą jak najszybciej',
    ok_button: 'OK',
  },
};

function getTranslatedText(key, lang) {
  return translations[lang][key] || key;
}

(function () {
  emailjs.init({
    publicKey: '4eTk94HzTNoT8tO49',
  });
})();

function showSuccessModal() {
  const lang = document.querySelector('.lang-toggle').getAttribute('data-lang');

  Swal.fire({
    title: getTranslatedText('sent_successfuly', lang),
    text: getTranslatedText('form_sent_text', lang),
    icon: 'success',
    confirmButtonText: getTranslatedText('ok_button', lang),
    showClass: {
      popup: 'animate__animated animate__fadeInDown',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp',
    },
    background: 'var(--bg-color)',
    color: 'var(--text-color)',
    confirmButtonColor: '#ff5acd',
  });
}

// Використання у формі
window.onload = function () {
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      emailjs.sendForm('service_p80kddx', 'template_hacilqb', this).then(
        () => {
          console.log('SUCCESS!');
          this.reset();
          showSuccessModal();
        },
        error => {
          console.log('FAILED...', error);
        }
      );
    });
};
