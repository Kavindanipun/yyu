(()=>{
const img=document.getElementById('privacyFrame'), section=document.querySelector('.privacy-story'), bar=document.querySelector('.privacy-progress i');
const total=80, cache=[];
function src(i){return `frames/frame_${String(i).padStart(3,'0')}.jpg`}
function preload(){for(let i=0;i<total;i++){const x=new Image();x.src=src(i);cache.push(x)}}
let ticking=false;
function render(){
 const r=section.getBoundingClientRect();
 const travel=Math.max(1,section.offsetHeight-innerHeight);
 const p=Math.min(1,Math.max(0,-r.top/travel));
 const n=Math.min(total-1,Math.round(p*(total-1)));
 if(img.dataset.n!=n){img.src=src(n);img.dataset.n=n}
 bar.style.width=(p*100)+'%'; ticking=false;
}
addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(render);ticking=true}},{passive:true});
addEventListener('resize',render,{passive:true});
preload();render();
})();