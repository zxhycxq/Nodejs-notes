/*var log=function (mes) {
  process.stdout.write(mes+'\n');
}
log(12)*/
var frames = [];
frames[frames.length] = 2134;

var fps = 60;
var current = 0;
var render = () => {
  if (current === frames.length) {
    current = 0;
  }
}

setInterval (render, 1000 / fps);
var q = document.querySelectorAll(".subject-item a")
q.map(function (index) {
  console.log(index.title);
})
