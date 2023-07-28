const cpc = require('../acmIcpcTeam');

const topics = ['11101', '10101', '11001', '10111', '10000', '01110'];
const topics2 = ['10101', '11100', '11010', '00101'];
const topics3 = ['10101', '11110', '00010'];
const res = cpc(topics);
const res2 = cpc(topics2);
const res3 = cpc(topics3);

describe('acmIcpcTeam', () => {
    it('It should return--', () => {
        expect(res).toEqual([5, 6]);
        expect(res2).toEqual([5, 2]);
        expect(res3).toEqual([5, 1]);
    });
});