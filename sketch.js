const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var balls = [];
var boats = [];
var score = 0;
var boatAnimation = [];
var boatSpritedata, boatSpritesheet;

var brokenBoatAnimation = [];
var brokenBoatSpritedata, brokenBoatSpritesheet;

var waterSplashAnimation = [];
var waterSplashSpritedata, waterSplashSpritesheet;
var gameState = "wait";
var pennywise;

function preload() {
   backgroundImg = loadImage("./pennywiseimgs/bg12.jpg");
  pennyImg = loadImage("./pennywiseimgs/stanpeny.png");
  jokerImg = loadImage("./pennywiseimgs/j.png")
  bg3Img = loadImage("./pennywiseimgs/bg3.jpg")
  // boatSpritedata = loadJSON("assets/boat/boat.json");
  // boatSpritesheet = loadImage("assets/boat/boat.png");
  // brokenBoatSpritedata = loadJSON("assets/boat/brokenBoat.json");
  // brokenBoatSpritesheet = loadImage("assets/boat/brokenBoat.png");
  // waterSplashSpritedata = loadJSON("assets/waterSplash/waterSplash.json");
  // waterSplashSpritesheet = loadImage("assets/waterSplash/waterSplash.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15

  pennywise = new Pennywise(50,300,300,650);
  joker = new Joker( width-200,300,350,650)



 


  // ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  // World.add(world, ground);

  // tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  // World.add(world, tower);

  // cannon = new Cannon(180, 110, 130, 100, angle);

  // var boatFrames = boatSpritedata.frames;
  // for (var i = 0; i < boatFrames.length; i++) {
  //   var pos = boatFrames[i].position;
  //   var img = boatSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
  //   boatAnimation.push(img);
  // }

  // var brokenBoatFrames = brokenBoatSpritedata.frames;
  // for (var i = 0; i < brokenBoatFrames.length; i++) {
  //   var pos = brokenBoatFrames[i].position;
  //   var img = brokenBoatSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
  //   brokenBoatAnimation.push(img);
  // }

  // var waterSplashFrames = waterSplashSpritedata.frames;
  // for (var i = 0; i < waterSplashFrames.length; i++) {
  //   var pos = waterSplashFrames[i].position;
  //   var img = waterSplashSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
  //   waterSplashAnimation.push(img);
  // }
}

function draw() {
  background(189);
  Engine.update(engine);


  if(gameState == "wait"){
  image(backgroundImg, 0, 0, width, height);

 
  
  fill("white")
  stroke("white")
  textSize(100)
  text("CLICK SPACE TO JOIN THE GAME", 180,height-100);
  }

  if(keyCode === 32)
{
  image(bg3Img, 0, 0, width, height); 

  
  // image(pennyImg, 50,200,350,650)
  // image(jokerImg, 800,200,350,650)
  push()
  fill("black")
  text("Ready for Battle?", 650,700);
  text("Click A to enter the Battle", 400,850)
  pop()

}
if(keyIsDown(65)){
  gameState= "play"
}



if( gameState == "play"){

  
  //pennysprite.visible = false;
  image(backgroundImg, 0, 0, width, height);
  pennywise.display();
  pennywise.movement();
  joker.movement();
  joker.display();
  this.collide(pennywise.body, joker.body)
 

}





//   push();
//   translate(ground.position.x, ground.position.y);
//   fill("brown");
//   rectMode(CENTER);
//   rect(0, 0, width * 2, 1);
//   pop();

//   push();
//   translate(tower.position.x, tower.position.y);
//   rotate(tower.angle);
//   imageMode(CENTER);
//   image(towerImage, 0, 0, 160, 310);
//   pop();

//   showBoats();

//   for (var i = 0; i < balls.length; i++) {
//     showCannonBalls(balls[i], i);
//     collisionWithBoat(i);
//   }

//   cannon.display();

  
// }

// function collisionWithBoat(index) {
//   for (var i = 0; i < boats.length; i++) {
//     if (balls[index] !== undefined && boats[i] !== undefined) {
//       var collision = Matter.SAT.collides(balls[index].body, boats[i].body);

//       if (collision.collided) {
//           boats[i].remove(i);
        

//         Matter.World.remove(world, balls[index].body);
//         delete balls[index];
//       }
//     }
//   }
// }

// function keyPressed() {
//   if (keyCode === DOWN_ARROW) {
//     var cannonBall = new CannonBall(cannon.x, cannon.y);
//     cannonBall.trajectory = [];
//     Matter.Body.setAngle(cannonBall.body, cannon.angle);
//     balls.push(cannonBall);
//   }
// }

// function showCannonBalls(ball, index) {
//   if (ball) {
//     ball.display();
//     ball.animate();
//     if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
//         ball.remove(index);
      
//     }
//   }
// }

// function showBoats() {
//   if (boats.length > 0) {
//     if (
//       boats[boats.length - 1] === undefined ||
//       boats[boats.length - 1].body.position.x < width - 300
//     ) {
//       var positions = [-40, -60, -70, -20];
//       var position = random(positions);
//       var boat = new Boat(
//         width,
//         height - 100,
//         170,
//         170,
//         position,
//         boatAnimation
//       );

//       boats.push(boat);
//     }

//     for (var i = 0; i < boats.length; i++) {
//       if (boats[i]) {
//         Matter.Body.setVelocity(boats[i].body, {
//           x: -0.9,
//           y: 0
//         });

//         boats[i].display();
//         boats[i].animate();
        
//     }
//     }
//   } else {
//     var boat = new Boat(width, height - 60, 170, 170, -60, boatAnimation);
//     boats.push(boat);
//   }
// }

//  function keyReleased() {
//   if (keyCode === DOWN_ARROW) {
//     balls[balls.length - 1].shoot();
//   }
// }
}

function collide(bodyA, bodyB)
{
  var d = dist(bodyA.position.x,bodyA.position.y,bodyB.position.x,bodyB.position.y )
  if(d<=120){
    image(backgroundImg, 0, 0, width, height);
    pennywise.collideDisplay();
    joker.movement();
  joker.display();

    return true;
  }
  else{
    return false;
   
  }

}

function phealth(){
    push();
    image(lifeImage, width / 2 - 130, height - player.positionY - 400, 20, 20);
    fill("white");
    rect(width / 2 - 100, height - player.positionY - 400, 185, 20);
    fill("#f50057");
    rect(width / 2 - 100, height - player.positionY - 400, player.life, 20);
    noStroke();
    pop();
  }


