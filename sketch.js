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
  background(0,0,0);

  text("x:"+mouseX,50,50);
  text("y:"+mouseY,50,75);

  car.velocityX = speed;
  
  deformation();

  if(car.x>1460){
    car.x = 1460;
  }
 
  fill("pink"); 
  textSize(19); 
  text("Deformation:"+Math.round((0.5*speed*weight*speed)/22500),1150,350);

  fill("red"); 
  textSize(19); 
  text("Deformation >= 180 Is Considered Lethal For Passengers",350,270);

  fill("yellow"); 
  textSize(19);
  text("Deformation >= 100 but <180 Is Considered Average For Passengers",350,292);

  fill("green"); 
  textSize(19);
  text("Deformation <=100 Is Considered GOOD For Passengers",350,315);

  

  
  drawSprites();
}

function deformation(){
  if(wall.x-car.x < (car.width+wall.width)/2)
  {

    var deformation = 0.5 * weight * speed * speed/22509;
    car.velocityX = 0;
    if(deformation<100)
    {
      car.shapeColor = color(0,255,0); 
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
  }

}