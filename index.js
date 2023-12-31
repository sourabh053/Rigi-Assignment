function myFunction(x) {
    x.classList.toggle("change");
  }
  function openSec(evt, secName) {
    let i, x, tablinks;
    x = document.getElementsByClassName("section");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" wred", " wblue");
    }
    const mediaQuery = window.matchMedia('(min-width: 650px)');
    if(mediaQuery.matches){
        document.getElementById(secName).style.display = "flex";
    }else{
        document.getElementById(secName).style.display = "block";
    }
    evt.currentTarget.classList.remove("wblue");
    evt.currentTarget.className += " wred";
  }

  window.addEventListener("keypress", function (e) {
    let key = e.key;
    if (key == "b" || key == "B") {
      window.scrollTo(0, document.body.scrollHeight);
    } else if (key == "t" || key == "T") {
      window.scrollTo(0,0);
      console.log("key pressed", key);
    }
  })