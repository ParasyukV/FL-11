let startRange = 8;
let prize1 = 100;
let prize2 = 50;
let prize3 = 25;
let startPrize = [prize1, prize2, prize3];
let won = false;
let gameIterations = 10;
let attemptIndex = 0;
let confirmed;

const cfg = {
    currentRange: startRange,
    rangeIterator: 4,
    maxAttempts: startPrize.length,
    currentAttempt: 0,
    totalPrize: 0,
    possiblePrize: startPrize
};

const msg = {
    startMsg: `Choose a roulette pocket number from 0 to %CURRENTRANGE%
    Attempts left: %ATTEMPTS%
    Total prize: %TOTALPRIZE%$
    Possible prize on current attempt: %POSIBLEPRICE%$`,
    wonMsg: `Congratulation, you won!
    Your prize is: %TOTALPRIZE%$.
    Do you want to continue?`,
    thanks: `Thank you for your participation. Your prize is: %TOTALPRIZE%$`,
    confirm: `Do you want to play a game?`,
    confirmAgain: `Do you want to play again?`,
    notConfirmed: `You did not become a billionaire, but can.`
};

const tmpl = {
    currentRange: '%CURRENTRANGE%',
    attempts: '%ATTEMPTS%',
    totalPrize: '%TOTALPRIZE%',
    possiblePrize: '%POSIBLEPRICE%'
};

let tryIndex = 0;

if (!confirm(msg.confirm)) {
    alert(msg.notConfirmed);
} else {
    while (attemptIndex < gameIterations) {
        let randomNumber = Math.floor(Math.random() * (cfg.currentRange + 1));

        while (!won && tryIndex < cfg.maxAttempts) {
            let possiblePrize = cfg.possiblePrize[tryIndex];
            let startMsg = msg.startMsg
                .replace(tmpl.currentRange, cfg.currentRange)
                .replace(tmpl.attempts, cfg.maxAttempts - tryIndex)
                .replace(tmpl.totalPrize, cfg.totalPrize)
                .replace(tmpl.possiblePrize, possiblePrize);

            let playerNumber = parseInt(prompt(startMsg));

            if (playerNumber === randomNumber) {
                cfg.totalPrize += possiblePrize;
                won = true;
            } else {
                tryIndex++;
            }
        }

        attemptIndex++;

        if (won) {
            alert(msg.wonMsg.replace(tmpl.totalPrize, cfg.totalPrize));

            if (attemptIndex < gameIterations) {
                if (confirm(msg.confirmAgain)) {
                    cfg.currentRange += cfg.rangeIterator;

                    for (let i = 0; i < cfg.maxAttempts; i++) {
                        cfg.possiblePrize[i] *= 2;
                    }
                } else {
                    alert(msg.thanks.replace(tmpl.totalPrize, cfg.totalPrize));
                    cfg.totalPrize = 0;
                }
            }

        } else {
            cfg.totalPrize = 0;
            alert(msg.thanks.replace(tmpl.totalPrize, cfg.totalPrize));
        }

        if (attemptIndex < gameIterations) {
            if (!cfg.totalPrize) {
                if (confirm(msg.confirmAgain)) {
                    cfg.currentRange = startRange;
                    cfg.possiblePrize = startPrize;
                } else {
                    alert(msg.thanks.replace(tmpl.totalPrize, cfg.totalPrize));

                    while (!confirmed) {
                        confirmed = confirm(msg.confirmAgain);
                    }
                }
            }
        } else {
            alert(msg.thanks.replace(tmpl.totalPrize, cfg.totalPrize));
        }

        tryIndex = 0;
        won = false;
    }
}