$(document).ready(function() {
  $("form#favorite-things").submit(function(event) {
    var foodInput = $("input#food").val();
    var bookInput = $("input#book").val();
    var tvInput = $("input#tv").val();
    var colorInput = $("input#color").val();

    var favoriteArray = [foodInput,bookInput,tvInput,colorInput];

    var arrayTwo = [];

    arrayTwo.push(favoriteArray[0],favoriteArray[1],favoriteArray[2]);

    $("#list").html("<li>" + arrayTwo[0]+ "</li>"+"<li>" + arrayTwo[1]+ "</li>"+"<li>" + arrayTwo[2]+ "</li>");
    event.preventDefault();

    var languages = ['HTML', 'CSS', 'JavaScript'];
    languages.forEach(function(language) {
    alert('I love ' + language + '!');
});
  });
});
