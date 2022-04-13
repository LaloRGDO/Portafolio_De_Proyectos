const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_q6symi8';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Contactar!';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Contactar!';
      alert(JSON.stringify(err));
    });
});