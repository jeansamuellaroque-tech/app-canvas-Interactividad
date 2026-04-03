# ⚡ Canvas Physics Lab - Interactividad 2D

Aplicación web interactiva desarrollada con **HTML, CSS, JavaScript y Bootstrap**, que simula objetos en un entorno gráfico 2D con comportamiento dinámico, interactividad del usuario y lógica basada en niveles.

---

## 🎯 Objetivo

Desarrollar algoritmos que permitan a una aplicación interactuar con animaciones en un entorno gráfico 2D, respondiendo a eventos como el movimiento del mouse y clics, integrando además lógica de niveles y estadísticas.

---

## 🚀 Características

✨ Interacción con el mouse (hover y clic)
✨ Animación en tiempo real con `requestAnimationFrame`
✨ Objetos que se mueven de abajo hacia arriba
✨ Movimiento aleatorio (trayectorias variables)
✨ Desaparición progresiva (fade out) al hacer clic
✨ Contador de elementos eliminados (numérico y porcentual)
✨ Sistema de niveles (cada 10 elementos)
✨ Incremento de velocidad por nivel
✨ Interfaz moderna con Bootstrap y Glassmorphism

---

## 🧠 Lógica del sistema

* **Detección de interacción**: Se calcula la distancia entre el mouse y los objetos para detectar colisión (hover).
* **Animación**: Se utiliza un bucle continuo para actualizar posiciones y renderizar elementos.
* **Desaparición**: Al hacer clic, el objeto reduce su opacidad gradualmente.
* **Niveles**: Se agrupan los elementos en bloques de 10 para definir el nivel.
* **Velocidad**: A mayor nivel, mayor velocidad de desplazamiento.

---

## 🧩 Estructura del proyecto

```
/app-canvas-Interactividad
│
├── index.html
├── README.md
│
└── assets/
    ├── css/
    │   └── styles.css
    │
    ├── js/
    │   └── main.js
    │
    └── img/
        └── favicon.png
```

---

## 🖥️ Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (Canvas API)
* Bootstrap 5

---

## ▶️ Cómo ejecutar el proyecto

1. Clona este repositorio o descarga los archivos
2. Abre la carpeta en **VS Code**
3. Ejecuta con **Live Server**
4. Interactúa con el canvas:

   * Mueve el mouse → cambia el color
   * Haz clic → desaparece el objeto

---

## 📊 Ejemplo de funcionamiento

* Los círculos aparecen desde fuera del canvas (parte inferior)
* Se desplazan hacia arriba con trayectorias aleatorias
* Al hacer clic, desaparecen lentamente
* Se muestra:

  * Número de elementos eliminados
  * Porcentaje
  * Nivel actual

---

## 🎮 Posibles mejoras

* Sistema de puntuación tipo videojuego
* Temporizador
* Efectos visuales (partículas, explosiones)
* Sonidos interactivos
* Inteligencia artificial para movimiento avanzado

---

## 👨‍💻 Autor

**Jean Samuel Laroque**
Ingeniería en Sistemas
2026

---


