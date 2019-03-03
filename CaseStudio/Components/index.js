function random(min,max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function distance(a, b) {
    return Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2);
}

function distanceNextFrame(a,b) {
   return Math.sqrt((a.x + a.velX- b.x - b.velX)**2 + (a.y + a.velY- b.y - b.velY)**2) - a.radius - b.radius;
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var balls = [];

var bar;

var width;
var height;

var button;

function init() {
  button = document.querySelector(".square_btn");
  button.style.display = 'none';
  button.innerHTML = "Chơi Lại";
  button.removeEventListener('click',init);
  button.addEventListener('click',resetGame);
  startGame();
}

function startGame() {
  /* Số lượng bóng */
  var numOfBalls = 1
  width = canvas.width = 600;
  height = canvas.height = 500;
  bar = new Bar(100,height-100,'red',300,20);
  while (balls.length < numOfBalls) {
    var radius = random(10,20);
    var ball = new Ball(
      random(0 + radius, width - radius),
      random(0 + radius,height-radius-bar.height-150),
      5,
      5,
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')',
      radius
    );
    balls.push(ball);
  }
  window.addEventListener('keydown',bar.move.bind(bar));
  loop();
};

function resetGame() {
  balls = new Array(0);
  canvas.style.display = "block";
      button.style.display = "none";
  startGame();
}

var requestId;

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);
  for (var ball in balls) {
    if (balls[ball].onGround()) {
      alert("Loser");
      canvas.style.display = "none";
      button.style.display = "block";
      return;
    }
    balls[ball].update();
    balls[ball].draw(ctx);
  }
  bar.draw();
  window.requestAnimationFrame(loop);
}
