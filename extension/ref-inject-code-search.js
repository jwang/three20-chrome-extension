var _CLASS_DOC_URL_REGEX = /http:\/\/a(?:pi)?.three20.info\/reference\/(.+).php/;
var _CLASS_SRC_URL_TEMPLATE = 'http://github.com/facebook/three20;a=blob;f=$MODULE/$NAME_SLASH.m';

var _CODESEARCH_URL_TEMPLATE = 'http://codesearch.google.com/codesearch?q=package:git://github.com/facebook/three20.git+file:$NAME_SLASH';
var _GITGREP_URL_TEMPLATE = 'http://github.com/facebook/three20?a=search&h=HEAD&st=grep&s=$QUERY';

var url = window.location.href;
var appendContent = null;

var m;
if (m = url.match(_CLASS_DOC_URL_REGEX)) {
  var nameSlash = m[1].replace(/\..*/, ''); // trim inner classes
  var nameDot = m[1].replace(/\//g, '.');
  var project = 'facebook/three20';
  appendContent = [
      ' (<a href="',
      _CODESEARCH_URL_TEMPLATE
          .replace(/\$NAME_SLASH/g, nameSlash + '.h'),
      '">view source</a>)'
  ].join('');

}

if (appendContent) {
  $('#jd-header h1').append(appendContent);
}
