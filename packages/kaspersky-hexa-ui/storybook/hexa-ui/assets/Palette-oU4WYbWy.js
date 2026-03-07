import{r as E,R as t,J as g,H as d,K as m,T as f}from"./iframe-zz6a49H8.js";const w=e=>/^#([A-Fa-f0-9]{3,4}){1,2}$/.test(e),y=(e,i)=>e.match(new RegExp(`.{${i}}`,"g")),v=e=>parseInt(e.repeat(2/e.length),16),$=e=>typeof e<"u"?e/255:1,u=e=>{if(!w(e))return"";const i=Math.floor((e.length-1)/3),o=y(e.slice(1),i),[n,r,a,s]=o.map(v);return`rgba(${n}, ${r}, ${a}, ${String($(s)).slice(0,3)})`},h=(e,i)=>Object.keys(e).find(o=>e[o]===i&&o.includes("_")),k=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  ${e=>e.margin&&`margin-left: ${e.margin}px;`};
`,c=d(f)`
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
    background-color: ${g.coldgrey_900};
    color: ${g.neutral_0};
  `}
`,B=d.div`
  margin: 0 8px;

  .ds-colorBox {
    background-color: ${e=>e.color};
    width: 150px;
    height: 50px;
  }
`,_=d.div`
  padding: 10px 10px 20px 10px;
  display: flex;
`,T=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 1200px;
`,C=e=>{const i={};return Object.keys(e).forEach(o=>{const n=o.split("_").slice(0,-1).join("_");i[n]||(i[n]={}),i[n][o]=e[o]}),i},P=({source:e})=>{const i=C(e);return t.createElement(T,null,Object.entries(i).map(([o,n])=>t.createElement(_,{key:o},Object.entries(n).map(([r,a])=>t.createElement(B,{color:a,key:r},r,t.createElement("div",{className:"ds-colorBox"}))))))},p={1:{textType:"H5",margin:0},2:{textType:"H6",margin:8},3:{textType:"BTM2",margin:16},4:{textType:"BTM3",margin:32},5:{textType:"BTM4",margin:64}},A=({source:e})=>{const i=E.useMemo(()=>{const n=(r,a=1)=>Object.keys(r).reduce((s,l)=>(typeof r[l]=="object"&&!("dark"in r[l])?s[l]=n(r[l],a+1):s[l]={light:{value:r[l].light,alias:h(g,r[l].light)},dark:{value:r[l].dark,alias:h(g,r[l].dark)}},s),{});return n(e)},[e]),o=(n,r=1)=>Object.keys(n).map(a=>{if(typeof n[a]=="object"&&"dark"in n[a]&&"light"in n[a]){const s=n[a];return t.createElement(k,{margin:p[r].margin,key:a},t.createElement(c,{width:128},a),t.createElement(x,{color:s.light.value},t.createElement("div",{className:"ds-colorBox"}),t.createElement(c,{width:120},s.light.alias),t.createElement(c,{width:90},s.light.value),t.createElement(c,{width:160},u(s.light.value))),t.createElement(x,{color:s.dark.value,theme:m.Dark},t.createElement("div",{className:"ds-colorBox"}),t.createElement(c,{width:120,theme:m.Dark},s.dark.alias),t.createElement(c,{width:90,theme:m.Dark},s.dark.value),t.createElement(c,{width:160,theme:m.Dark},u(s.dark.value))))}else return t.createElement("div",{key:a},t.createElement(c,{type:p[r].textType||"BTM4",margin:p[r].margin},a,o(n[a],r+1)))});return t.createElement(T,null,o(i))};P.__docgenInfo={description:"",methods:[],displayName:"StaticPalette",props:{source:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [key: string]: string
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},description:""}}};A.__docgenInfo={description:"",methods:[],displayName:"ThemedPalette",props:{source:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [key: string]: T | Palette<T>
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"T | Palette<T>",elements:[{name:"signature",type:"object",raw:`{
  light: string,
  dark: string
}`,signature:{properties:[{key:"light",value:{name:"string",required:!0}},{key:"dark",value:{name:"string",required:!0}}]}},{name:"Palette"}],required:!0}}]}},description:""}}};export{P as S,A as T};
