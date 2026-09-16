// @ts-nocheck
'use client';
import { useEffect } from 'react';

export default function HomeBehavior() {
  useEffect(() => {
    if (window.__bric_home) return;
    window.__bric_home = true;
    document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => e.preventDefault()));
    
    document.documentElement.classList.add('js');
    const header=document.getElementById('top');
    const onScroll=()=>header.classList.toggle('solid',scrollY>innerHeight-90&&!document.body.classList.contains('menu-open'));
    addEventListener('scroll',onScroll,{passive:true});onScroll();
    
    const btn=document.querySelector('.menu-btn'),menu=document.getElementById('menu'),label=btn.querySelector('span'),icon=btn.querySelector('svg');
    const setMenu=open=>{menu.classList.toggle('open',open);document.body.classList.toggle('menu-open',open);btn.setAttribute('aria-expanded',open);label.textContent=open?'CERRAR':'MENÚ';icon.innerHTML=open?'<path d="M18 6 6 18M6 6l12 12"/>':'<path d="M4 6h16M4 12h16M4 18h16"/>';onScroll();};
    btn.addEventListener('click',()=>setMenu(!menu.classList.contains('open')));
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
    addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
    
    document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>document.querySelectorAll('.lang button').forEach(x=>x.setAttribute('aria-pressed',x===b))));
    
    const media=document.querySelector('.sol-media');
    media.addEventListener('click',()=>media.classList.toggle('on'));
    media.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();media.classList.toggle('on')}});
    
    
  }, []);
  return null;
}
