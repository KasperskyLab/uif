import{a0 as h,a2 as M,a1 as D,aw as L,u as x,R as n,H as d,T as S,w as F,K as v,r as y}from"./iframe-DlY6n6Um.js";import{S as O}from"./Select-Dfy6UA0z.js";import{t as G}from"./ArrowLeft-5XogGUFt.js";import{t as U}from"./ArrowRight-Db3Ij3DE.js";import{a as H,u as K}from"./useThemedTextbox-Bmu1H12-.js";import{u as k}from"./useTranslation-CGS-Ff88.js";import{P as V}from"./Pagination-n4p0PFAD.js";const a=D(),W=h`
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
        ${M(L.BTR3)};

        input {
          ${H}
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
      color: ${a("unselected.enabled.color")};
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
        color: ${a("unselected.enabled.color")};
      }

      &:hover {
        background: ${a("unselected.hover.background")};
      }
      &:active {
        background: ${a("unselected.active.background")};
      }
      &:focus-visible {
        box-shadow: ${a("focus.boxShadow")};
      }
      &[aria-disabled="true"], &:has([aria-disabled]) {
        &, &:hover, &:active {
          background: transparent;
          color: ${a("unselected.disabled.color")};
        }
      }
      
      &.ant-pagination-item-active {
        background: ${a("selected.enabled.background")};

        &, a {
          color: ${a("selected.enabled.color")};
        }
        
        &:hover {
          background: ${a("selected.hover.background")};

          &, a {
            color: ${a("selected.hover.color")};
          }
        }
        
        &:active {
          background: ${a("selected.active.background")};

          &, a {
            color: ${a("selected.active.color")};
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
            color: ${a("unselected.disabled.color")};
          }

          &.ant-pagination-item-active {
            background: ${a("selected.disabled.background")};
            &, a {
              color: ${a("selected.disabled.color")};
            }
          }
        }
      }
    }
  }
`,B=h`
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
`,J=h`
  & .ant-select-item.ant-select-item-option {
    padding-right: 12px
  }
`,Q=h`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,X=d(S)`
  white-space: nowrap;
`,C=e=>{const{total:t,selected:i,showSelected:o,testAttributes:c}=x(e),{t:m}=k(),u=`${m("pagination.total",{count:t})}`;return n.createElement(X,{...c},o?`${u} / ${m("pagination.selected",{count:i})}`:u)};C.__docgenInfo={description:"",methods:[],displayName:"TotalSummary",props:{total:{required:!0,tsType:{name:"number"},description:""},selected:{required:!1,tsType:{name:"number"},description:""},showSelected:{required:!1,tsType:{name:"boolean"},description:""}}};const Y={light:v.Light,dark:v.Dark},Z=e=>{const{cssConfig:t,...i}=F(e,{componentName:"pagination",defaultValues:{}}),{cssConfig:o}=K({...e,theme:e.theme&&Y[e.theme]}),c=y.useMemo(()=>({...o,...t}),[o,t]);return{...i,cssConfig:c}},ee=d.div`${B}`,te=d.span`${Q}`,ne=d(V).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  ${W}
`,ae=d(O)`${J}`,ie={nextIcon:n.createElement(U,null),prevIcon:n.createElement(G,null),jumpNextIcon:n.createElement(n.Fragment,null,"..."),jumpPrevIcon:n.createElement(n.Fragment,null,"...")},oe=(e,t)=>t.map(i=>({label:`${i} / ${e("pagination.page")}`,value:parseInt(i)})),re=({pageNumber:e})=>n.createElement(te,{onClick:t=>{t.stopPropagation()},"aria-disabled":!0},e),se=8,le=({current:e=1,pageSize:t=10,pageSizeOptions:i=["10","20","50","100"],total:o=0,totalRoot:c,selected:m=0,showSelected:u=!0,onChange:g,onShowSizeChange:w,showSizeChanger:$=!1,jumper:q=!1,disabled:f=!1,cssConfig:P,hideOnSinglePage:T=!1,cursor:E=!1,simple:I=!1,testAttributes:z,...j})=>{const p=c||o;if(T&&p<=t)return null;const{t:b}=k();y.useEffect(()=>{const r=document.querySelector(".ant-pagination-options-quick-jumper input");r&&r.setAttribute("type","number")},[]);const N=y.useMemo(()=>oe(b,i),[b,i]),_=(r,s,l)=>{const A=E&&r>=se&&r===Math.ceil(p/Number(t))&&r-e>3;return s==="page"?A?n.createElement(re,{pageNumber:r}):n.createElement(S,null,l):l},R=r=>{const s=Number(r);let l=e;e*s>p&&(l=Math.ceil(p/s),g==null||g(l,s)),w&&w(l,s)};return n.createElement(ee,{"aria-disabled":f,...z},!I&&n.createElement(C,{total:o,showSelected:u,selected:m,testId:"total",klId:"total"}),n.createElement("div",{className:"kl6-pagination-right"},!(T&&o<=t)&&n.createElement(ne,{showQuickJumper:q,showSizeChanger:!1,itemRender:_,current:e,pageSize:t,total:p,showLessItems:!0,disabled:f||t>=o,onChange:g,cssConfig:P,locale:{jump_to:b("pagination.goto")||"Go to page",page:""},...ie,...j}),$&&n.createElement(ae,{testId:"select",value:t,options:N,onChange:R,disabled:f,placement:"topLeft",virtual:!1})))},ce=e=>{const t=Z(e),i=x(t);return n.createElement(le,{...i})};ce.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{current:{required:!1,tsType:{name:"number"},description:"Current page number"},pageSize:{required:!1,tsType:{name:"number"},description:"Number of data items per page"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},hideOnSinglePage:{required:!1,tsType:{name:"boolean"},description:"Whether to hide pager on single page"},pageSizeOptions:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Specify the sizeChanger options"},showSizeChanger:{required:!1,tsType:{name:"boolean"},description:"Determine whether to show pageSize select, it will be true when total > 50"},showLessItems:{required:!1,tsType:{name:"boolean"},description:"Show less pagination items: 3 or 5"},jumper:{required:!1,tsType:{name:"boolean"},description:"Determine whether you can jump to pages directly"},total:{required:!1,tsType:{name:"number"},description:`Total number of data items, including children, if data is tree-like structure.
Set in table if server pagination is used.`},totalRoot:{required:!1,tsType:{name:"number"},description:`Total number of root data items.
Used to calculate the correct number of pages if data is tree-like structure.
Equals to **total** if data is a flat array and should be ignored`},selected:{required:!1,tsType:{name:"number"},description:"Number of selected data items"},showSelected:{required:!1,tsType:{name:"boolean"},description:"Show number of selected data items"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number, pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"number"},name:"pageSize"}],return:{name:"void"}}},description:"Called when the page number or pageSize is changed, and it takes the resulting page number and pageSize as its arguments"},onShowSizeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(current: number, size: number) => void",signature:{arguments:[{type:{name:"number"},name:"current"},{type:{name:"number"},name:"size"}],return:{name:"void"}}},description:"Called when pageSize is changed"},cursor:{required:!1,tsType:{name:"boolean"},description:"Cursor pagination"},simple:{required:!1,tsType:{name:"boolean"},description:"Simple Table mode. Without total, size changer and quick jumper"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};export{ce as P,C as T};
