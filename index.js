//frases motivacionais que usei
const quotes = [
"Acredite em si mesmo e você será imparável.",
"Cada dia é uma nova oportunidade para brilhar.",
"Se você pode sonhar, pode realizar.",
"A persistência leva ao sucesso.",
"A jornada mais longa começa com um único passo.",
"Sua determinação é sua maior força.",
"O sucesso é a soma de pequenos esforços repetidos dia após dia.",
"Encare cada desafio como uma chance de crescimento.",
"Grandes coisas nunca vêm da zona de conforto.",
"Mude seus pensamentos e você mudará seu mundo.",
"A adversidade revela o verdadeiro campeão que há em você.",
"Você é mais forte do que imagina.",
"O que você faz hoje pode melhorar todos os amanhãs.",
"Acredite no poder dos seus sonhos e siga em frente."
]
// criando um parametro constante de um novo set para indexar as frases e ter uma "ordem"
const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")
//função que faz  pegar aleatoriamente as frases e mandar na tela
function generateQuote() {
    //condição usada para limpar os indexes ja usados e novamente puxar as frases oara sempre trazer mais frases aleatoriamente e não travar
    if (usedIndexes.size >= quotes.length)
        usedIndexes.clear()
//loop para o programa fazer uma escolha aleatória das frases dentro dos index preenchidos no set (12 frases)
    while (true) {
        const RandomIdx = Math.floor(Math.random() * quotes.length)
// condição usada para não usar a mesma frase anterior e puxar uma nova
        if (usedIndexes.has(RandomIdx)) continue
    
        const quote = quotes[RandomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(RandomIdx)
        break

    }
    



    
}
