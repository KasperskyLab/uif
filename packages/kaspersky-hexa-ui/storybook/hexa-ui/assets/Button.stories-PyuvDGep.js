import{R as e,b as h,B as c,y as se,S as A,t as ce,L as a}from"./iframe-zz6a49H8.js";import{w as ae}from"./withDesignControls-Cqk9De58.js";import{w as pe}from"./withMeta-CjSZnBk7.js";import{a as le}from"./Warnings-DU1McXrL.js";import{r as te,a as b}from"./StoryComponents-C4fwEYRs.js";import{l as ne}from"./Placeholder-Bv52avk_.js";import{o as me}from"./Plus-C59NrE5b.js";import{r as de}from"./Settings-3sEKraz-.js";import{B as r,s as ue,b as re}from"./Button-Djh220XQ.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Buhf4xpe.js";import"./StatusOkOutline-BBn674wO.js";import"./Tag-DxDPN1QL.js";import"./TextReducer-CXi1K97e.js";import"./StatusDangerSolid1-CvSXOBl-.js";import"./Group-DXZR9jfV.js";import"./index-C1mxiEMc.js";import"./type-CR-gS43P.js";import"./colors-Pn4JZYjC.js";import"./wave-CA5Glh0A.js";import"./Divider-DNO5OI2y.js";import"./FormLabel-BcyH9HgS.js";import"./Markdown-Dd69RiPx.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-B2Trw9mJ.js";import"./Dropdown-D5otA5yN.js";import"./KeyCode-D_nTN6KT.js";import"./Overflow-8LRqTPgc.js";import"./focus-rl8Tx3sL.js";import"./Loader-Y1gOuUZF.js";import"./index-BNCbYTB0.js";import"./ArrowRight-DPBBrE_M.js";import"./v4-BoP187Zn.js";import"./button-nrifPwP7.js";const fe={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,pixsoView:!0},Be="Button",ge="В качестве основы используется AntdButton из библиотеки Antd.",Se="Button — это интерактивный компонент, который используется для инициирования действий или выполнения команд в пользовательском интерфейсе, такие как отправка форм, запуск процессов или навигация по страницам.",xe="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=1063%3A4154",Ae="https://pixso.net/app/design/zItyc5R0E83xmR1qyc1SeQ",C={dod:fe,component:Be,description:ge,usage:Se,designLink:xe,pixsoView:Ae},ie=[c.Small,c.Medium,c.Large,c.ExtraLarge],y={"-":null,Placeholder:e.createElement(ne,{klId:"button-icon"}),Plus:e.createElement(me,{klId:"button-icon"}),Settings:e.createElement(de,{klId:"button-icon"})},t=o=>o!=="-"&&y[o||"-"],ye={argTypes:{size:{options:ie,control:{type:"select"}},mode:{options:re,control:{type:"select"}},iconBefore:{options:Object.keys(y),control:{type:"select"}},iconAfter:{options:Object.keys(y),control:{type:"select"}}},args:{iconBefore:"-",text:"Button",iconAfter:"-",isPressed:!1,type:"button",testId:"button-test-id",klId:"button-kl-id",size:c.Medium,mode:"primary",disabled:!1,loading:!1},parameters:{badges:[h.stable,h.reviewedByDesign],docs:{page:pe(C)},controls:{exclude:/(tooltip)/},design:C.pixsoView}},oo={title:"Hexa UI Components/Button",component:r,...ae({componentName:"button",meta:ye})},p={render:({iconBefore:o,iconAfter:n,...i})=>e.createElement(r,{...i,iconAfter:t(n),iconBefore:t(o)})},l={render:({iconBefore:o,iconAfter:n,...i})=>e.createElement(r,{...i,iconAfter:t(n),iconBefore:t(o)}),argTypes:{text:{control:!1},iconAfter:{control:!1}},args:{iconBefore:"Placeholder",text:void 0}},m={render:({text:o,iconBefore:n,iconAfter:i,...s})=>e.createElement(b,null,e.createElement(r,{...s,text:o,iconBefore:t(n)}),e.createElement(r,{...s,text:o,iconAfter:t(i)})),args:{iconBefore:"Placeholder",iconAfter:"Placeholder"},name:"Icon Before / After"},d={render:o=>te(re.map(n=>({label:n,content:e.createElement(r,{...o,iconAfter:t(o.iconAfter),iconBefore:t(o.iconBefore),mode:n})})),!0),argTypes:{mode:{control:!1}}},u={render:o=>te(ie.map(n=>({label:n,content:e.createElement(r,{...o,iconAfter:t(o.iconAfter),iconBefore:t(o.iconBefore),size:n})})),!0),argTypes:{size:{control:!1}}},f={render:({text:o,iconAfter:n,iconBefore:i,...s})=>e.createElement(b,null,e.createElement(r,{...s,iconAfter:t(n),text:o}),e.createElement(r,{...s,iconAfter:t(n),iconBefore:t(i)})),args:{loading:!0,iconBefore:"Placeholder"}},B={render:({text:o,iconAfter:n,iconBefore:i,...s})=>e.createElement(b,null,e.createElement(r,{...s,iconAfter:t(n),iconBefore:t(i),text:o}),e.createElement(r,{...s,iconAfter:t(n),iconBefore:t(i)})),args:{disabled:!0,iconBefore:"Placeholder"}},g={render:o=>e.createElement("div",{style:{width:"100%"}},e.createElement(le,null),e.createElement(se,{text:o.tooltip},e.createElement("span",null,e.createElement(r,{...o,iconAfter:t(o.iconAfter),iconBefore:t(o.iconBefore)})))),argTypes:{tooltip:{control:"text"}},args:{tooltip:"Tooltip"},parameters:{controls:{exclude:""}}},S={render:()=>e.createElement(r.Group,null,e.createElement(r,null,"Button #1"),e.createElement(r,null,"Button #2"),e.createElement(r,null,"Button #3")),name:"Button.Group"},E="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?page-id=81565%3A341129",I="https://pixso.net/app/design/SqjasIRc_lKBtFD9yBGwbA",x={render:o=>e.createElement(A,{gap:16,width:"100%"},e.createElement(ce,{closable:!1,mode:"info"},e.createElement(A,{gap:"grouped"},e.createElement(a,{text:"Documentation in Pixso",target:"_blank",href:I,decoration:"icon"}),e.createElement(a,{text:"Component in Pixso",target:"_blank",href:E,decoration:"icon"})),e.createElement(A,{gap:"grouped"},e.createElement(a,{text:"Документация в Pixso",target:"_blank",href:I,decoration:"icon"}),e.createElement(a,{text:"Компонент в Pixso",target:"_blank",href:E,decoration:"icon"}))),e.createElement(r.SplitButton,{...o,iconBefore:t(o.iconBefore)})),argTypes:{mode:{options:ue,control:{type:"select"}},dropdownPlacement:{options:["topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight"],control:{type:"select"}}},args:{text:"Split button",items:[{children:"Option 1",description:"Some description"},{children:"Option 2"},{children:"Option 3",description:"Some description",componentsBefore:[e.createElement(ne,{key:"placeholder-icon"})]}]},parameters:{controls:{exclude:/(tooltip|isPressed|size|iconAfter)/}},name:"Button.SplitButton"};var P,k,v;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: ({
    iconBefore,
    iconAfter,
    ...rest
  }: StoryButtonProps) => <ButtonComponent {...rest} iconAfter={resolveIcon(iconAfter)} iconBefore={resolveIcon(iconBefore)} />
}`,...(v=(k=p.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var T,w,L;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: ({
    iconBefore,
    iconAfter,
    ...rest
  }: StoryButtonProps) => <ButtonComponent {...rest} iconAfter={resolveIcon(iconAfter)} iconBefore={resolveIcon(iconBefore)} />,
  argTypes: {
    text: {
      control: false
    },
    iconAfter: {
      control: false
    }
  },
  args: {
    iconBefore: 'Placeholder',
    text: undefined
  }
}`,...(L=(w=l.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var z,D,_;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: ({
    text,
    iconBefore,
    iconAfter,
    ...rest
  }: StoryButtonProps) => <StoryComponentContainer>
      <ButtonComponent {...rest} text={text} iconBefore={resolveIcon(iconBefore)} />
      <ButtonComponent {...rest} text={text} iconAfter={resolveIcon(iconAfter)} />
    </StoryComponentContainer>,
  args: {
    iconBefore: 'Placeholder',
    iconAfter: 'Placeholder'
  },
  name: 'Icon Before / After'
}`,...(_=(D=m.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var M,V,O;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => renderVariants(buttonModes.map(mode => ({
    label: mode,
    content: <ButtonComponent {...args} iconAfter={resolveIcon(args.iconAfter)} iconBefore={resolveIcon(args.iconBefore)} mode={mode} />
  })), true),
  argTypes: {
    mode: {
      control: false
    }
  }
}`,...(O=(V=d.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var R,G,W;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => renderVariants(defaultSizes.map(size => ({
    label: size,
    content: <ButtonComponent {...args} iconAfter={resolveIcon(args.iconAfter)} iconBefore={resolveIcon(args.iconBefore)} size={size as ButtonSize} />
  })), true),
  argTypes: {
    size: {
      control: false
    }
  }
}`,...(W=(G=u.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var J,Y,j;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: ({
    text,
    iconAfter,
    iconBefore,
    ...rest
  }: StoryButtonProps) => <StoryComponentContainer>
      <ButtonComponent {...rest} iconAfter={resolveIcon(iconAfter)} text={text} />
      <ButtonComponent {...rest} iconAfter={resolveIcon(iconAfter)} iconBefore={resolveIcon(iconBefore)} />
    </StoryComponentContainer>,
  args: {
    loading: true,
    iconBefore: 'Placeholder'
  }
}`,...(j=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var K,Q,U;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: ({
    text,
    iconAfter,
    iconBefore,
    ...rest
  }: StoryButtonProps) => <StoryComponentContainer>
      <ButtonComponent {...rest} iconAfter={resolveIcon(iconAfter)} iconBefore={resolveIcon(iconBefore)} text={text} />
      <ButtonComponent {...rest} iconAfter={resolveIcon(iconAfter)} iconBefore={resolveIcon(iconBefore)} />
    </StoryComponentContainer>,
  args: {
    disabled: true,
    iconBefore: 'Placeholder'
  }
}`,...(U=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var q,H,Z;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: (args: StoryButtonProps) => <div style={{
    width: '100%'
  }}>
      <TooltipCompositionWarning />
      <Tooltip text={args.tooltip}>
        <span>
          <ButtonComponent {...args} iconAfter={resolveIcon(args.iconAfter)} iconBefore={resolveIcon(args.iconBefore)} />
        </span>
      </Tooltip>
    </div>,
  argTypes: {
    tooltip: {
      control: 'text'
    }
  },
  args: {
    tooltip: 'Tooltip'
  },
  parameters: {
    controls: {
      exclude: ''
    }
  }
}`,...(Z=(H=g.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};var $,F,N;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <ButtonComponent.Group>
      <ButtonComponent>Button #1</ButtonComponent>
      <ButtonComponent>Button #2</ButtonComponent>
      <ButtonComponent>Button #3</ButtonComponent>
    </ButtonComponent.Group>,
  name: 'Button.Group'
}`,...(N=(F=S.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var X,ee,oe;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <Space gap={16} width="100%">
      <SectionMessage closable={false} mode="info">
        <Space gap="grouped">
          <Link text="Documentation in Pixso" target="_blank" href={splitButtonDesignPixsoView} decoration="icon" />
          <Link text="Component in Pixso" target="_blank" href={splitButtonDesignLink} decoration="icon" />
        </Space>
        <Space gap="grouped">
          <Link text="Документация в Pixso" target="_blank" href={splitButtonDesignPixsoView} decoration="icon" />
          <Link text="Компонент в Pixso" target="_blank" href={splitButtonDesignLink} decoration="icon" />
        </Space>
      </SectionMessage>
      <ButtonComponent.SplitButton {...args} iconBefore={resolveIcon(args.iconBefore)} />
    </Space>,
  argTypes: {
    mode: {
      options: splitButtonModes,
      control: {
        type: 'select'
      }
    },
    dropdownPlacement: {
      options: ['topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'],
      control: {
        type: 'select'
      }
    }
  },
  args: {
    text: 'Split button',
    items: [{
      children: 'Option 1',
      description: 'Some description'
    }, {
      children: 'Option 2'
    }, {
      children: 'Option 3',
      description: 'Some description',
      componentsBefore: [<Placeholder key="placeholder-icon" />]
    }]
  },
  parameters: {
    controls: {
      exclude: /(tooltip|isPressed|size|iconAfter)/
    }
  },
  name: 'Button.SplitButton'
}`,...(oe=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};const to=["Button","IconButton","IconBeforeAfter","Mode","Size","Loading","Disabled","WithTooltip","ButtonGroup","SplitButton"];export{p as Button,S as ButtonGroup,B as Disabled,m as IconBeforeAfter,l as IconButton,f as Loading,d as Mode,u as Size,x as SplitButton,g as WithTooltip,to as __namedExportsOrder,oo as default};
