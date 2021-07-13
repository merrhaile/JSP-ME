// We can use switch statement instead of if-else 
// if we have long list of items to select from
let sport = 'soccer'
let evaluate

switch(sport){
    case 'Soccer' : 
        evaluate = "The most watched sport all over the world";
        break;
    case 'American Football':
        evaluate = "Most common in the Us";
        break;
    case 'Basketball' : 
        evaluate = "Fairly watched";
        break;
    case 'Cycling' :
        evaluate = "Most common in Europe";
    case 'Tens' :
        evaluate = "Loved all over the world";
        break;
    default :
        evaluate = "Try another sport"
        break;

}
console.log(evaluate)