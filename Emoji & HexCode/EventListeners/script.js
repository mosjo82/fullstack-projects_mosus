var count=0;
function switchEmoji(){
    count++;
    if(count%2==0){
        document.getElementById("emoji").innerHTML = "😊";
        document.body.style.backgroundColor = "white";
        document.getElementById("container").style.backgroundColor = "beige";
        document.getElementById("emoji").style.backgroundColor = "beige";
    }
    else{
        document.getElementById("emoji").innerHTML = "😁";
        document.body.style.backgroundColor = "beige";
        document.getElementById("container").style.backgroundColor = "white";
        document.getElementById("emoji").style.backgroundColor = "white";
    }
}

function hovEmoji(){
    document.getElementById("circle-con").style.width = "375px";
    document.getElementById("circle-con").style.height = "375px";
}

function outEmoji(){
    document.getElementById("circle-con").style.width = "250px";
    document.getElementById("circle-con").style.height = "250px";
}