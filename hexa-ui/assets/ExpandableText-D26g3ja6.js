import{C as y,H as v,A as _,D as C,R as n,ai as R,F as V,w as I,r as d,l as q,T as N}from"./iframe-4-PRSI1I.js";import{u as B}from"./useResizeObserver-8Hk-mg1Z.js";import{v as M}from"./v4-BoP187Zn.js";const g=v(_)``,H=C(),S=y`
  word-break: break-all;
  padding: 0;
  position: relative;
  display: block;

  .hexa-ui-expander { 
    z-index: 2; 
  }

  &.expandable-text-clipped {
    padding-inline-end: 20px;

    .hexa-ui-expander {
      visibility: visible;
    }
  }

  &.expandable-text-expanded {
    overflow: visible;
    white-space: normal;

    .hexa-ui-expander {
      transform: rotate(180deg);
    }
  }

  &:not(.expandable-text-expanded) {
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    max-width: 100%;
    transition: all ease 50ms;
    display: block;

    kl-auto-link > div {
      display: inline;
    }
  }

  .inner-text-wrapper {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:focus-visible {
    box-shadow: ${H("focus.boxShadow")};  
    border-radius: var(--radius--xs);
    outline: none;
  }
  
  ${g} {
    position: absolute;
    top: 4px;
    right: 0;
    visibility: hidden;
  }

  .kl6-field,
  .kl6-field-control-wrapper,
  .kl6-field-control-box {
    min-width: 0;
    max-width: 100%;
  }

  .kl6-link,
  .kl6-link > span {
    white-space: inherit;
    word-break: inherit;
  }
`,A=y`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0 0 0 auto;
    width: 80px;
    z-index: 1;
    pointer-events: none;
    background-color: var(--bg--neutral--level_0);
    mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, #000 75%);
    transition: background-color 0.3s;
    overflow: hidden;
    text-overflow: clip;
  }

  &[data-hide]::after {
    display: none;
  }

  .inner-text-wrapper {
    text-overflow: clip;
  }
`,P=(e,t,a)=>a&&Math.round(e.offsetWidth)<t.current||Math.round(e.offsetWidth)<Math.round(e.scrollWidth),c=({onClick:e,className:t})=>n.createElement(g,{className:t,key:M(),onClick:a=>{a.stopPropagation(),e()},onKeyDown:a=>{a.key==="Enter"&&e()},size:"large",icon:n.createElement(R,null)});try{c.displayName="TextExpander",c.__docgenInfo={description:"",displayName:"TextExpander",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const W=e=>V(e,{componentName:"expandableText",defaultValues:{}}),T=v(N).withConfig({shouldForwardProp:e=>!["cssConfig","clipped","expanded"].includes(e)})`${S}`,b=e=>{const t=W(e),a=I(t);return n.createElement(F,{...a})},z=v(T)`
  ${A}
`,F=({type:e="BTR3",testAttributes:t,onExpand:a=()=>{},useGradient:m=!1,className:L,...l})=>{const i=d.useRef(null),[r,x]=d.useState(!1),[s,u]=d.useState(!1),p=d.useRef(0),f=B(i,150);d.useLayoutEffect(()=>{var h;const o=(h=i.current)==null?void 0:h.childNodes[0];if(!o||!f)return;const E=P(o,p,s);x(E)},[p,f]),d.useLayoutEffect(()=>{const{current:o}=i;o&&(o.title=r&&(l.altText??typeof l.children=="string")?String(l.children):"",r||(u(!1),a(!1)))},[r,l.altText]);const w=n.useCallback(()=>{if(s){u(!1),a(!1),x(!0);return}i.current&&(p.current=i.current.scrollWidth),u(!0),a(!0)},[s]),k=m?z:T;return n.createElement(k,{className:q({"expandable-text-clipped":r},{"expandable-text-expanded":s},{"expandable-gradient":m}),ref:i,clipped:r,expanded:s,"data-hide":s||!r?!0:void 0,type:e,tabIndex:0,...t,...l},n.createElement("div",{className:"inner-text-wrapper"},l.children),n.createElement(c,{onClick:w,className:"hexa-ui-expander"}))};try{b.displayName="ExpandableText",b.__docgenInfo={description:"",displayName:"ExpandableText",props:{testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},type:{defaultValue:{value:"BTR3"},description:"Text Type",name:"type",required:!1,type:{name:"enum",value:[{value:'"MTR3"'},{value:'"MTR4"'},{value:'"BTM2"'},{value:'"BTM3"'},{value:'"BTM4"'},{value:'"BTM5"'},{value:'"BTR2"'},{value:'"BTR3"'},{value:'"BTR4"'},{value:'"BTR5"'},{value:'"BTS4"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"(Readonly<{ key: ThemeKey; colors: { product: { text: { primary: string; secondary: string; disabled: string; link: string; critical: string; warning: string; positive: string; }; bg: { global: string; section: string; hover: string; selected: string; }; icon: { ...; }; }; ... 123 more ...; defaultPalette: { ...; };..."}},themedColor:{defaultValue:null,description:"@deprecated Use 'color' prop instead",name:"themedColor",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"medium"'},{value:'"primary"'},{value:'"secondary"'},{value:'"critical"'},{value:'"positive"'},{value:'"secondary2"'},{value:'"base-icon"'},{value:'"baseicon"'},{value:'"secondary-solid"'},{value:'"secondary2-solid"'},{value:'"base-icon-solid"'},{value:'"disabled-solid"'},{value:'"primary-invert"'},{value:'"secondary-invert"'},{value:'"secondary2-invert"'},{value:'"base-icon-invert"'},{value:'"baseicon-invert"'},{value:'"disabled-invert"'},{value:'"secondary-invert-solid"'},{value:'"secondary2-invert-solid"'},{value:'"base-icon-invert-solid"'},{value:'"disabled-invert-solid"'},{value:'"high"'},{value:'"low"'},{value:'"info"'}]}},htmlTag:{defaultValue:null,description:"",name:"htmlTag",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'},{value:'"span"'}]}},altText:{defaultValue:null,description:"Alternative text",name:"altText",required:!1,type:{name:"string"}},onExpand:{defaultValue:{value:"() => {}"},description:"Function-trigger when text expanded",name:"onExpand",required:!1,type:{name:"((expanded: boolean) => void)"}}}}}catch{}export{b as E};
