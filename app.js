function criaCartao(categoria, pergunta, resposta) {
    // Seleciona o container principal
    const container = document.getElementById('container');

    // Cria o artigo do cartão
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    // Adiciona o conteúdo interno usando template literals
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // Controla o estado (frente/verso)
    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
        cartao.querySelector('.cartao__conteudo').style.transform = respostaEstaVisivel
            ? 'rotateY(180deg)'
            : 'rotateY(0deg)';
    }

    // Adiciona o evento de clique
    cartao.addEventListener('click', viraCartao);

    // Adiciona o cartão ao container
    container.appendChild(cartao);
}
