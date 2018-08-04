'use strict';

const test = require('tape');
const sort = require('./sort');

test('Test the sort function', t => {
    t.plan(1);

    const names = [
        {
            firstName: 'John',
            lastName: 'Rambo'
        },
        {
            firstName: 'Luke',
            lastName: 'Cage'
        },
        {
            firstName: 'Sam',
            lastName: 'Cooke'
        },
        {
            firstName: 'Barry',
            lastName: 'White'
        },
        {
            firstName: 'Jedi',
            lastName: 'Knight'
        }
    ];
    const actual = sort.sortListOfNames(names);
    const expected = [
        {
            firstName: 'Barry',
            lastName: 'White'
        },
        {
            firstName: 'Jedi',
            lastName: 'Knight'
        },
        {
            firstName: 'John',
            lastName: 'Rambo'
        },
        {
            firstName: 'Luke',
            lastName: 'Cage'
        },
        {
            firstName: 'Sam',
            lastName: 'Cooke'
        }
    ];
    t.deepEqual(actual, expected, 'The names should be sorted by the first name.')
});