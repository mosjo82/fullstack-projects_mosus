var i=0;
setInterval(function(){
    var titles=[' Greeting Card Task', 'Happy Birthday Messi!!'];
    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 200);