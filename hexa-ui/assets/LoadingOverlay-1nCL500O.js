import{w as u,R as s,x as d,H as o,y as m}from"./iframe-4-PRSI1I.js";import{L as c}from"./Loader-CzWCOjAf.js";const p=m(),f=o.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${p.background};
  opacity: 90%;
`;function e({className:t,description:n,size:r,theme:a,...i}){const{testAttributes:l}=u(i);return s.createElement(f,{className:d(t,a),...l,...i},s.createElement(c,{size:r,tip:n,theme:a}))}e.defaultProps={size:"medium"};try{e.displayName="LoadingOverlay",e.__docgenInfo={description:"",displayName:"LoadingOverlay",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'medium' as const"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}}}}}catch{}export{e as L};
