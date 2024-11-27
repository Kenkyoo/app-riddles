$(document).ready(function() {
    $("#btn").click(function () {
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/riddles',
            headers: { 'X-Api-Key': '47TbcbBJKlCP92xRufCnOg==PTkLKDxbwTowUKbb'},
            contentType: 'application/json',
            success: function(result) {
                const results = result[0];
                setRiddle(results);
                $( ".card" ).effect( "pulsate" );
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    });

    $("#show").click(function() {
        $("#answer").show("fade");
    });
});

function setRiddle(result) {
    $('#title').html(result.title);
    $('#question').html(result.question);
    $('#answer').html(result.answer);
    
    // Ocultar la respuesta al cargar un nuevo acertijo
    $('#answer').hide();
}
