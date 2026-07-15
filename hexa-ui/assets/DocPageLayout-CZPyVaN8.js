import{R as u,l as K,r as h,I as te,T as ne,ba as oe,a4 as k,J as re,aG as ae,az as f,H as W,bb as ce}from"./iframe-4-PRSI1I.js";import{n as se}from"./blocks-yA_hxWl_.js";import{T as ie}from"./TextReducer-JHIejSuK.js";import{c as le,d as de,e as ue,f as pe}from"./SubComponents-EaKLKwRG.js";const me="_anchorLink_p3jqv_1",he="_content_p3jqv_5",ge="_navigation_p3jqv_10",fe="_items_p3jqv_27",ye="_item_p3jqv_27",be="_selected_p3jqv_45",_e="_elementAfter_p3jqv_55",_={anchorLink:me,content:he,navigation:ge,items:fe,item:ye,selected:be,elementAfter:_e};function Y(e){return e.flatMap(t=>[t,...t.children?Y(t.children):[]])}function H(e){let t=e.parentElement;for(;t;){const n=getComputedStyle(t);if(/(auto|scroll)/.test(n.overflow+n.overflowY+n.overflowX))return t;t=t.parentElement}return document.documentElement}function we(e,t){return t===document.documentElement?e.getBoundingClientRect().top+window.scrollY:e.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop}function ve(e,t=24,n="smooth"){const o=document.getElementById(e);if(!o)return;const r=H(o);if(r===document.documentElement){const l=window.scrollY+o.getBoundingClientRect().top-t;window.scrollTo({top:l,behavior:n});return}const a=r.scrollTop+o.getBoundingClientRect().top-r.getBoundingClientRect().top-t;r.scrollTo({top:a,behavior:n})}function xe(e){return e===document.documentElement?{"--nav-offset-top":"24px","--nav-max-height":"calc(100vh - 24px)"}:{"--nav-offset-top":0,"--nav-max-height":`${e.clientHeight-parseFloat(getComputedStyle(e).paddingTop)}px`}}const P=24;function A({item:e,level:t,onClick:n,selected:o}){return u.createElement(le,{className:K(_.item,o&&_.selected),"data-section":e.id,leftOffset:8+t*20,onClick:n,onKeyDown:r=>r.key==="Enter"?n():void 0,selected:o,tabIndex:0},u.createElement(de,null,u.createElement(ue,{type:"BTR4"},u.createElement(ie,{lineClamp:2},e.label))),e.elementAfter&&u.createElement(pe,{className:_.elementAfter},e.elementAfter))}function L({items:e,style:t,title:n}){var g;const[o,r]=h.useState((g=e[0])==null?void 0:g.id),[a,l]=h.useState({}),y=h.useRef(null),p=h.useRef(!1);if(h.useEffect(()=>{if(!e.length)return;const c=H(y.current),s=c===document.documentElement?window:c,i=()=>{var B;const E=c.clientHeight,Z=c.scrollHeight,q=c.scrollTop,ee=q+E>=Z-64,w=Y(e);let b="";if(ee&&w.length>0)b=w[w.length-1].id;else{const T=q+P;b=(B=w[0])==null?void 0:B.id;for(const v of w){const x=document.getElementById(v.id);if(!x)continue;if(we(x,c)<=T)b=v.id;else break}}r(T=>{var v,x,C;return T!==b&&!p.current&&(b===w[0].id?(v=y.current)==null||v.scrollTo({top:0,behavior:"smooth"}):(C=(x=y.current)==null?void 0:x.querySelector(`[data-section="${b}"]`))==null||C.scrollIntoView({behavior:"smooth",block:"nearest"})),b})},m=()=>{p.current=!1};return s.addEventListener("scroll",i),s.addEventListener("scrollend",m),i(),l(xe(c)),()=>{s.removeEventListener("scroll",i),s.removeEventListener("scrollend",m)}},[e]),!e.length)return null;function d(c,s=0){return u.createElement(u.Fragment,{key:c.id},u.createElement(A,{item:c,level:s,onClick:()=>{p.current=!0,ve(c.id,P)},selected:c.id===o}),c.children&&c.children.map(i=>d(i,s+1)))}return u.createElement(te,{getPopupContainer:c=>c.parentElement},u.createElement("nav",{ref:y,className:_.navigation,style:{...t,...a}},n&&u.createElement(ne,{type:"BTM3"},n),u.createElement("div",{className:_.items},e.map(c=>d(c)))))}function D({children:e,className:t,items:n,title:o,...r}){return u.createElement("div",{...r,className:K(_.anchorLink,t)},u.createElement("div",{className:_.content},e),u.createElement(L,{items:n,title:o}))}try{A.displayName="NavigationItem",A.__docgenInfo={description:"",displayName:"NavigationItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"AnchorItem"}},level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"number"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}try{L.displayName="Navigation",L.__docgenInfo={description:"",displayName:"Navigation",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AnchorItem[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{D.displayName="AnchorNavigation",D.__docgenInfo={description:"",displayName:"AnchorNavigation",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AnchorItem[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ee="h3, h4, h5, h6",z="h2, h3, h4, h5, h6",ke=".docs-story, .hexa-docs-editor, .skip-toc, .docblock-argstable",Se=e=>e.trim().toLowerCase().replace(/[^a-z0-9\u0400-\u04ff\s-]/gi,"").replace(/\s+/g,"-").replace(/-+/g,"-"),j=e=>!!e.closest(ke),X=(e,t)=>{let n=e.id;if(!n){const o=Number(e.tagName.slice(1)),r=(e.textContent||"").trim(),a=Se(r)||`section-${o}`;n=a;let l=2;for(;t.has(n);)n=`${a}-${l}`,l+=1;e.id=n}return t.add(n),n},I=e=>{const t=e.querySelectorAll(Ee),n=new Set;return Array.from(t).filter(o=>!j(o)).map(o=>{const r=Number(o.tagName.slice(1)),a=(o.textContent||"").trim();return a?{id:X(o,n),text:a,depth:r}:null}).filter(o=>o!==null)};try{I.displayName="collectDocumentationTocEntries",I.__docgenInfo={description:"",displayName:"collectDocumentationTocEntries",props:{}}}catch{}const Te="/iframe.html",J=e=>e.pathname.endsWith(Te),M=e=>{const t=new URL(e.href);if(!J(e))return t;const n=t.searchParams.get("id");if(!n)return t;const r=(t.searchParams.get("viewMode")??"story")==="docs"?`/docs/${n}`:`/story/${n}`,a=new URL(`${t.origin}/`);return a.searchParams.set("path",r),a},Ce=()=>{try{if(window.parent!==window&&window.parent.location.origin===window.location.origin){const e=M(window.parent.location);if(!J(window.parent.location))return e}}catch{}return M(window.location)},Ne=e=>{const t=Ce();return t.hash=e,t.toString()},Ae=()=>{try{if(window.parent!==window&&window.parent.location.origin===window.location.origin)return window.parent.location.hash||window.location.hash}catch{}return window.location.hash},Le=24,De=(e,t="smooth")=>{const n=document.getElementById(decodeURIComponent(e));if(!n)return!1;const o=H(n),r=Le;if(o===document.documentElement){const a=window.scrollY+n.getBoundingClientRect().top-r;window.scrollTo({top:a,behavior:t})}else{const a=o.scrollTop+n.getBoundingClientRect().top-o.getBoundingClientRect().top-r;o.scrollTo({top:a,behavior:t})}return!0},Ie=(e,t=40,n=100,o="auto")=>{let r=0;const a=()=>{De(e,o)||r>=t||(r+=1,window.setTimeout(a,n))};a()},S="hexa-docs-heading-anchor",Q="hexa-docs-heading-row",O="hexa-docs-heading-link",Re=2e3,$e=150,He='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M8.0436 2.4231c1.528-1.528 4.0055-1.528 5.5335 0s1.528 4.0055 0 5.5335l-1.71 1.71a.65.65 0 1 1-.9192-.9193l1.71-1.71c1.0203-1.0203 1.0203-2.6746 0-3.695s-2.6747-1.0203-3.695 0l-1.729 1.729a.65.65 0 0 1-.9192-.9193zm2.1419 3.3916a.65.65 0 0 1 0 .9193l-3.4512 3.4512a.65.65 0 1 1-.9192-.9192l3.4512-3.4513a.65.65 0 0 1 .9192 0M5.0627 7.2425a.65.65 0 1 0-.9192-.9192L2.4234 8.0434c-1.528 1.528-1.528 4.0054 0 5.5334s4.0054 1.5281 5.5334.0001l1.7106-1.7107a.65.65 0 1 0-.9192-.9192l-1.7106 1.7106c-1.0204 1.0204-2.6747 1.0204-3.695 0s-1.0203-2.6746 0-3.695z"/></svg>',N=(e,t)=>{e.classList.toggle("hexa-docs-heading-link--copied",t),e.setAttribute("aria-label",t?"Ссылка скопирована":"Скопировать ссылку на раздел")},Oe=async e=>{var n;if((n=navigator.clipboard)!=null&&n.writeText)try{await navigator.clipboard.writeText(e);return}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();try{if(!document.execCommand("copy"))throw new Error("execCommand copy failed")}finally{document.body.removeChild(t)}},V=e=>{const t=document.createElement("button");return t.type="button",t.className=O,t.setAttribute("data-heading-id",e),t.setAttribute("aria-label","Скопировать ссылку на раздел"),t.innerHTML=He,t},qe=e=>(e==null?void 0:e.classList.contains(S))===!0||(e==null?void 0:e.classList.contains(Q))===!0,Be=(e,t)=>{let n=e.parentElement;qe(n)?n.className=S:(n=document.createElement("div"),n.className=S,e.replaceWith(n),n.append(e,V(t)));const o=n.querySelector(`.${O}`)??(()=>{const r=V(t);return n.append(r),r})();return o.getAttribute("data-heading-id")!==t&&o.setAttribute("data-heading-id",t),o.nextElementSibling!==e&&n.insertBefore(o,e),o},Pe=e=>{const t=new Set;e.querySelectorAll(z).forEach(n=>{if(j(n))return;const o=X(n,t);Be(n,o)})},Me=e=>{e.querySelectorAll(`.${S}, .${Q}`).forEach(t=>{const n=t.querySelector(z);n?t.replaceWith(n):t.remove()})},R=e=>{h.useEffect(()=>{var c;const t=e.current;if(!t)return;const n=new WeakMap,o=async(s,i)=>{try{await Oe(Ne(s)),N(i,!0);const m=n.get(i);m!==void 0&&clearTimeout(m),n.set(i,setTimeout(()=>{N(i,!1)},Re))}catch{N(i,!1)}},r=s=>{const i=s.target;if(!(i instanceof Element))return;const m=i.closest(`.${O}`);if(!m||!t.contains(m))return;const E=m.getAttribute("data-heading-id");E&&(s.preventDefault(),s.stopPropagation(),o(E,m))},a=()=>{const s=Ae().slice(1);s&&Ie(s)};let l;const y=()=>{l!==void 0&&clearTimeout(l),l=setTimeout(()=>{d()},$e)},p=new MutationObserver(y),d=()=>{p.disconnect(),Pe(t),p.observe(t,{childList:!0,subtree:!0})};t.addEventListener("click",r),d(),a();const g=()=>a();window.addEventListener("hashchange",g);try{(c=window.parent)==null||c.addEventListener("hashchange",g)}catch{}return()=>{var s;p.disconnect(),l!==void 0&&clearTimeout(l),t.removeEventListener("click",r),window.removeEventListener("hashchange",g);try{(s=window.parent)==null||s.removeEventListener("hashchange",g)}catch{}Me(t)}},[e])};try{R.displayName="useDocumentationHeadingAnchors",R.__docgenInfo={description:"Adds per-heading copy-link controls and handles hash navigation in docs pages.",displayName:"useDocumentationHeadingAnchors",props:{}}}catch{}const U="/story/",Ve=e=>{try{const t=new URL(e,window.location.href).searchParams.get("path");return!t||!t.startsWith(U)?null:t.slice(U.length).split(/[?&#]/)[0]||null}catch{return null}},$=e=>{h.useEffect(()=>{const t=e.current;if(!t)return;const n=o=>{if(o.defaultPrevented||o.button!==0||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey)return;const r=o.target;if(!(r instanceof Element))return;const a=r.closest("a");if(!a||!t.contains(a))return;const l=Ve(a.getAttribute("href")||"");l&&(o.preventDefault(),oe({storyId:l}))};return t.addEventListener("click",n),()=>{t.removeEventListener("click",n)}},[e])};try{$.displayName="useDocumentationStoryLinks",$.__docgenInfo={description:"Turns internal `?path=/story/...` links inside docs into in-app Storybook\nnavigation (no full page reload / new tab). Falls back to the anchor's\ndefault behaviour for modifier clicks and external links.",displayName:"useDocumentationStoryLinks",props:{}}}catch{}const{GLOBALS_UPDATED:G}=__STORYBOOK_MODULE_CORE_EVENTS__,Ue=e=>{if(!e)return{};try{const[t]=e.componentStories();if(t)return e.getStoryContext(t).globals??{}}catch{}return{}},Ge=()=>{const e=h.useContext(se),[t,n]=h.useState(()=>Ue(e));return h.useEffect(()=>{if(!(e!=null&&e.channel))return;const o=({globals:r})=>{n(r)};return e.channel.on(G,o),()=>{e.channel.off(G,o)}},[e]),t},Fe=e=>{const t=Ge().theme;return t===k.Dark?k.Dark:t===k.Light?k.Light:e},Ke=100,We=ce`
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

  .sbdocs-wrapper:has(.hexa-docs-content) .docblock-argstable {
    color: ${({$color:e})=>e} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) .docblock-argstable thead th {
    color: ${({$mutedColor:e})=>e} !important;
    border-bottom-color: ${({$border:e})=>e} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) .docblock-argstable tbody tr {
    border-top-color: ${({$border:e})=>e} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) .docblock-argstable tbody td {
    background: ${({$surface:e})=>e} !important;
    color: ${({$color:e})=>e} !important;
    border-bottom-color: ${({$border:e})=>e} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) .docblock-argstable tbody td:first-child {
    font-weight: 600;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) .docblock-argstable code {
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

  .sbdocs-wrapper:has(.hexa-docs-content) .docblock-argstable a {
    color: ${f.elements["accent-link"].dark} !important;
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
    color: ${f.elements["accent-link"].dark};
  }
`,Ye=W(D)`
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
    margin-left: 3rem;
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
`,ze=W.div``,je=e=>e.querySelector(".ant-tabs-tabpane-active")??e,F=({children:e,title:t="Contents"})=>{const n=re(),o=Fe(n.key),r=h.useRef(null),[a,l]=h.useState([]);R(r),$(r),h.useEffect(()=>{const p=r.current;if(!p){l([]);return}let d;const g=()=>{const i=je(p);l(I(i))},c=()=>{d!==void 0&&clearTimeout(d),d=setTimeout(g,Ke)};g();const s=new MutationObserver(c);return s.observe(p,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["class","id"]}),()=>{s.disconnect(),d!==void 0&&clearTimeout(d)}},[]);const y=h.useMemo(()=>{const p=[],d=[];return a.forEach(({id:g,text:c,depth:s})=>{const i={id:g,label:c,depth:s};for(;d.length>0&&d[d.length-1].depth>=s;)d.pop();const m=d[d.length-1];m?m.children=[...m.children||[],i]:p.push(i),d.push(i)}),p},[a]);return u.createElement(ae,{theme:o},u.createElement(Ye,{className:"hexa-docs-page",items:y,title:t},u.createElement(We,{$background:f.bg.base[o],$color:f["text-icons-elements"].primary[o],$surface:f.bg.alternative[o],$surfaceAlt:f.bg.alternative2[o],$border:f.elements["separator-bold-solid"][o],$mutedColor:f["text-icons-elements"]["secondary-solid"][o],$codeBg:f.bg.alternative2[o]}),u.createElement(ze,{ref:r,className:"hexa-docs-content sb-unstyled"},e)))};try{F.displayName="DocPageLayout",F.__docgenInfo={description:"Canvas documentation layout with TOC on the right.",displayName:"DocPageLayout",props:{title:{defaultValue:{value:"Contents"},description:"",name:"title",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{D as A,F as D,L as N,A as a,Ge as u};
