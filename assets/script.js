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
