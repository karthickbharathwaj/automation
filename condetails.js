// $(document).ready(function () {
//     $.ajax({
//         url: 'https://morning-wildwood-74823.herokuapp.com/api/contact',
//         type: 'GET',
//         dataType: 'json',
//         async: true,
//         success: function (data, textStatus, xhr) {
//             var trHTML = '';
//             $.each(data, function (i, item) {
//                 trHTML += '<tr><td>' + item.name + '</td><td>' + item.email + '</td><td>' + item.subject + '</td><td>' + item.message + '</td></tr>';
//             });
//             $('#records_table').append(trHTML);
//         },
//         error: function (xhr, textStatus, errorThrown) {
//             console.log('Error in Operation');
//         }
//     });
// });
$(function () {
    $('#dataTable').DataTable({
        "ajax": {
            "url": "https://morning-wildwood-74823.herokuapp.com/api/contact", /*Data source*/
            "dataSrc": "data", /*object that holds the data*/
        },
        columns: [
            { data: 'name' },
            { data: 'email' },
            { data: 'subject' },
            { data: 'message' }
            
        ],
        "columnDefs": [{ /* default values for columns */
            "defaultContent": "-",
            "targets": "_all"
        }],
    });
});