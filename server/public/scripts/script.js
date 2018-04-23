console.log('js czech');

$(document).ready(onReady);

function onReady() {
    console.log('jquery czech');
    $('#addNewSong').on('click', addNew);
    getAllSongs();
}

function getAllSongs() {
    $.ajax({
        method: 'GET',
        url: '/record'
    })
        .then(function (response) {
            console.log(response);
            $('#recordList').empty();
            response.forEach(function (record) {
                $('#recordList').append(`<tr> 
                <td>${record.title}</td>
                <td>${record.artist}</td>
                <td>${record.year}</td>
                <td>${record.cost.toLocaleString('en', { style: 'currency', currency: 'USD' }).slice(0, -3)}</td> 
                </tr>`);
            });
        });
}


function addNew() {
    const newSong = {
        title: $('#newSongTitle').val(),
        artist: $('#newSongArtist').val(),
        year: $('#newSongYear').val(),
        cost: $('#newSongCost').val()
    }
    console.log('New Song object', newSong);

    $.ajax({
        method: 'POST',
        url: '/record/add',
        data: newSong
    })
        .then(function (response) {
            console.log(response);
            getAllSongs();
        });
}