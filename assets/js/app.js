const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.classList.add('js');

const IMG_SRC = id => `assets/img/${id}.jpg`;

const CATS=[{id:'tous',label:'Tout voir'},{id:'cafe',label:'Café'},{id:'the',label:'Thé'},{id:'frites',label:'Frites'},{id:'pates',label:'Spaghettis'},{id:'couscous',label:'Couscous & grillades'},{id:'sandwich',label:'Sandwichs'},{id:'salade',label:'Salades & œufs'}];
const ITEMS=[
 ['Café classique',500,'cafe','p0001'],['Café intense',550,'cafe','p0002'],['Café corsé',600,'cafe','p0003'],
 ['Cappuccino',700,'cafe','p0004'],['Café express',400,'cafe','p0005'],['Café allongé',500,'cafe','p0006'],
 ['Chocolat au lait',800,'cafe','p0007'],['Thé au citron',350,'the','p0008'],['Thé au gingembre',500,'the','p0009'],
 ['Thé à la menthe',400,'the','p0010'],['Frites barquette',1000,'frites','p0011'],['Frites moyennes',600,'frites','p0012'],
 ['Spaghettis à la viande',1500,'pates','p0013'],['Spaghettis au poulet',1300,'pates','p0014'],['Spaghettis au thon',1400,'pates','p0015'],
 ['Couscous au poulet',1700,'couscous','p0016'],['Couscous au bœuf',1800,'couscous','p0017'],['Cuisses de poulet braisé',2500,'couscous','p0018'],
 ['Sandwich au thon',1000,'sandwich','p0019'],['Sandwich au poulet',1500,'sandwich','p0020'],['Sandwich au bœuf',2000,'sandwich','p0021'],
 ['Salade verte',1100,'salade','p0022'],['Salade César',1500,'salade','p0023'],['Omelette',1000,'salade','p0024']];
const LABEL=Object.fromEntries(CATS.map(c=>[c.id,c.label]));
const fmt=n=>n.toLocaleString('fr-FR').replace(/ | /g,' ')+' F';

/* ---------- 1. titre : découpe en mots, entrée 3D ---------- */
document.querySelectorAll('h1[data-split] .ln').forEach(ln=>{
  ln.innerHTML = ln.textContent.trim().split(' ')
    .map(w=>`<span class="w">${w}</span>`).join(' ');
});
let wi=0;
document.querySelectorAll('h1 .w').forEach(w=>{ w.style.transitionDelay=(wi++*70)+'ms'; });
requestAnimationFrame(()=>requestAnimationFrame(()=>document.documentElement.classList.add('go')));

/* ---------- 2. vapeur : particules sur canvas ---------- */
(function steam(){
  if(RM) return;
  const c=document.getElementById('steam'), x=c.getContext('2d');
  let W,H,parts=[];
  const css=getComputedStyle(document.documentElement);
  function size(){ const r=c.getBoundingClientRect(); W=c.width=r.width*devicePixelRatio; H=c.height=r.height*devicePixelRatio; }
  function spawn(){
    return {x:(0.12+Math.random()*0.5)*W, y:H*(0.75+Math.random()*0.3), r:(18+Math.random()*46)*devicePixelRatio,
            v:(0.25+Math.random()*0.65)*devicePixelRatio, a:0, life:0, max:220+Math.random()*180, drift:(Math.random()-0.5)*0.5};
  }
  size(); addEventListener('resize',size);
  for(let i=0;i<26;i++){ const p=spawn(); p.life=Math.random()*p.max; parts.push(p); }
  let t=0;
  (function loop(){
    x.clearRect(0,0,W,H); t+=0.01;
    const warm = css.getPropertyValue('--orange').trim()||'#E0591A';
    parts.forEach(p=>{
      p.life++; if(p.life>p.max){ Object.assign(p,spawn()); }
      const k=p.life/p.max;
      p.y-=p.v; p.x+=Math.sin(t*2+p.y*0.004)*0.6+p.drift;
      const alpha=Math.sin(k*Math.PI)*0.13;
      const g=x.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*(0.6+k));
      g.addColorStop(0,`rgba(255,244,228,${alpha})`);
      g.addColorStop(1,'rgba(255,244,228,0)');
      x.fillStyle=g; x.beginPath(); x.arc(p.x,p.y,p.r*(0.6+k),0,6.284); x.fill();
    });
    requestAnimationFrame(loop);
  })();
})();

/* ---------- 3. halo qui suit le curseur ---------- */
(function glow(){
  if(RM) return;
  const el=document.getElementById('glow'), hero=document.getElementById('hero');
  let tx=innerWidth*0.25, ty=340, cx=tx, cy=ty;
  hero.addEventListener('pointermove',e=>{ const r=hero.getBoundingClientRect(); tx=e.clientX-r.left; ty=e.clientY-r.top; });
  (function l(){ cx+=(tx-cx)*0.07; cy+=(ty-cy)*0.07; el.style.setProperty('--gx',cx+'px'); el.style.setProperty('--gy',cy+'px'); requestAnimationFrame(l); })();
})();

