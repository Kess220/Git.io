var i = 0;

var tag = document.getElementById("text");
var html = document.getElementById("text").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 170;

function typeWriter() {
  if (i <= txt.length) {
    document.getElementById("text").innerHTML = txt.slice(0, i + 1);
    i++;
    setTimeout(typeWriter, speed);
  }
  console.log({
    txt,
    attr,
    html,
  });
}
setInterval(() => {
  //document.getElementById("text").innerHTML = "";
  i = 0;
  typeWriter();
}, 5000);
