var bible = require("./bibel_schlachter.json");

exports.get = function(book, chapter, vers) {
  if(book === undefined)
    return undefined;
  if(chapter === undefined)
    return bible[book];
  if(vers === undefined) {
    if(bible[book] === undefined)
      return undefined;
    else
      return bible[book][chapter];
  }
  if(bible[book] === undefined ||
     bible[book][chapter] === undefined)
    return undefined;
  else
    return bible[book][chapter][vers];
}

exports.list = function() {
  var result = [];
  for(var bookname in bible)
    result.push(bookname);
  return result;
}
