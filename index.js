var fs = require('fs');
var parse5 = require('parse5');
var utils = require('parse5-utils')

var generateMainTemplate = function (document) {
  fs.readFile(filename, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var document = utils.parse(data);
    var wrapperDiv = document.childNodes[2].childNodes[2].childNodes[9];
    var pageContent = wrapperDiv.childNodes[1].childNodes[3];
    utils.replace(pageContent, utils.createTextNode("{Platzhalter für content}"))
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

var processPageContent = function (filename){
  fs.readFile(filename, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var document = utils.parse(data);
    var wrapperDiv = document.childNodes[2].childNodes[2].childNodes[9];
    var pageContent = wrapperDiv.childNodes[1].childNodes[3];
    var pageContentAsText = '<div id="content">' + utils.stringify(pageContent) + '</div>';
    writeFile(filename + '.template', pageContentAsText);
  });
}

var filename = 'www.opensourcetreffen.de/index.html';
generateMainTemplate(filename);
processPageContent(filename);
