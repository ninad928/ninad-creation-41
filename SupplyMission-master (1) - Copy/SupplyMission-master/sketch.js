var helicopterIMG, helicopterSprite, packageSprite,packageSprite2,packageIMG;
var packageBody,packageBody2,ground;
var l1,l2,l3;

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
	

	l1=createSprite(286,625,15,100);
    l2=createSprite(494,625,15,100);
    l3=createSprite(390,667,220,15);
	l1.shapeColor="orange";
	l2.shapeColor="orange";
	l3.shapeColor="orange";

	packageSprite=createSprite(359, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	packageSprite2=createSprite(350, 75, 10,10);
	packageSprite2.addImage(packageIMG)
	packageSprite2.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-25, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.9, isStatic:true});
	World.add(world, packageBody);
	packageBody2 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.9, isStatic:true});
	World.add(world, packageBody2);
	

	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background("blue");
 
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y ;
  packageSprite2.x= packageBody2.position.x; 
  packageSprite2.y= packageBody2.position.y ;

  
  l1.collide(packageSprite);
  l2.collide(packageSprite);
  l3.collide(packageSprite);
  l1.collide(packageSprite2);
  l2.collide(packageSprite2);
  l3.collide(packageSprite2);
  l1.collide(groundSprite);
  l2.collide(groundSprite);
  l3.collide(groundSprite);

  keyPressed();

  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(packageBody,false);
 Matter.Body.setStatic(packageBody2,false);
 
    
  }
}



