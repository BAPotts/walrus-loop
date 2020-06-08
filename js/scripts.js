$(document).ready(function() {
  
  let array = ["'h1'","'p'","'img'"];

  array.forEach(function(selector) {
    $(selector).click(function() {
      alert("This is a an element.");
    });
  });
});