import{R as e,b as pe,C as S,H as C,d as I,bj as He,Z as le,j as Le,r as s,u as ce,I as Ve,A as qe,a4 as he}from"./iframe-DedYZBTA.js";import{L as Ue,H as ze,F as Be,C as De,S as $e}from"./Sider-BrE3ju6i.js";import{o as Oe,a as We,b as je}from"./ArrowRightMini-zdpqicP8.js";import{S as Ke}from"./Submenu-DH5AzpW9.js";import{T as Ze}from"./TextWithTruncation-9ZCEnufi.js";import{I as Je}from"./Indicator-Bx9eTEZ-.js";import{B as Xe}from"./Badge-MGlXnKsn.js";import{o as Ye}from"./StatusOkSolid-OcpnRZV_.js";import{u as Ne}from"./useTranslation-od-Kmf1k.js";const Ge=e.forwardRef((a,t)=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",ref:t,...a},e.createElement("path",{fill:pe(a.color)||a.color||"currentColor",fillRule:"evenodd",d:"M4.2706.95a.65.65 0 1 0 0 1.3h.5836v4.3149c0 .816-.6579 1.4783-1.4722 1.4854h-.0133a.65.65 0 0 0 0 1.3h3.9814v5.0496a.65.65 0 1 0 1.3 0V9.3503h3.9812a.65.65 0 1 0-.0001-1.3c-.8204 0-1.4855-.6651-1.4855-1.4855V2.25h.5836a.65.65 0 1 0 0-1.3zm5.5751 1.3H6.1542v4.3149a2.77 2.77 0 0 1-.4287 1.4854h4.549a2.77 2.77 0 0 1-.4288-1.4855z"}))),fe=e.memo(e.forwardRef((a,t)=>{const{klId:l,testId:r,...d}=a;return e.createElement(Ge,{"kl-id":l,"data-testid":r,ref:t,...d})}));fe.displayName="Pin";const Qe=e.forwardRef((a,t)=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",ref:t,...a},e.createElement("path",{fill:pe(a.color)||a.color||"currentColor",fillRule:"evenodd",d:"M15 8c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7m-9-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"}))),_e=e.memo(e.forwardRef((a,t)=>{const{klId:l,testId:r,...d}=a;return e.createElement(Qe,{"kl-id":l,"data-testid":r,ref:t,...d})}));_e.displayName="StatusNoThreatSolid";const ea=e.forwardRef((a,t)=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",ref:t,...a},e.createElement("path",{fill:pe(a.color)||a.color||"currentColor",fillRule:"evenodd",d:"M9.8465 5.838V2.2498H6.258l-1.3-1.3h6.7717a.65.65 0 1 1 0 1.3h-.5833v4.8884zM2.4658 2.1236 4.8542 4.512v2.0528c0 .8132-.6536 1.4739-1.4641 1.4853h-.0204a.6501.6501 0 1 0-.001 1.3002L3.398 9.35h3.9527v5.0496a.65.65 0 1 0 1.3 0V9.3501h1.0417l1.6805 1.6804a.65.65 0 0 0 .9192-.9193l-8.907-8.907a.65.65 0 1 0-.9192.9193m3.2598 5.9266h2.6667L6.1543 5.812v.7527c0 .546-.1572 1.0554-.4287 1.4854"}))),xe=e.memo(e.forwardRef((a,t)=>{const{klId:l,testId:r,...d}=a;return e.createElement(ea,{"kl-id":l,"data-testid":r,ref:t,...d})}));xe.displayName="Unpin";var X=Ue;X.Header=ze;X.Footer=Be;X.Content=De;X.Sider=$e;const aa=S`
  background-color: var(--menu--bg--surface--enabled);
  border-right: 1px solid var(--menu--border--enabled);
  
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    padding: 16px 0;
    gap: 8px;
  }

  &.menu-submenu-margin {
    margin-right: 280px;
  }

  && .menu-collapse-button,
  && .menu-collapse-button > svg {
    color: var(--menu_item--text--label--enabled);
  }
`,ta=S`
  padding: 0 var(--spacing--padding_l);

  button {
    margin: var(--spacing--gap_related) var(--spacing--gap_related) 0;
  }
