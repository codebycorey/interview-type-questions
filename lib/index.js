'use strict';

var args = process.argv.slice(2),
    Answers = require('./answers');


function interviewQuestions (args) {
    var service = new Answers();

    args.forEach(function (value) {
        var fn = service['question'+value];

        if (typeof fn !== 'function') {
            console.log('Qestion ' + value + ' does not exist');
            return;
        }

        console.log(fn());
    });
}

interviewQuestions(args);
