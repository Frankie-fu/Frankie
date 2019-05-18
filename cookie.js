var c = document.getElementById('mycanvas');
var ctx = c.getContext('2d');

var cookies=0;
var s = document.getElementById('score');
s.innerHTML= cookies;

c.addEventListener("click",draw,true);

function draw(event) {
    cookies=cookies+1;
    s.innerHTML=cookies;
    
    var alpha=1.0;
    y = event.clientY
    interval = setInterval (function (){
    ctx.globalAlpha=alpha;
    ctx.font = "normal 20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("+1",event.clientX,y);
    alpha = alpha - 0.05;
    y=y-5;
    if (alpha <= 0) {
        ctx.clearRect(0,0,300,300);
        clearInterval(interval);
    }
    },0.000000000001);
}