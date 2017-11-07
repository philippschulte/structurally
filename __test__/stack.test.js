'use strict';

const Stack = require('../lib/stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
    stack.push(1);
  });

  describe('#constructor', () => {
    test('should create a new instance', () => {
      expect(stack).toBeInstanceOf(Stack);
    });

    test('should throw an error if any arguments were passed', () => {
      expect(() => new Stack('foo', 'bar')).toThrow();
    });
  });
  
  describe('#push', () => {
    test('should insert a new element to the top of the stack', () => {    
      stack.push(2);
      expect(stack.size()).toBe(2);
      expect(stack.peek()).toBe(2);
      expect(stack.includes(2)).toBeTruthy();
    });
    
    test('should throw an error if no argument was passed', () => {
      expect(() => stack.push()).toThrow();
    });
  });
  
  describe('#pop', () => {
    test('should remove and return the element at the top of the stack', () => {
      expect(stack.pop()).toBe(1);
      expect(stack.size()).toBe(0);
      expect(stack.isEmpty()).toBeTruthy();
    });

    test('should throw an error if any arguments were passed', () => {
      expect(() => stack.pop('foo')).toThrow();
    });
  });
  
  describe('#peek', () => {
    test('should return the element at the top of the stack', () => {
      expect(stack.size()).toBe(1);
      expect(stack.peek()).toBe(1);
      expect(stack.size()).toBe(1);
    });

    test('should throw an error if any arguments were passed', () => {
      expect(() => stack.peek('bar')).toThrow();
    });
  });
  
  describe('#includes', () => {
    test('should be truthy if element does exist in stack', () => {
      expect(stack.size()).toBe(1);
      expect(stack.peek()).toBe(1);
      expect(stack.isEmpty()).toBeFalsy();
      expect(stack.includes(1)).toBeTruthy();
    });
    
    test('should be falsy if element does not exist in stack', () => {
      expect(stack.size()).toBe(1);
      expect(stack.peek()).toBe(1);
      expect(stack.isEmpty()).toBeFalsy();
      expect(stack.includes(2)).toBeFalsy();
      expect(stack.includes(true)).toBeFalsy();
      expect(stack.includes(null)).toBeFalsy();
      expect(stack.includes('foo')).toBeFalsy();
    });
    
    test('should throw an error if no argument was passed', () => {
      expect(() => stack.includes()).toThrow();
    });
  });
  
  describe('#isEmpty', () => {
    test('should be truthy if stack is empty', () => {
      expect(stack.size()).toBe(1);
      expect(stack.pop()).toBe(1);
      expect(stack.size()).toBe(0);
      expect(stack.isEmpty()).toBeTruthy();
    });
    
    test('should be falsy if stack is not empty', () => {
      expect(stack.size()).toBe(1);
      expect(stack.isEmpty()).toBeFalsy();
    });

    test('should throw an error if any arguments were passed', () => {
      expect(() => stack.isEmpty(false)).toThrow();
    });
  });
  
  describe('#size', () => {
    test('should return the number of elements in the stack', () => {
      expect(stack.size()).toBe(1);
      expect(stack.peek()).toBe(1);
      expect(stack.isEmpty()).toBeFalsy();
    });

    test('should throw an error if any arguments were passed', () => {
      expect(() => stack.size(3)).toThrow();
    });
  });
  
  describe('#clear', () => {
    test('should remove all elements from the stack', () => {
      stack.clear();
      expect(stack.size()).toBe(0);
      expect(stack.isEmpty()).toBeTruthy();
      expect(stack.includes(1)).toBeFalsy();
    });

    test('should throw an error if any arguments were passed', () => {
      expect(() => stack.clear(true)).toThrow();
    });
  });
  
  describe('#toString', () => {
    test('should return a string representing the elements of the stack', () => {
      expect(stack.toString()).toMatch(/1/);
      expect(typeof stack.toString()).toBe('string');     
    });

    test('should throw an error if any arguments were passed', () => {
      expect(() => stack.toString(true)).toThrow();
    });
  });
  
  describe('#toArray', () => {
    test('should copy the stack to a new array and returns it', () => {
      expect(stack.toArray()[0]).toBe(1);
      expect(stack.toArray().length).toBe(1);
      expect(Array.isArray(stack.toArray())).toBeTruthy();
    });

    test('should throw an error if any arguments were passed', () => {
      expect(() => stack.toArray(true)).toThrow();
    });
  });
});
