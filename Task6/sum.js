function sumValue() {
   let value = 0;
   return function() {
      const args = [...arguments];  
		for(let i=0; i<args.length; ++i){
			value += args[i];
    	}
		return value;
   }
}
let sum = sumValue();

let result;

result = sum(1);
console.log(result);

result = sum(2);
console.log(result); 

result = sum(3, 4);
console.log(result); 

result = sum(5, 6, 7);
console.log(result);
