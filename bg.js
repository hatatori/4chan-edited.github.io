pagina = 0

window.onload=function(){

	content.style.display="none"
	invasion(0+pagina,3+pagina)
	createStyle()
	newbuttons()

	
}

function invasion(_aa,_bb){


//pega todos os links
tth = document.getElementsByClassName("thread")
estrutura = document.createElement("div");
estrutura.id = "element"

console.log(tth)

//cria div
di = document.createElement("div")

// for(i=0;i<t.length;i++){
	for(i=_aa;i<_bb;i++){

		link = tth[i].querySelector("a").href

		enter(link)

	}
}

function createStyle(){
	style = document.createElement("style")
	style.innerHTML = "#element div{display: inline-block; margin:5px;}"
	style.innerHTML += "#element{margin:auto; text-align: center;display:fixed;top:0px;left:0px;position:absolute;background-color:black}"
	style.innerHTML += "#next{position:fixed;top:20px;right:20px;z-index:3}"
	style.innerHTML += "#back{position:fixed;top:20px;left:20px;z-index:3}"
	style.innerHTML += "button{padding:10px;border:none}"
	style.innerHTML += "#invisible{display='none'}"

	// style.innerHTML += "#out{width:100%;height:100%;position:fixed;top:0;left:0;background-color:rgba(0,0,0,0.5);display: flex;justify-content: center;align-items: center;}";
	

	out = document.createElement("div");
	out.id="out"

	inv = document.createElement("div");
	inv.id="invisible"

	document.body.appendChild(out)
	document.head.appendChild(style)
	document.body.appendChild(inv)
}


function clicks(){
	for(i=0;i<ele.length;i++){
		ele[i].onclick=function(){
			out.style["width"] = window.innerWidth
			out.style["height"] = window.innerHeight
			out.style["position"] = "fixed"
			out.style["top"] = 0
			out.style["left"] = 0
			out.style["right"] = 0
			out.style["bottom"] = 0
			out.style["display"] = "flex";
			out.style["justify-content"] = "center"
			out.style["align-items"] = "center";
			out.style["background-color"] = "rgba(0,0,0,0.5)"
			out.style["z-index"] = 1

			posicaoclick = positionClick(this)

			document.body.style.overflow="hidden"
			

			extencao = this.getAttribute("val").split(".")
			extencao = String(extencao[extencao.length-1])

			zoom = 1

			if(extencao == "webm")
				out.innerHTML="<div><video id='vide' loop controls autoplay height=600 src="+this.getAttribute("val")+"></video><br><a id=linkdown download href='"+this.getAttribute("val")+"'>LINK</a></div>"
			else
				out.innerHTML="<div><img id=im style='transform:scale(1) translate(0px,0px)' height=800 src='"+this.getAttribute("val")+"'><a id=linkdown download href='"+this.getAttribute("val")+"'>LINK</a></div>"


			out.querySelector("img").ondragstart=function(){return false}

		}
	}

	out.onclick=function(){

		zoom = 1
		vx=0
		vy=0




		this.removeAttribute("style")
		document.body.removeAttribute("style")
		this.innerHTML=""


		try {
			window.stop();
		} catch (exception) {
			document.execCommand('Stop');
		}

		
	}

	next = document.getElementById("next")
	back = document.getElementById("back")

	next.onclick=function(){
		pagina+=3
		invasion(0+pagina,3+pagina)
	}

	back.onclick=function(){
		pagina-=3
		invasion(0+pagina,3+pagina)
	}

	window.onkeyup=function(e){
		console.log(e)
		if(e.key == "Escape"){
			out.removeAttribute("style")
			out.innerHTML=""	
		}
		if(e.key == "f")
			vide.webkitRequestFullscreen()

		if(e.key == "ArrowLeft")
			vide.currentTime -= 1

		if(e.key == "ArrowRight")
			vide.currentTime += 1

		if(e.key == "Space")
			vide.play()

		if(e.key == "s"){
			out.querySelector("a").onclick=function(e){
				e.stopPropagation()
			}
			out.querySelector("a").click()

		}

		if(e.key == "+"){
					

			vx=0
			vy=0
			
			posicaoclick++

			extencao = ele[posicaoclick].getAttribute("val").split(".")
			extencao = String(extencao[extencao.length-1])

			console.log(ele[posicaoclick].getAttribute("val")+" - "+extencao)

			if(extencao == "webm")
				out.innerHTML="<div><video id='vide' loop controls autoplay height=600 src="+ele[posicaoclick].getAttribute("val")+"></video><br><a id=linkdown download href='"+ele[posicaoclick].getAttribute("val")+"'>LINK</a></div>"
			else
				out.innerHTML="<div><img style='transform:scale(1) translate(0px,0px)' height=800 src='"+ele[posicaoclick].getAttribute("val")+"'><a id=linkdown download href='"+ele[posicaoclick].getAttribute("val")+"'>LINK</a></div>"

			nphoto(ele[posicaoclick+1].getAttribute("val"))

			out.querySelector("img").ondragstart=function(){return false}
		}

		if(e.key == "-"){

			vx=0
			vy=0
			posicaoclick--

			extencao = ele[posicaoclick].getAttribute("val").split(".")
			extencao = String(extencao[extencao.length-1])

			console.log(ele[posicaoclick].getAttribute("val")+" - "+extencao)

			if(extencao == "webm")
				out.innerHTML="<div><video id='vide' loop controls autoplay height=600 src="+ele[posicaoclick].getAttribute("val")+"></video><br><a id=linkdown download href='"+ele[posicaoclick].getAttribute("val")+"'>LINK</a></div>"
			else
				out.innerHTML="<div><img style='transform:scale(1) translate(0px,0px)' height=800 src='"+ele[posicaoclick].getAttribute("val")+"'><a id=linkdown download href='"+ele[posicaoclick].getAttribute("val")+"'>LINK</a></div>"

			nphoto(ele[posicaoclick-1].getAttribute("val"))

			out.querySelector("img").ondragstart=function(){return false}
		}

		timevideo = vide.duration/10

		if(e.key == "1") vide.currentTime = timevideo*1;
		if(e.key == "2") vide.currentTime = timevideo*2;
		if(e.key == "3") vide.currentTime = timevideo*3;
		if(e.key == "4") vide.currentTime = timevideo*4;
		if(e.key == "5") vide.currentTime = timevideo*5;
		if(e.key == "6") vide.currentTime = timevideo*6;
		if(e.key == "7") vide.currentTime = timevideo*7;
		if(e.key == "8") vide.currentTime = timevideo*8;
		if(e.key == "9") vide.currentTime = timevideo*9;
		if(e.key == "0") vide.currentTime = timevideo*0;
	}

}


