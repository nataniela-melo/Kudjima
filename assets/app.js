/* Kudjima — shared data, shell (header/footer), order basket, favourites and page logic. */
(function(){
"use strict";
const PHONE = "244944547298";
const PHONE_TXT = "944 547 298";

/* ---------- Catálogo ---------- */
// imagem: ficheiro em img/ (troca o ficheiro com o mesmo nome para mudar a foto)
const PRODUCTS = [
 {id:"lagosta",name:"Lagosta",grp:"mariscos",img:"lagosta.jpg",sizes:[["",18950]],
  desc:"O marisco mais nobre da casa. Carne firme e adocicada, perfeita para ocasiões especiais.",
  prep:["Cozer 8 a 12 minutos em água com sal","Abrir ao meio e grelhar com manteiga e alho","Servir com limão e arroz branco"]},
 {id:"gamba",name:"Gamba",grp:"mariscos",img:"gamba.jpg",sizes:[["N01",17900]],
  desc:"Gamba de calibre grande (N01), ideal para grelhar inteira ou fazer ao alho.",
  prep:["Grelhar 2 a 3 minutos de cada lado","Saltear com alho, malagueta e azeite","Ótima em espetadas"]},
 {id:"camarao",name:"Camarão",grp:"mariscos",img:"camarao.jpg",sizes:[["N02",16500],["N03",15000],["N04",10500],["N05",8000]],
  desc:"Camarão por calibre, do N02 (maior) ao N05 (mais pequeno). Versátil para muamba, caril, arroz ou grelhado.",
  prep:["Calibres grandes: grelhar ou ao alho","Calibres pequenos: arroz de marisco, caril ou massa","Cozinhar pouco tempo para não endurecer"]},
 {id:"choco",name:"Choco",grp:"moluscos",img:"choco.jpg",sizes:[["GG",6500],["G",5800],["M",5600],["P",4950],["P-",3800],["P=",2520]],
  desc:"Choco limpo e selecionado. Fica tenro grelhado ou frito.",
  prep:["Grelhar com azeite e alho","Choco frito com limão","Cozinhar em lume forte e pouco tempo"]},
 {id:"polvo",name:"Polvo",grp:"moluscos",img:"polvo.jpg",sizes:[["G",6000],["P",3900]],
  desc:"Polvo para cozer e assar. O congelamento ajuda a deixá-lo mais tenro.",
  prep:["Cozer em água sem sal cerca de 40 minutos","Assar no forno com batata a murro","Salada de polvo com cebola e coentros"]},
 {id:"lulas",name:"Lulas",grp:"moluscos",img:"lulas.jpg",sizes:[["",2950]],
  desc:"Lulas para fritar em argolas, grelhar ou rechear.",
  prep:["Argolas panadas e fritas","Grelhadas com molho verde","Recheadas no forno"]},
 {id:"garopa",name:"Garopa",grp:"peixes",img:"garopa.jpg",sizes:[["G",6750],["M",6350],["P",4200],["P-",3500]],
  desc:"Peixe de carne branca e firme, muito apreciado em Angola. Excelente grelhado ou em calulu.",
  prep:["Grelhar em postas","Calulu de peixe","Caldeirada"]},
 {id:"corvina",name:"Corvina",grp:"peixes",img:"corvina.jpg",sizes:[["GGG Preto",4900],["GG",4800],["GG Preto",4600],["G",4950],["G Preto",4400],["M",4500],["M Preto",3800],["P",3500],["P Preto",3300]],
  desc:"Corvina em vários tamanhos, também na variedade preta. Sabor suave e tradição na mesa angolana.",
  prep:["Grelhada inteira ou em postas","Cozida com legumes","Assada no forno"]},
 {id:"linguado",name:"Linguado",grp:"peixes",img:"linguado.jpg",sizes:[["GG",5950],["G",5400],["M",4300],["PI",4200],["P",3000],["P-",2700],["P=",1950]],
  desc:"Peixe leve e delicado, com poucas espinhas. Ótimo para toda a família.",
  prep:["Frito com farinha","Grelhado com manteiga e limão","No forno com natas"]},
 {id:"bacalhau",name:"Bacalhau",grp:"peixes",img:"bacalhau.jpg",sizes:[["GG",6500],["G",5500],["M",4600],["P",3900],["P-",3800],["P=",2950]],
  desc:"Bacalhau em vários tamanhos para os pratos de sempre.",
  prep:["Bacalhau à Brás","Com grão e ovo cozido","Assado com batatas"]},
 {id:"cachucho",name:"Cachucho",grp:"peixes",img:"cachucho.jpg",sizes:[["GGG",4800],["GG",3850],["G",3600],["M",3750]],
  desc:"Peixe avermelhado de carne saborosa, muito usado na cozinha angolana.",
  prep:["Grelhado inteiro","Cozido com funge","Frito"]},
 {id:"carapau",name:"Carapau",grp:"peixes",img:"carapau.jpg",sizes:[["GG",3800],["G",3900],["M",3600],["P",2850],["P-",2650]],
  desc:"O clássico do dia a dia. Rico em ómega 3 e com ótimo preço.",
  prep:["Grelhado com sal grosso","Frito","Escabeche"]},
 {id:"espada",name:"Espada",grp:"peixes",img:"espada.jpg",sizes:[["G",3450],["M",3200],["P",2950],["P-",1600]],
  desc:"Peixe-espada de carne macia, ideal em filetes.",
  prep:["Filetes fritos","Grelhado em postas","No forno com legumes"]},
 {id:"raia",name:"Raia",grp:"peixes",img:"raia.jpg",sizes:[["",2950]],
  desc:"Raia para cozer ou fazer em caldeirada.",
  prep:["Cozida com batata","Caldeirada","Frita"]},
 {id:"bagre",name:"Bagre",grp:"peixes",img:"bagre.jpg",sizes:[["",4950]],
  desc:"Bagre selecionado, ótimo para caldeirada e calulu.",
  prep:["Calulu","Caldeirada","Grelhado"]},
 {id:"banana",name:"Peixe banana",grp:"peixes",img:"peixe-banana.jpg",sizes:[["Grand",4900],["GG",3900],["G",3500],["M",2900],["P",2800],["P-",1900]],
  desc:"Peixe banana em seis tamanhos, para grelhar ou fritar.",
  prep:["Grelhado","Frito","Cozido"]},
 {id:"pescada",name:"Pescada",grp:"peixes",img:"pescada.jpg",sizes:[["P",2950],["P Preto",2750]],
  desc:"Pescada de carne branca e leve.",
  prep:["Cozida com legumes","Filetes fritos","No forno"]},
 {id:"lambula",name:"Lâmbula",grp:"peixes",img:"lambula.jpg",sizes:[["M",2250],["P",1850]],
  desc:"Lâmbula simples e saborosa, para fritar ou grelhar.",
  prep:["Frita","Grelhada","Escabeche"]}
];
const BY = Object.fromEntries(PRODUCTS.map(p=>[p.id,p]));
const GROUPS = {mariscos:"Mariscos",peixes:"Peixes",moluscos:"Choco, polvo e lulas"};
const GROUP_TAG = {mariscos:"Marisco",peixes:"Peixe",moluscos:"Molusco"};
const FEATURED = ["lagosta","camarao","garopa","polvo","linguado","choco","corvina","cachucho"];

/* ---------- Utilitários ---------- */
const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const kz = n=>String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,".")+" Kz";
const norm = s=>String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const esc = s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const img = f=>"img/"+f;
const label = (p,i)=>p.name+(p.sizes[i][0]?" ("+p.sizes[i][0]+")":"");
const minPrice = p=>Math.min(...p.sizes.map(s=>s[1]));
const waUrl = m=>"https://wa.me/"+PHONE+"?text="+encodeURIComponent(m);
const store = {
  get(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v??d}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
const I = n=>`<svg aria-hidden="true"><use href="#i-${n}"/></svg>`;

/* ---------- Ícones ---------- */
const ICONS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
<symbol id="i-wa" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.6l-.4-.3-3.8 1.2 1.2-3.7-.3-.4a10.4 10.4 0 0 1-1.7-5.7C5.1 10 10 5.3 16 5.3S26.9 10 26.9 15.8 22 26.4 16 26.4zm6-7.8c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5 1-1.8.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.8 5 2.2.9 3 .9 4.1.8.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></symbol>
<g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
<symbol id="i-cart" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M3 4h2l2.4 11h10.2L20 8H6.2M9 19.5h.01M17 19.5h.01"/><circle cx="9" cy="19.5" r="1.3" fill="currentColor"/><circle cx="17" cy="19.5" r="1.3" fill="currentColor"/></symbol>
<symbol id="i-search" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></g></symbol>
<symbol id="i-heart" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M12 20s-7-4.4-9-8.6C1.6 8.3 3.6 5 7 5c2 0 3.3 1.1 5 3 1.7-1.9 3-3 5-3 3.4 0 5.4 3.3 4 6.4C19 15.6 12 20 12 20z"/></symbol>
<symbol id="i-eye" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></g></symbol>
<symbol id="i-menu" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4 7h16M4 12h16M4 17h10"/></symbol>
<symbol id="i-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></symbol>
<symbol id="i-left" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M15 6l-6 6 6 6"/></symbol>
<symbol id="i-up" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M6 15l6-6 6 6"/></symbol>
<symbol id="i-snow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 4l3 2 3-2M9 20l3-2 3 2"/></symbol>
<symbol id="i-leaf" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15zM5 19l8-8"/></symbol>
<symbol id="i-truck" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6h12v10H2zM14 9h4l4 4v3h-8"/><circle cx="6" cy="17.5" r="1.8"/><circle cx="18" cy="17.5" r="1.8"/></g></symbol>
<symbol id="i-shield" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6z"/><path d="m9 12 2 2 4-4"/></g></symbol>
<symbol id="i-fish" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c3-4 7-6 11-5 3 .6 5 2.6 6 5-1 2.4-3 4.4-6 5-4 1-8-1-11-5z"/><path d="M19 12l3-3v6zM15 11h.01"/></g></symbol>
<symbol id="i-boat" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15h18l-3 5H6zM12 3v12M12 4l6 9h-6"/></g></symbol>
<symbol id="i-box" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/></g></symbol>
<symbol id="i-chat" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M4 5h16v11H9l-5 4z"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5 9-10"/></symbol>
<symbol id="i-tag" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 12V3h9l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.5"/></g></symbol>
<symbol id="i-pin" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></g></symbol>
<symbol id="i-card" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></g></symbol>
<symbol id="i-filter" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M4 6h16M7 12h10M10 18h4"/></symbol>
<symbol id="i-star" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></symbol>
</g></svg>`;

/* ---------- Shell ---------- */
const NAV = [["index.html","Início","home"],["loja.html","Loja","shop"],["sobre.html","Sobre nós","about"],["contacto.html","Contacto","contact"]];
function shell(page){
  document.body.insertAdjacentHTML("afterbegin", ICONS + `
  <div class="info"><div class="wrap">
    <span>${I("wa")}Encomendas pelo WhatsApp: ${PHONE_TXT}</span>
    <span class="hm">${I("snow")}Congelado para manter a qualidade</span>
    <span class="hm">${I("truck")}Entrega ao domicílio</span>
  </div></div>
  <header class="hdr" id="hdr"><div class="wrap">
    <a class="brand" href="index.html" aria-label="Kudjima, início"><img src="img/logo.png" alt=""><span class="wm"><b>KUDJIMA</b><small>O sabor do mar</small></span></a>
    <nav class="menu" aria-label="Principal">${NAV.map(([h,t,k])=>`<a href="${h}" class="${k===page?"on":""}">${t}</a>`).join("")}</nav>
    <div class="tools">
      <button class="ib" type="button" id="openSearch" aria-label="Procurar">${I("search")}</button>
      <a class="ib" href="loja.html#favoritos" aria-label="Favoritos">${I("heart")}<span class="n" id="favN" hidden>0</span></a>
      <button class="ib" type="button" id="openCart" aria-label="Ver encomenda">${I("cart")}<span class="n" id="cartN">0</span></button>
      <button class="ib burger" type="button" id="openMenu" aria-label="Menu">${I("menu")}</button>
    </div>
  </div></header>`);
  document.body.insertAdjacentHTML("beforeend", `
  <footer class="ftr"><div class="wrap">
    <div class="cols">
      <div><a class="brand" href="index.html"><img src="img/logo.png" alt=""><span class="wm"><b>KUDJIMA</b><small>O sabor do mar</small></span></a>
        <p style="margin-top:16px">Marisco e peixe comprados a pescadores locais, congelados com cuidado e entregues à sua porta.</p></div>
      <div><h4>Navegação</h4><ul>${NAV.map(([h,t])=>`<li><a href="${h}">${t}</a></li>`).join("")}<li><a href="encomenda.html">A minha encomenda</a></li></ul></div>
      <div><h4>Loja</h4><ul><li><a href="loja.html#mariscos">Mariscos</a></li><li><a href="loja.html#peixes">Peixes</a></li><li><a href="loja.html#moluscos">Choco, polvo e lulas</a></li><li><a href="loja.html#favoritos">Favoritos</a></li></ul></div>
      <div><h4>Contacto</h4><ul><li>WhatsApp: +244 ${PHONE_TXT}</li><li>Entrega ao domicílio</li></ul>
        <h4 style="margin-top:20px">Pagamento</h4><div class="pay"><span>Transferência</span><span>Multicaixa Express</span><span>Numerário</span></div></div>
    </div>
    <div class="bottom"><span>© 2026 Kudjima · Produto 100% angolano</span><span>Entrega · Frescura · Qualidade</span></div>
  </div></footer>
  <a class="fab" data-wa="Olá Kudjima! Gostaria de saber mais sobre os vossos produtos." href="#" aria-label="Falar no WhatsApp">${I("wa")}</a>
  <button class="totop" id="totop" type="button" aria-label="Voltar ao topo">${I("up")}</button>
  <div id="layer"></div>`);
  bindWa(document);
  $("#openSearch").onclick=openSearch;
  $("#openCart").onclick=openDrawer;
  $("#openMenu").onclick=()=>openMenu(page);
  const hdr=$("#hdr"), top=$("#totop");
  const onScroll=()=>{hdr.classList.toggle("scrolled",scrollY>20);top.classList.toggle("on",scrollY>700)};
  addEventListener("scroll",onScroll,{passive:true}); onScroll();
  top.onclick=()=>scrollTo({top:0,behavior:"smooth"});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLayer()});
}
function bindWa(root){$$("[data-wa]",root).forEach(a=>{a.href=waUrl(a.dataset.wa);a.target="_blank";a.rel="noopener"})}
const layer=()=>$("#layer");
function closeLayer(){layer().innerHTML="";document.documentElement.style.overflow=""}
function openLayer(html){layer().innerHTML=html;document.documentElement.style.overflow="hidden";const s=$(".scrim",layer());if(s)s.onclick=closeLayer;$$("[data-close]",layer()).forEach(b=>b.onclick=closeLayer)}

function openMenu(page){
  openLayer(`<div class="scrim"></div><nav class="mnav" aria-label="Menu">
    <button class="x" data-close type="button" aria-label="Fechar" style="align-self:flex-end;margin-bottom:10px">✕</button>
    ${NAV.map(([h,t,k])=>`<a href="${h}" class="${k===page?"on":""}">${t}</a>`).join("")}<a href="encomenda.html">A minha encomenda</a>
    <a class="btn btn-wa" data-wa="Olá Kudjima! Gostaria de fazer uma encomenda." href="#">${I("wa")}Pedir no WhatsApp</a></nav>`);
  bindWa(layer());
}

function openSearch(){
  openLayer(`<div class="search-ov" role="dialog" aria-label="Procurar produtos">
    <button class="x close" data-close type="button" aria-label="Fechar">✕</button>
    <form id="sf">${I("search")}<input id="sq" type="search" placeholder="O que procura hoje?" autocomplete="off" aria-label="Procurar"></form>
    <div class="res" id="sr"></div></div>`);
  const q=$("#sq"),r=$("#sr");
  const draw=()=>{const v=norm(q.value.trim());const list=v?PRODUCTS.filter(p=>norm(p.name+" "+GROUPS[p.grp]).includes(v)):PRODUCTS.slice(0,6);
    r.innerHTML=(v?"":`<p style="color:var(--muted);margin:0 0 4px">Sugestões</p>`)+(list.length?list.map(p=>`<a href="produto.html#${p.id}"><img src="${img(p.img)}" alt=""><span>${esc(p.name)}<small>${GROUPS[p.grp]} · desde ${kz(minPrice(p))}</small></span></a>`).join(""):`<p style="color:var(--muted)">Nada encontrado. Pergunte-nos no WhatsApp.</p>`)};
  q.oninput=draw; draw(); setTimeout(()=>q.focus(),50);
  $("#sf").onsubmit=e=>{e.preventDefault();const a=$("a",r);if(a)location.href=a.getAttribute("href")};
}

/* ---------- Encomenda (cesto) ---------- */
let cart = store.get("kdj-cart",{});
let favs = store.get("kdj-favs",[]);
if(typeof cart!=="object"||Array.isArray(cart))cart={};
if(!Array.isArray(favs))favs=[];
for(const k in cart){const[id,i]=k.split(":");if(!BY[id]||!BY[id].sizes[+i]||!(cart[k]>0))delete cart[k]}
favs=favs.filter(id=>BY[id]);
const sel = {}; PRODUCTS.forEach(p=>sel[p.id]=0);
const listeners=[];
function onChange(fn){listeners.push(fn)}
function emit(){store.set("kdj-cart",cart);store.set("kdj-favs",favs);updateBadges();listeners.forEach(f=>f())}
function addToCart(k,n=1){cart[k]=(cart[k]||0)+n;if(cart[k]<=0)delete cart[k];emit()}
const cartCount=()=>Object.values(cart).reduce((a,b)=>a+b,0);
const cartTotal=()=>Object.keys(cart).reduce((s,k)=>{const[id,i]=k.split(":");return s+BY[id].sizes[+i][1]*cart[k]},0);
function updateBadges(){
  const n=$("#cartN"); if(n){const c=cartCount(); if(n.textContent!=String(c)){n.textContent=c;n.classList.remove("bump");void n.offsetWidth;n.classList.add("bump")}}
  const f=$("#favN"); if(f){f.textContent=favs.length;f.hidden=!favs.length}
}
function orderMessage(extra){
  const ks=Object.keys(cart);
  if(!ks.length)return "Olá Kudjima! Gostaria de fazer uma encomenda.";
  let m="Olá Kudjima! Gostaria de encomendar:\n"+ks.map(k=>{const[id,i]=k.split(":");const p=BY[id];return `• ${cart[k]}× ${label(p,+i)}: ${kz(p.sizes[+i][1]*cart[k])}`}).join("\n")+`\n\nTotal estimado: ${kz(cartTotal())}`;
  if(extra)m+="\n"+extra;
  return m;
}
function toast(msg){
  const t=document.createElement("div");t.className="toast";t.innerHTML=I("check")+`<span>${esc(msg)}</span>`;
  $$(".toast").forEach(x=>x.remove());document.body.appendChild(t);setTimeout(()=>t.remove(),2000);
}
function fly(fromImg){
  const target=$("#openCart"); if(!fromImg||!target||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const a=fromImg.getBoundingClientRect(), b=target.getBoundingClientRect();
  const f=document.createElement("img"); f.src=fromImg.currentSrc||fromImg.src; f.className="fly"; f.alt="";
  f.style.left=(a.left+a.width/2-35)+"px"; f.style.top=(a.top+a.height/2-35)+"px";
  document.body.appendChild(f);
  requestAnimationFrame(()=>{f.style.transform=`translate(${b.left+b.width/2-(a.left+a.width/2)}px,${b.top+b.height/2-(a.top+a.height/2)}px) scale(.2)`;f.style.opacity=".3"});
  setTimeout(()=>f.remove(),850);
}

function openDrawer(){
  openLayer(`<div class="scrim"></div><aside class="drawer" aria-label="A sua encomenda">
    <div class="dh"><h2>A sua encomenda</h2><button class="x" data-close type="button" aria-label="Fechar">✕</button></div>
    <div class="items" id="dItems"></div>
    <div class="tot"><span>Total estimado</span><b id="dTot"></b></div>
    <div class="btns"><a class="btn btn-wa" id="dSend" href="#">${I("wa")}Enviar pedido no WhatsApp</a><a class="btn btn-line" href="encomenda.html">Rever encomenda e morada</a></div>
  </aside>`);
  drawDrawer();
  $("#dItems").onclick=e=>{const b=e.target.closest("[data-k]");if(b)addToCart(b.dataset.k,+b.dataset.d)};
}
function drawDrawer(){
  const box=$("#dItems"); if(!box)return;
  const ks=Object.keys(cart);
  box.innerHTML=ks.length?ks.map(k=>{const[id,i]=k.split(":"),p=BY[id],pr=p.sizes[+i][1];
    return `<div class="dit"><img src="${img(p.img)}" alt=""><div><b>${esc(label(p,+i))}</b><small>${kz(pr)} × ${cart[k]}</small></div><div class="stepper"><button type="button" data-k="${k}" data-d="-1" aria-label="Menos">−</button><span>${cart[k]}</span><button type="button" data-k="${k}" data-d="1" aria-label="Mais">+</button></div></div>`}).join("")
    :`<div class="emp">${I("cart")}<p>A sua encomenda está vazia.<br>Escolha os produtos na loja.</p><a class="btn btn-coral" href="loja.html">Ir para a loja</a></div>`;
  $("#dTot").textContent=kz(cartTotal());
  const s=$("#dSend"); s.href=waUrl(orderMessage()); s.target="_blank"; s.rel="noopener"; s.hidden=!ks.length;
}
onChange(drawDrawer);

/* ---------- Cartão de produto ---------- */
function cardHTML(p,extra=""){
  const i=sel[p.id], k=p.id+":"+i, q=cart[k]||0, fav=favs.includes(p.id);
  const sizes=(p.sizes.length>1||p.sizes[0][0])
    ?`<div class="sizes" role="group" aria-label="Tamanho">${p.sizes.map((s,j)=>`<button class="sz" type="button" data-sz="${p.id}:${j}" aria-pressed="${j===i}">${esc(s[0])}</button>`).join("")}</div>`
    :`<span class="uniq">Tamanho único</span>`;
  const act=q?`<div class="stepper"><button type="button" data-k="${k}" data-d="-1" aria-label="Menos">−</button><span>${q}</span><button type="button" data-k="${k}" data-d="1" aria-label="Mais">+</button></div>`
             :`<button class="add" type="button" data-add="${k}">${I("cart")}Adicionar</button>`;
  return `<article class="pcard ${extra}" data-id="${p.id}">
    <a class="im" href="produto.html#${p.id}" tabindex="-1"><img src="${img(p.img)}" alt="${esc(p.name)}" loading="lazy"><span class="tag">${GROUP_TAG[p.grp]}</span></a>
    <div class="acts"><button class="fav ${fav?"on":""}" type="button" data-fav="${p.id}" aria-label="${fav?"Remover dos":"Adicionar aos"} favoritos" aria-pressed="${fav}">${I("heart")}</button><button class="qv" type="button" data-qv="${p.id}" aria-label="Vista rápida">${I("eye")}</button></div>
    <div class="bd"><h3><a href="produto.html#${p.id}">${esc(p.name)}</a></h3>${sizes}<div class="pf"><span class="price">${kz(p.sizes[i][1])}</span>${act}</div></div>
  </article>`;
}
function bindCards(root, redraw){
  root.addEventListener("click",e=>{
    const sz=e.target.closest("[data-sz]"); if(sz){const[id,j]=sz.dataset.sz.split(":");sel[id]=+j;redraw();return}
    const ad=e.target.closest("[data-add]"); if(ad){const k=ad.dataset.add,[id,i]=k.split(":");fly($("img",ad.closest(".pcard")));addToCart(k,1);toast(label(BY[id],+i)+" adicionado");return}
    const st=e.target.closest("[data-k]"); if(st){addToCart(st.dataset.k,+st.dataset.d);return}
    const fv=e.target.closest("[data-fav]"); if(fv){toggleFav(fv.dataset.fav);return}
    const qv=e.target.closest("[data-qv]"); if(qv){quickView(qv.dataset.qv);return}
  });
}
function toggleFav(id){const on=favs.includes(id);favs=on?favs.filter(x=>x!==id):[...favs,id];emit();toast(on?"Removido dos favoritos":BY[id].name+" nos favoritos")}

function quickView(id){
  const p=BY[id];
  const draw=()=>{
    const i=sel[id],k=id+":"+i,q=cart[k]||0;
    openLayer(`<div class="modal" id="qvm"><div class="mbox" role="dialog" aria-label="${esc(p.name)}">
      <button class="x" data-close type="button" aria-label="Fechar">✕</button>
      <div class="im"><img src="${img(p.img)}" alt="${esc(p.name)}"></div>
      <div class="bd"><span class="kicker" style="color:var(--aqua-2)">${GROUPS[p.grp]}</span><h2>${esc(p.name)}</h2><p>${esc(p.desc)}</p>
        ${(p.sizes.length>1||p.sizes[0][0])?`<div class="sizes">${p.sizes.map((s,j)=>`<button class="sz" type="button" data-sz="${id}:${j}" aria-pressed="${j===i}">${esc(s[0])}</button>`).join("")}</div>`:""}
        <div class="pf" style="margin-top:8px"><span class="price">${kz(p.sizes[i][1])}</span>${q?`<div class="stepper"><button type="button" data-k="${k}" data-d="-1">−</button><span>${q}</span><button type="button" data-k="${k}" data-d="1">+</button></div>`:`<button class="add" type="button" data-add="${k}">${I("cart")}Adicionar</button>`}</div>
        <a class="more" href="produto.html#${id}" style="color:var(--card-ink);margin-top:8px">Ver detalhes ${I("arrow")}</a>
      </div></div></div>`);
    $("#qvm").addEventListener("click",e=>{
      if(e.target.id==="qvm"){closeLayer();return}
      const sz=e.target.closest("[data-sz]"); if(sz){sel[id]=+sz.dataset.sz.split(":")[1];draw();return}
      const ad=e.target.closest("[data-add]"); if(ad){addToCart(ad.dataset.add,1);toast(label(p,sel[id])+" adicionado");draw();return}
      const st=e.target.closest("[data-k]"); if(st){addToCart(st.dataset.k,+st.dataset.d);draw()}
    });
  };
  draw();
}

/* ---------- Animações partilhadas ---------- */
function bubbles(canvas){
  if(!canvas||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const ctx=canvas.getContext("2d");let w,h,dpr=Math.min(devicePixelRatio||1,2),pts=[];
  const size=()=>{w=canvas.clientWidth;h=canvas.clientHeight;canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
    pts=Array.from({length:Math.round(w*h/14000)},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*2.6+.6,s:Math.random()*.35+.08,o:Math.random()*.5+.15,d:Math.random()*6.28}))};
  size();addEventListener("resize",size);
  (function tick(){ctx.clearRect(0,0,w,h);
    for(const p of pts){p.y-=p.s;p.d+=.01;p.x+=Math.sin(p.d)*.2;if(p.y<-10){p.y=h+10;p.x=Math.random()*w}
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.283);ctx.strokeStyle=`rgba(160,230,240,${p.o})`;ctx.lineWidth=1;ctx.stroke()}
    requestAnimationFrame(tick)})();
}
function countUp(el){
  const to=+el.dataset.to, pre=el.dataset.pre||"", suf=el.dataset.suf||"";
  if(matchMedia("(prefers-reduced-motion: reduce)").matches){el.textContent=pre+to+suf;return}
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(!e.isIntersecting)return;io.disconnect();const t0=performance.now();
    (function f(t){const k=Math.min(1,(t-t0)/1400),v=Math.round(to*(1-Math.pow(1-k,3)));el.textContent=pre+v+suf;if(k<1)requestAnimationFrame(f)})(t0)})});
  io.observe(el);
}
function railNav(rail,prev,next){
  const step=()=>rail.clientWidth*.8;
  prev.onclick=()=>rail.scrollBy({left:-step(),behavior:"smooth"});
  next.onclick=()=>rail.scrollBy({left:step(),behavior:"smooth"});
}

/* ---------- Páginas ---------- */
const PAGES={
 home(){
  bubbles($("#heroCanvas"));
  // slider
  const slides=$$(".show .slide"),dots=$("#dots");let cur=0,timer;
  dots.innerHTML=slides.map((_,i)=>`<button type="button" aria-label="Imagem ${i+1}" class="${i?"":"on"}"></button>`).join("");
  const go=i=>{slides[cur].classList.remove("on");dots.children[cur].classList.remove("on");cur=(i+slides.length)%slides.length;slides[cur].classList.add("on");dots.children[cur].classList.add("on")};
  const auto=()=>{clearInterval(timer);timer=setInterval(()=>go(cur+1),5000)};
  [...dots.children].forEach((b,i)=>b.onclick=()=>{go(i);auto()}); auto();
  // marquee
  const names=PRODUCTS.map(p=>p.name);$("#marq").innerHTML=[...names,...names].map(n=>`<span>${esc(n)}</span>`).join("");
  $$("[data-to]").forEach(countUp);
  // categorias
  $$("[data-count]").forEach(el=>el.textContent=PRODUCTS.filter(p=>p.grp===el.dataset.count).length+" produtos");
  // destaques
  const rail=$("#rail");const draw=()=>rail.innerHTML=FEATURED.map(id=>cardHTML(BY[id])).join("");
  draw();bindCards(rail,draw);onChange(draw);railNav(rail,$("#railPrev"),$("#railNext"));
 },
 shop(){
  bubbles($("#ptCanvas"));
  let grp="todos",q="",max=Math.max(...PRODUCTS.map(minPrice)),sort="rel",onlyFav=false;
  const MAXP=max;
  const h=location.hash.slice(1); if(GROUPS[h])grp=h; if(h==="favoritos")onlyFav=true;
  const opts=$("#cats");
  const cnt=g=>g==="todos"?PRODUCTS.length:PRODUCTS.filter(p=>p.grp===g).length;
  opts.innerHTML=[["todos","Todos"],...Object.entries(GROUPS)].map(([g,n])=>`<button class="opt" type="button" data-g="${g}" aria-pressed="${g===grp}">${n}<small>${cnt(g)}</small></button>`).join("");
  opts.onclick=e=>{const b=e.target.closest("[data-g]");if(!b)return;grp=b.dataset.g;$$(".opt",opts).forEach(o=>o.setAttribute("aria-pressed",o===b));draw()};
  const rg=$("#price"),rv=$("#priceV");rg.max=MAXP;rg.value=MAXP;rg.step=100;rv.textContent=kz(MAXP);
  rg.oninput=()=>{max=+rg.value;rv.textContent=kz(max);draw()};
  const fv=$("#onlyFav");fv.checked=onlyFav;fv.onchange=()=>{onlyFav=fv.checked;draw()};
  $("#q").oninput=e=>{q=norm(e.target.value.trim());draw()};
  $("#sort").onchange=e=>{sort=e.target.value;draw()};
  const side=$("#side");
  $("#openFilters").onclick=()=>{side.classList.add("open");layer().innerHTML=`<div class="scrim" style="z-index:89"></div>`;$(".scrim",layer()).onclick=()=>{side.classList.remove("open");layer().innerHTML=""}};
  $("#closeFilters").onclick=()=>{side.classList.remove("open");layer().innerHTML=""};
  $("#reset").onclick=()=>{grp="todos";q="";max=MAXP;sort="rel";onlyFav=false;rg.value=MAXP;rv.textContent=kz(MAXP);fv.checked=false;$("#q").value="";$("#sort").value="rel";$$(".opt",opts).forEach(o=>o.setAttribute("aria-pressed",o.dataset.g==="todos"));draw()};
  const grid=$("#grid");
  function draw(){
    let list=PRODUCTS.filter(p=>(grp==="todos"||p.grp===grp)&&(!q||norm(p.name).includes(q))&&minPrice(p)<=max&&(!onlyFav||favs.includes(p.id)));
    if(sort==="asc")list.sort((a,b)=>minPrice(a)-minPrice(b));
    if(sort==="desc")list.sort((a,b)=>minPrice(b)-minPrice(a));
    if(sort==="az")list.sort((a,b)=>a.name.localeCompare(b.name,"pt"));
    $("#count").textContent=list.length+(list.length===1?" produto":" produtos");
    grid.innerHTML=list.length?list.map(p=>cardHTML(p)).join(""):`<p class="empty">${onlyFav&&!favs.length?"Ainda não tem favoritos. Toque no coração de um produto para o guardar aqui.":"Nenhum produto com estes filtros. Experimente limpar os filtros ou pergunte-nos no WhatsApp."}</p>`;
  }
  draw();bindCards(grid,draw);onChange(draw);
 },
 product(){
  const id=location.hash.slice(1); const p=BY[id];
  if(!p){location.replace("loja.html");return}
  document.title=p.name+" · Kudjima";
  $("#crumbName").textContent=p.name; $("#crumbGrp").textContent=GROUPS[p.grp]; $("#crumbGrp").href="loja.html#"+p.grp;
  let qty=1;
  const box=$("#pd");
  function draw(){
    const i=sel[id],price=p.sizes[i][1],fav=favs.includes(id);
    box.innerHTML=`<div class="gal"><div class="main" id="zoomable"><img src="${img(p.img)}" alt="${esc(p.name)}"><span class="badge">${GROUP_TAG[p.grp]}</span></div></div>
    <div>
      <p class="kicker">${GROUPS[p.grp]}</p><h1>${esc(p.name)}</h1>
      <p class="desc">${esc(p.desc)}</p>
      <div class="bigprice">${kz(price)}${p.sizes[i][0]?`<small>tamanho ${esc(p.sizes[i][0])}</small>`:""}</div>
      ${(p.sizes.length>1||p.sizes[0][0])?`<p class="lbl">Escolha o tamanho</p><div class="sizes">${p.sizes.map((s,j)=>`<button class="sz" type="button" data-s="${j}" aria-pressed="${j===i}">${esc(s[0])} · ${kz(s[1])}</button>`).join("")}</div>`:""}
      <div class="qtyrow">
        <div class="qbox"><button type="button" data-q="-1" aria-label="Menos">−</button><span>${qty}</span><button type="button" data-q="1" aria-label="Mais">+</button></div>
        <button class="btn btn-coral" type="button" id="addP">${I("cart")}Adicionar · ${kz(price*qty)}</button>
        <button class="ib" type="button" id="favP" aria-pressed="${fav}" aria-label="Favorito" style="border:1px solid var(--line-2);color:${fav?"var(--coral)":"#fff"}"><svg style="fill:${fav?"currentColor":"none"}"><use href="#i-heart"/></svg></button>
      </div>
      <a class="btn btn-wa" style="margin-top:12px" data-wa="Olá Kudjima! Tenho uma pergunta sobre ${esc(label(p,i))}." href="#">${I("wa")}Perguntar no WhatsApp</a>
      <div class="facts"><span>${I("snow")}Congelado a -18 °C</span><span>${I("leaf")}Sem conservantes</span><span>${I("truck")}Entrega ao domicílio</span></div>
      <div class="tabs" role="tablist"><button class="tab" role="tab" aria-selected="true" data-t="0">Como preparar</button><button class="tab" role="tab" aria-selected="false" data-t="1">Conservação</button><button class="tab" role="tab" aria-selected="false" data-t="2">Entrega e pagamento</button></div>
      <div class="tabp" data-p="0"><ul>${p.prep.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
      <div class="tabp" data-p="1" hidden><ul><li>Guarde no congelador a -18 °C.</li><li>Descongele no frigorífico, de véspera, antes de cozinhar.</li><li>Não volte a congelar depois de descongelado.</li></ul></div>
      <div class="tabp" data-p="2" hidden><ul><li>Confirmamos peso, disponibilidade e hora de entrega pelo WhatsApp.</li><li>Entrega ao domicílio, combinada consigo.</li><li>Pagamento por transferência, Multicaixa Express ou numerário.</li></ul></div>
    </div>`;
    bindWa(box);
    const z=$("#zoomable"),zi=$("img",z);
    z.onmousemove=e=>{const r=z.getBoundingClientRect();zi.style.transformOrigin=`${(e.clientX-r.left)/r.width*100}% ${(e.clientY-r.top)/r.height*100}%`;zi.style.transform="scale(1.6)"};
    z.onmouseleave=()=>zi.style.transform="";
  }
  box.addEventListener("click",e=>{
    const s=e.target.closest("[data-s]"); if(s){sel[id]=+s.dataset.s;draw();return}
    const q=e.target.closest("[data-q]"); if(q){qty=Math.max(1,qty+ +q.dataset.q);draw();return}
    if(e.target.closest("#addP")){fly($("#zoomable img"));addToCart(id+":"+sel[id],qty);toast(qty+"× "+label(p,sel[id])+" adicionado");qty=1;draw();return}
    if(e.target.closest("#favP")){toggleFav(id);return}
    const t=e.target.closest("[data-t]"); if(t){$$(".tab",box).forEach(x=>x.setAttribute("aria-selected",x===t));$$(".tabp",box).forEach(x=>x.hidden=x.dataset.p!==t.dataset.t);return}
    if(e.target.closest("#zoomable")){openLayer(`<div class="zoom" data-close><img src="${img(p.img)}" alt="${esc(p.name)}"></div>`)}
  });
  draw(); onChange(draw);
  addEventListener("hashchange",()=>location.reload());
  const rel=PRODUCTS.filter(x=>x.grp===p.grp&&x.id!==id).slice(0,8);
  const rail=$("#rail");const dr=()=>rail.innerHTML=rel.map(x=>cardHTML(x)).join("");dr();bindCards(rail,dr);onChange(dr);railNav(rail,$("#railPrev"),$("#railNext"));
 },
 about(){bubbles($("#ptCanvas"));$$("[data-to]").forEach(countUp)},
 contact(){
  bubbles($("#ptCanvas"));
  $("#copyNum").onclick=async e=>{const b=e.currentTarget;try{await navigator.clipboard.writeText("+"+PHONE);b.textContent="Copiado"}catch(err){const r=document.createRange();r.selectNodeContents($("#numTxt"));const s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent="Selecionado"}setTimeout(()=>b.textContent="Copiar número",1800)};
  const f=$("#cform"),send=$("#cSend"),err=$("#cErr");
  const build=()=>{const n=$("#cName").value.trim(),t=$("#cType").value,m=$("#cMsg").value.trim(),z=$("#cZone").value.trim();
    return `Olá Kudjima! O meu nome é ${n||"(nome)"}.\nAssunto: ${t}${z?`\nZona: ${z}`:""}\n\n${m}`};
  const upd=()=>{send.href=waUrl(build());send.target="_blank";send.rel="noopener"};
  f.addEventListener("input",()=>{err.hidden=true;upd()});upd();
  send.addEventListener("click",e=>{if(!$("#cName").value.trim()||!$("#cMsg").value.trim()){e.preventDefault();err.hidden=false;err.textContent="Escreva o seu nome e a mensagem para podermos responder."}});
  f.onsubmit=e=>e.preventDefault();
 },
 order(){
  const list=$("#olist"),f=$("#oform");
  const extra=()=>{const n=$("#oName").value.trim(),z=$("#oZone").value.trim(),a=$("#oAddr").value.trim(),d=$("#oDate").value,o=$("#oObs").value.trim();
    return ["",n&&"Nome: "+n,z&&"Zona: "+z,a&&"Morada: "+a,d&&"Data preferida: "+new Date(d+"T12:00").toLocaleDateString("pt-PT"),o&&"Observações: "+o].filter(Boolean).join("\n")};
  function draw(){
    const ks=Object.keys(cart);
    list.innerHTML=ks.length?ks.map(k=>{const[id,i]=k.split(":"),p=BY[id],pr=p.sizes[+i][1];
      return `<div class="oit"><img src="${img(p.img)}" alt=""><div><b>${esc(label(p,+i))}</b><small>${kz(pr)} cada</small><br><button class="rm" type="button" data-rm="${k}">Remover</button></div><div class="stepper"><button type="button" data-k="${k}" data-d="-1" aria-label="Menos">−</button><span>${cart[k]}</span><button type="button" data-k="${k}" data-d="1" aria-label="Mais">+</button></div><span class="sum">${kz(pr*cart[k])}</span></div>`}).join("")
      :`<div class="empty" style="color:var(--card-muted)">A sua encomenda está vazia.<br><br><a class="btn btn-coral" href="loja.html">Escolher produtos</a></div>`;
    $("#oCount").textContent=cartCount();$("#oTot").textContent=kz(cartTotal());upd();
  }
  const upd=()=>{const s=$("#oSend");s.href=waUrl(orderMessage(extra()));s.target="_blank";s.rel="noopener";$("#oPrev").textContent=orderMessage(extra())};
  list.onclick=e=>{const r=e.target.closest("[data-rm]");if(r){delete cart[r.dataset.rm];emit();return}const b=e.target.closest("[data-k]");if(b)addToCart(b.dataset.k,+b.dataset.d)};
  f.addEventListener("input",upd);f.onsubmit=e=>e.preventDefault();
  $("#oSend").addEventListener("click",e=>{if(!Object.keys(cart).length){e.preventDefault();toast("Adicione pelo menos um produto")}});
  $("#oDate").min=new Date().toISOString().slice(0,10);
  draw();onChange(draw);
 }
};

/* ---------- Arranque ---------- */
function start(){
  const main=$("#page"); const page=main?main.dataset.page:"home";
  shell(page); updateBadges();
  bindWa(main||document);
  if(PAGES[page])PAGES[page]();
  addEventListener("storage",e=>{if(e.key==="kdj-cart"||e.key==="kdj-favs"){cart=store.get("kdj-cart",{});favs=store.get("kdj-favs",[]);updateBadges();listeners.forEach(f=>f())}});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
window.KUDJIMA={PRODUCTS};
})();
