$(document).ready(function() {
  $("button#fight").click(function() {
    $("h2#dogs").after("<p>Bark!</p>");
    $("h2#cats").after("<p>Meow!</p>");
  });
  $("button#image").click(function() {
    $("h2#dogs").before('<img src="img/superdog.jpg" />');
    $("h2#cats").before('<img src="img/banecat.jpg" />');
    $("img").click(function() {
      $(this).remove();
    });
  });
});
