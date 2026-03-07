import{r as i,R as n,y as f,H as p}from"./iframe-zz6a49H8.js";const m=({containerRef:e})=>{const t=i.useRef(null),[o,a]=i.useState(!1);return i.useEffect(()=>{if(!e.current)return;const c=e.current,r=new ResizeObserver(()=>{if(!t.current)return;const s=t.current.offsetWidth<t.current.scrollWidth||t.current.offsetHeight<t.current.scrollHeight;a(s)});return r.observe(c),()=>{r.disconnect()}},[e]),{ref:t,hasOverflow:o}},u=p.div`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  white-space-collapse: preserve;
  
  ${e=>typeof e.lineClamp=="number"&&e.lineClamp>1?`
    display: -webkit-box;
    -webkit-line-clamp: ${e.lineClamp};
    -webkit-box-orient: vertical;
  `:`
    white-space: nowrap;
  `}
`,w=p.div`
  ${e=>{const t=e.truncationWidth;return typeof t=="number"&&t>0?`max-width: ${t}px;`:"flex: 1 1 auto; min-width: 0;"}}
`,h=({children:e,lineClamp:t,tooltip:o,truncationWidth:a,placement:c,className:r})=>{const s=i.useRef(null),{ref:l,hasOverflow:d}=m({containerRef:s});return n.createElement(w,{className:r,ref:s,truncationWidth:a},d?n.createElement(f,{text:o??e,placement:c},n.createElement(u,{ref:l,lineClamp:t},e)):n.createElement(u,{ref:l,lineClamp:t},e))};h.__docgenInfo={description:"",methods:[],displayName:"TextReducer",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},lineClamp:{required:!1,tsType:{name:"number"},description:""},tooltip:{required:!1,tsType:{name:"ReactNode"},description:"Custom tooltip text"},truncationWidth:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{h as T};
