document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
$(window).load(function () {
    /* Variáveis */
    var star = "";
    var enviarNPS = "inativo";
    var enviarMedico = "inativo";
    var enviarRecepcao = "inativo";
    var memberGetMember = "inativo";
    /* Fim Variáveis */

    /* Clique em cada estrela - rating - MÉDICO */
    $(".medico .star-1").on("click", function () {
        star = "star1";
        $(".medico .star-1").css('color', '#005DF9');
        $(".medico .star-2").css('color', '#E5E5E5');
        $(".medico .star-3").css('color', '#E5E5E5');
        $(".medico .star-4").css('color', '#E5E5E5');
        $(".medico .star-5").css('color', '#E5E5E5');
        $(".medico .four-stars-or-less").css('display', 'flex');
        $(".medico .five-stars").css('display', 'none');
        $("#footer .enviar-medico").css('opacity', '0.5');
        $('.answers h3').text('NÃO GOSTEI');

        $(".botao-answers").removeClass("button-ativo-vote");

        enviarMedico = "inativo";
        funcEnviarMedico();

    });

    $(".medico .star-2").on("click", function () {
        star = "star2";
        $(".medico .star-1").css('color', '#005DF9');
        $(".medico .star-2").css('color', '#005DF9');
        $(".medico .star-3").css('color', '#E5E5E5');
        $(".medico .star-4").css('color', '#E5E5E5');
        $(".medico .star-5").css('color', '#E5E5E5');
        $(".medico .four-stars-or-less").css('display', 'flex');
        $(".medico .five-stars").css('display', 'none');
        $("#footer .enviar-medico").css('opacity', '0.5');
        $('.answers h3').text('REGULAR');

        $(".botao-answers").removeClass("button-ativo-vote");

        enviarMedico = "inativo";
        funcEnviarMedico();
    });

    $(".medico .star-3").on("click", function () {
        star = "star3";
        $(".medico .star-1").css('color', '#005DF9');
        $(".medico .star-2").css('color', '#005DF9');
        $(".medico .star-3").css('color', '#005DF9');
        $(".medico .star-4").css('color', '#E5E5E5');
        $(".medico .star-5").css('color', '#E5E5E5');
        $(".medico .four-stars-or-less").css('display', 'flex');
        $(".medico .five-stars").css('display', 'none');
        $("#footer .enviar-medico").css('opacity', '0.5');
        $('.answers h3').text('BOM');

        $(".botao-answers").removeClass("button-ativo-vote");

        enviarMedico = "inativo";
        funcEnviarMedico();
    });

    $(".medico .star-4").on("click", function () {
        star = "star4";
        $(".medico .star-1").css('color', '#005DF9');
        $(".medico .star-2").css('color', '#005DF9');
        $(".medico .star-3").css('color', '#005DF9');
        $(".medico .star-4").css('color', '#005DF9');
        $(".medico .star-5").css('color', '#E5E5E5');
        $(".medico .four-stars-or-less").css('display', 'flex');
        $(".medico .five-stars").css('display', 'none');
        $("#footer .enviar-medico").css('opacity', '0.5');
        $('.answers h3').text('MUITO BOM');

        $(".botao-answers").removeClass("button-ativo-vote");

        enviarMedico = "inativo";
        funcEnviarMedico();
    });

    $(".medico .star-5").on("click", function () {
        $(".medico .star-1").css('color', '#005DF9');
        $(".medico .star-2").css('color', '#005DF9');
        $(".medico .star-3").css('color', '#005DF9');
        $(".medico .star-4").css('color', '#005DF9');
        $(".medico .star-5").css('color', '#005DF9');
        $(".medico .four-stars-or-less").css('display', 'none');
        $(".medico .five-stars").css('display', 'block');
        $("#footer .enviar-medico").css('opacity', '1');
        $('.answers h3').text('EXCELENTE');

        enviarMedico = "ativo";
        funcEnviarMedico();
    });
    /* Fim Clique em cada estrela - rating - MÉDICO */

    /* Clique em cada estrela - rating - RECEPÇÃO */
    $(".recepcao .star-1").on("click", function () {
        star = "star1";
        $(".recepcao .star-1").css('color', '#005DF9');
        $(".recepcao .star-2").css('color', '#E5E5E5');
        $(".recepcao .star-3").css('color', '#E5E5E5');
        $(".recepcao .star-4").css('color', '#E5E5E5');
        $(".recepcao .star-5").css('color', '#E5E5E5');
        $(".recepcao .four-stars-or-less").css('display', 'flex');
        $(".recepcao .five-stars").css('display', 'none');
        $("#footer .enviar-recepcao").css('opacity', '0.5');
        $('.answers h3').text('NÃO GOSTEI');

        $(".botao-answers").removeClass("button-ativo-vote");

        enviarRecepcao = "inativo";
        funcEnviarRecepcao();

    });

    $(".recepcao .star-2").on("click", function () {
        star = "star2";
        $(".recepcao .star-1").css('color', '#005DF9');
        $(".recepcao .star-2").css('color', '#005DF9');
        $(".recepcao .star-3").css('color', '#E5E5E5');
        $(".recepcao .star-4").css('color', '#E5E5E5');
        $(".recepcao .star-5").css('color', '#E5E5E5');
        $(".recepcao .four-stars-or-less").css('display', 'flex');
        $(".recepcao .five-stars").css('display', 'none');
        $("#footer .enviar-recepcao").css('opacity', '0.5');
        $('.answers h3').text('REGULAR');

        $(".botao-answers").removeClass("button-ativo-vote");

        enviarRecepcao = "inativo";
        funcEnviarRecepcao();
    });

    $(".recepcao .star-3").on("click", function () {
        star = "star3";
        $(".recepcao .star-1").css('color', '#005DF9');
        $(".recepcao .star-2").css('color', '#005DF9');
        $(".recepcao .star-3").css('color', '#005DF9');
        $(".recepcao .star-4").css('color', '#E5E5E5');
        $(".recepcao .star-5").css('color', '#E5E5E5');
        $(".recepcao .four-stars-or-less").css('display', 'flex');
        $(".recepcao .five-stars").css('display', 'none');
        $("#footer .enviar-recepcao").css('opacity', '0.5');
        $('.answers h3').text('BOM');

        $(".botao-answers").removeClass("button-ativo-vote");

        enviarRecepcao = "inativo";
        funcEnviarRecepcao();
    });

    $(".recepcao .star-4").on("click", function () {
        star = "star4";
        $(".recepcao .star-1").css('color', '#005DF9');
        $(".recepcao .star-2").css('color', '#005DF9');
        $(".recepcao .star-3").css('color', '#005DF9');
        $(".recepcao .star-4").css('color', '#005DF9');
        $(".recepcao .star-5").css('color', '#E5E5E5');
        $(".recepcao .four-stars-or-less").css('display', 'flex');
        $(".recepcao .five-stars").css('display', 'none');
        $("#footer .enviar-recepcao").css('opacity', '0.5');
        $('.answers h3').text('MUITO BOM');

        $(".botao-answers").removeClass("button-ativo-vote");

        enviarRecepcao = "inativo";
        funcEnviarRecepcao();
    });

    $(".recepcao .star-5").on("click", function () {
        $(".recepcao .star-1").css('color', '#005DF9');
        $(".recepcao .star-2").css('color', '#005DF9');
        $(".recepcao .star-3").css('color', '#005DF9');
        $(".recepcao .star-4").css('color', '#005DF9');
        $(".recepcao .star-5").css('color', '#005DF9');
        $(".recepcao .four-stars-or-less").css('display', 'none');
        $(".recepcao .five-stars").css('display', 'block');
        $("#footer .enviar-recepcao").css('opacity', '1');
        $('.answers h3').text('EXCELENTE');

        enviarRecepcao = "ativo";
        funcEnviarRecepcao();
    });
    /* Fim Clique em cada estrela - rating - MÉDICO */


    /* Verifica qual NPS foi clicada e inclui a classe de botão ativo */
    verificaCliqueNPS();
    function verificaCliqueNPS() {
    
    var divs = document.getElementsByClassName("botao-nps");

    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", function () {
            $('.rating-nps .botao-nps').each(function(index, element) {
                $(this).removeClass("button-ativo-vote");
            });
            $(this).addClass("button-ativo-vote");

            if ($(this).hasClass("nps-09") || $(this).hasClass("nps-10")) {
                $(".nps .nps-9-or-10").css('display', 'block');
                $(".nps .nps-8-or-less").css('display', 'none');

                $(".enviar-nps").css('opacity', '1');

                enviarNPS = "ativo";
                funcEnviarNPS();

                memberGetMember = "ativo";
            }

            else if ($(this).hasClass("nps-07") || $(this).hasClass("nps-08")) {
                $(".nps .nps-8-or-less").css('display', 'block');
                $(".nps .nps-9-or-10").css('display', 'none');

                $(".botao-answers").removeClass("button-ativo-vote");

                $(".enviar-nps").css('opacity', '0.5');

                enviarNPS = "inativo";
                funcEnviarNPS();

                memberGetMember = "ativo";
            }

            else {
                $(".nps .nps-8-or-less").css('display', 'block');
                $(".nps .nps-9-or-10").css('display', 'none');

                $(".botao-answers").removeClass("button-ativo-vote");

                $(".enviar-nps").css('opacity', '0.5');

                enviarNPS = "inativo";
                funcEnviarNPS();
            }
        });
    }
}

    /* Verifica qual MOTIVO foi clicada e inclui a classe de botão ativo */
    verificaCliqueAnswers();
    function verificaCliqueAnswers() {
    var divs = document.getElementsByClassName("botao-answers");

    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", function () { 
          
            $(this).toggleClass("button-ativo-vote");

            if ($(this).hasClass("button-ativo-vote")) {
                enviarNPS = "ativo";
                funcEnviarNPS();
    
                enviarMedico = "ativo";
                funcEnviarMedico();
    
                enviarRecepcao = "ativo";
                funcEnviarRecepcao();  

                $(".enviar-nps").css('opacity', '1');
                $(".enviar-medico").css('opacity', '1');
                $(".enviar-recepcao").css('opacity', '1');
            }
            else {
                enviarNPS = "inativo";
                funcEnviarNPS();
    
                enviarMedico = "inativo";
                funcEnviarMedico();
    
                enviarRecepcao = "inativo";
                funcEnviarRecepcao();  

                $(".enviar-nps").css('opacity', '0.5');
                $(".enviar-medico").css('opacity', '0.5');
                $(".enviar-recepcao").css('opacity', '0.5');
            }

            
        });
    }
    }
    /* Fim Verifica qual estrela foi clicada e inclui a classe de botão ativo */

    /* Ação do botão enviar NPS */
    function funcEnviarNPS() {
        $(".enviar-nps").off("click");
        console.log(enviarNPS);
        if (enviarNPS === "ativo") {
            $(".enviar-nps").on("click", function () {
                $(".enviar-nps").off("click");
                console.log("Enviou NPS");
                $(".nps").hide("slide", { direction: "left", easing: "easeInExpo" }, 600, function () {
                    $(".medico").effect("slide", { direction: "right", easing: "easeOutExpo" }, 600);
                });
                $(this).removeClass();
                $(this).addClass("enviar-medico");

                $(".navegacao .nav-nps").removeClass("ativo");
                $(".navegacao .nav-nps").addClass("desativo");
                $(".navegacao .nav-medico").removeClass("desativo");
                $(".navegacao .nav-medico").addClass("ativo");
                
                $(".enviar-medico").css('opacity', '0.5');
                $(".medico .four-stars-or-less").css('display', 'none');
                $(".medico .five-stars").css('display', 'none');
                $(".medico .star-1").css('color', '#E5E5E5');
                $(".medico .star-2").css('color', '#E5E5E5');
                $(".medico .star-3").css('color', '#E5E5E5');
                $(".medico .star-4").css('color', '#E5E5E5');
                $(".medico .star-5").css('color', '#E5E5E5');

                $(".voltar").css('visibility', 'visible');
                voltarNPS = "ativo";
                funcVoltarNPS();

            });
        }
    }
    /* Fim Ação do botão enviar Médico */

    /* Voltar NPS */
    function funcVoltarNPS() {
        $(".voltar").off("click");
        console.log(funcVoltarNPS);
        if (voltarNPS === "ativo") {
            $(".voltar").on("click", function () {
                console.log("Clicou Voltar NPS");
                $(".medico").hide("slide", { direction: "right", easing: "easeInExpo" }, 600, function () {
                    $(".nps").effect("slide", { direction: "left", easing: "easeOutExpo" }, 600);
                });
        
                $(".navegacao .nav-nps").removeClass("desativo");
                $(".navegacao .nav-nps").addClass("ativo");
                $(".navegacao .nav-medico").removeClass("ativo");
                $(".navegacao .nav-medico").addClass("desativo");
        
                $("#footer button").addClass("enviar-nps");
                $("#footer button").removeClass("enviar-medico");
        
                $(".voltar").css('visibility', 'hidden');
                
                $(".botao-nps").removeClass("button-ativo-vote");
                $(".botao-answers").removeClass("button-ativo-vote");
                $(".enviar-nps").css('opacity', '0.5');
                $(".nps .nps-9-or-10").css('display', 'none');
                $(".nps .nps-8-or-less").css('display', 'none');
                enviarNPS = "inativo";
                console.log (enviarNPS);
                funcEnviarNPS();

            });
        }
    }
    /* FIM Voltar NPS */

    /* Ação do botão enviar Médico */
    function funcEnviarMedico() {
        $(".enviar-medico").off("click");
        console.log(enviarMedico);
        if (enviarMedico === "ativo") {
            $(".enviar-medico").on("click", function () {
                $(".enviar-medico").off("click");
                console.log("Enviou Médico");
                $(".medico").hide("slide", { direction: "left", easing: "easeInExpo" }, 600, function () {
                    $(".recepcao").effect("slide", { direction: "right", easing: "easeOutExpo" }, 600);
                });
                $(this).removeClass();
                $(this).addClass("enviar-recepcao");

                $(".navegacao .nav-medico").removeClass("ativo");
                $(".navegacao .nav-medico").addClass("desativo");
                $(".navegacao .nav-recepcao").removeClass("desativo");
                $(".navegacao .nav-recepcao").addClass("ativo");
                
                $(".enviar-recepcao").css('opacity', '0.5');
                $(".recepcao .four-stars-or-less").css('display', 'none');
                $(".recepcao .five-stars").css('display', 'none');
                $(".recepcao .star-1").css('color', '#E5E5E5');
                $(".recepcao .star-2").css('color', '#E5E5E5');
                $(".recepcao .star-3").css('color', '#E5E5E5');
                $(".recepcao .star-4").css('color', '#E5E5E5');
                $(".recepcao .star-5").css('color', '#E5E5E5');

                $(".voltar").css('visibility', 'visible');
                voltarMedico = "ativo";
                funcVoltarMedico();

            });
        }
    }
    /* Fim Ação do botão enviar Médico */

    /* Voltar Medico */
    function funcVoltarMedico() {
        $(".voltar").off("click");
        console.log(funcVoltarMedico);
        if (voltarMedico === "ativo") {
            $(".voltar").on("click", function () {
                console.log("Clicou Voltar Medico");
                $(".recepcao").hide("slide", { direction: "right", easing: "easeInExpo" }, 600, function () {
                    $(".medico").effect("slide", { direction: "left", easing: "easeOutExpo" }, 600);
                });
        
                $(".navegacao .nav-medico").removeClass("desativo");
                $(".navegacao .nav-medico").addClass("ativo");
                $(".navegacao .nav-recepcao").removeClass("ativo");
                $(".navegacao .nav-recepcao").addClass("desativo");
        
                $("#footer button").addClass("enviar-medico");
                $("#footer button").removeClass("enviar-recepcao");
                $(".enviar-medico").css('opacity', '1');
    
                

                $(".botao-answers").removeClass("button-ativo-vote");
                $(".enviar-medico").css('opacity', '0.5');
                $(".medico .four-stars-or-less").css('display', 'none');
                $(".medico .five-stars").css('display', 'none');
                $(".medico .star-1").css('color', '#E5E5E5');
                $(".medico .star-2").css('color', '#E5E5E5');
                $(".medico .star-3").css('color', '#E5E5E5');
                $(".medico .star-4").css('color', '#E5E5E5');
                $(".medico .star-5").css('color', '#E5E5E5');
                enviarMedico = "inativo";
                console.log (enviarMedico);
                funcEnviarMedico();

                voltarNPS = "ativo";
                funcVoltarNPS();
           
            });
        }
    }
    /* FIM Voltar NPS */    

    /* Ação do botão enviar Recepção */
    function funcEnviarRecepcao() {
        $(".enviar-recepcao").off("click");
        if (enviarRecepcao === "ativo") {
            $(".enviar-recepcao").on("click", function () {
                console.log("Enviou Recepção");
                $(".enviar-recepcao").off("click");
                $(this).removeClass();
                $("#footer").fadeOut(200);
                $("#base-navegacao").fadeOut(200);
                $('#header h1').text('Obrigado!');
                $('#header h1').css('display', 'none');
                

                $(".voltar").css('visibility', 'hidden');

                if (memberGetMember === "ativo") {
                    console.log("SIM memberGetMember")
                    $(".recepcao").hide("slide", { direction: "left", easing: "easeInExpo" }, 600, function () {
                        $("#header").effect("size", { to: { height: "100%" }, easing: "easeInExpo" }, 600, function () {
                            $(".obrigado-indicacao").css("display", "flex").hide().fadeIn(600);
                        });
                    });
                }

                else if (memberGetMember === "inativo") { 
                    console.log("NÃO memberGetMember")
                    $(".recepcao").hide("slide", { direction: "left", easing: "easeInExpo" }, 600, function () {
                        $("#header").effect("size", { to: { height: "100%" }, easing: "easeInExpo" }, 600, function () {
                            $(".obrigado").css("display", "flex").hide().fadeIn(600);
                        });
                    });
                }
            });
        }
        else if (enviarRecepcao === "inativo") {

        }
    }
    /* Fim Ação do botão enviar Recepção */

});