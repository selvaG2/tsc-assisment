function getColour() {
    return fetch('./color.json')
        .then(function (res) { return res.json(); })
        .then(function (res) {
        return res;
    });
}
getColour()
    .then(function (color) {
    console.log(color.map(function (u) { return ("Color name : " + u.color + " " + "Color code " + u.code); }));
});
//fake api
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) { return response.json(); })
    .then(function (json) { return console.log(json); });
