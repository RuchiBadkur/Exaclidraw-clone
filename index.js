const canvas = document.getElementById("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

CanvasRenderingContext2D

const c = canvas.getContext("2d");
// // c is the context object responsible for making any kind of drawings on the canvas.


// // drawing a single line
// c.beginPath();
// c.moveTo(200, 300); // starting point for the line
// c.lineTo(400, 100); // ending point for the line

// /**
//  * Properties for Stroking
//  * 1. strokeStyle = color to be drawn
//  * 2. lineWidth = thicknes of the line
//  */
// // c.strokeStyle = "red";
// c.lineWidth = 2;
// // c.globalAlpha = 1;
// c.stroke(); // stroke draws the line with black color from p1 to p2
// c.closePath();


// /**
//  * Draw three lines
//  * L1 : p1(100, 50), p2(90, 200) => red colored, 3px thickness
//  * L2 : p1(50, 150), p2(300, 40) => blue colored, 10px thickness
//  * L3 : p1(500, 500), p2(600, 600) => tomato colored, 5px thickness
//  */

function drawLine(p1, p2, color = "blue", thickness = 2){
    c.beginPath();
    c.strokeStyle = color;
    c.lineWidth = thickness;
    c.moveTo(p1.x, p1.y);
    c.lineTo(p2.x, p2.y);
    c.stroke();
    c.closePath();
}

// drawLine({x: 100, y: 50}, {x: 90, y: 200}, "red", 3);
// drawLine({x:100, y:50}, {x: 50, y:150}, "blue", 10);
// drawLine({x:500, y:500}, {x: 600, y:600}, "tomato", 5);

function onMouseDown(event){
    let {clientX, clientY} = event;
    c.beginPath();
    c.moveTo(clientX, clientY);
    c.lineWidth = 4;
    c.strokeStyle = "blue";
}

function onMouseUp(event){
    let {clientX, clientY} = event;
    c.lineTo(clientX, clientY);
    c.stroke();
    c.closePath();
}


canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);