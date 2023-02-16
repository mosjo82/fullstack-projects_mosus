function oddishOrEvenish(n){
    var sum=0
    var temp=0
    while(n!=0){
        temp = n % 10;
        sum = sum + temp;
        n = n / 10;
        n = Math.floor(n);
    }
    if(sum%2==0){
        console.log("Evenish");
    }
    else{
        console.log("Oddish");
    }
}

oddishOrEvenish(43)
oddishOrEvenish(373)
oddishOrEvenish(4433)