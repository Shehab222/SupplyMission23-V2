var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redBoxBottom, redBoxSide2, redBoxSide3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
    
	redBoxBottom=createSprite(400,650,200,20);
    redBoxBottom.shapeColor=color("red");
	redBoxBottom.velocityX=0.5;

	redBoxSide2=createSprite(300,620,20,100);
	redBoxSide2.shapeColor=color("red");
	redBoxSide2.velocityX=0.5;
	
	redBoxSide3=createSprite(500,620,20,100);
	redBoxSide3.shapeColor=color("red"); 
	redBoxSide3.velocityX=0.5;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  text(mouseX+","+mouseY,mouseX,mouseY);
 keyPressed();
 
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.x=redBoxBottom.x;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic(packageBody,false);
	if (packageSprite.y >= 640) { 
		Matter.Body.setStatic(packageBody,true);
		console.log(packageSprite.y);
		//boxSecure();
	}
  }
}


