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
    
    const FORMSPREE='';
    const form=document.querySelector('#contact form'),msg=document.querySelector('.form-msg'),boton=form.querySelector('button[type=submit]');
    const aviso=(texto,tipo)=>{msg.textContent=texto;msg.dataset.tipo=tipo||''};
    form.addEventListener('submit',async e=>{
      e.preventDefault();
      const v=n=>(form.querySelector(`[name="${n}"]`)||{}).value?.trim()||'';
      if(!v('nombre')||!v('email')||!v('mensaje')){aviso('Completá tu nombre, tu email y el mensaje.','error');return}
      if(!FORMSPREE){
        const cuerpo=[v('mensaje'),'','—',v('nombre'),v('empresa'),v('email')].filter(Boolean).join(String.fromCharCode(10));
        aviso('Se abrió tu programa de correo con el mensaje listo para enviar.');
        location.href='mailto:bric.xyz@gmail.com?subject='+encodeURIComponent('Consulta desde el sitio de BRIC')+'&body='+encodeURIComponent(cuerpo);
        return;
      }
      boton.disabled=true;aviso('Enviando…');
      try{
        const r=await fetch(FORMSPREE,{method:'POST',headers:{Accept:'application/json'},body:new FormData(form)});
        if(!r.ok)throw new Error(String(r.status));
        form.reset();aviso('Gracias, recibimos tu mensaje. Te respondemos a la brevedad.','ok');
      }catch(err){aviso('No pudimos enviar el mensaje. Probá de nuevo o escribinos a bric.xyz@gmail.com.','error')}
      finally{boton.disabled=false}
    });
    
    const media=document.querySelector('.sol-media');
    media.addEventListener('click',()=>media.classList.toggle('on'));
    media.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();media.classList.toggle('on')}});
    
    
  }, []);
  return null;
}
