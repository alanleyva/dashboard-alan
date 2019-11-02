function initial(text) {
  text = text.split(" ");
  if (text.length > 1) {
    var newText = text[0][0] + text[1][0];
  } else {
    newText = text[0][0] + text[0][1];
  }
  return newText.toLocaleUpperCase();
}

module.exports = { initial };
