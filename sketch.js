var PLAY = 1;
var END = 0;
var gameState = PLAY;
var one,oneImage;
var ground,groundImage;
var green1,greenImg;
var blue,blueImg ;
var np,npImg;
var sand,sImg;
var banana,bImg;
var apple,aImg;
var w,wImg;
var score=0;
var t,tImg;
var r,rImg;
var bg,bgImg;
var plastic,pimg;
var wpaper;
var kWaste;
var beep;
var gjob;
var hand, hImg;
var cImg;
var dryGroup;
var wetGroup;
function preload(){
//groundImage = loadImage("ground2.png");
blueImg = loadImage("dustbin.png")
greenImg = loadImage("dustbingreen.png")
sImg = loadImage("sand.png")
npImg = loadImage("paperc.png") 
pimg = loadImage("drywaste3.png")
  bImg = loadImage("banana.png")
  aImg = loadImage("apple.png")
  //bgImg = loadImage("1.jpg")
  wImg = loadImage("wrong.png")
  tImg = loadImage("tick.png")
  rImg = loadImage("restart.png")
  bgImg = loadImage('bg.png');
  kImg = loadImage("garbagewet2.png")
  beep = loadSound("beep.mp3");
  gjob = loadSound("goodjob.mp3")
  cImg = loadImage("can.png")
  hImg = loadImage("hand.png");
}
function setup(){
  createCanvas(windowWidth,windowHeight);
   w = createSprite(200,200);
   w.addImage("w",wImg)
   w.scale = 0.2
  
   r = createSprite(200,200);
   r.addImage("r",rImg)
   r.scale = 0.2
  
  bg= createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  bg.addImage(bgImg);
  bg.scale = 1.15;
   t = createSprite(200,200);
   t.addImage("t",tImg)
   t.scale = 0.2

   hand =createSprite(500,600);
   hand.addImage(hImg);
   hand.scale=0.25;
   plastic =createSprite(random(200,700),windowHeight-175);
   plastic.addImage(pimg);
  
   kWaste= createSprite(random(200,700), windowHeight-175);
  kWaste.addImage(kImg)
  kWaste.scale = 0.5
   ground = createSprite(200, 790, 400, windowHeight-175);
  
  wetGroup = createGroup();
  dryGroup = createGroup();

   green1 = createSprite(225, windowHeight-75);
   green1.addImage("green1",greenImg)
   green1.scale = 0.4
  
   blue = createSprite(100, windowHeight-75);
   blue.addImage("blue",blueImg)
   blue.scale = 0.4
  
   wpaper = createSprite(random(200,700), windowHeight-175, 1, 1);
   wpaper.addImage("np",npImg)
   wpaper.scale = 0.125
  
   sand = createSprite(random(200,700), windowHeight-175);
   sand.addImage("s",sImg)
   sand.scale = 0.15
  
   banana = createSprite(random(200,700), windowHeight-175);
   banana.addImage("b",bImg)
   banana.scale = 0.15
  
   apple = createSprite(random(200,700), windowHeight-175); 
   apple.addImage("a",aImg) 
   apple.scale = 0.15
   
}
function draw() {
  background(2)
  textSize(25)
  fill("black")
  text("Score: "+ score, 1000,50);
  
  w.visible = false;
  t.visible = false;
  r.visible = false;
  ground.visible = false;
    
  
plastic.setCollider("rectangle", 0, 0,125,125 );
 
spawnDry()
spawnWet()

hand.x= World.mouseX;
hand.y = World.mouseY



  if(score<125 ){
 
    fill(0,128,0);
    text("Please throw wet waste in green dustbin",50,260);
    fill(0,0,255)
    text("Please throw dry waste in blue dustbin",50,290);
  }

  if(score===150){
  
    fill(0,0,255)
    text("#CLEANINDIA",50,260)
    fill(0,128,0);
    
    
    text("#GREENINDIA",50,290)
    
  }

              if (mousePressedOver(banana)) {
                banana.x = World.mouseX;
                banana.y = World.mouseY;
              } else {
                banana.x = banana.x;
                banana.y = banana.y;
              }
              if (mousePressedOver(sand)) {
                sand.x = World.mouseX;
                sand.y = World.mouseY;
              } else {
                sand.x = sand.x;
                sand.y = sand.y;
              }
              if (mousePressedOver(plastic)) {
                plastic.x = World.mouseX;
                plastic.y = World.mouseY;
              } else {
                plastic.x = plastic.x;
                plastic.y = plastic.y;
              }
              if (mousePressedOver(wpaper)) {
                wpaper.x = World.mouseX;
                wpaper.y = World.mouseY;
              } else {
                wpaper.x = wpaper.x;
                wpaper.y = wpaper.y;
              }
              if (mousePressedOver(apple)) {
                apple.x = World.mouseX;
                apple.y = World.mouseY;
              } else {
                apple.x = apple.x;
                apple.y = apple.y;
              }
              if (mousePressedOver( kWaste)) {
                kWaste.x = World.mouseX;
                kWaste.y = World.mouseY;
            } else {
                kWaste.x =  kWaste.x;
                kWaste.y =  kWaste.y;
            }
                      if (wpaper.isTouching(blue)) {
                        wpaper.destroy()
                        score = score+25
                        t.visible = true;
                        gjob.play();
                      }
                      if (wpaper.isTouching(green1)) {
                        wpaper.destroy()
                        wpaper.x= 200;
                        beep.play();
                        w.visible = true;
                      }
                      if (plastic.isTouching(green1)) {
                        plastic.destroy()
                        score = score-25
                        beep.play();
                        w.visible = true;
                      }
                      if (plastic.isTouching(blue)) {
                        plastic.destroy()
                        score = score+25
                        t.visible = true;
                        gjob.play();

                      }
                      
                      if (sand.isTouching(green1)) {
                        sand.destroy()
                      score = score-25
                      w.visible = true;
                      beep.play();
                    
                    }
                    if (sand.isTouching(blue)) {
                      sand.destroy()
                      score = score+25
                      t.visible = true;
                      gjob.play();

                    }
                      if (apple.isTouching(blue)){
                        apple.destroy()
                        score = score-10
                        beep.play();
                        w.visible = true;
                      }
                      if (apple.isTouching(green1)) {
                        apple.destroy()
                        score = score+25
                        t.visible = true;
                        gjob.play();

                      }
                      if (banana.isTouching(green1)) {
                        banana.destroy()
                        score = score+25
                        gjob.play();
                      }
                      if ( kWaste.isTouching(blue)){
                        kWaste.destroy()
                      score = score-10
                      w.visible = true;
                      beep.play();
                    }
                    if ( kWaste.isTouching(green1)) {
                        kWaste.destroy()
                      score = score+25
                      t.visible = true;
                      gjob.play();

                    }
                      if (banana.isTouching(blue)) {
                        banana.destroy()
                        score = score-25
                        w.visible = true;
                        beep.play();
                      }
                        drawSprites();

  }

  function spawnDry(){
    if(frameCount%180==0)
    {
      var dry = createSprite(random(100,140),random(700,740));
      var select = Math.round(random(1,4))
      switch(select){
        case 1 : dry.addImage(pimg);
        dry.scale =0.5;
        break;
        case 2 : dry.addImage(npImg);
        dry.scale =0.07;
        break;
        case 3 : dry.addImage(sImg);
                  dry.scale =0.07;
        break;
        case 4 : dry.addImage(cImg);
        dry.scale =0.57;
        break;
        default:break;
      }
     // dry.velocityY = 2;
      dry.depth = hand.depth;
      hand.depth = hand.depth+1;
      dryGroup.add(dry);
    }
  }


  function spawnWet(){
    if(frameCount%195==0)
    {
      var wet = createSprite(375,-50);
      var select = Math.round(random(1,3))
      switch(select){
        case 1 : wet.addImage(bImg);
        wet.scale =0.15;
        break;
        case 2 : wet.addImage(kImg);
        wet.scale =0.2;
        break;
        case 3 : wet.addImage(aImg);
                  wet.scale =0.17;
        break;
        default:break;
      }
      wet.velocityY = 2;
      wet.depth = hand.depth;
      hand.depth = hand.depth+1;
      wetGroup.add(wet);
    }
  }


