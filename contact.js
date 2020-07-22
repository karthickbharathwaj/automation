

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
        var divname = $('#divname').closest('div');
        console.log(e.target.value);
        if (tempname == "") {
            document.getElementById('alertname').innerHTML = "* Name should be filled out";
            $("span").remove('#snamespan');
              divname.addClass("has-error");
              divname.append('<span id="enamespan" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>')
        } else {
            document.getElementById('alertname').innerHTML = "";
            divname.removeClass("has-error");
              divname.addClass("has-success");
              $("span").remove('#enamespan');
              divname.append('<span id="snamespan" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>')
            nameStatus = true;
        }
    })
    $("#email").change(function (e) {
        var tempemail = e.target.value;
        var divemail = $('#divemail').closest('div');
        if ((tempemail == "") || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(tempemail))) {
            document.getElementById('alertemail').innerHTML = "* Invalid Email";
            $("span").remove('#semailspan');
              divemail.addClass("has-error");
              divemail.append('<span id="eemailspan" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
        } else {
           
            divemail.removeClass("has-error");
            divemail.addClass("has-success");
            $("span").remove('#eemailspan');
            divemail.append('<span id="semailspan" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>')
              document.getElementById('alertemail').innerHTML = "";
            emailStatus = true;
        }
    })
    $("#subject").change(function (e) {
        var tempsubject = e.target.value;
        var divsubject = $('#divsubject').closest('div');
        if (tempsubject == "") {
            document.getElementById('alertsubject').innerHTML = "* Subject should be filled out";
            $("span").remove('#ssubjectspan');
              divsubject.addClass("has-error");
              divsubject.append('<span id="esubjectspan" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>')
        } else {
            divsubject.removeClass("has-error");
            divsubject.addClass("has-success");
            $("span").remove('#esubjectspan');
            divsubject.append('<span id="ssubjectspan" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>')
            document.getElementById('alertsubject').innerHTML = "";
            subjectStatus = true;
        }
    })
    $("#message").change(function (e) {
        var tempmessage = e.target.value;
        var divmessage = $('#divmessage').closest('div');
        if (tempmessage == "") {
            document.getElementById('alertmessage').innerHTML = "* Message should be filled out";
            $("span").remove('#smessagespan');
              divmessage.addClass("has-error");
              divmessage.append('<span id="emessagespan" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>')
        } else {
            document.getElementById('alertmessage').innerHTML = "";
            divmessage.removeClass("has-error");
            divmessage.addClass("has-success");
            $("span").remove('#emessagespan');
            divmessage.append('<span id="smessagespan" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>')
            messageStatus = true;
        }
    })
    $("#save").click(function (e) {
         event.preventDefault(e);
        if (!nameStatus) {
            var divname = $('#divname').closest('div');
            document.getElementById('alertname').innerHTML = "* Name should be filled out";
            $("span").remove('#snamespan');
              divname.addClass("has-error");
              divname.append('<span id="enamespan" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>')
        }
        if (!emailStatus) {
            var divemail = $('#divemail').closest('div');
            document.getElementById('alertemail').innerHTML = "* Invalid Email";
            $("span").remove('#semailspan');
              divemail.addClass("has-error");
              divemail.append('<span id="eemailspan" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>')
        }
        if (!subjectStatus) {
            var divsubject = $('#divsubject').closest('div');
            document.getElementById('alertsubject').innerHTML = "* Subject should be filled out";
            $("span").remove('#ssubjectspan');
              divsubject.addClass("has-error");
              divsubject.append('<span id="esubjectspan" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>')
        }
        if (!messageStatus) {
            var divmessage = $('#divmessage').closest('div');
            document.getElementById('alertmessage').innerHTML = "* Message should be filled out";
            $("span").remove('#smessagespan');
            divmessage.addClass("has-error");
            divmessage.append('<span id="emessagespan" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>')
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

