/* global document, flowchart */
Array.prototype.forEach.call(document.querySelectorAll('.chart'), function (el) {
  var div = document.createElement('div');
  el.parentNode.insertBefore(div, el);
  flowchart.parse(el.innerHTML).drawSVG(div, {
    'yes-text': '是',
    'no-text': '否',
    'font-size': 16,
    flowstate: {
      primary: { fill: '#337ab7', 'font-color': '#fff', 'element-color': '#337ab7'},
      success: { fill: '#dff0d8' },
      warning: { fill: '#fcf8e3' },
      info: { fill: '#d9edf7' },
      danger: { fill: '#f2dede' }
    }
  });
});
