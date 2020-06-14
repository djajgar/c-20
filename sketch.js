var wall, car1, car2,car3, car4;
var speed,weight;
var touched1, touched2, touched3, touched4;
var score1, score2, score3, score4;

function setup() {
  createCanvas(1600,800);
  wall=createSprite(1300,200,20,700);
  touched1 = false;
  touched2 = false;
  touched3 = false;
  touched4 = false;
  score1=0;
  score2=0;
  score3=0;
  score4=0;
  // car 1 parameters
  car1= createSprite(400, 50,30,30);
  car1.velocityX=random(10,20);
  car1.weight=random(400,1500);
  car1.shapeColor="red";

  // car2 parameters
  car2= createSprite(400, 200,30,30);
  car2.velocityX=random(10,20);
  car2.weight=random(400,1500);
  car2.shapeColor="blue";

  //car 3 parameters
  car3= createSprite(400, 350,30,30);
  car3.velocityX=random(10,20);
  car3.weight=random(400,1500);
  car3.shapeColor="green";

  //car4 parameters
  car4= createSprite(400, 500,30,30);
  car4.velocityX=random(10,20);
  car4.weight=random(400,1500);
  car4.shapeColor="black";
  // car parameters end
  wall.shapeColor="orange";
}

function draw() {
  background(255,255,255);
  textStyle(BOLDITALIC);
  drawSprites();
  if(car1.isTouching(wall) && !(touched1) ){
    score1 = calculateScore(car1);
    console.log('score 1:' + score1);
    car1.velocityX =0;
    touched1 = true;
  }
  text.color=car1.shapeColor;
  text( car1.shapeColor + ' scored:'+score1 + ' '+'in the deformation test',20,600);
  

  if(car2.isTouching(wall) && !(touched2) ){
     score2 = calculateScore(car2);
    console.log('score 2:' + score2);
    car2.velocityX =0;
    touched2= true;
  }
  text.color=car2.shapeColor;
  text( car2.shapeColor + ' scored:'+score2 + ' '+'in the deformation test',20,650);


  if(car3.isTouching(wall) && !touched3){
      score3 = calculateScore(car3);
    console.log('score 3:' + score3);
    car3.velocityX =0;
    touched3 = true;
  }
  text.color=car3.shapeColor;
  text( car3.shapeColor + ' scored:'+score3 + ' '+'in the deformation test',20,700);

  if(car4.isTouching(wall) && !touched4){
     score4 = calculateScore(car4);
    console.log('score 4:' + score4);
    car4.velocityX =0;
    touched4 = true;
  }
  text.color=car4.shapeColor;
  text( car4.shapeColor + ' scored:'+score4 + ' '+'in the deformation test',20,750);

}
function calculateScore(c){

var score=(0.5*c.velocityX*c.weight*c.velocityX)/22500;

return score;

}
