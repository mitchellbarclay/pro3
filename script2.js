var random_images_array = ["img/static1.png", "img/static2.png", "img/static3.png", "img/static4.png", "img/static5.png", 
"img/static6.png"];







function newSrc() {


      // var e = document.getElementById("SelectMenu");
      // var newSrc = e.options[e.selectedIndex].value;
      // document.getElementById("MyFrame").src=newSrc;

       var f = document.getElementById("MyFrame");
       var d = document.getElementById("diceImg");

       if (d.src.match("static1")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=cafes+near+me";

       }

       if (d.src.match("static2")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=movies+near+me";

       }

       if (d.src.match("static3")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=kayaking+near+me";

       }

       if (d.src.match("static4")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=museums+near+me";

       }

       if (d.src.match("static5")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=arcades+near+me";

       }

       if (d.src.match("static6")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=shopping+near+me";

       }


     }


function showMap() {

    var m = document.getElementById("MyFrame");
    var b = document.getElementById("button");



    if (m.style.display === "inline"){
    m.style.display = "none";
    b.style.marginTop = "380px";
    } else {
      m.style.display = "inline";
      b.style.marginTop = "500px";
    }





  }
  

function rollDice() {
    


var d = document.getElementById("diceImg");

if (d.src.match("roll.gif")){
d.src = random_images_array[Math.floor(Math.random() * random_images_array.length)];
document.getElementById("button").style.display = "block";

}
if (d.src.match("preroll")) {
d.src = "img/roll.gif";
}

}

function getRandomImage(imgAr, path) {
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
}


$(document).on("click", ".flip-container", function () {
    $(this).toggleClass('hover');
});
