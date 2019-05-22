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
  
