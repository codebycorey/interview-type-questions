'use strict';

module.exports = function question2() {

    var characters = 'abcabcasdfkajdvadkjvojwavdzxcvsas';

    function findMatch (str) {
        var groups = {},
            highest = [],
            maxCount = 0;

        for (var i = 0; i < str.length - 1; i++) {

            var letters = str.substring(i, i + 2);

            if (groups[letters]) {
                groups[letters]++;
            } else {
                groups[letters] = 1;
            }

            if(groups[letters] === maxCount) {
                highest.push(letters);
            } else if (groups[letters] > maxCount) {
                highest = [letters];
                maxCount++;
            }
        }
        return highest;

    }

    return findMatch(characters);
};
