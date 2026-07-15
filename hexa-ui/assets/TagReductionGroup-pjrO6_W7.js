import{u as N}from"./useImmutableRef-1MDvpLDO.js";import{u as G}from"./useResizeObserver-8Hk-mg1Z.js";import{P as k}from"./FormLabel-CoXJxjwh.js";import{r as s,R as t,v as P,H as R}from"./iframe-4-PRSI1I.js";import{T as E}from"./Tag-B3SARhhR.js";const A=R.div.withConfig({shouldForwardProp:e=>!["isMultiline"].includes(e)})`
  position: relative;
  width: 100%;
  display: flex;
  flex-grow: 1;
  ${({isMultiline:e})=>!e&&"overflow: hidden;"}
  gap: 8px;

  .hexa-tag-reduction-group-shown-tags {
    display: flex;
    gap: 8px;
    ${({isMultiline:e})=>e&&"flex-wrap: wrap;"}
  }

  .hexa-tag-reduction-group-hidden-elements {
    display: flex;
    gap: 8px;
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
`,d=R(E)`
  display: flex;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 1;

  > span {
    display: block;
  }

  &.hexa-tag-reduction-group-trunc-tag {
    overflow: visible;
  }
`,T=50,y=34,u=8,w=({isMultiline:e=!1,items:o,reductionTag:I})=>{const[p,g]=s.useState(o),[m,f]=s.useState(),[h,x]=s.useState([]),[l,_]=N(),{right:c}=G(l)??{right:0},n=s.useMemo(()=>{if(e)return;if(c<T+u+y)return-1;if(!l.current)return;const r=l.current.querySelector(".hexa-tag-reduction-group-hidden-elements"),a=Array.from((r==null?void 0:r.children)??[]),i=a.findIndex(b=>b.getBoundingClientRect().right+u>c);if(i===-1)return;const v=c-a[i].getBoundingClientRect().left;return(i===a.length-1?v>T:v>T+u+y)?i:i-1},[c,l.current,u,e]),S=!e&&n!==void 0&&!!h.length;return s.useEffect(()=>{switch(n){case void 0:g(o),f(void 0),x([]);break;case-1:g([]),f(void 0),x(o);break;default:g(o.slice(0,n)),f(o[n]),x(o.slice(n+1))}},[n,o]),t.createElement(A,{ref:_,isMultiline:e},!e&&t.createElement("div",{className:"hexa-tag-reduction-group-hidden-elements"},o.map((r,a)=>t.createElement(d,{key:a,...r}))),!!(p&&p.length)&&t.createElement("div",{className:"hexa-tag-reduction-group-shown-tags"},p.map((r,a)=>t.createElement(d,{key:a,...r}))),m&&t.createElement(P,{text:m.label},t.createElement(d,{...m})),S&&t.createElement(k,{content:t.createElement(E.Group,{items:h})},t.createElement(d,{...I,className:"hexa-tag-reduction-group-trunc-tag"},`+${h.length}`)))};try{w.displayName="TagReductionGroup",w.__docgenInfo={description:"",displayName:"TagReductionGroup",props:{items:{defaultValue:null,description:"Array of items",name:"items",required:!0,type:{name:"TagProps[]"}},isMultiline:{defaultValue:{value:"false"},description:"Should render in multiple lines",name:"isMultiline",required:!1,type:{name:"boolean"}},reductionTag:{defaultValue:null,description:"Reduction tag properties",name:"reductionTag",required:!1,type:{name:'Pick<TagProps, "size" | "outlined">'}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{w as T};
