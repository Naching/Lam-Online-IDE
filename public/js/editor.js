var input = document.getElementById('input');
var myCodeMirror = CodeMirror.fromTextArea(input, {
  mode: "javascript",
  matchbrackets: true,
  lineNumbers: true,
  theme: "material",
  indentUnit: 3,
  tabSize: 3,
  lineWrapping: true,
  viewPortMargin: Infinity
});
myCodeMirror.setOption("extraKeys", {
  'Ctrl-Enter': function() {
    run();
  }
});
function run(){
  console.log("run");
  document.getElementById('run').innerHTML = interpret(myCodeMirror.getValue());
}
function stop(){
  console.log("stop");
}
