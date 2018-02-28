'use strict';

const { Dictionary } = require('../lib/index');

describe('Dictionary', () => {
  let dictionary;

  beforeEach(() => {
    dictionary = Dictionary([
      ['Gandalf', 'gandalf@gmail.com'],
      ['Legolas', 'legolas@gmail.com'],
      ['Aragorn', 'aragorn@gmail.com']
    ]);
  });

  afterEach(() => {
    dictionary.clear();
  });

  describe('#constructor', () => {
    test('should initialize a new empty object', () => {
      dictionary = Dictionary();
      expect(dictionary.size()).toBe(0);
    });

    test('should initialize an iterable object', () => {
      for (const item of dictionary) {
        expect(dictionary.has(item[0])).toBeTruthy();
      }
    });

    test('should initialize a new object with all predefined elements', () => {
      expect(dictionary.size()).toBe(3);
      expect(dictionary.has('Gandalf')).toBeTruthy();
      expect(dictionary.has('Legolas')).toBeTruthy();
      expect(dictionary.has('Aragorn')).toBeTruthy();
    });
  });

  describe('#size', () => {
    test('should return the number of elements in the dictionary', () => {
      expect(dictionary.size()).toBe(3);
      expect(dictionary.delete('Gandalf')).toBeTruthy();
      expect(dictionary.size()).toBe(2);
      expect(dictionary.delete('Legolas')).toBeTruthy();
      expect(dictionary.size()).toBe(1);
      expect(dictionary.delete('Aragorn')).toBeTruthy();
      expect(dictionary.size()).toBe(0);
    });
  });

  describe('#clear', () => {
    test('should remove all elements from the dictionary', () => {
      dictionary.clear();
      expect(dictionary.size()).toBe(0);
      expect(dictionary.has('Gandalf')).toBeFalsy();
      expect(dictionary.has('Legolas')).toBeFalsy();
      expect(dictionary.has('Aragorn')).toBeFalsy();
    });
  });

  describe('#delete', () => {
    test('should remove the specified element from the dictionary', () => {
      expect(dictionary.size()).toBe(3);
      expect(dictionary.delete('Gandalf')).toBeTruthy();
      expect(dictionary.size()).toBe(2);
      expect(dictionary.delete('Legolas')).toBeTruthy();
      expect(dictionary.size()).toBe(1);
      expect(dictionary.delete('Aragorn')).toBeTruthy();
      expect(dictionary.size()).toBe(0);
    });

    test('should be falsy if the specified element does not exist in the dictionary', () => {
      expect(dictionary.delete('Sauron')).toBeFalsy();
      expect(dictionary.size()).toBe(3);
      expect(dictionary.delete('Gollum')).toBeFalsy();
      expect(dictionary.size()).toBe(3);
      expect(dictionary.delete('Nazgul')).toBeFalsy();
      expect(dictionary.size()).toBe(3);
    });
  });

  describe('#entries', () => {
    test('should return a new iterator object that contains the key-value pairs for each element in the dictionary in insertion order', () => {
      const iterator = dictionary.entries();
      expect(iterator.next().value).toEqual(['Gandalf', 'gandalf@gmail.com']);
      expect(iterator.next().value).toEqual(['Legolas', 'legolas@gmail.com']);
      expect(iterator.next().value).toEqual(['Aragorn', 'aragorn@gmail.com']);
      expect(iterator.next().value).toBeUndefined();
    });
    
    test('should resume the execution of a generator by throwing an error into it', () => {
      const iterator = dictionary.entries();
      expect(iterator.next().value).toEqual(['Gandalf', 'gandalf@gmail.com']);
      expect(iterator.throw(new Error('Testing!')).value).toEqual(['Legolas', 'legolas@gmail.com']);
      expect(iterator.next().value).toEqual(['Aragorn', 'aragorn@gmail.com']);
      expect(iterator.next().value).toBeUndefined();
    });
    
    test('should return the given value and finish the generator', () => {
      const iterator = dictionary.entries();
      expect(iterator.return(['Sauron', 'sauron@gmail.com']).value).toEqual(['Sauron', 'sauron@gmail.com']);
      expect(iterator.return(['Gollum', 'gollum@gmail.com']).value).toEqual(['Gollum', 'gollum@gmail.com']);
      expect(iterator.return(['Nazgul', 'nazgul@gmail.com']).value).toEqual(['Nazgul', 'nazgul@gmail.com']);
      expect(iterator.next().value).toBeUndefined();
    });
  });

  describe('#forEach', () => {
    test('should execute a provided callback function once for each key-value pair of the dictionary in insertion order', () => {
      const mockCallback = jest.fn();
      dictionary.forEach(mockCallback);
      expect(mockCallback.mock.calls.length).toBe(3);

      expect(mockCallback.mock.calls[0][0]).toBe('gandalf@gmail.com');
      expect(mockCallback.mock.calls[0][1]).toBe('Gandalf');
      expect(mockCallback.mock.calls[0][2]).toEqual([
        ['Gandalf', 'gandalf@gmail.com'],
        ['Legolas', 'legolas@gmail.com'],
        ['Aragorn', 'aragorn@gmail.com']
      ]);

      expect(mockCallback.mock.calls[1][0]).toBe('legolas@gmail.com');
      expect(mockCallback.mock.calls[1][1]).toBe('Legolas');
      expect(mockCallback.mock.calls[1][2]).toEqual([
        ['Gandalf', 'gandalf@gmail.com'],
        ['Legolas', 'legolas@gmail.com'],
        ['Aragorn', 'aragorn@gmail.com']
      ]);

      expect(mockCallback.mock.calls[2][0]).toBe('aragorn@gmail.com');
      expect(mockCallback.mock.calls[2][1]).toBe('Aragorn');
      expect(mockCallback.mock.calls[2][2]).toEqual([
        ['Gandalf', 'gandalf@gmail.com'],
        ['Legolas', 'legolas@gmail.com'],
        ['Aragorn', 'aragorn@gmail.com']
      ]);
    });
  });

  describe('#get', () => {
    test('should return a specified element from the dictionary', () => {
      expect(dictionary.get('Gandalf')).toBe('gandalf@gmail.com');
      expect(dictionary.get('Legolas')).toBe('legolas@gmail.com');
      expect(dictionary.get('Aragorn')).toBe('aragorn@gmail.com');
    });

    test('should return undefined if the specified element does not exist in the dictionary', () => {
      expect(dictionary.get('Sauron')).toBeUndefined();
      expect(dictionary.get('Gollum')).toBeUndefined();
      expect(dictionary.get('Nazgul')).toBeUndefined();
    });
  });

  describe('#has', () => {
    test('should be truthy if an element with the specified key exists in the dictionary', () => {
      expect(dictionary.has('Gandalf')).toBeTruthy();
      expect(dictionary.has('Legolas')).toBeTruthy();
      expect(dictionary.has('Aragorn')).toBeTruthy();
    });

    test('should be falsy if an element with the specified key does not exists in the dictionary', () => {
      expect(dictionary.has('Sauron')).toBeFalsy();
      expect(dictionary.has('Gollum')).toBeFalsy();
      expect(dictionary.has('Nazgul')).toBeFalsy();
    });
  });

  describe('#keys', () => {
    test('should return a new iterator object that contains the keys for each element in the dictionary in insertion order', () => {
      const iterator = dictionary.keys();
      expect(iterator.next().value).toBe('Gandalf');
      expect(iterator.next().value).toBe('Legolas');
      expect(iterator.next().value).toBe('Aragorn');
      expect(iterator.next().value).toBeUndefined();
    });

    test('should resume the execution of a generator by throwing an error into it', () => {
      const iterator = dictionary.keys();
      expect(iterator.next().value).toBe('Gandalf');
      expect(iterator.throw(new Error('Testing!')).value).toBe('Legolas');
      expect(iterator.next().value).toBe('Aragorn');
      expect(iterator.next().value).toBeUndefined();
    });
  
    test('should return the given value and finish the generator', () => {
      const iterator = dictionary.keys();
      expect(iterator.return('Sauron').value).toBe('Sauron');
      expect(iterator.return('Gollum').value).toBe('Gollum');
      expect(iterator.return('Nazgul').value).toBe('Nazgul');
      expect(iterator.next().value).toBeUndefined();
    });
  });

  describe('#set', () => {
    test('should add an element with a specified key and value to the dictionary', () => {
      dictionary.set('Gamling', 'gamling@gmail.com');
      expect(dictionary.size()).toBe(4);
      expect(dictionary.has('Gamling')).toBeTruthy();
      expect(dictionary.get('Gamling')).toBe('gamling@gmail.com');
    });
    
    test('should update an element with a specified key and value', () => {
      dictionary.set('Gamling', 'gamling@thelordoftherings.com');
      expect(dictionary.size()).toBe(4);
      expect(dictionary.has('Gamling')).toBeTruthy();
      expect(dictionary.get('Gamling')).toBe('gamling@thelordoftherings.com');
    });
    
    test('should return the updated dictionary', () => {
      expect(dictionary.set('Gamling', 'gamling@gmail.com')).toEqual(expect.arrayContaining([
        ['Gandalf', 'gandalf@gmail.com'],
        ['Legolas', 'legolas@gmail.com'],
        ['Aragorn', 'aragorn@gmail.com'],
        ['Gamling', 'gamling@gmail.com']
      ]));
    });
  });

  describe('#values', () => {
    test('should return a new iterator object that contains the values for each element in the dictionary in insertion order', () => {
      const iterator = dictionary.values();
      expect(iterator.next().value).toBe('gandalf@gmail.com');
      expect(iterator.next().value).toBe('legolas@gmail.com');
      expect(iterator.next().value).toBe('aragorn@gmail.com');
      expect(iterator.next().value).toBeUndefined();
    });
    
    test('should resume the execution of a generator by throwing an error into it', () => {
      const iterator = dictionary.values();
      expect(iterator.next().value).toBe('gandalf@gmail.com');
      expect(iterator.throw(new Error('Testing!')).value).toBe('legolas@gmail.com');
      expect(iterator.next().value).toBe('aragorn@gmail.com');
      expect(iterator.next().value).toBeUndefined();
    });

    test('should return the given value and finish the generator', () => {
      const iterator = dictionary.values();
      expect(iterator.return('sauron@gmail.com').value).toBe('sauron@gmail.com');
      expect(iterator.return('gollum@gmail.com').value).toBe('gollum@gmail.com');
      expect(iterator.return('nazgul@gmail.com').value).toBe('nazgul@gmail.com');
      expect(iterator.next().value).toBeUndefined();
    });
  });

  describe('#toString', () => {
    test('should copy the dictionary to a new string and return it', () => {
      const dictionaryCopy = dictionary.toString();
      expect(typeof dictionaryCopy).toBe('string');
      expect(dictionaryCopy).toMatch(/Gandalf,gandalf@gmail.com,Legolas,legolas@gmail.com,Aragorn,aragorn@gmail.com/);
    });
  });

  describe('#toArray', () => {
    test('should copy the dictionary to a new array and return it', () => {
      const dictionaryCopy = dictionary.toArray();
      expect(dictionaryCopy.length).toBe(3);
      expect(Array.isArray(dictionaryCopy)).toBeTruthy;
      expect(dictionaryCopy[0]).toEqual(['Gandalf', 'gandalf@gmail.com']);
      expect(dictionaryCopy[1]).toEqual(['Legolas', 'legolas@gmail.com']);
      expect(dictionaryCopy[2]).toEqual(['Aragorn', 'aragorn@gmail.com']);
    });
  });

  describe('#[Symbol.iterator]', () => {
    test('should return a new iterator object that contains the key-value pairs for each element in the dictionary in insertion order', () => {
      const iterator = dictionary[Symbol.iterator]();
      expect(iterator.next().value).toEqual(['Gandalf', 'gandalf@gmail.com']);
      expect(iterator.next().value).toEqual(['Legolas', 'legolas@gmail.com']);
      expect(iterator.next().value).toEqual(['Aragorn', 'aragorn@gmail.com']);
      expect(iterator.next().value).toBeUndefined();
    });
    
    test('should resume the execution of a generator by throwing an error into it', () => {
      const iterator = dictionary[Symbol.iterator]();
      expect(iterator.next().value).toEqual(['Gandalf', 'gandalf@gmail.com']);
      expect(iterator.throw(new Error('Testing!')).value).toEqual(['Legolas', 'legolas@gmail.com']);
      expect(iterator.next().value).toEqual(['Aragorn', 'aragorn@gmail.com']);
      expect(iterator.next().value).toBeUndefined();
    });
    
    test('should return the given value and finish the generator', () => {
      const iterator = dictionary[Symbol.iterator]();
      expect(iterator.return(['Sauron', 'sauron@gmail.com']).value).toEqual(['Sauron', 'sauron@gmail.com']);
      expect(iterator.return(['Gollum', 'gollum@gmail.com']).value).toEqual(['Gollum', 'gollum@gmail.com']);
      expect(iterator.return(['Nazgul', 'nazgul@gmail.com']).value).toEqual(['Nazgul', 'nazgul@gmail.com']);
      expect(iterator.next().value).toBeUndefined();
    });
  });
});
