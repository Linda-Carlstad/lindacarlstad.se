<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>40th Anniversary Celebration</title>
  
  <link rel="icon" href="{{ asset('img/icon.ico') }}" type="image/x-icon">

  <style>
    body, html {
      height: 100%;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background-color: #660023; 
      color: #fff;
      font-family: Arial, sans-serif;
    }

    #message {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      text-align: center;
      font-size: 2em;
      font-weight: bold;
      z-index: 1;
      color: #c9bc73; 
    }

    #message img {
      max-width: 150px; 
      margin-bottom: 20px; 
    }

    #fireworksCanvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 0;
    }

    footer {
      position: fixed;
      bottom: 10px;
      width: 100%;
      text-align: center;
      font-size: 0.8em;
      color: #ccc;
      z-index: 1;
    }

    footer a {
      color: #c9bc73;
      text-decoration: none;
    }
  </style>
</head>
<body>


  <div id="message">
    <img src="{{ asset('img/logo.png') }}" alt="Sorority Logo">
    Congratulations on 40 Years!
  </div>

  <canvas id="fireworksCanvas"></canvas>

<!-- 
  <footer>
    Created by <a href="https://kevinberling.se" target="_blank">Kevin Berling</a>
  </footer>
-->

  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js"></script>
  <script>

    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Firework {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.explosionParticles = [];
        this.explode();
      }
      explode() {
        for (let i = 0; i < 30; i++) {
          this.explosionParticles.push({
            x: this.x,
            y: this.y,
            vx: (Math.random() - 0.5) * 5,
            vy: (Math.random() - 0.5) * 5,
            life: 100
          });
        }
      }
      draw() {
        this.explosionParticles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 1;
          if (p.life > 0) {
            ctx.fillStyle = `rgba(255, ${Math.floor(Math.random() * 255)}, 50, ${p.life / 100})`;
            ctx.fillRect(p.x, p.y, 3, 3);
          }
        });
      }
    }

    let fireworks = [];
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fireworks.forEach((firework, index) => {
        firework.draw();
        if (firework.explosionParticles.every(p => p.life <= 0)) {
          fireworks.splice(index, 1);
        }
      });
      requestAnimationFrame(animate);
    }
    canvas.addEventListener('click', (e) => {
      fireworks.push(new Firework(e.clientX, e.clientY));
    });
    animate();

    function confettiEffect() {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    setInterval(confettiEffect, 2000); 
  </script>
</body>
</html>
