var buttonTranslet = $('#translate-joke');
var parTrans = $('#transleted-joke');

var url = 'https://api.icndb.com/jokes/random';
var button = $('#get-joke');
var paragraph = $('#joke');


$(function() {
    button.on('click', function() {
        getJoke();
    });
});

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function() {
        var response = JSON.parse(xhr.response);
        paragraph.html(response.value.joke);
    });
    xhr.send();
}