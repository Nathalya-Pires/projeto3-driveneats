let food;
let drink;
let sweet;
let precoFood;
let precoDrink;
let precoSweet;
let nomeFood;
let nomeDrink;
let nomeSweet;
let precoTotal;

function marcadorFood(botao) {
    const pedidoEscolhido = document.querySelector('.pratos .selecionado');
    if (pedidoEscolhido !== null) {
        pedidoEscolhido.classList.remove('selecionado')
    }

    botao.classList.add('selecionado');

    food = botao;
    nomeFood = botao.querySelector('.itens>h1').innerText; 
    
    preco = botao.querySelector('.itens>h3').innerText;     //selecionei o item relativo ao preço
    preco = preco.replace('R$','');                         //troquei o 'R$' por '' (aspas vazias, ou seja, onde tinha 'R$', agora não tem nada)
    preco = preco.replace(',','.');                         //troquei a virgula por ponto, pois numero tem que ter ponto no JS
    preco = Number(preco);                                  //transformei a string em numero
    precoFood = preco                                       //atribui o valor da variavel preço, a variavel global (que está fora da função) 'precoFood'

    fecharPedido();

}

function marcadorDrink(botao) {
    const pedidoEscolhido = document.querySelector('.bebidas .selecionado');
    if (pedidoEscolhido !== null) {
        pedidoEscolhido.classList.remove('selecionado')
    }

    botao.classList.add('selecionado');

    drink = botao;
    nomeDrink = botao.querySelector('.itens>h1').innerText; 
    
    preco = botao.querySelector('.itens>h3').innerText;     //selecionei o item relativo ao preço
    preco = preco.replace('R$','');                         //troquei o 'R$' por '' (aspas vazias, ou seja, onde tinha 'R$', agora não tem nada)
    preco = preco.replace(',','.');                         //troquei a virgula por ponto, pois numero tem que ter ponto no JS
    preco = Number(preco);                                  //transformei a string em numero
    precoDrink = preco                                       //atribui o valor da variavel preço, a variavel global (que está fora da função) 'precoFood'

    fecharPedido();

}

function marcadorSweet(botao) {
    const pedidoEscolhido = document.querySelector('.sobremesas .selecionado');
    if (pedidoEscolhido !== null) {
        pedidoEscolhido.classList.remove('selecionado')
    }

    botao.classList.add('selecionado');

    sweet = botao;
    nomeSweet = botao.querySelector('.itens>h1').innerText; 
    
    preco = botao.querySelector('.itens>h3').innerText;     //selecionei o item relativo ao preço
    preco = preco.replace('R$','');                         //troquei o 'R$' por '' (aspas vazias, ou seja, onde tinha 'R$', agora não tem nada)
    preco = preco.replace(',','.');                         //troquei a virgula por ponto, pois numero tem que ter ponto no JS
    preco = Number(preco);                                  //transformei a string em numero
    precoSweet = preco                                       //atribui o valor da variavel preço, a variavel global (que está fora da função) 'precoFood'

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

function chamarWhatsapp() {
    
    precoTotal = precoFood + precoDrink + precoSweet;

    let mensagem = 
        'Olá, gostaria de fazer o pedido:' + '\n- Prato: ' + nomeFood +
		'\n- Bebida: ' + nomeDrink +
		'\n- Sobremesa: ' + nomeSweet +
		'\nTotal: R$ ' + precoTotal.toFixed(2)

    link = 'https://wa.me/5566992105957?text=' + encodeURIComponent(mensagem)

    window.open(link, '_blank')
}