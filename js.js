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
function fun(){
for(let i = 0; i < Object.keys(cardIds).length; i++){
    var image = new Image()
    a = "fronts/" + cardIds[Object.keys(cardIds)[i]][1]
    image.src = a
    image.width = image.width * 0.4
    document.getElementById("titled").appendChild(image)

}
}