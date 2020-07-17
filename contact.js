

$(document).ready(function () {
    $("#save").click(function () {
        
        
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
                    $('#save').prop('disabled', true);
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
                    console.log("error in form submission");
                }
            });
        
    });
});  