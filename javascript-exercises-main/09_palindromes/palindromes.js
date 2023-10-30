const palindromes = function (pali) {
    const newPali = pali.toLowerCase().replace(/[^a-z0-9]/g, "");
    return newPali.split("").reverse().join("") == newPali;
};

// Do not edit below this line
module.exports = palindromes;
