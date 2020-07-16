$(document).ready(function () {
    $.ajax({
        url: 'https://morning-wildwood-74823.herokuapp.com/api/organization',
        type: 'GET',
        dataType: 'json',
        async: true,
        success: function (data, textStatus, xhr) {
            var trHTML = '';
            $.each(data, function (i, item) {
                trHTML += '<tr><td>' + item.type + '</td><td>' + item.email + '</td><td>' + item.service+ '</td><td>' + item.about_organization + '</td></tr>';
            });
            $('#records_table').append(trHTML);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
        }
    });
});  