`,ke=S`
  --effects--elevation--medium--1: 0px 8px 12px 0px;
  --effects--elevation--medium--2: 0px 0px 1px 0px;
  --menu-level-offset-2: 24px; 
  --menu-level-offset-3: 52px;
  --base-menu-item-height: 20px;
  --menu-item-height: 32px;

  color: var(--menu_item--text--label--enabled);

  .nav-minimized>& {
    width: var(--menu-item-height);
  }
  
  .uif-nav-item-entry {
    display: flex;
    flex-wrap: nowrap;
    align-items: normal;
    min-height: var(--menu-item-height);
    border-radius: 8px;
    padding: var(--spacing--padding_sm) var(--spacing--padding_m);
    gap: 8px;
    user-select: none;
    cursor: pointer;
    
    .uif-nav-fav-add {
      opacity: 0;
      display: flex;
      align-items: center;
    }
    
    &.uif-nav-item-user {
      height: auto;
      padding: 3px 8px;
      cursor: pointer;
      
      .uif-nav-item-entry-icon {
        align-self: flex-start;
      }
    }
    
    .uif-nav-item-entry-role {
      font-size: 12px;
      color: var(--menu_item--text--label--disabled);
    }

    &:hover {
      background: var(--menu_item--bg--hover);
      
      .uif-nav-fav-add {
        opacity: 1;
      }
    }

    &:active {
      background: var(--menu_item--bg--active);
    }
  }

  a.uif-nav-item-entry {
    color: inherit;
  }

  .uif-nav-item-entry-icon {
    display: flex;
    align-items: center;
    min-height: var(--base-menu-item-height);
    height: var(--base-menu-item-height);
  }

  .uif-nav-item-entry-title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    line-height: var(--base-menu-item-height);
    
    .title-ellipsis {
      white-space: nowrap;
    }
  }
  
  .uif-nav-item-entry-props {
    display: flex;
    align-items: center;
    gap: 2px;
    min-height: var(--base-menu-item-height);
    height: var(--base-menu-item-height);
  }

  .uif-nav-item-entry-arrow {
    transition: all ease 150ms;
  }

  .uif-nav-item-child {
    margin-left: 0px;
    transition: grid-template-rows ease 150ms;
    display: grid;
    grid-template-rows: 0fr;

    .uif-nav-item-entry-icon {
      display: none;
    }
  }

  .uif-nav-item-child-wrapper {
    overflow: hidden;
    flex-direction: column;
    gap: 2px;
    margin-top: 2px;
    display: none;
  }

  .uif-nav-item-child .uif-nav-item-entry-title {
    margin-left: var(--menu-level-offset-2);
  }

  .uif-nav-item-child .uif-nav-item-child .uif-nav-item-entry-title {
    margin-left: var(--menu-level-offset-3);
  }
  
  &.expanded,
  .expanded {
    &:not(.popup-expanded) {
      > .uif-nav-item-entry .uif-nav-item-entry-arrow {
        transform: rotate(90deg);
      }
    }

    > .uif-nav-item-child {
      grid-template-rows: 1fr;

      > .uif-nav-item-child-wrapper {
        display: flex;
      }
    }
  }

  &:has(.active) {
    > .uif-nav-item-entry {
      color: var(--menu_item--text--label--enabled_selected);
    }
  }

  &.active,
  .active {
    color: var(--menu_item--text--label--enabled_selected);
    background: var(--menu_item--bg--enabled_selected);
    
    &:hover {
      color: var(--menu_item--text--label--enabled_selected);
      background: var(--menu_item--bg--hover_selected);
    }
    &:active {
      color: var(--menu_item--text--label--enabled_selected);
      background:var(--menu_item--bg--active_selected);
    }
  }

  &.disabled {
    &,
    &:hover,
    &:active {
      color: var(--menu_item--text--label--disabled);
      background: var(--menu_item--bg--disabled);
    }
  }

  .nav-minimized > &.uif-nav-item > .uif-nav-item-entry {
    > .uif-nav-item-entry-arrow,
    > .uif-nav-item-entry-title:not(.title-wo-icon),
    > .uif-nav-item-entry-props,
    > .uif-nav-fav-add {
      display: none;
    }

    > .title-wo-icon {
      white-space: nowrap;
    }
  }

  .nav-minimized &,
  .nav-child-pop & {
    .uif-nav-item-child {
      display: none;

      .uif-nav-item-entry {
        border-radius: 0;
        padding: 0 12px;
      }
    }

    .uif-nav-item-child-wrapper {
      padding: 8px 0;
      overflow: visible;
      min-width: 80px;
      gap: 0;
    }

    &.popup-expanded,
    .popup-expanded,
    &:has(.popup-expanded) {
      & > .uif-nav-item-child {
        opacity: 1;
        display: block;
        
        > .uif-nav-item-child-wrapper {
          display: flex;
          width: 280px;
        }
        
        .uif-nav-item-entry-title {
          display: flex;
          align-items: center;
        } 
      }
    }

    &:has(.active) {
      > .uif-nav-item-entry {
        color: var(--menu_item--text--label--enabled_selected);
      }
    }

    .uif-nav-item-child {
      position: absolute;
      z-index: 2;
      left: 100%;
      margin-top: calc(var(--menu-item-height) * -1);
      margin-left: 6px;
      
      .uif-nav-item-child-wrapper {
        background-color: var(--dropdown--bg);
        box-shadow: var(--effects--elevation--medium--1) var(--elevation--medium--2), var(--effects--elevation--medium--2) var(--elevation--medium--1);
        border-radius: 8px;
        translate: 1px 0;
      }
        
      .uif-nav-item-entry-title {
        margin: 0;
        translate: 0;
      }
    }
  }

  .nav-minimized & {
    .uif-nav-item-user-entry-wrapper {
      display: none;
    }
    
    .uif-nav-item-entry.uif-nav-item-user {
      height: var(--menu-item-height);
      
      .uif-nav-item-entry-icon {
        margin: 0;
        align-self: unset;
      }
    }
  }

  .nav-child-pop & {
    .uif-nav-item-entry-title {
      display: flex;
      align-items: center;
    }
    
    &.uif-nav-item.popup-expanded {
      position: relative;
      z-index: 1;
    }
    
    .uif-nav-item-child {
      margin-top: 0;
      bottom: 0;
      
      .uif-nav-item-child-wrapper {
        translate: 17px 0;
      }
    }
  }
