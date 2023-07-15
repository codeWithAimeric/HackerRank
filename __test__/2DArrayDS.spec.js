const hourglassSum = require('../2DArrayDS');

describe('hourglassSum', () => {
    it('should return the correct sum for a given 2D array', () => {
        const arr = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0],
        ];
        const expectedSum = 19;

        const result = hourglassSum(arr);

        expect(result).toEqual(expectedSum);
    });
});
