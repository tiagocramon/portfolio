$(window).load(function () {
    /* Loading */
    $('#status').delay(200).fadeOut();
    $('#preloader').delay(300).fadeOut('slow');
    $('body').delay(500).css({ 'overflow': 'visible' });
});

$(window).load(function () {
    /* Slideshow */
    var opts = {
        fx: 'fade',
        delay: -3500,
        slideResize: 0,
        fit: 1
    }

    $(".slideshow").cycle(opts);

    /* Resize Slideshow */
    var alturaSlideShow = $(".slideshow img").height();
    $(".slideshow").css('width', '100%');
    $(".slideshow").css('height', alturaSlideShow);
    $(window).resize(function () {
        var alturaSlideShow = $(".slideshow img").height();
        $(".slideshow").css('width', '100%');
        $(".slideshow").css('height', alturaSlideShow);
    });

    /* Toasts */
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "2500",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    /* Chama modal exemplo */
    $('#modal-fale-conosco button').click(function () {
        toastr.success('Contato enviado com sucesso.');
        $('#modal-fale-conosco').modal('hide');
    });

    /* Bg circle blue posicao XS */
    var alturaTotal = $(document).height();
    var larguraTotal = $(window).width();
    var alturaBoxAvisamos = $("#avisamos").height();
    var alturaBoxDuvida = $("#duvidas").height();
    var alturaBoxFooter = $("#footer").height();
    var alturaBoxTotal = alturaBoxAvisamos + alturaBoxDuvida + alturaBoxFooter
    if (larguraTotal < 576) {
        $("#bg-circle-blue").css("height", alturaBoxTotal);
        $("#bg-circle-blue").css("top", alturaTotal - alturaBoxTotal - 260);
    }

    else {
        $('#bg-circle-blue').attr('style', '');
    }
    $(window).resize(function () {
        var alturaTotal = $(document).height();
        var larguraTotal = $(window).width();
        var alturaBoxAvisamos = $("#avisamos").height();
        var alturaBoxDuvida = $("#duvidas").height();
        var alturaBoxFooter = $("#footer").height();
        var alturaBoxTotal = alturaBoxAvisamos + alturaBoxDuvida + alturaBoxFooter
        if (larguraTotal < 576) {
            $("#bg-circle-blue").css("height", alturaBoxTotal);
            $("#bg-circle-blue").css("top", alturaTotal - alturaBoxTotal - 210);
        }

        else {
            $('#bg-circle-blue').attr('style', '');
        }
    });

    /* Scroll Reveal */
    /* https://github.com/michalsnik/aos */
    AOS.init({
        // Global settings
        disable: 'mobile' // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    });

    /* Muda a altura do fundo de acordo com o tamanho da pagina */
    var alturaTotalSection = $("#section").height();
    console.log(alturaTotalSection);
    var alturaTotalPagina = $(window).height();
    if (alturaTotalSection > alturaTotalPagina) {
        $("#bg-banner-obrigado").css("height", alturaTotalSection);
    }
    else {
        $("#bg-banner-obrigado").css("height", "100%");
    }

    $(window).resize(function () {
        var alturaTotalSection = $("#section").height();
        var alturaTotalPagina = $(window).height();
        if (alturaTotalSection > alturaTotalPagina) {
            $("#bg-banner-obrigado").css("height", alturaTotalSection);
        }
        else {
            $("#bg-banner-obrigado").css("height", "100%");
        }
    });


    /* Eventos Analytics */
    /* https://tableless.com.br/monitoramento-de-eventos-com-google-analytics/ */
    /* ga('send', 'event', 'Sucesso','Clicou no botão', 'Dados recebidos'); */
    /* https://optimize.google.com */
    /* https://www.optimizely.com/plans/ */

});