var moment = require('moment');

export const getDay = (input) => {
    let day = moment.unix(input).format("dddd, MMMM Do YYYY");
    let finalDay = day ? day : '';
    return finalDay;
}

export const getTimeOfDay = (input) => {
    let time = moment.unix(input).format("h:mm a");
    let finalTime = time ? time : '';
    return finalTime;
}

export const getTime = (input) => {
    let time = moment.duration(input, 'seconds');
    let finaltime = time ? `${time._data.minutes}m ${time._data.seconds}s` : '';
    return finaltime;
}