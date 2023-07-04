import chai from "chai";
import mocha from "mocha";
import { basicApproach, betterApproach, optimizedApproach, modApproach, sieveOfEratosthenes } from "./prime_num_approach/approaches.js";
//setting testing framework
const {describe, test} = mocha;
const {expect} = chai;

describe('basicApproach', () => {
    test('should return the Array of prime numbers between a and b ', () => {
        expect(basicApproach(1,10)).to.deep.equal([2, 3, 5, 7]);
        expect(basicApproach(10,20)).to.deep.equal([11, 13, 17, 19]);
        expect(basicApproach(20,30)).to.deep.equal([23, 29]);
        expect(basicApproach(1,100)).to.deep.equal([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);
        expect(basicApproach(-10,5)).to.deep.equal([2, 3, 5]);
    });

    test('returns empty Array when the range does not contain any positive integers', () => {
        expect(basicApproach(0,0)).to.deep.equal([]);
        expect(basicApproach(-10,-5)).to.deep.equal([]);
    })
});

describe('betterApproach', () => {
    test('should return the Array of prime numbers between a and b ', () => {
        expect(betterApproach(1,10)).to.deep.equal([2, 3, 5, 7]);
        expect(betterApproach(10,20)).to.deep.equal([11, 13, 17, 19]);
        expect(betterApproach(20,30)).to.deep.equal([23, 29]);
        expect(betterApproach(1,100)).to.deep.equal([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);
        expect(betterApproach(-10,5)).to.deep.equal([2, 3, 5]);
    });

    test('returns empty Array when the range does not contain any positive integers', () => {
        expect(betterApproach(0,0)).to.deep.equal([]);
        expect(betterApproach(-10,-5)).to.deep.equal([]);
    })
});

describe('optimizedApproach', () => {
    test('should return the Array of prime numbers between a and b ', () => {
        expect(optimizedApproach(1,10)).to.deep.equal([2, 3, 5, 7]);
        expect(optimizedApproach(10,20)).to.deep.equal([11, 13, 17, 19]);
        expect(optimizedApproach(20,30)).to.deep.equal([23, 29]);
        expect(optimizedApproach(1,100)).to.deep.equal([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);
        expect(optimizedApproach(-10,5)).to.deep.equal([2, 3, 5]);
    });

    test('returns empty Array when the range does not contain any positive integers', () => {
        expect(optimizedApproach(0,0)).to.deep.equal([]);
        expect(optimizedApproach(-10,-5)).to.deep.equal([]);
    })
});

describe('modApproach', () => {
    test('should return the Array of prime numbers between a and b ', () => {
        expect(modApproach(1,10)).to.deep.equal([2, 3, 5, 7]);
        expect(modApproach(10,20)).to.deep.equal([11, 13, 17, 19]);
        expect(modApproach(20,30)).to.deep.equal([23, 29]);
        expect(modApproach(1,100)).to.deep.equal([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);
        expect(modApproach(-10,5)).to.deep.equal([2, 3, 5]);
    });

    test('returns empty Array when the range does not contain any positive integers', () => {
        expect(modApproach(0,0)).to.deep.equal([]);
        expect(modApproach(-10,-5)).to.deep.equal([]);
    });
});

describe('sieveOfEratosthenes', () => {
    test('should return the Array of prime numbers between a and b ', () => {
        expect(sieveOfEratosthenes(1,10)).to.deep.equal([2, 3, 5, 7]);
        expect(sieveOfEratosthenes(10,20)).to.deep.equal([11, 13, 17, 19]);
        expect(sieveOfEratosthenes(20,30)).to.deep.equal([23, 29]);
        expect(sieveOfEratosthenes(1,100)).to.deep.equal([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);
        expect(sieveOfEratosthenes(-10,5)).to.deep.equal([2, 3, 5]);
    });

    test('returns empty Array when the range does not contain any positive integers', () => {
        expect(sieveOfEratosthenes(0,0)).to.deep.equal([]);
        expect(sieveOfEratosthenes(-10,-5)).to.deep.equal([]);
    })
});