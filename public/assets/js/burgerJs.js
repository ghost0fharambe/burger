$(document).ready(function () {

    $("#burger").on('click', function () {
        event.preventDefault();
        var burgerObject = {
            burger_name: $("#burgerName").val().trim()
        };
        $.post('/api/burgers', burgerObject, function (err, data) {
            if (err) throw err;
            location.reload();
        });
    });

});