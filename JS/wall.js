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
            case 4:
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
            case 8:
                this.length=this.width+game.tileSize*10
                this.direction=this.height*45/game.tileSize-45
                this.position.x-=this.width/2-game.tileSize/2
                this.position.y-=this.height/2-game.tileSize/2
                this.base.position.x-=this.width/2-game.tileSize/2
                this.base.position.y-=this.height/2-game.tileSize/2
                this.width=10
                this.height=10
            break
            case 5:
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
            case 4: case 8:
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
                if(game.check.x==this.position.x&&game.check.y==this.position.y&&game.check.zone==game.zone){
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
            case 6: case 7:
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
        }
		for(let a=0,la=this.collide.length;a<la;a++){
            for(let b=0,lb=this.collide[a].length;b<lb;b++){
                if(boxInsideBox(this,this.collide[a][b])&&!this.collide[a][b].dead){
                    switch(this.type){
                        case 2: case 3: case 4: case 6: case 7: case 8:
                            this.collide[a][b].dead=true
                        break
                    }
                    if(!this.collide[a][b].dead){
                        if(this.type==5){
                            game.check.x=this.position.x
                            game.check.y=this.position.y
                            game.check.zone=game.zone
                            game.check.gravity=this.collide[a][b].goal.movement.gravity
                        }else{
                            this.collide[a][b].squish[boxCollideBox(this,this.collide[a][b])]=true
                            if(boxCollideBox(this,this.collide[a][b])==0&&this.collide[a][b].velocity.y<0){
                                this.collide[a][b].position.y=this.position.y+this.height/2+this.collide[a][b].height/2
                                this.collide[a][b].velocity.y=0
                                if(this.collide[a][b].movement.gravity<0){
                                    this.collide[a][b].timers[0]=5
                                }
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==1&&this.collide[a][b].velocity.y>0){
                                this.collide[a][b].position.y=this.position.y-this.height/2-this.collide[a][b].height/2
                                this.collide[a][b].velocity.y=0
                                this.collide[a][b].velocity.x*=(1-physics.friction)
                                if(this.collide[a][b].movement.gravity>0){
                                    this.collide[a][b].timers[0]=5
                                }
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==2&&this.collide[a][b].velocity.x<0){
                                this.collide[a][b].position.x=this.position.x+this.width/2+this.collide[a][b].width/2
                                this.collide[a][b].velocity.x=0
                                this.collide[a][b].velocity.y*=(1-physics.friction)
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==3&&this.collide[a][b].velocity.x>0){
                                this.collide[a][b].position.x=this.position.x-this.width/2-this.collide[a][b].width/2
                                this.collide[a][b].velocity.x=0
                                this.collide[a][b].velocity.y*=(1-physics.friction)
                            }
                        }
                    }
                }
            }
        }
        super.update()
	}
}