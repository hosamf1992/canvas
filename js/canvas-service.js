'use strict'
var gCanvas;
var gCtx;
var gShape = 'square';
var gX, gY;
var mousePressed = false;
var gColor;
var gHeight = 0.5;
var gWidth = 0.5;



function setShape(shape) {
    gShape = shape;
}


function drawLine(x, y, color, isDown) {

    if (isDown) {
        gCtx.beginPath();
        gCtx.moveTo(gX, gY);
        gCtx.lineTo(x, y);
        gCtx.strokeStyle = color;
        gCtx.closePath();
        gCtx.stroke();
    }
    gX = x;
    gY = y;

}

function drawCircle(x, y, r, color, isDown) {
    if (isDown) {
        for (var i = 0; i < getRndNum(1, 10); i++) {

            gCtx.beginPath();
            gCtx.arc(x, y, r, 0, 2 * Math.PI);
            gCtx.strokeStyle = color;
            gCtx.stroke();
            r += 5;


        }
    }


}


function drawRec(x, y, width, height, color, isDown) {
    if (isDown) {
        gCtx.beginPath();
        gCtx.rect(x, y, width, height);
        gCtx.strokeStyle = color;
        gCtx.stroke();
    }

}
function reset() {
    gWidth = 0.5;
    gHeight = 0.5;

}



