$(function(){
    $(".create-burger").on("submit", function(event){
        event.preventDefault();
        var newBurger = {
            kind: $("#burg").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("Added new burger");
                location.reload();
            }
        );
    });
});