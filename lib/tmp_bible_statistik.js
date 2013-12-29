var bible = require("./bible.js");
var readline = require("readline");

var statis_search = function(word) {
  var result = {};
  var book_list = bible.list()
  for(var book in book_list) {
    result[book_list[book]] = bible.search(word, book_list[book]).length;
  }

  //find longest
  var maxi = 1;
  for(var i in result) {
    if(maxi < result[i]) {
      maxi = result[i];
    }
  }

  for(var book in result) {
    var p = '';
    for(var i = 0; i < Math.round(result[book] / (maxi / 40)); i++)
      p += "#";
    console.log(p + "| " + book + "(" + result[book] + ")");
  }
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nach was wollen Sie suchen? ", function(answer) {
  statis_search(answer);
  rl.close();
});
