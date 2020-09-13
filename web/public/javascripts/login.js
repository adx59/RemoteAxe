$(document).ready( () => {
    console.log("dom loaded");
    $("#submit").click((event) => {
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
        })
    })
});