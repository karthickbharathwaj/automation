// $(document).ready(function () {
//     $.ajax({
//         url: 'https://morning-wildwood-74823.herokuapp.com/api/organization',
//         type: 'GET',
//         dataType: 'json',
//         async: true,
//         success: function (data, textStatus, xhr) {
//             var trHTML = '';
//             $.each(data, function (i, item) {
//                 trHTML += '<tr><td>' + item.type + '</td><td>' + item.email + '</td><td>' + item.service+ '</td><td>' + item.about_organization + '</td></tr>';
//             });
//             $('#records_table').append(trHTML);
//         },
//         error: function (xhr, textStatus, errorThrown) {
//             console.log('Error in Operation');
//         }
//     });
// });  
$(function () {
    if (localStorage.getItem('token') != null) {
        $('#dataTable').DataTable({
            "ajax": {
                "url": "https://morning-wildwood-74823.herokuapp.com/api/organization", /*Data source*/
                "beforeSend": function (xhr) {
                    xhr.setRequestHeader("x-auth-token", localStorage.getItem('token'));
                },
                "dataSrc": "data",/*object that holds the data*/
                error: function (jqXHR, textStatus, errorThrown) {
                    window.location.href = 'admin.html';
                }
            },
            columns: [
                { data: 'type' },
                { data: 'email' },
                { data: 'service' },
                { data: 'about_organization' }
            ],
            "columnDefs": [{ /* default values for columns */
                "defaultContent": "-",
                "targets": "_all"
            }],
        });
    }
    else {
        window.location.href = 'admin.html';
    }
    $("#logout").click(function () {
        localStorage.removeItem('token');
        window.location.href = 'admin.html';
    })
    $("#contact").click(function () {
        window.location.href = 'contact.html';
    })
    $("#organization").click(function () {
        window.location.href = 'organization.html';
    })
}); 