// src/stringUtils.js
const capitalize = (str) => {
    if (typeof str !== 'string') throw new Error('Input must be a string');
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverseString = (str) => {
    if (typeof str !== 'string') throw new Error('Input must be a string');
    return str.split('').reverse().join('');
};

const isPalindrome = (str) => {
    if (typeof str !== 'string') throw new Error('Input must be a string');
    const reversed = reverseString(str);
    return str === reversed;
};

module.exports = {
    capitalize,
    reverseString,
    isPalindrome,
};
