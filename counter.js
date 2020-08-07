console.log('counter');

const createCounter = count => {
    return {
        increment : () => {
            count += 1;
        },
        decrement : () => {
            count -= 1;
        },
        currentValue: () => {
            return count;
        }
    }
}

let myCounter = createCounter(10);

myCounter.increment();

console.log(myCounter.currentValue());

myCounter.decrement();

console.log(myCounter.currentValue());
