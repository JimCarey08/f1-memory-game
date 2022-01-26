document.addEventListener('DOMContentLoaded', () =>{

    //card options
    const cardArray =[
        {
            name:'crash',
            img: 'img/crash.jpg'
        },
        {
            name:'crash',
            img: 'img/crash.jpg'
        },
        {
            name:'battle',
            img: 'img/battle.jpg'
        },
        {
            name:'battle',
            img: 'img/battle.jpg'
        },
        {
            name:'max',
            img: 'img/max.jpg'
        },
        {
            name:'max',
            img: 'img/max.jpg'
        },
        {
            name:'f1-god',
            img: 'img/f1-god.jpg'
        },
        {
            name:'f1-god',
            img: 'img/f1-god.jpg'
        },
        {
            name:'sennas-car',
            img: 'img/sennas-car.jpg'
        },
        {
            name:'sennas-car',
            img: 'img/sennas-car.jpg'
        },
        {
            name:'hamilton',
            img: 'img/hamilton.png'
        },
        {
            name:'hamilton',
            img: 'img/hamilton.png'
        },
    ] 

    cardArray.sort(() => 0.5 - Math.random())


    //create board

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard(){
        for(let i =0;i<cardArray.length;i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'img/card.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if( cardsChosen[0]=== cardsChosen[1]){
            alert('zooooommmm você achou um par')
            cards[optionOneId].setAttribute('src', 'img/white.png')
            cards[optionTwoId].setAttribute('src', 'img/white.png')
            cards[optionOneId].removeEventListener('click', flipcard); 
            cards[optionTwoId].removeEventListener('click', flipcard);
            cardsWon.push(cardsChosen)

        }else{
            cards[optionOneId].setAttribute('src', 'img/card.png')
            cards[optionTwoId].setAttribute('src', 'img/card.png')
            alert('Igual o octa do hamilton em 2021, não foi dessa vez, tente denovo')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length===cardArray.length/2){
            resultDisplay.textContent = 'Parabéns, assim como Max verstappen você é campeão'
        }
    }



    //flip card
    function flipcard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if( cardsChosen.length===2){
            setTimeout(checkForMatch, 500)
        }
        
    }




    createBoard()

    
})