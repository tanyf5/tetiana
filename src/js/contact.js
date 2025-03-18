const modal = document.querySelector('.thank-modal');
const closeModal = document.querySelector('.close-modal-btn');
const backdrop = document.querySelector('.modal-backdrop');
const body = document.body;

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: '4eTk94HzTNoT8tO49',
  });
})();

window.onload = function () {
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      emailjs.sendForm('service_p80kddx', 'template_hacilqb', this).then(
        () => {
          console.log('SUCCESS!');
          document.getElementById('contact-form').reset();
          modal.classList.toggle('visible');
          backdrop.classList.toggle('visible');
          body.classList.toggle('no-scroll');
        },
        error => {
          console.log('FAILED...', error);
        }
      );
    });
};

function closeThankModal(event) {
  event.preventDefault();
  modal.classList.toggle('visible');
  backdrop.classList.toggle('visible');
  body.classList.toggle('no-scroll');
}

closeModal.addEventListener('click', closeThankModal);
backdrop.addEventListener('click', closeThankModal);
