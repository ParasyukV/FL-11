function getMin() {
    let min;

    for (let i = 0; i <= arguments.length - 1; i++) {
        if (min === undefined) {
            min = arguments[i + 1];
        }

        if (arguments[i] < min) {
            min = arguments[i];

        }
    }
    return min;
}

getMin(1, 2, 4, -3);