$(function(){
    $(".eat").on("click", function(event){
        var id = $(this).data("id");

        var devour = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devour
        }).then(
            function(){
                console.log("changed devoured to", devour);
                location.reload();
            }
        )
    });

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