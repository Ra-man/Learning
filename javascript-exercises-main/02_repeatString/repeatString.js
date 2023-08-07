const repeatString = function(word, num) {
    let concat = '';
   if(num<0){
    return 'ERROR';
    } else {
    for(let i = 0;i<num ; i++){
        concat += word;
    }
    return concat;
   }
};

// Do not edit below this line
module.exports = repeatString;
