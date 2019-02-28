var canvas = document.getElementById('canvas');

var ctx = canvas.getContext("2d");

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

function random(min,max) {
  var num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function Shape(x,y,velX,velY) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = true;
}

function Ball(x,y,velX,velY,color,size) {
  Shape.call(this,x,y,velX,velY);
  this.color = color;
  this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);


Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
  ctx.fill();
}

Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}

Ball.prototype.collisionDetect = function() {
  balls.forEach(e => {
    if (!(this === e)) {
      let dx = this.x - e.x;
      let dy = this.y - e.y;
      let distance = Math.sqrt(dx*dx + dy*dy);
      if (distance < this.size + e.size) {
        e.color = this.color = 'rgb(' + random(0,255) + "," + random(0,255) + ',' + random(0,255) + ')';
      }
    }
  })
}

function EvilCircle() {
  Shape.call(this,x,y,20,20);
  this.color = 'white';
  this.size = 10;
}

EvilCircle.prototype = Object.create(Shape.prototype);

EvilCircle.prototype.draw = function () {

}

var balls = [];

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);
  while (balls.length < 25) {
    var size = random(10,20);
    var ball = new Ball(
      random(0 + size, width - size),
      random(0 + size,height-size),
      random(-7,7),
      random(-7,7),
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')',
      size
    );
    balls.push(ball);
  }
  balls.forEach((e) => {
    e.update();
    e.collisionDetect();
    e.draw();
  })
  requestAnimationFrame(loop);
}


loop();
