import{b as i,R as a,L as E,r as b}from"./iframe-DGvJ380d.js";import{w}from"./withMeta-Cn2dTpV4.js";import{s as L}from"./helpers-BytZKRkB.js";import{S as T}from"./StoryComponents-CK00MLxU.js";import{E as f}from"./ExpandableText-BBVn6N9u.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-C_hi_klS.js";import"./StatusOkOutline-DyiwV4SU.js";import"./Divider-EZz3gDRj.js";import"./FormLabel-04WUeFWU.js";import"./Markdown-Dtk4N5jt.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-IWItRl7b.js";import"./TextReducer-ClEwKs4l.js";import"./StatusDangerSolid1-CO9eEuNu.js";import"./Group-DEJL6ANa.js";import"./index-DgDzkQQ-.js";import"./type-fFl6OLJD.js";import"./colors-gQKfGPjt.js";import"./wave-CATF4J87.js";import"./Popover-CqARYnm2.js";import"./useResizeObserver-ir5WvKdi.js";import"./v4-BoP187Zn.js";const S={designTokens:!1,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0},y="ExpandableText",W="",B="",_="",C={dod:S,component:y,description:W,usage:B,designLink:_},e="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere provident consectetur? Perspiciatis nisi dolorum accusantium reprehenderit, architecto officiis mollitia ex modi cum sit voluptatum unde quasi? Iusto, possimus nesciunt.",ee={title:"Hexa UI Components/ExpandableText",component:f,argTypes:{...L(["theme"])},args:{children:e,"data-testid":"expandable-text-kl-id",className:"expandable-text"},decorators:[(o,n)=>a.createElement(T,{style:{minWidth:"100px",maxWidth:"400px"}},a.createElement(o,{...n}))],parameters:{badges:[i.stable,i.missingDesign],docs:{page:w(C)}}},t={},r={args:{children:a.createElement(E,{decoration:"icon",href:"https://www.kaspersky.com",target:"_blank"},e)}},H=[e,e,e].join(`
`),s={args:{children:H},render:o=>{const[n,k]=b.useState(!1);return a.createElement(f,{onExpand:k,style:{whiteSpace:n?"pre-wrap":"pre"},...o})}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <Link decoration="icon" href="https://www.kaspersky.com" target="_blank">{defaultText}</Link>
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var x,h,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: textWithLineBreaks
  },
  render: args => {
    const [expanded, setExpanded] = useState(false);
    return <ExpandableText onExpand={setExpanded} style={{
      whiteSpace: expanded ? 'pre-wrap' : 'pre'
    }} {...args} />;
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const te=["Basic","WithLink","WithLineBreaks"];export{t as Basic,s as WithLineBreaks,r as WithLink,te as __namedExportsOrder,ee as default};
