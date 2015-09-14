$("#searchip").on("change keyup", function() {
  $.ajax({
    type: "GET",
    url: "getip.php",
    data: "ip=" + $("#searchip").val(),
    success: function(msg){
      $("#resultip").html(msg);
    },
    error: function(msg) {
      alertify.error(msg);
    }
  }); // Ajax Call
}).change(); //event handler
