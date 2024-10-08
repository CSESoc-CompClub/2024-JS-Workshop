# 🎃 2024-JS-Workshop 🎃

## How to run collections of tests

- **Running all tests:** `npm test`
- **Running beginner tests:** `npm run test-beginner`
- **Running intermediate tests:** `npm run test-intermediate`

> [!IMPORTANT]
> PLEASE REMOVE THE BELOW BEFORE DISTRIBUTION

## For Dev (to be removed for distribution)

### Adding Tests
For all of the below, put all tests that require a particular function in a new file!!
e.g. for all tests of function `dothething()` in `src/beginner/dothething.js`, make a test file `src/beginner/dothething.test.js` and write all your tests there. this is to make sure that test compile!

Additionally for each test file, make a new test script in `package.json`. Currently the scripts look like:
```json
"scripts": {
    "test": "vitest",
    "test-beginner": "vitest src/beginner",
    "test-intermediate": "vitest src/intermediate"
},
```
For your new `src/beginner/dothething.test.js`, please add the script:
```json
"scripts": {
    "test": "vitest",
    "test-beginner": "vitest src/beginner",
    "test-beginner-dothething": "vitest src/beginner/dothething.test.js",
    "test-intermediate": "vitest src/intermediate"
},
```

### Theming
**Make sure it is themed for halloween.**

For Beginner, theme is just part of the variables and functions, don't stress about writing anything for it.

For Intermediate, we will have some pre-written code, add some story in the comment on top. Internals will add this onto their website.

For Advanced, literally do whatever you want lol. We'd like maybe 2 easy leatcode questions (but themed with halloween). Also could do something like a calculator website. Do whatever, just make it hardish.

### Beginner
**All we essentially have to do is write the tests here! Feel free to skip any of the below if they feel unnessary/ derived.**

**Topics:**
- Type of
- Numbers
- Number Methods (toString(), parseInt())
- Number Properties ([w3schools](https://www.w3schools.com/js/js_number_properties.asp), just cover NaN maybe, this is less imporant)
- Operators and Arithmetic
- Math - [w3schools](https://www.w3schools.com/js/js_math.asp), maybe get them to sqrt or round something
- Random - just try to get them to return a random number in a range, and make sure its in the range
- String Methods
- String Search
- String Templates - e.g. `` `something is {variable}` ``
- Boolean
- Undefined
- Null
- Dates: Formatting, get and set
- arr methods
- arr search
- arr sort
- Comparisons - less than, greater than so on
- If Else - 
- Switch
- While loop
- For loop
- For in loop
- For of loop \- mention iterables
- Break
- Functions
- Objects
- Object Properties
- Object Methods
- Classes
- This keyword
- Arrow Function
