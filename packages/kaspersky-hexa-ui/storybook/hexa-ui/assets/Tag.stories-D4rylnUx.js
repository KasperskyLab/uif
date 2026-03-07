import{T as ce}from"./Palette-oU4WYbWy.js";import{R as e,$ as t,S as n,b as M,am as ne,c as me,T as de,H as te}from"./iframe-zz6a49H8.js";import{w as ge}from"./withMeta-CjSZnBk7.js";import{s as pe}from"./helpers-BytZKRkB.js";import{o as se}from"./Advertisement-Yh_igVk5.js";import{M as z}from"./meta-BPjjWn3_.js";import{T as a}from"./Tag-DxDPN1QL.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Buhf4xpe.js";import"./StatusOkOutline-BBn674wO.js";import"./TextReducer-CXi1K97e.js";import"./StatusDangerSolid1-CvSXOBl-.js";import"./Group-DXZR9jfV.js";import"./index-C1mxiEMc.js";import"./type-CR-gS43P.js";import"./colors-Pn4JZYjC.js";import"./wave-CA5Glh0A.js";const le=()=>e.createElement(e.Fragment,null,e.createElement(t,{type:"H4"},"Examples"),e.createElement(t,{type:"H5"},"Базовый"),e.createElement(n,{gap:8,direction:"vertical",align:"flex-start"},e.createElement(t,null,"Medium"),e.createElement(n,{gap:4,direction:"horizontal",align:"flex-start"},e.createElement(a,{mode:"emerald"},"Emerald"),e.createElement(a,{mode:"marengo"},"Marengo"),e.createElement(a,{mode:"marina"},"Marina"),e.createElement(a,{mode:"orange"},"Orange")),e.createElement(t,null,"Small"),e.createElement(n,{gap:4,direction:"horizontal",align:"flex-start"},e.createElement(a,{mode:"emerald",size:"small"},"Emerald"),e.createElement(a,{mode:"marengo",size:"small"},"Marengo"),e.createElement(a,{mode:"marina",size:"small"},"Marina"),e.createElement(a,{mode:"orange",size:"small"},"Orange"))),e.createElement(t,{type:"H5"},"Closable"),e.createElement(t,{type:"H6"},"О том как использовать closable тэги можно узнать тут - https://codesandbox.io/s/3f2i24?file=/demo.js"),e.createElement(n,{gap:4,direction:"horizontal",align:"flex-start"},e.createElement(a,{mode:"emerald",closable:!0},"Emerald"),e.createElement(a,{mode:"marengo",closable:!0},"Marengo"),e.createElement(a,{mode:"marina",closable:!0},"Marina"),e.createElement(a,{mode:"orange",closable:!0},"Orange")));le.__docgenInfo={description:"",methods:[],displayName:"TagDocs"};const ue=te.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
`,$e={title:"Hexa UI Components/Tag",component:a,argTypes:{size:{options:["small","medium"],control:{type:"radio"}},...pe(["theme","icon","onClose","label"])},args:{size:"small",interactive:!1,closable:!1,testId:"tag-test-id",klId:"tag-kl-id"},parameters:{badges:[M.stable,M.reviewedByDesign],docs:{page:ge(z,le)},design:z.pixsoView}},l={render:o=>e.createElement(n,{gap:4,direction:"horizontal"},e.createElement(a,{...o},`I'm a ${o.mode} tag`),e.createElement(a,{...o,onClose:()=>console.log("outlined tag"),outlined:!0},`I'm a ${o.mode} outlined tag`)),args:{mode:"neutral"},argTypes:{mode:{options:ne,control:{type:"select"}}}},s=o=>e.createElement(n,{gap:16,direction:"horizontal"},e.createElement(ue,null,ne.map((r,ie)=>e.createElement("div",{key:r+ie},e.createElement(a,{...o,key:r,mode:r},`I'm a ${r} tag`),r!=="ai"&&e.createElement(a,{...o,key:`${r}-outlined`,mode:r,onClose:()=>console.log("outlined tag"),outlined:!0},`I'm a ${r} outlined tag`))))),i={render:s.bind({})},c={render:s.bind({}),args:{icon:e.createElement(se,null),size:"medium"}},m={render:s.bind({}),args:{size:"medium",closable:!0}},d={render:s.bind({}),args:{size:"medium",closable:!0,onClick:()=>console.log("tag")}},g={render:s.bind({}),args:{size:"medium",closable:!0,icon:e.createElement(se,null)}},C=o=>r=>e.createElement(n,{gap:16,direction:"horizontal"},e.createElement(a,{...r},o," tag"),e.createElement(a,{...r,closable:!0,onClose:()=>console.log(`${o} closable tag`)},o," closable tag")),p={render:C("Readonly"),args:{readOnly:!0,size:"medium"}},u={render:C("Invalid"),args:{invalid:!0,size:"medium"}},b={render:C("Disabled"),args:{disabled:!0,size:"medium"}},T={args:{children:"This is a looooong long looooong long looooong long tag content that should be truncated on maxChars prop.",onClick:()=>console.log("tag!"),closable:!0,onClose:()=>console.log("Max chars tag"),size:"medium",truncation:{maxChars:30,tooltipPosition:"bottom",truncationSymbol:"..."}}},be=te.div`
  width: 30%;
  padding: 20px;
