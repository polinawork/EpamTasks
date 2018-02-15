const x = [1, 2, 3];

const callback = (x)=> x*x;

const map = function(array, callback){
    let res = [];
    for(let i = 0; i<array.length; ++i){
        res.push(callback(array[i]));
    }
    return res;
}

const y = map(x, callback);

console.log(y);