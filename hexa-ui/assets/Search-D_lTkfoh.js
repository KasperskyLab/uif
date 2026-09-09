import{C as b,u as I,r as v,R as r,H as w}from"./iframe-DedYZBTA.js";import{D as C}from"./Dropdown-C8Jtav0F.js";import{T as k}from"./Textbox-B-hgsSTM.js";import{I as V}from"./IconSearch-tU4SVZjn.js";import{u as T}from"./useTranslation-od-Kmf1k.js";const q=b`
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
`,S=w(k)`
  ${q}
`,s=e=>{const{value:d,placeholder:u="search.dotted",dropdownOverlay:n,children:l,onClearClick:p,prefix:a,suffix:i,searchIconTestId:t="search-icon",testId:c,showClearButton:_=!0,klId:f,...m}=e,{testAttributes:h}=I(e),{t:y}=T(),g=y(u),x=v.useMemo(()=>!a&&(i||r.createElement(V,{klId:t,testId:t})),[a,i,t]),o=r.createElement(S,{placeholder:g,value:d,prefix:a,suffix:x,showClearButton:!0,onClearClick:p,...h,...m});return l||n?r.createElement(C,{klId:`${f}-dropdown`,testId:`${c}-dropdown'`,overlay:l||n,trigger:["click"]},o):o};try{s.displayName="Search",s.__docgenInfo={description:"",displayName:"Search",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disabled",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Handler",name:"onChange",required:!1,type:{name:"((value: string, mask?: any) => void)"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Controlled Value",name:"value",required:!1,type:{name:"string"}},onClearClick:{defaultValue:null,description:"",name:"onClearClick",required:!1,type:{name:"(() => void)"}},showClearButton:{defaultValue:null,description:"",name:"showClearButton",required:!1,type:{name:"boolean"}},validationStatus:{defaultValue:null,description:"Validation status",name:"validationStatus",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"error"'}]}},searchIconTestId:{defaultValue:null,description:"",name:"searchIconTestId",required:!1,type:{name:"string"}},dropdownOverlay:{defaultValue:null,description:"",name:"dropdownOverlay",required:!1,type:{name:"DropdownOverlayProp"}}}}}catch{}export{s as S};
