import{T as Z}from"./Palette-pKPGiK_Z.js";import{b as h,R as e,c as j,r as u,S as q,H as C}from"./iframe-DGvJ380d.js";import{w as G}from"./withMeta-Cn2dTpV4.js";import{s as X}from"./helpers-BytZKRkB.js";import{S as A}from"./StoryComponents-CK00MLxU.js";import{B as $}from"./Badge-BYq-SqRH.js";import{B as S}from"./Button-wrPqqegB.js";import{C as ee}from"./Checkbox-Vth7gTSI.js";import{R as te}from"./Radio-DBIHDSJ-.js";import{T as E}from"./Tag-IWItRl7b.js";import{T as re}from"./Toggle-CQ9mMjcU.js";import{r as J}from"./Connection-DAxkMV1X.js";import{I as r}from"./InformationCard-CiYLx23Y.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-C_hi_klS.js";import"./StatusOkOutline-DyiwV4SU.js";import"./Divider-EZz3gDRj.js";import"./FormLabel-04WUeFWU.js";import"./Markdown-Dtk4N5jt.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-CqARYnm2.js";import"./type-fFl6OLJD.js";import"./colors-gQKfGPjt.js";import"./Dropdown-ZwTwTLgN.js";import"./KeyCode-9RiNU2cC.js";import"./Overflow-C7Z2yQ6d.js";import"./focus-BMBywfst.js";import"./Loader-CMdXHI8c.js";import"./index-ep_dZgWZ.js";import"./ArrowRight-BIq5osfB.js";import"./v4-BoP187Zn.js";import"./button-MWvA5E08.js";import"./wave-CATF4J87.js";import"./AdditionalContent-CyJPU7m4.js";import"./HelpMessage-D4_NBOsb.js";import"./useId-CJZBV_Nh.js";import"./generateId-BXJELych.js";import"./index-CGb6P9Vp.js";import"./index-BkF_I_v5.js";import"./index-bNDyr5f4.js";import"./TextReducer-ClEwKs4l.js";import"./StatusDangerSolid1-CO9eEuNu.js";import"./Group-DEJL6ANa.js";import"./index-DgDzkQQ-.js";const oe={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},ae="InformationCard",ne="Компонент InformationCard. Карточка может содержать заголовок, описание, иконку, любой контент и элементы управления.",se="Компонент InformationCard используется для группировки информации и опций для одной сущности.",ie="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=67551%3A253068",de="https://pixso.net/app/design/gdaroKaKFmT3xNMf_pagrw",y={dod:oe,component:ae,description:ne,usage:se,designLink:ie,pixsoView:de},le=C.div`
  position: relative;
`,ce=C($)`
  position: absolute;
  top: 0;
  right: -8px;
`,me=()=>e.createElement(le,null,e.createElement(J,null),e.createElement(ce,{count:9,mode:"high"})),ot={title:"Hexa UI Components/InformationCard",component:r,argTypes:{title:{control:{type:"text"}},width:{control:{type:"range",min:100,max:1e3,step:10}},leftSide:{control:{type:"select"},mapping:{undefined:void 0,icon:e.createElement(J,null),iconWithBadge:e.createElement(me,null)},options:["undefined","icon","iconWithBadge"]},...X(["footer","rightCorner","theme","titleLevel","titleIcon","children","contentLevel","className","leftSideClassName","titleClassName","descriptionClassName","rightCornerClassName","contentClassName","footerClassName","style"])},args:{type:"vertical",width:450,title:"Heading",description:"To protect your mailboxes, OneDrive files, and SharePoint Online sites, Kaspersky Security for Microsoft Office 365 needs limited access to Office 365.",leftSide:"undefined",size:"medium",selected:!1,disabled:!1,interactive:!1,testId:"information-card-test-id",klId:"information-card-kl-id"},parameters:{badges:[h.stable,h.reviewedByDesign],docs:{page:G(y)},design:y.pixsoView}},a=t=>e.createElement(q,{gap:16,direction:"horizontal"},e.createElement(S,{mode:"primary",disabled:t.disabled},"First"),e.createElement(S,{mode:"secondary",disabled:t.disabled},"Second")),g=t=>e.createElement(e.Fragment,null,e.createElement(E,{mode:"purple",interactive:!0,outlined:!0,disabled:t.disabled},"Custom content"),e.createElement(E,{mode:"violet",interactive:!0,outlined:!0,disabled:t.disabled},"More custom content")),i={},d={render:t=>e.createElement(r,{...t,footer:e.createElement(a,{disabled:t.disabled})}),args:{leftSide:"iconWithBadge"}},l={render:t=>e.createElement(r,{...t,footer:e.createElement(a,{disabled:t.disabled})},e.createElement(g,{disabled:t.disabled})),args:{leftSide:"icon"}},c={render:t=>{const n=["vertical","horizontal","center"];return e.createElement(A,null,n.map(s=>e.createElement(r,{...t,key:s,type:s,footer:e.createElement(a,{disabled:t.disabled})},e.createElement(g,{disabled:t.disabled}))))},args:{leftSide:"iconWithBadge"}},m={render:t=>{const[n,s]=u.useState(!1),[b,U]=u.useState(!1),[Y,Q]=u.useState(!1);return e.createElement(A,null,e.createElement(r,{...t,selected:n,onClick:()=>s(o=>!o),rightCorner:e.createElement(ee,{disabled:t.disabled,checked:n})}),e.createElement(r,{...t,selected:b,onClick:()=>U(o=>!o),rightCorner:e.createElement(re,{disabled:t.disabled,checked:b})}),e.createElement(r,{...t,selected:Y,onClick:()=>Q(o=>!o),rightCorner:e.createElement(te,{disabled:t.disabled,options:[{label:"",value:""}]})}))}},pe=C.div`
  height: 300px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`,p={render:t=>e.createElement(pe,null,e.createElement(r,{...t,footer:e.createElement(a,{disabled:t.disabled}),description:"Short content"},e.createElement(g,{disabled:t.disabled})),e.createElement(r,{...t,footer:e.createElement(a,{disabled:t.disabled})},e.createElement(g,{disabled:t.disabled})))},f={args:{source:j.information_card},render:t=>e.createElement(Z,{...t})};var T,k,I;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(I=(k=i.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var x,v,B;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: InformationCardProps) => <InformationCard {...args} footer={<DefaultFooter disabled={args.disabled} />} />,
  args: {
    leftSide: 'iconWithBadge'
  }
}`,...(B=(v=d.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var D,W,w;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args: InformationCardProps) => <InformationCard {...args} footer={<DefaultFooter disabled={args.disabled} />}>
      <DefaultChildren disabled={args.disabled} />
    </InformationCard>,
  args: {
    leftSide: 'icon'
  }
}`,...(w=(W=l.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var F,H,R;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const informationCardTypes: InformationCardType[] = ['vertical', 'horizontal', 'center'];
    return <StoryColumn>
        {informationCardTypes.map(cardType => <InformationCard {...args} key={cardType} type={cardType} footer={<DefaultFooter disabled={args.disabled} />}>
            <DefaultChildren disabled={args.disabled} />
          </InformationCard>)}
      </StoryColumn>;
  },
  args: {
    leftSide: 'iconWithBadge'
  }
}`,...(R=(H=c.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var N,P,_;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args: InformationCardProps) => {
    const [selectedCheckbox, setSelectedCheckbox] = useState(false);
    const [selectedToggle, setSelectedToggle] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState(false);
    return <StoryColumn>
        <InformationCard {...args} selected={selectedCheckbox} onClick={() => setSelectedCheckbox(v => !v)} rightCorner={<Checkbox disabled={args.disabled} checked={selectedCheckbox} />} />
        <InformationCard {...args} selected={selectedToggle} onClick={() => setSelectedToggle(v => !v)} rightCorner={<Toggle disabled={args.disabled} checked={selectedToggle} />} />
        <InformationCard {...args} selected={selectedRadio} onClick={() => setSelectedRadio(v => !v)} rightCorner={<Radio disabled={args.disabled} options={[{
        label: '',
        value: ''
      }]} />} />
      </StoryColumn>;
  }
}`,...(_=(P=m.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var L,M,O;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: InformationCardProps) => <CustomHeightContainer>
      <InformationCard {...args} footer={<DefaultFooter disabled={args.disabled} />} description="Short content">
        <DefaultChildren disabled={args.disabled} />
      </InformationCard>
      <InformationCard {...args} footer={<DefaultFooter disabled={args.disabled} />}>
        <DefaultChildren disabled={args.disabled} />
      </InformationCard>
    </CustomHeightContainer>
}`,...(O=(M=p.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var z,K,V;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    source: componentColors.information_card
  },
  render: args => <ThemedPalette {...args} />
}`,...(V=(K=f.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};const at=["Basic","WithLeftSideAndFooter","WithChildren","Types","Controllable","TwoCardsWithCustomHeight","ColorTokens"];export{i as Basic,f as ColorTokens,m as Controllable,p as TwoCardsWithCustomHeight,c as Types,l as WithChildren,d as WithLeftSideAndFooter,at as __namedExportsOrder,ot as default};
