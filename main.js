var canvas=document.getElementById("myCanvas");
var contexto=canvas.getContext("2d");
var cor1="blue";
var cor2="orange";
var cor3="black";
var cor4="green";
var cor5="red";
var cor6="gray"
var largura=2;

contexto.beginPath();
contexto.strokeStyle=cor6;
contexto.lineWidth=largura;
contexto.rect(200, 200, 430, 300);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle=cor1;
contexto.lineWidth=largura;
contexto.arc(300, 300, 45, 0, 360);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle=cor2;
contexto.lineWidth=largura;
contexto.arc(350, 350, 45, 0, 360);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle=cor3;
contexto.lineWidth=largura;
contexto.arc(402, 300, 45, 0, 360);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle=cor4;
contexto.lineWidth=largura;
contexto.arc(454, 350, 45, 0, 360);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle=cor5;
contexto.lineWidth=largura;
contexto.arc(508, 300, 45, 0, 360);
contexto.stroke();