`,we=S`
  --padding: 16px;
  --scrollbar-radius: 4px;
  --scrollbar-size: 8px;
  --scrollbar-padding: calc(var(--padding) - var(--scrollbar-size) - var(--scrollbar-margin));
  --scrollbar-margin: 2px;

  padding: 0 var(--scrollbar-padding) 0 var(--padding);
  margin-right: var(--scrollbar-margin);
  display: flex;
  flex-direction: column;
  gap: 2px;
  scrollbar-gutter: stable;

  &.nav-scrollable {
    overflow-y: auto;
    overflow-x: hidden;
  }

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: var(--scrollbar-size);
    height: var(--scrollbar-size);
  }
  &::-webkit-scrollbar-track {
    background: var(--scrollbar--bg--enabled);
    border-radius: var(--scrollbar-radius);
  }
  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    background: var(--scrollbar--bar--enabled);
    border-radius: var(--scrollbar-radius);
    transition: color 0.2s ease;
  }
  &::-webkit-scrollbar-thumb:window-inactive {
    background: var(--scrollbar--bar--disabled);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--scrollbar--bar--hover);
  }
`,na=S`
  color: var(--menu--text--heading);
  font-size: 12px;
  padding: 0 8px;
  margin-top: 4px;
  cursor: default;

  &.caption-root {
    border-bottom: 1px solid var(--divider--bg--light);
    padding: 0 0 4px 0;
    margin: 16px 8px 4px 8px;
  }
  
  .nav-minimized > & {
    display: none;
  }

  .uif-nav-item-child & {
    padding: 0 12px;
  }
`,la=S`
  &:before {
    content: '';
    display: block;
    margin: 4px 8px;
    border-top: 1px solid var(--divider--bg--light);
  }
`,ia=S`
  margin: 6px 8px;
  border-top: 1px solid var(--divider--bg--light);

  .nav-minimized > & {
    display: none;
  }

  .nav-child-pop & {
    margin: 4px 0;
  }
`;var J=(a=>(a.Before="before",a.After="after",a))(J||{});const T=C.div`
  ${ia};
`;try{T.displayName="NavDivider",T.__docgenInfo={description:"",displayName:"NavDivider",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const ra=({data:{key:a,itemDivider:t,isRoot:l},className:r})=>e.createElement(e.Fragment,null,t===J.Before&&e.createElement(T,null),e.createElement("div",{className:I(r,"uif-nav-caption",{"caption-root":l})},a),t===J.After&&e.createElement(T,null)),G=C(ra)`
  ${na};
