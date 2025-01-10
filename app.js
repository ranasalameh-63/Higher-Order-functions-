//////// Q1 (for)
let input = [1,2,3]
function power(arr){
let result = [];
for(let i =0; i < arr.length ; i++){
    result.push(Math.pow(2, arr[i]));
}
return result;
}
console.log(power(input));

///////// (forEach)
function powerforEach(arr){
let result = [];
arr.forEach(element => {
    result.push(Math.pow(2, element));
});
return result;
}
console.log(powerforEach(input));

///////////// (Map)
function powerMap(arr){
    return arr.map(element => Math.pow(2, element));
}
console.log(powerMap(input));

///////// Q2
let input3 = [1,2,3,"Rawan"];
function oddEven (array){
        return array.map(element => {
    if (typeof element !== 'number' ){
        return "N/A";
    }
    return element % 2 === 0 ? "even" : "odd";
    })
}
console.log(oddEven(input3));


/////////// Q3
let input1 = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
function returnNames(arr){
    let result = [];
    arr.forEach(element => {
        result.push(element);
    });
    return result;
}
console.log(returnNames(input1));


let input2 = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
function print(array){
    array.forEach(element => {
        console.log(element);
    });
}
print(input2);

/////////// Q4
let input4 =[3,5,10,20,10];
function fizzbuzz(array){
return array.map(element =>{
    if (element % 3 === 0){
 return "Fizz";
    }
    else if (element % 5 === 0){
        return "Buzz";
    }
   else if (element % 3 === 0 && input4 % 5 === 0){
        return "Fizz Buzz";
    } else{
        return element;
    }
})
}
console.log(fizzbuzz(input4));







