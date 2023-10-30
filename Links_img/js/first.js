/*let add7 = (add7) => add7 + 7;
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

    a <p> with red text that says “Hey I’m red!”
    an <h3> with blue text that says “I’m a blue h3!”
    a <div> with a black border and pink background color with the following elements inside of it:
        another <h1> that says “I’m in a div”
        a <p> that says “ME TOO!”
        Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.


**/

const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const p1 = document.createElement('p')
p1.style.cssText = 'color : red';
p1.textContent = 'Hey I\'m red';
container.appendChild(p1);

const h3 = document.createElement('h3');
h3.style.cssText = 'color :blue';
h3.textContent = 'I\'m a blue h3';
container.appendChild(h3);

const newDiv = document.createElement('div');
newDiv.style.cssText = 'background-color: pink ; border-color : black ; border-width : 5px ; border-style: solid;';

const h1Div = document.createElement('h1');
h1Div.textContent = 'Hi, i\'m in a div';
newDiv.appendChild(h1Div);
const pDiv = document.createElement('p');
pDiv.textContent = 'Me Too';
newDiv.appendChild(pDiv);

container.appendChild(newDiv);