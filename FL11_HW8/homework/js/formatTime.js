function formatTime(time) {
    let days = Math.floor(time / 1440);
    let hours = Math.floor((time - days * 1440) / 60);
    let minutes = time % 60;

    return `${days} days, ${hours} hours, ${minutes} minutes`;
}

formatTime(4567);