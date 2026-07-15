import{R as t,H as p,S as c}from"./iframe-4-PRSI1I.js";const m=p(c)`
  > .ant-tag {
    margin: 0;
  }
`,n=({items:a,Component:r,orientation:o="horizontal",align:i="center"})=>t.createElement(m,{direction:o,gap:4,align:i},a.map((e,l)=>{if(t.isValidElement(e))return e;const u=e;return t.createElement(r,{key:l,...u})}));try{n.displayName="Group",n.__docgenInfo={description:"",displayName:"Group",props:{items:{defaultValue:null,description:"Array of items",name:"items",required:!0,type:{name:"T[] | ReactElement<T, string | JSXElementConstructor<any>>[]"}},orientation:{defaultValue:{value:"horizontal"},description:"Direction of the elements",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"AlignItems"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"FC<T>"}}}}}catch{}export{n as G};
