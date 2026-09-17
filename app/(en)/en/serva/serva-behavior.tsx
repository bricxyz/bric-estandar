// @ts-nocheck
'use client';
import { useEffect } from 'react';

export default function ServaBehavior() {
  useEffect(() => {
    if (window.__bric_serva) return;
    window.__bric_serva = true;
    document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => e.preventDefault()));
    
    const rings=[...document.querySelectorAll('.ring')],btns=[...document.querySelectorAll('.leds button')];
    const show=i=>{rings.forEach((r,k)=>r.classList.toggle('on',k===i));btns.forEach((b,k)=>b.classList.toggle('on',k===i))};
    btns.forEach((b,i)=>{b.addEventListener('mouseenter',()=>show(i));b.addEventListener('focus',()=>show(i));b.addEventListener('click',()=>show(i))});
    document.querySelector('.leds').addEventListener('mouseleave',()=>show(-1));
    
  }, []);
  return null;
}
