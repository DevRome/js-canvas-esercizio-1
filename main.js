
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
let size = 100;
let hue = 0;

// disegna cerchio
function drawCircle(){
    hue++;
    ctx.beginPath();
    ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.strokeStyle = "red";
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
}


// animazione verso destra
function animate(){

    ctx.clearRect(0, 0, canvas.width, canvas.height); // pulisci la canvas
    
    x++; // manda la palla avanti
    size+=0.2;

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
    size-=0.3;

    drawCircle(); // disegna il cerchio

    if(x === 200){
        animate();
        return;
    }

    requestAnimationFrame(animate2);
}

// inizializza animazione da sx
animate();
