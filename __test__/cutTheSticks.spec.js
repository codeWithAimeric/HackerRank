const cutTheSticks = require('../cutTheSticks');

const arr1 = [5, 4, 4, 2, 2, 8];
const arr2 = [1, 2, 3, 4, 3, 3, 2, 1]; 
const res1 = [ 6, 4, 2, 1 ];
const res2 = [ 8, 6, 4, 1 ];
const fn1 = cutTheSticks(arr1);
const fn2 = cutTheSticks(arr2);

describe('cutTheSticks----------------------------', () => {
    it('It should return an array of integer = = = =', () => {
        expect(fn1).toEqual(res1);
        expect(fn2).toEqual(res2);
    });
});