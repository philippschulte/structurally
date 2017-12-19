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
     * Inserts one or multiple elements at the top of the stack.
     * @param elements {any} The elements to be inserted.
     */
    push(...elements) {
      if (!arguments.length) {
        throw new Error('The push method expects an element');
      }
      items.get(this).push(...elements);
    }

    /**
     * Removes and returns the element at the top of the stack.
     * @return {any} The removed element.
     */
    pop() {
      if (arguments.length) {
        throw new Error('The pop method does not take any arguments');
      }
      return items.get(this).pop();
    }
    
    /**
     * Returns the element at the top of the stack without removing it.
     * @return {any} The element at the top of the stack.
     */
    peek() {
      if (arguments.length) {
        throw new Error('The peek method does not take any arguments');
      }
      return items.get(this)[items.get(this).length - 1];
    }
    
    /**
     * Determines whether an element is in the stack.
     * @param element {any} The element in question.
     * @return {boolean} True or false depending whether the element is in the stack.
     */
    includes(element) {
      if (!arguments.length) {
        throw new Error('The includes method expects an element');
      }
      return items.get(this).includes(element);
    }
    
    /**
     * Tests if the stack is empty.
     * @return {boolean} True or false depending whether the stack is empty.
     */
    isEmpty() {
      if (arguments.length) {
        throw new Error('The isEmpty method does not take any arguments');
      }
      return items.get(this).length === 0;
    }
    
    /**
     * Returns the number of elements in the stack.
     * @return {number} The number of elements in the stack.
     */
    size() {
      if (arguments.length) {
        throw new Error('The size method does not take any arguments');
      }
      return items.get(this).length;
    }
    
    /** Removes all elements from the stack. */
    clear() {
      if (arguments.length) {
        throw new Error('The clear method does not take any arguments');
      }
      items.set(this, []);
    }
    
    /**
     * Returns a string representing the elements of the stack.
     * @return {string} All elements of the stack.
     */
    toString() {
      if (arguments.length) {
        throw new Error('The toString method does not take any arguments');
      }
      return items.get(this).toString();
    }
    
    /**
     * Copies the stack to a new array and returns it.
     * @return {array} A new array with all elements of the stack.
     */
    toArray() {
      if (arguments.length) {
        throw new Error('The toArray method does not take any arguments');
      }
      return items.get(this).slice();
    }
  }
  
  return () => new Stack();
})();
