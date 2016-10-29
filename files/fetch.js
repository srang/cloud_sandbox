$("#name-submit").on('click', function() {
    var name = $('#name-box').val();
    console.log("submitting " + name);
    $.get({
      url: 'http://app.server.local/hello/'+name,
      success: function(resp) {
        $('#name-last').text(resp.body);
      },
      error: function() {
        $('#name-last').text("error");
      }
    });
});
