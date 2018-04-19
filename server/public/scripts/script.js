console.log('js czech');

$(document).ready(onReady);

function onReady() {
    console.log('jquery czech');

    $.ajax({
        method: 'GET',
        url: '/records'
    })
        .then(function (response) {
            console.log(response);
            response.forEach(function (record) {
                $('#recordList').append(`<tr> 
                <td>${record.title}</td>
                <td>${record.artist}</td>
                <td>${record.year}</td>
                <td>${record.cost.toLocaleString('en', { style: 'currency', currency: 'USD' }).slice(0, -3)}</td> 
                </tr>`);
            });
            // for (let i = 0; i < response.length; i++) {
            //     console.log(response[i]);
            //     $('#recordList').append(`<li> ${response[i].title} by ${response[i].artist}, ${response[i].year} | $${response[i].cost} </li>`);
            // }
        });
}