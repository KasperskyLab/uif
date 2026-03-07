import{L as k}from"./Loader-Y1gOuUZF.js";import{aF as F,H as p,S as c,R as s,$,r as e,y as z,A as v,aG as h}from"./iframe-zz6a49H8.js";import{t as x,l as B,o as q,a as N}from"./StatusDangerOutlineSquare-CfDrKxro.js";import{u as S}from"./useTranslation-7a9748wG.js";const C=()=>["B","KB","MB","GB","TB","PB"],R=r=>{const t=C();let o=r,l=0;for(;o>1024&&l<t.length-1;)l+=1,o/=1024;const a=o.toFixed(2),d=o.toFixed(0);return`${+a-Math.floor(+a)===0?d:a} ${t[l]}`};function W(r){const t=r.match(/(.){5}(\.[^.]*)?$/);if(t){const o=t[0];return[r.slice(0,-o.length),o]}return[r,""]}const n=F().file,L=p.div`
  display: flex; 
  white-space: pre;
  word-break: keep-all;
`,U=p.div`
  overflow: hidden;
  text-overflow: ellipsis;
`,D=({children:r})=>{const t=e.useRef(null),[o,l]=e.useState(!1);e.useEffect(()=>{if(!t.current)return;const i=t.current,u=new ResizeObserver(()=>{l(i.offsetWidth<i.scrollWidth)});return u.observe(i),()=>u.unobserve(i)},[t.current]);const[a,d]=W(r),f=s.createElement(L,null,s.createElement(U,{ref:t},a),d);return o?s.createElement(z,{text:r},f):f},m=p(({children:r,truncateName:t,...o})=>!t||r.length<15?s.createElement($,{...o,type:"BTR3"},r):s.createElement($,{...o,type:"BTR3"},s.createElement(D,null,r)))`
  overflow: hidden;
  word-break: break-word;
`,b=p(({percent:r,size:t,...o})=>{const{t:l}=S(),a=R(t);if(r===void 0)return s.createElement($,{...o,type:"BTR4"},a);const d=(Number.parseFloat(a)*r/100).toFixed(2);return s.createElement($,{...o,type:"BTR4"},l("uploader.progress",{progress:d,size:a}))})``,T=p($).attrs({type:"BTR4"})``,y=p(c).attrs({gap:8,width:"initial",wrap:"nowrap"})`
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

  ${m} {
    color: ${n.enabled.name};
  }

  ${b} {
    color: ${n.enabled.size};
  }

  .file-icon, .download-icon {
    color: ${n.enabled.icon};
  }

  &:hover {
    background: ${n.hover.background};
    border-color: ${n.hover.border};

    ${m} {
      color: ${n.hover.name};
    }
  }

  ${r=>r.$done&&`
    &:not(:hover) .close-icon {
      display: none;
    }
  `}

  ${r=>r.$done&&!r.$disabled&&`
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

  ${r=>r.$done&&r.$disabled&&`
    .close-icon {
      display: none;
    }
  `}

  ${r=>r.$error&&`
    &, &:hover {
      background: ${n.invalid.background};
      border-color: ${n.invalid.border};

      .error-icon {
        color: ${n.invalid.icon};
      }

      ${m} {
        color: ${n.invalid.name};
      }

      ${T} {
        color: ${n.invalid.validation};
      }
    }
  `}

  ${r=>r.$disabled&&`
    &, &:hover {
      background: ${n.disabled.background};
      border-color: ${n.disabled.border};

      .file-icon, .error-icon {
        color: ${n.disabled.icon};
      }

      ${m}, ${T} {
        color: ${n.disabled.name};
      }

      ${b} {
        color: ${n.disabled.size};
      }
    }
  `}
`,G=p.div``;function H({className:r,disabled:t,name:o,onDownload:l,onRemove:a,onUpload:d,percent:f,size:i,status:u,truncateName:E,...g}){if(u==="uploading"||u===void 0)return e.createElement(y,{$disabled:t,className:r},e.createElement(c,{gap:8,wrap:"nowrap",style:{overflow:"hidden"}},u==="uploading"?e.createElement(k,{size:"small"}):e.createElement(x,{className:"file-icon"}),e.createElement(m,{truncateName:E},o)),e.createElement(c,{gap:8},i&&e.createElement(b,{percent:f,size:i}),e.createElement(v,{className:"close-icon",disabled:t,icon:e.createElement(h,null),onClick:a,size:"large"})));if(u==="error"){const w=typeof g.error=="string"?g.error:g.error instanceof Error?g.error.message:String(g.error);return e.createElement(y,{className:r,$disabled:t,$error:!0,align:"flex-start"},e.createElement(c,{align:"flex-start",gap:8,wrap:"nowrap",style:{overflow:"hidden"}},e.createElement(B,{className:"error-icon",style:{marginTop:2}}),e.createElement(c,{align:"flex-start",direction:"vertical",wrap:"nowrap",style:{overflow:"hidden"}},e.createElement(m,{style:{maxWidth:"100%"},truncateName:E},o),e.createElement(T,null,w))),e.createElement(c,{gap:4},e.createElement(v,{disabled:t,icon:e.createElement(q,null),onClick:d,size:"large"}),e.createElement(v,{className:"close-icon",disabled:t,icon:e.createElement(h,null),onClick:a,size:"large"})))}return e.createElement(y,{$disabled:t,$done:!0,className:r,onClick:t?void 0:l},e.createElement(c,{gap:8,wrap:"nowrap",style:{overflow:"hidden"}},e.createElement(x,{className:"file-icon"}),!t&&e.createElement(N,{className:"download-icon"}),e.createElement(m,{truncateName:E},o)),e.createElement(c,{gap:8},i&&e.createElement(b,{size:i}),e.createElement(v,{className:"close-icon",disabled:t,icon:e.createElement(h,null),onClick:w=>{w.stopPropagation(),a==null||a()},size:"large"})))}H.__docgenInfo={description:"",methods:[],displayName:"FileItem",props:{className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"any"},description:""},name:{required:!0,tsType:{name:"string"},description:""},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onUpload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},percent:{required:!1,tsType:{name:"number"},description:""},size:{required:!0,tsType:{name:"number"},description:""},status:{required:!1,tsType:{name:"union",raw:"'done' | 'uploading' | 'removed' | 'error' | 'success'",elements:[{name:"literal",value:"'done'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'removed'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:""},truncateName:{required:!1,tsType:{name:"boolean"},description:""}}};export{H as F,G as U,R as c};
