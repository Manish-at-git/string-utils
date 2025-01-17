const { capitalize, reverseString, isPalindrome } = require('../src/stringUtils');

test('capitalize should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('reverseString should reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('isPalindrome should check if a string is a palindrome', () => {
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
});
