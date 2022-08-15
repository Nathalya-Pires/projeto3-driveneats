function marcadorFood(botao) {
    const pedidoEscolhido = document.querySelector ('.pratos .selecionado');
    if ( pedidoEscolhido !== null ){
        pedidoEscolhido.classList.remove('selecionado')
    }
   
    botao.classList.add('selecionado');
}

function marcadorDrink(botao){
    const pedidoEscolhido = document.querySelector ( '.bebidas .selecionado');
    if ( pedidoEscolhido !== null ){
        pedidoEscolhido.classList.remove('selecionado')
    }

    botao.classList.add('selecionado');
}

function marcadorSweet(botao){
    const pedidoEscolhido = document.querySelector ( '.sobremesas .selecionado');
    if ( pedidoEscolhido !== null ){
        pedidoEscolhido.classList.remove('selecionado')
    }

    botao.classList.add('selecionado');
}