var c =  document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#ff0000";
ctx.fillRect(0,0,600,100);

var c =  document.getElementById("myCanvas1");
var ctx = c.getContext("2d");
ctx.fillStyle = "#e60000"
ctx.fillRect(0,0,600,30);
ctx.fillStyle = "#e60000"
ctx.fillRect(0,170,600,30);
ctx.fillStyle = "#330066"
ctx.fillRect(0,60,600,80);

var c =  document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
ctx.fillStyle = "#0099cc"
ctx.fillRect(0,0,800,200);

var c=document.getElementById("myCanvas2");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.fillStyle = 'gold';
ctx.arc(100,90,50,0,2*Math.PI);
ctx.fill();

var c =  document.getElementById("myCanvas3");
var ctx = c.getContext("2d");
ctx.fillStyle = "#ff0000"
ctx.fillRect(110,0,100,40);