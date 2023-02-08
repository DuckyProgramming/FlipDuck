function setupGraphics(){
	angleMode(DEGREES)
	textAlign(CENTER,CENTER)
	rectMode(CENTER)
	colorMode(RGB,255,255,255,1)
	graphics.main=createGraphics(900,600)
	setupLayer(graphics.main)
	graphics.backgrounds=[]
	for(let a=0;a<10;a++){
		graphics.backgrounds.push(createGraphics(graphics.main.width,graphics.main.height))
		setupLayer(graphics.backgrounds[a])
	}
	for(let a=0;a<45;a++){
		for(let b=0;b<30;b++){
			graphics.backgrounds[0].fill(100+noise(a+b*b)*60,160+noise(a*a+b)*20+noise(a+b*b)*60,200+noise(a+b*b)*80)
			graphics.backgrounds[0].rect(10+a*20,10+b*20,20,20)
		}
	}
}