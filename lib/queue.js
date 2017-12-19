'use strict';

/**
 * Queue class.
 * @module lib/queue
 */

module.exports = (() => {
  const items = new WeakMap();

  /** Class representing a queue data structure. */
  class Queue {
    /** Create a queue. */
    constructor () {
      items.set(this, []);
    }

    /**
     * Inserts one or multiple elements at the back of the queue.
     * @param elements {any} The elements to be inserted.
     */
    enqueue(...elements) {
      if (!arguments.length) {
        throw new Error('The enqueue method expects an element');
      }
      items.get(this).push(...elements);
    }

    /**
     * Removes and returns the first element from the queue.
     * @return {any} The removed element.
     */
    dequeue() {
      if (arguments.length) {
        throw new Error('The dequeue method does not take any arguments');
      }
      return items.get(this).shift();
    }

    /**
     * Returns the first element from the queue without removing it.
     * @return {any} The element at the beginning of the queue.
     */
    peek() {
      if (arguments.length) {
        throw new Error('The peek method does not take any arguments');
      }
      return items.get(this)[0];
    }
    
    /**
     * Determines whether an element is in the queue.
     * @param element {any} The element in question.
     * @return {boolean} True or false depending whether the element is in the queue.
     */
    includes(element) {
      if (!arguments.length) {
        throw new Error('The includes method expects an element');
      }
      return items.get(this).includes(element);
    }
    
    /**
     * Tests if the queue is empty.
     * @return {boolean} True or false depending whether the queue is empty.
     */
    isEmpty() {
      if (arguments.length) {
        throw new Error('The isEmpty method does not take any arguments');
      }
      return items.get(this).length === 0;
    }
    
    /**
     * Returns the number of elements in the queue.
     * @return {number} The number of elements in the queue.
     */
    size() {
      if (arguments.length) {
        throw new Error('The size method does not take any arguments');
      }
      return items.get(this).length;
    }
    
    /** Removes all elements from the queue. */
    clear() {
      if (arguments.length) {
        throw new Error('The clear method does not take any arguments');
      }
      items.set(this, []);
    }
    
    /**
     * Returns a string representing the elements of the queue.
     * @return {string} All elements of the queue.
     */
    toString() {
      if (arguments.length) {
        throw new Error('The toString method does not take any arguments');
      }
      return items.get(this).toString();
    }
    
    /**
     * Copies the queue to a new array and returns it.
     * @return {array} A new array with all elements of the queue.
     */
    toArray() {
      if (arguments.length) {
        throw new Error('The toArray method does not take any arguments');
      }
      return items.get(this).slice();
    }
  }
  
  return () => new Queue();
})();
