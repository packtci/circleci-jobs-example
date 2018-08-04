'use strict';

// Takes an array of objects and sorts by First Name
function sortListOfNames(names) {
    return names.sort((a, b) => {
        if (a.firstName < b.firstName) {
            return -1;
        }
        if (a.firstName > b.firstName) {
            return 1;
        }
        if (a.firstName === b.firstName) {
            return 0;
        }
    });
}

exports.sortListOfNames = sortListOfNames;