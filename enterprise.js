// new changes
$(document).ready(function () {
    
    var emailStatus = false;
   
    var textStatus = false;
  
    $("#e_email").change(function (e) {
        var tempemail = e.target.value;
        if ((tempemail == "") || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(tempemail))) {
            document.getElementById('alertemail').innerHTML = "* Invalid Email";
        } else {
            document.getElementById('alertemail').innerHTML = "";
            emailStatus = true;
        }
    })
    $
    $("#e_text").change(function (e) {
        var tempmessage = e.target.value;
        if (tempmessage == "") {
            document.getElementById('alerttext').innerHTML = "* This field should be filled out";
        } else {
            document.getElementById('alerttext').innerHTML = "";
            textStatus = true;
        }
    })
    $("#e_button").click(function () {
        
        if (!emailStatus) {
            document.getElementById('alertemail').innerHTML = "* Invalid Email";
        }
       
        if (!textStatus) {
            document.getElementById('alerttext').innerHTML = "* This field should be filled out";
        }
        if ( emailStatus && textStatus) {
            var enterprise = new Object();
            enterprise.type = $('#type').val();
            enterprise.email = $('#e_email').val();
            enterprise.service = $('#e_service').val();
            enterprise.about_organization = $('#e_text').val();
            $.ajax({
                url: 'https://morning-wildwood-74823.herokuapp.com/api/organization',
                type: 'POST',
                data: JSON.stringify(enterprise),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                async: true,
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
                    console.log('Error in Operation');
                }
            });
        }
    });
});  




//last changes
// $(document).ready(function () {
//     $("#e_button").click(function (e) {
       
//             var enterprise = new Object();
//             enterprise.type = $('#type').val();
//             enterprise.email = $('#e_email').val();
//             enterprise.service = $('#e_service').val();
//             enterprise.about_organization = $('#e_text').val();
        
//             $.ajax({
//                 url: 'https://morning-wildwood-74823.herokuapp.com/api/organization',
//                 type: 'POST',
//                 data: JSON.stringify(enterprise),
//                 contentType: 'application/json; charset=utf-8',
//                 dataType: 'json',
//                 async: false,
//                 success: function (data, textStatus, xhr) {
//                     swal({
//                         title: "Success!",
//                         text: "Thank You for submitting the form",
//                         type: "success",
//                         confirmButtonColor: "#DD6B55",
//                         confirmButtonText: "Ok",
//                     }).then((result) => {
//                         if (result.value) {
//                             //this is your success swal, after clicking the yes button, it will reload or go to the other page.
//                             location.reload(); // this is your location reload.
//                             window.location.href = 'index.html'; // this is your relocate to other page.
//                         }
//                     })
//                     //   alert("Your Form has been submitted Thanks");
//                     $("input:not(input[type=submit]), textarea").val('');
//                 },
//                 error: function (xhr, textStatus, errorThrown) {
//                     // swal({
//                     //     title: "Fill all the fields",
//                     //     type: "warning",
//                     //     text: errorThrown,
//                     //     confirmButtonColor: "#00B4B4"
//                     //  });
//                     console.log("there is some error");
//                 }
//             });
        
        
//     });
// }); 