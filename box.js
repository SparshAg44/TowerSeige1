class Box{
    constructor(x,y,width,height){
      this.image = loadImage("box.png");
  var options = {
    
  'friction' : 1.0,
  //'density' : 0.3,
  'restitution' : 0.4
  }
  
  this.height = height;
  this.width = width;
  this.body = Bodies.rectangle(x,y,width,height,options);
  World.add(world,this.body);
  }
  
  
  display(){
  var pos = this.body.position;
  var angle = this.body.angle;
  
  push();
  translate(pos.x,pos.y);
  rotate(angle);
  /*stroke("black");
  strokeWeight(3);
  fill("skyblue");
  */
  imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
  pop();
  
  }
  
  }