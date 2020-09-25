

var sword,fruit ,monster,fruitGroup,enemyGroup, score,r,randomFruit;
var swordImage , fruit1, fruit2 ,fruit3,fruit4, monsterImage, gameOverImage


function preload(){
  
  swordImage = loadImage("sword.png");
  monsterImage = loadAnimation("alien1.png","alien2.png")
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  gameOverImage = loadImage("gameover.png")
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   sword=createSprite(40,200,20,20);
   sword.addImage(swordImage);
   sword.scale=0.7
  

  // Score variables and Groups
  score=0;
  fruitGroup=new Group();
  enemyGroup=new Group();
  
}

function draw() {
  background("lightblue");
  
  
   
    
    // Move sword with mouse
    sword.y=World.mouseY;
    sword.x=World.mouseX;
  
   
   Enemy();
  fruits();
 if(enemyGroup.isTouching(sword)){
   fruitGroup.destroyEach();
   enemyGroup.destroyEach();
 }
if(fruitGroup.isTouching(sword)){
   fruitGroup.destroyEach();
   enemyGroup.destroyEach();
 }
 //Display score
   //text("Score : "+ score,300,30);
  drawSprites();
  

}


function Enemy(){
  
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving", monsterImage);
    monster.y=Math.round(random(10,500));
    monster.velocityX=-8;
    monster.setLifetime=50;
    
   enemyGroup.add(monster);
  }
 
}

function fruits(){
  if (frameCount % 60 === 0){
  var fruit = createSprite(400,165,10,40);
  fruit.velocityX = -6;
  fruit.y=Math.round(random(10,500));
    
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruit.addImage(fruit1);
              break;
      case 2: fruit.addImage(fruit2);
              break;
      case 3: fruit.addImage(fruit3);
              break;
      case 4: fruit.addImage(fruit4);
              break;
      default: break;
    }
    fruit.scale = .2;
     fruitGroup.add(fruit);
}
}