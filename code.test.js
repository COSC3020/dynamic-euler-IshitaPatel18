const fs = require('fs');
const assert = require('jsverify');
eval(fs.readFileSync('code.js')+'');

function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e_test(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + e(n - 1);
}

// Original tests
assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);

// Added tests
const test =
    jsc.forall("nat", function(n) {
        return JSON.stringify(e_test(n)) ==
            JSON.stringify(e(n));
    });
jsc.assert(test);
