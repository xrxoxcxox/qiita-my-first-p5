import p5 from "p5";

const sketch = (p: p5) => {
  let particles: p5.Vector[] = [];
  const numberOfPoints = 2000;
  const noiseScale = 0.01;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    for (let i = 0; i < numberOfPoints; i++) {
      particles.push(p.createVector(p.random(p.width), p.random(p.height)));
    }
    p.stroke(200);
  };

  p.draw = () => {
    p.background(255, 1);
    for (let i = 0; i < numberOfPoints; i++) {
      let particle = particles[i];
      p.point(particle.x, particle.y);
      let noise = p.noise(particle.x * noiseScale, particle.y * noiseScale);
      particle.x -= 5 * p.cos(noise * p.TAU);
      particle.y -= 5 * p.sin(noise * p.TAU);
    }
  };
};

new p5(sketch);