`;try{G.displayName="NavCaptionItem",G.__docgenInfo={description:"",displayName:"NavCaptionItem",props:{elementAfter:{defaultValue:null,description:"",name:"elementAfter",required:!1,type:{name:"ReactNode"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"NavItemData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"any"}},applyAppTheme:{defaultValue:null,description:"",name:"applyAppTheme",required:!1,type:{name:"boolean"}},onFavChanged:{defaultValue:null,description:"",name:"onFavChanged",required:!1,type:{name:"OnFavChangedCallback"}},pinIcon:{defaultValue:null,description:"",name:"pinIcon",required:!1,type:{name:"ReactNode"}},unpinIcon:{defaultValue:null,description:"",name:"unpinIcon",required:!1,type:{name:"ReactNode"}},menuState:{defaultValue:null,description:"",name:"menuState",required:!1,type:{name:"any"}},userProps:{defaultValue:null,description:"",name:"userProps",required:!1,type:{name:"UserProps"}},favsEnabled:{defaultValue:null,description:"",name:"favsEnabled",required:!1,type:{name:"boolean"}},isCaption:{defaultValue:null,description:"",name:"isCaption",required:!1,type:{name:"boolean"}},_isChild:{defaultValue:null,description:"",name:"_isChild",required:!1,type:{name:"boolean"}},skipActivation:{defaultValue:null,description:"",name:"skipActivation",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const ve=({applyAppTheme:a,...t})=>{const{key:l=le.Light}=He()||{},r={...t,theme:a&&l||le.Dark};return Le(r,{componentName:"menu",defaultValues:{},propsToDrill:["theme"]})},Q=a=>{const{applyAppTheme:t}=s.useContext(W),l=ve({...a,applyAppTheme:t}),{testAttributes:r,...d}=ce(l);return e.createElement(ie,{...r,...d,...a})},sa=({data:a,className:t,menuState:l,_isChild:r,pinIcon:d,unpinIcon:c})=>{const{icon:o,items:i,state:m,onClick:q,onToggle:v,key:g,expanded:E,disabled:F,active:N,isNew:h,isCaption:_,itemDivider:A,elementAfter:x,submenuItems:k,canBeAddedAsFav:M=!0,skipActivation:D=!1,lineClamp:j,href:R,target:$}=a,O=o,V=!!(i&&i.length),P=!!k,{setSubmenuItems:H,setSubmenuMarginActive:w,setSubmenuActive:y,setMenuActiveItem:n,setMenuActivePopupItem:f,menuActivePopupItem:b}=s.useContext(W),{minimized:L,collapseAll:U,updateNavState:z,childPop:u,favsEnabled:B,navFavItems:ee,setNavFavItems:ae}=l,Y=p=>{z({toggleExpandItem:p}),v==null||v(p)},Ee=p=>{D||(z({activateItem:m}),n(m)),(L||u)&&U(),q&&q(p)},Ae=()=>{k&&H&&w&&y&&(z({activateItem:m}),n(m),H(k),w(!0),y(!0))},Te=p=>{if(!F){if(V){Y(m);return}if(P){Ae();return}w&&y&&(w(!1),y(!1)),Ee(p)}},Se=M&&!V&&B&&g!=="Fav",Fe={data:a,navFavItems:ee,setNavFavItems:ae,updateFavState:z,pinIcon:d,unpinIcon:c},ye=p=>{for(let K=0;K<p.length;K++){const Z=p[K];if(Z.isNew||Z.items&&ye(Z.items))return!0}return!1},be=i==null?void 0:i.length,Me=be?ye(i):!1,Re=!be&&h,Pe=R?"a":"div",ge=e.createElement(Pe,{className:I(t,"uif-nav-item-entry",{active:N,disabled:F}),"kl-id":a.klId,"data-testid":a.klId,onClick:Te,href:R,target:$},o&&e.createElement("div",{className:"uif-nav-item-entry-icon"},e.createElement(O,null)),e.createElement("div",{className:I("uif-nav-item-entry-title",{"title-wo-icon":!o})},e.createElement(Ze,{text:g,lineClamp:j},e.createElement("span",null,g))),e.createElement("div",{className:"uif-nav-item-entry-props"},Me&&ua,Re&&oa,x,Se&&e.createElement(da,{...Fe}),V&&e.createElement(Oe,{className:"uif-nav-item-entry-arrow"})));return e.createElement(e.Fragment,null,A===J.Before&&e.createElement(T,null),e.createElement("div",{className:I(t,"uif-nav-item",{"uif-nav-caption":_,expanded:!L&&E,"popup-expanded":b===m&&E})},L&&!r?e.createElement(Ve,{text:g,placement:"right"},ge):ge,V&&e.createElement("div",{className:"uif-nav-item-child"},e.createElement("div",{className:"uif-nav-item-child-wrapper"},i==null?void 0:i.map(p=>{const{isCaption:K,isRoot:Z}=p;return K?e.createElement(G,{className:I({"caption-root":Z}),key:`${p.key}-child`,data:p,menuState:l}):e.createElement(Q,{key:`${p.key}-child`,data:p,menuState:l,pinIcon:d,unpinIcon:c,_isChild:!0})})))),A===J.After&&e.createElement(T,null))},ie=C(sa).withConfig({shouldForwardProp:a=>!["cssConfig"].includes(a)})`
  ${ke};
