require('basichtml').init();

var hyperStyle = require('../cjs');
test();

function test() {
  var div = document.createElement('div');
  var update = hyperStyle(div);
  var styles = [];
  var base = {border: 0};
  update('margin:0;');
  styles.push(div.style.cssText);
  update(base);
  update(base);
  styles.push(div.style.cssText);
  update({border: 0, margin: 0});
  styles.push(div.style.cssText);
  update({margin: 0});
  styles.push(div.style.cssText);
  update({fontFamily: 'sans-serif', '--property': 'value'});
  update(null);
  update(null);
  console.assert(!div.style.cssText.length);
  div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"><rect /></svg>';
  var rect = div.childNodes[0].childNodes[0];
  if (!('ownerSVGElement' in rect))
    rect.ownerSVGElement = div;
  else
    console.log('native SVG');
  update = hyperStyle(rect);
  update('margin:0;');
  console.assert(rect.style.cssText === styles[0], 0);
  update(base);
  update(base);
  console.assert(rect.style.cssText === styles[1], 1);
  update({border: 0, margin: 0});
  console.assert(rect.style.cssText === styles[2], 2);
  update({margin: 0});
  update({fontFamily: 'sans-serif', '--property': 'value'});
  update(null);
  console.assert(!div.style.cssText.length);
}
