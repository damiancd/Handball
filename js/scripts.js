const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  if (validateForm()) {
    alert('Formulario enviado! serás contactado a la brevedad. Muchas gracias!');
    form.reset(); // Limpiar el formulario después de enviarlo
  }
});

function validateForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '') {
    alert('Por favor, ingresa tu nombre');
    nameInput.focus();
    return false;
  }

  if (email === '') {
    alert('Por favor, ingresa tu correo electrónico');
    emailInput.focus();
    return false;
  }

  if (message === '') {
    alert('Por favor, ingresa un mensaje');
    messageInput.focus();
    return false;
  }

  return true; // El formulario es válido
}
