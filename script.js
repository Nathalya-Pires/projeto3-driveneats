let food;
let drink;
let sweet;


function marcadorFood(botao) {
    const pedidoEscolhido = document.querySelector('.pratos .selecionado');
    if (pedidoEscolhido !== null) {
        pedidoEscolhido.classList.remove('selecionado')
    }

    botao.classList.add('selecionado');

    food = botao;

    fecharPedido();

}

function marcadorDrink(botao) {
    const pedidoEscolhido = document.querySelector('.bebidas .selecionado');
    if (pedidoEscolhido !== null) {
        pedidoEscolhido.classList.remove('selecionado')
    }

    botao.classList.add('selecionado');

    drink = botao;

    fecharPedido();
}

function marcadorSweet(botao) {
    const pedidoEscolhido = document.querySelector('.sobremesas .selecionado');
    if (pedidoEscolhido !== null) {
        pedidoEscolhido.classList.remove('selecionado')
    }

    botao.classList.add('selecionado');

    sweet = botao;

    fecharPedido();
}

function fecharPedido() {
    if (food !== undefined) {
        if (drink !== undefined) {
            if (sweet !== undefined) {
                const desabilita = document.querySelector('.botao');
                desabilita.classList.add('escondido');

                const habilita = document.querySelector('.botao-final');
                habilita.classList.remove('escondido');
            }
        }
    }
}