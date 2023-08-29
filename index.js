function myFunction(x) {
    x.classList.toggle("change");
  }
  function openSec(evt, secName) {
    console.log(evt.currentTarget)
    let i, x, tablinks;
    x = document.getElementsByClassName("section");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" wred", " wblue");
    }
    document.getElementById(secName).style.display = "block";
    evt.currentTarget.classList.remove("wblue");
    evt.currentTarget.className += " wred";
  }
