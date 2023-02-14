
 function validateName(strName){

    let str1 = strName.replace(".", "").split(" ");
    var len = str1.length;

     if (!strName.includes("."))
            return false;
    
    if (len < 2 || len > 3)
            return false;

    if(len===2){
           if(str1[0].length == 1){
               if(str1[0].charAt(0) < "a" && str1[0].charAt(0) >= "A"){
                   return true;
               }
           }
      }
       else{ return false;}

 }


console.log(validateName("Herbert George Wells"));
console.log(validateName("Herbert G. Wells"));
console.log(validateName("H. Wells"));
console.log(validateName("H. George Wells"));
console.log(validateName("h. George"));
console.log(validateName("Herbert"));
console.log(validateName("H Wells"));
console.log(validateName("H. G. Wells"));

