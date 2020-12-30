import {fizzBuzz, fizzBuzzReplacer, isDivided} from '../lib/fizzbuzz'

describe('isDivided', () => {
    test('4 is divided by 2', () => {
        expect(isDivided(4, 2)).toBe(true);
    });

    test('4 is not divided by 3', () => {
        expect(isDivided(4, 3)).toBe(false);
    });

    test('0 is divided by 2', () => {
        expect(isDivided(0, 2)).toBe(true);
    });

    test('-3 is not divided by 2', () => {
        expect(isDivided(-3, 2)).toBe(false);
    });

    test('-4 is divided by 2', () => {
        expect(isDivided(-4, 2)).toBe(true);
    });
})

describe('FizzBuzz', () => {

    const standardRules: [number, string][] = [[3, 'Fizz'], [5, 'Buzz']];

    test('first parameter < 1 should return empty array', () => {
        expect(fizzBuzz(0, fizzBuzzReplacer,  standardRules)).toEqual([]);
    });

    test('with third parameter', () => {
        expect(fizzBuzz(3, fizzBuzzReplacer,  standardRules)).toEqual([1, 2, 'Fizz']);
    });

    test('without third parameter', () => {
        expect(fizzBuzz(3, fizzBuzzReplacer)).toEqual([1, 2, 'Fizz']);
    });

});

describe('FizzBuzzReplacer', () => {

    const standardRules: [number, string][] = [[3, 'Fizz'], [5, 'Buzz']];
    const newRules: [number, string][] = [[3, 'Fizz'], [5, 'Buzz'], [10, 'Gazz']];

    test('one number should return one number array [1]', () => {
        expect(fizzBuzzReplacer([1], standardRules)).toEqual([1]);
    });

    test('two numbers should return two numbers array [1, 2]', () => {
        expect(fizzBuzzReplacer([1, 2], standardRules)).toEqual([1, 2]);
    });

    test('three numbers should return array with two numbers and Fizz',
     () => {
        expect(fizzBuzzReplacer([1, 2, 3], standardRules)).toEqual([1, 2, 'Fizz']);
    });

    test('five numbers should return array with three numbers, Fizz and Buzz',
     () => {
        expect(fizzBuzzReplacer([1, 2, 3, 4, 5], standardRules)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
    });

    test('fifteen numbers should return array with twelve numbers, 4x Fizz, 2x Buzz and FizzBuzz',
     () => {
        expect(fizzBuzzReplacer([1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10, 11, 12, 13, 14, 15],
             standardRules)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
    });

    test('fifteen numbers with 3 rules',
     () => {
        expect(fizzBuzzReplacer([1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10, 11, 12, 13, 14, 15],
             newRules)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'BuzzGazz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
    });


});