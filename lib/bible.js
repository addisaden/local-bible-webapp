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

exports.list = function(book, chapter) {
  var result = [];

  // book && not chapter
  if(book !== undefined &&
     chapter === undefined) {
    if(bible[book] !== undefined) {
      for(var chapter in bible[book])
        result.push(chapter);
    } else {
      return undefined;
    }
  }
  // book && chapter
  else if(book !== undefined &&
          chapter !== undefined) {
    if(bible[book] !== undefined &&
       bible[book][chapter] !== undefined) {
      for(var vers in bible[book][chapter])
        result.push(vers);
    } else {
      return undefined;
    }
  }
  // normal case
  else {
    for(var bookname in bible)
      result.push(bookname);
  }

  return result;
}
