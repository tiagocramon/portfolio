$(window).load(function () {
    /* Loading */
    $('#status').delay(200).fadeOut();
    $('#preloader').delay(300).fadeOut('slow');
    $('body').delay(500).css({ 'overflow': 'visible' });

    /* Menu Toogle */
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    /* FIM Menu Toogle */

    /* maxHeight */
    var maxHeight = Math.max.apply(null, $(".box-codigo-geral").map(function ()
    {
        return $(this).height();
    }).get());
    $(".variaveis-cores .box-codigo").css("height", maxHeight - 32);
    /* FIM maxHeight */

    /* PlaceHolder Select */
    verificaSeExiste();
    function verificaSeExiste(){
        as = document.getElementsByTagName('select');
        for (i = 0; i < as.length; i++){
            document.querySelector('select').classList.add('has-placeholder');
            document.querySelector('select').addEventListener('change', (e) => {
            e.currentTarget.classList.remove('has-placeholder');
            });  
        }
    }
    /* FIM PlaceHolder Select */
    
    /* Largura do Browser */
    var larguraBrowser = $(window).width();
    console.log(larguraBrowser);

    if (larguraBrowser <= 767) {
        url = "resize.html";
        $(location).attr("href", url);
    }

    $(window).on('resize', function () {
        var larguraBrowser = $(window).width();
        if (larguraBrowser <= 767) {
            url = "resize.html";
            $(location).attr("href", url);
        }
    });
    /* FIM Largura do Browser */

    /* Tooltip */
    $('[data-toggle="tooltip"]').tooltip()
    /* FIM Tooltip */

    /* Popover */
    $('[data-toggle="popover"]').popover()
    /* FIM Popover */
});