`,da=({data:a,navFavItems:t,setNavFavItems:l,pinIcon:r=e.createElement(fe,null),unpinIcon:d=e.createElement(xe,null)})=>{const c=t.some(i=>i.key===a.key),o=i=>{i.preventDefault(),i.stopPropagation(),l(c?[...t.filter(m=>m.key!==a.key)]:[a,...t])};return e.createElement(qe,{className:"uif-nav-fav-add",mode:"ghost",onClick:o,icon:c?d:r})},oa=e.createElement(Xe,{mode:"new",size:"medium",text:"NEW"}),ua=e.createElement(Je,{mode:"new"});try{Q.displayName="NavItem",Q.__docgenInfo={description:"",displayName:"NavItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"NavItemData"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},menuState:{defaultValue:null,description:"",name:"menuState",required:!1,type:{name:"any"}},userProps:{defaultValue:null,description:"",name:"userProps",required:!1,type:{name:"UserProps"}},favsEnabled:{defaultValue:null,description:"",name:"favsEnabled",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"any"}},elementAfter:{defaultValue:null,description:"",name:"elementAfter",required:!1,type:{name:"ReactNode"}},isCaption:{defaultValue:null,description:"",name:"isCaption",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},_isChild:{defaultValue:null,description:"",name:"_isChild",required:!1,type:{name:"boolean"}},onFavChanged:{defaultValue:null,description:"",name:"onFavChanged",required:!1,type:{name:"OnFavChangedCallback"}},pinIcon:{defaultValue:{value:"<Pin />"},description:"",name:"pinIcon",required:!1,type:{name:"ReactNode"}},unpinIcon:{defaultValue:{value:"<Unpin />"},description:"",name:"unpinIcon",required:!1,type:{name:"ReactNode"}},skipActivation:{defaultValue:null,description:"",name:"skipActivation",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},applyAppTheme:{defaultValue:null,description:"",name:"applyAppTheme",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}}}catch{}try{ie.displayName="StyledNavItem",ie.__docgenInfo={description:"",displayName:"StyledNavItem",props:{elementAfter:{defaultValue:null,description:"",name:"elementAfter",required:!1,type:{name:"ReactNode"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"NavItemData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"any"}},applyAppTheme:{defaultValue:null,description:"",name:"applyAppTheme",required:!1,type:{name:"boolean"}},onFavChanged:{defaultValue:null,description:"",name:"onFavChanged",required:!1,type:{name:"OnFavChangedCallback"}},pinIcon:{defaultValue:{value:"<Pin />"},description:"",name:"pinIcon",required:!1,type:{name:"ReactNode"}},unpinIcon:{defaultValue:{value:"<Unpin />"},description:"",name:"unpinIcon",required:!1,type:{name:"ReactNode"}},menuState:{defaultValue:null,description:"",name:"menuState",required:!1,type:{name:"any"}},userProps:{defaultValue:null,description:"",name:"userProps",required:!1,type:{name:"UserProps"}},favsEnabled:{defaultValue:null,description:"",name:"favsEnabled",required:!1,type:{name:"boolean"}},isCaption:{defaultValue:null,description:"",name:"isCaption",required:!1,type:{name:"boolean"}},_isChild:{defaultValue:null,description:"",name:"_isChild",required:!1,type:{name:"boolean"}},skipActivation:{defaultValue:null,description:"",name:"skipActivation",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{T.displayName="NavDivider",T.__docgenInfo={description:"",displayName:"NavDivider",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const re=a=>{const{applyAppTheme:t}=s.useContext(W),l=ve({...a,applyAppTheme:t}),r=ce(l);return e.createElement(ca,{...r,...a})},ma=(a,t)=>{if(t)switch(a){case"available":return l=>e.createElement(Ye,{...l,color:he.icon.status.statuspositive[t]});case"unavailable":return l=>e.createElement(_e,{...l,color:he.icon.status.statuscritical[t]})}},pa=({theme:a,data:{icon:t,state:l,onClick:r,active:d,userProps:{role:c,name:o,status:i}={}},className:m,menuState:q})=>{const{setMenuActiveItem:v}=s.useContext(W),{t:g}=Ne(),E=i&&g(`menu.navUserItem.userProps.status.${i}`),N=ma(i,a)||t,{updateNavState:h,minimized:_,collapseAll:A}=q,x=k=>{h({activateItem:l}),v&&v(l),r&&r(k),_&&A()};return e.createElement("div",{className:I(m,"uif-nav-item")},e.createElement("div",{className:I(m,"uif-nav-item-entry","uif-nav-item-user",{active:d}),onClick:x},e.createElement(Ve,{text:_&&E,theme:a,placement:"right"},t&&e.createElement("div",{className:"uif-nav-item-entry-icon"},e.createElement(N,{testId:"userIconStatus",klId:"userIconStatus"}))),e.createElement("div",{className:"uif-nav-item-user-entry-wrapper"},e.createElement("div",{className:"uif-nav-item-entry-title"},e.createElement("span",{className:"title-ellipsis"},o)),c&&e.createElement("div",{className:"uif-nav-item-entry-role"},c))))},ca=C(pa).withConfig({shouldForwardProp:a=>!["cssConfig"].includes(a)})`
  ${ke};
