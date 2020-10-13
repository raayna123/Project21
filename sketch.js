var bullet, wall;
var speed, weight, thickness;
var bulletSpeed, bulletWeight;


function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  bulletSpeed = random(223,321);
  bulletWeight = random(30,52);
  bullet = createSprite(450, 200, 50, 10);
  bullet.velocityX = bulletSpeed;
  bullet.shapeColor = "white";

  
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background(180);
  
  if (hasCollided(bullet, wall)) {
    var damage = 0.5 * bulletWeight * bulletSpeed * bulletSpeed / (thickness * 
    thickness * thickness);
    console.log(damage);
    if(damage > 10) {
      bullet.shapeColor = "red";
    } else if(damage < 10) {
      bullet.shapeColor = "green";
    } 
  }  
  drawSprites();
}

function hasCollided(bullet, wall) {
  var isCollided = bullet.collide(wall);
  return isCollided;
}