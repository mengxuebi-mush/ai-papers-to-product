/* Track switcher, shared by every track. Each track is a self-contained page in its own folder
   (LLM track = index.html at the root, image track = images/, …); this file is the only thing they share.
   It changes only when a track is added or launched: one line in TRACKS. Paths are relative to this file. */
(function(){
  const TRACKS=[
    {path:'',zh:'大语言模型与 Agent',en:'LLMs & agents'},
    {path:'images/',zh:'图像模型',en:'Image models',soon:true},
    {path:'hci/',zh:'人机协作',en:'Human–agent teaming',soon:true}
  ];
  const me=document.currentScript,root=new URL('.',me.src);
  const here=location.pathname.replace(/index\.html$/,'');
  const pathOf=t=>new URL(t.path,root).pathname;
  const cur=TRACKS.filter(t=>here.startsWith(pathOf(t))).sort((a,b)=>pathOf(b).length-pathOf(a).length)[0];
  let lang='zh';try{if(localStorage.getItem('aem-lang')==='en')lang='en'}catch(e){}
  const label=t=>`<span data-zh="${t.zh}" data-en="${t.en}">${t[lang]}</span>`;
  const items=TRACKS.map(t=>t.soon&&t!==cur
    ?`<span class="trk trk-soon" aria-disabled="true">${label(t)}<small data-zh="即将" data-en="soon">${lang==='en'?'soon':'即将'}</small></span>`
    :`<a class="trk" href="${new URL(t.path,root).href}"${t===cur?' aria-current="page"':''}>${label(t)}</a>`).join('');
  me.insertAdjacentHTML('beforebegin',`<style>
.tracks{border-bottom:1px solid var(--line)}
.tracks-in{max-width:920px;margin:0 auto;padding:0 20px;display:flex;gap:20px;overflow-x:auto;scrollbar-width:none}
.tracks-in::-webkit-scrollbar{display:none}
.trk{flex:none;display:inline-flex;align-items:baseline;gap:6px;padding:9px 0 8px;font-size:13px;font-weight:500;color:var(--muted);text-decoration:none;white-space:nowrap;border-bottom:2px solid transparent;margin-bottom:-1px}
a.trk:hover{color:var(--ink)}
.trk[aria-current="page"]{color:var(--ink);font-weight:700;border-bottom-color:var(--ink)}
.trk.trk-soon{opacity:.6}
.trk small{font-size:11px}
</style><nav class="tracks" aria-label="Tracks"><div class="tracks-in">${items}</div></nav>`);
})();
