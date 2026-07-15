import{r as m}from"./StoryComponents-BWv8uEx9.js";import{I as Q}from"./Indicator-D1HJCmfp.js";import{R as e,S as T,a as X}from"./iframe-4-PRSI1I.js";import{T as Y}from"./Tag-B3SARhhR.js";import{t as Z}from"./ArrowRight-CuhTodaW.js";import{o as ee}from"./StatusOkSolid-D4PIpJ4i.js";import{o as te}from"./Upload-ojKDAzK2.js";import{o as oe}from"./UserAccount-DABOZSyI.js";import{A as l,a as d}from"./AccordionPanel-B5gd3z85.js";import{d as ne,a as re}from"./Accordion.controls-FS-coXnO.js";import"./Divider-Cb8Cmzqg.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./preload-helper-Dp1pzeXC.js";import"./TextReducer-JHIejSuK.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./Dropdown-BZXGqesC.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-vUrjsNbx.js";import"./useMergedState-5V6OeSqY.js";import"./focus-C8_PqSex.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./Toggle-Cpn23pdP.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./ArrowRight-AkM1Q671.js";import"./v4-BoP187Zn.js";import"./pickAttrs-ACVbvRAI.js";import"./Menu2-CvX9huZG.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";const qe={component:l,title:"Hexa UI Components/Accordion/Stories",args:ne,tags:["!autodocs"]},A={render:({additionalText:t,className:n,disabled:i,title:r,titleSize:c,...a})=>e.createElement(l,{...a},e.createElement(d,{key:1,additionalText:t,className:n,disabled:i,title:r,titleSize:c},"Accordion content")),parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}}},f={render:({additionalText:t,className:n,disabled:i,title:r,titleSize:c,...a})=>m(re.map(o=>({label:o,content:e.createElement(l,{...a},e.createElement(d,{key:1,additionalText:t,className:n,disabled:i,title:r,titleSize:o},"Accordion content"))}))),argTypes:{titleSize:{control:!1}},parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}}},g={render:({additionalText:t,className:n,disabled:i,title:r,titleSize:c,...a})=>m([!0,!1].map(o=>({label:`withBorder = ${o}`,content:e.createElement(l,{...a,withBorder:o},e.createElement(d,{key:1,additionalText:t,className:n,disabled:i,title:r,titleSize:c},"Accordion content"))}))),argTypes:{withBorder:{control:!1}},parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}}},u={render:({additionalText:t,className:n,disabled:i,title:r,titleSize:c,...a})=>m([!0,!1].map(o=>({label:`withBorder = ${o}`,content:e.createElement(l,{...a,withBorder:o},e.createElement(d,{key:1,additionalText:t,className:n,disabled:!0,title:r,titleSize:c},"Accordion content"))}))),argTypes:{withBorder:{control:!1},disabled:{control:!1}},parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}}},B={render:({additionalText:t,className:n,disabled:i,title:r,titleSize:c,...a})=>m([!0,!1].map(o=>({label:`withBorder = ${o}`,content:e.createElement(l,{...a,withBorder:o},e.createElement(d,{key:1,additionalText:t,className:n,disabled:i,title:r,titleSize:c},"Accordion content"))}))),argTypes:{withBorder:{control:!1}},args:{additionalText:"Events: 32"},parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}}},b={render:({additionalText:t,className:n,disabled:i,tagAfterLabel:r,tagAfterMode:c,title:a,titleSize:o,...s})=>m([!0,!1].map(p=>({label:`withBorder = ${p}`,content:e.createElement(l,{...s,withBorder:p},e.createElement(d,{key:1,additionalText:t,tagAfter:e.createElement(Y,{label:r,mode:c}),className:n,disabled:i,title:a,titleSize:o},"Accordion content"))}))),argTypes:{withBorder:{control:!1}},parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode)/}}},h={render:({additionalText:t,className:n,disabled:i,title:r,titleSize:c,elementBefore:a,elementAfter:o,...s})=>e.createElement(T,{gap:"separated",direction:"vertical"},e.createElement(X,{mode:"info"},"Проп elementAfter доступен только при значении withBorder = true"),m([!0,!1].map(p=>({label:`withBorder = ${p}`,content:e.createElement(l,{...s,withBorder:p},e.createElement(d,{key:1,additionalText:t,elementBefore:a,elementAfter:p?e.createElement(T,{gap:4},e.createElement(oe,null),"10/10"):void 0,className:n,disabled:i,title:r,titleSize:c},"Accordion content"))})))),argTypes:{withBorder:{control:!1},elementBefore:{control:{type:"select"},options:["Star","StatusOkSolid","Upload","Indicator"],mapping:{StatusOkSolid:e.createElement(ee,null),Star:e.createElement(Z,null),Upload:e.createElement(te,null),Indicator:e.createElement(Q,null)}}},parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}},args:{elementBefore:"StatusOkSolid"},name:"Element Before / After"},S={render:({additionalText:t,className:n,disabled:i,title:r,titleSize:c,...a})=>e.createElement(T,{gap:"separated",direction:"vertical"},m([!0,!1].map(o=>({label:`withBorder = ${o}`,content:e.createElement(l,{...a,withBorder:o},e.createElement(d,{key:1,additionalText:t,actions:[{value:"Action 1",onClick:s=>s.domEvent.stopPropagation()},{value:"Action 2",onClick:s=>s.domEvent.stopPropagation()}],className:n,disabled:i,title:r,titleSize:c},"Accordion content"))})))),argTypes:{withBorder:{control:!1}},parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}}},x={render:t=>e.createElement(l,{...t},e.createElement(d,{key:1,title:"Title 1"},"Accordion content 1"),e.createElement(d,{key:2,disabled:!0,title:"Title 2"},"Accordion content 2"),e.createElement(d,{key:3,title:"Title 3"},"Accordion content 3")),args:{defaultActiveKey:1},parameters:{controls:{exclude:/(expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}}};var y,M,P;A.parameters={...A.parameters,docs:{...(y=A.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) => <AccordionComponent {...rest}>
      <AccordionPanel key={1} additionalText={additionalText} className={className} disabled={disabled} title={title} titleSize={titleSize}>
        Accordion content
      </AccordionPanel>
    </AccordionComponent>,
  parameters: {
    controls: {
      // eslint-disable-next-line @stylistic/max-len
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}`,...(P=(M=A.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var I,w,E;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) => renderVariants(accordionTitleSizes.map(size => ({
    label: size,
    content: <AccordionComponent {...rest}>
            <AccordionPanel key={1} additionalText={additionalText} className={className} disabled={disabled} title={title} titleSize={size}>
              Accordion content
            </AccordionPanel>
          </AccordionComponent>
  })), true),
  argTypes: {
    titleSize: {
      control: false
    }
  },
  parameters: {
    controls: {
      // eslint-disable-next-line @stylistic/max-len
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}`,...(E=(w=f.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var L,k,z;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) => renderVariants([true, false].map(withBorder => ({
    label: \`withBorder = \${withBorder}\`,
    content: <AccordionComponent {...rest} withBorder={withBorder}>
            <AccordionPanel key={1} additionalText={additionalText} className={className} disabled={disabled} title={title} titleSize={titleSize}>
              Accordion content
            </AccordionPanel>
          </AccordionComponent>
  })), true),
  argTypes: {
    withBorder: {
      control: false
    }
  },
  parameters: {
    controls: {
      // eslint-disable-next-line @stylistic/max-len
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}`,...(z=(k=g.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var N,C,v;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) => renderVariants([true, false].map(withBorder => ({
    label: \`withBorder = \${withBorder}\`,
    content: <AccordionComponent {...rest} withBorder={withBorder}>
            <AccordionPanel key={1} additionalText={additionalText} className={className} disabled={true} title={title} titleSize={titleSize}>
              Accordion content
            </AccordionPanel>
          </AccordionComponent>
  })), true),
  argTypes: {
    withBorder: {
      control: false
    },
    disabled: {
      control: false
    }
  },
  parameters: {
    controls: {
      // eslint-disable-next-line @stylistic/max-len
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}`,...(v=(C=u.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var $,O,V;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) => renderVariants([true, false].map(withBorder => ({
    label: \`withBorder = \${withBorder}\`,
    content: <AccordionComponent {...rest} withBorder={withBorder}>
            <AccordionPanel key={1} additionalText={additionalText} className={className} disabled={disabled} title={title} titleSize={titleSize}>
              Accordion content
            </AccordionPanel>
          </AccordionComponent>
  })), true),
  argTypes: {
    withBorder: {
      control: false
    }
  },
  args: {
    additionalText: 'Events: 32'
  },
  parameters: {
    controls: {
      // eslint-disable-next-line @stylistic/max-len
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}`,...(V=(O=B.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var U,D,K;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: ({
    additionalText,
    className,
    disabled,
    tagAfterLabel,
    tagAfterMode,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) => renderVariants([true, false].map(withBorder => ({
    label: \`withBorder = \${withBorder}\`,
    content: <AccordionComponent {...rest} withBorder={withBorder}>
            <AccordionPanel key={1} additionalText={additionalText} tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />} className={className} disabled={disabled} title={title} titleSize={titleSize}>
              Accordion content
            </AccordionPanel>
          </AccordionComponent>
  })), true),
  argTypes: {
    withBorder: {
      control: false
    }
  },
  parameters: {
    controls: {
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode)/
    }
  }
}`,...(K=(D=b.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var R,W,_;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    elementBefore,
    elementAfter,
    ...rest
  }: StoryAccordionProps) => <Space gap="separated" direction="vertical">
      <SectionMessage mode="info">Проп elementAfter доступен только при значении withBorder = true</SectionMessage>
      {renderVariants([true, false].map(withBorder => ({
      label: \`withBorder = \${withBorder}\`,
      content: <AccordionComponent {...rest} withBorder={withBorder}>
              <AccordionPanel key={1} additionalText={additionalText} elementBefore={elementBefore} elementAfter={withBorder ? <Space gap={4}><UserAccount />10/10</Space> : undefined} className={className} disabled={disabled} title={title} titleSize={titleSize}>
                Accordion content
              </AccordionPanel>
            </AccordionComponent>
    })), true)}
    </Space>,
  argTypes: {
    withBorder: {
      control: false
    },
    elementBefore: {
      control: {
        type: 'select'
      },
      options: ['Star', 'StatusOkSolid', 'Upload', 'Indicator'],
      mapping: {
        StatusOkSolid: <StatusOkSolid />,
        Star: <Star />,
        Upload: <Upload />,
        Indicator: <Indicator />
      }
    }
  },
  parameters: {
    controls: {
      // eslint-disable-next-line @stylistic/max-len
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  },
  args: {
    elementBefore: 'StatusOkSolid'
  },
  name: 'Element Before / After'
}`,...(_=(W=h.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var H,j,q;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) => <Space gap="separated" direction="vertical">
      {renderVariants([true, false].map(withBorder => ({
      label: \`withBorder = \${withBorder}\`,
      content: <AccordionComponent {...rest} withBorder={withBorder}>
              <AccordionPanel key={1} additionalText={additionalText} actions={[{
          value: 'Action 1',
          onClick: (e: MenuInfo) => e.domEvent.stopPropagation()
        }, {
          value: 'Action 2',
          onClick: (e: MenuInfo) => e.domEvent.stopPropagation()
        }]} className={className} disabled={disabled} title={title} titleSize={titleSize}>
                Accordion content
              </AccordionPanel>
            </AccordionComponent>
    })), true)}
    </Space>,
  argTypes: {
    withBorder: {
      control: false
    }
  },
  parameters: {
    controls: {
      // eslint-disable-next-line @stylistic/max-len
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}`,...(q=(j=S.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var F,G,J;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args: StoryAccordionProps) => <AccordionComponent {...args}>
      <AccordionPanel key={1} title="Title 1">
        Accordion content 1
      </AccordionPanel>
      <AccordionPanel key={2} disabled title="Title 2">
        Accordion content 2
      </AccordionPanel>
      <AccordionPanel key={3} title="Title 3">
        Accordion content 3
      </AccordionPanel>
    </AccordionComponent>,
  args: {
    defaultActiveKey: 1
  },
  parameters: {
    controls: {
      exclude: /(expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Fe=["Accordion","TitleSize","WithBorder","Disabled","AdditionalText","TagAfter","ElementBeforeAfter","Actions","SingleAndMultipleMode"];export{A as Accordion,S as Actions,B as AdditionalText,u as Disabled,h as ElementBeforeAfter,x as SingleAndMultipleMode,b as TagAfter,f as TitleSize,g as WithBorder,Fe as __namedExportsOrder,qe as default};
