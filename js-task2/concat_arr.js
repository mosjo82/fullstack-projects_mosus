
function join_arr(arr){
    var n = arr.length
    var arr1 = [];
    var i=0;

    while(n!=0){
        arr1 = arr1.concat(arr[i]);
        n--;i++;
    }
    
    return arr1;
}

var arr = [[1,2,3],[5,4],[8,3,2,1,2],[9,12,4,1]]

console.log(join_arr(arr));