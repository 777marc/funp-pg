console.log('reduce');

let items = [
    { 'name' : 'item 1', value : 100 },
    { 'name' : 'item 2', value : 200 },
    { 'name' : 'item 3', value : 300 }
];

let totalValue = items.reduce((acc, item) => {
    return acc + item.value;
}, 0);

console.log(totalValue);