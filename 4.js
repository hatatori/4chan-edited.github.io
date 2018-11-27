thumb = document.getElementsByClassName("fileThumb")
estrutura = document.createElement("div")

for(j=0;j<thumb.length;j++){
	thumb_link = thumb[j].href
	thumb_img = thumb[j].querySelector("img").src
	estrutura.innerHTML += "<div class='el' id='ele' val='"+thumb_link+"'><img width=136 height=80 src='"+thumb_img+"'></div>\n"
}

cinema = []
sid = []
video = []
img = []

cinema.out = [ 
	"width:65%", 
	"height:100%",
	"background-color:black",
	"float:left",
	"left:0",
	"position:fixed",
	"text-align:center;"
]

cinema.inn = [
	"margin:auto",
	"max-height:90%",
	"max-width:90%"
]

sid.style = [
	"width:30%", 
	"height:80%",
	"float:right",
	"z-index:1",
	"position:absolute",
	"top:0",
	"right:0",
	"background-color:black"
]

video.style = [
	"max-width:100%"
]

img.style = [
	"max-height:100vh",
	"max-width:100%"
]


cinema.out.c = "#out{"+cinema.out.join(";")+"}"
cinema.inn.c = "#inn{"+cinema.inn.join(";")+"}"
sid.c = "#sid{"+sid.style.join(";")+"}"
video.c = "video{"+video.style.join(";")+"}"
img.c = "img{"+img.style.join(";")+"}"



style = document.createElement("style")
style.innerHTML = "video{max-height:100vh;}*{padding:0;margin:0;background-color:black}.el{display:inline-block}#invisible{display:'none'}#visible{display:'block'}"+cinema.out.c+cinema.inn.c+sid.c+video.c+img.c


sid = document.createElement("div");
sid.id="sid"

sid.appendChild(estrutura)


out = document.createElement("div");
out.id="out"

inn = document.createElement("div");
inn.id="inn"

out.appendChild(inn)


document.write(sid.innerHTML)
document.body.appendChild(style)
document.body.appendChild(out)
document.body.children[0].setAttribute("id","sid")


for(i = 0;i<ele.length;i++){
	ele[i].onclick = function(e){
		link = this.getAttribute("val")

		if(link.split(".").pop() == "jpg" || link.split(".").pop() == "png" || link.split(".").pop() == "gif" )
			inn.innerHTML = "<a href='"+link+"' target='_blank'><img src='"+link+"'><br></a><a href='"+link+"'>"+link+"</a>"
		else
			inn.innerHTML = "<video id=vide controls autoplay src='"+link+"'></video><br><a href='"+link+"'>"+link+"</a>"
	}

window.onkeyup=function(e){
	if(e.key == "f")
		vide.webkitRequestFullscreen()
}
}
