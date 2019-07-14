function addOne(x) {
    return x + 1;
}

function pipe() {
    let summ = 0;

    for (let i = 0; i < arguments.length; i++) {
        let currentArg = arguments[i];

        if (typeof currentArg === 'number') {
            summ = currentArg;
        } else {
            summ = currentArg(summ);
        }
    }
    return summ;
}

pipe(2, addOne);