/* ---------- 4. pile de photos : inclinaison 3D ---------- */
(function tilt(){
  if(RM) return;
  const cl=document.getElementById('cluster'), stage=cl.parentElement;
  stage.addEventListener('pointermove',e=>{
    const r=stage.getBoundingClientRect();
    const px=(e.clientX-r.left)/r.width-0.5, py=(e.clientY-r.top)/r.height-0.5;
    cl.classList.add('drag');
    cl.style.setProperty('--rx',(px*22).toFixed(2)+'deg');
    cl.style.setProperty('--ry',(-py*16).toFixed(2)+'deg');
  });
  stage.addEventListener('pointerleave',()=>{ cl.classList.remove('drag'); cl.style.setProperty('--rx','0deg'); cl.style.setProperty('--ry','0deg'); });
})();

/* ---------- 5. compteurs ---------- */
function countUp(el){
  const to=+el.dataset.count, suf=el.dataset.suffix||'', dur=1100, t0=performance.now();
  (function step(t){
    const k=Math.min(1,(t-t0)/dur), e=1-Math.pow(1-k,3);
    el.textContent=Math.round(to*e).toLocaleString('fr-FR')+suf;
    if(k<1) requestAnimationFrame(step);
  })(t0);
}
document.querySelectorAll('[data-count]').forEach(el=>{
  if(RM){ el.textContent=(+el.dataset.count).toLocaleString('fr-FR')+(el.dataset.suffix||''); return; }
  setTimeout(()=>countUp(el),700);
});

/* ---------- 6. bandeau : vitesse pilotée par le scroll ---------- */
(function ribbon(){
  const track=document.getElementById('track');
  const bits=ITEMS.slice(0,12).map(i=>`<span>${i[0]} · ${fmt(i[1])}</span>`).join('');
  track.innerHTML=bits+bits;
  if(RM) return;
  let x=0, half=0, vel=0, last=scrollY;
  addEventListener('scroll',()=>{ vel+=(scrollY-last)*0.35; last=scrollY; },{passive:true});
  (function l(){
    if(!half) half=track.scrollWidth/2;
    vel*=0.92;
    x-=0.9+Math.abs(vel)*0.25;
    if(half && -x>=half) x+=half;
    track.style.transform=`translate3d(${x}px,0,0)`;
    requestAnimationFrame(l);
  })();
})();

/* ---------- 7. anneau 3D ---------- */
(function ring(){
  const ring=document.getElementById('ring'), stage=document.getElementById('ringStage');
  const picks=['p0001','p0004','p0009','p0011','p0013','p0016','p0018','p0020','p0021','p0022','p0023','p0024'];
  const data=picks.map(id=>ITEMS.find(i=>i[3]===id));
  const N=data.length, STEP=360/N, R=Math.round((250/2)/Math.tan(Math.PI/N));
  ring.innerHTML=data.map(([name,price,,id],i)=>`
    <figure class="cell" style="transform:rotateY(${i*STEP}deg) translateZ(${R}px)">
      <img src="${IMG_SRC(id)}" alt="${name}" loading="lazy">
      <figcaption class="lbl"><b>${name}</b><span>${fmt(price)}</span></figcaption>
    </figure>`).join('');
  const cells=[...ring.children];
  let angle=0, target=0, auto=!RM, drag=false, lastX=0;
  function render(){
    ring.style.transform=`translateZ(-${R}px) rotateY(${angle}deg)`;
    cells.forEach((c,i)=>{
      const a=((i*STEP+angle)%360+360)%360;          // 0 = face au spectateur
      const facing=Math.cos(a*Math.PI/180);           // 1 devant, -1 derrière
      c.style.opacity=(0.35+0.65*(facing*0.5+0.5)).toFixed(3);
      c.style.filter=`brightness(${(0.55+0.45*(facing*0.5+0.5)).toFixed(3)})`;
    });
  }
  function loop(){
    if(auto && !drag) target-=0.055;
    angle+=(target-angle)*0.09;
    render();
    requestAnimationFrame(loop);
  }
  stage.addEventListener('pointerdown',e=>{ drag=true; lastX=e.clientX; stage.classList.add('grabbing'); stage.setPointerCapture(e.pointerId); });
  stage.addEventListener('pointermove',e=>{ if(!drag) return; target+=(e.clientX-lastX)*0.35; lastX=e.clientX; });
  ['pointerup','pointercancel'].forEach(ev=>stage.addEventListener(ev,()=>{ drag=false; stage.classList.remove('grabbing'); }));
  document.getElementById('ringNext').onclick=()=>{ target-=STEP; };
  document.getElementById('ringPrev').onclick=()=>{ target+=STEP; };
  const tg=document.getElementById('ringToggle');
  tg.onclick=()=>{ auto=!auto; tg.textContent=auto?'Pause':'Reprendre'; };
  if(RM) tg.textContent='Reprendre';
  render(); loop();
})();

