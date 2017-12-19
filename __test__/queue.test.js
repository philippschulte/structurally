'use strict';

const { Queue } = require('../lib/index');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = Queue();
    queue.enqueue(1, 2, 3);
  });

  afterEach(() => {
    queue.clear();
  });
  
  describe('#enqueue', () => {
    test('should insert one element at the back of the queue', () => {    
      queue.enqueue(4);
      expect(queue.size()).toBe(4);
      expect(queue.peek()).toBe(1);
      expect(queue.includes(4)).toBeTruthy();
    });

    test('should insert multiple elements at the back of the queue', () => {
      queue.enqueue(4, 5, 6);
      expect(queue.size()).toBe(6);
      expect(queue.peek()).toBe(1);
      expect(queue.includes(6)).toBeTruthy();
    });
    
    test('should throw an error if no argument was passed', () => {
      expect(() => queue.enqueue()).toThrow();
    });
  });
  
  describe('#dequeue', () => {
    test('should remove and return the first element from the queue', () => {
      expect(queue.dequeue()).toBe(1);
      expect(queue.size()).toBe(2);
      expect(queue.isEmpty()).toBeFalsy();
    });

    test('should throw an error if any arguments were passed', () => {
      expect(() => queue.dequeue('foo')).toThrow();
    });
  });
  
  describe('#peek', () => {
    test('should return the first element from the queue without removing it', () => {
      expect(queue.size()).toBe(3);
      expect(queue.peek()).toBe(1);
      expect(queue.size()).toBe(3);
    });

    test('should throw an error if any arguments were passed', () => {
      expect(() => queue.peek('bar')).toThrow();
    });
  });
  
  describe('#includes', () => {
    test('should be truthy if element does exist in queue', () => {
      expect(queue.size()).toBe(3);
      expect(queue.peek()).toBe(1);
      expect(queue.isEmpty()).toBeFalsy();
      expect(queue.includes(1)).toBeTruthy();
    });
    
    test('should be falsy if element does not exist in queue', () => {
      expect(queue.size()).toBe(3);
      expect(queue.peek()).toBe(1);
      expect(queue.isEmpty()).toBeFalsy();
      expect(queue.includes(4)).toBeFalsy();
      expect(queue.includes(true)).toBeFalsy();
      expect(queue.includes(null)).toBeFalsy();
      expect(queue.includes('foo')).toBeFalsy();
    });
    
    test('should throw an error if no argument was passed', () => {
      expect(() => queue.includes()).toThrow();
    });
  });
  
  describe('#isEmpty', () => {
    test('should be truthy if queue is empty', () => {
      queue.clear();
      expect(queue.isEmpty()).toBeTruthy();
    });
    
    test('should be falsy if queue is not empty', () => {
      expect(queue.size()).toBe(3);
      expect(queue.isEmpty()).toBeFalsy();
    });

    test('should throw an error if any arguments were passed', () => {
      expect(() => queue.isEmpty(false)).toThrow();
    });
  });
  
  describe('#size', () => {
    test('should return the number of elements in the queue', () => {
      expect(queue.size()).toBe(3);
      expect(queue.peek()).toBe(1);
      expect(queue.isEmpty()).toBeFalsy();
    });

    test('should throw an error if any arguments were passed', () => {
      expect(() => queue.size(3)).toThrow();
    });
  });
  
  describe('#clear', () => {
    test('should remove all elements from the queue', () => {
      queue.clear();
      expect(queue.size()).toBe(0);
      expect(queue.isEmpty()).toBeTruthy();
      expect(queue.includes(1)).toBeFalsy();
    });

    test('should throw an error if any arguments were passed', () => {
      expect(() => queue.clear(true)).toThrow();
    });
  });
  
  describe('#toString', () => {
    test('should return a string representing the elements of the queue', () => {
      expect(queue.toString()).toMatch(/1,2,3/);
      expect(typeof queue.toString()).toBe('string');     
    });

    test('should throw an error if any arguments were passed', () => {
      expect(() => queue.toString(true)).toThrow();
    });
  });
  
  describe('#toArray', () => {
    test('should copy the queue to a new array and returns it', () => {
      expect(queue.toArray()[0]).toBe(1);
      expect(queue.toArray()[1]).toBe(2);
      expect(queue.toArray()[2]).toBe(3);
      expect(queue.toArray().length).toBe(3);
      expect(Array.isArray(queue.toArray())).toBeTruthy();
    });

    test('should throw an error if any arguments were passed', () => {
      expect(() => queue.toArray(true)).toThrow();
    });
  });
});
