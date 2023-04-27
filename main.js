
/** @type {HTMLCanvasElement} */

// seleziona canvas e crea context
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

// imposta dimensioni canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// mantieni dimensioni canvas anche quando resize finestra
window.addEventListener("resize", ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCircle();
})

// posizione iniziale
let x = 200;
let y = 200;


// disegna cerchio
function drawCircle(){
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "red";
    ctx.arc(x, y, 100, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
}


// animazione verso destra
function animate(){

    ctx.clearRect(0, 0, canvas.width, canvas.height); // pulisci la canvas
    
    x++; // manda la palla avanti

    drawCircle();

    if(x === 500)  {
        animate2();
        return;
    }

    requestAnimationFrame(animate);
}


// animazione verso sinistra
function animate2(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height); // pulisci la canvas 
    
    x--; // manda la palla indietro

    drawCircle(); // disegna il cerchio

    if(x === 200){
        animate();
        return;
    }

    requestAnimationFrame(animate2);
}

// inizializza animazione da sx
animate();
