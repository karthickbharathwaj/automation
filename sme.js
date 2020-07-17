



$(document).ready(function () {
    $("#smebutton").click(function () {
        
            var sme = new Object();
            sme.type = $('#type').val();
            sme.email = $('#smeemail').val();
            sme.service = $('#smeservice').val();
            sme.about_organization = $('#smetext').val();
        
            $.ajax({
                url: 'https://morning-wildwood-74823.herokuapp.com/api/organization',
                type: 'POST',
                data: JSON.stringify(sme),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                async: false,
                success: function (data, textStatus, xhr) {
                    $('#smebutton').prop('disabled', true);
                    swal({
                        title: "Success!",
                        text: "Thank You for submitting the form",
                        type: "success",
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Ok",
                    }).then((result) => {
                        if (result.value) {
                            //this is your success swal, after clicking the yes button, it will reload or go to the other page.
                            location.reload(); // this is your location reload.
                            window.location.href = 'index.html'; // this is your relocate to other page.
                        }
                    })
                    // alert("Your Form has been submitted Thanks");
                    $("input:not(input[type=submit]), textarea").val('');
                },
                error: function (xhr, textStatus, errorThrown) {
                    // swal({
                    //     title: "Fill all the fields",
                    //     type: "warning",
                    //     text: errorThrown,
                    //     confirmButtonColor: "#00B4B4"
                    //  });
                    console.log("there is some error");
                }
            });
       
    });
});  