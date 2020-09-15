var registration = false;

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

    $("#register").click((event) => {
        registration = true;

        $("#loginForm").append(
            "<input class=\"log\" type=\"password\" id=\"confPassword\" class=\"form-control mb-3\"\
             name=\"username\" placeholder=\"Confirm password\" required>"
        );

        $("#register").remove();
    })
});