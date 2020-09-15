var registration = false;
var switched = false;

$(document).ready( () => {
    console.log("dom loaded");
    $("#submit").click((event) => {
        switch (registration) {
            case false:
                $.ajax({
                    type: 'POST',
                    url: "/api/login",
                    dataType: 'json',
                    data: {
                        username: $("#username").val(),
                        password: $("#password").val()
                    }
                }, (data) => {
                    console.log(data);
                }, (err) => {
                    console.log(err);
                });
                break;
            case true:
                if ($("#password").val() != $("#confPassword").val()) {
                    alert("Passwords must match!")
                } else {
                    $.ajax({
                        type: 'POST',
                        url: "/api/register",
                        dataType: 'json',
                        data: {
                            username: $("#username").val(),
                            password: $("#password").val()
                        }
                    }, (data) => {
                        console.log(data);
                    }, (err) => {
                        console.log(err);
                    });
                }
                break;
        }
    });
    $("#switcher").click((event) => {
        switch (registration,switched) {
            case false:
                registration = true;
                switched = true;
                $("#loginForm").append(
                    "<input class=\"log\" type=\"password\" id=\"confPassword\" class=\"form-control mb-3\"\
                    name=\"username\" placeholder=\"Confirm password\" required>"
                );
                $("#submit").html("Register");
                $("#switcher").html("Already registered? Log in");
                
                
                
                break;
            case true:
                registration = false;
                switched = false;   
                $("#confPassword").remove();
                $("#submit").html("Login");
                $("#switcher").html("Not Registered? Register Here");

                break;
        }

    })
});