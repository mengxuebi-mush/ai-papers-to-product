/* Track menu, shared by every track. Each track is a self-contained page in its own folder
   (LLM track = index.html at the root, image track = images/, …); this file is the only thing they share.
   Pages load it as the first child of .topbar-in; it renders the track button there.
   Edit it only on main, and only when a track is added or launched (one line in TRACKS). Paths are relative to this file. */
(function(){
  const TRACKS=[
    {path:'',zh:'大语言模型与 Agent',en:'LLMs & agents',dzh:'从预训练到评估 agent',den:'From pretraining to evaluating agents'},
    {path:'images/',zh:'图像模型',en:'Image models',dzh:'扩散模型：从噪声到图片',den:'Diffusion: from noise to pictures',soon:true},
    {path:'hci/',zh:'人机协作',en:'Human–agent teaming',dzh:'即将推出',den:'Coming soon',soon:true}
  ];
  const me=document.currentScript,root=new URL('.',me.src);
  const here=location.pathname.replace(/index\.html$/,'');
  const pathOf=t=>new URL(t.path,root).pathname;
  const cur=TRACKS.filter(t=>here.startsWith(pathOf(t))).sort((a,b)=>pathOf(b).length-pathOf(a).length)[0];
  let lang='zh';try{if(localStorage.getItem('aem-lang')==='en')lang='en'}catch(e){}
  const tx=(zh,en)=>`<span data-zh="${zh}" data-en="${en}">${lang==='en'?en:zh}</span>`;
  const svg=d=>`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const items=TRACKS.map(t=>t.soon&&t!==cur
    ?`<span class="tm-item" aria-disabled="true"><b>${tx(t.zh,t.en)}</b><small>${tx(t.dzh,t.den)}</small></span>`
    :`<a class="tm-item" href="${new URL(t.path,root).href}"${t===cur?' aria-current="page"':''}><b>${tx(t.zh,t.en)}</b><small>${tx(t.dzh,t.den)}</small>${t===cur?svg('<path d="M5 12.5l4.5 4.5L19 7"/>'):''}</a>`).join('');
  me.insertAdjacentHTML('beforebegin',`<style>
.tm{position:relative;flex:none}
.tm-btn{display:inline-flex;align-items:center;gap:8px;height:36px;max-width:100%;padding:0 10px 0 12px;border:1px solid var(--line);border-radius:10px;background:var(--card);color:var(--ink);font:600 14px var(--sans);cursor:pointer;touch-action:manipulation;transition:background-color .15s ease-out,transform .15s ease-out}
.tm-btn > span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tm-btn svg{flex:none;width:14px;height:14px;color:var(--muted);transition:transform .15s ease-out}
.tm-btn[aria-expanded="true"] svg{transform:rotate(180deg)}
.tm-btn:active{transform:scale(.96)}
.tm-btn:focus-visible,.tm-item:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
.tm-sep{flex:none;width:1px;height:20px;background:var(--line)}
.tm-menu{position:absolute;top:calc(100% + 6px);left:0;z-index:var(--z-tooltip);width:min(288px,calc(100vw - 40px));padding:6px;border-radius:14px;background:var(--card);border:1px solid var(--line);box-shadow:0 1px 2px rgba(0,0,0,.06),0 8px 24px rgba(0,0,0,.12),0 24px 48px rgba(0,0,0,.08);display:grid;gap:2px;transform-origin:top left;opacity:0;transform:scale(.96)}
.tm-menu[data-open]{opacity:1;transform:none;transition:opacity .15s ease-out,transform .15s ease-out}
.tm-k{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);padding:6px 10px 4px}
.tm-item{display:grid;grid-template-columns:1fr 16px;gap:2px 10px;align-items:center;padding:9px 10px;border-radius:8px;color:var(--ink);text-decoration:none}
.tm-item b{font-size:14px;font-weight:600}
.tm-item small{grid-column:1;font-size:12px;color:var(--muted)}
.tm-item svg{grid-row:1 / span 2;grid-column:2;width:16px;height:16px}
.tm-item[aria-disabled]{color:var(--muted)}
@media (hover:hover) and (pointer:fine){.tm-btn:hover,a.tm-item:hover{background:var(--soft)}}
@media (prefers-reduced-motion:reduce){.tm-menu,.tm-btn svg{transform:none!important}}
@media (max-width:640px){.tm{flex:1 1 0;min-width:0}.tm-sep{display:none}}
</style><div class="tm"><button class="tm-btn" type="button" aria-expanded="false" aria-controls="tm-menu">${tx(cur.zh,cur.en)}${svg('<path d="M6 9l6 6 6-6"/>')}</button><div class="tm-menu" id="tm-menu" hidden><div class="tm-k">${tx('学习方向','Tracks')}</div>${items}</div></div><span class="tm-sep" aria-hidden="true"></span>`);
  const btn=me.parentNode.querySelector('.tm-btn'),menu=document.getElementById('tm-menu');
  function set(open,focusBack){
    if(!open&&menu.hidden)return;
    btn.setAttribute('aria-expanded',String(open));
    if(open){menu.hidden=false;requestAnimationFrame(()=>{menu.setAttribute('data-open','');menu.querySelector('a.tm-item').focus()})}
    else{menu.removeAttribute('data-open');menu.hidden=true;if(focusBack)btn.focus()}
  }
  btn.addEventListener('click',()=>set(menu.hidden));
  document.addEventListener('click',e=>{if(!e.target.closest('.tm'))set(false)});
  document.addEventListener('keydown',e=>{
    if(menu.hidden)return;
    if(e.key==='Escape'){set(false,true);return}
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){
      const its=[...menu.querySelectorAll('a.tm-item')],i=its.indexOf(document.activeElement);
      e.preventDefault();its[(i+(e.key==='ArrowDown'?1:its.length-1))%its.length].focus();
    }
  });
})();