/* ---------- 8. carte : onglets + cartes qui se retournent ---------- */
(function menu(){
  const tabsEl=document.getElementById('tabs'), grid=document.getElementById('grid');
  tabsEl.innerHTML=CATS.map((c,i)=>`<button type="button" class="tab" data-cat="${c.id}" aria-pressed="${i===0}">${c.label}</button>`).join('');
  grid.innerHTML=ITEMS.map(([name,price,cat,id])=>`
    <article class="card" data-cat="${cat}" tabindex="0">
      <div class="flip">
        <div class="face front">
          <img src="${IMG_SRC(id)}" alt="${name}" loading="lazy">
          <div class="cap"><h3>${name}</h3><span class="price">${fmt(price)}</span></div>
        </div>
        <div class="face back">
          <small>${LABEL[cat]}</small>
          <h3>${name}</h3>
          <div class="big">${fmt(price)}</div>
          <small>Au comptoir · à emporter</small>
        </div>
      </div>
    </article>`).join('');
  tabsEl.addEventListener('click',e=>{
    const b=e.target.closest('.tab'); if(!b) return;
    tabsEl.querySelectorAll('.tab').forEach(t=>t.setAttribute('aria-pressed',String(t===b)));
    const cat=b.dataset.cat; let n=0;
    grid.querySelectorAll('.card').forEach(card=>{
      const show=cat==='tous'||card.dataset.cat===cat;
      card.classList.toggle('hidden',!show); card.classList.remove('pop');
      if(show){
        const fl=card.querySelector('.flip');
        void card.offsetWidth; fl.style.animationDelay=(n++*32)+'ms';
        card.classList.add('pop');
        fl.addEventListener('animationend',()=>{ card.classList.remove('pop'); fl.style.animationDelay=''; },{once:true});
      }
    });
    const c=grid.querySelectorAll('.card:not(.hidden)').length;
    document.getElementById('count').textContent=
      c+(c>1?' plats affichés':' plat affiché')+' — '+b.textContent.toLowerCase();
  });
})();

/* ---------- 9. boutons magnétiques ---------- */
if(!RM) document.querySelectorAll('.magnet').forEach(b=>{
  b.addEventListener('pointermove',e=>{
    const r=b.getBoundingClientRect();
    b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*0.18}px,${(e.clientY-r.top-r.height/2)*0.3}px)`;
  });
  b.addEventListener('pointerleave',()=>{ b.style.transition='transform .4s cubic-bezier(.2,.7,.2,1)'; b.style.transform=''; setTimeout(()=>b.style.transition='',400); });
  b.addEventListener('pointerenter',()=>{ b.style.transition=''; });
});

/* ---------- 10. menu mobile ---------- */
(function burger(){
  const btn=document.getElementById('burger'), nav=document.getElementById('nav');
  const set=open=>{ nav.classList.toggle('open',open); btn.setAttribute('aria-expanded',String(open));
    btn.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu'); };
  btn.addEventListener('click',()=>set(!nav.classList.contains('open')));
  nav.addEventListener('click',e=>{ if(e.target.closest('a')) set(false); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&nav.classList.contains('open')){ set(false); btn.focus(); } });
  document.addEventListener('click',e=>{ if(nav.classList.contains('open')&&!e.target.closest('#nav')&&!e.target.closest('#burger')) set(false); });
  addEventListener('resize',()=>{ if(innerWidth>800) set(false); });
})();

/* ---------- 11. thème clair / sombre ---------- */
(function theme(){
  const root=document.documentElement, btn=document.getElementById('theme'), lbl=btn.querySelector('.lbl');
  const store={get(){try{return localStorage.getItem('fce-theme')}catch(e){return null}},
               set(v){try{localStorage.setItem('fce-theme',v)}catch(e){}}};
  const saved=store.get();
  if(saved==='dark'||saved==='light') root.dataset.theme=saved;
  const current=()=>root.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  const sync=()=>{ const c=current(); lbl.textContent=c==='dark'?'Sombre':'Clair'; btn.setAttribute('aria-label',
    c==='dark'?'Passer en thème clair':'Passer en thème sombre'); };
  btn.addEventListener('click',()=>{ const next=current()==='dark'?'light':'dark'; root.dataset.theme=next; store.set(next); sync(); });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{ if(!root.dataset.theme) sync(); });
  sync();
})();

/* ---------- 12. carte Google : affichée si le cadre se charge ---------- */
(function gmap(){
  const f=document.getElementById('gmap'), box=document.getElementById('mapBox');
  if(!f||!box) return;
  // Google refuse d'afficher le plan depuis un fichier local : on garde le plan dessine.
  if(!/^https?:$/.test(location.protocol)){ f.remove(); return; }
  f.addEventListener('load',()=>box.classList.add('live'));
})();

/* ---------- 13. révélations + barre de progression ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }),{rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
const bar=document.getElementById('progress');
addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-innerHeight;
  bar.style.width=(h>0?scrollY/h*100:0)+'%';
},{passive:true});
