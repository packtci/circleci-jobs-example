'use strict';

const test = require('tape');
const standardDeviation = require('./standard_deviation');

test('compute the standard deviation of a list of numbers', t => {
    t.plan(1);

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 55, 75];
    const mean = standardDeviation.mean(numbers);
    const distanceToMean = standardDeviation.computeSquareForDistanceToTheMean(numbers, mean);
    const squareDifference = standardDeviation.mean(distanceToMean);
    const actualStandardDeviation = Number(standardDeviation.squareRoot(squareDifference).toFixed(2));
    const expectedStandardDeviation = 21.88;
    t.equal(actualStandardDeviation, expectedStandardDeviation, `The standard devation should be ${expectedStandardDeviation}`);
});
