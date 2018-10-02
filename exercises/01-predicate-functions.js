// TIP:
// A predicate function is a function that returns boolean true or false
// They are useful for improving the semantics of checking for conditions.
// Examples:
// - isUserLoggedIn(user)
// - isString(s)
// - isValidZipCode(code)
// etc

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isVowel" that takes a character (i.e. a string of length 1)
// as input and returns true if it is a vowel, false otherwise.
//
// Useful resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
// Examples:
// isVowel('c') --> false
// isVowel('e') --> true
// isVowel('A') --> true
// isVowel(99) --> false
// isVowel({e: 'Elephant'}) --> false
var vowels = {
	a: true,
	e: true,
	i: true,
	o: true,
    u: true,
    A: true,
	E: true,
	I: true,
	O: true,
	U: true,
}
var output = '';

function isVowel(inputLetter) {
	if (inputLetter in vowels) {
		output = true
	} else {
		output = false;
    }
	return output
}
isVowel('A')




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write two functions: "isEven" and "isOdd" that take a number argument and
// return true or false if the number is even or odd, respectively.
// The functions should return "false" if the number passed in is not an integer.
//
// Examples:
// isEven(100) --> true
// isEven(1) --> false
// isEven(-2) --> true
// isEven('banana') --> false
// isOdd(5) --> true
// isOdd('7') --> false
// isOdd(3.14) --> false
var output = '';

function isEven (inputValue) {
	if (inputValue % 2 == 0) {
        output = true;
    }
    else {
        output = false
    }
    return output;
}
function isOdd (inputValue) {
	if (inputValue % 2 == 1 || inputValue % 2 == -1) {
        output = true;
    }
    else {
        output = false
    }
    return output;
}
isOdd('-3')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isCapitalCity" that takes two arguments: a US state and a city name
// and returns true or false if the city name is the capital of the state.
// The function should return false if the state name is not a valid US state.
//
// Hint 1: What is the best data structure to store this information? Object? Array? etc.
// Hint 2: This problem can be solved without using a "for" or "while" loop.
//
// Examples:
// isCapitalCity('Texas', 'Austin') --> true
// isCapitalCity('Texas', 'Houston') --> false
// isCapitalCity('Alaska', 'Juneau') --> true
// isCapitalCity('Strawberry', 'Mango') --> false
var capitalCities = [{
    State: 'Alabama',
    City: 'Montgomery'
},
{
    State: 'Alaska',
    City: 'Juneau'
},
{
    State: 'Arizona',
    City: 'Phoenix'
},
{
    State: 'Arkansas',
    City: 'Little Rock'
},
{
    State: 'California',
    City: 'Sacramento'
},
{
    State: 'Colorado',
    City: 'Denver'
},
{
    State: 'Connecticut',
    City: 'Hartford'
},
{
    State: 'Delaware',
    City: 'Dover'
},
{
    State: 'Florida',
    City: 'Tallahassee'
},
{
    State: 'Georgia',
    City: 'Atlanta'
},
{
    State: 'Hawaii',
    City: 'Honolulu'
},
{
    State: 'Idaho',
    City: 'Boise'
},
{
    State: 'Illinois',
    City: 'Springfield'
},
{
    State: 'Indiana',
    City: 'Indianapolis'
},
{
    State: 'Iowa',
    City: 'Des Moines'
},
{
    State: 'Kansas',
    City: 'Topeka'
},
{
    State: 'Kentucky',
    City: 'Frankfort'
},
{
    State: 'Louisiana',
    City: 'Baton Rouge'
},
{
    State: 'Maine',
    City: 'Augusta'
},
{
    State: 'Maryland',
    City: 'Annapolis'
},
{
    State: 'Massachusetts',
    City: 'Boston'
},
{
    State: 'Michigan',
    City: 'Lansing'
},
{
    State: 'Minnesota',
    City: 'Saint Paul'
},
{
    State: 'Mississippi',
    City: 'Jackson'
},
{
    State: 'Missouri',
    City: 'Jefferson City'
},
{
    State: 'Montana',
    City: 'Helena'
},
{
    State: 'Nebraska',
    City: 'Lincoln'
},
{
    State: 'Nevada',
    City: 'Carson City'
},
{
    State: 'New Hampshire',
    City: 'Concord'
},
{
    State: 'New Jersey',
    City: 'Trenton'
},
{
    State: 'New Mexico',
    City: 'Santa Fe'
},
{
    State: 'New York',
    City: 'Albany'
},
{
    State: 'North Carolina',
    City: 'Raleigh'
},
{
    State: 'North Dakota',
    City: 'Bismarck'
},
{
    State: 'Ohio',
    City: 'Columbus'
},
{
    State: 'Oklahoma',
    City: 'Oklahoma City'
},
{
    State: 'Oregon',
    City: 'Salem'
},
{
    State: 'Pennsylvania',
    City: 'Harrisburg'
},
{
    State: 'Rhode Island',
    City: 'Providence'
},
{
    State: 'South Carolina',
    City: 'Columbia'
},
{
    State: 'South Dakota',
    City: 'Pierre'
},
{
    State: 'Tennessee',
    City: 'Nashville'
},
{
    State: 'Texas',
    City: 'Austin'
},
{
    State: 'Utah',
    City: 'Salt Lake City'
},
{
    State: 'Vermont',
    City: 'Montpelier'
},
{
    State: 'Virginia',
    City: 'Richmond'
},
{
    State: 'Washington',
    City: 'Olympia'
},
{
    State: 'West Virginia',
    City: 'Charleston'
},
{
    State: 'Wisconsin',
    City: 'Madison'
},
{
    State: 'Wyoming',
    City: 'Cheyenne'
},
]

var output = '';

function isCapitalCity(inputState, inputCity) {
for (var i = 0; i < capitalCities.length; i++) {
    if (capitalCities[i].City === inputCity) {
        var State = capitalCities[i].State;
    }
    if (State === inputState) {
        var output = true
    } else {
        var output = false
    }
}
return output
}
isCapitalCity('Strawberry', 'mango')