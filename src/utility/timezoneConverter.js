const zoneConverter = (zone, remote = new Date()) => {
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
    const localDateObj = new Date();
    const month = monthNames[localDateObj.getMonth()];
    const localDate = localDateObj.getDate();
    const day = dayName[localDateObj.getDay()];
    const year = String(localDateObj.getFullYear()).substr(2, 2);
    const localOffset = -new Date().getTimezoneOffset();
    const remoteOffset = zone / 60;
    const localOffsetHour = (localOffset - (localOffset % 60)) / 60;
    const remoteOffsetHour = (remoteOffset - (remoteOffset % 60)) / 60;
    let remoteHour = remote.getHours();
    let remoteMinute = remote.getMinutes() - ((localOffset % 60) - (remoteOffset % 60));
    let remoteTime;

    console.log(remote);

    if (remoteMinute < 0) {
        remoteMinute = 60 + remoteMinute;
        remoteHour -= 1;
    }
    if (remoteMinute < 10) {
        remoteMinute = `0${remoteMinute}`;
    }

    if (localDate !== remote.getDate()) {
        remoteHour = remoteHour + 24 - (localOffsetHour - remoteOffsetHour);
    } else {
        remoteHour -= localOffsetHour - remoteOffsetHour;
    }
    // console.log(remoteHour);
    if (remoteHour >= 12) {
        remoteTime = `${remoteHour % 12}:${remoteMinute} PM`;
    } else {
        remoteTime = `${remoteHour}:${remoteMinute} AM`;
    }

    // const dateString = `${localDateObj.toLocaleTimeString([], {
    //     hour: '2-digit',
    //     minute: '2-digit',
    // })} ${day}, ${localDate} ${month} '${year}`;

    const dateString = `${remoteTime} ${day}, ${localDate} ${month}'${year}`;

    return {
        time: remoteTime,
        date: dateString,
    };
};

export default zoneConverter;
