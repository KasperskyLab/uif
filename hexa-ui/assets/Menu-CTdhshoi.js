import{C as T,H as E,R as e,l as g,bd as we,a4 as ne,F as Te,r,w as pe,v as ge,A as he,Z as ye}from"./iframe-4-PRSI1I.js";import{L as Se,H as Fe,F as Me,C as Pe,S as Ue}from"./Sider-CoxWa0of.js";import{o as Re,a as He,b as Le}from"./ArrowRightMini-n3t_Sq3j.js";import{u as Ie}from"./useLocalization-45JHytlv.js";import{o as Ve,l as De,r as ze}from"./Unpin-CY6_IcGm.js";import{S as Be}from"./Submenu-BwQtOxwE.js";import{T as $e}from"./TextWithTruncation-BuGmQSH-.js";import{B as Oe}from"./Badge-B3_Y1H2J.js";import{I as We}from"./Indicator-D1HJCmfp.js";import{o as je}from"./StatusOkSolid-D4PIpJ4i.js";var Z=Se;Z.Header=Fe;Z.Footer=Me;Z.Content=Pe;Z.Sider=Ue;const Ke=T`
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
`,Ze=T`
  padding: 0 var(--spacing--padding_l);

  button {
    margin: var(--spacing--gap_related) var(--spacing--gap_related) 0;
  }
`,qe=T`
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
`,Ne=T`
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
`,Je=T`
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
`,Xe=T`
  &:before {
    content: '';
    display: block;
    margin: 4px 8px;
    border-top: 1px solid var(--divider--bg--light);
  }
`,Ye=T`
  margin: 6px 8px;
  border-top: 1px solid var(--divider--bg--light);

  .nav-minimized > & {
    display: none;
  }

  .nav-child-pop & {
    margin: 4px 0;
  }
`;var K=(a=>(a.Before="before",a.After="after",a))(K||{});const w=E.div`
  ${Ye};
`;try{w.displayName="NavDivider",w.__docgenInfo={description:"",displayName:"NavDivider",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const Ge=({data:{key:a,itemDivider:n,isRoot:l},className:d})=>e.createElement(e.Fragment,null,n===K.Before&&e.createElement(w,null),e.createElement("div",{className:g(d,"uif-nav-caption",{"caption-root":l})},a),n===K.After&&e.createElement(w,null)),Y=E(Ge)`
  ${Je};
`;try{Y.displayName="NavCaptionItem",Y.__docgenInfo={description:"",displayName:"NavCaptionItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},elementAfter:{defaultValue:null,description:"",name:"elementAfter",required:!1,type:{name:"ReactNode"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"NavItemData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"any"}},menuState:{defaultValue:null,description:"",name:"menuState",required:!1,type:{name:"any"}},userProps:{defaultValue:null,description:"",name:"userProps",required:!1,type:{name:"UserProps"}},favsEnabled:{defaultValue:null,description:"",name:"favsEnabled",required:!1,type:{name:"boolean"}},isCaption:{defaultValue:null,description:"",name:"isCaption",required:!1,type:{name:"boolean"}},_isChild:{defaultValue:null,description:"",name:"_isChild",required:!1,type:{name:"boolean"}},onFavChanged:{defaultValue:null,description:"",name:"onFavChanged",required:!1,type:{name:"OnFavChangedCallback"}},pinIcon:{defaultValue:null,description:"",name:"pinIcon",required:!1,type:{name:"ReactNode"}},unpinIcon:{defaultValue:null,description:"",name:"unpinIcon",required:!1,type:{name:"ReactNode"}},skipActivation:{defaultValue:null,description:"",name:"skipActivation",required:!1,type:{name:"boolean"}},applyAppTheme:{defaultValue:null,description:"",name:"applyAppTheme",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const me=({applyAppTheme:a,...n})=>{const{key:l=ne.Light}=we()||{},d={...n,theme:a&&l||ne.Dark};return Te(d,{componentName:"menu",defaultValues:{},propsToDrill:["theme"]})},G=a=>{const{applyAppTheme:n}=r.useContext($),l=me({...a,applyAppTheme:n}),{testAttributes:d,...f}=pe(l);return e.createElement(le,{...d,...f,...a})},Qe=({data:a,className:n,menuState:l,_isChild:d,pinIcon:f,unpinIcon:m})=>{const{icon:u,items:i,state:o,onClick:I,key:c,expanded:V,disabled:S,active:F,isNew:q,isCaption:v,itemDivider:N,elementAfter:_,submenuItems:M,canBeAddedAsFav:L=!0,skipActivation:P=!1,lineClamp:O}=a,D=u,x=!!(i&&i.length),z=!!M,{setSubmenuItems:A,setSubmenuMarginActive:k,setSubmenuActive:C,setMenuActiveItem:U,setMenuActivePopupItem:B,menuActivePopupItem:t}=r.useContext($),{minimized:s,collapseAll:y,updateNavState:b,childPop:R,favsEnabled:J,navFavItems:p,setNavFavItems:H}=l,Q=h=>{s&&B(o),b({toggleExpandItem:h})},ee=()=>{P||(b({activateItem:o}),U(o)),(s||R)&&y(),I&&I()},X=()=>{M&&A&&k&&C&&(b({activateItem:o}),U(o),A(M),k(!0),C(!0))},xe=()=>{if(!S){if(x){Q(o);return}if(z){X();return}k&&C&&(k(!1),C(!1)),ee()}},ke=L&&!x&&J&&c!=="Fav",Ce={data:a,navFavItems:p,setNavFavItems:H,updateFavState:b,pinIcon:f,unpinIcon:m},ce=h=>{for(let W=0;W<h.length;W++){const j=h[W];if(j.isNew||j.items&&ce(j.items))return!0}return!1},fe=i==null?void 0:i.length,Ee=fe?ce(i):!1,Ae=!fe&&q,ve=e.createElement("div",{className:g(n,"uif-nav-item-entry",{active:F,disabled:S}),"kl-id":a.klId,"data-testid":a.klId,onClick:xe},u&&e.createElement("div",{className:"uif-nav-item-entry-icon"},e.createElement(D,null)),e.createElement("div",{className:g("uif-nav-item-entry-title",{"title-wo-icon":!u})},e.createElement($e,{text:c,lineClamp:O},e.createElement("span",null,c))),e.createElement("div",{className:"uif-nav-item-entry-props"},Ee&&ta,Ae&&aa,_,ke&&e.createElement(ea,{...Ce}),x&&e.createElement(Re,{className:"uif-nav-item-entry-arrow"})));return e.createElement(e.Fragment,null,N===K.Before&&e.createElement(w,null),e.createElement("div",{className:g(n,"uif-nav-item",{"uif-nav-caption":v,expanded:!s&&V,"popup-expanded":t===o&&V})},s&&!d?e.createElement(ge,{text:c,placement:"right"},ve):ve,x&&e.createElement("div",{className:"uif-nav-item-child"},e.createElement("div",{className:"uif-nav-item-child-wrapper"},i==null?void 0:i.map(h=>{const{isCaption:W,isRoot:j}=h;return W?e.createElement(Y,{className:g({"caption-root":j}),key:`${h.key}-child`,data:h,menuState:l}):e.createElement(G,{key:`${h.key}-child`,data:h,menuState:l,pinIcon:f,unpinIcon:m,_isChild:!0})})))),N===K.After&&e.createElement(w,null))},le=E(Qe).withConfig({shouldForwardProp:a=>!["cssConfig"].includes(a)})`
  ${qe};
`,ea=({data:a,navFavItems:n,setNavFavItems:l,pinIcon:d=e.createElement(Ve,null),unpinIcon:f=e.createElement(De,null)})=>{const m=n.some(i=>i.key===a.key),u=i=>{i.preventDefault(),i.stopPropagation(),l(m?[...n.filter(o=>o.key!==a.key)]:[a,...n])};return e.createElement(he,{className:"uif-nav-fav-add",mode:"ghost",onClick:u,icon:m?f:d})},aa=e.createElement(Oe,{mode:"new",size:"medium",text:"NEW"}),ta=e.createElement(We,{mode:"new"});try{G.displayName="NavItem",G.__docgenInfo={description:"",displayName:"NavItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"NavItemData"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},menuState:{defaultValue:null,description:"",name:"menuState",required:!1,type:{name:"any"}},userProps:{defaultValue:null,description:"",name:"userProps",required:!1,type:{name:"UserProps"}},favsEnabled:{defaultValue:null,description:"",name:"favsEnabled",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"any"}},elementAfter:{defaultValue:null,description:"",name:"elementAfter",required:!1,type:{name:"ReactNode"}},isCaption:{defaultValue:null,description:"",name:"isCaption",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},_isChild:{defaultValue:null,description:"",name:"_isChild",required:!1,type:{name:"boolean"}},onFavChanged:{defaultValue:null,description:"",name:"onFavChanged",required:!1,type:{name:"OnFavChangedCallback"}},pinIcon:{defaultValue:{value:"<Pin />"},description:"",name:"pinIcon",required:!1,type:{name:"ReactNode"}},unpinIcon:{defaultValue:{value:"<Unpin />"},description:"",name:"unpinIcon",required:!1,type:{name:"ReactNode"}},skipActivation:{defaultValue:null,description:"",name:"skipActivation",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},applyAppTheme:{defaultValue:null,description:"",name:"applyAppTheme",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}}}catch{}try{le.displayName="StyledNavItem",le.__docgenInfo={description:"",displayName:"StyledNavItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},elementAfter:{defaultValue:null,description:"",name:"elementAfter",required:!1,type:{name:"ReactNode"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"NavItemData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"any"}},menuState:{defaultValue:null,description:"",name:"menuState",required:!1,type:{name:"any"}},userProps:{defaultValue:null,description:"",name:"userProps",required:!1,type:{name:"UserProps"}},favsEnabled:{defaultValue:null,description:"",name:"favsEnabled",required:!1,type:{name:"boolean"}},isCaption:{defaultValue:null,description:"",name:"isCaption",required:!1,type:{name:"boolean"}},_isChild:{defaultValue:null,description:"",name:"_isChild",required:!1,type:{name:"boolean"}},onFavChanged:{defaultValue:null,description:"",name:"onFavChanged",required:!1,type:{name:"OnFavChangedCallback"}},pinIcon:{defaultValue:{value:"<Pin />"},description:"",name:"pinIcon",required:!1,type:{name:"ReactNode"}},unpinIcon:{defaultValue:{value:"<Unpin />"},description:"",name:"unpinIcon",required:!1,type:{name:"ReactNode"}},skipActivation:{defaultValue:null,description:"",name:"skipActivation",required:!1,type:{name:"boolean"}},applyAppTheme:{defaultValue:null,description:"",name:"applyAppTheme",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{w.displayName="NavDivider",w.__docgenInfo={description:"",displayName:"NavDivider",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const ie=a=>{const{applyAppTheme:n}=r.useContext($),l=me({...a,applyAppTheme:n}),d=pe(l);return e.createElement(ia,{...d,...a})},na=(a,n)=>{if(n)switch(a){case"available":return l=>e.createElement(je,{...l,color:ye.icon.status.statuspositive[n]});case"unavailable":return l=>e.createElement(ze,{...l,color:ye.icon.status.statuscritical[n]})}},la=({theme:a,data:{icon:n,state:l,onClick:d,active:f,userProps:{role:m,name:u,status:i}={}},className:o,menuState:I})=>{const{setMenuActiveItem:c}=r.useContext($),V=i&&Ie(`menu.navUserItem.userProps.status.${i}`),F=na(i,a)||n,{updateNavState:q,minimized:v,collapseAll:N}=I,_=()=>{q({activateItem:l}),c&&c(l),d&&d(),v&&N()};return e.createElement("div",{className:g(o,"uif-nav-item")},e.createElement("div",{className:g(o,"uif-nav-item-entry","uif-nav-item-user",{active:f}),onClick:_},e.createElement(ge,{text:v&&V,theme:a,placement:"right"},n&&e.createElement("div",{className:"uif-nav-item-entry-icon"},e.createElement(F,{testId:"userIconStatus",klId:"userIconStatus"}))),e.createElement("div",{className:"uif-nav-item-user-entry-wrapper"},e.createElement("div",{className:"uif-nav-item-entry-title"},e.createElement("span",{className:"title-ellipsis"},u)),m&&e.createElement("div",{className:"uif-nav-item-entry-role"},m))))},ia=E(la).withConfig({shouldForwardProp:a=>!["cssConfig"].includes(a)})`
  ${qe};
`;try{ie.displayName="NavUserItem",ie.__docgenInfo={description:"",displayName:"NavUserItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"NavItemData"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},menuState:{defaultValue:null,description:"",name:"menuState",required:!1,type:{name:"any"}},userProps:{defaultValue:null,description:"",name:"userProps",required:!1,type:{name:"UserProps"}},favsEnabled:{defaultValue:null,description:"",name:"favsEnabled",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"any"}},elementAfter:{defaultValue:null,description:"",name:"elementAfter",required:!1,type:{name:"ReactNode"}},isCaption:{defaultValue:null,description:"",name:"isCaption",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},_isChild:{defaultValue:null,description:"",name:"_isChild",required:!1,type:{name:"boolean"}},onFavChanged:{defaultValue:null,description:"",name:"onFavChanged",required:!1,type:{name:"OnFavChangedCallback"}},pinIcon:{defaultValue:null,description:"",name:"pinIcon",required:!1,type:{name:"ReactNode"}},unpinIcon:{defaultValue:null,description:"",name:"unpinIcon",required:!1,type:{name:"ReactNode"}},skipActivation:{defaultValue:null,description:"",name:"skipActivation",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},applyAppTheme:{defaultValue:null,description:"",name:"applyAppTheme",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const ae=[],te="favorites",_e=({beforeItems:a=ae,navItems:n=ae,favItems:l=ae,favsEnabled:d,favsExpanded:f=!0,className:m,minimized:u,childPop:i,inert:o,onItemsChanged:I,onFavChanged:c,onFavToggle:V,pinIcon:S,unpinIcon:F,favIcon:q})=>{const[v,N]=r.useState(l),{menuActiveItem:_,setMenuActiveItem:M,setMenuActivePopupItem:L}=r.useContext($),P={state:"favorites",weight:0,key:Ie("menu.favoritesNavItem"),expanded:f,icon:q||Ve,itemClass:"favorites-item",klId:"navigation.main.favorites",isRoot:!0,items:v},O=t=>{var s;return(s=t==null?void 0:t.items)==null||s.forEach(y=>y.active=!1),t},D=()=>[!!v.length&&O(P),...n.filter(t=>t.state!==te)].filter(Boolean),[x,z]=r.useState(D()),A=()=>{L("")},k=({toggleExpandItem:t,activateItem:s,collapseAll:y})=>{var J;const b=p=>{var X;const{state:H,expanded:Q=!1,items:ee=void 0}=p;return y?(p.expanded=!1,p.items&&p.items.map(b),p):t&&H===t?(p.expanded=!Q,(u||i)&&L(H),p):(!o&&_&&(p.active=!1,H===_&&(p.active=!0,M(s))),ee&&((X=p.items)==null||X.map(b)),p)},R=x.map(b);if(z(R),I&&R.length&&I(),V&&t===te){const p=(J=R==null?void 0:R.find(H=>H.state===te))==null?void 0:J.expanded;V(!!p)}},C=()=>{P.items=v,z(D())},U=r.useCallback(t=>{(u||i)&&!document.querySelectorAll(".ant-layout-sider")[0].contains(t.target)&&A()},[u]);r.useEffect(()=>{const{addEventListener:t,removeEventListener:s}=document;return t("click",U),()=>{s("click",U)}},[u]),r.useEffect(()=>{C()},[v,n]),r.useEffect(()=>{k({collapseAll:!1})},[_]),r.useEffect(()=>{u&&A()},[u]),r.useEffect(()=>{N(l)},[l]);const B={updateNavState:k,collapseAll:A,minimized:u,childPop:i,favsEnabled:d,navFavItems:v,setNavFavItems:t=>{N(t);const s=t.filter(y=>!!y.id).map(y=>y.id);c==null||c(s)},updateFavState:C};return e.createElement("nav",{className:g(m,"uif-nav",{"nav-minimized":u,"nav-child-pop":i})},[...a,...x].map(t=>{const s=t.component;return s?e.createElement(s,{key:t.key}):t.userProps?e.createElement(ie,{key:t.key,data:t,menuState:B}):t.isCaption?e.createElement(Y,{key:t.key,data:t}):e.createElement(G,{key:t.key,data:t,testId:t.klId,menuState:B,pinIcon:S,unpinIcon:F})}))},re=E(_e)`
  ${Ne}
`,se=E(_e)`
  margin-top: auto;
  ${Ne}
  ${Xe}
`;try{re.displayName="Nav",re.__docgenInfo={description:"",displayName:"Nav",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},inert:{defaultValue:null,description:"",name:"inert",required:!1,type:{name:"boolean"}},favsEnabled:{defaultValue:null,description:"",name:"favsEnabled",required:!1,type:{name:"boolean"}},onFavChanged:{defaultValue:null,description:"",name:"onFavChanged",required:!1,type:{name:"OnFavChangedCallback"}},pinIcon:{defaultValue:null,description:"",name:"pinIcon",required:!1,type:{name:"ReactNode"}},unpinIcon:{defaultValue:null,description:"",name:"unpinIcon",required:!1,type:{name:"ReactNode"}},applyAppTheme:{defaultValue:null,description:"",name:"applyAppTheme",required:!1,type:{name:"boolean"}},beforeItems:{defaultValue:{value:"[]"},description:"",name:"beforeItems",required:!1,type:{name:"any"}},favItems:{defaultValue:{value:"[]"},description:"",name:"favItems",required:!1,type:{name:"any"}},favsExpanded:{defaultValue:{value:"true"},description:"",name:"favsExpanded",required:!1,type:{name:"boolean"}},navItems:{defaultValue:{value:"[]"},description:"",name:"navItems",required:!1,type:{name:"any"}},onItemsChanged:{defaultValue:null,description:"",name:"onItemsChanged",required:!1,type:{name:"VoidFunction"}},onFavToggle:{defaultValue:null,description:"",name:"onFavToggle",required:!1,type:{name:"OnFavToggleCallback"}},favIcon:{defaultValue:null,description:"",name:"favIcon",required:!1,type:{name:"ReactNode"}},minimized:{defaultValue:null,description:"",name:"minimized",required:!1,type:{name:"boolean"}},childPop:{defaultValue:null,description:"",name:"childPop",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{se.displayName="UserNav",se.__docgenInfo={description:"",displayName:"UserNav",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},inert:{defaultValue:null,description:"",name:"inert",required:!1,type:{name:"boolean"}},favsEnabled:{defaultValue:null,description:"",name:"favsEnabled",required:!1,type:{name:"boolean"}},onFavChanged:{defaultValue:null,description:"",name:"onFavChanged",required:!1,type:{name:"OnFavChangedCallback"}},pinIcon:{defaultValue:null,description:"",name:"pinIcon",required:!1,type:{name:"ReactNode"}},unpinIcon:{defaultValue:null,description:"",name:"unpinIcon",required:!1,type:{name:"ReactNode"}},applyAppTheme:{defaultValue:null,description:"",name:"applyAppTheme",required:!1,type:{name:"boolean"}},beforeItems:{defaultValue:{value:"[]"},description:"",name:"beforeItems",required:!1,type:{name:"any"}},favItems:{defaultValue:{value:"[]"},description:"",name:"favItems",required:!1,type:{name:"any"}},favsExpanded:{defaultValue:{value:"true"},description:"",name:"favsExpanded",required:!1,type:{name:"boolean"}},navItems:{defaultValue:{value:"[]"},description:"",name:"navItems",required:!1,type:{name:"any"}},onItemsChanged:{defaultValue:null,description:"",name:"onItemsChanged",required:!1,type:{name:"VoidFunction"}},onFavToggle:{defaultValue:null,description:"",name:"onFavToggle",required:!1,type:{name:"OnFavToggleCallback"}},favIcon:{defaultValue:null,description:"",name:"favIcon",required:!1,type:{name:"ReactNode"}},minimized:{defaultValue:null,description:"",name:"minimized",required:!1,type:{name:"boolean"}},childPop:{defaultValue:null,description:"",name:"childPop",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const ra=T`
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
`,de=E("div")`
  ${ra}
`,ue=({items:a,active:n})=>e.createElement(de,{className:g({"submenu-active":n})},a.length&&e.createElement(Be,{items:a}));try{de.displayName="MenuSubmenuWrapper",de.__docgenInfo={description:"",displayName:"MenuSubmenuWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{ue.displayName="SubmenuWrapper",ue.__docgenInfo={description:"",displayName:"SubmenuWrapper",props:{active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"SubmenuItemProps[]"}}}}}catch{}const oe=({collapsed:a,className:n,...l})=>e.createElement(he,{...l,className:g("menu-collapse-button",n),icon:a?e.createElement(He,null):e.createElement(Le,null)}),sa=E(Z.Sider).withConfig({shouldForwardProp:a=>!["cssConfig","showLogo"].includes(a)})`
  ${Ke}
`,da=E.div`
  ${Ze}
`,$=r.createContext({menuActiveItem:"",setMenuActiveItem:()=>{},menuActivePopupItem:"",setMenuActivePopupItem:()=>{}}),be=a=>{const{applyAppTheme:n=!1,theme:l,children:d,beforeItems:f,collapsed:m,minimizerBottom:u,favItems:i,favsExpanded:o,navItems:I,navUserItems:c,onItemsChanged:V,onFavChanged:S,onFavToggle:F,onCollapse:q,pinIcon:v,unpinIcon:N,favIcon:_,testAttributes:M,...L}=pe(me(a)),[P,O]=r.useState([]),[D,x]=r.useState(!1),[z,A]=r.useState(!1),[k,C]=r.useState(""),[U,B]=r.useState(""),[t,s]=r.useState(m),y=()=>{const b=!t;s(b),q==null||q(b)};return r.useEffect(()=>{s(m)},[m]),e.createElement($.Provider,{value:{applyAppTheme:n,setSubmenuItems:O,setSubmenuMarginActive:x,setSubmenuActive:A,menuActiveItem:k,setMenuActiveItem:C,menuActivePopupItem:U,setMenuActivePopupItem:B}},e.createElement(sa,{...M,...L,collapsed:t,className:g({"theme-dark":l===ne.Dark,"menu-submenu-margin":D})},d,e.createElement(re,{className:"nav-scrollable",beforeItems:f,navItems:I,favItems:i,minimized:t,favsEnabled:!0,favsExpanded:o,onItemsChanged:V,onFavChanged:S,onFavToggle:F,pinIcon:v,unpinIcon:N,favIcon:_}),!!c&&e.createElement(se,{navItems:c,minimized:t,childPop:!0}),u&&e.createElement(da,null,e.createElement(oe,{role:"button",name:"hamburger",collapsed:t,onClick:y})),!!P.length&&e.createElement(ue,{items:P,active:z})))};try{oe.displayName="Hamburger",oe.__docgenInfo={description:"",displayName:"Hamburger",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},collapsed:{defaultValue:null,description:"",name:"collapsed",required:!1,type:{name:"boolean"}}}}}catch{}try{be.displayName="Menu",be.__docgenInfo={description:"",displayName:"Menu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"((boolean | ReactChild | ReactFragment | ReactPortal) & (string | number | boolean | {} | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<...> | ReactPortal)) | null"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},applyAppTheme:{defaultValue:null,description:"",name:"applyAppTheme",required:!1,type:{name:"boolean"}},beforeItems:{defaultValue:null,description:"",name:"beforeItems",required:!1,type:{name:"NavItemData[]"}},favItems:{defaultValue:null,description:"",name:"favItems",required:!1,type:{name:"NavItemData[]"}},favsExpanded:{defaultValue:null,description:"",name:"favsExpanded",required:!1,type:{name:"boolean"}},navItems:{defaultValue:null,description:"",name:"navItems",required:!1,type:{name:"NavItemData[]"}},navUserItems:{defaultValue:null,description:"",name:"navUserItems",required:!1,type:{name:"NavItemData[]"}},submenuMarginActive:{defaultValue:null,description:"",name:"submenuMarginActive",required:!1,type:{name:"boolean"}},submenuItems:{defaultValue:null,description:"not ready to use in production",name:"submenuItems",required:!1,type:{name:"SubmenuItemProps[]"}},onItemsChanged:{defaultValue:null,description:"",name:"onItemsChanged",required:!1,type:{name:"VoidFunction"}},onFavChanged:{defaultValue:null,description:"",name:"onFavChanged",required:!1,type:{name:"OnFavChangedCallback"}},onFavToggle:{defaultValue:null,description:"",name:"onFavToggle",required:!1,type:{name:"OnFavToggleCallback"}},pinIcon:{defaultValue:null,description:"",name:"pinIcon",required:!1,type:{name:"ReactNode"}},unpinIcon:{defaultValue:null,description:"",name:"unpinIcon",required:!1,type:{name:"ReactNode"}},favIcon:{defaultValue:null,description:"",name:"favIcon",required:!1,type:{name:"ReactNode"}},minimizerBottom:{defaultValue:null,description:"",name:"minimizerBottom",required:!1,type:{name:"boolean"}}}}}catch{}export{te as F,oe as H,K as I,Z as L,be as M,w as N,le as S,se as U,$ as a,re as b,G as c,na as g,qe as n};
