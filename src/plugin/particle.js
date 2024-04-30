import {getRandom} from "@/utils/utils";

class Particle{
    // 초기 Particle값 세팅
    constructor(x, vx, vy, size, canvas, color, pIndex) {
        this.x = x;
        this.y = -canvas.height / 2;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.id = pIndex;
        this.life = 0;
        this.maxlife = 600;
        this.degree = getRandom(0, 360);
        this.size = Math.floor(getRandom(size * 0.8, size));
        this.width = this.size;
        this.height = 0
    }

    // Draw를 위한 Particle값 세팅
    setDrawData = () => {
        this.degree += 1;
        this.vx *= 0.99;//
        this.vy *= 0.999;//
        this.x += this.vx+Math.cos(this.degree*Math.PI/180);
        this.y += this.vy;
        this.height = Math.cos(this.degree*Math.PI/45)*this.size;
        this.life++;
    }
}


export default Particle