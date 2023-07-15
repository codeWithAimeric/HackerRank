const absolutePerm = require('../absolutePermutation');

describe('absolutePerm', () => {
    it('It should return the absolute permutation with two integers', () => {
        expect(absolutePerm(2, 1)).toEqual([2, 1]);
        expect(absolutePerm(3, 0)).toEqual([1, 2, 3]);
        expect(absolutePerm(3, 2)).toEqual([-1]);
    });
});