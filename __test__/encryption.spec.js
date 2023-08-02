const encryption = require('../encryption');

const s1 = "have a nice day"; 
const s2 = "i ffact s dontf i ttoth e orych a ngeth e facts"; 
const res1 = "hae and via ecy ";
const res2 = "isieae fdtonf fotrga anoyec cttctt tfhhhs ";
const fn1 = encryption(s1);
const fn2 = encryption(s2);

describe('encryption function ---', () => {
    it('It should return a string == = = ', () => {
        expect(fn1).toEqual(res1);
        expect(fn2).toEqual(res2);
    });
});