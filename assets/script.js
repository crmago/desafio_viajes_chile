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


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Mostrar mensaje de "Enviado"
    alert('Mensaje enviado correctamente.');

    // Opcionalmente, puedes reiniciar el formulario después de enviarlo
    // this.reset(); // Descomenta esta línea si deseas reiniciar el formulario después de enviarlo
});