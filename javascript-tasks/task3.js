//Task - 3: Implement enqueue and dequeue using only two stacks

var st1 = [];
var st2 = [];

function enqueue(stk_ip, element) {
    return stk_ip.push(element);
}

function dequeue(stk_ip, stk_op) {
    var e = stk_ip.pop();
    stk_op.push(e);
    stk_op.pop();
}

var arr = [3,6,8,2,5,2,1,12];
var j;

for(j=0;j<arr.length;j++){
    enqueue(st1,arr[j]);
    dequeue(st1,st2);
}




