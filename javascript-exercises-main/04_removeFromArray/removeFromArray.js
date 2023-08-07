/*const removeFromArray = function(array,num) {
    let removePart = num-1;
    array.splice(removePart,1);
    return array;
};
this part can only remove 1 item guiven his corresponding position inside the array
so in a 1.2.3.4 sequence and you want to remove 3 you can
bu in a 1.2.4.3 sequence and you want to remove 4 you have to use the 3, whice is his position
**/
// Do not edit below this line
const removeFromArray = function(itens,...num){
    var newItens = [];
    itens.forEach((item) =>{
        if(!num.includes(item))    
        newItens.push(item);
        }
    ); 
return newItens;
}

module.exports = removeFromArray;
