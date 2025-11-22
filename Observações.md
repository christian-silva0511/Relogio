**CÓDIGOS CHAVES**
<script>
    // Acessando elementos do HTML
    var velocidade = document.getElementById('velocidade') // Via ID
    var titulo = window.document.getElementsByTagName('h1')[0] // Via índice 
    var velocidade = document.getElmenteByClassName('velocidade') // Via Classe
    var tn2 = window.document.querySelector('input#txtn2') // Via querySelector


    // Tranformar campo input em Number
    var vel = Number(velocidade.value)


    // Colocar um onlick no input
    <input type="button" value="Somar" onclick="somar()" class="btSomar"></input>


    // Adicionar classe no HTML
    resultado.classList.add('sucesso')


    // Remover classe no HTML
    resultado.classList.remove('erro')


    // Função
    function nomeDaFuncao() {
    }


    // Adicionar evento
    var a = window.document.getElementById('area')
    a.addEventListener('click', clicar)
    a.addEventListener('mouseenter', entrar)
    a.addEventListener('mouseout', sair)


    // Alterar propriedades do CSS 
    d.style.background = 'green'
    titulo.style.background = 'red'


    // Condicionais (If, Else, Else if)
    if (idade < 2) {
        resultado.innerHTML = `Com ${idade} ano, você não vota!`
    }else if (idade < 16) {
        resultado.innerHTML = `Com ${idade} anos, você não vota!`
    } else if (idade < 18 || idade >= 67) {
        resultado.innerHTML = `Voto opcional!` 
    } else {
        resultado.innerHTML = `Voto obrigatório!`
    }


    // Pegar o ano atual
    let data = new Date()
    let anoAtual = data.getFullYear();


    // Switch
    var agora = new Date()
    var diaSem = agora.getDay()
    
    switch(diaSem){
        case 0:
            console.log('Domingo')
            break
        case 1:
            console.log('Segunda')
            break
        case 2:
            console.log('Terça')
            break
        case 3:
            console.log('Quarta')
            break
        case 4:
            console.log('Quinta')
            break
        case 5:
            console.log('Sexta')
            break
        case 6:
            console.log('Sábado')
            break
    }


    // Estrutura de repetições com While, Do e For    
    var c = 1

    /* Exemplo 1 */
    while (c <= 4) {
        console.log(`Passo ${c}`)
        c++
    } 
     
    /* Exemplo 2 */ 
    do{
        console.log(`Passo ${c}`)
        c++
    } while(c <= 4)
     
    /* Exemplo 3 */
    for(var c = 1; c <= 4; c++){ // for (inicio; teste; incr){} Tem 3 etapas = For é um looping que dá voltas e tem um incrememento
        console.log(`Passo ${c}`)
    }


    // Vetores (Arrays)
    var valores = [8, 1, 3]
    console.log(valores[0])
    console.log(valores[1])
    console.log(valores[2])

    for(var pos = 0; pos < valores.length; pos++){
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    }

    /* JEITO MAIS MODERNO DE USAR ARRAY */
    for(var pos in valores){
        console.log(num[pos])
    }


    // Função para contar/somar mais 1
    let contador = 0
    function somar() {
        contador++;
        document.getElementById('contador').textContent = contador;
    }

    // Adicionar atributo dentro de uma tag
    img.setAttribute('src', 'img/homem-bebe.jpg')
    img.setAttribute('alt', 'Testando o alt...')

    // Criar uma tag no HTML
    let img = document.createElement('img')

    // Criar uma tag filha
    document.querySelector('ul').appendChild(li)


    // Remover tag no HTML
    function deletar(li){
            li.parentElement.remove()
        }



    // Mostrar se input está vazio
    if (numero.value.length == 0){
        // Mostra aqui mensagem avisando que o input está vazio
    } else {
        let n = Number(numero.value)
    }


    // Deixa campo ser preenchido com número ou letras --> value.trim()
    let campo = document.getElementById('campo').value.trim()


    // Arrendar um número
    let converter = (reais / dolar).toFixed(2)

    
    //
    Conceito	Função principal
    fetch()	    Faz requisições HTTP
    async	    Torna a função assíncrona (Ela espera a resposta a resposta do servidor da API para depois rodar)
    await	    Espera a resposta de uma Promise
    try/catch	Trata erros de forma segura


    

</script>


 **ESTUDAR MAIS**
 - For, while, Do


**CURSO DE JS**
https://www.youtube.com/watch?v=1-w1RfGIov4\&list=PLHz\_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1\&index=1

Estudar mais as ultimas aulas de funções:
https://www.youtube.com/watch?v=mc3TKp2XzhI\&list=PLmRz6JukPwWNZ8xdJ0CBNNIEv9PHIAE7G\&index=16

Também estudar mais as aulas 13, 14, 15, 16


**OQ FOI VISTO NO CURSO**
* Fundamentos
* Variáveis e dados
* Operadores
* Condições
* Repetições
* Arrays
* Functions
* DOM


**DEPOIS DO CURSO DE JS, O QUE FAZER DAQUI PRA FRENTE**
* Curso de HTML5 e CSS
* Estudar mais sobre functions
* Objetos e Orientações a objetos (Tem curso disso no Curso em vídeo)
* Modularização
* JSON
* AJAX
* NodeJS
* Praticar programação: Coderbyte, HackerRank, Excercismo.io, Codewars, Leetcode, Codin game