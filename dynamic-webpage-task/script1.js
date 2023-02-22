//Title Tag

var i=0;
setInterval(function(){
    let titles = ['40% OFF','Book Now!'];
    if(i===titles.length){
        i=0;
    }
    document.title = titles[i];
    i++;
}, 200);


//para

function myFunction() {
    document.getElementById("main-para").style.animationDirection = "reverse";
  }

function myFunc(){
  document.getElementById("hd").innerHTML = "WHY SHOULD YOU TUNE?";
}


function chgCol(){
    document.getElementsByTagNameNS("p").style.color = "#ff2a00";
}


