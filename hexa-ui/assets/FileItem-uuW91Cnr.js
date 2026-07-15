import{H as m,S as s,R as u,a3 as h,aJ as F,r as a,v as k,A as b,aK as q}from"./iframe-4-PRSI1I.js";import{L as I}from"./Loader-CzWCOjAf.js";import{r as z}from"./Download2-BjY7BZyL.js";import{o as x,a as A}from"./StatusDangerOutlineSquare-CLLNECtF.js";import{o as R}from"./Reload-C42RAgZb.js";import{u as L}from"./useTranslation-jUtuSwd5.js";const W=()=>["B","KB","MB","GB","TB","PB"],B=e=>{const r=W();let t=e,i=0;for(;t>1024&&i<r.length-1;)i+=1,t/=1024;const l=t.toFixed(2),c=t.toFixed(0);return`${+l-Math.floor(+l)===0?c:l} ${r[i]}`};function C(e){const r=e.match(/(.){5}(\.[^.]*)?$/);if(r){const t=r[0];return[e.slice(0,-t.length),t]}return[e,""]}const n=F().file,V=m.div`
  display: flex; 
  white-space: pre;
  word-break: keep-all;
`,E=m.div`
  overflow: hidden;
  text-overflow: ellipsis;
`,H=({children:e})=>{const r=a.useRef(null),[t,i]=a.useState(!1);a.useEffect(()=>{if(!r.current)return;const d=r.current,p=new ResizeObserver(()=>{i(d.offsetWidth<d.scrollWidth)});return p.observe(d),()=>p.unobserve(d)},[r.current]);const[l,c]=C(e),y=u.createElement(V,null,u.createElement(E,{ref:r},l),c);return t?u.createElement(k,{text:e},y):y},o=m(({children:e,truncateName:r,...t})=>!r||e.length<15?u.createElement(h,{...t,type:"BTR3"},e):u.createElement(h,{...t,type:"BTR3"},u.createElement(H,null,e)))`
  overflow: hidden;
  word-break: break-word;
`,f=m(({percent:e,size:r,...t})=>{const{t:i}=L(),l=B(r);if(e===void 0)return u.createElement(h,{...t,type:"BTR4"},l);const c=(Number.parseFloat(l)*e/100).toFixed(2);return u.createElement(h,{...t,type:"BTR4"},i("uploader.progress",{progress:c,size:l}))})``,_=m(h).attrs({type:"BTR4"})``,v=m(s).attrs({gap:8,width:"initial",wrap:"nowrap"})`
  background: ${n.enabled.background};
  border: 1px solid ${n.enabled.border};
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

  ${o} {
    color: ${n.enabled.name};
  }

  ${f} {
    color: ${n.enabled.size};
  }

  .file-icon, .download-icon {
    color: ${n.enabled.icon};
  }

  &:hover {
    background: ${n.hover.background};
    border-color: ${n.hover.border};

    ${o} {
      color: ${n.hover.name};
    }
  }

  ${e=>e.$done&&`
    &:not(:hover) .close-icon {
      display: none;
    }
  `}

  ${e=>e.$done&&!e.$disabled&&`
    &:not(:hover) .download-icon {
      display: none;
    }

    &:hover {
      cursor: pointer;

      .file-icon {
        display: none;
      }
    }

    &:active {
      background-color: ${n.active.background};
      border-color: ${n.active.border};
    }
  `}

  ${e=>e.$done&&e.$disabled&&`
    .close-icon {
      display: none;
    }
  `}

  ${e=>e.$error&&`
    &, &:hover {
      background: ${n.invalid.background};
      border-color: ${n.invalid.border};

      .error-icon {
        color: ${n.invalid.icon};
      }

      ${o} {
        color: ${n.invalid.name};
      }

      ${_} {
        color: ${n.invalid.validation};
      }
    }
  `}

  ${e=>e.$disabled&&`
    &, &:hover {
      background: ${n.disabled.background};
      border-color: ${n.disabled.border};

      .file-icon, .error-icon {
        color: ${n.disabled.icon};
      }

      ${o}, ${_} {
        color: ${n.disabled.name};
      }

      ${f} {
        color: ${n.disabled.size};
      }
    }
  `}
`,T=m.div``;try{V.displayName="TextReducerContainer",V.__docgenInfo={description:"",displayName:"TextReducerContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{E.displayName="TextReducerPart1",E.__docgenInfo={description:"",displayName:"TextReducerPart1",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{o.displayName="FileName",o.__docgenInfo={description:"",displayName:"FileName",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{f.displayName="FileSize",f.__docgenInfo={description:"",displayName:"FileSize",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{_.displayName="FileError",_.__docgenInfo={description:"",displayName:"FileError",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{v.displayName="FileWrapper",v.__docgenInfo={description:"",displayName:"FileWrapper",props:{testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"@deprecated Use gap instead",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width",name:"width",required:!1,type:{name:"enum",value:[{value:'"initial"'}]}},height:{defaultValue:null,description:"Height",name:"height",required:!1,type:{name:"string"}},wrap:{defaultValue:null,description:"Flex wrap",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"nowrap"'}]}},align:{defaultValue:null,description:"Flex align",name:"align",required:!1,type:{name:"AlignItems"}},direction:{defaultValue:null,description:"Direction",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gap:{defaultValue:null,description:`Gap between elements

closest - 2px,
dependent - 4px,
related - 8px,
grouped - 16px,
section - 24px,
separated - 32px`,name:"gap",required:!1,type:{name:"8 | ([Gap, Gap] & 8)"}},justify:{defaultValue:null,description:"Justify content",name:"justify",required:!1,type:{name:"JustifyContent"}},maxWidth:{defaultValue:null,description:`none - no width limit,
medium - 872px,
large - 1592px`,name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"none"'}]}},$disabled:{defaultValue:null,description:"",name:"$disabled",required:!1,type:{name:"boolean"}},$done:{defaultValue:null,description:"",name:"$done",required:!1,type:{name:"boolean"}},$error:{defaultValue:null,description:"",name:"$error",required:!1,type:{name:"boolean"}},$uploading:{defaultValue:null,description:"",name:"$uploading",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{T.displayName="UploadListWrapper",T.__docgenInfo={description:"",displayName:"UploadListWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}function N({className:e,disabled:r,name:t,onDownload:i,onRemove:l,onUpload:c,percent:y,size:d,status:p,truncateName:$,...g}){if(p==="uploading"||p===void 0)return a.createElement(v,{$disabled:r,className:e},a.createElement(s,{gap:8,wrap:"nowrap",style:{overflow:"hidden"}},p==="uploading"?a.createElement(I,{size:"small"}):a.createElement(x,{className:"file-icon"}),a.createElement(o,{truncateName:$},t)),a.createElement(s,{gap:8},d&&a.createElement(f,{percent:y,size:d}),a.createElement(b,{className:"close-icon",disabled:r,icon:a.createElement(q,null),onClick:l,size:"large"})));if(p==="error"){const w=typeof g.error=="string"?g.error:g.error instanceof Error?g.error.message:String(g.error);return a.createElement(v,{className:e,$disabled:r,$error:!0,align:"flex-start"},a.createElement(s,{align:"flex-start",gap:8,wrap:"nowrap",style:{overflow:"hidden"}},a.createElement(A,{className:"error-icon",style:{marginTop:2}}),a.createElement(s,{align:"flex-start",direction:"vertical",wrap:"nowrap",style:{overflow:"hidden"}},a.createElement(o,{style:{maxWidth:"100%"},truncateName:$},t),a.createElement(_,null,w))),a.createElement(s,{gap:4},a.createElement(b,{disabled:r,icon:a.createElement(R,null),onClick:c,size:"large"}),a.createElement(b,{className:"close-icon",disabled:r,icon:a.createElement(q,null),onClick:l,size:"large"})))}return a.createElement(v,{$disabled:r,$done:!0,className:e,onClick:r?void 0:i},a.createElement(s,{gap:8,wrap:"nowrap",style:{overflow:"hidden"}},a.createElement(x,{className:"file-icon"}),!r&&a.createElement(z,{className:"download-icon"}),a.createElement(o,{truncateName:$},t)),a.createElement(s,{gap:8},d&&a.createElement(f,{size:d}),a.createElement(b,{className:"close-icon",disabled:r,icon:a.createElement(q,null),onClick:w=>{w.stopPropagation(),l==null||l()},size:"large"})))}try{N.displayName="FileItem",N.__docgenInfo={description:"",displayName:"FileItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onDownload:{defaultValue:null,description:"",name:"onDownload",required:!1,type:{name:"(() => void)"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"(() => void)"}},onUpload:{defaultValue:null,description:"",name:"onUpload",required:!1,type:{name:"(() => void)"}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"done"'},{value:'"uploading"'},{value:'"removed"'}]}},truncateName:{defaultValue:null,description:"",name:"truncateName",required:!1,type:{name:"boolean"}}}}}catch{}export{N as F,T as U,B as c};
