$(document).ready(function () {
    $("#e_button").click(function (e) {
        e.preventDefault();
        var enterprise = new Object();
        enterprise.type = $('#type').val();
        enterprise.email = $('#e_email').val();
        enterprise.service = $('#e_service').val();
        enterprise.about_organization=$('#e_text').val();
        
        $.ajax({
            url: 'https://morning-wildwood-74823.herokuapp.com/api/organization',
            type: 'POST',
            data: JSON.stringify(enterprise),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function (data, textStatus, xhr) {
              alert("Your Form has been submitted Thanks");
              $("input:not(input[type=submit]), textarea").val('');
            },
            error: function (xhr, textStatus, errorThrown) {
                alert("There is some error in submiting the form");
            }
        });
    });
}); 