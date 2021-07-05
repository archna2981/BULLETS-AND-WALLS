var wall,thickness;
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
 //createSprite(400, 200, 50, 50);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = ("white");

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(33,47,60);
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  /*if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=(0.5*weight*speed*speed)/22500;
    if(deformation>180)
    {
      car.shapeColor = ("cyan");
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor = ("green");
    }

    if(deformation<100)
    {
      car.shapeColor = ("red");
    }
  }*/
  stroke(50,229,229);
  fill(50,229,229);
  textSize(30);
  text("Press ctrl+R to get new colour",200,200);
  
  drawSprites();
}

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}







