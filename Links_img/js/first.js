let add7 = (add7) => add7 + 7;
console.log(add7 (9));

let multiply = (a,b) => a*b; 
console.log(multiply (5,2));


function capitalize (change){
    let upper = change.substr(0,1).toUpperCase() + change.slice(1);
    return upper;
}
console.log(capitalize('abacate'));

function lastLetter (pick){
    let length = pick.length -1;
    let last = pick.substr(length,1);
    return last;
}
console.log(lastLetter('vinte um'))