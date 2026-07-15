import{C as x,w as b,r as w,R as r,H as v}from"./iframe-4-PRSI1I.js";import{u as C}from"./useLocalization-45JHytlv.js";import{D as V}from"./Dropdown-BZXGqesC.js";import{T as k}from"./Textbox-Dh9d3MYi.js";import{I as T}from"./IconSearch-P_ay4iUp.js";const q=x`
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
`,S=v(k)`
  ${q}
`,o=t=>{const{value:s,placeholder:u="search.dotted",dropdownOverlay:n,children:l,onClearClick:p,prefix:a,suffix:i,searchIconTestId:e,testId:c,showClearButton:_=!0,klId:f,...m}=t,{testAttributes:h}=b(t),I=C(u),y=w.useMemo(()=>{const g=e?{testId:e,klId:e}:{testId:"search-icon",componentId:"icon-search"};return!a&&(i||r.createElement(T,{...g}))},[a,i,e]),d=r.createElement(S,{placeholder:I,value:s,prefix:a,suffix:y,showClearButton:!0,onClearClick:p,...h,...m});return l||n?r.createElement(V,{klId:`${f}-dropdown`,testId:`${c}-dropdown'`,overlay:l||n,trigger:["click"]},d):d};try{o.displayName="Search",o.__docgenInfo={description:"",displayName:"Search",props:{value:{defaultValue:null,description:"Controlled Value",name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disabled",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Handler",name:"onChange",required:!1,type:{name:"((value: string, mask?: any) => void)"}},validationStatus:{defaultValue:null,description:"Validation status",name:"validationStatus",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"error"'}]}},onClearClick:{defaultValue:null,description:"",name:"onClearClick",required:!1,type:{name:"(() => void)"}},showClearButton:{defaultValue:null,description:"",name:"showClearButton",required:!1,type:{name:"boolean"}},searchIconTestId:{defaultValue:null,description:"",name:"searchIconTestId",required:!1,type:{name:"string"}},dropdownOverlay:{defaultValue:null,description:"",name:"dropdownOverlay",required:!1,type:{name:"DropdownOverlayProp"}}}}}catch{}export{o as S};
