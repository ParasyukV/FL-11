// 0 
function getNumbers(string) {
    let numbers = [];

    for (let i = 0; i < string.length; i++) {
        let num = +string[i];

        if (!Number.isNaN(num)) {
            numbers.push(num)
        }
    }

    return numbers;
}

getNumbers('n1um3ber95');

// 1
function findTypes() {
    const types = {
        undefined: 0,
        number: 0,
        boolean: 0,
        string: 0,
        object: 0,
        function: 0
    };


    for (let i = 0; i < arguments.length; i++) {
        let typeArg = typeof arguments[i];

        if (typeArg === 'undefined') {
            types.undefined++
        }

        if (typeArg === 'number') {
            types.number++
        }

        if (typeArg === 'boolean') {
            types.boolean++
        }

        if (typeArg === 'string') {
            types.string++
        }

        if (typeArg === 'object') {
            types.object++
        }

        if (typeArg === 'function') {
            types.function++
        }
    }
    return types;
}

findTypes(null, true, 'hello', {});

// 2
function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

/* eslint no-magic-numbers: ["off", { "ignoreArrayIndexes": true }] */
executeforEach([1, 2, 3], function (el) {
    console.log(el)
})

// 3
function mapArray(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }

    return arr;
}

mapArray([2, 5, 8], function (el) {
    return el + 3;
});


// 4
function filterArray(arr, func) {
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];

        if (func(el)) {
            filteredArr.push(el);
        }
    }

    return filteredArr;
}

filterArray([2, 5, 8], function (el) {
    return el > 3;
});

// 5
function showFormattedDate(date) {
    const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDate();
    const year = date.getFullYear();
    const month = monthList[date.getMonth()];

    return `Date: ${month} ${day} ${year}`;
}

showFormattedDate(new Date('2011-01-27T01:10:00'));

// 6
function canConvertToDate(stringDateParam) {
    const date = new Date(stringDateParam);

    return !Number.isNaN(date.getDay());
}

canConvertToDate('2016-13-18T00:00:00');
canConvertToDate('2016-03-18T00:00:00');

// 7
function daysBetween(firstDate, seconDate) {
    let time1 = firstDate.getTime();
    let time2 = seconDate.getTime();
    let msInOneDay = 24 * 60 * 60 * 1000;

    return Math.round(Math.abs(time1 - time2) / msInOneDay);
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

// 8
const testData = [{
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'birthday': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'birthday': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'birthday': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'birthday': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

function getAmountOfAdultPeople(data) {
    let adultDaysAmount = 18 * 365;
    let birthArr = [];

    data.forEach(function (person) {
        birthArr.push(daysBetween(new Date(person['birthday']), new Date()) / adultDaysAmount);
    });

    return filterArray(birthArr, function (el) {
        return el > 1;
    }).length;
}

getAmountOfAdultPeople(testData);

// 9
function keys(objectArg) {
    return Object.key(objectArg);
}

keys({
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
});

// 10
function values(objectArg) {
    let result = [];

    for (let prop in objectArg) {
        if (objectArg.hasOwnProperty(prop)) {
            result.push(objectArg[prop]);
        }
    }
    return result;
}

values({
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
});