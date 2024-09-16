$(document).ready(function () {
    //chamando o carrosel e dando auto play,para as imagens passar automaticamente
    $("#carrossel-imagens").slick({
        autoplay: true
    });
    //dando display none no css,quando clicar no menu vai aparecer as opções
    $(".menu-hamburguer").click(function () {
        $("nav").slideToggle();
    })
    //criando validação no telefone ,usando plugin do Jquery,deve ser colocado o parametro aceitavel.
    $("#telefone").mask("(00)00000-0000", {
        placeholder: "(00)00000-0000"
    })
    //validação dos campos,tornando necessario preencher os campos com required,temos que usar a TAG name para chamar
    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculeDeInteresse: {
                required: true
            }
        },
        //aqui conseguimos colocar mensagem para pedir algo caso o campo nao seja preenchido
        messages: {
            nome: "Por favor,insira o seu nome",
            telefone: "Por favor ,insira o seu telefone",
            email: "Por favor,insira o seu E-mail",
            veiculeDeInteresse: "Por favor,insira o veiculo interessado",
            mensagem: "Nos conte sobre com o que esta em duvida."
        },
        submitHandler: function (form) {
            console.log(form);
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos não preenchidos.`)
            }
        }
    })
    //quando clicado no botao de tenho interesse ele ira colocar o item escolhido no formulario.
    //usando o this estamos buscando o botao,e buscando o h3 dentro do botao que e um texto.
    $(".lista-veiculos button").click(function () {
        const destino = $("#contato");
        const nomeVeiculo = $(this).parent().find("h3").text();
        $("#veiculo-interesse").val(nomeVeiculo);
        //adicionando animação de rolagem na pagina ,quando clicando no item vai ser rolado ate a parte de contato adicionando ele no campo desejado.
        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    });
})