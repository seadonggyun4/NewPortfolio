"use client";
import module from '@/layout/titlesection.module.css'
import {useEffect} from "react";
import { getRandom } from "@/utils/utils";
import Particle from "@/plugin/particle";


// Particle Style 전역변수
const particleStyle: Record<string, any> = {
    'amount': 3,
    'vx' : 2,
    'vy' : 4,
    'size' : 10,
};

const setParticle = (canvas:HTMLCanvasElement) => {
    // 캔버스 세팅
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight;

    // ctx세팅
    let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.globalCompositeOperation = "source-over";

    // particles 변수 생성
    let particles:Array<Object> = [];
    let pIndex:number = 0;
    let x:number, y:number, frameId:number;


    function drawParticle(){
        ctx.clearRect(0,0, canvas.width, canvas.height);

        if(frameId % (11-particleStyle.amount) == 0){
            const x = canvas.width*Math.random()+canvas.width/2*Math.random();

            // 파티클 생성
           const particle = new Particle(
                    x,
                    -1 * getRandom(particleStyle.vx - 2, particleStyle.vx),
                    getRandom(particleStyle.vy - 2, particleStyle.vy),
                    particleStyle.size,
                    canvas,
               pIndex%2 === 0 ? '#5e96ff' : '#fff',
                    pIndex
                );
           particles.push(particle)
           pIndex++
        }

        for(var i in particles){
            const particle = particles[i]
            particle.setDrawData();

            // draw Particle
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.moveTo(particle.x+particle.x/2, particle.y+particle.y/2);
            ctx.lineTo(particle.x+particle.x/2+particle.width/2, particle.y+particle.y/2+particle.height);
            ctx.lineTo(particle.x+particle.x/2+particle.width+particle.width/2, particle.y+particle.y/2+particle.height);
            ctx.lineTo(particle.x+particle.x/2+particle.width, particle.y+particle.y/2);
            ctx.closePath();
            ctx.fill();

            if(particle.life >= particle.maxlife){
                delete particles[particle.id];
            }
        }
        frameId = requestAnimationFrame(drawParticle);
        if(frameId % 2 == 0) { return; }
    }
    drawParticle();


    window.addEventListener("resize", function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        x = canvas.width / 2;
        y = canvas.height / 2;
    });
}



export default function TitleSection() {
    useEffect(() => {
        const canvas = document.querySelector("#titleCanvas canvas") as HTMLCanvasElement;
        setParticle(canvas!)
    }, [])


  return (
      <section className={module.titleSection}>
          <div className={module.title}>
              <div>
                  <span >Welcome</span> <span >to</span> <span>the</span>
              </div>
              <div>
                  <span >portfolio</span>
              </div>
              <div>
                  <span >of</span> <span>DongGyun</span>
              </div>
          </div>
          <div id="titleCanvas" className={module.titleCanvas}>
              <canvas></canvas>
          </div>
      </section>
  );
}
