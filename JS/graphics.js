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
	for(let a=0;a<46;a++){
		for(let b=0;b<31;b++){
			graphics.backgrounds[0].fill(60+noise(a/5+b/5+random(0,1))*60,120+noise(a/5+b/5+20+random(0,1))*20+noise(a/5+b/5+random(0,1))*60,160+noise(a/5+b/5+random(0,1))*80)
			graphics.backgrounds[0].rect(a*20,b*20,20,20)
		}
	}
}