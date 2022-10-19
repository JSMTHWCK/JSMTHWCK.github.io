function loadImage(hand,index,turn){
    console.log("entered load image")
    var image = new Image()
    if(turn == "back"){
        a = "fronts/" + cardIds["card_back"][1]
    }
    let a = "fronts/" + cardIds[hand[index]][1]
    console.log(a)
    image.src = a
    image.width = image.width * 0.4
    if(turn == "Dealer"){
    document.getElementById("dealercards").appendChild(image)
    }

    else{
        document.getElementById("playercards").appendChild(image)
    }
}




