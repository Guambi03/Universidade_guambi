document.addEventListener('DOMContentLoaded', (event) => {
    var form = document.getElementById("contactForm");
    var modal = document.getElementById("Mensagem");
    var span = document.getElementsByClassName("close-btn")[0];

    // Certifique-se de que o modal está oculto ao carregar a página
    modal.style.display = "none";

    form.onsubmit = function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Exibe o modal com a mensagem de sucesso
        modal.style.display = "block";
        console.log('Mensagem enviada e modal exibido'); // Verificação
    }

    span.onclick = function() {
        modal.style.display = "none";
        console.log('Modal fechado pelo botão'); // Verificação
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            console.log('Modal fechado ao clicar fora'); // Verificação
        }
    }
});

// blog acao
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('post');
    var modal = document.getElementById('Mensagem');
    var span = document.getElementsByClassName('close-btn')[0];

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio do formulário

        // Exibe o modal com a mensagem de sucesso
        modal.style.display = 'block';
    });

    span.addEventListener('click', function() {
        modal.style.display = 'none'; // Fecha o modal ao clicar no botão de fechar
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'; // Fecha o modal ao clicar fora dele
        }
    });
});

// Sobre nós açao

document.addEventListener('DOMContentLoaded', (event) => {
    var Explorar = document.getElementById("Explorar");
    var modal = document.getElementById("explorarMensagem");
    var span = document.getElementsByClassName("close-btn")[0];

    // Certifique-se de que o modal está oculto ao carregar a página
    modal.style.display = "none";

    Explorar.onclick = function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Exibe o modal com a mensagem de sucesso
        modal.style.display = "block";
        console.log('Explorado com sucesso e modal exibido'); // Verificação
    }

    span.onclick = function() {
        modal.style.display = "none";
        console.log('Modal fechado pelo botão'); // Verificação
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            console.log('Modal fechado ao clicar fora'); // Verificação
        }
    }
});