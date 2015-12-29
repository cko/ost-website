var fs = require('fs');
var parse5 = require('parse5');
var utils = require('parse5-utils')

var generateMainTemplate = function (document) {
  fs.readFile(filename, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var document = utils.parse(data);
    utils.replace(document.childNodes[2].childNodes[2].childNodes[9], utils.createTextNode("{Platzhalter für content}"))
    var content = utils.stringify(document);
    writeFile('www.opensourcetreffen.de/templates/main.html', content);
  });
}

var writeFile = function(filename, content){
  fs.writeFile(filename, content, function (err) {
    if (err) return console.log(err);
      console.log( filename + ' written');
  });
}

var processHtmlFile = function (filename){
  fs.readFile(filename, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    processBody(filename, data);
  });
}

var processBody = function(filename, data){
  var document = parse5.parse(data);
  var body = document.childNodes[2].childNodes[2];
  //body = removeHeaderAndFooter(body);
  // TODO remove head, header, footer and sidebar
  var bodyAsText = parse5.serialize(body);
  fs.writeFile(filename + 'test', bodyAsText, function (err) {
    if (err) return console.log(err);
      console.log( filename + ' transformed');
  });
}

var filename = 'www.opensourcetreffen.de/index.html';
generateMainTemplate(filename);
processHtmlFile(filename);
