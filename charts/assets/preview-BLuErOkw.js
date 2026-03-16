const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-C1IpM5TM.js","./palette-CcbSufZ2.js","./index-B3FZByPw.js","./index-BdwbapXd.js","./index-DzZ-4mgu.js"])))=>i.map(i=>d[i]);
import{F as _,c as $,s as f,W as b,C as g,e as y,t as E}from"./palette-CcbSufZ2.js";import{R as o,r as x}from"./index-B3FZByPw.js";import{T as n,a as v}from"./config-ByFdgwor.js";import{_ as s}from"./iframe-CHivoOg-.js";function C(e){return t=>{let{theme:r}=t;return r==="_reset"&&(r=n.Light),r===n.Dark?document.body.classList.add("theme-dark"):document.body.classList.remove("theme-dark"),o.createElement(_,{theme:v[r||n.Light]},o.createElement(e,{...t}))}}const k=C(({children:e})=>o.createElement(o.Fragment,null,e)),L=()=>`:root {
${Object.entries($).map(([e,t])=>`--color-${e}: ${t};`).join(`
`)}}`,w=(e,t)=>{const[r]=e,[a]=t;return r>a?-1:r<a?1:0},T=()=>Object.entries(f).sort(w).reduce((e,[t,r])=>{const a=Object.entries(r).reduce((i,[c,l])=>{const d=Object.entries(l).reduce((m,[u,h])=>{const[p]=u.split("[deprecated]");return`${m}  --${c.toLowerCase()}--${p.toLowerCase()}: ${h};
`},"");return`${i}${d}`},"");return`${e}${t==="dark"?`
.theme-dark {
`:`
:root,
.theme-light {
`}${a}}
`},"");s(()=>import("./index-C1IpM5TM.js"),__vite__mapDeps([0,1,2]),import.meta.url);s(()=>import("./index-BdwbapXd.js"),__vite__mapDeps([3,1,2]),import.meta.url);s(()=>import("./index-DzZ-4mgu.js"),__vite__mapDeps([4,1,2]),import.meta.url);const O=g`
.root-background-basic {
  transition: filter 0.2s ease-in-out;
}

.root-background-blurred {
  filter: blur(8px);
}

body:has(.antd-sidebar-wrapper_last) .antd-sidebar-wrapper:not(.antd-sidebar-wrapper_last) .ant-drawer-mask {
  visibility: hidden;
}
`,S=b`
  ${L()}
  ${T()}
  ${O}
`,V="marina,violet,marengo,grass,purple,yellow,coldgrey,emerald,orange,red".split(","),j=[50,100,200,300,400,500,600,700],P=[0,50,100,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950],I=`.hexa-ui-light-theme, :root {
${V.flatMap(e=>j.map(t=>`  --${e}--${e}_${t}: var(--color--${e}_${t});`)).join(`
`)}
${P.map(e=>`  --neutral--neutral_${e}: var(--color--neutral_${e});`).join(`
`)}
  --neutraloverlayinverted--neutral_aw_0: var(--color--neutral_aw_0);
}
`;function R(){x.useEffect(()=>{if(!document.getElementById("hexa-charts-tokens")){const e=document.createElement("style");e.id="hexa-charts-tokens",e.textContent=y+`
`+I,document.head.appendChild(e)}if(!document.getElementById("hexa-typo")){const e=document.createElement("style");e.id="hexa-typo",e.textContent=E,document.head.appendChild(e)}document.body.classList.add("hexa-ui-light-theme"),document.body.classList.remove("hexa-ui-dark-theme")},[])}const W={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[(e,t)=>{function r(){return R(),o.createElement(k,{theme:n.Light},o.createElement(S,null),e(t))}return o.createElement(r,null)}]};export{W as default};
