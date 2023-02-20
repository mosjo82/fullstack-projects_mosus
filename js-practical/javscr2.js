
class Utilities{

    static camelCase(str){
        let arr1 = [];
        let s2 =[];
        let strArr = str.toLowerCase().split(" ");

        let s1 = strArr[0];
        for(var i=1;i<strArr.length;i++){
            arr1 = arr1.concat(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1));
        }
        s2 = s1.concat(arr1);

        return(s2);

    }
}

console.log(Utilities.camelCase("hello world"));
console.log(Utilities.camelCase("hello there"));
console.log(Utilities.camelCase("HELLO THERE"));      
console.log(Utilities.camelCase("Monkey Banana"));