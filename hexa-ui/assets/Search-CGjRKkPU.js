import{a0 as I,u as w,r as k,R as t,A as T,H as b}from"./iframe-ko-fN4O0.js";import{u as v}from"./useLocalization-Cj1pOHyJ.js";import{T as y}from"./Textbox-BJxW5It8.js";import{I as C}from"./IconSearch-kKdGw-Tr.js";import{D as S}from"./Dropdown-CWozQ77e.js";const E=I`
  overflow: hidden;
  
  .ant-input-prefix {
    margin-right: 8px;
  }
  
  &.kl6-search-button-left .ant-input-prefix {
    margin-left: -12px;
  }
  
  &.kl6-search-button-right .ant-input-suffix {
    margin-right: -12px;
  }

  .ant-input-group-addon {
    padding: 0;
    background-color: transparent;
  }
  
  &&.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover{
    z-index: 1;
  }
`,A=b(y)`
  ${E}
`,q=n=>{const{value:e,placeholder:l="search.dotted",dropdownOverlay:o,children:s,onClearClick:i,prefix:r,suffix:c,searchIconTestId:a,testId:p,klId:u,...f}=n,{testAttributes:h}=w(n),m=v(l),x=k.useMemo(()=>{const g=a?{testId:a,klId:a}:{testId:"search-icon",componentId:"icon-search"};return e&&e.length?t.createElement(T,{testId:"search-clear",klId:"clear",onClick:i,mode:"filled"}):!r&&(c||t.createElement(C,{...g}))},[e,r,c,i]),d=t.createElement(A,{placeholder:m,value:e,prefix:r,allowClear:!1,suffix:x,...h,...f});return s||o?t.createElement(S,{klId:`${u}-dropdown`,testId:`${p}-dropdown'`,overlay:s||o,trigger:["click"]},d):d};q.__docgenInfo={description:"",methods:[],displayName:"Search",props:{onClearClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Clear icon click handler"},searchIconTestId:{required:!1,tsType:{name:"string"},description:""},dropdownOverlay:{required:!1,tsType:{name:"DropdownOverlayProp"},description:""}}};export{q as S,E as s};
