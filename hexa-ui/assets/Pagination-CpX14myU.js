import{C as f,a1 as R,a2 as U,D as M,w as T,R as a,H as c,T as q,F as D,a4 as S,r as y}from"./iframe-4-PRSI1I.js";import{S as O}from"./Select-Bfc69stS.js";import{P as F}from"./Pagination-BzLE57dV.js";import{t as H}from"./ArrowLeft-CKUW7D3Z.js";import{t as G}from"./ArrowRight-AkM1Q671.js";import{c as B,u as W}from"./useThemedTextbox-Dn-Jpe9n.js";import{u as x}from"./useTranslation-jUtuSwd5.js";const Z=50,J=["20","50","100"],n=M(),K=f`
  & {
    display: flex;
    align-items: center;
    gap: 4px;

    ::after {
      display: none;
    }

    .ant-pagination-options {
      margin-left: 0;
      white-space: pre;

      .ant-pagination-options-quick-jumper {
        margin-left: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--text--secondary);
        ${R(U.BTR3)};

        input {
          ${B}
          width: 48px;
          margin: 0;
          -moz-appearance: textfield;

          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }
      }

      ::after {
        display: none;
      }
    }

    .ant-pagination-item,
    .ant-pagination-prev,
    .ant-pagination-next,
    .ant-pagination-jump-next,
    .ant-pagination-jump-prev {
      color: ${n("unselected.enabled.color")};
      background: transparent;
      border: none;
      border-radius: 6px;
      width: 32px;
      height: 32px;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        padding: 0;
        color: ${n("unselected.enabled.color")};
      }

      &:hover {
        background: ${n("unselected.hover.background")};
      }
      &:active {
        background: ${n("unselected.active.background")};
      }
      &:focus-visible {
        box-shadow: ${n("focus.boxShadow")};
      }
      &[aria-disabled="true"], &:has([aria-disabled]) {
        &, &:hover, &:active {
          background: transparent;
          color: ${n("unselected.disabled.color")};
        }
      }
      
      &.ant-pagination-item-active {
        background: ${n("selected.enabled.background")};

        &, a {
          color: ${n("selected.enabled.color")};
        }
        
        &:hover {
          background: ${n("selected.hover.background")};

          &, a {
            color: ${n("selected.hover.color")};
          }
        }
        
        &:active {
          background: ${n("selected.active.background")};

          &, a {
            color: ${n("selected.active.color")};
          }
        }
      }
    }
    &&.ant-pagination-disabled {
      .ant-pagination-item, 
      .ant-pagination-prev,
      .ant-pagination-next,
      .ant-pagination-jump-next,
      .ant-pagination-jump-prev {
        &, &:hover, &:active {
          cursor: not-allowed;
          background: transparent;
          &, a {
            color: ${n("unselected.disabled.color")};
          }

          &.ant-pagination-item-active {
            background: ${n("selected.disabled.background")};
            &, a {
              color: ${n("selected.disabled.color")};
            }
          }
        }
      }
    }
  }
`,Q=f`
  width: 100%;
  display: flex;
  align-items: center;
  height: 32px;
  justify-content: space-between;

  .kl6-pagination-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  & a {
    font-family: inherit !important;
    font-size: inherit !important;
    line-height: inherit !important;
    font-weight: inherit !important;
    font-style: inherit !important;
    letter-spacing: inherit !important;
  }
`,X=f`
  & .ant-select-item.ant-select-item-option {
    padding-right: 12px
  }
`,Y=f`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,ee=c(q)`
  white-space: nowrap;
