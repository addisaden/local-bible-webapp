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

  var books_without_results = [];

  for(var book in result) {
    if(result[book] === 0) {
      books_without_results.push(book);
      continue;
    }
    var p = '';
    for(var i = 0; i < Math.round(result[book] / (maxi / 40)); i++)
      p += "#";
    console.log(p + "| " + book + "(" + result[book] + ")");
  }
  console.log("Bücher ohne Suchbegriff: " + books_without_results.join(", "));
  var gesamtanzahl = 0;
  for(var book in result)
    gesamtanzahl += result[book];
  console.log("Verse mit Suchbegriff: " + gesamtanzahl);
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nach was wollen Sie suchen? ", function(answer) {
  statis_search(answer);
  rl.close();
});
