var random_images_array = ["img/bike.png", "img/bowling.png", "img/coffee.png", "img/food.png", "img/golf.png", 
"img/movies.png", "img/museum.png", "img/picnic.png", "img/shopping.png", "img/surf.png", "img/train.png", 
"img/walk.png", "img/windmill.png", "img/yoga.png", "img/zoo.png"];







function newSrc() {


      // var e = document.getElementById("SelectMenu");
      // var newSrc = e.options[e.selectedIndex].value;
      // document.getElementById("MyFrame").src=newSrc;

       var f = document.getElementById("MyFrame");
       var d = document.getElementById("diceImg");

       if (d.src.match("bike")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=biking+near+me";

       }

       if (d.src.match("bowling")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=bowling+near+me";

       }

       if (d.src.match("coffee")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=cafes+near+me";

       }

       if (d.src.match("food")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=food+near+me";

       }

       if (d.src.match("golf")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=golf+near+me";

       }

       if (d.src.match("movies")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=movies+near+me";

       }

       if (d.src.match("museum")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=museums+near+me";

       }





       if (d.src.match("picnic")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=picnic+near+me";

       }



       if (d.src.match("shopping")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=shopping+near+me";

       }






       if (d.src.match("movies")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=movies+near+me";

       }




       if (d.src.match("surf")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=surf+near+me";

       }



       if (d.src.match("train")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=trains+near+me";

       }



       if (d.src.match("walk")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=walking+near+me";

       }


       if (d.src.match("windmill")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=windmills+near+me";

       }



       if (d.src.match("zoo")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=zoos+near+me";

       }


       if (d.src.match("yoga")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=yoga+near+me";

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



