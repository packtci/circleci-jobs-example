'use strict';

// Steps to compute Standard Deviation:
// 1. Find the Mean
// 2. For each data point, find the square of its distance to the mean.
// 3. Sum the values from Step 2.
// 4. Divide by the number of data points.
// 5. Take the square root.

// Step 1
function mean(numbers) {
    return numbers.reduce((prev, curr) => {
        return prev + curr;
    }, 0) / numbers.length;
}

// Step 2
function computeSquareForDistanceToTheMean(numbers, mean) {
    return numbers.map(number => {
        const difference = number - mean;
        const square = difference * difference;
        return square;
    });
}

// Step 3 and Step 4
// Compute sum again using new mean

// Step 5
function squareRoot(number) {
    return Math.sqrt(number);
}

exports.mean = mean;
exports.computeSquareForDistanceToTheMean = computeSquareForDistanceToTheMean;
exports.squareRoot = squareRoot;