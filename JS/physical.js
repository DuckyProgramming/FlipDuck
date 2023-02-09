class physical extends entity{
	constructor(layer,x,y,type,width,height){
		super(layer,x,y,type,0)
		this.previous={position:{x:0,y:0}}
		this.offset={position:{x:0,y:0}}
		this.width=width
		this.height=height
	}
	display(){
		this.layer.translate(this.position.x+this.offset.position.x,this.position.y+this.offset.position.y)
		this.layer.fill(255)
		this.layer.noStroke()
        this.layer.rect(0,-this.offset.position.y,this.width,this.height)
		this.layer.translate(-this.position.x-this.offset.position.x,-this.position.y-this.offset.position.y)
	}
	update(){
		this.previous.position.x=this.position.x
		this.previous.position.y=this.position.y
		super.update()
	}
}