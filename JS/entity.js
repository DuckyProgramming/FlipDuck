class entity{
    constructor(layer,x,y,type,status){
        this.layer=layer
        this.position={x:x,y:y}
        this.type=type
        this.status=status
        this.velocity={x:0,y:0}
        this.tempVelocity={x:0,y:0}
        this.base={position:{x:this.position.x,y:this.position.y}}
        this.fade=0
        this.time=0
        this.remove=false
    }
    update(){
        if(this.status==0&&this.fade<1){
            this.fade=round(this.fade*5+1)/5
        }else if(this.status==1&&this.fade>0){
            this.fade=round(this.fade*5-1)/5
        }else if(this.status==2&&this.fade<1){
            this.fade=round(this.fade*15+1)/15
        }else if(this.status==3&&this.fade>0){
            this.fade=round(this.fade*15-1)/15
        }
        this.position.x+=this.velocity.x
        this.position.y+=this.velocity.y
        this.position.x+=this.tempVelocity.x
        this.position.y+=this.tempVelocity.y
        this.tempVelocity={x:0,y:0}
        this.time++
    }
}