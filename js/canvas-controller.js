'use strict'
var mouseup = 'mouseup';
var mousemove = 'mousemove';
var mousedown = 'mousedown';




// canvas.onmouseup = function (e) {

//     mousePressed = false;

// };

canvas.addEventListener(mouseup, function (e) {
    mousePressed = false;
    ev.preventDefault();
});



canvas.addEventListener(mousedown, function (e) {
    ev.preventDefault();
    if (gShape === 'draw') {
        drawLine(e.offsetX, e.offsetY, gColor, false);
    }


    if (gShape === 'circle') {
        drawCircle(e.offsetX, e.offsetY, getRndNum(1, 4), gColor, true);

    }

    mousePressed = true;
    reset()
   
});

canvas.addEventListener(mousemove, function (e) {
    ev.preventDefault();
    gHeight += 1;
    gWidth += 1;
    if (mousePressed) {
        if (gShape === 'draw') {
            drawLine(e.offsetX, e.offsetY, gColor, true);
        }
        if (gShape === 'square') {
            drawRec(e.offsetX, e.offsetY, gHeight, gWidth, gColor, true)
        }
        if (gShape === 'circle') {
            drawCircle(e.offsetX, e.offsetY, 1, gColor, true);


        }

    }
   
});


// canvas.onmousedown = function (e) {


//     if (gShape === 'draw') {
//         drawLine(e.offsetX, e.offsetY, gColor, false);
//     }


//     if (gShape === 'circle') {
//         drawCircle(e.offsetX, e.offsetY, getRndNum(1, 4), gColor, true);

//     }

//     mousePressed = true;
//     reset()

// };

// canvas.onmousemove = function (e) {
//     gHeight += 1;
//     gWidth += 1;
//     if (mousePressed) {
//         if (gShape === 'draw') {
//             drawLine(e.offsetX, e.offsetY, gColor, true);
//         }
//         if (gShape === 'square') {
//             drawRec(e.offsetX, e.offsetY, gHeight, gWidth, gColor, true)
//         }
//         if (gShape === 'circle') {
//             drawCircle(e.offsetX, e.offsetY, 1, gColor, true);


//         }

//     }

// };



function onInit() {
    initCanvas();
    resizeCanvas()
    isMobile();
}




function initCanvas() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');


}

function onSelectColor() {
    var elColor = document.querySelector('#color').value;
    gColor = elColor;

}


function onSetShape(shape) {

    setShape(shape);


}

function onClearCanvas() {
    gCtx.clearRect(0, 0, canvas.width, canvas.height);
    reset();


}

function onDownload(el) {
    debugger;
    var image = canvas.toDataURL("image/jpg");

    el.href = image;
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    canvas.width = elContainer.offsetWidth;
    canvas.height = elContainer.offsetHeight
}

function isMobile() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        mousedown = 'touchstart';
        mousemove = 'touchmove';
        mouseup = 'touchend';
    }
}