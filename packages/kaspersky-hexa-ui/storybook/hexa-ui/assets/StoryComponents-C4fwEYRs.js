import{D as p}from"./Divider-DNO5OI2y.js";import{F as m}from"./FormLabel-BcyH9HgS.js";import{R as t,H as y}from"./iframe-zz6a49H8.js";const i=y.div`
  ${({verticalGap:e,horizontalGap:o,verticalWidth:a,horizontalWidth:r,vertical:c,justifyContent:d})=>`
    display: flex;
    gap: ${o}px;
    width: ${r};
    justify-content: ${d};

    ${c&&`
      gap: ${e}px;
      width: ${a};
      justify-content: start;
      align-items: flex-start;
      flex-direction: column;
    `}
  `}
`,h=e=>t.createElement(i,{vertical:!0,verticalGap:16,...e}),n=e=>t.createElement(i,{vertical:e.vertical,horizontalGap:24,verticalGap:32,...e}),l=e=>t.createElement(i,{vertical:e.vertical,horizontalGap:24,verticalGap:16,...e}),s=e=>t.createElement(i,{vertical:e.vertical,horizontalGap:16,verticalGap:8,verticalWidth:"100%",horizontalWidth:e.horizontalWidth||"100px",justifyContent:"end"},t.createElement(m,{mode:"secondary",style:{alignSelf:"center"}},e.label),t.createElement(p,{direction:e!=null&&e.vertical?"horizontal":"vertical"}));function u(e,o,a="small"){return o?t.createElement(n,{vertical:!0,horizontalWidth:"100%"},e.map(r=>t.createElement(l,{key:r.label,horizontalWidth:"100%"},t.createElement(s,{label:r.label,horizontalWidth:a==="medium"?"160px":"100px"}),r.content))):t.createElement(n,null,e.map(r=>t.createElement(l,{key:r.label,vertical:!0},t.createElement(s,{label:r.label,vertical:!0,horizontalWidth:a==="medium"?"160px":"100px"}),r.content)))}h.__docgenInfo={description:"",methods:[],displayName:"StoryColumn",props:{style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},vertical:{required:!1,tsType:{name:"boolean"},description:""},horizontalWidth:{required:!1,tsType:{name:"string"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"StoryWrapper",props:{style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},vertical:{required:!1,tsType:{name:"boolean"},description:""},horizontalWidth:{required:!1,tsType:{name:"string"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"StoryComponentContainer",props:{style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},vertical:{required:!1,tsType:{name:"boolean"},description:""},horizontalWidth:{required:!1,tsType:{name:"string"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"StoryLabel",props:{style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},vertical:{required:!1,tsType:{name:"boolean"},description:""},horizontalWidth:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"renderVariants"};export{h as S,l as a,n as b,s as c,u as r};
