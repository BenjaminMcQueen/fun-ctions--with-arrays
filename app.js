let arr = [];
for (let i=0; i<10; i++){
    arr.push(i*Math.random());
}

function _1(a = [], b = ""){
    return a.push(b);
}

console.log(_1(arr, Math.random()*11));

function _2(a = [], b=""){
    return a.splice(a.length,0,b);
}

console.log(_2(arr));

function _3(a = [], b=0, c=a.length){
    return a.slice(b, c);
}

let newArr = [];
console.log(newArr= _3(arr, 0, 5));