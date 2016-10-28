$("#name-submit").on('click', function() {
    var name = $('#name-box').val();
    console.log("submitting " + name);
    $.get({
      url: 'app.server.local/'+name,
      success: function() {
        $('#name-last').text(name);
      },
      error: function() {
        $('#name-last').text("error");
      }
    });
});
