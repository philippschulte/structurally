# structurally

> Collection of useful, performant, and immutable JavaScript data structures

[![travis build](https://img.shields.io/travis/philippschulte/structurally.svg?style=flat-square)](https://travis-ci.org/philippschulte/structurally)
[![codecov coverage](https://img.shields.io/codecov/c/github/philippschulte/structurally.svg?style=flat-square)](https://codecov.io/gh/philippschulte/structurally)
[![npm version](https://img.shields.io/npm/v/structurally.svg?style=flat-square)](https://npm.im/structurally)
[![npm downloads](https://img.shields.io/npm/dm/structurally.svg?style=flat-square)](https://npm.im/structurally)
[![npm license](https://img.shields.io/npm/l/structurally.svg?style=flat-square)](LICENSE)

[![NPM](https://nodei.co/npm/structurally.png)](https://nodei.co/npm/structurally)

## Table of Contents

- [Motivation](#motivation)
- [Features](#features)
- [Getting started](#getting-started)
- [API](#api)
- [Tests](#tests)
- [Contribute](#contribute)
- [License](#license)

## Motivation

I needed a library for JavaScript data structures I can use from a browser and Node.js.

## Features

- [Stacks](#Stack)
- [Queues](#Queue)
- [Linked Lists](#LinkedList)
- [Sets](#Set)
- [Dictionaries](#Dictionarie)
- [Hashes](#Hash)
- [Trees](#Tree)
- [Graphs](#Graph)

## Getting started

### NPM

This is a [Node.js](https://nodejs.org/) module available through the [npm registry](https://www.npmjs.com/). Installation is done using the [`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install structurally
```

Then require it into any module:

```javascript
const Structurally = require('structurally');

let stack = Structurally.Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.clear();
```

### Browser

To use `structurally` from a browser, download `dist/structurally.min.js` or use a CDN such as [CDNJS](https://cdnjs.com/libraries/structurally).

Then add it as a script tag to your page:

```html
<script src="structurally.min.js"></script>
<script>
  let stack = Structurally.Stack();

  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.clear();
</script>
```

## API

- [Stack()](#Stack)
  - [.push(element)](#push)
  - [.pop()](#pop)
  - [.peek()](#peek)
  - [.includes(element)](#includes)
  - [.isEmpty()](#isEmpty)
  - [.size()](#size)
  - [.clear()](#clear)
  - [.toString()](#toString)
  - [.toArray()](#toArray)

<a name="Stack"></a>

### [Stack()](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L14)

*Create a stack which is an ordered collection of items that follows the LIFO (Last In First Out) principle.*

**Example**:

```javascript
const { Stack } = require('structurally');

let stack = Stack();
```

**Kind**: constructor  
**Return**: {object} New Stack class instance

<a name="push"></a>

### [.push(element)](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L25)

*Inserts an element at the top of the stack.*

**Example**:

```javascript
stack.clear();
stack.push('one');
stack.push('two');
stack.push('three');
stack.push('four');

console.log(stack.toString()); // => one,two,three,four
```

**Kind**: method  
**Param**: element {primitive || object} The element or elements to be inserted.

<a name="pop"></a>

### [.pop()](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L36)

*Removes and returns the element at the top of the stack.*

**Example**:

```javascript
stack.clear();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.size()); // => 3
console.log(stack.pop()); // => 3
console.log(stack.size()); // => 2
```

**Kind**: method  
**Return**: {primitive || object} The removed element.

<a name="peek"></a>

### [.peek()](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L47)

*Returns the element at the top of the stack without removing it.*

**Example**:

```javascript
stack.clear();
stack.push('John');
stack.push('Amanda');
stack.push('Scott');
stack.push('Denise');

console.log(stack.size()); // => 4
console.log(stack.peek()); // => Denise
console.log(stack.size()); // => 4
```

**Kind**: method  
**Return**: {primitive || object} The element at the top of the stack.

<a name="includes"></a>

### [.includes(element)](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L59)

*Determines whether an element is in the stack.*

**Example**:

```javascript
stack.clear();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.includes(1)); // => true
console.log(stack.includes(4)); // => false
```

**Kind**: method  
**Param**: element {primitive || object} The element in question.  
**Return**: {boolean} True or false depending whether the element is in the stack.

<a name="isEmpty"></a>

### [.isEmpty()](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L70)

*Tests if the stack is empty.*

**Example**:

```javascript
stack.clear();
stack.push('Taylor');
stack.push('Leon');
stack.push('Mark');

console.log(stack.isEmpty()); // => false
stack.clear();
console.log(stack.isEmpty()); // => true
```

**Kind**: method  
**Return**: {boolean} True or false depending whether the stack is empty.

<a name="size"></a>

### [.size()](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L81)

*Returns the number of elements in the stack.*

**Example**:

```javascript
stack.clear();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.size()); // => 5
stack.clear();
console.log(stack.size()); // => 0
```

**Kind**: method  
**Return**: {number} The number of elements in the stack.

<a name="clear"></a>

### [.clear()](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L89)

*Removes all elements from the stack.*

**Example**:

```javascript
stack.clear();
stack.push('Taylor');
stack.push('Leon');
stack.push('Mark');

console.log(stack.size()); // => 3
console.log(stack.isEmpty()); // => false
stack.clear();
console.log(stack.size()); // => 0
console.log(stack.isEmpty()); // => true
```

**Kind**: method

<a name="toString"></a>

### [.toString()](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L100)

*Returns a string representing the elements of the stack.*

**Example**:

```javascript
stack.clear();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.toString()); // => 1,2,3,4,5
```

**Kind**: method  
**Return**: {string} All elements of the stack.

<a name="toArray"></a>

### [.toArray()](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L111)

*Copies the stack to a new array and returns it.*

**Example**:

```javascript
stack.clear();
stack.push('Taylor');
stack.push('Leon');
stack.push('Mark');

console.log(stack.toArray()); // => [ 'Taylor', 'Leon', 'Mark' ]
```

**Kind**: method  
**Return**: {array} A new array with all elements of the stack.

## Tests

To run the test suite, first install the dependencies, then run the [`npm test` command](https://docs.npmjs.com/cli/test):

```bash
$ npm install
$ npm test
```

## Contribute

PRs accepted. I am open to suggestions in improving this library. Commit by:

```bash
$ npm run commit
```

## License

Licensed under the [MIT License](LICENSE) © 2017 Philipp Schulte
