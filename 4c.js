thread = document.getElementsByClassName("thread")
im = []
d2 = ""

for(i=0;i<thread.length;i++){
    im[i] = { 
        img:thread[i].querySelector("img").src,
        link:thread[i].querySelector("a").href
    }
	d2 += "<img class='cat' url='"+im[i].link+"' src='"+im[i].img+"'>"	
}

document.write("<div id='d1'></div><div id='d2'>"+d2+"</div>")
go()
botaoDireito()

s_d1 = "*{background-color:black;text-align:center;outline:none}"
s_d1 += "p {    width: 300;    height: 200;    text-align: center;    display: inline-block; margin:5}"
s_d1 += "#d1 { width: 80%; height:100%;    position: absolute;    top: 0;    left: 0; overflow-y:scroll}"
s_d1 += "#d1 img, #d1 video {    max-height: 100%;    max-width: 100%; }"
s_d2 = "#d2 {    width: 20%;   height: 100%;    background-color: black;    position: absolute;    top: 0;    right: 0;    overflow-y: scroll; }"
s_d2 += "#d2 img {    width: 50%;    max-height: 20%; } "

document.head.innerHTML = "<style>"+s_d1+s_d2+"</style>"

function conteudo(url){
    console.log(url)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            codigo = xhttp.responseText;
            codigo = codigo.match(/File: <a href=\"(.+?)\"/g)
            codigo = codigo.map(e=>{return e.replace(/File: <a href=|\"/g,"")})

            codigo = codigo.map(e=>{
                if(e.match(/webm/g))
                    return "<p><video autoplay loop muted src='"+e+"'></video></p>"
                else
                    return "<p><a href='"+e+"' target=blank><img src='"+e+"'></a></p>"
            })
            codigo = codigo.join("")

			d1.innerHTML = codigo
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function go(){
	ct = document.getElementsByClassName("cat")
	for(j=0;j<ct.length;j++){
		ct[j].onclick=function(e){
			u = this.getAttribute('url')
            console.log(u)
			conteudo(u)
		}
	}
}

function botaoDireito(){
    window.oncontextmenu=function(g){
        str = g.target.src
        el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        g.preventDefault()
    }

    window.onmouseover=function(e){
        e.target.muted=false
        e.target.volume=1
        e.target.setAttribute("controls",1)
    }

    window.onmouseout=function(e){
        e.target.muted=true
        e.target.volume=0
        e.target.removeAttribute("controls")
    }
}
