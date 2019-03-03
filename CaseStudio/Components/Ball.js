function Ball(x,y,velX,velY,color,radius) {
  Shape.call(this,x,y,velX,velY,color);
  this.radius = radius;
  this.mass = this.radius*this.radius*this.radius;
}

Ball.prototype = Object.create(Shape.prototype);

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
  ctx.fill();
}

Ball.prototype.speed = function() {
  return Math.sqrt(this.velX*this.velX + this.velY*this.velY);
}

Ball.prototype.angle = function() {
  return Math.atan2(this.velY,this.velX);
}

Ball.prototype.onGround = function() {
  return (this.y + this.radius) >= canvas.height;
}

Ball.prototype.wallCollision = function() {
  if ((this.x + this.radius) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.radius) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y - this.radius) <= 0) {
    this.velY = -(this.velY);
  }
}

Ball.prototype.ballCollision = function() {
  balls.forEach(e => {
    if (e != this && distanceNextFrame(this,e) <= 0) {
      var theta1 = this.angle()
      var theta2 = e.angle();
      var phi = Math.atan2(e.y - this.y, e.x - this.x);
      var m1 = this.mass;
      var m2 = e.mass;
      var v1 = this.speed();
      var v2 = e.speed();

      var velX1F = (v1 * Math.cos(theta1 - phi) * (m1-m2) + 2*m2*v2*Math.cos(theta2 - phi)) / (m1+m2) * Math.cos(phi) + v1*Math.sin(theta1-phi) * Math.cos(phi+Math.PI/2);
      var velY1F = (v1 * Math.cos(theta1 - phi) * (m1-m2) + 2*m2*v2*Math.cos(theta2 - phi)) / (m1+m2) * Math.sin(phi) + v1*Math.sin(theta1-phi) * Math.sin(phi+Math.PI/2);
      var velX2F = (v2 * Math.cos(theta2 - phi) * (m2-m1) + 2*m1*v1*Math.cos(theta1 - phi)) / (m1+m2) * Math.cos(phi) + v2*Math.sin(theta2-phi) * Math.cos(phi+Math.PI/2);
      var velY2F = (v2 * Math.cos(theta2 - phi) * (m2-m1) + 2*m1*v1*Math.cos(theta1 - phi)) / (m1+m2) * Math.sin(phi) + v2*Math.sin(theta2-phi) * Math.sin(phi+Math.PI/2);

      this.velX = velX1F;
      this.velY = velY1F;
      e.velX = velX2F;
      e.velY = velY2F;
    }
  })
}

Ball.prototype.barCollisionDetect = function() {
  // if (((this.x + this.radius >= bar.x) && (this.x + this.radius <= bar.x + bar.width))
  //                                     &&
  //      (this.y + this.radius >= bar.y) && (this.y + this.radius <= bar.y + bar.height)) {
  //               this.velY = -this.velY;
  // }
  if (rectCircleColliding(this,bar)) {
    this.velY = -this.velY;
  }
}

function rectCircleColliding(circle,rect){
    var distX = Math.abs(circle.x - rect.x-rect.width/2);
    var distY = Math.abs(circle.y - rect.y-rect.height/2);

    if (distX > (rect.width/2 + circle.radius)) { return false; }
    if (distY > (rect.height/2 + circle.radius)) { return false; }

    if (distX <= (rect.width/2)) { return true; }
    if (distY <= (rect.height/2)) { return true; }

    var dx=distX-rect.width/2;
    var dy=distY-rect.height/2;
    return (dx*dx+dy*dy<=(circle.radius*circle.radius));
}

Ball.prototype.update = function() {
  this.barCollisionDetect();
  this.ballCollision();
  this.wallCollision();
  this.x += this.velX;
  this.y += this.velY;
}
