function criaCartao(categoria, pergunta, resposta) {
   let container = document.getElementById('container')
   let cartao = document.createElement('article')
   cartao.className = 'cartao'

   cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>Programação</h3>
    <div class="cartao__conteudo__pergunta">
        <p>Quem criou o Scratch?</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>Foi desenvolvido pelo MIT Media Lab como uma ferramenta educativa para crianças e iniciantes.</p>
    </div>
    </div>
   `

   let respostaEstaVisivel = false

   function viraCartao() {
       respostaEstaVisivel = !respostaEstaVisivel
       cartao.classList.toggle('active', respostaEstaVisivel)
   }
   cartao.addEventListener('click', viraCartao)


   container.appendChild(cartao)

}