import{a0 as S,H as x,R as e,j as b,ba as Ae,K as ae,w as xe,r as s,u as te,y as me,A as ne,x as ue}from"./iframe-zz6a49H8.js";import{t as Te,a as Ce,b as Ee}from"./ArrowRightMini-DjD3k9uh.js";import{u as de}from"./useLocalization-CR8m5dji.js";import{t as ce,l as Se,r as Pe}from"./Unpin-nuudWmPx.js";import{S as De}from"./Submenu-CMti_k3_.js";import{L as Be,H as Re,F as _e,C as Fe,S as Me}from"./Sider-CfheJztG.js";import{T as Ue}from"./TextWithTruncation-CQ52ZobZ.js";import{B as je}from"./Badge-DMO-MXiW.js";import{I as $e}from"./Indicator-DNWfFabI.js";import{r as ze}from"./StatusOkSolid-MBCvP7_O.js";var O=Be;O.Header=Re;O.Footer=_e;O.Content=Fe;O.Sider=Me;const He=S`
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
`,Ke=S`
  padding: 0 var(--spacing--padding_l);

  button {
    margin: var(--spacing--gap_related) var(--spacing--gap_related) 0;
  }
`,ve=S`
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
    > .uif-nav-item-entry .uif-nav-item-entry-arrow {
      transform: rotate(90deg);
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
`,pe=S`
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
`,Le=S`
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
`,We=S`
  &:before {
    content: '';
    display: block;
    margin: 4px 8px;
    border-top: 1px solid var(--divider--bg--light);
  }
`,Ve=S`
  margin: 6px 8px;
  border-top: 1px solid var(--divider--bg--light);

  .nav-minimized > & {
    display: none;
  }

  .nav-child-pop & {
    margin: 4px 0;
  }
`;var V=(a=>(a.Before="before",a.After="after",a))(V||{});const G=x.div`
  ${Ve};
`,Oe=({data:{key:a,itemDivider:t,isRoot:r},className:l})=>e.createElement(e.Fragment,null,t===V.Before&&e.createElement(G,null),e.createElement("div",{className:b(l,"uif-nav-caption",{"caption-root":r})},a),t===V.After&&e.createElement(G,null)),fe=x(Oe)`
  ${Le};
`,re=({applyAppTheme:a,...t})=>{const{key:r=ae.Light}=Ae()||{},l={...t,theme:a&&r||ae.Dark};return xe(l,{componentName:"menu",defaultValues:{},propsToDrill:["theme"]})},ie=a=>{const{applyAppTheme:t}=s.useContext(H),r=re({...a,applyAppTheme:t}),{testAttributes:l,...p}=te(r);return e.createElement(Ze,{...l,...p,...a})},Ye=({data:a,className:t,menuState:r,_isChild:l,pinIcon:p,unpinIcon:c})=>{const{icon:o,items:i,state:m,onClick:g,key:v,expanded:T,disabled:P,active:D,isNew:B,isCaption:f,itemDivider:k,elementAfter:q,submenuItems:R,canBeAddedAsFav:_=!0,skipActivation:j=!1,lineClamp:K}=a,$=o,w=!!(i&&i.length),z=!!R,{setSubmenuItems:C,setSubmenuMarginActive:I,setSubmenuActive:h,setMenuActiveItem:F,setMenuActivePopupItem:N,menuActivePopupItem:n}=s.useContext(H),{minimized:u,collapseAll:A,updateNavState:E,childPop:M,favsEnabled:Y,navFavItems:d,setNavFavItems:U}=r,J=y=>{u&&N(m),E({toggleExpandItem:y})},Q=()=>{j||(E({activateItem:m}),F(m)),(u||M)&&A(),g&&g()},Z=()=>{R&&C&&I&&h&&(E({activateItem:m}),F(m),C(R),I(!0),h(!0))},qe=()=>{if(!P){if(w){J(m);return}if(z){Z();return}I&&h&&(I(!1),h(!1)),Q()}},we=_&&!w&&Y&&v!=="Fav",Ie={data:a,navFavItems:d,setNavFavItems:U,updateFavState:E,pinIcon:p,unpinIcon:c},se=y=>{for(let L=0;L<y.length;L++){const W=y[L];if(W.isNew||W.items&&se(W.items))return!0}return!1},le=i==null?void 0:i.length,he=le?se(i):!1,Ne=!le&&B,oe=e.createElement("div",{className:b(t,"uif-nav-item-entry",{active:D,disabled:P}),"kl-id":a.klId,"data-testid":a.klId,onClick:qe},o&&e.createElement("div",{className:"uif-nav-item-entry-icon"},e.createElement($,null)),e.createElement("div",{className:b("uif-nav-item-entry-title",{"title-wo-icon":!o})},e.createElement(Ue,{text:v,lineClamp:K},e.createElement("span",null,v))),e.createElement("div",{className:"uif-nav-item-entry-props"},he&&Qe,Ne&&Je,q,we&&e.createElement(Ge,{...Ie}),w&&e.createElement(Te,{className:"uif-nav-item-entry-arrow"})));return e.createElement(e.Fragment,null,k===V.Before&&e.createElement(G,null),e.createElement("div",{className:b(t,"uif-nav-item",{"uif-nav-caption":f,expanded:!u&&T,"popup-expanded":n===m})},u&&!l?e.createElement(me,{text:v,placement:"right"},oe):oe,w&&e.createElement("div",{className:"uif-nav-item-child"},e.createElement("div",{className:"uif-nav-item-child-wrapper"},i==null?void 0:i.map(y=>{const{isCaption:L,isRoot:W}=y;return L?e.createElement(fe,{className:b({"caption-root":W}),key:`${y.key}-child`,data:y,menuState:r}):e.createElement(ie,{key:`${y.key}-child`,data:y,menuState:r,pinIcon:p,unpinIcon:c,_isChild:!0})})))),k===V.After&&e.createElement(G,null))},Ze=x(Ye).withConfig({shouldForwardProp:a=>!["cssConfig"].includes(a)})`
  ${ve};
`,Ge=({data:a,navFavItems:t,setNavFavItems:r,pinIcon:l=e.createElement(ce,null),unpinIcon:p=e.createElement(Se,null)})=>{const c=t.some(i=>i.key===a.key),o=i=>{i.preventDefault(),i.stopPropagation(),r(c?[...t.filter(m=>m.key!==a.key)]:[a,...t])};return e.createElement(ne,{className:"uif-nav-fav-add",mode:"ghost",onClick:o,icon:c?p:l})},Je=e.createElement(je,{mode:"new",size:"medium",text:"NEW"}),Qe=e.createElement($e,{mode:"new"});ie.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{className:{required:!1,tsType:{name:"string"},description:""},data:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  state?: string,
  routeParams?: any,
  parentState?: string,
  parentPluginId?: string,
  weight?: number,
  key?: string,
  id?: string,
  iconClass?: any,
  itemClass?: string | null,
  icon?: any,
  klId?: string,
  items?: NavItemData[],
  onClick?: () => void,
  condition?: <T>(state: T) => boolean,
  path?: string[],
  additionalElements?: ReactNode,
  groupsTree?: boolean,
  isRoot?: boolean,
  isNew?: boolean,
  elementAfter?: ReactNode,
  /** not ready to use in production */
  submenuItems?: SubmenuItemProps[],
  isCaption?: boolean,
  expanded?: boolean,
  active?: boolean,
  disabled?: boolean,
  mode?: 'user',
  userProps?: UserProps,
  itemDivider?: ItemDivider.Before | ItemDivider.After,
  notifications?: NavItemNotifications | (() => NavItemNotifications),
  canBeAddedAsFav?: boolean,
  skipActivation?: boolean,
  /** Number of lines after which the content will be clamped */
  lineClamp?: number
}`,signature:{properties:[{key:"state",value:{name:"string",required:!1}},{key:"routeParams",value:{name:"any",required:!1}},{key:"parentState",value:{name:"string",required:!1}},{key:"parentPluginId",value:{name:"string",required:!1}},{key:"weight",value:{name:"number",required:!1}},{key:"key",value:{name:"string",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"iconClass",value:{name:"any",required:!1}},{key:"itemClass",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"icon",value:{name:"any",required:!1}},{key:"klId",value:{name:"string",required:!1}},{key:"items",value:{name:"Array",elements:[{name:"NavItemData"}],raw:"NavItemData[]",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"condition",value:{name:"signature",type:"function",raw:"<T>(state: T) => boolean",signature:{arguments:[{type:{name:"T"},name:"state"}],return:{name:"boolean"}},required:!1}},{key:"path",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"additionalElements",value:{name:"ReactNode",required:!1}},{key:"groupsTree",value:{name:"boolean",required:!1}},{key:"isRoot",value:{name:"boolean",required:!1}},{key:"isNew",value:{name:"boolean",required:!1}},{key:"elementAfter",value:{name:"ReactNode",required:!1}},{key:"submenuItems",value:{name:"Array",elements:[{name:"SubmenuItemProps"}],raw:"SubmenuItemProps[]",required:!1},description:"not ready to use in production"},{key:"isCaption",value:{name:"boolean",required:!1}},{key:"expanded",value:{name:"boolean",required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"mode",value:{name:"literal",value:"'user'",required:!1}},{key:"userProps",value:{name:"signature",type:"object",raw:`{
  role?: string,
  name?: string,
  status?: UserStatus
}`,signature:{properties:[{key:"role",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"status",value:{name:"union",raw:"'available' | 'unavailable'",elements:[{name:"literal",value:"'available'"},{name:"literal",value:"'unavailable'"}],required:!1}}]},required:!1}},{key:"itemDivider",value:{name:"union",raw:"ItemDivider.Before | ItemDivider.After",elements:[{name:"ItemDivider.Before"},{name:"ItemDivider.After"}],required:!1}},{key:"notifications",value:{name:"union",raw:"NavItemNotifications | (() => NavItemNotifications)",elements:[{name:"signature",type:"object",raw:`{
  critical?: number,
  warning?: number,
  info?: number,
  multi?: number,
}`,signature:{properties:[{key:"critical",value:{name:"number",required:!1}},{key:"warning",value:{name:"number",required:!1}},{key:"info",value:{name:"number",required:!1}},{key:"multi",value:{name:"number",required:!1}}]}},{name:"unknown"}],required:!1}},{key:"canBeAddedAsFav",value:{name:"boolean",required:!1}},{key:"skipActivation",value:{name:"boolean",required:!1}},{key:"lineClamp",value:{name:"number",required:!1},description:"Number of lines after which the content will be clamped"}]}},description:""},key:{required:!0,tsType:{name:"string"},description:""},menuState:{required:!1,tsType:{name:"any"},description:""},userProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  role?: string,
  name?: string,
  status?: UserStatus
}`,signature:{properties:[{key:"role",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"status",value:{name:"union",raw:"'available' | 'unavailable'",elements:[{name:"literal",value:"'available'"},{name:"literal",value:"'unavailable'"}],required:!1}}]}},description:""},favsEnabled:{required:!1,tsType:{name:"boolean"},description:""},component:{required:!1,tsType:{name:"any"},description:""},elementAfter:{required:!1,tsType:{name:"ReactNode"},description:""},isCaption:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},_isChild:{required:!1,tsType:{name:"boolean"},description:""},onFavChanged:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  itemKeys: Array<string>
) => void`,signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},name:"itemKeys"}],return:{name:"void"}}},description:""},pinIcon:{required:!1,tsType:{name:"ReactNode"},description:""},unpinIcon:{required:!1,tsType:{name:"ReactNode"},description:""},skipActivation:{required:!1,tsType:{name:"boolean"},description:""},applyAppTheme:{required:!1,tsType:{name:"boolean"},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""}}};const ye=a=>{const{applyAppTheme:t}=s.useContext(H),r=re({...a,applyAppTheme:t}),l=te(r);return e.createElement(aa,{...l,...a})},Xe=(a,t)=>{if(t)switch(a){case"available":return r=>e.createElement(ze,{...r,color:ue.icon.status.statuspositive[t]});case"unavailable":return r=>e.createElement(Pe,{...r,color:ue.icon.status.statuscritical[t]})}},ea=({theme:a,data:{icon:t,state:r,onClick:l,active:p,userProps:{role:c,name:o,status:i}={}},className:m,menuState:g})=>{const{setMenuActiveItem:v}=s.useContext(H),T=i&&de(`menu.navUserItem.userProps.status.${i}`),D=Xe(i,a)||t,{updateNavState:B,minimized:f,collapseAll:k}=g,q=()=>{B({activateItem:r}),v&&v(r),l&&l(),f&&k()};return e.createElement("div",{className:b(m,"uif-nav-item")},e.createElement("div",{className:b(m,"uif-nav-item-entry","uif-nav-item-user",{active:p}),onClick:q},e.createElement(me,{text:f&&T,theme:a,placement:"right"},t&&e.createElement("div",{className:"uif-nav-item-entry-icon"},e.createElement(D,{testId:"userIconStatus",klId:"userIconStatus"}))),e.createElement("div",{className:"uif-nav-item-user-entry-wrapper"},e.createElement("div",{className:"uif-nav-item-entry-title"},e.createElement("span",{className:"title-ellipsis"},o)),c&&e.createElement("div",{className:"uif-nav-item-entry-role"},c))))},aa=x(ea).withConfig({shouldForwardProp:a=>!["cssConfig"].includes(a)})`
  ${ve};
