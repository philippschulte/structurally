'use strict';

/**
 * Stack class.
 * @module lib/stack
 */

module.exports = (() => {
  const items = new WeakMap();

  /** Class representing a stack data structure. */
  class Stack {
    /** Create a stack. */
    constructor () {
      items.set(this, []);
    }

    /**
     * Inserts an element at the top of the stack.
     * @param element {any} The element to be inserted.
     */
    push(element) {
      items.get(this).push(element);
    }

    /**
     * Removes and returns the element at the top of the stack.
     * @return {any} The removed element.
     */
    pop() {
      return items.get(this).pop();
    }

    /**
     * Returns the element at the top of the stack without removing it.
     * @return {any} The element at the top of the stack.
     */
    peek() {
      return items.get(this)[items.get(this).length - 1];
    }

    /**
     * Determines whether an element is in the stack.
     * @param element {any} The element in question.
     * @return {boolean} True or false depending whether the element is in the stack.
     */
    includes(element) {
      return items.get(this).includes(element);
    }

    /**
     * Tests if the stack is empty.
     * @return {boolean} True or false depending whether the stack is empty.
     */
    isEmpty() {
      return items.get(this).length === 0;
    }

    /**
     * Returns the number of elements in the stack.
     * @return {number} The number of elements in the stack.
     */
    size() {
      return items.get(this).length;
    }
    
    /** Removes all elements from the stack. */
    clear() {
      items.set(this, []);
    }

    /**
     * Returns a string representing the elements of the stack.
     * @return {string} All elements of the stack.
     */
    toString() {
      return items.get(this).toString();
    }
    
    /**
     * Copies the stack to a new array and returns it.
     * @return {array} A new array with all elements of the stack.
     */
    toArray() {
      return items.get(this).slice();
    }
  }

  return Stack;
})();
