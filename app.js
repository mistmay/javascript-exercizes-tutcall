function range(start, end) {
    function createRange(start, end) {
        const arr = [];
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }
        return arr;
    }
    if (end === undefined) {
        return function getEnd(end) {
            return createRange(start, end);
        }
    }
    if (typeof start === 'number' && typeof end === 'number' && start <= end) {
        return createRange(start, end);
    }
    return [];
}

function secretMessage(array) {
    array.pop();
    console.log(array.length);
    array.push('to', 'program');
    array[7] = 'right';
    array.shift();
    array.unshift('programming');
    array.splice(6, 5, "know");
    return array.join(' ');
}

function secondBiggestNumber(array) {
    let maxValue1 = 0;
    let maxValue2 = 0;
    array.forEach(item => {
        if (item > maxValue1) {
            maxValue2 = maxValue1;
            maxValue1 = item;
        } else if (item > maxValue2) {
            maxValue2 = item;
        }
    });
    return maxValue2;
}

function secondBiggestNumberWithSort(array) {
    return array.sort((a, b) => b - a)[1];
}

function fixObjectTimes(obj) {
    for (property in obj.availability) {
        if (obj.availability[property]) {
            obj.availability[property] = {
                start: new Date(obj.availability[property].start).getHours(),
                end: new Date(obj.availability[property].end).getHours()
            }
        } else {
            delete obj.availability[property];
        }
    }
    return obj;
}

function factorial(x) {
    if (x === 0) {
        return 1;
    }

    return x * factorial(x - 1);
}

function memoize(fn) {
    let cache = {};
    return function (x) {
        if (x in cache) {
            return cache[x];
        }
        cache[x] = fn(x);
        return cache[x];
    }
}

function isAnagram(string1, string2) {
    if (string1.toLowerCase().split('').sort().join('') === string2.toLowerCase().split('').sort().join('')) {
        return true;
    } else {
        return false;
    }
}

function arrayObjectPrinter(array) {
    console.log(array.filter(item => item.price > 100));
    console.log(array.filter(item => item.price < 500));
    console.log(array.some(item => item.price <= 500));
    console.log(array.every(item => item.price < 100));
    const prices = [];
    array.forEach(item => {
        prices.push(item.price);
    });
    console.log(prices);
    console.log(array.reduce((sum, current) => sum + current.price, 0));
}

function arrayObjectPrinterWithFor(array) {
    const priceOver100 = [];
    const priceUnder500 = [];
    let checkIfUnder500 = false;
    let checkIfAllunder100 = true;
    const prices = [];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].price > 100) {
            priceOver100.push(array[i]);
        }
        if (array[i].price < 500) {
            priceUnder500.push(array[i]);
        }
        if (array[i].price <= 500) {
            checkIfUnder500 = true;
        }
        if (array[i].price >= 100) {
            checkIfAllunder100 = false;
        }
        prices.push(array[i].price);
        sum += array[i].price;
    }
    console.log(priceOver100);
    console.log(priceUnder500);
    console.log(checkIfUnder500);
    console.log(checkIfAllunder100);
    console.log(prices);
    console.log(sum);
}

function deepCloneArrayObject(array) {
    const clone = JSON.parse(JSON.stringify(array));
    clone[0].name = "Scooter";
    return [array[0].name, clone[0].name];
}

function ObjectConstructor(name, surname, age, city) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.city = city;
    this.fullName = function () {
        return this.name + " " + this.surname;
    }
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

const range2 = range(5);
console.log(range2(8));
console.log(secretMessage(['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript']));
console.log(secondBiggestNumber([5, 9, 3, 13, 43, 2, 21]));
console.log(secondBiggestNumberWithSort([5, 9, 3, 13, 43, 2, 21]));
console.log(fixObjectTimes({
    id: 21,
    name: 'Negozio per animali',
    location: {
        city: 'Roma',
        address: 'Via boh 10',
        cap: '00100'
    },
    availability: {
        monday: {
            start: '2021-06-29T09:00:00',
            end: '2021-06-29T12:00:00'
        },
        tuesday: {
            start: '2021-06-29T10:00:00',
            end: '2021-06-29T15:00:00'
        },
        wednesday: null,
        thursday: null,
        friday: {
            start: '2021-06-29T09:00:00',
            end: '2021-06-29T18:00:00'
        },
        saturday: null,
        sunday: {
            start: '2021-06-29T09:00:00',
            end: '2021-06-29T12:00:00'
        }
    }
}));
const factorialWithCache = memoize(factorial);
console.log(factorialWithCache(10));
console.log(factorialWithCache(6));
console.log(factorialWithCache(5));
console.log(factorialWithCache(10));
console.log(isAnagram('ciao', 'caio'));
console.log(isAnagram('ciao', 'arri'));
arrayObjectPrinter([{
        name: "Bike",
        price: 100
    },
    {
        name: "TV",
        price: 200
    },
    {
        name: "Album",
        price: 10
    },
    {
        name: "Book",
        price: 5
    },
    {
        name: "Phone",
        price: 500
    },
    {
        name: "Computer",
        price: 1000
    },
    {
        name: "Keyboard",
        price: 25
    },
]);
arrayObjectPrinterWithFor([{
        name: "Bike",
        price: 100
    },
    {
        name: "TV",
        price: 200
    },
    {
        name: "Album",
        price: 10
    },
    {
        name: "Book",
        price: 5
    },
    {
        name: "Phone",
        price: 500
    },
    {
        name: "Computer",
        price: 1000
    },
    {
        name: "Keyboard",
        price: 25
    },
]);
console.log(deepCloneArrayObject([{
        name: "Bike",
        price: 100
    },
    {
        name: "TV",
        price: 200
    },
    {
        name: "Album",
        price: 10
    },
    {
        name: "Book",
        price: 5
    },
    {
        name: "Phone",
        price: 500
    },
    {
        name: "Computer",
        price: 1000
    },
    {
        name: "Keyboard",
        price: 25
    },
]));
const person = new ObjectConstructor('John', 'Smith', 25, 'Kyoto');
console.log(Object.entries(person));
console.log(person.fullName());
console.log(reverseString('Hello Everybody'));