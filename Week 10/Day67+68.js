// a simple pure function to get a value adding 10
const add = (n) => (n + 10);
console.log('Simple call', add(3));

// a simple memoize function that takes in a function
// and returns a memoized function
const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log('Fetching from cache');
            return cache[n];
        }
        else {
            console.log('Calculating result');
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}

// creating a memoized function for the 'add' pure function
const memoizedAdd = memoize(add);
console.log(memoizedAdd(3));
console.log(memoizedAdd(3));
console.log(memoizedAdd(4));
console.log(memoizedAdd(4));


// another example of memorization functions

const memo = function () {
    let cache = [];
    return function (n) {
        if (cache.includes(n)) { console.log("already in memory") }
        else {
            console.log("first");
            cache.push(n);
        }
    } // The cache is accessible by the memo function only.
}();

memo(7) //first
memo(7) //already in memory
memo(7) //already in memory
memo(3) //first
memo(3) //already in memory