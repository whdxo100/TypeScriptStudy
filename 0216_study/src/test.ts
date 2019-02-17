function getSum(nums : number[]){
    let sum:number = nums.reduce( (a,b) => {return a+b;} );
    return sum;
}

let tempsum = getSum([1,2,3,4,5]);
console.log(tempsum);