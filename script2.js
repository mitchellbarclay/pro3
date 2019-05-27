var random_images_array = ["img/static1.png", "img/static2.png", "img/static3.png", "img/static4.png", "img/static5.png", 
"img/static6.png"];







function newSrc() {
      var e = document.getElementById("SelectMenu");
      var newSrc = e.options[e.selectedIndex].value;
      document.getElementById("MyFrame").src=newSrc;
     }


function showMap() {

    var m = document.getElementById("MyFrame");



    if (m.style.display === "inline"){
    m.style.display = "none";
    } else {
      m.style.display = "inline";
    }





  }
  

function rollDice() {
    


var d = document.getElementById("diceImg");

if (d.src.match("roll.gif")){
d.src = random_images_array[Math.floor(Math.random() * random_images_array.length)];

}
else {
d.src = "img/roll.gif";
}

}

function getRandomImage(imgAr, path) {
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
}



