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
    

    var d = document.getElementById("dice");

    if (d.style.backgroundImage === 'url("img/roll.gif")'){

 

    d.style.backgroundImage = 'url("img/static1.png")';
}

else {
  d.style.backgroundImage = 'url("img/roll.gif")';
}


}