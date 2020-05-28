var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);

  

  speed = random(55,90);
  weight = random (400,1500);
}

function draw() {
  car.velocityX = speed;

  if(wall.x-car.x < (car.width+wall.width)/2)
  {

    var deformation = 0.5 * weight * speed * speed/22509;

  if(car.isTouching(wall)){
    car.velocityX = 0;
  }
    
    if(deformation<100)
    {
      car.shapeColor = color(255,0,0); 
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

    if(deformation>180)
    {
      car.shapeColor=color(0,255,0);
    }
  }

  /*if(car.isTouching(wall) && car.shapeColor(255,0,0)){
    Text("This car is very good for passengers ");
  }
  else if (car.isTouching(wall) && car.shapeColor(230,230,0)){
  Text("This car is average i.e its safe for passengers");
  }
  else(car.isTouching(wall) && car.shapeColor(0,225,0)){
  Text("This car is lethal for passengers");
  }*/


  background(255,255,255);

  drawSprites();
}