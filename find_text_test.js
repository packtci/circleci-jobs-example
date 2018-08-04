'use strict';

const test = require('tape');
const findTextAndReplace = require('./find_text');

test('find and replace text', t => {
    t.plan(1);

    const words = ['The', 'Fast', 'Cat', 'raced', 'into', 'the', 'yard'];
    const word = 'Cat';
    const replacement = 'Dog';
    const actual = findTextAndReplace(words, word, replacement);
    const expected = ['The', 'Fast', 'Dog', 'raced', 'into', 'the', 'yard']
    t.deepEqual(actual, expected, 'Should be equal');
});