`;try{re.displayName="NavUserItem",re.__docgenInfo={description:"",displayName:"NavUserItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"NavItemData"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},menuState:{defaultValue:null,description:"",name:"menuState",required:!1,type:{name:"any"}},userProps:{defaultValue:null,description:"",name:"userProps",required:!1,type:{name:"UserProps"}},favsEnabled:{defaultValue:null,description:"",name:"favsEnabled",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"any"}},elementAfter:{defaultValue:null,description:"",name:"elementAfter",required:!1,type:{name:"ReactNode"}},isCaption:{defaultValue:null,description:"",name:"isCaption",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},_isChild:{defaultValue:null,description:"",name:"_isChild",required:!1,type:{name:"boolean"}},onFavChanged:{defaultValue:null,description:"",name:"onFavChanged",required:!1,type:{name:"OnFavChangedCallback"}},pinIcon:{defaultValue:null,description:"",name:"pinIcon",required:!1,type:{name:"ReactNode"}},unpinIcon:{defaultValue:null,description:"",name:"unpinIcon",required:!1,type:{name:"ReactNode"}},skipActivation:{defaultValue:null,description:"",name:"skipActivation",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},applyAppTheme:{defaultValue:null,description:"",name:"applyAppTheme",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const te=[],ne="favorites",Ce=({beforeItems:a=te,navItems:t=te,favItems:l=te,favsEnabled:r,favsExpanded:d=!0,className:c,minimized:o,childPop:i,inert:m,onItemsChanged:q,onFavChanged:v,onFavToggle:g,pinIcon:E,unpinIcon:F,favIcon:N})=>{const[h,_]=s.useState(l),{t:A}=Ne(),{menuActiveItem:x,setMenuActiveItem:k,setMenuActivePopupItem:M}=s.useContext(W),D={state:"favorites",weight:0,key:A("menu.favoritesNavItem"),expanded:d,icon:N||fe,itemClass:"favorites-item",klId:"navigation.main.favorites",isRoot:!0,items:h},j=n=>{var f;return(f=n==null?void 0:n.items)==null||f.forEach(b=>b.active=!1),n},R=()=>[!!h.length&&j(D),...t.filter(n=>n.state!==ne)].filter(Boolean),[$,O]=s.useState(R()),V=()=>{M(n=>(n&&P({toggleExpandItem:n}),""))},P=({toggleExpandItem:n,activateItem:f,collapseAll:b})=>{var z;const L=u=>{var Y;const{state:B,expanded:ee=!1,items:ae=void 0}=u;return b?(u.expanded=!1,u.items&&u.items.map(L),u):n&&B===n?(u.expanded=!ee,(o||i)&&M(u.expanded?B:""),u):(!m&&x&&(u.active=!1,B===x&&(u.active=!0,k(f))),ae&&((Y=u.items)==null||Y.map(L)),u)},U=$.map(L);if(O(U),q&&U.length&&q(),g&&n===ne){const u=(z=U==null?void 0:U.find(B=>B.state===ne))==null?void 0:z.expanded;g(!!u)}},H=()=>{D.items=h,O(R())},w=s.useCallback(n=>{(o||i)&&!document.querySelectorAll(".ant-layout-sider")[0].contains(n.target)&&V()},[o]);s.useEffect(()=>{const{addEventListener:n,removeEventListener:f}=document;return n("click",w),()=>{f("click",w)}},[o]),s.useEffect(()=>{H()},[h,t]),s.useEffect(()=>{P({collapseAll:!1})},[x]),s.useEffect(()=>{o&&V()},[o]),s.useEffect(()=>{_(l)},[l]);const y={updateNavState:P,collapseAll:V,minimized:o,childPop:i,favsEnabled:r,navFavItems:h,setNavFavItems:n=>{_(n);const f=n.filter(b=>!!b.id).map(b=>b.id);v==null||v(f)},updateFavState:H};return e.createElement("nav",{className:I(c,"uif-nav",{"nav-minimized":o,"nav-child-pop":i})},[...a,...$].map(n=>{const f=n.component;return f?e.createElement(f,{key:n.key}):n.userProps?e.createElement(re,{key:n.key,data:n,menuState:y}):n.isCaption?e.createElement(G,{key:n.key,data:n}):e.createElement(Q,{key:n.key,data:n,testId:n.klId,menuState:y,pinIcon:E,unpinIcon:F})}))},se=C(Ce)`
  ${we}
