$(document).ready(function () {
    $("#smebutton").click(function (e) {
        e.preventDefault();
        var sme = new Object();
        sme.type = $('#type').val();
        sme.email = $('#smeemail').val();
        sme.service = $('#smeservice').val();
        sme.about_organization=$('#smetext').val();
        
        $.ajax({
            url: 'https://morning-wildwood-74823.herokuapp.com/api/organization',
            type: 'POST',
            data: JSON.stringify(sme),
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