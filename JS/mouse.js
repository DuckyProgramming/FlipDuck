function mouseClicked(){
	updateMouse(graphics.main)
	switch(stage.scene){
		case 'menu':
			for(let a=0;a<3;a++){
				if(pointInsideBox({position:inputs.rel},{position:{x:graphics.main.width/2,y:graphics.main.height*(1/2+a/8)},width:200,height:50})){
					transition.trigger=true
					transition.scene='level'
					transition.level=a
					transition.zone=0
					transition.dead=false
				}
			}
		break
	}
}