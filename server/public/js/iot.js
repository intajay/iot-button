$('#on').on('click', function () {
    $.ajax({
        method: 'PUT',
        url: '/button',
        beforeSend: function (req) {
            req.setRequestHeader('Content-Type', 'application/json');
        },
        data: JSON.stringify({
            "status": "on"
        }),
        success: function (data, textStatus, jqXHR) {},
        error: function (textStatus) {
            console.log(textStatus);
        }
    });
});

$('#off').on('click', function () {
    $.ajax({
        method: 'PUT',
        url: '/button',
        beforeSend: function (req) {
            req.setRequestHeader('Content-Type', 'application/json');
        },
        data: JSON.stringify({
            "status": "off"
        }),
        success: function (data, textStatus, jqXHR) {},
        error: function (textStatus) {
            console.log(textStatus);
        }
    });
});