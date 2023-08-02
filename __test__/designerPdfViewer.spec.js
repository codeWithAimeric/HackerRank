const designerPdfViewer = require('../designerPdfViewer');

const h1 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
const word1 = "abc";
const h2 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
const word2 = "zaba"; 
const res1 = 9;
const res2 = 28;
const fn1 = designerPdfViewer(h1, word1);
const fn2 = designerPdfViewer(h2, word2);

describe('designerPdfViewer ---', () => {
    it('It should return an integer = = = =', () => {
        expect(fn1).toEqual(res1);
        expect(fn2).toEqual(res2);
    });
});