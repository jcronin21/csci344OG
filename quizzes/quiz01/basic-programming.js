// Q1. Your code here:

let array =[1,2,3];
let addNums = array.reduce(function(a,b,c){
    return a+b+c;
});

console.log(addNums);

function addNums1(theArray){
    function reducer(sum,nextValInArray){
        return sum +  nextValInArray;
    }
    theArray.reduce(reducer)
}

// When you have implemented your solution, 
// uncomment out the following code to test it:
// console.log('\n\n**********\nQuestion 1\n**********');
// console.log("Expected: 6, Actual:", addNums([1, 2, 3]));
// console.log("Expected: 221, Actual:", addNums([1, 4, 77, 12, 88, 33, 6]));




// Q2. Your code here:




// When you have implemented your solution, 
// uncomment out the following code to test it:
// console.log('\n\n**********\nQuestion 2\n**********');
// console.log("Expected: 6, Actual:", addNums1([1, 2, 3]));
// console.log("Expected: 221, Actual:", addNums1([1, 4, 77, 12, 88, 33, 6]));