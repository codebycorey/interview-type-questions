'use strict';


// insert prototypes here
function getAnswers () {
    console.log('test');
}
getAnswers.prototype.question1 = require('./question1');
getAnswers.prototype.question2 = require('./question2');
getAnswers.prototype.question3 = require('./question3');

module.exports = getAnswers;
