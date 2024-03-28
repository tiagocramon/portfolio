$(window).load(function () {
    // Loading
    $('#status').delay(200).fadeOut();
    $('#preloader').delay(300).fadeOut('slow');
    $('body').delay(500).css({ 'overflow': 'visible' });

    // Deixa o SVG na forma inline
    /*
    $('img.svg').each(function () {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function (data) {
            var $svg = $(data).find('svg');
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        });
    });
    */

    // Modal Mutirao
    var existeMutirao = document.getElementById('modalMutiraoSaude');
    if (existeMutirao){
        $('#modalMutiraoSaude').modal('show');

    } else {
      
    }

    // Modal Horario Unidades
    var existeHorarioUnidades = document.getElementById('modalHorarioUnidades');
    if (existeHorarioUnidades){
        $('#modalHorarioUnidades').modal('show');

    } else {
      
    }
   

    // Verifica se o Browser é Chrome
    var isChromium = window.chrome;

    if (isChromium) {
        // Banner Home
        $("#banner").addClass("bannerChrome");
        $("#banner").removeClass("bannerNotChrome");

        $("#banner-sm-xs").addClass("bannerResponsiveChrome");
        $("#banner-sm-xs").removeClass("bannerNotResponsiveChrome");

        // Banner Vídeo
        $("#video .img-video").addClass("bannerVideoChrome");
        $("#video .img-video").removeClass("bannerVideoNotChrome");
    }
    else {
        // Banner Home
        $("#banner").addClass("bannerNotChrome");
        $("#banner").removeClass("bannerChrome");

        $("#banner-sm-xs").addClass("bannerNotResponsiveChrome");
        $("#banner-sm-xs").removeClass("bannerResponsiveChrome");

        // Banner Vídeo
        $("#video .img-video").addClass("bannerVideoNotChrome");
        $("#video .img-video").removeClass("bannerVideoChrome");

    }

    // Modificacoes nos breakpoints
    // Largura do Browser
    var larguraBrowser = $(window).width();

    // Adiciona classe CONTAINER no .box-header
    if (larguraBrowser <= 1199) {
        $(".box-header").addClass('container');
        $(".box-header-menu").addClass('container');
    }

    else {
        $(".box-header").removeClass('container');
        $(".box-header-menu").removeClass('container');
    }

    // Adiciona classe CONTAINER no .box-video
    if (larguraBrowser <= 991) {
        $(".box-video").addClass('container');
    }

    else {
        $(".box-video").removeClass('container');
    }

    // Adiciona classe CONTAINER no .box-footer-chamada
    if (larguraBrowser <= 767) {
        $(".box-footer-chamada").addClass('container');
    }

    else {
        $(".box-footer-chamada").removeClass('container');
    }

    // Modificacoes nos breakpoints no RESIZE
    /*
    $(window).on('resize', function () {
        location.reload();
    });
    */

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

    // FUNCAO - Abre e fecha a Sidebar
    var larguraBrowserSidebar = $(window).width();
    if (larguraBrowserSidebar >= 992) {
        $(".btn-perfil").on("click", function () {
            openNav();
        });

        $(".bg-darken").on("click", function () {
            closeNav();
        });

        $(".box-profile .close-btn").on("click", function () {
            closeNav();
        });

        function openNav() {
            $(".sidenav").css("width", "360px");
            $(".bg-darken").fadeIn(400);
            document.getElementById("mySidenav").style.right = "0";
            $("body").css("overflow", "hidden");
        }

        function closeNav() {
            $(".sidenav").css("width", "360px");
            $(".bg-darken").fadeOut(400);
            document.getElementById("mySidenav").style.right = "-360px";
            $("body").css("overflow", "auto");
        }
    }

    else {
        $(".btn-perfil").on("click", function () {
            openNav();
        });

        $(".bg-darken").on("click", function () {
            closeNav();
        });

        $(".box-profile .close-btn").on("click", function () {
            closeNav();
        });

        function openNav() {
            $(".sidenav").css("width", "100%");
            $(".bg-darken").fadeIn(400);
            document.getElementById("mySidenav").style.right = "0";
            $("body").css("overflow", "hidden");
        }

        function closeNav() {
            $(".sidenav").css("width", "100%");
            $(".bg-darken").fadeOut(400);
            document.getElementById("mySidenav").style.right = "-100%";
            $("body").css("overflow", "auto");
        }
    }

    // FUNCAO - Abre e fecha a SidebarOrcamentos
    var larguraBrowserSidebarOrcamento = $(window).width();
    if (larguraBrowserSidebarOrcamento >= 992) {
        $(".icon-orcamento").on("click", function () {
            openNav();
        });

        $(".bg-darken").on("click", function () {
            closeNav();
        });

        $(".box-header-orcamento .close-btn").on("click", function () {
            closeNav();
        });

        function openNav() {
            $(".sidenav-orcamento").css("width", "360px");
            $(".bg-darken").fadeIn(400);
            document.getElementById("mySidenavOrcamento").style.right = "0";
            $("body").css("overflow", "hidden");
        }

        function closeNav() {
            $(".sidenav-orcamento").css("width", "360px");
            $(".bg-darken").fadeOut(400);
            document.getElementById("mySidenavOrcamento").style.right = "-360px";
            $("body").css("overflow", "auto");
        }
    }

    else {
        $(".icon-orcamento").on("click", function () {
            openNav();
        });

        $(".bg-darken").on("click", function () {
            closeNav();
        });

        $(".box-header-orcamento .close-btn").on("click", function () {
            closeNav();
        });

        function openNav() {
            $(".sidenav-orcamento").css("width", "100%");
            $(".bg-darken").fadeIn(400);
            document.getElementById("mySidenavOrcamento").style.right = "0";
            $("body").css("overflow", "hidden");
            $(".icon-orcamento").css("box-shadow", "none");
        }

        function closeNav() {
            $(".sidenav-orcamento").css("width", "100%");
            $(".bg-darken").fadeOut(400);
            document.getElementById("mySidenavOrcamento").style.right = "-100%";
            $("body").css("overflow", "auto");
            $(".icon-orcamento").css("box-shadow", "0px 10px 20px rgba(0, 0, 0, 0.25)");
        }
    }

    // Carousel Equipe
    $('#equipe .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: false,
        responsive: {
            1200: {
                items: 4,
                dots: true,
                loop: false
            },
            992: {
                items: 3,
                dots: true,
                loop: false
            },
            768: {
                items: 2,
                dots: true,
                loop: false
            },
            576: {
                items: 2,
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

    // Carousel Logos
    $('#estao-comentando .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: false,
        responsive: {
            1200: {
                items: 5,
                dots: true,
                loop: false
            },
            992: {
                items: 5,
                dots: true,
                loop: false
            },
            768: {
                items: 3,
                dots: true,
                loop: false
            },
            576: {
                items: 2,
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

    // Apoiadores
    $('#apoiadores .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: false,
        responsive: {
            1200: {
                items: 5,
                dots: true,
                loop: false
            },
            992: {
                items: 5,
                dots: true,
                loop: false
            },
            768: {
                items: 3,
                dots: true,
                loop: false
            },
            576: {
                items: 2,
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

    // Carousel Servicos
    $('#banner-servicos-listagem .owl-carousel').owlCarousel({
        items: 6,
        dots: false,
        loop: false,
        margin: 0,
        stagePadding: 0,
        mouseDrag: false,
        URLhashListener: true,
        startPosition: 'URLHash',
        responsive: {
            1200: {
                stagePadding: 0,
            },
            992: {
                stagePadding: 0,
            },
            768: {
                center: true,
                loop: true,
                items: 4,
                stagePadding: 0,
            },
            576: {
                center: true,
                loop: true,
                items: 3,
                stagePadding: 32,
            },
            0: {
                center: true,
                loop: true,
                items: 2,
                stagePadding: 0,
            }
        }
    });

    // Carousel Passos Funil
    $('#funil .owl-carousel').owlCarousel({
        loop: false,
        margin: 30,
        mouseDrag: false,
        URLhashListener: true,
        startPosition: 'URLHash',
        responsive: {
            1200: {
                items: 4,
                dots: false,
                loop: false
            },
            992: {
                items: 4,
                dots: false,
                loop: false
            },
            768: {
                items: 1,
                dots: false,
                center: false,
                loop: true,
            },
            576: {
                items: 1,
                dots: false,
                center: false,
                loop: true,
            },
            0: {
                items: 1,
                dots: false,
                center: false,
                loop: true,
            }
        }
    });

    // Centraliza item ativo na tela - Serviços
    if ($(".active-consultas").length) {
        $('#banner-servicos-listagem .owl-carousel').trigger('to.owl.carousel', 0)
    }

    if ($(".active-exames").length) {
        $('#banner-servicos-listagem .owl-carousel').trigger('to.owl.carousel', 1)
    }

    if ($(".active-odonto").length) {
        $('#banner-servicos-listagem .owl-carousel').trigger('to.owl.carousel', 2)
    }

    if ($(".active-checkup").length) {
        $('#banner-servicos-listagem .owl-carousel').trigger('to.owl.carousel', 3)
    }

    if ($(".active-vacinas").length) {
        $('#banner-servicos-listagem .owl-carousel').trigger('to.owl.carousel', 4)
    }

    if ($(".active-cirurgias").length) {
        $('#banner-servicos-listagem .owl-carousel').trigger('to.owl.carousel', 5)
    }

    // Ativa/Centraliza item ativo na tela - Pagamento
    if ($(".active-pagamento").length) {
        $('#funil .owl-carousel').trigger('to.owl.carousel', 3)
    }

    // Caso não tenha navagação dots no slider, tirar o Margin Bottom
    var disableEquipe = $("#equipe .owl-dots").hasClass("disabled");
    if (disableEquipe == true) {
        $("#equipe .owl-stage-outer").css("margin-bottom", "0");
    }

    var disableEstaoComentando = $("#estao-comentando .owl-dots").hasClass("disabled");
    if (disableEstaoComentando == true) {
        $("#estao-comentando .owl-stage-outer").css("margin-bottom", "0");
    }

    // alturaNomeEquipe
    var alturaNomeEquipe = 0;
    $(".box-equipe h3").each(function () {
        if ($(this).height() > alturaNomeEquipe) { alturaNomeEquipe = $(this).height(); }
    });
    $(".box-equipe h3").height(alturaNomeEquipe);

    // alturaContentAgendar
    // Ver se vai usar
    chamaAlturaContentAgendar();
    function chamaAlturaContentAgendar() {
        var alturaContentAgendar = 0;
        $("#detalhes-servicos-meu-doutor .content").each(function () {
            if ($(this).height() > alturaContentAgendar) { alturaContentAgendar = $(this).height(); }
        });
        $("#detalhes-servicos-meu-doutor .sidebar-agendar").css("min-height", alturaContentAgendar);
        $("#detalhes-servicos-meu-doutor .sidebar-nao-agendar").css("min-height", alturaContentAgendar);
    }

    var larguraBrowser = $(window).width();
    console.log(larguraBrowser);
    if (larguraBrowser >= 991) {
        chamaAlturaContentAgendar();
    }
    else {
        $("#detalhes-servicos-meu-doutor .sidebar-agendar").css("min-height", "auto");
        $("#detalhes-servicos-meu-doutor .sidebar-nao-agendar").css("min-height", "auto");
    }

    // alturaTxtChamadaFooter
    var alturaTxtChamadaFooter = 0;
    $(".box-footer-chamada .txt").each(function () {
        if ($(this).height() > alturaTxtChamadaFooter) { alturaTxtChamadaFooter = $(this).height(); }
    });
    $(".box-footer-chamada .txt").height(alturaTxtChamadaFooter);

    // alturaTituloBoxChamadaFooter
    // modifica a posicao do icone e o padding top do box
    var alturaTituloBoxChamadaFooter = 0;
    $(".box-footer-chamada h2").each(function () {
        if ($(this).height() > alturaTituloBoxChamadaFooter) { alturaTituloBoxChamadaFooter = $(this).height(); }
    });

    var alturaTituloBoxChamadaFooter = Math.max.apply(null, $(".box-footer-chamada h2").map(function () {
        return $(this).height();
    }).get());
    if (alturaTituloBoxChamadaFooter == "24" || alturaTituloBoxChamadaFooter == "28") {
        $(".box-footer-chamada img").css("margin-top", "-15px");

        if (larguraBrowserSidebar >= 992) {
            $(".box-footer-chamada-esquerda .box-footer-chamada").css("padding-top", "95px");
            $(".box-footer-chamada-direita .box-footer-chamada").css("padding-top", "95px");
        }
        else if (larguraBrowserSidebar <= 991) {
            $(".box-footer-chamada-esquerda .box-footer-chamada").css("padding-top", "55px");
            $(".box-footer-chamada-direita .box-footer-chamada").css("padding-top", "55px");
        }
    }
    else if (alturaTituloBoxChamadaFooter == "48") {
        $(".box-footer-chamada img").css("margin-top", "-7px");
        if (larguraBrowserSidebar >= 992) {
            $(".box-footer-chamada-esquerda .box-footer-chamada").css("padding-top", "87px");
            $(".box-footer-chamada-direita .box-footer-chamada").css("padding-top", "87px");
        }
        else if (larguraBrowserSidebar <= 991) {
            $(".box-footer-chamada-esquerda .box-footer-chamada").css("padding-top", "47px");
            $(".box-footer-chamada-direita .box-footer-chamada").css("padding-top", "47px");
        }
    }

    // alturaPassosFunil
    var alturaPassosFunil = 0;
    $(".box-passo-funil .txt").each(function () {
        if ($(this).height() > alturaPassosFunil) { alturaPassosFunil = $(this).height(); }
    });
    $(".box-passo-funil .txt").height(alturaPassosFunil);

    // larguraVerPrecoFunil
    verLarguraVerPrecoFunil();
    function verLarguraVerPrecoFunil() {
        var larguraVerPrecoFunil = 0;
        $(".total .box-ver-preco").each(function () {
            if ($(this).width() > larguraVerPrecoFunil) { larguraVerPrecoFunil = $(this).width(); }
        });
        $(".resumo .preco").width(larguraVerPrecoFunil);
        $(".desconto-pagamento-online h3").width(larguraVerPrecoFunil);
    }

    // larguraDadosAgendamento
    larguraDadosAgendamento();
    function larguraDadosAgendamento() {
        if (larguraBrowserSidebar >= 576) {
            var larguraDadosAgendamentoTitulo = 0;
            $(".dados-agendamento h3").each(function () {
                if ($(this).width() > larguraDadosAgendamentoTitulo) { larguraDadosAgendamentoTitulo = $(this).width(); }
            });
            $(".dados-agendamento h3").width(larguraDadosAgendamentoTitulo);

            var larguraDadosAgendamentoTexto = 0;
            $(".dados-agendamento li").each(function () {
                if ($(this).width() > larguraDadosAgendamentoTexto) { larguraDadosAgendamentoTexto = $(this).width(); }
            });
            $(".dados-agendamento .txt").width(larguraDadosAgendamentoTexto - larguraDadosAgendamentoTitulo - 16);
        }
        else {
            var larguraDadosAgendamentoTexto = 0;
            $(".dados-agendamento li").each(function () {
                if ($(this).width() > larguraDadosAgendamentoTexto) { larguraDadosAgendamentoTexto = $(this).width(); }
            });
            $(".dados-agendamento .txt").width(larguraDadosAgendamentoTexto);
        }
    }

    // Modificar o collapse quando for MD, SM e XS
    if (larguraBrowserSidebar <= 991) {
        $(".botoes-institucional .collapse").removeClass("show");
        $(".botoes-ajuda .collapse").removeClass("show");
        $(".botoes-pacientes .collapse").removeClass("show");
        $(".pesquisa .collapse").removeClass("show");
    }

    // Inclue a class "active" no botao filtro da pesquisa
    $(".pesquisa button").on("click", function () {
        $(this).toggleClass('active');
    });

    // Travar pagar online depois do scroll
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 225) {
            $("#box-pagar-fixed").css("position", "relative");
            $("#box-pagar-fixed").css("margin-top", "-8px");
        }
        else {
            $("#box-pagar-fixed").css("position", "fixed");
            $("#box-pagar-fixed").css("margin-top", "0");
        }
    });

    // On Resize
    $(window).on('resize', function () {
        verLarguraVerPrecoFunil();
    });

    /* Tooltip */
    $('[data-toggle="tooltip"]').tooltip({
        placement: "left"
    });
    /* FIM Tooltip */

    /* Popover */
    $('[data-toggle="popover"]').popover();
    /* FIM Popover */

    // Verifica se input foi preenchido
    $("#btn-pagar-cartao").click(function (e) {
        // bloqueando envio do form
        e.preventDefault();
        var erros = 0;

        // verifica se ha campos vazios
        $("#pagar-cartao input").each(function () {
            // conta erros
            if ($(this).val() == "") {
                $(this).addClass('error');
                erros++;
            } else {
                $(this).removeClass('error');
            }
        });

        // verifica se ha erros
        if (erros > 0) {
            $(".alertErro").addClass('d-block');
            $(".alertErro p").html('Preencha os campos em vermelho');
        } else {
            //return true;
            $("#pagar-cartao").submit();
        }
    });


    // Mudar texto Sucesso Agendamento
    var larguraBrowser = $(window).width();
    if (larguraBrowser <= 575) {
        $("#btn-pagar-online").html("Pagar com desconto de R$ 10");
    }
    else {
        $("#btn-pagar-online").html("Pagar online com desconto de R$ 10");
    }





    ////////////////////
    // PAGINA AREA LOGADA
    ////////////////////
    // Carousel Area Logada
    $('#area-logada .botoes .owl-carousel').owlCarousel({
        items: 6,
        dots: false,
        loop: false,
        margin: 0,
        stagePadding: 0,
        mouseDrag: false,
        URLhashListener: true,
        startPosition: 'URLHash',
        responsive: {
            1200: {
                stagePadding: 0,
            },
            992: {
                stagePadding: 0,
            },
            768: {
                center: true,
                loop: true,
                items: 4,
                stagePadding: 0,
            },
            576: {
                center: true,
                loop: true,
                items: 3,
                stagePadding: 32,
            },
            0: {
                center: true,
                loop: true,
                items: 2,
                stagePadding: 0,
            }
        }
    });

    // Carousel Retorno
    $('#area-logada .retorno .owl-carousel').owlCarousel({
        items: 1,
        dots: true,
        loop: false,
        margin: 0,
        stagePadding: 0,
        mouseDrag: false,
        URLhashListener: true,
        startPosition: 'URLHash'
    });

    // Carousel Visitado por voce
    $('#listagem-servicos-unidades .visitado-por-voce .owl-carousel').owlCarousel({
        items: 1,
        dots: true,
        loop: false,
        margin: 0,
        stagePadding: 0,
        mouseDrag: false,
        URLhashListener: true,
        startPosition: 'URLHash'
    });    

    // Carousel Escolhido por voce
    $('#listagem-servicos-doutores .escolhido-por-voce .owl-carousel').owlCarousel({
        items: 1,
        dots: true,
        loop: false,
        margin: 0,
        stagePadding: 0,
        mouseDrag: false,
        URLhashListener: true,
        startPosition: 'URLHash'
    });        

    if (larguraBrowser >= 992) {
        // alturaBoxChamada
        verAlturaBoxChamadaTitulo();
        function verAlturaBoxChamadaTitulo() {
            var alturaBoxChamadaTitulo = 0;
            $(".chamadas .box-chamada h2").each(function () {
                if ($(this).height() > alturaBoxChamadaTitulo) { alturaBoxChamadaTitulo = $(this).height(); }
            });
            $(".chamadas .box-chamada h2").height(alturaBoxChamadaTitulo);
        }

        verAlturaBoxChamada();
        function verAlturaBoxChamada() {
            var alturaBoxChamada = 0;
            $(".chamadas .box-chamada").each(function () {
                if ($(this).height() > alturaBoxChamada) { alturaBoxChamada = $(this).height(); }
            });
            $(".chamadas .box-chamada").height(alturaBoxChamada);
        }
    }
    ////////////////////
    // FIM PAGINA AREA LOGADA
    ////////////////////    

    


});