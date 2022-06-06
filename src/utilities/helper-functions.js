export const dateMaker = timeDiff => {
    let dateDisplayed = '';
    let roundedTime = 0;

    if (timeDiff < 1000) {
        dateDisplayed = 'Just now';
    } 
    else if (timeDiff <= 60000) {
        roundedTime = Math.round(timeDiff / 1000);
        if (roundedTime === 1) {
            dateDisplayed = `${roundedTime} second ago`;
        } else {
            dateDisplayed = `${roundedTime} seconds ago`;
        }
    }
    else if (timeDiff <= 3600000) {
        roundedTime = Math.round(timeDiff / 60000);
        if (roundedTime === 1) {
            dateDisplayed = `${roundedTime} minute ago`;
        } else {
            dateDisplayed = `${roundedTime} minutes ago`;
        }
    }
    else if (timeDiff <= 86400000) {
        roundedTime = Math.round(timeDiff / 3600000);
        if (roundedTime === 1) {
            dateDisplayed = `${roundedTime} hour ago`;
        } else {
            dateDisplayed = `${roundedTime} hours ago`;
        }
    }
    else {
        roundedTime = Math.round(timeDiff / 86400000);
        if (roundedTime === 1) {
            dateDisplayed = `${roundedTime} day ago`;
        } else if (roundedTime > 365) {
            dateDisplayed = "Over a year ago";
        } else {
            dateDisplayed = `${roundedTime} days ago`;
        }
    }

    return dateDisplayed;
}

export const secondsToTime = (time) => {
    if (!time) {
        return '0:00';
    }
    const sec_num = parseInt(time, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    const result = hours > 0 ? hours+':'+minutes+':'+seconds : minutes+':'+seconds;
    return result;
}