`,de=C(Ce)`
  margin-top: auto;
  ${we}
  ${la}
`;try{se.displayName="Nav",se.__docgenInfo={description:"",displayName:"Nav",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},inert:{defaultValue:null,description:"",name:"inert",required:!1,type:{name:"boolean"}},applyAppTheme:{defaultValue:null,description:"",name:"applyAppTheme",required:!1,type:{name:"boolean"}},beforeItems:{defaultValue:{value:"[]"},description:"",name:"beforeItems",required:!1,type:{name:"any"}},favItems:{defaultValue:{value:"[]"},description:"",name:"favItems",required:!1,type:{name:"any"}},favsExpanded:{defaultValue:{value:"true"},description:"",name:"favsExpanded",required:!1,type:{name:"boolean"}},navItems:{defaultValue:{value:"[]"},description:"",name:"navItems",required:!1,type:{name:"any"}},onItemsChanged:{defaultValue:null,description:"",name:"onItemsChanged",required:!1,type:{name:"VoidFunction"}},onFavChanged:{defaultValue:null,description:"",name:"onFavChanged",required:!1,type:{name:"OnFavChangedCallback"}},onFavToggle:{defaultValue:null,description:"",name:"onFavToggle",required:!1,type:{name:"OnFavToggleCallback"}},pinIcon:{defaultValue:null,description:"",name:"pinIcon",required:!1,type:{name:"ReactNode"}},unpinIcon:{defaultValue:null,description:"",name:"unpinIcon",required:!1,type:{name:"ReactNode"}},favIcon:{defaultValue:null,description:"",name:"favIcon",required:!1,type:{name:"ReactNode"}},favsEnabled:{defaultValue:null,description:"",name:"favsEnabled",required:!1,type:{name:"boolean"}},minimized:{defaultValue:null,description:"",name:"minimized",required:!1,type:{name:"boolean"}},childPop:{defaultValue:null,description:"",name:"childPop",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{de.displayName="UserNav",de.__docgenInfo={description:"",displayName:"UserNav",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},inert:{defaultValue:null,description:"",name:"inert",required:!1,type:{name:"boolean"}},applyAppTheme:{defaultValue:null,description:"",name:"applyAppTheme",required:!1,type:{name:"boolean"}},beforeItems:{defaultValue:{value:"[]"},description:"",name:"beforeItems",required:!1,type:{name:"any"}},favItems:{defaultValue:{value:"[]"},description:"",name:"favItems",required:!1,type:{name:"any"}},favsExpanded:{defaultValue:{value:"true"},description:"",name:"favsExpanded",required:!1,type:{name:"boolean"}},navItems:{defaultValue:{value:"[]"},description:"",name:"navItems",required:!1,type:{name:"any"}},onItemsChanged:{defaultValue:null,description:"",name:"onItemsChanged",required:!1,type:{name:"VoidFunction"}},onFavChanged:{defaultValue:null,description:"",name:"onFavChanged",required:!1,type:{name:"OnFavChangedCallback"}},onFavToggle:{defaultValue:null,description:"",name:"onFavToggle",required:!1,type:{name:"OnFavToggleCallback"}},pinIcon:{defaultValue:null,description:"",name:"pinIcon",required:!1,type:{name:"ReactNode"}},unpinIcon:{defaultValue:null,description:"",name:"unpinIcon",required:!1,type:{name:"ReactNode"}},favIcon:{defaultValue:null,description:"",name:"favIcon",required:!1,type:{name:"ReactNode"}},favsEnabled:{defaultValue:null,description:"",name:"favsEnabled",required:!1,type:{name:"boolean"}},minimized:{defaultValue:null,description:"",name:"minimized",required:!1,type:{name:"boolean"}},childPop:{defaultValue:null,description:"",name:"childPop",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const fa=S`
  width: 280px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -281px;
  display: none;

  &.submenu-active {
    display: block;
  }

  > div > div {
    width: 100%;
  }
`,oe=C("div")`
  ${fa}
`,ue=({items:a,active:t})=>e.createElement(oe,{className:I({"submenu-active":t})},a.length&&e.createElement(Ke,{items:a}));try{oe.displayName="MenuSubmenuWrapper",oe.__docgenInfo={description:"",displayName:"MenuSubmenuWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{ue.displayName="SubmenuWrapper",ue.__docgenInfo={description:"",displayName:"SubmenuWrapper",props:{active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"SubmenuItemProps[]"}}}}}catch{}const me=({collapsed:a,className:t,...l})=>e.createElement(qe,{...l,className:I("menu-collapse-button",t),icon:a?e.createElement(We,null):e.createElement(je,null)}),va=C(X.Sider).withConfig({shouldForwardProp:a=>!["cssConfig","showLogo"].includes(a)})`
  ${aa}