`,w=e=>{const{total:t,selected:i,showSelected:o,testAttributes:d}=T(e),{t:p}=x(),m=`${p("pagination.total",{count:t})}`;return a.createElement(ee,{...d},o?`${m} / ${p("pagination.selected",{count:i})}`:m)};try{w.displayName="TotalSummary",w.__docgenInfo={description:"",displayName:"TotalSummary",props:{total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"number"}},showSelected:{defaultValue:null,description:"",name:"showSelected",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const te={light:S.Light,dark:S.Dark},ae=e=>{const{cssConfig:t,...i}=D(e,{componentName:"pagination",defaultValues:{}}),{cssConfig:o}=W({...e,theme:e.theme&&te[e.theme]}),d=y.useMemo(()=>({...o,...t}),[o,t]);return{...i,cssConfig:d}},ne=c.div`${Q}`,ie=c.span`${Y}`,oe=c(F).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  ${K}
`,re=c(O)`${X}`,le={nextIcon:a.createElement(G,null),prevIcon:a.createElement(H,null),jumpNextIcon:a.createElement(a.Fragment,null,"..."),jumpPrevIcon:a.createElement(a.Fragment,null,"...")},se=(e,t)=>t.map(i=>({label:`${i} / ${e("pagination.page")}`,value:parseInt(i)})),de=({pageNumber:e})=>a.createElement(ie,{onClick:t=>{t.stopPropagation()},"aria-disabled":!0},e),ue=8,ce=({current:e=1,pageSize:t=Z,pageSizeOptions:i=J,total:o=0,totalRoot:d,selected:p=0,showSelected:m=!0,onChange:g,onShowSizeChange:v,showSizeChanger:C=!1,jumper:V=!1,disabled:h=!1,cssConfig:_,hideOnSinglePage:I=!1,cursor:$=!1,simple:E=!1,testAttributes:P,...z})=>{const u=d||o;if(I&&u<=t)return null;const{t:b}=x();y.useEffect(()=>{const r=document.querySelector(".ant-pagination-options-quick-jumper input");r&&r.setAttribute("type","number")},[]);const j=y.useMemo(()=>se(b,i),[b,i]),N=(r,l,s)=>{const L=$&&r>=ue&&r===Math.ceil(u/Number(t))&&r-e>3;return l==="page"?L?a.createElement(de,{pageNumber:r}):a.createElement(q,null,s):s},A=r=>{const l=Number(r);let s=e;e*l>u&&(s=Math.ceil(u/l),g==null||g(s,l)),v&&v(s,l)};return a.createElement(ne,{"aria-disabled":h,...P},!E&&a.createElement(w,{total:o,showSelected:m,selected:p,testId:"total",klId:"total"}),a.createElement("div",{className:"kl6-pagination-right"},!(I&&o<=t)&&a.createElement(oe,{showQuickJumper:V,showSizeChanger:!1,itemRender:N,current:e,pageSize:t,total:u,showLessItems:!0,disabled:h||t>=o,onChange:g,cssConfig:_,locale:{jump_to:b("pagination.goto")||"Go to page",page:""},...le,...z}),C&&a.createElement(re,{testId:"select",value:t,options:j,onChange:A,disabled:h,placement:"topLeft",virtual:!1})))},k=e=>{const t=ae(e),i=T(t);return a.createElement(ce,{...i})};try{k.displayName="Pagination",k.__docgenInfo={description:"",displayName:"Pagination",props:{current:{defaultValue:{value:"1"},description:"Current page number",name:"current",required:!1,type:{name:"number"}},pageSize:{defaultValue:{value:"50"},description:"Number of data items per page",name:"pageSize",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},hideOnSinglePage:{defaultValue:{value:"false"},description:"Whether to hide pager on single page",name:"hideOnSinglePage",required:!1,type:{name:"boolean"}},pageSizeOptions:{defaultValue:{value:"['20', '50', '100']"},description:"Specify the sizeChanger options",name:"pageSizeOptions",required:!1,type:{name:"string[]"}},showSizeChanger:{defaultValue:{value:"false"},description:"Determine whether to show pageSize select, it will be true when total > 50",name:"showSizeChanger",required:!1,type:{name:"boolean"}},showLessItems:{defaultValue:null,description:"Show less pagination items: 3 or 5",name:"showLessItems",required:!1,type:{name:"boolean"}},jumper:{defaultValue:{value:"false"},description:"Determine whether you can jump to pages directly",name:"jumper",required:!1,type:{name:"boolean"}},total:{defaultValue:{value:"0"},description:`Total number of data items, including children, if data is tree-like structure.
Set in table if server pagination is used.`,name:"total",required:!1,type:{name:"number"}},totalRoot:{defaultValue:null,description:`Total number of root data items.
Used to calculate the correct number of pages if data is tree-like structure.
Equals to **total** if data is a flat array and should be ignored`,name:"totalRoot",required:!1,type:{name:"number"}},selected:{defaultValue:{value:"0"},description:"Number of selected data items",name:"selected",required:!1,type:{name:"number"}},showSelected:{defaultValue:{value:"true"},description:"Show number of selected data items",name:"showSelected",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Called when the page number or pageSize is changed, and it takes the resulting page number and pageSize as its arguments",name:"onChange",required:!1,type:{name:"((page: number, pageSize: number) => void)"}},onShowSizeChange:{defaultValue:null,description:"Called when pageSize is changed",name:"onShowSizeChange",required:!1,type:{name:"((current: number, size: number) => void)"}},cursor:{defaultValue:{value:"false"},description:"Cursor pagination",name:"cursor",required:!1,type:{name:"boolean"}},simple:{defaultValue:{value:"false"},description:"Simple Table mode. Without total, size changer and quick jumper",name:"simple",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{J as D,k as P,w as T,Z as a,se as g};
