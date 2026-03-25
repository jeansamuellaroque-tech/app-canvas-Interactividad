const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");

canvas3.width = canvas3.offsetWidth;
canvas3.height = canvas3.offsetHeight;

// 🔥 VARIABLES GLOBALES
let circles3 = [];
let eliminados = 0;
let totalInicial = 0;
let nivel = 1;

let mouse = { x: 0, y: 0 };

// 🎯 EVENTOS MOUSE
canvas3.addEventListener("mousemove", (e) => {
  const rect = canvas3.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

canvas3.addEventListener("click", () => {
  circles3.forEach(c => {
    if (c.isMouseOver()) {
      c.disappearing = true;
    }
  });
});

// 🎨 COLOR RANDOM
function randomColor() {
  return `hsl(${Math.random() * 360},100%,50%)`;
}

// 🔵 CLASE CIRCULO
class Circle3 {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

    // Movimiento aleatorio + hacia arriba
    this.dx = (Math.random() - 0.5) * 1.5;
    this.dy = -(Math.random() * 1 + 0.5);

    this.opacity = 1;
    this.color = "#00eaff";

    this.disappearing = false;
    this.dead = false;
  }

  draw() {
    ctx3.globalAlpha = this.opacity;
    ctx3.beginPath();
    ctx3.fillStyle = this.color;
    ctx3.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx3.fill();
    ctx3.globalAlpha = 1;
  }

  isMouseOver() {
    let dx = this.x - mouse.x;
    let dy = this.y - mouse.y;
    return Math.sqrt(dx * dx + dy * dy) < this.r;
  }

  update() {

    // 🎯 HOVER → CAMBIO COLOR
    if (this.isMouseOver()) {
      this.color = randomColor();
    }

    // 🔥 DESAPARECER LENTO
    if (this.disappearing) {
      this.opacity -= 0.02;

      if (this.opacity <= 0) {
        this.dead = true;
        eliminados++;

        // 🔥 NIVEL CORRECTO (cada 10)
        nivel = Math.floor(eliminados / 10) + 1;
      }
    }

    // 🔥 VELOCIDAD PROGRESIVA
    let speedMultiplier = 1 + (nivel - 1) * 0.3;

    this.x += this.dx * speedMultiplier;
    this.y += this.dy * speedMultiplier;

    this.draw();
  }
}

// 🔥 CREAR CÍRCULOS (desde abajo)
function createCircles3(n = 10) {
  circles3 = [];
  eliminados = 0;
  nivel = 1;
  totalInicial = n;

  for (let i = 0; i < n; i++) {
    circles3.push(
      new Circle3(
        Math.random() * canvas3.width,
        canvas3.height + Math.random() * 200, // empiezan fuera
        15 + Math.random() * 10
      )
    );
  }
}

// 🔥 ANIMACIÓN
function animate3() {
  requestAnimationFrame(animate3);
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);

  circles3.forEach(c => c.update());

  // 🔥 ELIMINAR MUERTOS
  circles3 = circles3.filter(c => !c.dead);

  // 🔥 ESTADÍSTICAS
  let porcentaje = totalInicial > 0
    ? ((eliminados / totalInicial) * 100).toFixed(1)
    : 0;

  let progresoNivel = eliminados % 10;

  // 🎨 HUD
  ctx3.fillStyle = "white";
  ctx3.font = "14px Arial";

  ctx3.fillText(`Eliminados: ${eliminados}`, 10, 20);
  ctx3.fillText(`Porcentaje: ${porcentaje}%`, 10, 40);
  ctx3.fillText(`Nivel: ${nivel}`, 10, 60);
  ctx3.fillText(`Progreso nivel: ${progresoNivel}/10`, 10, 80);
}

// 🚀 INICIO
createCircles3(10);
animate3();