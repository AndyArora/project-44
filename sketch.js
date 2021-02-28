var basket;
var basketimg;
var score
var bballgroup;
var gball;
var gballgroup;
var sball;
var sballgroup;


function preload(){
	basketimg = loadImage("whitehat game net.png") 
	backgroundimg = loadImage("kobewhitehat.jpg")
	ballimg = loadImage("basketballwhiite.png")
	gballimg = loadImage("goldenbball.png")
	sballimg = loadImage("sball.png")
}
function setup(){
createCanvas(750,600)
basket = createSprite(300,510,45,30)
basket.addImage(basketimg)
basket.scale = 0.4
score = 0;
bballgroup = new Group()
gballgroup = new Group()
sballgroup = new Group()
edges = createEdgeSprites();
}

function draw (){
background(backgroundimg)
spawnbballs();
spawngballs();
spawnsballs();
textSize(25)
text("Score :"+ score,50,50)
drawSprites();
basket.x = mouseX;
for(var i = 0; i<bballgroup.length;i++){
	if(bballgroup.get(i).isTouching(basket)){
		bballgroup.get(i).destroy()
		score = score +1
	}
}
for(var i = 0; i<gballgroup.length;i++){
	if(gballgroup.get(i).isTouching(basket)){
		gballgroup.get(i).destroy()
		score = score +3
	}
}
for(var i = 0; i<bballgroup.length;i++){
	if(bballgroup.get(i).isTouching(edges[3])){
		bballgroup.get(i).destroy()
		score = score -3
	}
}
for(var i = 0; i<sballgroup.length;i++){
	if(sballgroup.get(i).isTouching(basket)){
		sballgroup.get(i).destroy()
		score = score -5
	}
}
if(score>50){
	var level2 = createSprite(375,300,100,20)
}

}

function spawnbballs(){
	if(frameCount%20===0){
	var bball = createSprite(random(0,750),0,25,25)
	bball.velocityY = 10
	bballgroup.add(bball)
	bball.addImage(ballimg)
	bball.scale = 0.135
	}
}

function spawngballs(){
	if(frameCount%90===0){
	var gball = createSprite(random(0,750),0,25,25)
	gball.velocityY = 20
	gballgroup.add(gball)
	gball.addImage(gballimg)
	gball.scale = 0.135
	}
}

function spawnsballs(){
	if(frameCount%80===0){
	var sball = createSprite(random(0,750),0,25,25)
	sball.velocityY = 14
	sballgroup.add(sball)
	sball.addImage(sballimg)
	sball.scale = 0.135
	}
}
