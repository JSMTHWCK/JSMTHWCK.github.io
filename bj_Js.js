

//Starting variables


let current_hand = []
let current_dealer = []
let bet_size = []
let points = 100
let betsize = 0
let gamenum = 0
let dealerScore = 0
let playerScore = 0
let dealerhands = [[["2S","9C","2C","8D"],["1D","9S"],["QD","5H","6D"],["8S","7C","JC"],["10S","1S"],["3D","3S","10H","7S"],["KH","8D","6C"],["7H","7S","7D"],["KS","1D"],["7H","3C","8D"]],
                    [["9S","5H","KH"],["4D","7C","KD"],["QH","5S","10D"],["9H","5D"],["JS","8D","6H"],["9D","KS","1H"],["7H","7S","7D"],["KS","1D"],["JD","6H","4S"]]]  
//1 is 1/11, JQK are all 10s
console.log('pass')
let bjhands = [[["QH","2C","10C"],["5S","6H","1C","10H"],["5H","JS","8D"],["JD","10S","6D"],["9H","3C","4S","7D"],["10D","KH","9S"],["9C","9H","8H"],["KC","9H","5S"],["10C","9D","KH"],["10S","KS","2H"]],
                [["KS","6H","4D","7S"],["1H","9H","9D","8S"],["10C","10H","10D"],["10S","1C"],["6D","3D","3S","QS"],["10S","4D","6H","1S"],["9D","8H","6D"],["7D","JC","5C"],["QS","9S","7S"],["AS","8D","4C","6D","7S"]]]
console.log('last')
let stays = []
//stays is at what value did they stay (helping show confidence)
let cardIds = {
    "card_back" : [0,"abstract_clouds.png"],
    "1C": [1,"clubs_ace.svg"], "2C": [2,"clubs_2.svg"], "3C":[3,"clubs_3.svg"], "4C":[4,"clubs_4.svg"],
    "5C": [5,"clubs_5.svg"], "6C":[6,"clubs_6.svg"], "7C":[7,"clubs_7.svg"], "8C":[8,"clubs_8.svg"],
    "9C": [9,"clubs_9.svg"], "10C": [10,"clubs_10.svg"],"JC" : [10,"clubs_jack.svg"], "QC": [10,"clubs_queen.svg"], "KC":[10,"clubs_king.svg"],
    "1D":[1,"diamonds_ace.svg"],"2D":[2,"diamonds_2.svg"],"3D":[3,"diamonds_3.svg"],"4D":[4,"diamonds_4.svg"],
    "5D": [5,"diamonds_5.svg"], "6D": [6,"diamonds_6.svg"], "7D" : [7,"diamonds_7.svg"], "8D" : [8,"diamonds_8.svg"],
    "9D" : [9,"diamonds_9.svg"], "10D": [10,"diamonds_10.svg"], "JD":[10,"diamonds_jack.svg"],"QD":[10,"diamonds_queen.svg"], "KD" :[10,"diamonds_king.svg"],
    "1H" : [1,"hearts_ace.svg"], "2H" : [2,"hearts_2.svg"], "3H" : [3,"hearts_3.svg"], "4H" : [4,"hearts_4.svg"],
    "5H" : [5,"hearts_5.svg"], "6H" : [6,"hearts_6.svg"], "7H": [7,"hearts_7.svg"], "8H": [8,"hearts_8.svg"], 
    "9H": [9,"hearts_9.svg"], "10H" : [10,"hearts_10.svg"], "JH":[10,"hearts_jack.svg"], "QH": [10,"hearts_queen.svg"], "KH":[10,"hearts_king.svg"],
    "1S": [1,"spades_ace.svg"], "2S" : [2,"spades_2.svg"], "3S" : [3,"spades_3.svg"], "4S": [4,"spades_4.svg"],
    "5S": [5,"spades_5.svg"], "6S" : [6,"spades_6.svg"], "7S" : [7,"spades_7.svg"], "8S": [8,"spades_8.svg"],
    "9S": [9,"spades_9.svg"], "10S": [10,"spades_10.svg"], "JS" : [10,"spades_jack.svg"], "QS" : [10,"spades_queen.svg"], "KS": [10,"spades_king.svg"]
}

//object between cards and filename (it's going to be long), basically a nid system


//list of helper functions

