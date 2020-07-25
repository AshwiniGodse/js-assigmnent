let i = 0;
function change() {
  var doc = document.getElementById("background");
  var color = ["black", "blue", "brown", "green"];
  doc.style.background = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 5000);
change();