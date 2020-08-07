console.log('hey');

const test = () => {
    return (param) => {
        return param;
    }
}


let deep = test()(123);
console.log('deep', deep)