function addArray(a){
    let eleven_score = false
    let sum = 0
    for(let i = 0; i < a.length; i++){
        if(i <= 2 && cardIds[a[i]][0] == 1){
            eleven_score = true
            sum += 10
        }
        sum += cardIds[a[i]][0]
    }
        if(eleven_score == true && sum >= 22){
            sum -= 10
    }
    return sum
}
function bet(){
    betsize = prompt("choose bet size")
    while(betsize > points || betsize <= 0|| Number.isInteger(parseInt(betsize)) != true){
        alert("you can't bet that amount!")
        betsize = prompt("choose valid bet size")
    }
    bet_size.push(betsize)
    points -= betsize
    return points
    
}
function payout(bet,result){
    bet = parseInt(bet)
    if(result == "Win"){
        return bet*2
    }
    else if(result == "Draw"){
        return bet
    }
    else{
        return 0
    }
}
function gameResult(){
    console.log(dealerScore)
    console.log(playerScore)
    if(dealerScore <= 21){
    if(playerScore > dealerScore){
        return "Win"
    }
    else if(playerScore == dealerScore){
        return "Draw"
    }
    else{
        return "Lose"
    }
}
    else{
        return "Win"
    }
}

function loadImage(hand,index,turn){
    var image = new Image()
    if(turn == "back"){
        a = "fronts/" + cardIds["card_back"][1]
    }    
    let a = "fronts/" + cardIds[hand[index]][1]
    image.src = a
    image.width = 130.4
    if(turn == "Dealer"){
    document.getElementById("dealercards").appendChild(image)
    }

    else{
        document.getElementById("playercards").appendChild(image)
    }
}

function run_dealer(){
    //<<<<<<<<<<putting down the rest of the dealers cards>>>
    console.log(dealerhands[mode][gamenum].length)
    loadImage(current_dealer,1,"Dealer")
    dealerScore = addArray(current_dealer)
    document.getElementById("dealerTotal").innerHTML = "dealer total : " + addArray(current_dealer)
    for(let i = current_dealer.length; i < dealerhands[mode][gamenum].length ; i++){
        current_dealer.push(dealerhands[mode][gamenum][i]) 
        loadImage(current_dealer,current_dealer.length-1,"Dealer")
        dealerScore = addArray(current_dealer)
        document.getElementById("dealerTotal").innerHTML = "dealer total : " + addArray(current_dealer)
        }

    points += payout(betsize,gameResult())
    document.getElementById("pttotal").innerHTML = "points : " + points

}
//list of actual functions
function hit(){

    //resets the game
    if(document.getElementById("hit").innerHTML == "New Game"){
        //RESETS VALUES 
        if(gamenum == 10){
            alert("game finished")
            return NaN
        }
        document.getElementById("hit").innerHTML = "Hit"
        document.getElementById("playercards").innerHTML = ""
        document.getElementById("dealercards").innerHTML = ""
        document.getElementById("total").innerHTML = "player total : 0"
        playerScore = 0
        document.getElementById('dealerTotal').innerHTML = "dealer total : 0"
        dealerScore = 0

        //changes hand
        current_hand = bjhands[mode][gamenum].slice(0,2)
        if(points == 0){
            alert("you ran out of points")
            return NaN
        }
       loadImage(current_hand,0,"Player")
       loadImage(current_hand,1,"Player")
       playerScore = addArray(current_hand)
        document.getElementById("total").innerHTML = "player total : " + addArray(current_hand)

        current_dealer = dealerhands[mode][gamenum].slice(0,2)
        loadImage(current_dealer,0,"Dealer")
        //changes internal stuff

        document.getElementById("pttotal").innerHTML =  "points : " + bet()
        document.getElementById("gamenum").innerHTML = "round number :" + (gamenum + 1)
    }
    else{
        current_hand.push(bjhands[mode][gamenum][current_hand.length])
        loadImage(current_hand,current_hand.length-1,"Player")
        console.log(current_hand)
        document.getElementById("total").innerHTML = "player total : " + addArray(current_hand)
        if(addArray(current_hand) >= 22){
            //run_dealer()
            document.getElementById("hit").innerHTML = "New Game"
            gamenum += 1
            stays.push(playerScore)
        }
    }

}
function stay(){
    if(document.getElementById("hit").innerHTML == "New Game"){
        hit()
        console.log('hit hit')
        return NaN
    }
    run_dealer()
    stays.push(playerScore)
    document.getElementById("hit").innerHTML = "New Game"
    gamenum += 1
    console.log(gamenum)
}




function reset(){
    gamenum = 0
    points = 100
    alert("mode was " + mode + "(1 is rigged)" + "\n")
    alert("bet sizes were " + bet_size + "\n" + "stays were " + stays)
    document.getElementById("playercards").innerHTML = ""
    document.getElementById("dealercards").innerHTML = ""
    document.getElementById("hit").innerHTML = "New Game"
    mode = prompt("choose mode (0 or 1 (rigged))")
    stays = []
    mode = parseInt(mode)

}
mode = 0

