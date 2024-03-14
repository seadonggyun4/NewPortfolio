import {getRandom} from "@/utils/utils";

//Particle
type ParticleType = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    id: number;
    life: number;
    maxlife: number;
    degree: number;
    size: number;
    draw: () => void;
};

// Particle 객체 생성
const Particle = function(this: ParticleType, x: number, vx: number, vy: number, size: number, canvas:HTMLCanvasElement, particles:Array<Object>, pIndex:number) {
    this.x = x;
    this.y = -canvas.height / 2;
    this.vx = vx;
    this.vy = vy;

    if(pIndex%2 === 0){
        this.color = '#5e96ff'; // Ensure that color is of type string
    }

    if(pIndex%2 !== 0){
        this.color = '#fff'; // Ensure that color is of type string
    }

    particles[pIndex] = this;
    this.id = pIndex;
    pIndex++;
    this.life = 0;
    this.maxlife = 600;
    this.degree = getRandom(0, 360);
    this.size = Math.floor(getRandom(size * 0.8, size));
    return [particles, pIndex];
}

// Particle을 그리기 위한 draw매서드
Particle.prototype.draw = function(ctx:CanvasRenderingContext2D, particles:Array<Object>){
    this.degree += 1;
    this.vx *= 0.99;//
    this.vy *= 0.999;//
    this.x += this.vx+Math.cos(this.degree*Math.PI/180);
    this.y += this.vy;
    this.width = this.size;
    this.height = Math.cos(this.degree*Math.PI/45)*this.size;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.x+this.x/2, this.y+this.y/2);
    ctx.lineTo(this.x+this.x/2+this.width/2, this.y+this.y/2+this.height);
    ctx.lineTo(this.x+this.x/2+this.width+this.width/2, this.y+this.y/2+this.height);
    ctx.lineTo(this.x+this.x/2+this.width, this.y+this.y/2);
    ctx.closePath();
    ctx.fill();
    this.life++;
    if(this.life >= this.maxlife){
        delete particles[this.id];
    }
    return particles
}

export default Particle