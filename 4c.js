


window.onload=function(){

	

	//pega tudo do catálogo

	thread = document.getElementsByClassName("thread")
	im = []
	div = ""

	for(i=0;i<thread.length;i++){
		im[i] = { 
			img:thread[i].querySelector("img").src,
			link:thread[i].querySelector("a").href
		}
		div+="<a id='tx' val="+im[i].link+"><img src='"+im[i].img+"'' width=50% max-height:100 ></a>"
	}

	estilo_geral = "padding:0;margin:0;background-color:black"
	estilo_direito = "width:20%;height:100%;position:fixed;right:0;top:0;overflow-y:scroll"
	estilo_esquerdo = "width:80%;height:100%;"
	estilo_iframe = "width:100%;height:100%;border:none"

	d = "<div id='esquerdo' style="+estilo_esquerdo+"><iframe id='ifr' style="+estilo_iframe+"></iframe></div><div id='direito' style="+estilo_direito+">"+div+"</div>"

	document.write(d)

	for(i=0;i<tx.length;i++){
		tx[i].onclick=function(e){
			ifr.src=this.getAttribute("val")

			ativo = this
		}
	}

	document.body.style = estilo_geral

	botaoDireito()

	//formata a página

	ifr.onload=function(){

		try{
			fl = ifr.contentDocument.body.innerHTML.match(/File: <a href=\"(.+?)\"/g)
			fl = fl.map(e=>{return e.replace(/File: <a href=|\"/g,"")})

			fil = fl.map(e=>{
				if(e.match(/webm/g))
					return "<video autoplay loop muted controls src='"+e+"'></video>"
				else
					return "<a href='"+e+"' target=blank><img src='"+e+"'></a>"
			})

			fil = fil.join("")

			ifr.contentDocument.write(fil)

			st = document.createElement("style")
			s = "*{background-color:black;text-align:center;height:300}video,img{height:200;max-width:300;margin:5}"
			st.innerHTML=s
			ifr.contentDocument.body.appendChild(st)

			botaoDireito()
			
		}catch(err){}
	}

}

function botaoDireito(){
	ifr.contentWindow.oncontextmenu=function(g){
		str = g.target.src
		el = document.createElement('textarea');
		el.value = str;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
		g.preventDefault()
	}

	ifr.contentWindow.onmousemove=function(e){
		e.target.muted=false
		e.target.volume=1
	}

	ifr.contentWindow.onmouseout=function(e){
		e.target.muted=true
		e.target.volume=0
	}
}



