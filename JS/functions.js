function setupLayer(layer){
	layer.angleMode(DEGREES)
	layer.textAlign(CENTER,CENTER)
	layer.rectMode(CENTER)
	layer.colorMode(RGB,255,255,255,1)
	layer.noStroke()
}
function displayMenu(layer){
}
function displayBorder(layer,edge){
	layer.noStroke()
	layer.fill(0)
	layer.rect(edge.x/2,-layer.height,layer.width*3+edge.x,layer.height*2)
	layer.rect(edge.x/2,layer.height+edge.y,layer.width*3+edge.x,layer.height*2)
	layer.rect(-layer.width,edge.y/2,layer.width*2,edge.y+layer.height*2)
	layer.rect(layer.width+edge.x,edge.y/2,layer.width*2,edge.y+layer.height*2)
	for(let a=0;a<5;a++){
		layer.fill(0,0.85-a*0.15)
		layer.rect(2+a*4,edge.y/2,4,edge.y-a*8)
		layer.rect(edge.x-2-a*4,edge.y/2,4,edge.y-a*8)
		layer.rect(edge.x/2,2+a*4,edge.x-8-a*8,4)
		layer.rect(edge.x/2,edge.y-2-a*4,edge.x-8-a*8,4)
	}
}
function displayLocation(layer,position){
	layer.noStroke()
	layer.fill(0)
	layer.textSize(20)
	layer.text('('+position.x+','+position.y+')',layer.width/2,layer.height-20)
}
function displayTransition(layer,transition){
	layer.noStroke()
	layer.fill(0)
	layer.rect(transition.anim*layer.width/4,layer.height/2,transition.anim*layer.width/2,layer.height)
	layer.rect(layer.width-transition.anim*layer.width/4,layer.height/2,transition.anim*layer.width/2,layer.height)
	layer.rect(layer.width/2,transition.anim*layer.height/4,layer.width,transition.anim*layer.height/2)
	layer.rect(layer.width/2,layer.height-transition.anim*layer.height/4,layer.width,transition.anim*layer.height/2)
	if(transition.trigger){
		transition.anim=round(transition.anim*5+1)/5
		if(transition.anim>1.1){
			transition.trigger = false
			stage.scene=transition.scene
			if(stage.scene=='level'){
				for(let a=0,la=levels.length;a<la;a++){
					if(levels[a].position.x==game.position.x&&levels[a].position.y==game.position.y){
						game.zone=a
					}
				}
				resetWorld()
				generateWorld(graphics.main,levels[game.zone])
				for(let a=0,la=entities.players.length;a<la;a++){
					switch(transition.direction){
						case 0:
							entities.players[0].position.x=0
						break
						case 1:
							entities.players[0].position.x=game.edge.x
						break
						case 2:
							entities.players[0].position.y=0
						break
						case 3:
							entities.players[0].position.y=game.edge.y
						break
					}
				}
			}
		}
	}
	else if(transition.anim>0){
		transition.anim=round(transition.anim*5-1)/5
	}
}
function toggle(base){
	if(base){
		return false
	}else{
		return true
	}
}
function upColor(color,value,key){
	return [color[0]+value*key[0],color[1]+value*key[1],color[2]+value*key[2]]
}
function regTriangle(layer,x,y,radius,direction){
	layer.triangle(x+sin(direction)*radius,y+cos(direction)*radius,x+sin(direction+120)*radius,y+cos(direction+120)*radius,x+sin(direction+240)*radius,y+cos(direction+240)*radius);
}
function regPoly(layer,x,y,sides,radius,direction){
	layer.beginShape()
	for(let a=0;a<sides;a++){
		layer.vertex(x+sin(direction+a*360/sides)*radius,y+cos(direction+a*360/sides)*radius)
	}
	layer.endShape(CLOSE)
}
function pointInsideBox(point,box){
	if(point.position.x>box.position.x-box.width/2&&point.position.x<box.position.x+box.width/2&&point.position.y>box.position.y-box.height/2&&point.position.y<box.position.y+box.height/2){
		return true
	}
	else{
		return false
	}
}
function rotatePoint(point,direction,origin){
	return {x:dist(point.x-origin.x,point.y-origin.y,0,0)*sin(atan2(point.x-origin.x,point.y-origin.y)+direction),y:dist(point.x-origin.x,point.y-origin.y,0,0)*cos(atan2(point.x-origin.x,point.y-origin.y)+direction)}
}
function pushPoint(point,origin,size){
	if(dist(point.x,point.y,origin.x,origin.y)>size){
		return {x:point.x,y:point.y}
	}
	else{
		return {x:origin.x+sin(atan2(point.x-origin.x,point.y-origin.y))*size,y:origin.y+cos(atan2(point.x-origin.x,point.y-origin.y))*size}
	}
}
function boxInsideBox(box1,box2){
	if(box1.position.x>box2.position.x-box1.width/2-box2.width/2&&box1.position.x<box2.position.x+box1.width/2+box2.width/2&&box1.position.y>box2.position.y-box1.height/2-box2.height/2&&box1.position.y<box2.position.y+box1.height/2+box2.height/2){
		return true
	}
	else{
		return false
	}
}
function boxCollideBox(static,mobile){
	if(mobile.position.x==mobile.previous.position.x||mobile.position.x<static.position.x&&mobile.position.x<mobile.previous.position.x||mobile.position.x>static.position.x&&mobile.position.x>mobile.previous.position.x||mobile.position.x>static.position.x-static.width/2-mobile.width/2&&mobile.previous.position.x>static.position.x-static.width/2-mobile.width/2&&mobile.position.x<static.position.x+static.width/2+mobile.width/2&&mobile.previous.position.x<static.position.x+static.width/2+mobile.width/2){
		collision.incident.x=1
	}
	else if(mobile.position.x<static.position.x){
		collision.incident.x=(static.position.x-static.width/2-mobile.width/2-mobile.previous.position.x)/(mobile.position.x-mobile.previous.position.x)
	}
	else{
		collision.incident.x=(static.position.x+static.width/2+mobile.width/2-mobile.previous.position.x)/(mobile.position.x-mobile.previous.position.x)
	}
	if(mobile.position.y==mobile.previous.position.y||mobile.position.y<static.position.y&&mobile.position.y<mobile.previous.position.y||mobile.position.y>static.position.y&&mobile.position.y>mobile.previous.position.y||mobile.position.y>static.position.y-static.height/2-mobile.height/2&&mobile.previous.position.y>static.position.y-static.height/2-mobile.height/2&&mobile.position.y<static.position.y+static.height/2+mobile.height/2&&mobile.previous.position.y<static.position.y+static.height/2+mobile.height/2){
		collision.incident.y=1
	}
	else if(mobile.position.y<static.position.y){
		collision.incident.y=(static.position.y-static.height/2-mobile.height/2-mobile.previous.position.y)/(mobile.position.y-mobile.previous.position.y)
	}
	else{
		collision.incident.y=(static.position.y+static.height/2+mobile.height/2-mobile.previous.position.y)/(mobile.position.y-mobile.previous.position.y)
	}
	if(collision.incident.x<collision.incident.y){
		if(mobile.position.x<static.position.x){
			collision.calculate.x=static.position.x-static.width/2-mobile.width/2
		}
		else{
			collision.calculate.x=static.position.x+static.width/2+mobile.width/2
		}
		collision.calculate.y=mobile.previous.position.y*(1-collision.incident.y)+mobile.position.y*collision.incident.y
	}
	else{
		if(mobile.position.y<static.position.y){
			collision.calculate.y=static.position.y-static.height/2-mobile.height/2
		}
		else{
			collision.calculate.y=static.position.y+static.height/2+mobile.height/2
		}
		collision.calculate.x=mobile.previous.position.x*(1-collision.incident.x)+mobile.position.x*collision.incident.x
	}
	if(atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)>atan2(-static.width/2-mobile.width/2,static.height/2+mobile.height/2)&&atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)<atan2(static.width/2+mobile.width/2,static.height/2+mobile.height/2)){
		return 0
	}
	else if(atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)<atan2(-static.width/2-mobile.width/2,-static.height/2-mobile.height/2)||atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)>atan2(static.width/2+mobile.width/2,-static.height/2-mobile.height/2)){
		return 1
	}
	else if(atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)<atan2(static.width/2+mobile.width/2,-static.height/2-mobile.height/2)&&atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)>atan2(static.width/2+mobile.width/2,static.height/2+mobile.height/2)){
		return 2
	}
	else if(atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)<atan2(-static.width/2-mobile.width/2,static.height/2+mobile.height/2)&&atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)>atan2(-static.width/2-mobile.width/2,-static.height/2-mobile.height/2)){
		return 3
	}
	else{
		return -1
	}
}
function outMap(){
	mapCalculate=[]
	for(let a=0;a<game.edgePosition.x;a++){
		mapCalculate.push([])
		for(let b=0;b<game.edgePosition.y;b++){
			mapCalculate[a].push(0)
		}
	}
	for(let a=0,la=levels.length;a<la;a++){
		mapCalculate[levels[a].position.x][levels[a].position.y]=1
	}
	mapDisplay=[]
	for(let a=0;a<game.edgePosition.x;a++){
		mapDisplay.push('')
		for(let b=0;b<game.edgePosition.y;b++){
			if(mapCalculate[a][b]==1){
				mapDisplay[a]+='#'
			}else{
				mapDisplay[a]+='_'
			}
		}
	}
	print(mapDisplay)
}
function updateMouse(layer){
	inputs.mouse.x=mouseX
	inputs.mouse.y=mouseY
	inputs.rel.x=(inputs.mouse.x-width/2)/stage.scale+layer.width/2
	inputs.rel.y=(inputs.mouse.y-height/2)/stage.scale+layer.height/2
}
function resetWorld(){
	entities.clouds=[]
	entities.walls=[[],[]]
	entities.enemies=[]
	entities.particles=[]
}
function generateWorld(layer,level){
	if(level.map.length>0&&level.map[0].length>0){
		game.edge.x=level.map[0].length*game.tileSize
		game.edge.y=level.map.length*game.tileSize
		game.position.x=level.position.x
		game.position.y=level.position.y
		stage.focus.x=game.edge.x/2
		stage.focus.y=game.edge.y/2
		for(let a=0,la=level.map.length;a<la;a++){
			for(let b=0,lb=level.map[a].length;b<lb;b++){
				if(level.map[a][b]>=10){
					entities.walls[types.wall[floor(level.map[a][b]/100)].layer].push(new wall(layer,b*game.tileSize+floor((level.map[a][b]%100)/10)*game.tileSize/2+game.tileSize/2,a*game.tileSize+(level.map[a][b]%10)*game.tileSize/2+game.tileSize/2,floor(level.map[a][b]/100),floor((level.map[a][b]%100)/10)*game.tileSize+game.tileSize,(level.map[a][b]%10)*game.tileSize+game.tileSize))
				}else if(level.map[a][b]<-1){
					entities.enemies.push(new enemy(layer,b*game.tileSize+game.tileSize/2,a*game.tileSize+game.tileSize/2,-level.map[a][b]-1))
				}else if(level.map[a][b]==-1&&game.firstGen==0){
					entities.players.push(new player(layer,b*game.tileSize+game.tileSize/2,a*game.tileSize+game.tileSize/2,0,0))
					game.firstGen=1
					game.check.x=b*game.tileSize+game.tileSize/2
					game.check.y=a*game.tileSize+game.tileSize/2
					game.check.zone=game.zone
				}
			}
		}
		if(transition.mode==1){
			transition.mode=0
			for(let a=0,la=entities.players.length;a<la;a++){
				entities.players[a].dead=false
				entities.players[a].status=0
				entities.players[a].position.x=game.check.x
				entities.players[a].position.y=game.check.y
				entities.players[a].movement.gravity=game.check.gravity
				entities.players[a].goal.movement.gravity=game.check.gravity
			}
		}
	}
	run={back:[],fore:[entities.enemies,entities.players,entities.particles,entities.walls[0],entities.walls[1]],info:[entities.enemies,entities.players]}
}