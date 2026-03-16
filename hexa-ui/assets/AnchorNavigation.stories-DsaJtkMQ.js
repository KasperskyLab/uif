import{w as U}from"./withMeta-B77fl0Sa.js";import{B as A}from"./Badge-B6JIvdem.js";import{B as X}from"./Button-CgqUalcg.js";import{S as Z}from"./Sidebar-llqutOcL.js";import{R as t,j as W,r as m,C as G,T as ee,P as y,ah as te,v as ne,ai as re,H as oe}from"./iframe-DlY6n6Um.js";import{T as se}from"./TextReducer-mTsc_fVR.js";import{c as ae,d as ie,e as ce,f as le}from"./SubComponents-CR9vTQlE.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";import"./type-Cyafuwrq.js";import"./colors-Cs2HIvKh.js";import"./Dropdown-WtVSJYv5.js";import"./KeyCode-B45xthVk.js";import"./Overflow-wC_Ss__i.js";import"./focus-oe9vj3c6.js";import"./Loader-BjmnRfIR.js";import"./index-CY9qp4ym.js";import"./Divider-BzNbSw2T.js";import"./ArrowRight-Db3Ij3DE.js";import"./v4-BoP187Zn.js";import"./button-CjggZd63.js";import"./wave-CgaPvuQn.js";import"./TextWithTruncation-CKM_ry59.js";import"./PortalWrapper-BiZl32E3.js";import"./Portal-CDqKrIDu.js";import"./useForceUpdate-Baz3Ps8R.js";import"./preload-helper-C1FmrZbK.js";import"./Indicator-CQY-Y-dA.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./ArrowDownSolid-BE7bAzAG.js";import"./ArrowRightSolid-BZEyC8P2.js";const me={designTokens:!0,useThemedHook:!1,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},de="AnchorNavigation",pe="",ue="AnchorNavigation — это вспомогательный компонент для ориентации пользователя внутри одной страницы. По своей сути AnchorNavigation — это карта страницы, которая отражает структуру контента, показывает взаимосвязь разделов и подразделов, помогает пользователю понимать, где он находится в рамках текущей страницы.",ge="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?page-id=29963%3A101579",he="https://pixso.net/app/design/hD3Tb31jr4YLaPBf6JEN5Q",L={dod:me,component:de,description:pe,usage:ue,designLink:ge,pixsoView:he},fe="_anchorLink_p3jqv_1",ye="_content_p3jqv_5",ve="_navigation_p3jqv_10",be="_items_p3jqv_27",Ee="_item_p3jqv_27",Se="_selected_p3jqv_45",ke="_elementAfter_p3jqv_55",c={anchorLink:fe,content:ye,navigation:ve,items:be,item:Ee,selected:Se,elementAfter:ke};function z(e){return e.flatMap(n=>[n,...n.children?z(n.children):[]])}function we(e){let n=e.parentElement;for(;n;){const o=getComputedStyle(n);if(/(auto|scroll)/.test(o.overflow+o.overflowY+o.overflowX))return n;n=n.parentElement}return document.documentElement}function Te(e){return e===document.documentElement?{"--nav-offset-top":"24px","--nav-max-height":"calc(100vh - 24px)"}:{"--nav-offset-top":0,"--nav-max-height":`${e.clientHeight-parseFloat(getComputedStyle(e).paddingTop)}px`}}const xe=e=>{var n;(n=document.getElementById(e))==null||n.scrollIntoView({behavior:"smooth"})};function Ae({item:e,level:n,onClick:o,selected:s}){return t.createElement(ae,{className:W(c.item,s&&c.selected),"data-section":e.id,leftOffset:8+n*20,onClick:o,onKeyDown:p=>p.key==="Enter"?o():void 0,selected:s,tabIndex:0},t.createElement(ie,null,t.createElement(ce,{type:"BTR4"},t.createElement(se,{lineClamp:2},e.label))),e.elementAfter&&t.createElement(le,{className:c.elementAfter},e.elementAfter))}function Ie({items:e,style:n,title:o}){var _;const[s,p]=m.useState((_=e[0])==null?void 0:_.id),[$,J]=m.useState({}),b=m.useRef(null),w=m.useRef(!1);if(m.useEffect(()=>{if(!e.length)return;const r=we(b.current),a=r===document.documentElement?window:r,u=()=>{var P;const q=r.clientHeight,K=r.scrollHeight,C=r.scrollTop,Q=C+q>=K-64,l=z(e);let i="";if(Q&&l.length>0)i=l[l.length-1].id;else{const T=C+q*.2;i=(P=l[0])==null?void 0:P.id;for(const g of l){const h=document.getElementById(g.id);if(!h)continue;if(h.offsetTop<=T)i=g.id;else break}}p(T=>{var g,h,x;return T!==i&&!w.current&&(i===l[0].id?(g=b.current)==null||g.scrollTo({top:0,behavior:"smooth"}):(x=(h=b.current)==null?void 0:h.querySelector(`[data-section="${i}"]`))==null||x.scrollIntoView({behavior:"smooth",block:"nearest"})),i})},B=()=>{w.current=!1};return a.addEventListener("scroll",u),a.addEventListener("scrollend",B),u(),J(Te(r)),()=>{a.removeEventListener("scroll",u),a.removeEventListener("scrollend",B)}},[e]),!e.length)return null;function N(r,a=0){return t.createElement(t.Fragment,{key:r.id},t.createElement(Ae,{item:r,level:a,onClick:()=>{w.current=!0,xe(r.id)},selected:r.id===s}),r.children&&r.children.map(u=>N(u,a+1)))}return t.createElement(G,{getPopupContainer:r=>r.parentElement},t.createElement("nav",{ref:b,className:c.navigation,style:{...n,...$}},o&&t.createElement(ee,{type:"BTM3"},o),t.createElement("div",{className:c.items},e.map(r=>N(r)))))}function k({children:e,className:n,items:o,title:s,...p}){return t.createElement("div",{...p,className:W(c.anchorLink,n)},t.createElement("div",{className:c.content},e),t.createElement(Ie,{items:o,title:s}))}k.__docgenInfo={description:"",methods:[],displayName:"AnchorNavigation",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  children?: AnchorItem[],
  elementAfter?: ReactNode,
  id: string,
  label: string
}`,signature:{properties:[{key:"children",value:{name:"Array",elements:[{name:"AnchorItem"}],raw:"AnchorItem[]",required:!1}},{key:"elementAfter",value:{name:"ReactNode",required:!1}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"AnchorItem[]"},description:""},title:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const at={title:"Hexa UI Components/AnchorNavigation",component:k,argTypes:{},args:{title:"Page Content"},decorators:[(e,n)=>t.createElement("div",null,t.createElement(e,{...n}))],parameters:{badges:[],docs:{page:U(L)},design:L.pixsoView}},d=Array(20).fill(0).map((e,n)=>({id:`section-${n+1}`,label:`Section ${n+1}`}));d.splice(3,0,{id:"two-line-text",label:"Pack my box with five dozen liquor jugs. ".repeat(2)},{id:"three-line-text",label:"The quick brown fox jumps over the lazy dog. ".repeat(2)});d[1].elementAfter=t.createElement(A,{mode:"critical",count:1});d[8].children=[{children:[{id:"subsubsection-1",label:"Subsubsection"},{elementAfter:t.createElement(A,{mode:"resolved",text:"new"}),id:"subsubsection-2",label:"The quick brown fox jumps over the lazy dog. ".repeat(2)}],id:"subsection-1",label:"Subsection"},{elementAfter:t.createElement(A,{mode:"resolved",text:"new"}),id:"subsection-2",label:"The quick brown fox jumps over the lazy dog. ".repeat(3)}];const v="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",Ne=oe.div`
  & + & {
    margin-top: 10px;
  }
