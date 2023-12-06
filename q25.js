let target = 1000;
let f1 = BigInt(1);
let f2 = BigInt(1);
let current = BigInt(0);
let iteration = 2;

while(current.toString().length != target){
	iteration++;
	current = f1+f2;
	f1 = f2;
	f2 = current;
}
console.log(iteration);