$(document).ready(function() {
    $(".devourMeButton").on("click", function(event) {
      var id = $(this).data("burger");
      
  

      $.ajax("/api/burgers/" + id, {
        type: "PUT",

      }).then(
        function() {

          location.reload();
        }
      );
    });
  
    $("#formButton").on("click", function(event) {
      console.log("submitted a new burger");
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          

          location.reload();
        }
      );
    });

    $(".deleteMeButton").on("click", function(){
      var id = $(this).data("burger");

      $.ajax("/api/burgers/" + id, {
        type: "DELETE"

      }).then(
        function(){
          

          location.reload();
        }
      )
    })


});