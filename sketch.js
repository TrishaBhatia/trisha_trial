var bg,player1,player2,arrow;
var p1,p2,arrows,player;
var gameState=0;
var m1,m2,m3,m4,m5,m6,m7;

function preload()
{
	bg=loadImage("bg2.jpg");
  m1=loadImage("monster1.png");
  m2=loadImage("monster2.png");
  m3=loadImage("monster3.png");
  m4=loadImage("monster4.png");
  m5=loadImage("monster5.png");
  m6=loadImage("monster6.png");
  m7=loadImage("monster7.png");
  player1=loadImage("player.png");
  player2=loadImage("player1.png");
  arrow=loadImage("arrow.png");
}

function setup() {
	createCanvas(800, 700);

  p1=createSprite(50,100);
  p1.addImage(player1);
  //p1.scale=0.5;

  p2=createSprite(300,100);
  p2.addImage(player2);
  p2.scale=0.1;
  //p2.setCollider("circle",0,0,40)

 
  

  

    text("GAME",100,50);
    text("WLECOME,CHOOSE YOUR AVATAR FROM BELOW",100,200);
   if(mousePressedOver(p1))
   {
     p2.visible=false;
     
     //player=createSprite(p1.x,p1.y,10,10);
     
   }
   else
   {
    p1.visible=false;
    //player=createSprite(p2.x,p2.y,10,10);
   }
  
}


function draw() {
  


  
  if(gameState===1)
  {  background(bg);

    if(keyDown("space"))
    spawnArrow();
  }

  
  drawSprites();
 
}
function spawnArrow()
{
 arrows=createSprite(player.x+5,player.y);
 arrows.addImage(arrow);
 arrows.velocityX=5;

}


