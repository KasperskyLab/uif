import{R as l,T as F,H as k}from"./iframe-DedYZBTA.js";import{T as g,h as C,i as f,t as $,k as L,m as _,u as z}from"./blocks-Jd3tffSd.js";const P={addons:L,types:$},q={PureArgsTable:f,ThemeProvider:g,ensure:_,useOf:z},M=C;try{P.displayName="StorybookManager",P.__docgenInfo={description:`Central adapter for Storybook imports that are known to move across versions.
Keep all direct dependencies on Storybook internals and semi-internal blocks here.`,displayName:"StorybookManager",props:{}}}catch{}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"rotate360"'},{value:'"glow"'},{value:'"jiggle"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"none"'}]}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ghost"'},{value:'"solid"'},{value:'"outline"'}]}},animating:{defaultValue:null,description:"",name:"animating",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="PureArgsTable",f.__docgenInfo={description:"",displayName:"PureArgsTable",props:{}}}catch{}try{g.displayName="ThemeProvider",g.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}}}catch{}try{_.displayName="ensure",_.__docgenInfo={description:"",displayName:"ensure",props:{}}}catch{}const H="6.430.1",W=""+new URL("Hexa_UI_Light-zgA0A8s7.svg",import.meta.url).href,x=M({base:"light",fontBase:"Kaspersky Sans",brandTitle:`${H}`,brandImage:W.toString()}),D=new WeakSet,K=e=>(D.add(e),e),U=e=>typeof e=="object"&&e!==null&&D.has(e),{PureArgsTable:X,ThemeProvider:G,ensure:J}=q,V=e=>{if(!e)return;const t=typeof e.summary=="string"?e.summary:e.summary!=null?String(e.summary):typeof e.name=="string"?e.name:void 0;return t?{summary:t}:void 0},h=e=>{const t=e.table;if(!t)return e;const a=V(t.type),r=V(t.defaultValue);return{...e,table:{...t,...a?{type:a}:{},...r?{defaultValue:r}:{}}}},p=k.div`
  ${({$withPixsoTitle:e})=>e&&`
    display: grid;
    gap: 8px;
    margin-top: 8px;
  `}

  &&& :is(.docblock-argstable, .sb-argstableBlock) {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    background-color: var(--bg--neutral--level_0);
    color: var(--fg--neutral--primary);
    border-color: var(--border--neutral--bold);

    thead th:first-of-type,
    tbody td:first-of-type {
      width: 20%;
    }

    thead th:nth-of-type(2),
    tbody td:nth-of-type(2) {
      width: 60%;
    }

    thead th:nth-of-type(3),
    tbody td:nth-of-type(3) {
      width: 20%;
    }

    th,
    td {
      background-color: var(--bg--neutral--level_0) !important;
      color: var(--fg--neutral--primary) !important;
      border-color: var(--border--neutral--medium) !important;
      border-right: 1px solid var(--border--neutral--medium) !important;
    }

    tbody > tr > td, thead > tr > th {
      padding: 10px !important;
    }

    code,
    tbody td:nth-child(2) > div span[class],
    tbody td:nth-child(3) > span[class] {
      background-color: var(--bg--neutral--level_2) !important;
      color: var(--fg--neutral--muted) !important;
    }

    thead th {
      border-top: 1px solid var(--border--neutral--medium) !important;
      border-bottom: 1px solid var(--border--neutral--medium) !important;

      &:first-child {
        border-left: 1px solid var(--border--neutral--medium) !important;
      }

      &:last-child {
        border-right: 1px solid var(--border--neutral--medium) !important;
      }
    }

    tbody {
      filter: none !important;
    }

    td table:has(strong) td {
      background-color: var(--bg--danger_subtle--enabled) !important;
      padding: 8px !important;
      border: 0 !important;
    }
  }
`,v=e=>Object.fromEntries(Object.entries(e).map(([t,a])=>[t,h({...a,name:a.name??t})])),S=({rows:e,sort:t="none"})=>l.createElement(X,{rows:v(e),sort:t,inTabPanel:!0}),m=({rows:e,sort:t="none",embedded:a=!1})=>{const r=U(e);return a?l.createElement(S,{rows:e,sort:t}):l.createElement(G,{theme:J(x)},l.createElement(p,{className:"sb-unstyled",$withPixsoTitle:r},r&&l.createElement(F,{type:"H5"},"Properties в Pixso"),l.createElement(S,{rows:e,sort:t})))};try{h.displayName="sanitizeArgTypeForArgsTable",h.__docgenInfo={description:"",displayName:"sanitizeArgTypeForArgsTable",props:{}}}catch{}try{p.displayName="DocumentationArgsTableWrapper",p.__docgenInfo={description:"",displayName:"DocumentationArgsTableWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},$withPixsoTitle:{defaultValue:null,description:"",name:"$withPixsoTitle",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{v.displayName="withRowNames",v.__docgenInfo={description:"PureArgsTable renders row.name, not the ArgTypes object key.",displayName:"withRowNames",props:{}}}catch{}try{m.displayName="DocumentationArgsTable",m.__docgenInfo={description:"Единая визуализация таблицы пропов (Storybook PureArgsTable + тема DS).",displayName:"DocumentationArgsTable",props:{rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"ArgTypes<Args>"}},sort:{defaultValue:{value:"none"},description:"",name:"sort",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"alpha"'},{value:'"requiredFirst"'}]}},embedded:{defaultValue:{value:"false"},description:"Без ThemeProvider и обёртки — для нескольких таблиц в одной секции (PropsTable).",name:"embedded",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const{ThemeProvider:Q,ensure:Y,useOf:Z}=q,ee=k.div`
  margin-top: 32px;
`,R="УСТАРЕВШИЕ",te=e=>e==null?void 0:{summary:e},re=e=>typeof e=="string"?{type:e}:e,I=(e,t)=>(e==null?void 0:e.label)??t,N=(e,t)=>(e==null?void 0:e.order)??t,T=e=>{var t;return(e==null?void 0:e.type)??((t=e==null?void 0:e.table)==null?void 0:t.type)},ae=e=>{var t;return(e==null?void 0:e.defaultValue)!==void 0?String(e.defaultValue):(t=e==null?void 0:e.table)==null?void 0:t.defaultValue},b=(e,t)=>{var a,r;return!!(t!=null&&t.deprecated)||((r=(a=e.table)==null?void 0:a.jsDocTags)==null?void 0:r.deprecated)!=null||typeof e.description=="string"&&/^\s*@deprecated\b/i.test(e.description)},ue=(e,t)=>{var s;const a=T(t),r=(s=e.table)==null?void 0:s.type;if(a)return{summary:String(a)};if(!r)return;const n=r.name,u=typeof r.summary=="string"?r.summary:r.summary!=null?String(r.summary):typeof n=="string"?n:void 0;return u?{summary:u}:void 0},ne=(e,t)=>{var u;const a=ae(t),r=(u=e.table)==null?void 0:u.defaultValue;if(a)return{summary:a};if(!r)return;const n=typeof r.summary=="string"?r.summary:r.summary!=null?String(r.summary):void 0;return n?{summary:n}:void 0},A=(e,t,a)=>{const r=ue(t,a),n=ne(t,a);return{...t,name:I(a,e),...a!=null&&a.description?{description:a.description}:{},table:{...t.table,...r?{type:r}:{},...n?{defaultValue:n}:{}}}},y=e=>Object.entries(e).reduce((t,[a,r])=>{const n={...r.label?{name:I(r,a)}:{},...r.description?{description:r.description}:{},...r.options?{options:r.options}:{},...r.control!==void 0?{control:re(r.control)}:{},...T(r)?{table:{type:te(T(r))}}:{}};return t[a]=n,t},{}),oe=e=>{if(e){if(typeof e.raw=="string"&&e.raw.length>0)return e.raw;if(typeof e.name=="string"&&e.name.length>0)return e.name}},se=e=>(Array.isArray(e)?e:[e]).reduce((a,r)=>{var u;const n=((u=r.__docgenInfo)==null?void 0:u.props)||{};return Object.entries(n).forEach(([s,o])=>{var c;const d=oe(o.type),i=(c=o.defaultValue)==null?void 0:c.value;a[s]={name:o.name||s,...o.description?{description:o.description}:{},table:{...d?{type:{summary:d}}:{},...i?{defaultValue:{summary:i}}:{}}}}),a},{}),pe=(e,t)=>{const a=se(e),r=y(t);return Object.entries(r).reduce((n,[u,s])=>{const o=a[u];return n[u]={...o,...s,description:s.description??(o==null?void 0:o.description),table:{...o==null?void 0:o.table,...s.table}},n},{...a})},me=(e,t={})=>{const r={...{...e.type!==void 0?{type:String(e.type)}:{},...e.defaultValue!==void 0?{defaultValue:String(e.defaultValue)}:{},...e.table},...t.table};return{...e,...t,...Object.keys(r).length>0?{table:r}:{}}},E=e=>Object.keys(e),le=(e,t={},a=R)=>Object.entries(e).filter(([n,u])=>{var s,o;return!((s=u.table)!=null&&s.disable)&&!((o=t[n])!=null&&o.hidden)}).map(([n,u],s)=>({name:n,argType:u,presentation:t[n],declarationIndex:s})).sort((n,u)=>{const s=b(n.argType,n.presentation),o=b(u.argType,u.presentation);if(s!==o)return s?1:-1;const d=N(n.presentation,n.declarationIndex),i=N(u.presentation,u.declarationIndex);return d!==i?d-i:n.name.localeCompare(u.name)}).reduce((n,u)=>(b(u.argType,u.presentation)?n.deprecatedRows[u.name]=A(u.name,u.argType,u.presentation):n.rows[u.name]=A(u.name,u.argType,u.presentation),n),{rows:{},deprecatedRows:{}}),j=e=>Object.fromEntries(Object.entries(e).map(([t,a])=>[t,{...a,table:a.table?{...a.table,category:void 0}:a.table}])),B=e=>{const t=y(e),a=Object.entries(e).reduce((r,[n,u])=>{var o;if(u.hidden)return r;const s=t[n];return!s||(o=s.table)!=null&&o.disable||(r[n]=A(n,s,u)),r},{});return K(j(a))},de=e=>{var t,a,r,n,u,s;if(e.type==="story")return e.story.argTypes;if(e.type==="meta"){const o=(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.extractArgTypes;return o?o(e.component):(r=e.preparedMeta)==null?void 0:r.argTypes}if(e.type==="component"){const o=(s=(u=(n=e.projectAnnotations)==null?void 0:n.parameters)==null?void 0:u.docs)==null?void 0:s.extractArgTypes;return o?o(e.component):{}}return{}},O=({of:e,presentation:t={},deprecatedSection:a=R,sort:r="none",showCategories:n=!1})=>{const u=Z(e||"meta"),{rows:s,deprecatedRows:o}=le(de(u),t,a),d=w=>n?w:j(w),i=d(s),c=d(o);return l.createElement(Q,{theme:Y(x)},l.createElement(p,{className:"sb-unstyled"},Object.keys(i).length>0&&l.createElement(m,{embedded:!0,rows:i,sort:r}),Object.keys(c).length>0&&l.createElement(ee,null,l.createElement(m,{embedded:!0,rows:c,sort:r}))))};try{y.displayName="buildStoryArgTypes",y.__docgenInfo={description:"",displayName:"buildStoryArgTypes",props:{}}}catch{}try{E.displayName="getControlsInclude",E.__docgenInfo={description:"",displayName:"getControlsInclude",props:{}}}catch{}try{B.displayName="buildPresentationOnlyRows",B.__docgenInfo={description:"Строки таблицы только из presentation (вкладка «Дизайн», без docgen и без групп).",displayName:"buildPresentationOnlyRows",props:{}}}catch{}try{O.displayName="PropsTable",O.__docgenInfo={description:"",displayName:"PropsTable",props:{of:{defaultValue:null,description:"",name:"of",required:!1,type:{name:"unknown"}},presentation:{defaultValue:{value:"{}"},description:"",name:"presentation",required:!1,type:{name:"PropPresentationMap"}},deprecatedSection:{defaultValue:{value:"УСТАРЕВШИЕ"},description:"",name:"deprecatedSection",required:!1,type:{name:"string"}},sort:{defaultValue:{value:"none"},description:"",name:"sort",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"alpha"'},{value:'"requiredFirst"'}]}},showCategories:{defaultValue:{value:"false"},description:"@deprecated Категории в таблице больше не используются.",name:"showCategories",required:!1,type:{name:"boolean"}},sections:{defaultValue:null,description:"@deprecated Группы в таблице больше не используются.",name:"sections",required:!1,type:{name:"unknown"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{m as D,q as S,B as a,pe as b,y as c,p as d,me as e,le as f,E as g,x as s};
