//Task 5 - Given two strings, return true if they are anagrams of one another

function anagrams(string1,string2){

    var i,j;
    let count=0;

    for(i=0;i<string1.length;i++)
        for(j=0;j<string2.length;j++)
            if(string1[i]==string2[j])
                count++;

    
    if(count==string1.length && count==string2.length){
        return true;
    }
}

var res = anagrams("mary","army");

if(res){
    console.log("It is an Anagram!");
}
else{
    console.log("It is not an Anagram!");
}