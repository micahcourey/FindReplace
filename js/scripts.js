var findReplace = function(string, search_word, replacement) {
  var search_word = RegExp(search_word, 'gi')
  var replacement_string = string.replace(search_word, replacement);
  return replacement_string;
};

$(document).ready(function() {
  $("form#find_replace").submit(function(event) {
    var string = $("input#string").val();
    var search_word = $("input#search_word").val();
    var replacement = $("input#replacement").val();
    var result = findReplace(string, search_word, replacement);

    $(".string").text(string);
    $(".search_word").text(search_word);
    $(".replacement").text(replacement);
    $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
