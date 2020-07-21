$(document).ready(function () {
    var usernameStatus = false;
    var passwordStatus = false;
    var spinner = '<div class="loader"><div class="subloader"><div class="spinner-border text-dark" role="status"><span class="sr-only">Loading...</span></div></div></div>';
    $("#username").change(function (e) {
        var tempusername = e.target.value;
        if (tempusername == "") {
            document.getElementById('alertusername').innerHTML = "Invalid Username";
            usernameStatus = false;
        } else {
            document.getElementById('alertusername').innerHTML = "";
            usernameStatus = true;
        }
    })
    $("#password").change(function (e) {
        var temppassword = e.target.value;
        if (temppassword == "") {
            document.getElementById('alertpassword').innerHTML = "Invalid Password";
            passwordStatus = false;
        } else {
            document.getElementById('alertpassword').innerHTML = "";
            passwordStatus = true;
        }
    })
    $("#save").click(function () {
        document.getElementById('loginstatus').innerHTML = "";
        if (!usernameStatus) {
            document.getElementById('alertusername').innerHTML = "Invalid Username";
        }
        if (!passwordStatus) {
            document.getElementById('alertpassword').innerHTML = "Invalid Password";
        }
        if (usernameStatus && passwordStatus) {
            document.getElementById('spinner').innerHTML = spinner;
            var user = new Object();
            user.username = $('#username').val();
            user.password = $('#password').val();
            $.ajax({
                url: 'https://morning-wildwood-74823.herokuapp.com/api/user/auth',
                type: 'POST',
                data: JSON.stringify(user),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                async: true,
                success: function (data, textStatus, xhr) {
                    if (data) {
                        localStorage.setItem("token", data.token);
                        window.location.href = 'contact.html';
                    }
                },
                error: function (xhr, textStatus, errorThrown) {
                    document.getElementById('username').value = null;
                    document.getElementById('password').value = null;
                    usernameStatus = false;
                    passwordStatus = false;
                    document.getElementById('spinner').innerHTML = "";
                    var errorHtml = '<div class="alert alert-danger" role="alert">Invalid Credentials</div>'
                    document.getElementById('loginstatus').innerHTML = errorHtml;
                }
            });
        }
    });
});