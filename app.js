// # ****Maps and Sets Exercise****

// ## **Quick Question #1**

// What does the following code return?

// ```jsx
// new Set([1,1,2,2,3,4])
// ```

```It makes a new // Set {1,2,3,4,} ```;

// ## **Quick Question #2**

// What does the following code return?

// ```jsx
// [...new Set("referee")].join("")
// ```

```It creates a set from the string 'referee' and will remove duplicate characters because sets only allow for unique values.  Uses the spread operator to convert characters into an array. Then is used .join to concatenate the array elements into a single string which will output 'ref'```;

// ## **Quick Questions #3**

// What does the Map ***m*** look like after running the following code?

// ```jsx
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// ```
`Map 'm' will have two key-value pairs and will look like:
key: '[1,2,3]', value: true
key: '[1,2,3]', value: false`;

// ## **hasDuplicate**

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// ```jsx
// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false
// ```

function hasDuplicate(arr) {
	const uniqueSet = new Set(arr);
	return uniqueSet.size !== arr.length;
}

// ## **vowelCount**

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// ```jsx
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }
// ```

function vowelCount(str) {
	str = str.toLowerCase();
	const vowels = new Set(["a", "e", "i", "o", "u"]);
	const vowelMap = new Map();
	for (const char of str) {
		if (vowels.has(char)) {
			const count = vowelMap.get(char) || 0;
			vowelMap.set(char, count + 1);
		}
	}
	return vowelMap;
}
