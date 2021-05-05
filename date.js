
exports.getDate = function () {

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    let today = new Date();
    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function () {

    let options = {
        weekday: 'long',
    };
    let today = new Date();
    return today.toLocaleDateString("en-US", options);
}
    ;