function enter(lk){
	
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			e = xhttp.responseText;
			x = e
			di.innerHTML += x

			thumb = di.getElementsByClassName("fileThumb")

			for(j=0;j<thumb.length;j++){
				thumb_link = thumb[j].href
				thumb_img = thumb[j].querySelector("img").src
				estrutura.innerHTML += "<div id='ele' val='"+thumb_link+"'><img width=136 height=80 src='"+thumb_img+"'></div>\n"

			}

			document.body.appendChild(estrutura)
			
			clicks()

			
			

		}

	};
	xhttp.open("GET", lk, true);
	xhttp.send();


}

function newbuttons(){
	bt = document.createElement("button")
	bt.id="next"
	bt.innerHTML = " > "
	document.body.appendChild(bt)

	bt = document.createElement("button")
	bt.id="back"
	bt.innerHTML = " < "
	document.body.appendChild(bt)
}

function positionClick(le){
	qt = ele.length
	zz=[]
	for(i=0;i<qt;i++){
		zz[i] = ele[i]
	}

	return zz.indexOf(le)
}

function nphoto(nx){
	

	invisible.innerHTML="<img src='"+nx+"'>";
	invisible.innerHTML+="<video muted autoplay src='"+nx+"'>";


}

zoom = 1

window.onwheel=function(e){
	console.log(e.deltaY)

	if(e.deltaY < 0){

		zoom+=0.1
		
		// out.querySelector("img").style.transition = "0.2s"
		out.querySelector("img").style.transform = out.querySelector("img").style.transform.replace(/sc.+?\)/g,"scale("+zoom+")")
		
		

	}else{

		zoom-=0.1

		out.querySelector("img").style.transform = out.querySelector("img").style.transform.replace(/sc.+?\)/g,"scale("+zoom+")")

	}
}

vx=0
vy=0

trans = "translate("+vx+","+vx+")"


window.onmousemove=function(e){

	if(e.buttons == 1){
		vx+=e.movementX
		vy+=e.movementY
		trans = "translate("+vx+"px,"+vy+"px)"
		out.querySelector("img").style.transform = out.querySelector("img").style.transform.replace(/tran.*/g,trans)

		console.log(trans)

	}
}