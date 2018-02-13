var correctTile;
document.getElementById("new-colors-button").addEventListener("click",newColorClicked);
//function for new colors
function newColorClicked(){
    var randomRgb=randomRgbString();
    var tileHard=6;
    correctTile= Math.floor(Math.random()*5)+1;
    //changes header
    document.querySelector("h1 span").textContent=randomRgb;

    for(var i=1; i<=tileHard;i++){
        if(i!==correctTile){
            document.getElementById("tile-"+i).style.background="rgb"+randomRgbString();
        }
        else{
            document.getElementById("tile-"+correctTile).style.background="rgb"+randomRgb;

        }
    }

}
//Function to for
// function that returns random rgb String
function randomRgbString(){
    var rgbArray=[Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)];
    var rgbString="("+rgbArray[0]+", "+rgbArray[1]+", "+rgbArray[2]+")";

    return rgbString;
}