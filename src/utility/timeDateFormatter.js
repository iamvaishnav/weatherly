const timeZoneFormatter = (date, round = true) => {
    const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const month = monthNames[date.getMonth()];
    const localDate = date.getDate();
    const day = dayName[date.getDay()];
    const year = String(date.getFullYear()).substr(2, 2);
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time;

    if (round) {
        if (seconds > 30) {
            minutes += 1;
        }
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (hour > 12) {
        hour %= 12;
        time = `${hour}:${minutes} PM`;
    } else if (hour < 12) {
        time = `${hour}:${minutes} AM`;
    } else {
        time = `${hour}:${minutes} PM`;
    }

    const dateString = `${time} ${day}, ${localDate} ${month}'${year}`;

    return {
        time,
        date: dateString,
    };
};

export default timeZoneFormatter;
