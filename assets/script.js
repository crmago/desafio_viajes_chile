$(function () {
    $(window).scroll(function () {
        let navegador = $(".navbar");
        if ($(this).scrollTop() > 100) {
            navegador.css("background", "#328998");
        } else {
            navegador.css("background", "none");
        }
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('exampleInputName1').value.trim();
    let email = document.getElementById('exampleInputEmail1').value.trim();
    let telefono = document.getElementById('exampleInputTelephone1').value.trim();
    let mensaje = document.getElementById('exampleInputMensaje1').value.trim();

    if (nombre === '' || email === '' || telefono === '' || mensaje === '') {
        alert('Por favor, complete todos los campos antes de enviar el formulario.');
    } else {
        let respuesta = prompt('Mensaje enviado correctamente. ¿Te podemos ayudar en algo más? (Sí/No)');
        if (respuesta && respuesta.toLowerCase() === 'si') {
            let respuesta2 = prompt('¿En qué más te podemos ayudar?');
            alert('Gracias por tu respuesta. Nos pondremos en contacto contigo lo antes posible.');
        } else {
            alert('Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.');
        }
    }
});