// new changes
$(document).ready(function () {
    
    var emailStatus = false;
   
    var textStatus = false;
  
    $("#e_email").change(function (e) {
        var tempemail = e.target.value;
        var divemail = $('#divemail').closest('div');
        if ((tempemail == "") || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(tempemail))) {
            document.getElementById('alertemail').innerHTML = "* Invalid Email";
            $("span").remove('#semailspan');
              divemail.addClass("has-error");
              divemail.append('<span id="eemailspan" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
        } else {
            document.getElementById('alertemail').innerHTML = "";
            divemail.removeClass("has-error");
            divemail.addClass("has-success");
            $("span").remove('#eemailspan');
            divemail.append('<span id="semailspan" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>')
            emailStatus = true;
        }
    })
    
    $("#e_text").change(function (e) {
        var tempmessage = e.target.value;
        var divservice = $('#divservice').closest('div');
        if (tempmessage == "") {
            document.getElementById('alerttext').innerHTML = "* This field should be filled out";
            $("span").remove('#ssubjectspan');
              divservice.addClass("has-error");
              divservice.append('<span id="esubjectspan" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>')
        } else {
            document.getElementById('alerttext').innerHTML = "";
            divservice.removeClass("has-error");
            divservice.addClass("has-success");
            $("span").remove('#esubjectspan');
            divservice.append('<span id="ssubjectspan" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>')
            textStatus = true;
        }
    })
    $("#e_button").click(function () {
        
        if (!emailStatus) {
            var divemail = $('#divemail').closest('div');
            document.getElementById('alertemail').innerHTML = "* Invalid Email";
            $("span").remove('#semailspan');
              divemail.addClass("has-error");
              divemail.append('<span id="eemailspan" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>')
        }
       
        if (!textStatus) {
            var divservice = $('#divservice').closest('div');
            document.getElementById('alerttext').innerHTML = "* This field should be filled out";
            $("span").remove('#ssubjectspan');
            divservice.addClass("has-error");
            divservice.append('<span id="esubjectspan" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>')
        }
        if ( emailStatus && textStatus) {
            var enterprise = new Object();
            enterprise.type = $('#type').val();
            enterprise.email = $('#e_email').val();
            enterprise.service = $('#e_service').val();
            enterprise.about_organization = $('#e_text').val();
            console.log(enterprise);
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