$(document).ready(function() {
  
  let array = ["header","paragraph","image"];

  array.forEach(function(description) {
    $("h1").click(function() {
      alert(description);
    });
  });
});