var fs = require('fs');
var parse5 = require('parse5');


var processHtmlFile = function (filename){
  fs.readFile(filename, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    processBody(filename, data);
    // TODO process head, header, footer and sidebar
  });
}


var processBody = function(filename, data){
  var document = parse5.parse(data);
  var body = document.childNodes[2].childNodes[2];
  var bodyAsText = parse5.serialize(body);
  fs.writeFile(filename, bodyAsText, function (err) {
    if (err) return console.log(err);
      console.log( filename + ' transformed');
  });
}

var filename = 'www.opensourcetreffen.de/index.html'
processHtmlFile(filename);
