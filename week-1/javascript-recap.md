# Javascript Recap
React is een Javascript library waarin een hoop Javascript concepten terugkomen. Zoals:
<details>
<summary>Klik om te ontvouwen</summary>

- const / let
- Template strings
- Arrays/Objects
- Array methods (filter, find, etc.)
- Spread operator
- array/object destructuring
- import/export
- arrow functions
- lexical scope
- Promises
- Fetch API
- en meer.
</details>

## Uppercase a string
Complete the function sayLouder such that it makes the text in uppercase.
```diff
/**
 * @param {string} text
 */
function sayLouder(text) {
+   return text.toUpperCase();
}

// sample usage (do not modify)
console.log(sayLouder("It works"));
console.log(sayLouder("how are you?"));
```

## Array.filter recap
Arrays kun je filteren door de .filter methode. Dit geeft een **nieuwe** array terug gebaseerd op de voorwaarde in de callback.

### Array filter
Complete the function getPositiveNumbers such that it returns all numbers greater than 0.
```diff
/**
 * @param {number[]} numbers
 */
function getPositiveNumbers(numbers) {
    console.log(numbers);
+   return numbers.filter(number => number >= 0);
}

// sample usage (do not modify)
console.log(getPositiveNumbers([10, -5, 2, -4]));
```
### Array of objects filter
Complete the function getPassingTests such that it returns all the test results that have a passing grade (10 and above).
```diff
/**
 * @param {object[]} results
 */
function getPassingTests(results) {
+   console.log(results);
    
    // Mijn oplossing
    return results.filter(result => result.grade >= 10);
}

// sample usage (do not modify)
const data = [{
    id: 1,
    grade: 10
}, {
    id: 2,
    grade: 4
}, {
    id: 3,
    grade: 18
}]
console.log(getPassingTests(data))
```
---
## [Ga naar: 2. React Intro](react-intro.md)