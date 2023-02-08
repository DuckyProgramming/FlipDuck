class player extends partisan{
    constructor(layer,x,y,type,direction){
        super(layer,x,y,type,24,72,100)
        this.offset.position.y=39
        this.offset.life.y=-48
        this.trigger.animate=true
        switch(this.type){
            case 0:
                this.anim={direction:direction,eye:[0,0],legs:[{top:24,length:{top:10}},{top:24,length:{top:10}}],arms:[{top:54,length:{top:10}},{top:54,length:{top:10}}]}
                this.fades={eye:[1,1],beak:{main:1,mouth:1,nostril:1},skin:{legs:1,arms:1,body:1,head:1}}
                this.spin={legs:[{top:-90},{top:90}],arms:[{top:-90},{top:90}],eye:[-18,18]}
                this.color={eye:{back:[0,0,0]},beak:{main:[255,140,25],mouth:[0,0,0],nostril:[0,0,0]},skin:{head:[255,235,25],body:[255,225,15],legs:[255,210,0],arms:[255,215,5]}}
                this.parts={eyeLevel:-39,beakLevel:-32,legs:[{top:{x:3,y:-15},middle:{x:0,y:0}},{top:{x:3,y:-15},middle:{x:0,y:0}}],arms:[{top:{x:3.5,y:-25},middle:{x:0,y:0}},{top:{x:3.5,y:-25},middle:{x:0,y:0}}]}
                this.graphics={legs:[{top:{x:0,y:0},middle:{x:0,y:0}},{top:{x:0,y:0},middle:{x:0,y:0}}],arms:[{top:{x:0,y:0},middle:{x:0,y:0}},{top:{x:0,y:0},middle:{x:0,y:0}}]}
                this.trigger.display={eye:[true,true],beak:{main:true,mouth:true,nostril:true},skin:{legs:true,arms:true,body:true,head:true},}
                this.calc={int:[0,0,0,0]}
                this.animSet={active:false,loop:0,flip:0}
                this.goal.anim={direction:this.anim.direction}
            break

        }
        this.size=1.5
    }
    calculateParts(){
        switch(this.type){
            case 0:
                for(let g=0;g<2;g++){
                    this.parts.legs[g].middle.x=this.parts.legs[g].top.x+sin(this.anim.legs[g].top)*this.anim.legs[g].length.top
                    this.parts.legs[g].middle.y=this.parts.legs[g].top.y+cos(this.anim.legs[g].top)*this.anim.legs[g].length.top

                    this.graphics.legs[g].top.x=this.parts.legs[g].top.x*sin(this.spin.legs[g].top+this.anim.direction),
                    this.graphics.legs[g].top.y=this.parts.legs[g].top.y
                    this.graphics.legs[g].middle.x=this.parts.legs[g].middle.x*sin(this.spin.legs[g].top+this.anim.direction),
                    this.graphics.legs[g].middle.y=this.parts.legs[g].middle.y

                    this.parts.arms[g].middle.x=this.parts.arms[g].top.x+sin(this.anim.arms[g].top)*this.anim.arms[g].length.top
                    this.parts.arms[g].middle.y=this.parts.arms[g].top.y+cos(this.anim.arms[g].top)*this.anim.arms[g].length.top

                    this.graphics.arms[g].top.x=this.parts.arms[g].top.x*sin(this.spin.arms[g].top+this.anim.direction),
                    this.graphics.arms[g].top.y=this.parts.arms[g].top.y
                    this.graphics.arms[g].middle.x=this.parts.arms[g].middle.x*sin(this.spin.arms[g].top+this.anim.direction),
                    this.graphics.arms[g].middle.y=this.parts.arms[g].middle.y
                }
            break
            
        }
    }
    display(){
        this.calculateParts()
        //super.display()
        this.layer.translate(this.position.x+this.offset.position.x,this.position.y+this.offset.position.y*this.movement.gravity)
        if(this.fade>0&&this.size>0&&this.movement.gravity!=0){
            this.layer.scale(this.size,this.size*this.movement.gravity)
            switch(this.type){
                case 0:
                    for(let g=0;g<2;g++){
                        if(this.trigger.display.skin.arms&&cos(this.anim.direction+this.spin.arms[g].top)<=0){
                            this.layer.fill(upColor(this.color.skin.arms,cos(this.spin.arms[g].top+this.anim.direction)*20,[1,1,1])[0],upColor(this.color.skin.arms,cos(this.spin.arms[g].top+this.anim.direction)*20,[1,1,1])[1],upColor(this.color.skin.arms,cos(this.spin.arms[g].top+this.anim.direction)*20,[1,1,1])[2],this.fade*this.fades.skin.arms)
                            this.layer.noStroke()
                            this.layer.ellipse(this.graphics.arms[g].middle.x,this.graphics.arms[g].middle.y,12,12)
                        }
                    }
                    for(let g=0;g<2;g++){
                        if(this.trigger.display.skin.legs&&cos(this.anim.direction+this.spin.legs[g].top)<=0){
                            this.layer.fill(upColor(this.color.skin.legs,cos(this.spin.legs[g].top+this.anim.direction)*20,[1,1,1])[0],upColor(this.color.skin.legs,cos(this.spin.legs[g].top+this.anim.direction)*20,[1,1,1])[1],upColor(this.color.skin.legs,cos(this.spin.legs[g].top+this.anim.direction)*20,[1,1,1])[2],this.fade*this.fades.skin.legs)
                            this.layer.noStroke()
                            this.layer.ellipse(this.graphics.legs[g].middle.x,this.graphics.legs[g].middle.y,12,12)
                        }
                    }
                    if(this.trigger.display.skin.body){
                        this.layer.fill(this.color.skin.body[0],this.color.skin.body[1],this.color.skin.body[2],this.fade*this.fades.skin.body)
                        this.layer.noStroke()
                        this.layer.ellipse(0,-19,14,24)
                    }
                    for(let g=0;g<2;g++){
                        if(this.trigger.display.skin.legs&&cos(this.anim.direction+this.spin.legs[g].top)>0){
                            this.layer.fill(upColor(this.color.skin.legs,cos(this.spin.legs[g].top+this.anim.direction)*20,[1,1,1])[0],upColor(this.color.skin.legs,cos(this.spin.legs[g].top+this.anim.direction)*20,[1,1,1])[1],upColor(this.color.skin.legs,cos(this.spin.legs[g].top+this.anim.direction)*20,[1,1,1])[2],this.fade*this.fades.skin.legs)
                            this.layer.noStroke()
                            this.layer.ellipse(this.graphics.legs[g].middle.x,this.graphics.legs[g].middle.y,12,12)
                        }
                    }
                    if(this.trigger.display.skin.head){
                        this.layer.fill(this.color.skin.head[0],this.color.skin.head[1],this.color.skin.head[2],this.fade*this.fades.skin.head)
                        this.layer.noStroke()
                        this.layer.ellipse(0,-37,24,24)
                    }
                    for(let g=0;g<2;g++){
                        if(this.trigger.display.skin.arms&&cos(this.anim.direction+this.spin.arms[g].top)>0){
                            this.layer.fill(upColor(this.color.skin.arms,cos(this.spin.arms[g].top+this.anim.direction)*20,[1,1,1])[0],upColor(this.color.skin.arms,cos(this.spin.arms[g].top+this.anim.direction)*20,[1,1,1])[1],upColor(this.color.skin.arms,cos(this.spin.arms[g].top+this.anim.direction)*20,[1,1,1])[2],this.fade*this.fades.skin.arms)
                            this.layer.noStroke()
                            this.layer.ellipse(this.graphics.arms[g].middle.x,this.graphics.arms[g].middle.y,12,12)
                        }
                        if(this.trigger.display.eye[g]){
                            this.layer.stroke(this.color.eye.back[0],this.color.eye.back[1],this.color.eye.back[2],this.fade*this.fades.eye[g])
                            this.layer.strokeWeight((2.5-this.anim.eye[g]*1.5)*constrain(cos(this.spin.eye[g]+this.anim.direction)*5,0,1))
                            this.layer.line(sin(this.spin.eye[g]+this.anim.direction)*12-(g*2-1)*cos(this.spin.eye[g]+this.anim.direction)*this.anim.eye[g]*2,this.parts.eyeLevel,sin(this.spin.eye[g]+this.anim.direction)*12+(g*2-1)*cos(this.spin.eye[g]+this.anim.direction)*this.anim.eye[g]*2,this.parts.eyeLevel-this.anim.eye[g]*2)
                            this.layer.line(sin(this.spin.eye[g]+this.anim.direction)*12-(g*2-1)*cos(this.spin.eye[g]+this.anim.direction)*this.anim.eye[g]*2,this.parts.eyeLevel,sin(this.spin.eye[g]+this.anim.direction)*12+(g*2-1)*cos(this.spin.eye[g]+this.anim.direction)*this.anim.eye[g]*2,this.parts.eyeLevel+this.anim.eye[g]*2)
                        }
                    }
                    if(this.trigger.display.beak.main){
                        this.layer.fill(this.color.beak.main[0],this.color.beak.main[1],this.color.beak.main[2],this.fade*this.fades.beak.main)
                        this.layer.noStroke()
                        this.layer.ellipse(sin(this.anim.direction)*12,this.parts.beakLevel,11+2*cos(this.anim.direction),7.5)
                    }
                    if(this.trigger.display.beak.mouth){
                        this.layer.noFill()
                        this.layer.stroke(this.color.beak.mouth[0],this.color.beak.mouth[1],this.color.beak.mouth[2],this.fade*this.fades.beak.mouth)
                        this.layer.strokeWeight(0.5)
                        this.layer.arc(sin(this.anim.direction)*12,this.parts.beakLevel,11+2*cos(this.anim.direction),1,0,180)
                    }
                    if(this.trigger.display.beak.nostril){
                        this.layer.noFill()
                        this.layer.stroke(this.color.beak.nostril[0],this.color.beak.nostril[1],this.color.beak.nostril[2],this.fade*this.fades.beak.nostril)
                        this.layer.strokeWeight(0.5)
                        for(let g=0;g<2;g++){
                            this.layer.line(sin(this.anim.direction-6+g*12)*16,this.parts.beakLevel-1.5,sin(this.anim.direction-6+g*12)*16,this.parts.beakLevel-1)
                        }
                    }
                break
                
            }
            this.layer.scale(1/this.size,1/this.size/this.movement.gravity)
        }
        this.layer.translate(-this.position.x-this.offset.position.x,-this.position.y-this.offset.position.y*this.movement.gravity)
    }
    update(){
        super.update()
        switch(this.type){
            case 0:
                this.animSet.active=false
                if(inputs.keys[0][0]||inputs.keys[1][0]){
                    this.velocity.x-=this.movement.speed
                    if(this.goal.anim.direction>-75){
                        this.goal.anim.direction-=15
                    }
                    this.animSet.active=toggle(this.animSet.active)
                }
                if(inputs.keys[0][1]||inputs.keys[1][1]){
                    this.velocity.x+=this.movement.speed
                    if(this.goal.anim.direction<75){
                        this.goal.anim.direction+=15
                    }
                    this.animSet.active=toggle(this.animSet.active)
                }
                if(this.animSet.active||this.animSet.loop>0){
                    this.animSet.loop++
                    if(this.animSet.loop>=30){
                        this.animSet.loop-=30
                        this.animSet.flip=1-this.animSet.flip
                    }
                }
                if(this.anim.direction>this.goal.anim.direction+3){
                    this.anim.direction-=6
                }
                if(this.anim.direction<this.goal.anim.direction-3){
                    this.anim.direction+=6
                }
                if(this.anim.direction>180){
                    this.anim.direction-=360
                }else if(this.anim.direction<-180){
                    this.anim.direction+=360
                }
                if(this.trigger.animate){
                    this.spin.legs[0].top=-90+sin(this.animSet.loop*12)*75
                    this.spin.legs[1].top=90+sin(this.animSet.loop*12)*75
                    this.spin.arms[0].top=-90+sin(this.animSet.loop*12)*60
                    this.spin.arms[1].top=90+sin(this.animSet.loop*12)*60
                }
                if((inputs.keys[0][2]||inputs.keys[1][2])&&this.timers[0]>0){
                    inputs.keys[0][2]=false
                    inputs.keys[1][2]=false
                    this.goal.movement.gravity*=-1
                }
            break

        }
        stage.focus.x=this.position.x
        stage.focus.y=this.position.y
    }
}