if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js');
};
import * as z from "./z.js";
const main = document.getElementById('main');
fetch('./s.json')
.then(e=>e.json())
.then(e=>{
  main.innerHTML = e.map(e=>`<img src="${e[1]}" data-audio="${e[2]}">`).join('');
  z.z('#ref')[0].innerHTML=e.map(e=>`<tr>${e.map(e=>`<td>${e}</td>`).join('')}</tr>`).join('');
}).catch(e=>console.log(e.message));
main.addEventListener('click',e=>{
  if (e.target.tagName === 'IMG') (new Audio(e.target.dataset.audio)).play();
});
document.getElementById('tabs').addEventListener('click', e=>{
  [...e.target.parentElement.children].forEach(e=>{e.classList.remove('active')});
  e.target.classList.add('active');
})
window.addEventListener('hashchange', e=>{
  const views = document.querySelectorAll('[data-view]');
  const selected = document.querySelector(`[data-view="${location.hash.substr(2)}"]`);
  views.forEach(e=>e.style.display = 'none');
  selected.style.display = '';
});