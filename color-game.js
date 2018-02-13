document.getElementById("new-colors-button").addEventListener("click",newColorClickedChangeHead);
//function for new colors
function newColorClickedChangeHead(){
    var rgbArray= new Array(3);
    rgbArray= randomRGB();
    var rgbString="("+rgbArray[0]+", "+rgbArray[1]+", "+rgbArray[2]+")";
    document.querySelector("h1 span").textContent=rgbString;


    
}
// function that returns random rgb array
function randomRGB(){
    var rgbArray=[Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)];

    return rgbArray;
}