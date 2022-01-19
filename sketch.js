var jack,path1,jack_Runner,invisiblepath,invisiblepath1,path;

function preload(){
  //pre-load images

  jack_Runner=loadAnimation("Runner-1.png","Runner-2.png");
  path1=loadImage("path.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage("running",path1);

  path.velocityY=4; 
  path.scale=1.2;
 

  jack=createSprite(200,330,10,30);
  jack.addAnimation("running",jack_Runner);
  jack.scale=0.05;
  invisiblepath=createSprite(0,300,50,200);
  invisiblepath.visible=false;
  
  invisiblepath1=createSprite(400,300,50,200);
  invisiblepath1.visible=false;


}

function draw() {
  background(0);

jack.x=World.mouseX;




if(path.y>400){
  path.y=height/2
}

jack.collide(invisiblepath);
jack.collide(invisiblepath1);



drawSprites();
}
