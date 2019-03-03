function Bar(x,y,color,width,height) {
  Shape.call(this,x,y,0,0,color);
  this.width = width;
  this.height = height;
}

Bar.prototype = Object.create(Shape.prototype);

Bar.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y,this.width,this.height);
}

Bar.prototype.move = function({keyCode}) {
  var step = 50;
  if (keyCode == '37') {
    if (this.x - step <= 0) {
      this.x = 0;
    } else {
      this.x -= step;
    }
  } else if (keyCode == '39') {
    if (this.x + this.width + step >= width) {
      this.x = width - this.width;
    } else {
      this.x += step;
    }
  }
}
