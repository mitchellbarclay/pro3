var random_images_array = ["img/bike.png", "img/bowling.png", "img/coffee.png", "img/food.png", "img/golf.png", 
"img/movies.png", "img/museum.png", "img/picnic.png", "img/shopping.png", "img/surf.png", "img/train.png", 
"img/walk.png", "img/windmill.png", "img/yoga.png", "img/zoo.png"];







function newSrc() {


      // var e = document.getElementById("SelectMenu");
      // var newSrc = e.options[e.selectedIndex].value;
      // document.getElementById("MyFrame").src=newSrc;

       var f = document.getElementById("MyFrame");
       var d = document.getElementById("diceImg");
       var title = document.getElementById("title");
       

       if (d.src.match("bike")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=biking+hire+near+me";
         title.innerHTML = "Hire a bike";

       }

       if (d.src.match("bowling")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=bowling+near+me";
        title.innerHTML = "Go bowling";

       }

       if (d.src.match("coffee")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=cafes+near+me";
        title.innerHTML = "Get some coffee";

       }

       if (d.src.match("food")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=food+near+me";
        title.innerHTML = "Head out for a bite";

       }

       if (d.src.match("golf")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=golf+near+me";
        title.innerHTML = "Visit a golfing range";

       }

       if (d.src.match("movies")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=movies+near+me";
        title.innerHTML = "Trip to the movies";

       }

       if (d.src.match("museum")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=museums+near+me";
        title.innerHTML = "Visit a museum";

       }





       if (d.src.match("picnic")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=picnic+spots+near+me";
        title.innerHTML = "Have a picnic";

       }



       if (d.src.match("shopping")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=shopping+near+me";
        title.innerHTML = "Go shopping";

       }






       if (d.src.match("surf")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=surf+spots+near+me";
        title.innerHTML = "Catch some surf";

       }



       if (d.src.match("train")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=trains+near+me";
        title.innerHTML = "Catch a train";

       }



       if (d.src.match("walk")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=walking+tracks+near+me";
        title.innerHTML = "Go for a walk";

       }


       if (d.src.match("windmill")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=windmills+near+me";
        title.innerHTML = "Visit a local windmill";

       }



       if (d.src.match("zoo")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=zoos+near+me";
        title.innerHTML = "Go to the zoo";

       }


       if (d.src.match("yoga")){

        f.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAH5jxs6I2fR_agC0lp5aK9CBCgM4vN_TQ&q=yoga+near+me";
        title.innerHTML = "Practice some yoga";

       }


     }


function showMap() {

    var m = document.getElementById("MyFrame");
    var b = document.getElementById("button");
    var des = document.getElementById("description");



    if (m.style.display === "inline"){
    m.style.display = "none";
    b.style.marginTop = "280px";
    } else {
      m.style.display = "inline";
      b.style.marginTop = "410px";
      des.style.height = "0px";
    }





  }
  

function rollDice() {
    
var des = document.getElementById("description");

var d = document.getElementById("diceImg");

var b = document.getElementById("button");

if (d.src.match("roll.gif")){
d.src = random_images_array[Math.floor(Math.random() * random_images_array.length)];
document.getElementById("button").style.display = "block";

}
if (d.src.match("preroll")) {
d.src = "img/roll.gif";
}

else {
      
      if (des.style.height === "120px"){
     des.style.height = "0px";
     b.style.marginTop = "280px";

      }
      else {
        des.style.height = "120px";
        b.style.marginTop = "410px";
      }


        

}






}

function getRandomImage(imgAr, path) {
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
}