`,ya=C.div`
  ${ta}
`,W=s.createContext({menuActiveItem:"",setMenuActiveItem:()=>{},menuActivePopupItem:"",setMenuActivePopupItem:()=>{}}),Ie=a=>{const{applyAppTheme:t=!1,theme:l,children:r,beforeItems:d,collapsed:c,minimizerBottom:o,favItems:i,favsExpanded:m,navItems:q,navUserItems:v,onItemsChanged:g,onFavChanged:E,onFavToggle:F,onCollapse:N,pinIcon:h,unpinIcon:_,favIcon:A,testAttributes:x,...k}=ce(ve(a)),[M,D]=s.useState([]),[j,R]=s.useState(!1),[$,O]=s.useState(!1),[V,P]=s.useState(""),[H,w]=s.useState(""),[y,n]=s.useState(c),f=()=>{const b=!y;n(b),N==null||N(b)};return s.useEffect(()=>{n(c)},[c]),e.createElement(W.Provider,{value:{applyAppTheme:t,setSubmenuItems:D,setSubmenuMarginActive:R,setSubmenuActive:O,menuActiveItem:V,setMenuActiveItem:P,menuActivePopupItem:H,setMenuActivePopupItem:w}},e.createElement(va,{...x,...k,collapsed:y,className:I({"theme-dark":l===le.Dark,"menu-submenu-margin":j})},r,e.createElement(se,{className:"nav-scrollable",beforeItems:d,navItems:q,favItems:i,minimized:y,favsEnabled:!0,favsExpanded:m,onItemsChanged:g,onFavChanged:E,onFavToggle:F,pinIcon:h,unpinIcon:_,favIcon:A}),!!v&&e.createElement(de,{navItems:v,minimized:y,childPop:!0}),o&&e.createElement(ya,null,e.createElement(me,{role:"button",name:"hamburger",collapsed:y,onClick:f})),!!M.length&&e.createElement(ue,{items:M,active:$})))};try{me.displayName="Hamburger",me.__docgenInfo={description:"",displayName:"Hamburger",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},collapsed:{defaultValue:null,description:"",name:"collapsed",required:!1,type:{name:"boolean"}}}}}catch{}try{Ie.displayName="Menu",Ie.__docgenInfo={description:"",displayName:"Menu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"((boolean | ReactChild | ReactFragment | ReactPortal) & (string | number | boolean | {} | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<...> | ReactPortal)) | null"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},applyAppTheme:{defaultValue:null,description:"",name:"applyAppTheme",required:!1,type:{name:"boolean"}},beforeItems:{defaultValue:null,description:"",name:"beforeItems",required:!1,type:{name:"NavItemData[]"}},favItems:{defaultValue:null,description:"",name:"favItems",required:!1,type:{name:"NavItemData[]"}},favsExpanded:{defaultValue:null,description:"",name:"favsExpanded",required:!1,type:{name:"boolean"}},navItems:{defaultValue:null,description:"",name:"navItems",required:!1,type:{name:"NavItemData[]"}},navUserItems:{defaultValue:null,description:"",name:"navUserItems",required:!1,type:{name:"NavItemData[]"}},submenuMarginActive:{defaultValue:null,description:"",name:"submenuMarginActive",required:!1,type:{name:"boolean"}},submenuItems:{defaultValue:null,description:"not ready to use in production",name:"submenuItems",required:!1,type:{name:"SubmenuItemProps[]"}},onItemsChanged:{defaultValue:null,description:"",name:"onItemsChanged",required:!1,type:{name:"VoidFunction"}},onFavChanged:{defaultValue:null,description:"",name:"onFavChanged",required:!1,type:{name:"OnFavChangedCallback"}},onFavToggle:{defaultValue:null,description:"",name:"onFavToggle",required:!1,type:{name:"OnFavToggleCallback"}},pinIcon:{defaultValue:null,description:"",name:"pinIcon",required:!1,type:{name:"ReactNode"}},unpinIcon:{defaultValue:null,description:"",name:"unpinIcon",required:!1,type:{name:"ReactNode"}},favIcon:{defaultValue:null,description:"",name:"favIcon",required:!1,type:{name:"ReactNode"}},minimizerBottom:{defaultValue:null,description:"",name:"minimizerBottom",required:!1,type:{name:"boolean"}}}}}catch{}export{ne as F,me as H,J as I,X as L,Ie as M,T as N,ie as S,de as U,W as a,se as b,Q as c,ma as g,xe as l,ke as n,fe as o,_e as r};