`,E={render:o=>e.createElement("div",{style:{width:"100%"}},e.createElement(de,null,"Try to change (↔️) browser width and look at tag reaction"),e.createElement(be,null,e.createElement(a,{...o},o.children))),args:{children:"Some medium size and responsive tag",size:"medium",isResponsive:!0}},h={args:{source:me.tag},render:o=>e.createElement(ce,{...o})};var x,y,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: TagProps) => <Space gap={4} direction="horizontal">
      <Tag {...args}>
        {\`I'm a \${args.mode} tag\`}
      </Tag>
      <Tag {...args} onClose={() => console.log('outlined tag')} outlined>
        {\`I'm a \${args.mode} outlined tag\`}
      </Tag>
    </Space>,
  args: {
    mode: 'neutral'
  },
  argTypes: {
    mode: {
      options: tagModes,
      control: {
        type: 'select'
      }
    }
  }
}`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var f,v,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: AllModesMock.bind({})
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var I,A,w;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: AllModesMock.bind({}),
  args: {
    icon: <Advertisement />,
    size: 'medium'
  }
}`,...(w=(A=c.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var D,R,$;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: AllModesMock.bind({}),
  args: {
    size: 'medium',
    closable: true
  }
}`,...($=(R=m.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var H,O,P;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: AllModesMock.bind({}),
  args: {
    size: 'medium',
    closable: true,
    onClick: () => console.log('tag')
  }
}`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var _,B,V;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: AllModesMock.bind({}),
  args: {
    size: 'medium',
    closable: true,
    icon: <Advertisement />
  }
}`,...(V=(B=g.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var W,j,F;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: DefaultAndClosableMock('Readonly'),
  args: {
    readOnly: true,
    size: 'medium'
  }
}`,...(F=(j=p.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var N,U,q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: DefaultAndClosableMock('Invalid'),
  args: {
    invalid: true,
    size: 'medium'
  }
}`,...(q=(U=u.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var G,J,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: DefaultAndClosableMock('Disabled'),
  args: {
    disabled: true,
    size: 'medium'
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,Q,X;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'This is a looooong long looooong long looooong long tag content that should be truncated on maxChars prop.',
    onClick: () => console.log('tag!'),
    closable: true,
    onClose: () => console.log('Max chars tag'),
    size: 'medium',
    truncation: {
      maxChars: 30,
      tooltipPosition: 'bottom',
      truncationSymbol: '...'
    }
  }
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: (args: TagProps) => {
    return <div style={{
      width: '100%'
    }}>
        <Text>Try to change (↔️) browser width and look at tag reaction</Text>
        <Container>
          <Tag {...args}>
            {args.children}
          </Tag>
        </Container>
      </div>;
  },
  args: {
    children: 'Some medium size and responsive tag',
    size: 'medium',
    isResponsive: true
  }
}`,...(ee=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,oe,re;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    source: componentColors.tag
  },
  render: args => <ThemedPalette {...args} />
}`,...(re=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const He=["Basic","AllModeVariants","TagsWithIcons","ClosableTags","ClickedTags","ClosableAndIconCombo","ReadonlyTag","InvalidTag","DisabledTag","MaxCharsTag","ResponsiveTag","ColorTokens"];export{i as AllModeVariants,l as Basic,d as ClickedTags,g as ClosableAndIconCombo,m as ClosableTags,h as ColorTokens,b as DisabledTag,u as InvalidTag,T as MaxCharsTag,p as ReadonlyTag,E as ResponsiveTag,c as TagsWithIcons,He as __namedExportsOrder,$e as default};
