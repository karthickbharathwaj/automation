$(document).ready(function () {
    $("#save").click(function (e) {
        e.preventDefault();
        var contact = new Object();
        contact.name = $('#name').val();
        contact.email = $('#email').val();
        contact.subject = $('#subject').val();
        contact.message = $('#message').val();
        $.ajax({
            url: 'https://morning-wildwood-74823.herokuapp.com/api/contact',
            type: 'POST',
            data: JSON.stringify(contact),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function (data, textStatus, xhr) {
              $('.loading').slideUp();
              $('.sent-message').slideDown();
              $("input:not(input[type=submit]), textarea").val('');
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log('Error in Operation');
            }
        });
    });
});  