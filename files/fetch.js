$("#name-submit").on('click', function() {
    var name = $('#name-box').val();
    console.log("submitting " + name);
    $.get({
      url: '/api/hello/'+name,
      success: function(resp) {
        $('#name-last').text(resp);
      },
      error: function() {
        $('#name-last').text("error");
      }
    });
});
