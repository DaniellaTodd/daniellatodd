var canvas;
var bg;
var blackButton;
var whiteButton;
var clearButton;

// function preload(){
//   bg = loadImage('images/border.png');
// }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '0');
  strokeWeight(4);
  stroke(100);
  // var button = createButton("CLEAR");
  // button.mousePressed(resetCanvas);
  // button.position(186.5,812);
  // button.style('font-size', '14px');
  // button.style('font-weight', 'bold');
  blackButton = select('#btn-black');
  blackButton.mousePressed(changeColorBlack);
  whiteButton = select('#btn-white');
  whiteButton.mousePressed(changeColorWhite);
  clearButton = select('#btn-clear');
  clearButton.mousePressed(resetCanvas);
}

function resetCanvas() {
  clear();
}

function draw() {
  // background(bg);
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  cursor(HAND);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function changeColorBlack() {
  document.body.style.background = '#181818';
  document.body.style.color = 'white';
  document.getElementById('btn-black').style.color = 'white';
  document.getElementById('btn-white').style.color = 'white';
  document.getElementById('btn-clear').style.color = 'white';
  var elements = document.getElementsByClassName('work-link'), i, len;
  for (i = 0, len = elements.length; i < len; i++) {
    elements[i].style.color = 'white';
  }
}
function changeColorWhite() {
  document.body.style.background = '#fff';
  document.body.style.color = 'black';
  document.getElementById('btn-black').style.color = 'black';
  document.getElementById('btn-white').style.color = 'black';
  document.getElementById('btn-clear').style.color = 'black';
  var elements = document.getElementsByClassName('work-link'), i, len;
  for (i = 0, len = elements.length; i < len; i++) {
    elements[i].style.color = 'black';
  }
}
function changeColorClear() {
  document.body.style.background = transparent;
  document.body.style.color = 'black';
  document.getElementById('btn-black').style.color = 'black';
  document.getElementById('btn-white').style.color = 'black';
  document.getElementById('btn-clear').style.color = 'black';
  var elements = document.getElementsByClassName('work-link'), i, len;
  for (i = 0, len = elements.length; i < len; i++) {
    elements[i].style.color = 'black';
  }
}
