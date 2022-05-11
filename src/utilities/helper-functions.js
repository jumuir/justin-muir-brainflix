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