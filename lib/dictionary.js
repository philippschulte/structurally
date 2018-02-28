'use strict';

/**
 * Dictionary class.
 * @module lib/dictionary
 */

module.exports = (() => {
  const items = new WeakMap();

  /** Class definition of the dictionary data structure. */
  class Dictionary {
    /**
     * Creates and initializes a new dictionary object.
     * @param ...elements {array} Optional. An array whose elements are key-value pairs (arrays with two elements, e.g. [[ 1, 'one' ],[ 2, 'two' ]]).
     */
    constructor(...elements) {
      elements.length ? items.set(this, ...elements) : items.set(this, []);
    }

    /**
     * Returns the number of elements in the dictionary.
     * @return {number} The number of elements in the dictionary.
     */
    size() {
      return items.get(this).length;
    }

    /** Removes all elements from the dictionary. */
    clear() {
      items.set(this, []);
    }

    /**
     * Removes the specified element from the dictionary.
     * @param key {string} Required. The key of the element.
     * @return {boolean} True if an element in the dictionary existed and has been removed, or false if the element does not exist.
     */
    delete(key) {
      for (const [index, item] of items.get(this).entries()) {
        if (key === item[0]) {
          items.get(this).splice(index, 1);
          return true;
        }
      }

      return false;
    }

    /**
     * Returns a new iterator object that contains the key-value pairs for each element in the dictionary in insertion order.
     * @return {object} A new iterator object.
     */
    *entries() {
      for (const item of items.get(this)) {
        try {
          yield item;
        } catch (e) {
          console.log(e);
        }
      }
    }
    
    /**
     * Executes a provided callback function once for each key-value pair of the dictionary in insertion order.
     * @param cb {function} Required. Callback function to execute for each element.
     */
    forEach(cb) {
      for (const [key, value] of items.get(this)) {
        cb(value, key, items.get(this));
      }
    }
    
    /**
     * Returns a specified element from the dictionary.
     * @param key {string} Required. The key of the element.
     * @return {any} The element associated with the specified key or undefined if the key can not be found in the dictionary.
     */
    get(key) {
      for (const [field, value] of items.get(this)) {
        if (field === key) return value;
      }

      return undefined;
    }

    /**
     * Returns a boolean indicating whether an element with the specified key exists or not.
     * @param key {string} Required. The key of the element.
     * @return {boolean} True if an element with the specified key exists in the dictionary, or false otherwise.
     */
    has(key) {
      for (const [field, value] of items.get(this)) {
        if (field === key) return true;
      }

      return false;
    }

    /**
     * Returns a new iterator object that contains the keys for each element in the dictionary in insertion order.
     * @return {object} A new iterator object.
     */
    *keys() {
      for (const [key, value] of items.get(this)) {
        try {
          yield key;
        } catch (e) {
          console.log(e);
        }
      }
    }

    /**
     * Adds or updates an element with a specified key and value to the dictionary.
     * @param key {string} Required. The key of the element.
     * @param value {any} Required. The value of the element.
     * @return {object} The dictionary object.
     */
    set(key, value) {
      items.get(this).push([key, value]);
      return [...items.get(this)];
    }

    /**
     * Returns a new iterator object that contains the values for each element in the dictionary in insertion order.
     * @return {object} A new iterator object.
     */
    *values() {
      for (const [key, value] of items.get(this)) {
        try {
          yield value;
        } catch (e) {
          console.log(e);
        }
      }
    }

    /**
     * Copies the dictionary to a new string and returns it.
     * @return {string} A new string that contains all elements of the dictionary.
     */
    toString() {
      return items.get(this).toString();
    }

    /**
     * Copies the dictionary to a new array and returns it.
     * @return {array} A new array that contains all elements of the dictionary.
     */
    toArray() {
      return [...items.get(this)];
    }

    /**
     * Returns a new iterator object that contains the key-value pairs for each element in the dictionary in insertion order.
     * @return {object} A new iterator object.
     */
    *[Symbol.iterator]() {
      for (const item of items.get(this)) {
        try {
          yield item;
        } catch (e) {
          console.log(e);
        }
      }
    }
  }

  return (...elements) => new Dictionary(...elements);
})();
