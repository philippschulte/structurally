# structurally

> Collection of useful, performant, and immutable JavaScript data structures

[![travis build](https://img.shields.io/travis/philippschulte/structurally.svg?style=flat-square)](https://travis-ci.org/philippschulte/structurally)
[![codecov coverage](https://img.shields.io/codecov/c/github/philippschulte/structurally.svg?style=flat-square)](https://codecov.io/gh/philippschulte/structurally)
[![npm version](https://img.shields.io/npm/v/structurally.svg?style=flat-square)](https://npm.im/structurally)
[![npm downloads](https://img.shields.io/npm/dm/structurally.svg?style=flat-square)](https://npm.im/structurally)
[![npm license](https://img.shields.io/npm/l/structurally.svg?style=flat-square)](LICENSE)

[![NPM](https://nodei.co/npm/structurally.png)](https://nodei.co/npm/structurally)

## Table of Contents

- [Features](#features)
- [Getting started](#getting-started)
- [API](#api)
- [Tests](#tests)
- [Contribute](#contribute)
- [License](#license)

## Features

### Sequential Data Structures

- [Stacks](#Stack)
- [Queues](#Queue)
- [Linked Lists](#LinkedList)
- [Sets](#Set)
- [Dictionaries](#Dictionarie)

### Non-Sequential Data Structures
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
  - [.peek()](#stackPeek)
  - [.includes(element)](#stackIncludes)
  - [.isEmpty()](#stackIsEmpty)
  - [.size()](#stackSize)
  - [.clear()](#stackClear)
  - [.toString()](#stackToString)
  - [.toArray()](#stackToArray)
- [Queue()](#Queue)
  - [.enqueue(element)](#enqueue)
  - [.dequeue()](#dequeue)
  - [.peek()](#queuePeek)
  - [.includes(element)](#queueIncludes)
  - [.isEmpty()](#queueIsEmpty)
  - [.size()](#queueSize)
  - [.clear()](#queueClear)
  - [.toString()](#queueToString)
  - [.toArray()](#queueToArray)

<a name="Stack"></a>

### [Stack()](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L12)

*Create a stack which is an ordered collection of items that follows the LIFO (Last In First Out) principle.*

**Example**:

```javascript
const { Stack } = require('structurally');

let stack = Stack();
```

**Kind**: constructor  
**Return**: {object} New Stack class instance.

<a name="push"></a>

### [.push(element)](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L22)

*Inserts one or multiple elements at the top of the stack.*

**Example**:

```javascript
// Add an element at the top of the stack one at the time
stack.clear();
stack.push('one');
stack.push('two');
stack.push('three');
stack.push('four');

console.log(stack.toString()); // => one,two,three,four

// Add multiple elements at the top of the stack at once
stack.push('five', 'six', 'seven', 'eight');

console.log(stack.toString()); // => one,two,three,four,five,six,seven,eight
```

**Kind**: method  
**Param**: element {primitive || object} The element to be inserted.

<a name="pop"></a>

### [.pop()](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L33)

*Removes and returns the element at the top of the stack.*

**Example**:

```javascript
stack.clear();
stack.push(1, 2, 3);

console.log(stack.size()); // => 3
console.log(stack.pop()); // => 3
console.log(stack.size()); // => 2
```

**Kind**: method  
**Return**: {primitive || object} The removed element.

<a name="stackPeek"></a>

### [.peek()](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L44)

*Returns the element at the top of the stack without removing it.*

**Example**:

```javascript
stack.clear();
stack.push('John', 'Amanda', 'Scott', 'Denise');

console.log(stack.size()); // => 4
console.log(stack.peek()); // => Denise
console.log(stack.size()); // => 4
```

**Kind**: method  
**Return**: {primitive || object} The element at the top of the stack.

<a name="stackIncludes"></a>

### [.includes(element)](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L56)

*Determines whether an element is in the stack.*

**Example**:

```javascript
stack.clear();
stack.push(1, 2, 3);

console.log(stack.includes(1)); // => true
console.log(stack.includes(4)); // => false
```

**Kind**: method  
**Param**: element {primitive || object} The element in question.  
**Return**: {boolean} True or false depending whether the element is in the stack.

<a name="stackIsEmpty"></a>

### [.isEmpty()](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L67)

*Tests if the stack is empty.*

**Example**:

```javascript
stack.clear();
stack.push('Taylor', 'Leon', 'Mark');

console.log(stack.isEmpty()); // => false
stack.clear();
console.log(stack.isEmpty()); // => true
```

**Kind**: method  
**Return**: {boolean} True or false depending whether the stack is empty.

<a name="stackSize"></a>

### [.size()](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L78)

*Returns the number of elements in the stack.*

**Example**:

```javascript
stack.clear();
stack.push(1, 2, 3, 4, 5);

console.log(stack.size()); // => 5
stack.clear();
console.log(stack.size()); // => 0
```

**Kind**: method  
**Return**: {number} The number of elements in the stack.

<a name="stackClear"></a>

### [.clear()](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L86)

*Removes all elements from the stack.*

**Example**:

```javascript
stack.clear();
stack.push('Taylor', 'Leon', 'Mark');

console.log(stack.size()); // => 3
console.log(stack.isEmpty()); // => false
stack.clear();
console.log(stack.size()); // => 0
console.log(stack.isEmpty()); // => true
```

**Kind**: method

<a name="stackToString"></a>

### [.toString()](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L97)

*Returns a string representing the elements of the stack.*

**Example**:

```javascript
stack.clear();
stack.push(1, 2, 3, 4, 5);

console.log(stack.toString()); // => 1,2,3,4,5
```

**Kind**: method  
**Return**: {string} All elements of the stack.

<a name="stackToArray"></a>

### [.toArray()](https://github.com/philippschulte/structurally/blob/master/lib/stack.js#L108)

*Copies the stack to a new array and returns it.*

**Example**:

```javascript
stack.clear();
stack.push('Taylor', 'Leon', 'Mark');

console.log(stack.toArray()); // => [ 'Taylor', 'Leon', 'Mark' ]
```

**Kind**: method  
**Return**: {array} A new array with all elements of the stack.

---

<a name="Queue"></a>

### [Queue()](https://github.com/philippschulte/structurally/blob/master/lib/queue.js#L12)

*Create a queue which is an ordered collection of items that follows the FIFO (First In First Out), also known as the first-come first-served principle.*

**Example**:

```javascript
const { Queue } = require('structurally');

let queue = Queue();
```

**Kind**: constructor  
**Return**: {object} New Queue class instance

<a name="enqueue"></a>

### [.enqueue(element)](https://github.com/philippschulte/structurally/blob/master/lib/queue.js#L22)

*Inserts one or multiple elements at the back of the queue.*

**Example**:

```javascript
// Add an element at the back of the queue one at the time
queue.clear();
queue.enqueue('one');
queue.enqueue('two');
queue.enqueue('three');
queue.enqueue('four');

console.log(queue.toString()); // => one,two,three,four

// Add multiple elements at the back of the queue at once
queue.enqueue('five', 'six', 'seven', 'eight');

console.log(queue.toString()); // => one,two,three,four,five,six,seven,eight
```

**Kind**: method  
**Param**: element {primitive || object} The element to be inserted.

<a name="dequeue"></a>

### [.dequeue()](https://github.com/philippschulte/structurally/blob/master/lib/queue.js#L33)

*Removes and returns the first element from the queue.*

**Example**:

```javascript
queue.clear();
queue.enqueue(1, 2, 3);

console.log(queue.size()); // => 3
console.log(queue.dequeue()); // => 1
console.log(queue.size()); // => 2
```

**Kind**: method  
**Return**: {primitive || object} The removed element.

<a name="queuePeek"></a>

### [.peek()](https://github.com/philippschulte/structurally/blob/master/lib/queue.js#L44)

*Returns the first element from the queue without removing it.*

**Example**:

```javascript
queue.clear();
queue.enqueue('John', 'Amanda', 'Scott', 'Denise');

console.log(queue.size()); // => 4
console.log(queue.peek()); // => John
console.log(queue.size()); // => 4
```

**Kind**: method  
**Return**: {primitive || object} The first element from the queue.

<a name="queueIncludes"></a>

### [.includes(element)](https://github.com/philippschulte/structurally/blob/master/lib/queue.js#L56)

*Determines whether an element is in the queue.*

**Example**:

```javascript
queue.clear();
queue.enqueue(1, 2, 3);

console.log(queue.includes(1)); // => true
console.log(queue.includes(4)); // => false
```

**Kind**: method  
**Param**: element {primitive || object} The element in question.  
**Return**: {boolean} True or false depending whether the element is in the queue.

<a name="queueIsEmpty"></a>

### [.isEmpty()](https://github.com/philippschulte/structurally/blob/master/lib/queue.js#L67)

*Tests if the queue is empty.*

**Example**:

```javascript
queue.clear();
queue.enqueue('Taylor', 'Leon', 'Mark');

console.log(queue.isEmpty()); // => false
queue.clear();
console.log(queue.isEmpty()); // => true
```

**Kind**: method  
**Return**: {boolean} True or false depending whether the queue is empty.

<a name="queueSize"></a>

### [.size()](https://github.com/philippschulte/structurally/blob/master/lib/queue.js#L78)

*Returns the number of elements in the queue.*

**Example**:

```javascript
queue.clear();
queue.enqueue(1, 2, 3, 4, 5);

console.log(queue.size()); // => 5
queue.clear();
console.log(queue.size()); // => 0
```

**Kind**: method  
**Return**: {number} The number of elements in the queue.

<a name="queueClear"></a>

### [.clear()](https://github.com/philippschulte/structurally/blob/master/lib/queue.js#L86)

*Removes all elements from the queue.*

**Example**:

```javascript
queue.clear();
queue.enqueue('Taylor', 'Leon', 'Mark');

console.log(queue.size()); // => 3
console.log(queue.isEmpty()); // => false
queue.clear();
console.log(queue.size()); // => 0
console.log(queue.isEmpty()); // => true
```

**Kind**: method

<a name="queueToString"></a>

### [.toString()](https://github.com/philippschulte/structurally/blob/master/lib/queue.js#L97)

*Returns a string representing the elements of the queue.*

**Example**:

```javascript
queue.clear();
queue.enqueue(1, 2, 3, 4, 5);

console.log(queue.toString()); // => 1,2,3,4,5
```

**Kind**: method  
**Return**: {string} All elements of the queue.

<a name="queueToArray"></a>

### [.toArray()](https://github.com/philippschulte/structurally/blob/master/lib/queue.js#L108)

*Copies the queue to a new array and returns it.*

**Example**:

```javascript
queue.clear();
queue.enqueue('Taylor', 'Leon', 'Mark');

console.log(queue.toArray()); // => [ 'Taylor', 'Leon', 'Mark' ]
```

**Kind**: method  
**Return**: {array} A new array with all elements of the queue.

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

Licensed under the [MIT License](LICENSE) © 2018 Philipp Schulte
