$(document).ready(function() {
  
  let array = [ ['h1', 'header'], ['p', 'paragraph'], ['img', 'image']];
  array.forEach(function( selector, description) {
    $(selector).click(function() {
      alert("This is a " + description + ".");
    });
  });
});