`;ye.__docgenInfo={description:"",methods:[],displayName:"NavUserItem",props:{className:{required:!1,tsType:{name:"string"},description:""},data:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  state?: string,
  routeParams?: any,
  parentState?: string,
  parentPluginId?: string,
  weight?: number,
  key?: string,
  id?: string,
  iconClass?: any,
  itemClass?: string | null,
  icon?: any,
  klId?: string,
  items?: NavItemData[],
  onClick?: () => void,
  condition?: <T>(state: T) => boolean,
  path?: string[],
  additionalElements?: ReactNode,
  groupsTree?: boolean,
  isRoot?: boolean,
  isNew?: boolean,
  elementAfter?: ReactNode,
  /** not ready to use in production */
  submenuItems?: SubmenuItemProps[],
  isCaption?: boolean,
  expanded?: boolean,
  active?: boolean,
  disabled?: boolean,
  mode?: 'user',
  userProps?: UserProps,
  itemDivider?: ItemDivider.Before | ItemDivider.After,
  notifications?: NavItemNotifications | (() => NavItemNotifications),
  canBeAddedAsFav?: boolean,
  skipActivation?: boolean,
  /** Number of lines after which the content will be clamped */
  lineClamp?: number
}`,signature:{properties:[{key:"state",value:{name:"string",required:!1}},{key:"routeParams",value:{name:"any",required:!1}},{key:"parentState",value:{name:"string",required:!1}},{key:"parentPluginId",value:{name:"string",required:!1}},{key:"weight",value:{name:"number",required:!1}},{key:"key",value:{name:"string",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"iconClass",value:{name:"any",required:!1}},{key:"itemClass",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"icon",value:{name:"any",required:!1}},{key:"klId",value:{name:"string",required:!1}},{key:"items",value:{name:"Array",elements:[{name:"NavItemData"}],raw:"NavItemData[]",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"condition",value:{name:"signature",type:"function",raw:"<T>(state: T) => boolean",signature:{arguments:[{type:{name:"T"},name:"state"}],return:{name:"boolean"}},required:!1}},{key:"path",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"additionalElements",value:{name:"ReactNode",required:!1}},{key:"groupsTree",value:{name:"boolean",required:!1}},{key:"isRoot",value:{name:"boolean",required:!1}},{key:"isNew",value:{name:"boolean",required:!1}},{key:"elementAfter",value:{name:"ReactNode",required:!1}},{key:"submenuItems",value:{name:"Array",elements:[{name:"SubmenuItemProps"}],raw:"SubmenuItemProps[]",required:!1},description:"not ready to use in production"},{key:"isCaption",value:{name:"boolean",required:!1}},{key:"expanded",value:{name:"boolean",required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"mode",value:{name:"literal",value:"'user'",required:!1}},{key:"userProps",value:{name:"signature",type:"object",raw:`{
  role?: string,
  name?: string,
  status?: UserStatus
}`,signature:{properties:[{key:"role",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"status",value:{name:"union",raw:"'available' | 'unavailable'",elements:[{name:"literal",value:"'available'"},{name:"literal",value:"'unavailable'"}],required:!1}}]},required:!1}},{key:"itemDivider",value:{name:"union",raw:"ItemDivider.Before | ItemDivider.After",elements:[{name:"ItemDivider.Before"},{name:"ItemDivider.After"}],required:!1}},{key:"notifications",value:{name:"union",raw:"NavItemNotifications | (() => NavItemNotifications)",elements:[{name:"signature",type:"object",raw:`{
  critical?: number,
  warning?: number,
  info?: number,
  multi?: number,
}`,signature:{properties:[{key:"critical",value:{name:"number",required:!1}},{key:"warning",value:{name:"number",required:!1}},{key:"info",value:{name:"number",required:!1}},{key:"multi",value:{name:"number",required:!1}}]}},{name:"unknown"}],required:!1}},{key:"canBeAddedAsFav",value:{name:"boolean",required:!1}},{key:"skipActivation",value:{name:"boolean",required:!1}},{key:"lineClamp",value:{name:"number",required:!1},description:"Number of lines after which the content will be clamped"}]}},description:""},key:{required:!0,tsType:{name:"string"},description:""},menuState:{required:!1,tsType:{name:"any"},description:""},userProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  role?: string,
  name?: string,
  status?: UserStatus
}`,signature:{properties:[{key:"role",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"status",value:{name:"union",raw:"'available' | 'unavailable'",elements:[{name:"literal",value:"'available'"},{name:"literal",value:"'unavailable'"}],required:!1}}]}},description:""},favsEnabled:{required:!1,tsType:{name:"boolean"},description:""},component:{required:!1,tsType:{name:"any"},description:""},elementAfter:{required:!1,tsType:{name:"ReactNode"},description:""},isCaption:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},_isChild:{required:!1,tsType:{name:"boolean"},description:""},onFavChanged:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  itemKeys: Array<string>
) => void`,signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},name:"itemKeys"}],return:{name:"void"}}},description:""},pinIcon:{required:!1,tsType:{name:"ReactNode"},description:""},unpinIcon:{required:!1,tsType:{name:"ReactNode"},description:""},skipActivation:{required:!1,tsType:{name:"boolean"},description:""},applyAppTheme:{required:!1,tsType:{name:"boolean"},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""}}};const X=[],ee="favorites",be=({beforeItems:a=X,navItems:t=X,favItems:r=X,favsEnabled:l,favsExpanded:p=!0,className:c,minimized:o,childPop:i,inert:m,onItemsChanged:g,onFavChanged:v,onFavToggle:T,pinIcon:P,unpinIcon:D,favIcon:B})=>{const[f,k]=s.useState(r),{menuActiveItem:q,setMenuActiveItem:R,setMenuActivePopupItem:_}=s.useContext(H),j={state:"favorites",weight:0,key:de("menu.favoritesNavItem"),expanded:p,icon:B||ce,itemClass:"favorites-item",klId:"navigation.main.favorites",isRoot:!0,items:f},K=n=>{var u;return(u=n==null?void 0:n.items)==null||u.forEach(A=>A.active=!1),n},$=()=>[!!f.length&&K(j),...t.filter(n=>n.state!==ee)].filter(Boolean),[w,z]=s.useState($()),C=()=>{_("")},I=({toggleExpandItem:n,activateItem:u,collapseAll:A})=>{var Y;const E=d=>{var Z;const{state:U,expanded:J=!1,items:Q=void 0}=d;return A?(d.expanded=!1,d.items&&d.items.map(E),d):n&&U===n?(d.expanded=!J,(o||i)&&_(U),d):(!m&&q&&(d.active=!1,U===q&&(d.active=!0,R(u))),Q&&((Z=d.items)==null||Z.map(E)),d)},M=w.map(E);if(z(M),g&&M.length&&g(),T&&n===ee){const d=(Y=M==null?void 0:M.find(U=>U.state===ee))==null?void 0:Y.expanded;T(!!d)}},h=()=>{j.items=f,z($())},F=s.useCallback(n=>{(o||i)&&!document.querySelectorAll(".ant-layout-sider")[0].contains(n.target)&&C()},[o]);s.useEffect(()=>{const{addEventListener:n,removeEventListener:u}=document;return n("click",F),()=>{u("click",F)}},[o]),s.useEffect(()=>{h()},[f,t]),s.useEffect(()=>{I({collapseAll:!1})},[q]),s.useEffect(()=>{o&&C()},[o]),s.useEffect(()=>{k(r)},[r]);const N={updateNavState:I,collapseAll:C,minimized:o,childPop:i,favsEnabled:l,navFavItems:f,setNavFavItems:n=>{k(n);const u=n.filter(A=>!!A.id).map(A=>A.id);v==null||v(u)},updateFavState:h};return e.createElement("nav",{className:b(c,"uif-nav",{"nav-minimized":o,"nav-child-pop":i})},[...a,...w].map(n=>{const u=n.component;return u?e.createElement(u,{key:n.key}):n.userProps?e.createElement(ye,{key:n.key,data:n,menuState:N}):n.isCaption?e.createElement(fe,{key:n.key,data:n}):e.createElement(ie,{key:n.key,data:n,testId:n.klId,menuState:N,pinIcon:P,unpinIcon:D})}))},na=x(be)`
  ${pe}
`,ta=x(be)`
  margin-top: auto;
  ${pe}
  ${We}
`,ra=S`
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
`,ia=x("div")`
  ${ra}
`,ge=({items:a,active:t})=>e.createElement(ia,{className:b({"submenu-active":t})},a.length&&e.createElement(De,{items:a}));ge.__docgenInfo={description:"",methods:[],displayName:"SubmenuWrapper",props:{active:{required:!0,tsType:{name:"boolean"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"SubmenuItemProps"}],raw:"SubmenuItemProps[]"},description:""}}};const ke=({collapsed:a,...t})=>a?e.createElement(ne,{icon:e.createElement(Ce,null),...t}):e.createElement(ne,{icon:e.createElement(Ee,null),...t}),sa=x(O.Sider)`
  ${He}
`,la=x.div`
  ${Ke}
`,H=s.createContext({menuActiveItem:"",setMenuActiveItem:()=>{},menuActivePopupItem:"",setMenuActivePopupItem:()=>{}}),oa=a=>{const{applyAppTheme:t=!1,theme:r,children:l,beforeItems:p,collapsed:c,minimizerBottom:o,favItems:i,favsExpanded:m,navItems:g,navUserItems:v,onItemsChanged:T,onFavChanged:P,onFavToggle:D,pinIcon:B,unpinIcon:f,favIcon:k,testAttributes:q,...R}=te(re(a)),[_,j]=s.useState([]),[K,$]=s.useState(!1),[w,z]=s.useState(!1),[C,I]=s.useState(""),[h,F]=s.useState(""),[N,n]=s.useState(c);return s.useEffect(()=>{n(c)},[c]),e.createElement(H.Provider,{value:{applyAppTheme:t,setSubmenuItems:j,setSubmenuMarginActive:$,setSubmenuActive:z,menuActiveItem:C,setMenuActiveItem:I,menuActivePopupItem:h,setMenuActivePopupItem:F}},e.createElement(sa,{...q,...R,collapsed:N,className:b({"theme-dark":r===ae.Dark,"menu-submenu-margin":K})},l,e.createElement(na,{className:"nav-scrollable",beforeItems:p,navItems:g,favItems:i,minimized:N,favsEnabled:!0,favsExpanded:m,onItemsChanged:T,onFavChanged:P,onFavToggle:D,pinIcon:B,unpinIcon:f,favIcon:k}),!!v&&e.createElement(ta,{navItems:v,minimized:N,childPop:!0}),o&&e.createElement(la,null,e.createElement(ke,{role:"button",name:"hamburger",collapsed:N,onClick:()=>n(u=>!u)})),!!_.length&&e.createElement(ge,{items:_,active:w})))};ke.__docgenInfo={description:"",methods:[],displayName:"Hamburger",props:{className:{required:!1,tsType:{name:"string"},description:""},role:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""}}};oa.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{applyAppTheme:{required:!1,tsType:{name:"boolean"},description:""},beforeItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  state?: string,
  routeParams?: any,
  parentState?: string,
  parentPluginId?: string,
  weight?: number,
  key?: string,
  id?: string,
  iconClass?: any,
  itemClass?: string | null,
  icon?: any,
  klId?: string,
  items?: NavItemData[],
  onClick?: () => void,
  condition?: <T>(state: T) => boolean,
  path?: string[],
  additionalElements?: ReactNode,
  groupsTree?: boolean,
  isRoot?: boolean,
  isNew?: boolean,
  elementAfter?: ReactNode,
  /** not ready to use in production */
  submenuItems?: SubmenuItemProps[],
  isCaption?: boolean,
  expanded?: boolean,
  active?: boolean,
  disabled?: boolean,
  mode?: 'user',
  userProps?: UserProps,
  itemDivider?: ItemDivider.Before | ItemDivider.After,
  notifications?: NavItemNotifications | (() => NavItemNotifications),
  canBeAddedAsFav?: boolean,
  skipActivation?: boolean,
  /** Number of lines after which the content will be clamped */
  lineClamp?: number
}`,signature:{properties:[{key:"state",value:{name:"string",required:!1}},{key:"routeParams",value:{name:"any",required:!1}},{key:"parentState",value:{name:"string",required:!1}},{key:"parentPluginId",value:{name:"string",required:!1}},{key:"weight",value:{name:"number",required:!1}},{key:"key",value:{name:"string",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"iconClass",value:{name:"any",required:!1}},{key:"itemClass",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"icon",value:{name:"any",required:!1}},{key:"klId",value:{name:"string",required:!1}},{key:"items",value:{name:"Array",elements:[{name:"NavItemData"}],raw:"NavItemData[]",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"condition",value:{name:"signature",type:"function",raw:"<T>(state: T) => boolean",signature:{arguments:[{type:{name:"T"},name:"state"}],return:{name:"boolean"}},required:!1}},{key:"path",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"additionalElements",value:{name:"ReactNode",required:!1}},{key:"groupsTree",value:{name:"boolean",required:!1}},{key:"isRoot",value:{name:"boolean",required:!1}},{key:"isNew",value:{name:"boolean",required:!1}},{key:"elementAfter",value:{name:"ReactNode",required:!1}},{key:"submenuItems",value:{name:"Array",elements:[{name:"SubmenuItemProps"}],raw:"SubmenuItemProps[]",required:!1},description:"not ready to use in production"},{key:"isCaption",value:{name:"boolean",required:!1}},{key:"expanded",value:{name:"boolean",required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"mode",value:{name:"literal",value:"'user'",required:!1}},{key:"userProps",value:{name:"signature",type:"object",raw:`{
  role?: string,
  name?: string,
  status?: UserStatus
}`,signature:{properties:[{key:"role",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"status",value:{name:"union",raw:"'available' | 'unavailable'",elements:[{name:"literal",value:"'available'"},{name:"literal",value:"'unavailable'"}],required:!1}}]},required:!1}},{key:"itemDivider",value:{name:"union",raw:"ItemDivider.Before | ItemDivider.After",elements:[{name:"ItemDivider.Before"},{name:"ItemDivider.After"}],required:!1}},{key:"notifications",value:{name:"union",raw:"NavItemNotifications | (() => NavItemNotifications)",elements:[{name:"signature",type:"object",raw:`{
  critical?: number,
  warning?: number,
  info?: number,
  multi?: number,
}`,signature:{properties:[{key:"critical",value:{name:"number",required:!1}},{key:"warning",value:{name:"number",required:!1}},{key:"info",value:{name:"number",required:!1}},{key:"multi",value:{name:"number",required:!1}}]}},{name:"unknown"}],required:!1}},{key:"canBeAddedAsFav",value:{name:"boolean",required:!1}},{key:"skipActivation",value:{name:"boolean",required:!1}},{key:"lineClamp",value:{name:"number",required:!1},description:"Number of lines after which the content will be clamped"}]}}],raw:"NavItemData[]"},description:""},favItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  state?: string,
  routeParams?: any,
  parentState?: string,
  parentPluginId?: string,
  weight?: number,
  key?: string,
  id?: string,
  iconClass?: any,
  itemClass?: string | null,
  icon?: any,
  klId?: string,
  items?: NavItemData[],
  onClick?: () => void,
  condition?: <T>(state: T) => boolean,
  path?: string[],
  additionalElements?: ReactNode,
  groupsTree?: boolean,
  isRoot?: boolean,
  isNew?: boolean,
  elementAfter?: ReactNode,
  /** not ready to use in production */
  submenuItems?: SubmenuItemProps[],
  isCaption?: boolean,
  expanded?: boolean,
  active?: boolean,
  disabled?: boolean,
  mode?: 'user',
  userProps?: UserProps,
  itemDivider?: ItemDivider.Before | ItemDivider.After,
  notifications?: NavItemNotifications | (() => NavItemNotifications),
  canBeAddedAsFav?: boolean,
  skipActivation?: boolean,
  /** Number of lines after which the content will be clamped */
  lineClamp?: number
}`,signature:{properties:[{key:"state",value:{name:"string",required:!1}},{key:"routeParams",value:{name:"any",required:!1}},{key:"parentState",value:{name:"string",required:!1}},{key:"parentPluginId",value:{name:"string",required:!1}},{key:"weight",value:{name:"number",required:!1}},{key:"key",value:{name:"string",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"iconClass",value:{name:"any",required:!1}},{key:"itemClass",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"icon",value:{name:"any",required:!1}},{key:"klId",value:{name:"string",required:!1}},{key:"items",value:{name:"Array",elements:[{name:"NavItemData"}],raw:"NavItemData[]",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"condition",value:{name:"signature",type:"function",raw:"<T>(state: T) => boolean",signature:{arguments:[{type:{name:"T"},name:"state"}],return:{name:"boolean"}},required:!1}},{key:"path",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"additionalElements",value:{name:"ReactNode",required:!1}},{key:"groupsTree",value:{name:"boolean",required:!1}},{key:"isRoot",value:{name:"boolean",required:!1}},{key:"isNew",value:{name:"boolean",required:!1}},{key:"elementAfter",value:{name:"ReactNode",required:!1}},{key:"submenuItems",value:{name:"Array",elements:[{name:"SubmenuItemProps"}],raw:"SubmenuItemProps[]",required:!1},description:"not ready to use in production"},{key:"isCaption",value:{name:"boolean",required:!1}},{key:"expanded",value:{name:"boolean",required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"mode",value:{name:"literal",value:"'user'",required:!1}},{key:"userProps",value:{name:"signature",type:"object",raw:`{
  role?: string,
  name?: string,
  status?: UserStatus
}`,signature:{properties:[{key:"role",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"status",value:{name:"union",raw:"'available' | 'unavailable'",elements:[{name:"literal",value:"'available'"},{name:"literal",value:"'unavailable'"}],required:!1}}]},required:!1}},{key:"itemDivider",value:{name:"union",raw:"ItemDivider.Before | ItemDivider.After",elements:[{name:"ItemDivider.Before"},{name:"ItemDivider.After"}],required:!1}},{key:"notifications",value:{name:"union",raw:"NavItemNotifications | (() => NavItemNotifications)",elements:[{name:"signature",type:"object",raw:`{
  critical?: number,
  warning?: number,
  info?: number,
  multi?: number,
}`,signature:{properties:[{key:"critical",value:{name:"number",required:!1}},{key:"warning",value:{name:"number",required:!1}},{key:"info",value:{name:"number",required:!1}},{key:"multi",value:{name:"number",required:!1}}]}},{name:"unknown"}],required:!1}},{key:"canBeAddedAsFav",value:{name:"boolean",required:!1}},{key:"skipActivation",value:{name:"boolean",required:!1}},{key:"lineClamp",value:{name:"number",required:!1},description:"Number of lines after which the content will be clamped"}]}}],raw:"NavItemData[]"},description:""},favsExpanded:{required:!1,tsType:{name:"boolean"},description:""},navItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  state?: string,
  routeParams?: any,
  parentState?: string,
  parentPluginId?: string,
  weight?: number,
  key?: string,
  id?: string,
  iconClass?: any,
  itemClass?: string | null,
  icon?: any,
  klId?: string,
  items?: NavItemData[],
  onClick?: () => void,
  condition?: <T>(state: T) => boolean,
  path?: string[],
  additionalElements?: ReactNode,
  groupsTree?: boolean,
  isRoot?: boolean,
  isNew?: boolean,
  elementAfter?: ReactNode,
  /** not ready to use in production */
  submenuItems?: SubmenuItemProps[],
  isCaption?: boolean,
  expanded?: boolean,
  active?: boolean,
  disabled?: boolean,
  mode?: 'user',
  userProps?: UserProps,
  itemDivider?: ItemDivider.Before | ItemDivider.After,
  notifications?: NavItemNotifications | (() => NavItemNotifications),
  canBeAddedAsFav?: boolean,
  skipActivation?: boolean,
  /** Number of lines after which the content will be clamped */
  lineClamp?: number
}`,signature:{properties:[{key:"state",value:{name:"string",required:!1}},{key:"routeParams",value:{name:"any",required:!1}},{key:"parentState",value:{name:"string",required:!1}},{key:"parentPluginId",value:{name:"string",required:!1}},{key:"weight",value:{name:"number",required:!1}},{key:"key",value:{name:"string",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"iconClass",value:{name:"any",required:!1}},{key:"itemClass",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"icon",value:{name:"any",required:!1}},{key:"klId",value:{name:"string",required:!1}},{key:"items",value:{name:"Array",elements:[{name:"NavItemData"}],raw:"NavItemData[]",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"condition",value:{name:"signature",type:"function",raw:"<T>(state: T) => boolean",signature:{arguments:[{type:{name:"T"},name:"state"}],return:{name:"boolean"}},required:!1}},{key:"path",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"additionalElements",value:{name:"ReactNode",required:!1}},{key:"groupsTree",value:{name:"boolean",required:!1}},{key:"isRoot",value:{name:"boolean",required:!1}},{key:"isNew",value:{name:"boolean",required:!1}},{key:"elementAfter",value:{name:"ReactNode",required:!1}},{key:"submenuItems",value:{name:"Array",elements:[{name:"SubmenuItemProps"}],raw:"SubmenuItemProps[]",required:!1},description:"not ready to use in production"},{key:"isCaption",value:{name:"boolean",required:!1}},{key:"expanded",value:{name:"boolean",required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"mode",value:{name:"literal",value:"'user'",required:!1}},{key:"userProps",value:{name:"signature",type:"object",raw:`{
  role?: string,
  name?: string,
  status?: UserStatus
}`,signature:{properties:[{key:"role",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"status",value:{name:"union",raw:"'available' | 'unavailable'",elements:[{name:"literal",value:"'available'"},{name:"literal",value:"'unavailable'"}],required:!1}}]},required:!1}},{key:"itemDivider",value:{name:"union",raw:"ItemDivider.Before | ItemDivider.After",elements:[{name:"ItemDivider.Before"},{name:"ItemDivider.After"}],required:!1}},{key:"notifications",value:{name:"union",raw:"NavItemNotifications | (() => NavItemNotifications)",elements:[{name:"signature",type:"object",raw:`{
  critical?: number,
  warning?: number,
  info?: number,
  multi?: number,
}`,signature:{properties:[{key:"critical",value:{name:"number",required:!1}},{key:"warning",value:{name:"number",required:!1}},{key:"info",value:{name:"number",required:!1}},{key:"multi",value:{name:"number",required:!1}}]}},{name:"unknown"}],required:!1}},{key:"canBeAddedAsFav",value:{name:"boolean",required:!1}},{key:"skipActivation",value:{name:"boolean",required:!1}},{key:"lineClamp",value:{name:"number",required:!1},description:"Number of lines after which the content will be clamped"}]}}],raw:"NavItemData[]"},description:""},navUserItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  state?: string,
  routeParams?: any,
  parentState?: string,
  parentPluginId?: string,
  weight?: number,
  key?: string,
  id?: string,
  iconClass?: any,
  itemClass?: string | null,
  icon?: any,
  klId?: string,
  items?: NavItemData[],
  onClick?: () => void,
  condition?: <T>(state: T) => boolean,
  path?: string[],
  additionalElements?: ReactNode,
  groupsTree?: boolean,
  isRoot?: boolean,
  isNew?: boolean,
  elementAfter?: ReactNode,
  /** not ready to use in production */
  submenuItems?: SubmenuItemProps[],
  isCaption?: boolean,
  expanded?: boolean,
  active?: boolean,
  disabled?: boolean,
  mode?: 'user',
  userProps?: UserProps,
  itemDivider?: ItemDivider.Before | ItemDivider.After,
  notifications?: NavItemNotifications | (() => NavItemNotifications),
  canBeAddedAsFav?: boolean,
  skipActivation?: boolean,
  /** Number of lines after which the content will be clamped */
  lineClamp?: number
}`,signature:{properties:[{key:"state",value:{name:"string",required:!1}},{key:"routeParams",value:{name:"any",required:!1}},{key:"parentState",value:{name:"string",required:!1}},{key:"parentPluginId",value:{name:"string",required:!1}},{key:"weight",value:{name:"number",required:!1}},{key:"key",value:{name:"string",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"iconClass",value:{name:"any",required:!1}},{key:"itemClass",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"icon",value:{name:"any",required:!1}},{key:"klId",value:{name:"string",required:!1}},{key:"items",value:{name:"Array",elements:[{name:"NavItemData"}],raw:"NavItemData[]",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"condition",value:{name:"signature",type:"function",raw:"<T>(state: T) => boolean",signature:{arguments:[{type:{name:"T"},name:"state"}],return:{name:"boolean"}},required:!1}},{key:"path",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"additionalElements",value:{name:"ReactNode",required:!1}},{key:"groupsTree",value:{name:"boolean",required:!1}},{key:"isRoot",value:{name:"boolean",required:!1}},{key:"isNew",value:{name:"boolean",required:!1}},{key:"elementAfter",value:{name:"ReactNode",required:!1}},{key:"submenuItems",value:{name:"Array",elements:[{name:"SubmenuItemProps"}],raw:"SubmenuItemProps[]",required:!1},description:"not ready to use in production"},{key:"isCaption",value:{name:"boolean",required:!1}},{key:"expanded",value:{name:"boolean",required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"mode",value:{name:"literal",value:"'user'",required:!1}},{key:"userProps",value:{name:"signature",type:"object",raw:`{
  role?: string,
  name?: string,
  status?: UserStatus
}`,signature:{properties:[{key:"role",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"status",value:{name:"union",raw:"'available' | 'unavailable'",elements:[{name:"literal",value:"'available'"},{name:"literal",value:"'unavailable'"}],required:!1}}]},required:!1}},{key:"itemDivider",value:{name:"union",raw:"ItemDivider.Before | ItemDivider.After",elements:[{name:"ItemDivider.Before"},{name:"ItemDivider.After"}],required:!1}},{key:"notifications",value:{name:"union",raw:"NavItemNotifications | (() => NavItemNotifications)",elements:[{name:"signature",type:"object",raw:`{
  critical?: number,
  warning?: number,
  info?: number,
  multi?: number,
}`,signature:{properties:[{key:"critical",value:{name:"number",required:!1}},{key:"warning",value:{name:"number",required:!1}},{key:"info",value:{name:"number",required:!1}},{key:"multi",value:{name:"number",required:!1}}]}},{name:"unknown"}],required:!1}},{key:"canBeAddedAsFav",value:{name:"boolean",required:!1}},{key:"skipActivation",value:{name:"boolean",required:!1}},{key:"lineClamp",value:{name:"number",required:!1},description:"Number of lines after which the content will be clamped"}]}}],raw:"NavItemData[]"},description:""},submenuMarginActive:{required:!1,tsType:{name:"boolean"},description:""},submenuItems:{required:!1,tsType:{name:"Array",elements:[{name:"SubmenuItemProps"}],raw:"SubmenuItemProps[]"},description:"not ready to use in production"},onItemsChanged:{required:!1,tsType:{name:"VoidFunction"},description:""},onFavChanged:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  itemKeys: Array<string>
) => void`,signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},name:"itemKeys"}],return:{name:"void"}}},description:""},onFavToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},pinIcon:{required:!1,tsType:{name:"ReactNode"},description:""},unpinIcon:{required:!1,tsType:{name:"ReactNode"},description:""},favIcon:{required:!1,tsType:{name:"ReactNode"},description:""},minimizerBottom:{required:!1,tsType:{name:"boolean"},description:""}}};export{ke as H,V as I,O as L,oa as M,G as N,Xe as g,ve as n};
