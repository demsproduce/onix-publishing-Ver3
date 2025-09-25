async function loadData(){ try{ const r=await fetch('assets/data/site.json'); return await r.json(); } catch(e){ return {artists:[],highlights:[]}; } }
document.addEventListener('DOMContentLoaded', async ()=>{
  const slides=[...document.querySelectorAll('.hero .slide')];
  const dots=[...document.querySelectorAll('.dot')];
  function go(i){ slides.forEach((s,idx)=>s.classList.toggle('active', idx===i)); dots.forEach((d,idx)=>d.classList.toggle('active', idx===i)); }
  dots.forEach(d=>d.addEventListener('click',()=>go(Number(d.dataset.slide)||0)));
  let i=0; setInterval(()=>{ i=(i+1)%slides.length; go(i); }, 6000);
  const data=await loadData();
  const artistsGrid=document.getElementById('artistsGrid');
  if(artistsGrid){ data.artists.forEach(a=>{ const item=document.createElement('div'); item.className='item'; item.innerHTML=`<img src="${a.img}" alt="${a.name}"><div class="label">${a.name} • ${a.role}</div>`; artistsGrid.appendChild(item); }); }
  const artistsPageGrid=document.getElementById('artistsPageGrid');
  if(artistsPageGrid){ data.artists.forEach(a=>{ const item=document.createElement('div'); item.className='item'; item.innerHTML=`<img src="${a.img}" alt="${a.name}"><div class="label">${a.name} • ${a.role} • PRO: ${a.pro}</div>`; artistsPageGrid.appendChild(item); }); }
});