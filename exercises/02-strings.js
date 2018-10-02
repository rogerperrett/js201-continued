// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"
function reverse (inputString) {
    var splitString = inputString.split('');
    var reverseString = splitString.reverse();
    var joinString = reverseString.join('');
    return joinString;
}
reverse('skoob')


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
function findLongestWord (inputString) {
    var splitString = inputString.split(' ')
    var longestWord = 0;
    var word = null;
    for(var i = 0; i < splitString.length; i++) {
        if(longestWord < splitString[i].length) {
            longestWord = splitString[i].length;
            word = splitString[i]
        }
    }
    return word;
}
findLongestWord('a book full of dogs')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'
function nicer (inputString) {
    var forbiddenWords = inputString.replace(/heck |darn |dang |crappy /gi, '')
    return forbiddenWords
   }
   nicer('mom get the heck in here and bring me a darn sandwich.')


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
function capitalizeAll (inputString) {
    return inputString.toLowerCase().split(' ').map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
}
capitalizeAll('every day is like sunday')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
function split(stringInput, delimiterInput) {
	var splitWord = stringInput.replace(new RegExp(delimiterInput, 'g'), '*');
	var stringInputArray = [''];
	var findDelimiter = 0;
	var newDelimiter = '*';
	for (var i = 0; i < splitWord.length; i++) {
		if (splitWord.charAt(i) == newDelimiter) {
			findDelimiter++;
			stringInputArray.push('');
		} else {
			stringInputArray[findDelimiter] += splitWord.charAt(i);
		}
	}
	return stringInputArray;
}
split('a-b-c', '-')