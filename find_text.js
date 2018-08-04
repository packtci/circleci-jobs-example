'use strict';

function findTextAndReplace(list, word, replacement) {
    const wordIndex = list.findIndex(elem => {
        return elem.toLowerCase() === word.toLowerCase();
    });
    list[wordIndex] = replacement;
    return list;
}

module.exports = findTextAndReplace;