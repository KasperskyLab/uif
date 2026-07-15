import{r as T,R as a,a0 as u,H as d,a4 as m,T as w}from"./iframe-4-PRSI1I.js";const y=e=>/^#([A-Fa-f0-9]{3,4}){1,2}$/.test(e),$=(e,i)=>e.match(new RegExp(`.{${i}}`,"g")),v=e=>parseInt(e.repeat(2/e.length),16),B=e=>typeof e<"u"?e/255:1,g=e=>{if(!y(e))return"";const i=Math.floor((e.length-1)/3),c=$(e.slice(1),i),[n,t,l,o]=c.map(v);return`rgba(${n}, ${t}, ${l}, ${String(B(o)).slice(0,3)})`},h=(e,i)=>Object.keys(e).find(c=>e[c]===i&&c.includes("_")),C=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  ${e=>e.margin&&`margin-left: ${e.margin}px;`};
`,s=d(w)`
  ${e=>e.width&&`width: ${e.width}px;`};
  ${e=>e.margin&&`margin-left: ${e.margin}px;`};
`,x=d.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  min-width: 450px;

  .ds-colorBox {
    background-color: ${e=>e.color};
    width: 48px;
    height: 32px;
  }

  ${e=>e.theme===m.Dark&&`
    background-color: ${u.coldgrey_900};
    color: ${u.neutral_0};
  `}
`,N=d.div`
  margin: 0 8px;

  .ds-colorBox {
    background-color: ${e=>e.color};
    width: 150px;
    height: 50px;
  }
`,P=d.div`
  padding: 10px 10px 20px 10px;
  display: flex;
`,_=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 1200px;
`,V=e=>{const i={};return Object.keys(e).forEach(c=>{const n=c.split("_").slice(0,-1).join("_");i[n]||(i[n]={}),i[n][c]=e[c]}),i},f=({source:e})=>{const i=V(e);return a.createElement(_,null,Object.entries(i).map(([c,n])=>a.createElement(P,{key:c},Object.entries(n).map(([t,l])=>a.createElement(N,{color:l,key:t},t,a.createElement("div",{className:"ds-colorBox"}))))))},p={1:{textType:"H5",margin:0},2:{textType:"H6",margin:8},3:{textType:"BTM2",margin:16},4:{textType:"BTM3",margin:32},5:{textType:"BTM4",margin:64}},E=({source:e})=>{const i=T.useMemo(()=>{const n=(t,l=1)=>Object.keys(t).reduce((o,r)=>(typeof t[r]=="object"&&!("light"in t[r]&&"dark"in t[r])?o[r]=n(t[r],l+1):o[r]={light:{value:t[r].light,alias:h(u,t[r].light)},dark:{value:t[r].dark,alias:h(u,t[r].dark)}},o),{});return n(e)},[e]),c=(n,t=1)=>Object.keys(n).map(l=>{var o;if(typeof n[l]=="object"&&"dark"in n[l]&&"light"in n[l]){const r=n[l];return a.createElement(C,{margin:((o=p[t])==null?void 0:o.margin)??p[1],key:l},a.createElement(s,{width:128},l),a.createElement(x,{color:r.light.value},a.createElement("div",{className:"ds-colorBox"}),a.createElement(s,{width:120},r.light.alias),a.createElement(s,{width:90},r.light.value),a.createElement(s,{width:160},g(r.light.value))),a.createElement(x,{color:r.dark.value,theme:m.Dark},a.createElement("div",{className:"ds-colorBox"}),a.createElement(s,{width:120,theme:m.Dark},r.dark.alias),a.createElement(s,{width:90,theme:m.Dark},r.dark.value),a.createElement(s,{width:160,theme:m.Dark},g(r.dark.value))))}else return a.createElement("div",{key:l},a.createElement(s,{type:p[t].textType||"BTM4",margin:p[t].margin},l,c(n[l],t+1)))});return a.createElement(_,null,c(i))};try{f.displayName="StaticPalette",f.__docgenInfo={description:"",displayName:"StaticPalette",props:{source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"StaticPalette"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{E.displayName="ThemedPalette",E.__docgenInfo={description:"",displayName:"ThemedPalette",props:{source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"PaletteWithValues"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{f as S,E as T};
