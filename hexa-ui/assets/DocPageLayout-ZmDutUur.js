import{R as u,d as K,r as h,N as ne,T as oe,bd as re,Z as E,O as ae,av as ce,aA as k,H as W,be as se}from"./iframe-DedYZBTA.js";import{n as ie}from"./blocks-Jd3tffSd.js";import{T as le}from"./TextReducer-DfctGdJH.js";import{c as de,d as ue,e as pe,f as he}from"./SubComponents-bNxy1m5y.js";const me="_anchorLink_ychui_1",ge="_content_ychui_5",fe="_navigation_ychui_10",ye="_items_ychui_27",be="_item_ychui_27",_e="_selected_ychui_45",ve="_elementAfter_ychui_55",_={anchorLink:me,content:ge,navigation:fe,items:ye,item:be,selected:_e,elementAfter:ve};function Y(e){return e.flatMap(t=>[t,...t.children?Y(t.children):[]])}function O(e){let t=e.parentElement;for(;t;){const n=getComputedStyle(t);if(/(auto|scroll)/.test(n.overflow+n.overflowY+n.overflowX))return t;t=t.parentElement}return document.documentElement}function we(e,t){return t===document.documentElement?e.getBoundingClientRect().top+window.scrollY:e.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop}function xe(e,t=24,n="smooth"){const o=document.getElementById(e);if(!o)return;const r=O(o);if(r===document.documentElement){const c=window.scrollY+o.getBoundingClientRect().top-t;window.scrollTo({top:c,behavior:n});return}const a=r.scrollTop+o.getBoundingClientRect().top-r.getBoundingClientRect().top-t;r.scrollTo({top:a,behavior:n})}function Ee(e){return e===document.documentElement?{"--nav-offset-top":"24px","--nav-max-height":"calc(100vh - 24px)"}:{"--nav-offset-top":0,"--nav-max-height":`${e.clientHeight-parseFloat(getComputedStyle(e).paddingTop)}px`}}const M=24;function N({item:e,level:t,onClick:n,selected:o}){return u.createElement(de,{className:K(_.item,o&&_.selected),"data-section":e.id,leftOffset:8+t*20,onClick:n,onKeyDown:r=>r.key==="Enter"?n():void 0,selected:o,tabIndex:0},u.createElement(ue,null,u.createElement(pe,{type:"BTR4"},u.createElement(le,{lineClamp:2},e.label))),e.elementAfter&&u.createElement(he,{className:_.elementAfter},e.elementAfter))}function L({items:e,style:t,title:n}){var d;const[o,r]=h.useState((d=e[0])==null?void 0:d.id),[a,c]=h.useState({}),m=h.useRef(null),g=h.useRef(!1);if(h.useEffect(()=>{if(!e.length)return;const s=O(m.current),l=s===document.documentElement?window:s,i=()=>{var q;const y=s.clientHeight,ee=s.scrollHeight,P=s.scrollTop,te=P+y>=ee-64,v=Y(e);let b="";if(te&&v.length>0)b=v[v.length-1].id;else{const T=P+M;b=(q=v[0])==null?void 0:q.id;for(const w of v){const x=document.getElementById(w.id);if(!x)continue;if(we(x,s)<=T)b=w.id;else break}}r(T=>{var w,x,A;return T!==b&&!g.current&&(b===v[0].id?(w=m.current)==null||w.scrollTo({top:0,behavior:"smooth"}):(A=(x=m.current)==null?void 0:x.querySelector(`[data-section="${b}"]`))==null||A.scrollIntoView({behavior:"smooth",block:"nearest"})),b})},p=()=>{g.current=!1};return l.addEventListener("scroll",i),l.addEventListener("scrollend",p),i(),c(Ee(s)),()=>{l.removeEventListener("scroll",i),l.removeEventListener("scrollend",p)}},[e]),!e.length)return null;function f(s,l=0){return u.createElement(u.Fragment,{key:s.id},u.createElement(N,{item:s,level:l,onClick:()=>{g.current=!0,xe(s.id,M)},selected:s.id===o}),s.children&&s.children.map(i=>f(i,l+1)))}return u.createElement(ne,{getPopupContainer:s=>s.parentElement},u.createElement("nav",{ref:m,className:_.navigation,style:{...t,...a}},n&&u.createElement(oe,{type:"BTM3"},n),u.createElement("div",{className:_.items},e.map(s=>f(s)))))}function D({children:e,className:t,items:n,title:o,...r}){return u.createElement("div",{...r,className:K(_.anchorLink,t)},u.createElement("div",{className:_.content},e),u.createElement(L,{items:n,title:o}))}try{N.displayName="NavigationItem",N.__docgenInfo={description:"",displayName:"NavigationItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"AnchorItem"}},level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"number"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}try{L.displayName="Navigation",L.__docgenInfo={description:"",displayName:"Navigation",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AnchorItem[]"}},title:{defaultValue:null,description:"Navigation panel title",name:"title",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{D.displayName="AnchorNavigation",D.__docgenInfo={description:"",displayName:"AnchorNavigation",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AnchorItem[]"}},title:{defaultValue:null,description:"Navigation panel title",name:"title",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"Page content",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ke="h3, h4, h5, h6",z="h2, h3, h4, h5, h6",Se=".docs-story, .hexa-docs-editor, .skip-toc, .docblock-argstable",Te=e=>e.trim().toLowerCase().replace(/[^a-z0-9\u0400-\u04ff\s-]/gi,"").replace(/\s+/g,"-").replace(/-+/g,"-"),X=e=>!!e.closest(Se),j=(e,t)=>{let n=e.id;if(!n){const o=Number(e.tagName.slice(1)),r=(e.textContent||"").trim(),a=Te(r)||`section-${o}`;n=a;let c=2;for(;t.has(n);)n=`${a}-${c}`,c+=1;e.id=n}return t.add(n),n},I=e=>{const t=e.querySelectorAll(ke),n=new Set;return Array.from(t).filter(o=>!X(o)).map(o=>{const r=Number(o.tagName.slice(1)),a=(o.textContent||"").trim();return a?{id:j(o,n),text:a,depth:r}:null}).filter(o=>o!==null)};try{I.displayName="collectDocumentationTocEntries",I.__docgenInfo={description:"",displayName:"collectDocumentationTocEntries",props:{}}}catch{}const Ae=24,Ce=e=>{var t;(t=document.querySelector(`.hexa-docs-content [id$="-tab-${CSS.escape(e)}"]`))==null||t.click()},Ne=(e,t="smooth")=>{const n=document.getElementById(decodeURIComponent(e));if(!n)return!1;const o=n.closest(".ant-tabs-tabpane");if(o&&!o.classList.contains("ant-tabs-tabpane-active"))return!1;const r=O(n),a=Ae;if(r===document.documentElement){const c=window.scrollY+n.getBoundingClientRect().top-a;window.scrollTo({top:c,behavior:t})}else{const c=r.scrollTop+n.getBoundingClientRect().top-r.getBoundingClientRect().top-a;r.scrollTo({top:c,behavior:t})}return!0},Le=(e,t,n=40,o=100,r="auto")=>{t&&Ce(t);let a=0;const c=()=>{Ne(e,r)||a>=n||(a+=1,window.setTimeout(c,o))};c()},De="/iframe.html",Z=e=>e.pathname.endsWith(De),U=e=>{const t=new URL(e.href);if(!Z(e))return t;const n=t.searchParams.get("id");if(!n)return t;const r=(t.searchParams.get("viewMode")??"story")==="docs"?`/docs/${n}`:`/story/${n}`,a=new URL(`${t.origin}/`);return a.searchParams.set("path",r),a},Ie=()=>{try{if(window.parent!==window&&window.parent.location.origin===window.location.origin){const e=U(window.parent.location);if(!Z(window.parent.location))return e}}catch{}return U(window.location)},$e=e=>{let t=e.replace(/^#/,"");try{t=decodeURIComponent(t)}catch{}if(!t)return{};const n=t.indexOf("/");return n===-1?{sectionId:t}:{tabKey:t.slice(0,n),sectionId:t.slice(n+1)||void 0}},Re=(e,t)=>{const n=Ie();return n.hash=t?`${t}/${e}`:e,n.toString()},He=()=>{try{if(window.parent!==window&&window.parent.location.origin===window.location.origin)return window.parent.location.hash||window.location.hash}catch{}return window.location.hash},S="hexa-docs-heading-anchor",J="hexa-docs-heading-row",B="hexa-docs-heading-link",Oe=2e3,Be=150,Pe='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M8.0436 2.4231c1.528-1.528 4.0055-1.528 5.5335 0s1.528 4.0055 0 5.5335l-1.71 1.71a.65.65 0 1 1-.9192-.9193l1.71-1.71c1.0203-1.0203 1.0203-2.6746 0-3.695s-2.6747-1.0203-3.695 0l-1.729 1.729a.65.65 0 0 1-.9192-.9193zm2.1419 3.3916a.65.65 0 0 1 0 .9193l-3.4512 3.4512a.65.65 0 1 1-.9192-.9192l3.4512-3.4513a.65.65 0 0 1 .9192 0M5.0627 7.2425a.65.65 0 1 0-.9192-.9192L2.4234 8.0434c-1.528 1.528-1.528 4.0054 0 5.5334s4.0054 1.5281 5.5334.0001l1.7106-1.7107a.65.65 0 1 0-.9192-.9192l-1.7106 1.7106c-1.0204 1.0204-2.6747 1.0204-3.695 0s-1.0203-2.6746 0-3.695z"/></svg>',C=(e,t)=>{e.classList.toggle("hexa-docs-heading-link--copied",t),e.setAttribute("aria-label",t?"Ссылка скопирована":"Скопировать ссылку на раздел")},qe=async e=>{var n;if((n=navigator.clipboard)!=null&&n.writeText)try{await navigator.clipboard.writeText(e);return}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();try{if(!document.execCommand("copy"))throw new Error("execCommand copy failed")}finally{document.body.removeChild(t)}},V=e=>{const t=document.createElement("button");return t.type="button",t.className=B,t.setAttribute("data-heading-id",e),t.setAttribute("aria-label","Скопировать ссылку на раздел"),t.innerHTML=Pe,t},Me=e=>(e==null?void 0:e.classList.contains(S))===!0||(e==null?void 0:e.classList.contains(J))===!0,Ue=(e,t)=>{var c,m;let n=e.parentElement;Me(n)?n.className=S:(n=document.createElement("div"),n.className=S,e.replaceWith(n),n.append(e,V(t)));const o=n.querySelector(`.${B}`)??(()=>{const g=V(t);return n.append(g),g})();o.getAttribute("data-heading-id")!==t&&o.setAttribute("data-heading-id",t);const r=e.closest(".ant-tabs-tabpane"),a=(m=(c=r==null?void 0:r.getAttribute("aria-labelledby"))==null?void 0:c.match(/-tab-(.+)$/))==null?void 0:m[1];return a?o.setAttribute("data-tab-key",a):o.removeAttribute("data-tab-key"),o.nextElementSibling!==e&&n.insertBefore(o,e),o},Ve=e=>{const t=new Set;e.querySelectorAll(z).forEach(n=>{if(X(n))return;const o=j(n,t);Ue(n,o)})},Fe=e=>{e.querySelectorAll(`.${S}, .${J}`).forEach(t=>{const n=t.querySelector(z);n?t.replaceWith(n):t.remove()})},$=e=>{h.useEffect(()=>{var s;const t=e.current;if(!t)return;const n=new WeakMap,o=async(l,i)=>{try{const p=i.getAttribute("data-tab-key")||void 0;await qe(Re(l,p)),C(i,!0);const y=n.get(i);y!==void 0&&clearTimeout(y),n.set(i,setTimeout(()=>{C(i,!1)},Oe))}catch{C(i,!1)}},r=l=>{const i=l.target;if(!(i instanceof Element))return;const p=i.closest(`.${B}`);if(!p||!t.contains(p))return;const y=p.getAttribute("data-heading-id");y&&(l.preventDefault(),l.stopPropagation(),o(y,p))},a=()=>{const{tabKey:l,sectionId:i}=$e(He());i&&Le(i,l)};let c;const m=()=>{c!==void 0&&clearTimeout(c),c=setTimeout(()=>{f()},Be)},g=new MutationObserver(m),f=()=>{g.disconnect(),Ve(t),g.observe(t,{childList:!0,subtree:!0})};t.addEventListener("click",r),f(),a();const d=()=>a();window.addEventListener("hashchange",d);try{(s=window.parent)==null||s.addEventListener("hashchange",d)}catch{}return()=>{var l;g.disconnect(),c!==void 0&&clearTimeout(c),t.removeEventListener("click",r),window.removeEventListener("hashchange",d);try{(l=window.parent)==null||l.removeEventListener("hashchange",d)}catch{}Fe(t)}},[e])};try{$.displayName="useDocumentationHeadingAnchors",$.__docgenInfo={description:"Adds per-heading copy-link controls and handles hash navigation in docs pages.",displayName:"useDocumentationHeadingAnchors",props:{}}}catch{}const Ge=["/story/","/docs/"],Ke=e=>{try{const t=new URL(e,window.location.href).searchParams.get("path");if(!t)return null;const n=Ge.find(r=>t.startsWith(r));return n&&t.slice(n.length).split(/[?&#]/)[0]||null}catch{return null}},R=e=>{h.useEffect(()=>{const t=e.current;if(!t)return;const n=o=>{if(o.defaultPrevented||o.button!==0||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey)return;const r=o.target;if(!(r instanceof Element))return;const a=r.closest("a");if(!a||!t.contains(a))return;const c=Ke(a.getAttribute("href")||"");c&&(o.preventDefault(),re({storyId:c}))};return t.addEventListener("click",n),()=>{t.removeEventListener("click",n)}},[e])};try{R.displayName="useDocumentationStoryLinks",R.__docgenInfo={description:"Turns internal `?path=/story/...` and `?path=/docs/...` links inside docs\ninto in-app Storybook navigation (no full page reload / new tab). Falls\nback to the anchor's default behaviour for modifier clicks and external links.",displayName:"useDocumentationStoryLinks",props:{}}}catch{}const{GLOBALS_UPDATED:F}=__STORYBOOK_MODULE_CORE_EVENTS__,We=e=>{if(!e)return{};try{const[t]=e.componentStories();if(t)return e.getStoryContext(t).globals??{}}catch{}return{}},Q=()=>{const e=h.useContext(ie),[t,n]=h.useState(()=>We(e));return h.useEffect(()=>{if(!(e!=null&&e.channel))return;const o=({globals:r})=>{n(r)};return e.channel.on(F,o),()=>{e.channel.off(F,o)}},[e]),t},Ye=e=>{const t=Q().theme;return t===E.Dark?E.Dark:t===E.Light?E.Light:e},ze=()=>Q().direction==="rtl"?"rtl":"ltr",Xe=100,je=se`
  html:has(.hexa-docs-content),
  body:has(.hexa-docs-content) {
    background: ${({$background:e})=>e} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) {
    padding: 0 !important;
    background: ${({$background:e})=>e} !important;
    color: ${({$color:e})=>e} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) > aside.sbdocs-toc--custom {
    display: none !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content),
  .sbdocs-wrapper:has(.hexa-docs-content) .sbdocs,
  .sbdocs-wrapper:has(.hexa-docs-content) .sbdocs.sbdocs-content {
    background: ${({$background:e})=>e} !important;
    color: ${({$color:e})=>e} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) .sbdocs.sbdocs-content {
    max-width: 1200px !important;
  }

  .hexa-docs-page {
    background: ${({$background:e})=>e};
  }

  .sbdocs-wrapper:has(.hexa-docs-content) :is(.docblock-argstable, .sb-argstableBlock) {
    color: ${({$color:e})=>e} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) :is(.docblock-argstable, .sb-argstableBlock) thead th {
    color: ${({$mutedColor:e})=>e} !important;
    border-bottom-color: ${({$border:e})=>e} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) :is(.docblock-argstable, .sb-argstableBlock) tbody tr {
    border-top-color: ${({$border:e})=>e} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) :is(.docblock-argstable, .sb-argstableBlock) tbody td {
    background: ${({$surface:e})=>e} !important;
    color: ${({$color:e})=>e} !important;
    border-bottom-color: ${({$border:e})=>e} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) :is(.docblock-argstable, .sb-argstableBlock) tbody td:first-child {
    font-weight: 600;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) :is(.docblock-argstable, .sb-argstableBlock) code {
    background: ${({$codeBg:e})=>e} !important;
    color: ${({$color:e})=>e} !important;
    border-color: ${({$border:e})=>e} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) .hexa-docs-content p code {
    background: ${({$codeBg:e})=>e} !important;
    color: ${({$color:e})=>e} !important;
    border: 0.5px solid ${({$border:e})=>e} !important;
    border-radius: 4px;
    padding: 0px 4px;
    font-family: inherit;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    margin: 0px 1px;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) :is(.docblock-argstable, .sb-argstableBlock) a {
    color: ${k.elements["accent-link"].dark} !important;
  }

  /* 28px кнопка + 8px зазор: padding расширяет hover-зону, margin компенсирует выравнивание текста */
  .hexa-docs-content .hexa-docs-heading-anchor {
    position: relative;
    padding-left: 36px;
    margin-left: -36px;
  }

  .hexa-docs-content .hexa-docs-heading-anchor > :is(h2, h3, h4, h5, h6) {
    margin: 0;
    scroll-margin-top: 80px;
  }

  .hexa-docs-content .hexa-docs-heading-link {
    position: absolute;
    top: 50%;
    left: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: ${({$mutedColor:e})=>e};
    cursor: pointer;
    opacity: 0;
    pointer-events: auto;
    transform: translateY(-50%);
    transition: opacity 0.15s ease, background-color 0.15s ease, color 0.15s ease;
  }

  .hexa-docs-content .hexa-docs-heading-anchor:hover .hexa-docs-heading-link,
  .hexa-docs-content .hexa-docs-heading-link:hover,
  .hexa-docs-content .hexa-docs-heading-link:focus-visible,
  .hexa-docs-content .hexa-docs-heading-link--copied {
    opacity: 1;
  }

  .hexa-docs-content .hexa-docs-heading-link:hover {
    background: ${({$surfaceAlt:e})=>e};
    color: ${({$color:e})=>e};
  }

  .hexa-docs-content .hexa-docs-heading-link--copied {
    color: ${k.elements["accent-link"].dark};
  }
`,Ze=W(D)`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  min-height: 100vh;
  box-sizing: border-box;

  /* Storybook docs may set font-size on inner div wrappers; keep AnchorNavigation text on its own token size. */
  > nav [class*='rowText'] div,
  > nav [class*='rowText'] span {
    font-family: inherit;
    font-size: 12px; // костыльно, но работает без него тянет не те стили, нужно разобраться
    line-height: 16px;
  }

  > div:first-child {
    min-width: 0;
    max-width: 1200px;
  }

  > nav {
    margin-inline-start: 48px;
  }

  @media (max-width: 768px) {
    display: block;

    > div:first-child {
      padding-right: 0;
    }

    > nav {
      display: none;
    }
  }
`,Je=W.div``,H=e=>Array.from(e.querySelectorAll(".ant-tabs-tabpane-active")).find(t=>{var n;return!((n=t.parentElement)!=null&&n.closest(".ant-tabs-tabpane"))})??e,G=({children:e,title:t})=>{const n=ae(),o=Ye(n.key),r=ze(),a=h.useRef(null),[c,m]=h.useState([]);$(a),R(a),h.useEffect(()=>(document.body.setAttribute("dir",r),()=>{document.body.removeAttribute("dir")}),[r]),h.useEffect(()=>{const f=a.current;if(!f){m([]);return}let d;const s=()=>{const p=H(f);m(I(p))},l=()=>{d!==void 0&&clearTimeout(d),d=setTimeout(s,Xe)};s();const i=new MutationObserver(l);return i.observe(f,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["class","id"]}),()=>{i.disconnect(),d!==void 0&&clearTimeout(d)}},[]);const g=h.useMemo(()=>{const f=[],d=[];return c.forEach(({id:s,text:l,depth:i})=>{const p={id:s,label:l,depth:i};for(;d.length>0&&d[d.length-1].depth>=i;)d.pop();const y=d[d.length-1];y?y.children=[...y.children||[],p]:f.push(p),d.push(p)}),f},[c]);return u.createElement(ce,{theme:o},u.createElement(Ze,{className:`hexa-docs-page ${o===E.Dark?"theme-dark":"theme-light"}`,items:g,title:t},u.createElement(je,{$background:"var(--bg--neutral--level_0)",$color:"var(--fg--neutral--primary)",$surface:k.bg.alternative[o],$surfaceAlt:k.bg.alternative2[o],$border:k.elements["separator-bold-solid"][o],$mutedColor:"var(--fg--neutral--secondary)",$codeBg:"var(--bg--neutral--level_2)"}),u.createElement(Je,{ref:a,className:"hexa-docs-content sb-unstyled"},e)))};try{H.displayName="getActiveTocRoot",H.__docgenInfo={description:"",displayName:"getActiveTocRoot",props:{}}}catch{}try{G.displayName="DocPageLayout",G.__docgenInfo={description:"Canvas documentation layout with TOC on the right.",displayName:"DocPageLayout",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{D as A,G as D,He as g,$e as p};
