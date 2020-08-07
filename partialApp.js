console.log('partial app');

const add = (a, b, c) => {
    return a + b + c;
}

const partiallyApply = (func, a, b) => {
    return (c) => {
        return func(a, b, c);
    }
}

let addEm = partiallyApply(add , 5, 6);

console.log(addEm(4));
