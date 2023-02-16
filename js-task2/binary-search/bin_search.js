

function bin_srch(strt,end,e,s_arr){

    var mid = Math.floor((strt+end)/2);

    if(strt<=end){
        if(s_arr[mid]==e){
            flag = true;
            
        }

        else if(s_arr[mid]<e){
            var strt1 = mid+1;
            bin_srch(strt1,end,e,s_arr);
        }
        
        else if(s_arr[mid]>e){
            var end1 = mid-1;
            bin_srch(strt,end1,e,s_arr);

        }
    }
    else{
        flag = false;
    }
    
}

let arr = [2,6,8,12,14,16,17,19,23];
var element = 17;
var end = arr.length-1;
var flag = null;

bin_srch(0,end,element,arr);

if(flag){
    console.log("Element found!");
}
else{
    console.log("Element not found");
}