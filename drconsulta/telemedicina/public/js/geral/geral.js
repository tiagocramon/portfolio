$(window).load(function () {
    // Loading
    $("#status")
        .delay(200)
        .fadeOut();
    $("#preloader")
        .delay(300)
        .fadeOut("slow");
    $("body")
        .delay(500)
        .css({ overflow: "visible" });

    // FUNCAO - Abre e fecha o Menu
    $(".menu-hamburguer").on("click", function () {
        openMenu();
    });

    $(".box-header-menu .close-btn").on("click", function () {
        closeMenu();
    });

    function openMenu() {
        $(".menu").fadeIn(400);
        $("body").css("overflow", "hidden");
    }

    function closeMenu() {
        $(".menu").fadeOut(400);
        $("body").css("overflow", "auto");
    }

    // Carousel Blog
    $("#blog .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: false,
        responsive: {
            1200: {
                items: 2,
                dots: true,
                loop: false
            },
            992: {
                items: 2,
                dots: true,
                loop: false
            },
            768: {
                items: 1,
                dots: true,
                loop: false
            },
            576: {
                items: 1,
                dots: true,
                loop: false
            },
            0: {
                items: 1,
                dots: true,
                loop: false
            }
        }
    });

    // Caso não tenha navagação dots no slider, tirar o Margin Bottom
    var disableEquipe = $("#equipe .owl-dots").hasClass("disabled");
    if (disableEquipe == true) {
        $("#equipe .owl-stage-outer").css("margin-bottom", "0");
    }

    var disableEstaoComentando = $("#estao-comentando .owl-dots").hasClass(
        "disabled"
    );
    if (disableEstaoComentando == true) {
        $("#estao-comentando .owl-stage-outer").css("margin-bottom", "0");
    }

    /* Tooltip */
    $('[data-toggle="tooltip"]').tooltip({
        placement: "left"
    });
    /* FIM Tooltip */

    /* Popover */
    $('[data-toggle="popover"]').popover();
    /* FIM Popover */

    /* Verifica se #botao-flutuante-agendar existe */
    var botaoFlutuante = document.getElementById("botao-flutuante-agendar");

    if (botaoFlutuante) {
        $("#footer").css("paddingBottom", "80px");
    }

    // Modificacoes nos breakpoints
    // Largura do Browser
    var larguraBrowser = $(window).width();

    // Adiciona classe CONTAINER no .box-header
    if (larguraBrowser <= 1199) {
        $(".box-header").addClass("container");
        $(".box-header-menu").addClass("container");
    } else {
        $(".box-header").removeClass("container");
        $(".box-header-menu").removeClass("container");
    }

    // Adiciona classe CONTAINER no .botao-flutuante-agendar
    if (larguraBrowser <= 991) {
        $("#botao-flutuante-agendar").addClass("container");
    } else {
        $("#botao-flutuante-agendar").removeClass("container");
    }

    // alturaBoxVantagens
    if ((larguraBrowser >= 992) && (larguraBrowser <= 1199)) {
        var alturaBoxVantagens = 0;
        $(".box-vantagens").each(function () {
            if ($(this).height() > alturaBoxVantagens) {
                alturaBoxVantagens = $(this).height();
            }
        });
        $(".box-vantagens").height(alturaBoxVantagens);
    }
    else {
        $(".box-vantagens").height("auto");
    }

    // alturaBoxComoAgendar
    if (larguraBrowser >= 992) {
        var alturaBoxComoAgendar = 0;
        $(".box-como-agendar").each(function () {
            if ($(this).height() > alturaBoxComoAgendar) {
                alturaBoxComoAgendar = $(this).height();
            }
        });
        $(".box-como-agendar").height(alturaBoxComoAgendar);
    }
    else {
        $(".box-como-agendar").height("auto");
    }

    // Modificacoes nos breakpoints no RESIZE
    $(window).on("resize", function () {
        var larguraBrowser = $(window).width();

        // Adiciona classe CONTAINER no .box-header
        if (larguraBrowser <= 1199) {
            $(".box-header").addClass("container");
            $(".box-header-menu").addClass("container");
        } else {
            $(".box-header").removeClass("container");
            $(".box-header-menu").removeClass("container");
        }

        // Adiciona classe CONTAINER no .botao-flutuante-agendar
        if (larguraBrowser <= 991) {
            $("#botao-flutuante-agendar").addClass("container");
            var botaoFlutuante = document.getElementById("botao-flutuante-agendar");

            if (botaoFlutuante) {
                console.log("Existe");
                $("#footer").css("paddingBottom", "80px");
            }
        } else {
            $("#botao-flutuante-agendar").removeClass("container");
        }

        // alturaBoxVantagens
        if ((larguraBrowser >= 992) && (larguraBrowser <= 1199)) {
            var alturaBoxVantagens = 0;
            $(".box-vantagens").each(function () {
                if ($(this).height() > alturaBoxVantagens) {
                    alturaBoxVantagens = $(this).height();
                }
            });
            $(".box-vantagens").height(alturaBoxVantagens);
        }
        else {
            $(".box-vantagens").height("auto");
        }

        // alturaBoxComoAgendar
        verificaLarguraBrowser();
        function verificaLarguraBrowser() {
            var alturaBoxComoAgendar = 0;
            if (larguraBrowser > 1199) {
                $(".box-como-agendar").height("auto");
                $(".box-como-agendar").each(function () {
                    if ($(this).height() > alturaBoxComoAgendar) {
                        alturaBoxComoAgendar = $(this).height();
                    }
                });
                $(".box-como-agendar").height(alturaBoxComoAgendar);
            }
            else if ((larguraBrowser >= 992) && (larguraBrowser <= 1199)) {
                $(".box-como-agendar").height("auto");
                $(".box-como-agendar").each(function () {
                    if ($(this).height() > alturaBoxComoAgendar) {
                        alturaBoxComoAgendar = $(this).height();
                    }
                });
                $(".box-como-agendar").height(alturaBoxComoAgendar);
            }
            else {
                $(".box-como-agendar").height("auto");
            }
        }
    });
});
