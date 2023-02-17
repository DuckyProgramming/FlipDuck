class partisan extends physical{
	constructor(layer,x,y,type,width,height){
		super(layer,x,y,type,width,height)
		this.trigger={physics:{resistance:true,gravity:true}}
		this.movement={speed:0.6,gravity:1}
        this.goal={movement:{gravity:this.movement.gravity}}
        this.timers=[0,0]
		this.squish=[false,false,false,false]
		this.size=1
		this.dead=false
	}
	display(){
		super.display()
	}
	update(){
		super.update()
		this.position.x=constrain(this.position.x,0,game.edge.x)
		this.position.y=constrain(this.position.y,0,game.edge.y)
        this.anim.rate+=this.velocity.x
		this.height=this.base.height*max(0.2,abs(this.movement.gravity))
		if(this.dead){
			this.status=1
			if(this.fade<=0){
				transition.trigger=true
				transition.mode=1
				transition.direction=-1
				game.position.x=levels[game.check.zone].position.x
				game.position.y=levels[game.check.zone].position.y
			}
		}
		if(this.movement.gravity<this.goal.movement.gravity){
			this.movement.gravity=round(this.movement.gravity*5+1)/5
		}
		if(this.movement.gravity>this.goal.movement.gravity){
			this.movement.gravity=round(this.movement.gravity*5-1)/5
		}
		if(this.trigger.physics.resistance){
			this.velocity.x*=(1-physics.resistance)
			this.velocity.y*=(1-physics.resistance)
		}
		if(this.trigger.physics.gravity){
			this.velocity.y+=physics.gravity*this.goal.movement.gravity
		}
		if(this.squish[0]&&this.squish[1]||this.squish[2]&&this.squish[3]){
			this.dead=true
		}
		this.squish=[false,false,false,false]
		for(let a=0,la=this.timers.length;a<la;a++){
			if(this.timers[a]>0){
				this.timers[a]--
			}
		}
	}
}