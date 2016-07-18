'use strict';

module.exports = function question1() {

    var templateObj = {
        sentence: 'The {{ thing }} {{ action }}.',
        thing: '{{ color }} {{ animal }}',
        action: 'flies around the {{ place }}',
        color: 'red',
        animal: 'bird',
        place: 'house'
    };

    function beard (template, key) {
        var array,
            regex = /{{ (.*?) }}/g,
            matches = [];

        while ((array = regex.exec(template[key])) !== null) {
            matches.push({
                string: array[0],
                key: array[1]
            });
        }

        matches.forEach(function (value) {
            template[key] = template[key].replace(value.string, beard(template, value.key));
        });

        return template[key];
    }

    return beard(templateObj, 'sentence');
};
