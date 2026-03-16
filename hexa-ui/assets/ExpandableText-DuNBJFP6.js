import{H as x,A as E,a1 as w,al as k,a0 as g,R as r,ag as C,w as R,u as S,r as d,T as $}from"./iframe-DlY6n6Um.js";import{u as q}from"./useResizeObserver-CIT607-3.js";import{v as A}from"./v4-BoP187Zn.js";const b=x(E)``,I=w(),N=g`
  word-break: break-all;
  padding: 2px 20px 2px 2px;
  position: relative;
  display: block;
  
  &:focus-visible {
    box-shadow: ${I("focus.boxShadow")};  
    border-radius: ${k[2]}px;
    outline: none;
  }
  
  ${b} {
    transform: ${e=>e.expanded?"rotate(180deg)":""};
    visibility: ${e=>e.clipped?"":"hidden"};
    position: absolute;
    top: 4px;
    right: 0;
  }

  ${({expanded:e})=>!e&&g`
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: normal;
      overflow: hidden;
      max-width: 100%;
      transition: all ease 50ms;
      display: block;

      kl-auto-link > div {
        display: inline;
      }
    `}
`,P=(e,n)=>Math.round(e.offsetWidth)<Math.round(n.current||e.scrollWidth),u=({onClick:e,className:n})=>r.createElement(b,{className:n,key:A(),onClick:t=>{t.stopPropagation(),e()},onKeyDown:t=>{t.key==="Enter"&&e()},size:"large",icon:r.createElement(C,null)});u.__docgenInfo={description:"",methods:[],displayName:"TextExpander",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const W=e=>R(e,{componentName:"expandableText",defaultValues:{}}),T=x($).withConfig({shouldForwardProp:e=>!["cssConfig","clipped","expanded"].includes(e)})`${N}`,_=e=>{const n=W(e),t=S(n);return r.createElement(B,{...t})},z=x(T)`
  position: relative;
  overflow: hidden;
  text-overflow: clip;

  &::after {
    content: '';
    position: absolute;
    inset: 0 0 0 auto;
    width: 80px;
    z-index: 1;
    pointer-events: none;
    background-color: var(--bg--global);
    mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, #000 75%);
    transition: background-color 0.3s;
  }

  &[data-hide]::after {
    display: none;
  }

  .hexa-ui-expander { 
    z-index: 2; 
  }
`,B=({type:e="BTR3",testAttributes:n,onExpand:t=()=>{},useGradient:v=!1,...a})=>{const i=d.useRef(null),[o,m]=d.useState(!1),[s,c]=d.useState(!1),p=d.useRef(0),f=q(i,150);d.useLayoutEffect(()=>{const l=i.current;if(!l||!f)return;const y=P(l,p);m(y)},[p,f]),d.useLayoutEffect(()=>{const{current:l}=i;l&&(l.title=o&&(a.altText??typeof a.children=="string")?String(a.children):"",o||(c(!1),t(!1)))},[o,a.altText]);const h=r.useCallback(()=>{if(s){c(!1),t(!1),m(!0);return}i.current&&(p.current=i.current.scrollWidth),c(!0),t(!0)},[s]);return v?r.createElement(z,{ref:i,clipped:o,expanded:s,"data-hide":s||!o?!0:void 0,"data-expandable-gradient":!0,type:e,tabIndex:0,...n,...a},a.children,r.createElement(u,{onClick:h,className:"hexa-ui-expander"})):r.createElement(T,{ref:i,clipped:o,expanded:s,"data-expanded":s?!0:void 0,type:e,tabIndex:0,...n,...a},a.children,r.createElement(u,{onClick:h}))};_.__docgenInfo={description:"",methods:[],displayName:"ExpandableText",props:{theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},altText:{required:!1,tsType:{name:"string"},description:"Alternative text"},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:"Function-trigger when text expanded"}}};export{_ as E};
