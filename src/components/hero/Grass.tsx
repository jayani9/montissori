import React, { useEffect, useRef } from 'react';
import { gsap, Power1 } from 'gsap';

const random = (min: number, max?: number) => {
  if (max == null) { max = min; min = 0; }
  return min + Math.random() * (max - min);
};

const randomSign = () => (Math.random() < 0.5 ? 1 : -1);

class Blade {
  path: SVGPathElement;
  width: number;
  height: number;
  maxAngle: number;
  angle: number;
  coords: number[];
  growing: boolean = false;
  morphed: boolean = false;
  start: number = 0;
  height_: number;

  constructor(path: SVGPathElement, offset: number, width: number, height: number, maxHeight: number, startAngle: number) {
    this.path = path;
    this.width = random(1, 4);
    this.height_ = random(30, maxHeight);
    this.maxAngle = random(15, 35); 
    this.angle = Math.random() * randomSign() * startAngle * Math.PI / 180;

    const sx = offset / 2 + random(width - offset);
    const sy = height;
    const csx = sx - 1.5;
    const csy = sy - this.height_ / 2;

    this.coords = [sx, sy, csx, csy, csx, csy, sx + this.width, sy];
    this.height = 0; // Start at 0 to grow up
    
    const ambient = 0.85;
    const color = [
      Math.floor(random(40, 80) * ambient),  // Slightly brighter greens
      Math.floor(random(150, 220) * ambient),
      Math.floor(random(40, 80) * ambient)
    ];

    gsap.set(path, { fill: `rgb(${color.join(',')})` });
  }

  grow() {
    this.morphed = true;
    this.growing = false;
    // This animates the "height" property which the update() function uses
    gsap.to(this, { duration: random(2, 4), height: this.height_, ease: Power1.easeInOut });
  }

  update(time: number) {
    // 1. Initial Morph/Birth logic
    if (!this.morphed && !this.growing) {
      this.growing = true;
      this.start = time; 
      const sx = this.coords[0];
      const sy = this.coords[1];
      const d = `M${sx},${sy} L${sx + this.width},${sy} Z`;
      
      gsap.to(this.path, { 
        duration: random(1, 3), 
        attr: { d }, 
        onComplete: () => this.grow() 
      });
      return;
    }

    if (this.growing) return;

    // 2. Infinite Sway Logic
    // Using a combination of sine waves for natural "wind"
    const elapsed = time - this.start;
    const windSway = Math.sin(elapsed * 0.001) * 0.5 + Math.sin(elapsed * 0.0005) * 0.5;
    
    const th = this.angle + Math.PI / 2 + (windSway * (this.maxAngle * Math.PI / 180));
    
    const px = this.coords[0] + this.width / 2 + this.height * Math.cos(th);
    const py = this.coords[1] - this.height * Math.sin(th);

    const d = `M${this.coords[0]},${this.coords[1]} 
               C${this.coords[0]},${this.coords[1]} ${this.coords[2]},${this.coords[3]} ${px},${py} 
               C${px},${py} ${this.coords[4]},${this.coords[5]} ${this.coords[6]},${this.coords[7]} Z`;
    
    this.path.setAttribute("d", d);
  }
}

const Grass: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const bladesRef = useRef<Blade[]>([]);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const width = window.innerWidth;
    const height = 100; // Height of the SVG container
    const total = width / 8; // Density of grass

    for (let i = 0; i < total; i++) {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      svg.appendChild(path);
      bladesRef.current.push(new Blade(path, 10, width, height, height * 0.9, 20));
    }

    const ticker = (time: number) => {
      bladesRef.current.forEach(blade => blade.update(time));
    };

    gsap.ticker.add(ticker);

    return () => {
      gsap.ticker.remove(ticker);
      if (svg) svg.innerHTML = '';
      bladesRef.current = [];
    };
  }, []);

  return (
    <svg 
      ref={svgRef} 
      className="absolute bottom-0 left-0 w-full h-[100px] pointer-events-none"
      style={{ overflow: 'visible', filter: 'drop-shadow(0px -2px 2px rgba(0,0,0,0.1))' }}
    />
  );
};

export default Grass;