//a
const listApply = (list, f) => {
    let newList = [];
    for (let i = 0; i < list.length; i++)
        newList.push(f(list[i]));
    return newList;
}

//b
const cadToUsd = (cad) => cad * 0.73;

//c
const cadsToUsds = (list) => listApply(list, cadToUsd);

//d
const isOdd = (x) => x % 2 === 1;

// ...implement `every`
const every = (list, f) => list.reduce((accumulator, curr)=> accumulator && f(curr), true);

console.log(every([1, 2, 3], isOdd)) // false
console.log(every([1, 3, 5], isOdd)) // true

//e
//assert library
function assert(value, message) {
    if (!value) {
        throw new Error(message || "Assertion failed");
    }
}

function assertEquals(actual, expected, message) {
    if (actual != expected) {
        throw new Error(message || `Expected ${expected}, but got ${actual}`);
    }
}

function assertListEquals(actual, expected, message) {
    if (!Array.isArray(actual) || !Array.isArray(expected)) {
        throw new Error(message || `Expected both arguments to be arrays`);
    }
    if (actual.length !== expected.length) {
        throw new Error(
            message ||
            `Expected arrays to have the same length, but got ${actual.length} and ${expected.length}`
        );
    }
    for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            throw new Error(
                message ||
                `Expected arrays to be equal, but found difference at index ${i}: ${actual[i]} !== ${expected[i]}`
            );
        }
    }
}

assertListEquals(listApply([1, 2, 3], (x) => x + 1), [2, 3, 4]);

assertEquals(cadToUsd(1), 0.73);

assertListEquals(cadsToUsds([1,2,3]), [0.73,1.46,2.19]);

assert(every([1, 3, 5], isOdd));