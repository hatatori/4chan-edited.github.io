f = document.querySelectorAll(".fileThumb")
t = ""

for( i=0 ; i<f.length;i++){
	img = f[i].querySelector("img").src
	link = f[i].href

	t += "<span val='"+link+"'><img src='"+img+"'></span>"
}

sbody = "body{background-color:black;text-align:center;}"
simg = "img{margin:5;height:100;width:20vh}"
sfora = "#fora{width: 100%;height: 100%; background-color: rgba(0,0,0,0.5);position: fixed;top: 0;left: 0;display:none}"
svid = "#vid{max-width: 1000;max-height:90vh;position:absolute;right: 0;left: 0;bottom: 0;top: 0;margin: auto;}"

t += "<div id='fora' style="+sfora+"><div id='dentro'></div></div>"

document.write(t)

estilo = document.createElement("style")
estilo.innerHTML = simg+sfora+svid+sbody

document.head.appendChild(estilo)

window.onclick=function(e){
	try{
		link = e.path[1].getAttribute("val")
		extencao = link.split(".").pop()


		if(extencao == "webm"){
			dentro.innerHTML = "<video id='vid' controls autoplay src='"+link+"'></video><br><a href='"+link+"'>"+link+"</a>"
			showHide(fora)

		}else{
			dentro.innerHTML = "<img id='vid' src='"+link+"' style='width:auto;height:auto'><br><a href='"+link+"'>"+link+"</a>"
			showHide(fora)
			drag(vid)


			vid.onclick=function(e){
				e.stopPropagation()
				e.preventDefault()
			}
			
			zoom(vid)
		}


	}catch(err){}
}

window.onkeyup=function(e){
	if(e.key == "Escape"){
		dentro.innerHTML = ""
		showHide(fora)
	}
}

function showHide(div){
	if(div.style.display == "" || div.style.display == "none" ){
		div.style.display = "block"
		document.body.style.overflow="hidden"
	}
	else{
		div.style.display = "none"
		document.body.style.overflow="auto"
	}
}

fora.onclick=()=>{showHide(fora)}


function zoom(div){
	kk  = 1
	div.onwheel=function(e){

		if(e.deltaY < 0)
			kk+=0.1
		else
			kk-=0.1

		this.style.transform = "scale("+kk+")"

	}
}


//outra parte


function drag(div){

	if(div.style.position == "")
		div.style.position="absolute"

	div.style.top = 0
	div.style.left = 0


	k = div['drag'] = false

	div.onmousedown=function(e){
		this['drag'] = true
		k = this
	}

	document.onmouseup=function(e){
		this['drag'] = false
		k = this
	}

	document.onmousemove=function(e){
		x = e.movementX
		y = e.movementY

		if(e.buttons > 0 && k['drag']){
			k.style.top = parseInt(k.style.top)+y+"px"
			k.style.left = parseInt(k.style.left)+x+"px"
		}		

		return false
	}

}


