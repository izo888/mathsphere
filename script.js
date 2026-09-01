
const menuBtn = document.querySelector('[data-menu]');
const nav = document.querySelector('[data-nav]');
if(menuBtn && nav){
  menuBtn.addEventListener('click', ()=> nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const lightbox = document.querySelector('.lightbox');
if(lightbox){
  const img = lightbox.querySelector('img');
  const close = ()=>lightbox.classList.remove('open');
  document.querySelectorAll('[data-lightbox]').forEach(el=>{
    el.addEventListener('click',()=>{
      img.src=el.dataset.full || el.querySelector('img').src;
      img.alt=el.querySelector('img')?.alt || 'Opinia';
      lightbox.classList.add('open');
    });
  });
  lightbox.addEventListener('click',(e)=>{if(e.target===lightbox) close()});
  lightbox.querySelector('.lightbox-close').addEventListener('click',close);
  window.addEventListener('keydown',(e)=>{if(e.key==='Escape') close()});
}
