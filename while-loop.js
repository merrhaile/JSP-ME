// As in for-loop repetition can be handled using while-loop

let result = 1;
let num = 5;
while(num > 0){
    result *= num;   // equivalent to (result = result * num)
    num--;      // equivalent to (num = num - 1)
}
console.log(result)