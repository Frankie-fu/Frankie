var c = document.getElementById('mycanvas');
var ctx = c.getContext('2d');

var increment=1;
var cookies=0;
var s = document.getElementById('score');
s.innerHTML= cookies;

c.addEventListener("click",draw,true);

function draw(event) {
    cookies=cookies+increment;
    s.innerHTML=cookies;
    
    var aud = document.getElementById("myAudio");
    aud.play();
    
    if (cookies == 20) {
        increment=2;
        award(increment,"gray")
    }
    
    if (cookies == 50) {
        increment=3;
        award(increment,"blue")
    }
    
    if (cookies == 101) {
        increment=4;
        award(increment,"green")
    }
    
     if (cookies == 201) {
        increment=5;
        award(increment,"gold")
    }
    if (cookies == 331) {
        increment=6;
        award(increment,"green")
    }
    if (cookies == 535) {
        increment=7;
        award(increment,"blue")
    }
    if (cookies == 878) {
        increment=8;
        award(increment,"gray")
    }
    if (cookies == 990) {
        increment=9;
        award(increment,"green")
    }
    if (cookies == 1980) {
        increment=10;
        award(increment,"gold")
    }
    function award(increment,colour) {
    mytab = "<table><tr>";
    mytab = mytab + "<td style='background-color:" + colour +
";padding:25px; color:white'>";
    mytab = mytab + "Congratulations!" + increment + "-pointers!";
    mytab = mytab + "</td>";
    mytab = mytab + "</tr></table>";
    mydiv = document.getElementById("store");
    mydiv.innerHTML = mytab;
}
    
    if (cookies == 15) {
        people("Lebron James", 15)
    }
    if (cookies == 53) {
        people("Kyrie Irving", 53)
    }
    if (cookies == 101) {
        people("Giannis Antetokounmpo", 101)
    } 
    if (cookies == 193) {
        people("Kevin Durant", 193)
    }
    if (cookies == 5000) {
        people("Michael Jordan", "infinite(winning)")
    }
    function people(person, points) {
        var mytag = document.getElementById("nba");
        mytag.innerHTML = person + ": Award for " + points + " points!!!"
    }
    
    var alpha=1.0;
    y = event.clientY
    interval = setInterval (function (){
    ctx.globalAlpha=alpha;
    ctx.font = "normal 20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("+"+increment,event.clientX,y);
    alpha = alpha - 0.05;
    y=y-5;
    if (alpha <= 0) {
        ctx.clearRect(0,0,300,300);
        clearInterval(interval);
    }
    },0.000000000001);
}