`;function I(e,n=0){const o=n===0?te:n===1?ne:re;return t.createElement(t.Fragment,{key:e.id},t.createElement(Ne,null,t.createElement(o,{id:e.id},e.label),t.createElement(y,{style:{marginTop:"1em"}},v),t.createElement(y,{style:{marginTop:"1em"}},v),t.createElement(y,{style:{marginTop:"1em"}},v)),e.children&&e.children.map(s=>I(s,n+1)))}const f={render:e=>t.createElement(t.Fragment,null,t.createElement(y,{style:{marginBottom:"1em"}},v),t.createElement(k,{...e},e.items.map(n=>I(n)))),args:{items:d.slice(0,10)}},E={...f,args:{items:d}},S={render:e=>{const[n,o]=m.useState(!1);return t.createElement(t.Fragment,null,t.createElement(X,{onClick:()=>o(!0)},"Open"),t.createElement(Z,{title:"Sidebar",visible:n,onClose:()=>o(!1)},t.createElement(y,{style:{marginBottom:"1em"}},v),t.createElement(k,{...e},e.items.map(s=>I(s)))))},args:{items:d.slice(0,10)}};var R,j,H;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args: AnchorNavigationProps) => {
    return <>
      <P style={{
        marginBottom: '1em'
      }}>{dummyText}</P>

      <AnchorNavigation {...args}>
        {args.items.map(x => renderItem(x))} 
      </AnchorNavigation>
    </>;
  },
  args: {
    items: anchorItems.slice(0, 10)
  }
}`,...(H=(j=f.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var O,M,V;E.parameters={...E.parameters,docs:{...(O=E.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Basic,
  args: {
    items: anchorItems
  }
}`,...(V=(M=E.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var Y,D,F;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: (args: AnchorNavigationProps) => {
    const [isOpen, setOpen] = useState(false);
    return <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Sidebar title="Sidebar" visible={isOpen} onClose={() => setOpen(false)}>
        <P style={{
          marginBottom: '1em'
        }}>{dummyText}</P>

        <AnchorNavigation {...args}>
          {args.items.map(x => renderItem(x))} 
        </AnchorNavigation>
      </Sidebar>
    </>;
  },
  args: {
    items: anchorItems.slice(0, 10)
  }
}`,...(F=(D=S.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const it=["Basic","WithManyItems","WithSidebar"];export{f as Basic,E as WithManyItems,S as WithSidebar,it as __namedExportsOrder,at as default};
