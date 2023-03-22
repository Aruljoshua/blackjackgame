let hasblackjack=false
let cards=[]
let isalive =false
let message=""
let sum=0
let messageEL=document.getElementById("message-el")
let sumEL=document.getElementById("sum-el")
//let sumEL=document.querySelector("#sum-el")
let cardsEL=document.getElementById("cards-el")

let player={ name: "Arul" ,chips: 145}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name + ": $" + player.chips
function getrandomcard() {
    let random=Math.floor(Math.random()*13)
    if(random > 10) {
       return 10
    }
    else if(random === 1) {
       return 11
    }
    else {
        return random
    }
}
function startgame() {
    isalive=true
    let firstcard=getrandomcard()
    let secondcard=getrandomcard()
    cards= [firstcard,secondcard]
    sum=firstcard+secondcard
    rendercard()
}
function rendercard() {
    cardsEL.textContent="cards: "
    for(let count=0;count<cards.length;count++)
    {
       cardsEL.textContent += cards[count] + " "
    }
    sumEL.textContent="sum: " + sum
    if(sum<=20){
        message="Do you want to draw a new Card"
    }
    else if(sum === 21) {
        message="Wohoo! you've got BlackJack"
        hasblackjack=true
    }
    else {
        message="you're out of the game"
        isalive=false
    }
    messageEL.textContent=message
}
function newcard() {
    if(isalive===true && hasblackjack===false) {
    let card=getrandomcard()
    sum += card
    cards.push(card)
    rendercard()
    }
}