'use strict';

module.exports = function question3() {
    var testytest = [ 'g', 'l', 'j', 'd', 'e', 'n', 'a', 'f', 'h', 'b', 'k', 'i', 'c', 'm' ];

    function mergeSort(array) {
        if (array.length < 2) {
            return array;
        }

        var mid = Math.floor(array.length/2),
            left = array.slice(0, mid),
            right = array.slice(mid);

        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right) {
        var result = [],
            l = 0,
            r = 0;

        while(l < left.length && r < right.length) {
            if (left[l] < right[r]) {
                result.push(left[l++]);
            } else {
                result.push(right[r++]);
            }
        }

        result = result.concat(left.slice(l).concat(right.slice(r)));
        return result;
    }

    return mergeSort(testytest);
};
