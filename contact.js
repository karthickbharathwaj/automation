

// $(document).ready(function () {
//     $("#save").click(function () {
        
        
//             var contact = new Object();
//             contact.name = $('#name').val();
//             contact.email = $('#email').val();
//             contact.subject = $('#subject').val();
//             contact.message = $('#message').val();
            
//             $.ajax({
//                 url: 'https://morning-wildwood-74823.herokuapp.com/api/contact',
//                 type: 'POST',
//                 data: JSON.stringify(contact),
//                 contentType: 'application/json; charset=utf-8',
//                 dataType: 'json',
//                 async: false,
//                 success: function (data, textStatus, xhr) {
//                     $('#save').prop('disabled', true);
//                     swal({
//                         title: "Success!",
//                         text: "Thank You for submitting the form",
//                         type: "success",
//                         confirmButtonColor: "#DD6B55",
//                         confirmButtonText: "Ok",
//                     }).then((result) => {
//                         if (result.value) {
                            
//                             location.reload(); 
//                             window.location.href = 'index.html'; 
//                         }
//                     })
                    
//                     $("input:not(input[type=submit]), textarea").val('');
//                 },
//                 error: function (xhr, textStatus, errorThrown) {
//                     swal({
//                         title: "Fill all the fields",
//                         type: "warning",
//                         text: errorThrown,
//                         confirmButtonColor: "#00B4B4"
//                      });
//                     console.log("error in form submission");
//                 }
//             });
        
//     });
// });  

$(document).ready(function () {
    var nameStatus = false;
    var emailStatus = false;
    var subjectStatus = false;
    var messageStatus = false;
    $("#name").change(function (e) {
        var tempname = e.target.value;
        console.log(e.target.value);
        if (tempname == "") {
            document.getElementById('alertname').innerHTML = "* Name should be filled out";
        } else {
            document.getElementById('alertname').innerHTML = "";
            nameStatus = true;
        }
    })
    $("#email").change(function (e) {
        var tempemail = e.target.value;
        if ((tempemail == "") || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(tempemail))) {
            document.getElementById('alertemail').innerHTML = "* Invalid Email";
        } else {
            document.getElementById('alertemail').innerHTML = "";
            emailStatus = true;
        }
    })
    $("#subject").change(function (e) {
        var tempsubject = e.target.value;
        if (tempsubject == "") {
            document.getElementById('alertsubject').innerHTML = "* Subject should be filled out";
        } else {
            document.getElementById('alertsubject').innerHTML = "";
            subjectStatus = true;
        }
    })
    $("#message").change(function (e) {
        var tempmessage = e.target.value;
        if (tempmessage == "") {
            document.getElementById('alertmessage').innerHTML = "* Message should be filled out";
        } else {
            document.getElementById('alertmessage').innerHTML = "";
            messageStatus = true;
        }
    })
    $("#save").click(function () {
        if (!nameStatus) {
            document.getElementById('alertname').innerHTML = "* Name should be filled out";
        }
        if (!emailStatus) {
            document.getElementById('alertemail').innerHTML = "* Invalid Email";
        }
        if (!subjectStatus) {
            document.getElementById('alertsubject').innerHTML = "* Subject should be filled out";
        }
        if (!messageStatus) {
            document.getElementById('alertmessage').innerHTML = "* Message should be filled out";
        }
        if (nameStatus && emailStatus && subjectStatus && messageStatus) {
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

