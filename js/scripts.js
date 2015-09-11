var findReplace = function(string, search_word, replacement) {
  var search_word = RegExp(search_word, 'gi')
  var replacement_string = string.replace(search_word, replacement);
  return replacement_string;
};
