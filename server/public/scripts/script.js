console.log('js czech');

$(document).ready(onReady);

function onReady() {
    console.log('jquery czech');

    $.ajax({
        type: 'GET',
        url: '/records'
    })
        .then(function (response) {
            for (let i = 0; i < response.length; i++) {
                console.log(response[i]);
                $('#recordList').append(`<li> ${response[i].title} by ${response[i].artist}, ${response[i].year} | $${response[i].cost} </li>`);
            }
        });
}