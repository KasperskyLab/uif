import{R as a,b as T,H as p,S as u,a7 as v,aY as F,r as _,I,A as w,aZ as E,am as R}from"./iframe-DedYZBTA.js";import{r as A}from"./Download2-CuwAL7pw.js";import{o as C}from"./Reload-DfpUPU2e.js";import{u as H}from"./useTranslation-od-Kmf1k.js";import{L}from"./Loader-C9846UWr.js";const B=a.forwardRef((e,r)=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",ref:r,...e},a.createElement("path",{fill:T(e.color)||e.color||"currentColor",fillRule:"evenodd",d:"M4.7941 1.044c-1.1321 0-2.05.9178-2.05 2.05v9.812c0 1.1322.9179 2.05 2.05 2.05h6.2118c1.2426 0 2.25-1.0074 2.25-2.25V6.1009a1.15 1.15 0 0 0-.3089-.7842l-3.6425-3.907a1.15 1.15 0 0 0-.8411-.3657zm-.75 2.05a.75.75 0 0 1 .75-.75h3.2201v2.1434c0 1.1321.9178 2.05 2.05 2.05h1.8917v6.1686a.95.95 0 0 1-.95.95H4.7941a.75.75 0 0 1-.75-.75zm7.0516 2.1434L9.3142 3.3265v1.1609a.75.75 0 0 0 .75.75z"}))),V=a.memo(a.forwardRef((e,r)=>{const{klId:n,testId:i,...t}=e;return a.createElement(B,{"kl-id":n,"data-testid":i,ref:r,...t})}));V.displayName="File";const W=a.forwardRef((e,r)=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",ref:r,...e},a.createElement("path",{fill:T(e.color)||e.color||"currentColor",fillRule:"evenodd",d:"M11.6 1.7H4.4c-1.4912 0-2.7 1.2089-2.7 2.7v7.2c0 1.4912 1.2088 2.7 2.7 2.7h7.2c1.4911 0 2.7-1.2088 2.7-2.7V4.4c0-1.4912-1.2089-2.7-2.7-2.7M3 4.4C3 3.6268 3.6267 3 4.4 3h7.2c.7732 0 1.4.6268 1.4 1.4v7.2c0 .7732-.6268 1.4-1.4 1.4H4.4c-.7733 0-1.4-.6268-1.4-1.4zm5 .0434a.75.75 0 0 1 .75.75v2.91a.75.75 0 0 1-1.5 0v-2.91a.75.75 0 0 1 .75-.75m-.0001 7.1248a.85.85 0 1 0-.0001-1.7.85.85 0 0 0 0 1.7"}))),z=a.memo(a.forwardRef((e,r)=>{const{klId:n,testId:i,...t}=e;return a.createElement(W,{"kl-id":n,"data-testid":i,ref:r,...t})}));z.displayName="StatusDangerOutlineSquare";const M=()=>["B","KB","MB","GB","TB","PB"],S=e=>{const r=M();let n=e,i=0;for(;n>1024&&i<r.length-1;)i+=1,n/=1024;const t=n.toFixed(2),c=n.toFixed(0);return`${+t-Math.floor(+t)===0?c:t} ${r[i]}`};function D(e){const r=e.match(/(.){5}(\.[^.]*)?$/);if(r){const n=r[0];return[e.slice(0,-n.length),n]}return[e,""]}const l=F().file,q=p.div`
  display: flex; 
  white-space: pre;
  word-break: keep-all;
`,x=p.div`
  overflow: hidden;
  text-overflow: ellipsis;
`,U=({children:e})=>{const r=_.useRef(null),[n,i]=_.useState(!1);_.useEffect(()=>{if(!r.current)return;const o=r.current,s=new ResizeObserver(()=>{i(o.offsetWidth<o.scrollWidth)});return s.observe(o),()=>s.unobserve(o)},[r.current]);const[t,c]=D(e),f=a.createElement(q,null,a.createElement(x,{ref:r},t),c);return n?a.createElement(I,{text:e},f):f},d=p(({children:e,truncateName:r,...n})=>!r||e.length<15?a.createElement(v,{...n,type:"BTR3"},e):a.createElement(v,{...n,type:"BTR3"},a.createElement(U,null,e)))`
  overflow: hidden;
  word-break: break-word;
`,m=p(({percent:e,size:r,...n})=>{const{t:i}=H(),t=S(r);if(e===void 0)return a.createElement(v,{...n,type:"BTR4"},t);const c=(Number.parseFloat(t)*e/100).toFixed(2);return a.createElement(v,{...n,type:"BTR4"},i("uploader.progress",{progress:c,size:t}))})``,h=p(v).attrs({type:"BTR4"})``,g=p(u).attrs({gap:8,width:"initial",wrap:"nowrap"})`
  background: ${l.enabled.background};
  border: 1px solid ${l.enabled.border};
  border-radius: 4px;
  padding: 5px 11px;

  > :nth-child(1) {
    flex: 1;
  }

  > :nth-child(2) {
    flex: 0 0 auto;
  }

  svg {
    flex: 0 0 auto;
  }

  ${d} {
    color: ${l.enabled.name};
  }

  ${m} {
    color: ${l.enabled.size};
  }

  .file-icon, .download-icon {
    color: ${l.enabled.icon};
  }

  &:hover {
    background: ${l.hover.background};
    border-color: ${l.hover.border};

    ${d} {
      color: ${l.hover.name};
    }
  }

  ${e=>e.$done&&`
    &:not(:hover) .close-icon {
      display: none;
    }
  `}

  ${e=>e.$done&&!e.$disabled&&`
    &:active {
      background-color: ${l.active.background};
      border-color: ${l.active.border};
    }
  `}

  ${e=>e.$done&&!e.$disabled&&e.onClick&&`
    &:not(:hover) .download-icon {
      display: none;
    }

    &:hover {
      cursor: pointer;

      .file-icon {
        display: none;
      }
    }
  `}

  ${e=>e.$done&&e.$disabled&&`
    .close-icon {
      display: none;
    }
  `}

  ${e=>e.$error&&`
    &, &:hover {
      background: ${l.invalid.background};
      border-color: ${l.invalid.border};

      .error-icon {
        color: ${l.invalid.icon};
      }

      ${d} {
        color: ${l.invalid.name};
      }

      ${h} {
        color: ${l.invalid.validation};
      }
    }
  `}

  .success-icon {
    color: ${l.success.icon};
  }

  ${e=>e.$disabled&&`
    &, &:hover {
      background: ${l.disabled.background};
      border-color: ${l.disabled.border};

      .file-icon, .error-icon {
        color: ${l.disabled.icon};
      }

      ${d}, ${h} {
        color: ${l.disabled.name};
      }

      ${m} {
        color: ${l.disabled.size};
      }
    }
  `}
`,N=p.div``;try{q.displayName="TextReducerContainer",q.__docgenInfo={description:"",displayName:"TextReducerContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{x.displayName="TextReducerPart1",x.__docgenInfo={description:"",displayName:"TextReducerPart1",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{d.displayName="FileName",d.__docgenInfo={description:"",displayName:"FileName",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{m.displayName="FileSize",m.__docgenInfo={description:"",displayName:"FileSize",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{h.displayName="FileError",h.__docgenInfo={description:"",displayName:"FileError",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{g.displayName="FileWrapper",g.__docgenInfo={description:"",displayName:"FileWrapper",props:{size:{defaultValue:null,description:"@deprecated Use gap instead",name:"size",required:!1,type:{name:"number"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},direction:{defaultValue:null,description:"Direction",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},width:{defaultValue:null,description:"Width",name:"width",required:!1,type:{name:"enum",value:[{value:'"initial"'}]}},height:{defaultValue:null,description:"Height",name:"height",required:!1,type:{name:"string"}},wrap:{defaultValue:null,description:"Flex wrap",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"nowrap"'}]}},align:{defaultValue:null,description:"Flex align",name:"align",required:!1,type:{name:"AlignItems"}},gap:{defaultValue:null,description:`Gap between elements

closest - 2px,
dependent - 4px,
related - 8px,
grouped - 16px,
section - 24px,
separated - 32px`,name:"gap",required:!1,type:{name:"8 | ([Gap, Gap] & 8)"}},justify:{defaultValue:null,description:"Justify content",name:"justify",required:!1,type:{name:"JustifyContent"}},maxWidth:{defaultValue:null,description:`none - no width limit,
medium - 872px,
large - 1592px`,name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"none"'}]}},$disabled:{defaultValue:null,description:"",name:"$disabled",required:!1,type:{name:"boolean"}},$done:{defaultValue:null,description:"",name:"$done",required:!1,type:{name:"boolean"}},$error:{defaultValue:null,description:"",name:"$error",required:!1,type:{name:"boolean"}},$uploading:{defaultValue:null,description:"",name:"$uploading",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{N.displayName="UploadListWrapper",N.__docgenInfo={description:"",displayName:"UploadListWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}function k({className:e,disabled:r,name:n,onDownload:i,onRemove:t,onUpload:c,percent:f,size:o,status:s,truncateName:$,...y}){if(s==="uploading"||s===void 0)return a.createElement(g,{$disabled:r,className:e},a.createElement(u,{gap:8,wrap:"nowrap",style:{overflow:"hidden"}},s==="uploading"?a.createElement(L,{size:"small"}):a.createElement(V,{className:"file-icon"}),a.createElement(d,{truncateName:$},n)),a.createElement(u,{gap:8},o&&a.createElement(m,{percent:f,size:o}),a.createElement(w,{className:"close-icon",disabled:r,icon:a.createElement(E,null),onClick:t,size:"large"})));if(s==="error"){const b=typeof y.error=="string"?y.error:y.error instanceof Error?y.error.message:String(y.error);return a.createElement(g,{className:e,$disabled:r,$error:!0,align:"flex-start"},a.createElement(u,{align:"flex-start",gap:8,wrap:"nowrap",style:{overflow:"hidden"}},a.createElement(z,{className:"error-icon",style:{marginTop:2}}),a.createElement(u,{align:"flex-start",direction:"vertical",wrap:"nowrap",style:{overflow:"hidden"}},a.createElement(d,{style:{maxWidth:"100%"},truncateName:$},n),a.createElement(h,null,b))),a.createElement(u,{gap:4},a.createElement(w,{disabled:r,icon:a.createElement(C,null),onClick:c,size:"large"}),a.createElement(w,{className:"close-icon",disabled:r,icon:a.createElement(E,null),onClick:t,size:"large"})))}return a.createElement(g,{$disabled:r,$done:!0,className:e,onClick:r?void 0:i},a.createElement(u,{gap:8,wrap:"nowrap",style:{overflow:"hidden"}},s==="success"?a.createElement(R,{className:"success-icon file-icon"}):a.createElement(V,{className:"file-icon"}),!r&&i&&a.createElement(A,{className:"download-icon"}),a.createElement(d,{truncateName:$},n)),a.createElement(u,{gap:8},o&&a.createElement(m,{size:o}),a.createElement(w,{className:"close-icon",disabled:r,icon:a.createElement(E,null),onClick:b=>{b.stopPropagation(),t==null||t()},size:"large"})))}try{k.displayName="FileItem",k.__docgenInfo={description:"",displayName:"FileItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onDownload:{defaultValue:null,description:"",name:"onDownload",required:!1,type:{name:"(() => void)"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"(() => void)"}},onUpload:{defaultValue:null,description:"",name:"onUpload",required:!1,type:{name:"(() => void)"}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"done"'},{value:'"uploading"'},{value:'"removed"'}]}},truncateName:{defaultValue:null,description:"",name:"truncateName",required:!1,type:{name:"boolean"}}}}}catch{}export{k as F,N as U,V as a,S as c,z as o};
