class wall extends physical{
	constructor(layer,x,y,type,width,height){
		super(layer,x,y,type,width,height)
        this.base={width:this.width,height:this.height}
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
		}
		this.layer.translate(-this.position.x,-this.position.y)
        //super.display()
	}
	update(){
        switch(this.type){
        }
		for(let a=0,la=this.collide.length;a<la;a++){
            for(let b=0,lb=this.collide[a].length;b<lb;b++){
                if(boxInsideBox(this,this.collide[a][b])&&!this.collide[a][b].dead){
                    switch(this.type){
                        case 2: case 3:
                            this.collide[a][b].dead=true
                        break
                    }
                    if(!this.collide[a][b].dead){
                        if(false){
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