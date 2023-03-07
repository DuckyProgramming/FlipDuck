class wall extends physical{
	constructor(layer,x,y,type,width,height){
		super(layer,x,y,type,width,height)
		this.collide=[entities.enemies,entities.players]
        switch(this.type){
            case 2:
                this.width-=15
                this.height-=28
                this.position.y+=14
            break
            case 3:
                this.width-=15
                this.height-=28
                this.position.y-=14
            break
            case 4: case 10:
                this.length=this.width
                this.direction=this.height*45/game.tileSize-45
                this.position.x-=this.width/2-game.tileSize/2
                this.position.y-=this.height/2-game.tileSize/2
                this.base.position.x-=this.width/2-game.tileSize/2
                this.base.position.y-=this.height/2-game.tileSize/2
                this.width=10
                this.height=10
            break
            case 5:
                this.width-=10
                this.height-=10
            break
            case 6:
                this.length=this.width
                this.direction=this.height*45/game.tileSize-45
                this.position.x-=this.width/2-game.tileSize/2
                this.position.y-=this.height/2-game.tileSize/2
                this.base.position.x-=this.width/2-game.tileSize/2
                this.base.position.y-=this.height/2-game.tileSize/2
                this.width=20
                this.height=20
            break
            case 7:
                this.length=this.width+game.tileSize*10
                this.direction=this.height*45/game.tileSize-45
                this.position.x-=this.width/2-game.tileSize/2
                this.position.y-=this.height/2-game.tileSize/2
                this.base.position.x-=this.width/2-game.tileSize/2
                this.base.position.y-=this.height/2-game.tileSize/2
                this.width=20
                this.height=20
            break
            case 8: case 17:
                this.length=this.width+game.tileSize*10
                this.direction=this.height*45/game.tileSize-45
                this.position.x-=this.width/2-game.tileSize/2
                this.position.y-=this.height/2-game.tileSize/2
                this.base.position.x-=this.width/2-game.tileSize/2
                this.base.position.y-=this.height/2-game.tileSize/2
                this.width=10
                this.height=10
            break
            case 9:
                this.height-=10
                this.timers=[0]
            break
            case 11:
                this.length=this.width
                this.direction=this.height*45/game.tileSize-45
                this.position.x-=this.width/2-game.tileSize/2
                this.position.y-=this.height/2-game.tileSize/2
                this.base.position.x-=this.width/2-game.tileSize/2
                this.base.position.y-=this.height/2-game.tileSize/2
                this.width=90
                this.height=20
            break
            case 12: case 29:
                this.timers=[0]
                if(this.type==29){
                    this.position.x+=game.tileSize/2
                    this.position.y+=game.tileSize/2
                    this.type=12
                }
            break
            case 13:
                this.height-=12
            break
            case 14:
                this.width=game.edgePosition.x*20
                this.height=game.edgePosition.y*20
                this.mapCalculate=[]
                for(let a=0;a<game.edgePosition.y;a++){
                    this.mapCalculate.push([])
                    for(let b=0;b<game.edgePosition.x;b++){
                        this.mapCalculate[a].push(0)
                    }
                }
                this.mapCrystal=[]
                for(let a=0;a<game.edgePosition.y;a++){
                    this.mapCrystal.push([])
                    for(let b=0;b<game.edgePosition.x;b++){
                        this.mapCrystal[a].push(0)
                    }
                }
                for(let a=0,la=levels.length;a<la;a++){
                    this.mapCalculate[levels[a].position.y][levels[a].position.x]=1
                    if(levels[a].entered){
                        this.mapCalculate[levels[a].position.y][levels[a].position.x]=2
                    }
                    if(levels[a].crystal){
                        this.mapCrystal[levels[a].position.y][levels[a].position.x]=1
                    }else{
                        this.mapCrystal[levels[a].position.y][levels[a].position.x]=0
                    }
                }
            break
            case 15: case 46: case 47:
                this.width-=12
            break
            case 16:
                this.height-=24
            break
            case 18:
                this.width-=28
                this.height-=15
                this.position.x+=14
            break
            case 19:
                this.width-=28
                this.height-=15
                this.position.x-=14
            break
            case 20:
                this.width-=24
            break
            case 22:
                this.width-=24
                this.position.x+=12
            break
            case 23:
                this.length=this.width+game.tileSize*10
                this.direction=this.height*45/game.tileSize-45
                this.position.x-=this.width/2-game.tileSize/2
                this.position.y-=this.height/2-game.tileSize/2
                this.base.position.x-=this.width/2-game.tileSize/2
                this.base.position.y-=this.height/2-game.tileSize/2
                this.width=90
                this.height=20
            break
            case 24: case 25: case 26: case 27:
                this.direction=this.height*45/game.tileSize-45
                this.position.y-=this.height/2-game.tileSize/2
                this.base.position.y-=this.height/2-game.tileSize/2
                this.height=20
                if(this.type==27){
                    this.position.x-=game.tileSize*4
                    this.type=24
                }
            break
            case 28:
                this.width-=24
                this.position.x-=12
            break
            case 36:
                this.width-=10
                this.timers=[0]
            break
            case 37:
                this.width-=15
                this.height-=15
                this.type=1
            break
            case 42: case 43: case 44: case 45:
                this.height-=10
            break
        }
	}
	display(){
        this.layer.translate(this.position.x,this.position.y)
		this.layer.noStroke()
		switch(this.type){
            case 1:
                this.layer.fill(40,90,100,this.fade)
                this.layer.rect(0,0,this.width,this.height)
            break
            case 2:
                this.layer.fill(200)
                for(let a=0,la=this.base.width/10;a<la;a++){
                    this.layer.triangle(-this.base.width/2+this.base.width*a/la,this.height/2,-this.base.width/2+this.base.width*(a+1)/la,this.height/2,-this.base.width/2+this.base.width*(a+0.5)/la,-this.height*11/2)
                }
            break
            case 3:
                this.layer.fill(200)
                for(let a=0,la=this.base.width/10;a<la;a++){
                    this.layer.triangle(-this.base.width/2+this.base.width*a/la,-this.height/2,-this.base.width/2+this.base.width*(a+1)/la,-this.height/2,-this.base.width/2+this.base.width*(a+0.5)/la,this.height*11/2)
                }
            break
            case 4: case 8: case 10: case 17:
                this.layer.fill(200)
                this.layer.ellipse(0,0,this.width,this.height)
                this.layer.push()
                this.layer.rotate(this.time*5)
                for(let a=0,la=9;a<la;a++){
                    this.layer.triangle(-this.width/4,0,this.width/4,0,0,-this.height*2)
                    this.layer.rotate(360/la)
                }
                this.layer.pop()
            break
            case 5:
                if(dist(game.check.x,game.check.y,this.position.x,this.position.y)<game.tileSize&&game.check.zone==game.zone){
                    this.layer.fill(200,255,200,this.fade)
                    this.layer.quad(-this.width/2,0,0,-this.height/2,this.width/2,0,0,this.height/2)
                    this.layer.fill(200,255,200,this.fade*0.2)
                    this.layer.quad(-this.width/2-3,0,0,-this.height/2-3,this.width/2+3,0,0,this.height/2+3)
                    this.layer.quad(-this.width/2-6,0,0,-this.height/2-6,this.width/2+6,0,0,this.height/2+6)
                }else{
                    this.layer.fill(100,200,100,this.fade)
                    this.layer.quad(-this.width/2,0,0,-this.height/2,this.width/2,0,0,this.height/2)
                    this.layer.fill(100,200,100,this.fade*0.2)
                    this.layer.quad(-this.width/2-3,0,0,-this.height/2-3,this.width/2+3,0,0,this.height/2+3)
                    this.layer.quad(-this.width/2-6,0,0,-this.height/2-6,this.width/2+6,0,0,this.height/2+6)
                }
            break
            case 6: case 7:
                this.layer.fill(200)
                this.layer.ellipse(0,0,this.width,this.height)
                this.layer.push()
                this.layer.rotate(this.time*5)
                for(let a=0,la=9;a<la;a++){
                    this.layer.triangle(-this.width/4,0,this.width/4,0,0,-this.height*3/2)
                    this.layer.rotate(360/la)
                }
                this.layer.pop()
            break
            case 9: case 36:
                this.layer.noFill()
                this.layer.stroke(0,100,150,this.fade*min(1,max(2-this.timers[0]/15,-15+this.timers[0]/15)))
                this.layer.strokeWeight(4)
                this.layer.rect(0,0,this.width-4,this.height-4)
            break
            case 11: case 23: case 24: case 25: case 26:
                this.layer.fill(0,100,150,this.fade)
                this.layer.rect(0,0,this.width,this.height)
            break
            case 12:
                this.layer.fill(255,this.fade*min(1,max(1-this.timers[0]/15,-15+this.timers[0]/15)))
                this.layer.quad(-this.width/2,0,0,-this.height/2,this.width/2,0,0,this.height/2)
                this.layer.fill(200,255,255,this.fade*min(1,max(1-this.timers[0]/15,-15+this.timers[0]/15)))
                this.layer.quad(-this.width/3,0,0,-this.height/3,this.width/3,0,0,this.height/3)
            break
            case 13:
                this.layer.fill(25,this.fade)
                this.layer.triangle(-this.width/2,-this.height/2,-this.width/2,0,-this.width/2+9,-this.height/2)
                this.layer.quad(this.width/2-9,this.height/2,this.width/2,0,this.width/2,-this.height/2,this.width/2-18,this.height/2)
                for(let g=0,lg=this.width/18-1;g<lg;g++){
                    this.layer.quad(-this.width/2+18+g*18,-this.height/2,-this.width/2+27+g*18,-this.height/2,-this.width/2+9+g*18,this.height/2,-this.width/2+g*18,this.height/2)
                }
                this.layer.fill(225,225,0,this.fade)
                this.layer.triangle(this.width/2,this.height/2,this.width/2,0,this.width/2-9,this.height/2)
                this.layer.quad(-this.width/2+9,-this.height/2,-this.width/2,0,-this.width/2,this.height/2,-this.width/2+18,-this.height/2)
                for(let g=0,lg=this.width/18-1;g<lg;g++){
                    this.layer.quad(-this.width/2+27+g*18,-this.height/2,-this.width/2+36+g*18,-this.height/2,-this.width/2+18+g*18,this.height/2,-this.width/2+9+g*18,this.height/2)
                }
            break
            case 14:
                this.layer.fill(150,this.fade)
                this.layer.rect(0,0,this.width+12,this.height+12)
                this.layer.fill(200,this.fade)
                this.layer.rect(0,0,this.width+4,this.height+4)
                for(let g=0,lg=this.mapCalculate.length;g<lg;g++){
                    for(let h=0,lh=this.mapCalculate[g].length;h<lh;h++){
                        switch(this.mapCalculate[g][h]){
                            case 0:
                                this.layer.fill(0,this.fade)
                            break
                            case 1:
                                this.layer.fill(255,this.fade)
                            break
                            case 2:
                                this.layer.fill(0,255,0,this.fade)
                            break
                        }
                        this.layer.rect(-this.width/2+10+h*20,-this.height/2+10+g*20,16,16)
                        if(this.mapCrystal[g][h]==1){
                            this.layer.fill(0,200,255,this.fade)
                            this.layer.quad(-this.width/2+4+h*20,-this.height/2+10+g*20,-this.width/2+10+h*20,-this.height/2+4+g*20,-this.width/2+16+h*20,-this.height/2+10+g*20,-this.width/2+10+h*20,-this.height/2+16+g*20)
                        }
                        if(g==game.position.y&&h==game.position.x){
                            this.layer.fill(255,50,50,this.fade)
                            this.layer.ellipse(-this.width/2+10+h*20,-this.height/2+10+g*20,10,10)
                        }
                    }
                }
            break
            case 15:
                this.layer.fill(25,this.fade)
                this.layer.triangle(-this.width/2,-this.height/2,-this.width/2,-this.height/2+9,0,-this.height/2)
                this.layer.quad(this.width/2,this.height/2-9,this.width/2,this.height/2-18,-this.width/2,this.height/2,0,this.height/2)
                for(let g=0,lg=this.height/18-1;g<lg;g++){
                    this.layer.quad(-this.width/2,-this.height/2+18+g*18,-this.width/2,-this.height/2+27+g*18,this.width/2,-this.height/2+9+g*18,this.width/2,-this.height/2+g*18)
                }
                this.layer.fill(225,225,0,this.fade)
                this.layer.triangle(this.width/2,this.height/2,this.width/2,this.height/2-9,0,this.height/2)
                this.layer.quad(-this.width/2,-this.height/2+9,-this.width/2,-this.height/2+18,this.width/2,-this.height/2,0,-this.height/2)
                for(let g=0,lg=this.height/18-1;g<lg;g++){
                    this.layer.quad(-this.width/2,-this.height/2+27+g*18,-this.width/2,-this.height/2+36+g*18,this.width/2,-this.height/2+18+g*18,this.width/2,-this.height/2+9+g*18)
                }
            break
            case 16:
                this.layer.fill(200,255,255,this.fade)
                this.layer.rect(0,-this.height/3,this.width,this.height/3)
                this.layer.rect(0,this.height/3,this.width,this.height/3)
            break
            case 18:
                this.layer.fill(200)
                for(let a=0,la=this.base.height/10;a<la;a++){
                    this.layer.triangle(this.width/2,-this.base.height/2+this.base.height*a/la,this.width/2,-this.base.height/2+this.base.height*(a+1)/la,-this.width*11/2,-this.base.height/2+this.base.height*(a+0.5)/la)
                }
            break
            case 19:
                this.layer.fill(200)
                for(let a=0,la=this.base.height/10;a<la;a++){
                    this.layer.triangle(-this.width/2,-this.base.height/2+this.base.height*a/la,-this.width/2,-this.base.height/2+this.base.height*(a+1)/la,this.width*11/2,-this.base.height/2+this.base.height*(a+0.5)/la)
                }
            break
            case 20:
                this.layer.fill(200,255,255,this.fade)
                this.layer.rect(-this.width/3,0,this.width/3,this.height)
                this.layer.rect(this.width/3,0,this.width/3,this.height)
            break
            case 21:
                this.layer.fill(160,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(150,this.fade)
                this.layer.rect(0,0,this.width*0.9,this.height*0.9)
                this.layer.fill(levels[game.zone].active*510,this.fade)
                this.layer.quad(-this.width*0.4,0,0,-this.height*0.4,this.width*0.4,0,0,this.height*0.4)
                this.layer.fill(levels[game.zone].active*510-310,levels[game.zone].active*510-255,levels[game.zone].active*510-255,this.fade)
                this.layer.quad(-this.width*0.3,0,0,-this.height*0.3,this.width*0.3,0,0,this.height*0.3)
            break
            case 22: case 28:
                this.layer.fill(255,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(255,this.fade/10)
                for(let g=0;g<10;g++){
                    this.layer.rect(0,0,this.width+g*4,this.height+g*4)
                }
            break
            case 30: case 31:
                this.layer.fill(0,80,80,this.fade)
                this.layer.rect(0,0,this.width,this.height-2)
                this.layer.stroke(0,40,40,this.fade)
                this.layer.strokeWeight(2)
                this.layer.line(-this.width/2+1,-this.height/2+1,this.width/2-1,-this.height/2+1)
                this.layer.line(-this.width/2+1,this.height/2-1,this.width/2-1,this.height/2-1)
                for(let a=0,la=this.width/30;a<la;a++){
                    if(this.type==30){
                        this.layer.line(-this.width/2+a*30+(this.time*3)%30+1,-this.height/2+1,-this.width/2+a*30+(this.time*3)%30+1,this.height/2-1)
                    }else {
                        this.layer.line(-this.width/2+a*30+30-(this.time*3)%30-1,-this.height/2+1,-this.width/2+a*30+30-(this.time*3)%30-1,this.height/2-1)
                    }
                }
            break
            case 32:
                this.layer.fill(150,255,200,this.fade)
                this.layer.stroke(100,255,150,this.fade)
                this.layer.strokeWeight(4)
                this.layer.ellipse(0,0,this.width,this.height)
            break
            case 33:
                this.layer.fill(200,255,225,this.fade)
                this.layer.stroke(150,255,200,this.fade)
                this.layer.strokeWeight(4)
                this.layer.ellipse(0,0,this.width,this.height)
            break
            case 34:
                this.layer.fill(200,255,255,this.fade)
                this.layer.rect(0,0,this.width/3,this.height/3)
                this.layer.triangle(-this.width/3,-this.height/6,this.width/3,-this.height/6,0,-this.height*7/12)
                this.layer.triangle(-this.width/3,this.height/6,this.width/3,this.height/6,0,this.height*7/12)
            break
            case 35:
                this.layer.fill(200,255,255,this.fade)
                this.layer.rect(0,0,this.width/3,this.height/3)
                this.layer.triangle(-this.width/6,-this.height/3,-this.width/6,this.height/3,-this.width*7/12,0)
                this.layer.triangle(this.width/6,-this.height/3,this.width/6,this.height/3,this.width*7/12,0)
            break
            case 38:
                this.layer.fill(200,255,255,this.fade)
                this.layer.triangle(-this.width*3/8,-this.height/2,-this.width*3/8,this.height/2,this.width*5/8,0)
            break
            case 39:
                this.layer.fill(200,255,255,this.fade)
                this.layer.triangle(this.width*3/8,-this.height/2,this.width*3/8,this.height/2,-this.width*5/8,0)
            break
            case 40:
                this.layer.fill(200,255,255,this.fade)
                this.layer.triangle(-this.width/2,-this.height*3/8,this.width/2,-this.height*3/8,0,this.height*5/8)
            break
            case 41:
                this.layer.fill(200,255,255,this.fade)
                this.layer.triangle(-this.width/2,this.height*3/8,this.width/2,this.height*3/8,0,-this.height*5/8)
            break
            case 42:
                this.layer.fill(0,100,150,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(200,255,255,this.fade)
                this.layer.triangle(5,-7,5,7,-7,0)
            break
            case 43:
                this.layer.fill(0,100,150,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(200,255,255,this.fade)
                this.layer.triangle(-5,-7,-5,7,7,0)
            break
            case 44:
                this.layer.fill(0,100,150,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(200,255,255,this.fade)
                this.layer.triangle(-7,5,7,5,0,-7)
            break
            case 45:
                this.layer.fill(0,100,150,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(200,255,255,this.fade)
                this.layer.triangle(-7,-5,7,-5,0,7)
            break
            case 46: case 47:
                this.layer.fill(150,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(200,255,255,this.fade)
                this.layer.quad(-this.width*0.3,0,0,-this.width*0.3,this.width*0.3,0,0,this.width*0.3)
                this.layer.quad(-this.width*0.3,-this.width*0.8,0,-this.width*1.1,this.width*0.3,-this.width*0.8,0,-this.width*0.5)
                this.layer.quad(-this.width*0.3,this.width*0.8,0,this.width*1.1,this.width*0.3,this.width*0.8,0,this.width*0.5)
            break
		}
		this.layer.translate(-this.position.x,-this.position.y)
        //super.display()
	}
	update(){
        switch(this.type){
            case 4: case 8:
                if(this.time%(this.length/4)<this.length/8){
                    this.position.x+=sin(this.direction)*8
                    this.position.y+=cos(this.direction)*8
                }else{
                    this.position.x+=sin(this.direction)*-8
                    this.position.y+=cos(this.direction)*-8
                }
                if(this.time%(this.length/4)==0){
                    this.position.x=this.base.position.x
                    this.position.y=this.base.position.y
                }
            break
            case 6: case 7: case 10: case 11: case 17: case 23:
                if(this.time%(this.length/2)<this.length/4){
                    this.position.x+=sin(this.direction)*4
                    this.position.y+=cos(this.direction)*4
                }else{
                    this.position.x+=sin(this.direction)*-4
                    this.position.y+=cos(this.direction)*-4
                }
                if(this.time%(this.length/2)==0){
                    this.position.x=this.base.position.x
                    this.position.y=this.base.position.y
                }
            break
            case 9: case 12: case 36:
                if(this.timers[0]>0&&!(this.type==12&&this.timers[0]>180)){
                    this.timers[0]++
                    if(this.timers[0]>=240){
                        this.timers[0]=0
                    }
                }
            break
            case 21:
                if(levels[game.zone].active<1){
                    levels[game.zone].active=round(levels[game.zone].active*300+1)/300
                }
            break
            case 24:
                this.velocity.x=sin(this.direction)*4
                this.velocity.y=cos(this.direction)*4
                if(this.position.x>game.edge.x+150){
                    this.position.x-=game.edge.x+300
                }
                if(this.position.x<-150){
                    this.position.x+=game.edge.x+300
                }
                if(this.position.y>game.edge.y+60){
                    this.position.y-=game.edge.y+120
                }
                if(this.position.y<-60){
                    this.position.y+=game.edge.y+120
                }
            break
            case 25:
                this.velocity.x=sin(this.direction)*8
                this.velocity.y=cos(this.direction)*8
                if(this.position.x>game.edge.x+150){
                    this.position.x-=game.edge.x+300
                }
                if(this.position.x<-150){
                    this.position.x+=game.edge.x+300
                }
                if(this.position.y>game.edge.y+60){
                    this.position.y-=game.edge.y+120
                }
                if(this.position.y<-60){
                    this.position.y+=game.edge.y+120
                }
            break
            case 26:
                this.velocity.x=sin(this.direction)*16
                this.velocity.y=cos(this.direction)*16
                if(this.position.x>game.edge.x+150){
                    this.position.x-=game.edge.x+300
                }
                if(this.position.x<-150){
                    this.position.x+=game.edge.x+300
                }
                if(this.position.y>game.edge.y+60){
                    this.position.y-=game.edge.y+120
                }
                if(this.position.y<-60){
                    this.position.y+=game.edge.y+120
                }
            break
            case 42: case 43:
                this.velocity.x*=1-physics.resistance
            break
            case 44: case 45:
                this.velocity.y*=1-physics.resistance
            break
            case 46: case 47:
                this.temp=false
                for(let a=0,la=levels.length;a<la;a++){
                    if(levels[a].crystal&&!levels[a].entered){
                        this.temp=true
                    }
                }
                if(!this.temp&&this.type==46){
                    this.position.y--
                }
                if(!this.temp&&this.type==47){
                    this.position.y++
                }
            break
        }
		for(let a=0,la=this.collide.length;a<la;a++){
            for(let b=0,lb=this.collide[a].length;b<lb;b++){
                if(this.type==32){
                    if(circleInsideBox(this.collide[a][b],{position:this.position,size:this.width/2})){
                        this.collide[a][b].velocity.x=(this.collide[a][b].position.x-this.position.x)/dist(this.position.x,this.position.y,this.collide[a][b].position.x,this.collide[a][b].position.y)*20
                        this.collide[a][b].velocity.y=(this.collide[a][b].position.y-this.position.y)/dist(this.position.x,this.position.y,this.collide[a][b].position.x,this.collide[a][b].position.y)*20
                        this.collide[a][b].timers[0]=10
                        this.collide[a][b].timers[1]=15
                    }
                }else if(this.type==33){
                    if(circleInsideBox(this.collide[a][b],{position:this.position,size:this.width/2})){
                        this.collide[a][b].velocity.x=(this.collide[a][b].position.x-this.position.x)/dist(this.position.x,this.position.y,this.collide[a][b].position.x,this.collide[a][b].position.y)*30
                        this.collide[a][b].velocity.y=(this.collide[a][b].position.y-this.position.y)/dist(this.position.x,this.position.y,this.collide[a][b].position.x,this.collide[a][b].position.y)*30
                        this.collide[a][b].timers[0]=10
                        this.collide[a][b].timers[1]=15
                    }
                }else if(boxInsideBox(this,this.collide[a][b])&&!this.collide[a][b].dead
                &&!((this.type==12)&&this.timers[0]>0)&&!((this.type==9||this.type==36)&&this.timers[0]>30)){
                    switch(this.type){
                        case 2: case 3: case 4: case 6: case 7: case 8: case 10: case 17: case 18: case 19:
                            this.collide[a][b].dead=true
                        break
                        case 9: case 36:
                            if(this.timers[0]==0){
                                this.timers[0]++
                            }
                        break
                        case 22: case 28:
                            transition.trigger=true
                            transition.direction=4
                            game.position.x=0
                            game.position.y=8
                        break
                        case 26:
                            if(this.collide[a][b].position.x+this.collide[a][b].width/4<this.position.x-this.width/2&&this.velocity.x<-2||this.collide[a][b].position.x-this.collide[a][b].width/4>this.position.x+this.width/2&&this.velocity.x>2){
                                this.collide[a][b].dead=true
                            }
                        break
                        case 42:
                            this.velocity.x=-25
                        break
                        case 43:
                            this.velocity.x=25
                        break
                        case 44:
                            this.velocity.y=-15
                        break
                        case 45:
                            this.velocity.y=15
                        break
                    }
                    if(!this.collide[a][b].dead){
                        if(this.type==5){
                            game.check.x=this.position.x
                            game.check.y=this.position.y
                            game.check.zone=game.zone
                            game.check.width=this.collide[a][b].width
                            game.check.height=this.collide[a][b].height
                            game.check.gravity=this.collide[a][b].goal.movement.gravity
                            game.check.spin=this.collide[a][b].goal.movement.spin
                        }else if(this.type==12){
                            this.collide[a][b].jumps++
                            this.timers[0]++
                        }else if(this.type==20){
                            if(this.collide[a][b].previous.position.x>this.position.x&&this.collide[a][b].position.x<=this.position.x||this.collide[a][b].previous.position.x<this.position.x&&this.collide[a][b].position.x>=this.position.x){
                                this.collide[a][b].goal.movement.gravity*=-1
                            }
                        }else if(this.type==34){
                            this.collide[a][b].goal.movement.spin=0
                        }else if(this.type==35){
                            this.collide[a][b].goal.movement.spin=90
                        }else if(this.type==38){
                            this.collide[a][b].velocity.x=40
                            this.collide[a][b].velocity.y=0
                        }else if(this.type==39){
                            this.collide[a][b].velocity.x=-40
                            this.collide[a][b].velocity.y=0
                        }else if(this.type==40){
                            this.collide[a][b].velocity.x=0
                            this.collide[a][b].velocity.y=40
                        }else if(this.type==41){
                            this.collide[a][b].velocity.x=0
                            this.collide[a][b].velocity.y=-40
                        }else{
                            this.collide[a][b].squish[boxCollideBox(this,this.collide[a][b])]=true
                            if(boxCollideBox(this,this.collide[a][b])==0&&(this.collide[a][b].velocity.y<0)){
                                this.collide[a][b].position.y=this.position.y+this.height/2+this.collide[a][b].height/2
                                this.collide[a][b].velocity.y=0
                                if(this.type==30){
                                    this.collide[a][b].position.x+=3
                                    this.collide[a][b].tempVelocity.x+=3
                                }else if(this.type==31){
                                    this.collide[a][b].position.x-=3
                                    this.collide[a][b].tempVelocity.x-=3
                                }
                                if(this.type==16){
                                    this.collide[a][b].goal.movement.gravity=1
                                }else if(this.collide[a][b].movement.gravity<0&&this.collide[a][b].movement.spin<45){
                                    this.collide[a][b].timers[0]=5
                                }
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==1&&(this.collide[a][b].velocity.y>0)){
                                this.collide[a][b].position.y=this.position.y-this.height/2-this.collide[a][b].height/2
                                this.collide[a][b].velocity.y=0
                                this.collide[a][b].velocity.x*=(1-physics.friction)
                                if(this.type==30){
                                    this.collide[a][b].position.x+=3
                                    this.collide[a][b].tempVelocity.x+=3
                                }else if(this.type==31){
                                    this.collide[a][b].position.x-=3
                                    this.collide[a][b].tempVelocity.x-=3
                                }
                                if(this.type==16){
                                    this.collide[a][b].goal.movement.gravity=-1
                                }else if(this.collide[a][b].movement.gravity>0&&this.collide[a][b].movement.spin<45){
                                    this.collide[a][b].timers[0]=5
                                }
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==2&&(this.collide[a][b].velocity.x<0)){
                                this.collide[a][b].position.x=this.position.x+this.width/2+this.collide[a][b].width/2
                                this.collide[a][b].velocity.x=0
                                this.collide[a][b].velocity.y*=(1-physics.friction)
                                if(this.collide[a][b].movement.gravity<0&&this.collide[a][b].movement.spin>45){
                                    this.collide[a][b].timers[0]=5
                                }
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==3&&(this.collide[a][b].velocity.x>0)){
                                this.collide[a][b].position.x=this.position.x-this.width/2-this.collide[a][b].width/2
                                this.collide[a][b].velocity.x=0
                                this.collide[a][b].velocity.y*=(1-physics.friction)
                                if(this.collide[a][b].movement.gravity>0&&this.collide[a][b].movement.spin>45){
                                    this.collide[a][b].timers[0]=5
                                }
                            }
                        }
                    }
                }
            }
        }
        super.update()
	}
}