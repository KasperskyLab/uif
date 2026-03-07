import{am as y,R as e,b as w,S as M,t as re}from"./iframe-zz6a49H8.js";import{w as de}from"./withDesignControls-Cqk9De58.js";import{w as le}from"./withMeta-CjSZnBk7.js";import{r as p}from"./StoryComponents-C4fwEYRs.js";import{a as ae,I as se}from"./Indicator-DNWfFabI.js";import{T as P}from"./Tag-DxDPN1QL.js";import{r as pe}from"./ArrowRight-hBQHItJC.js";import{A as l,a as d}from"./AccordionPanel-SqXfZMQR.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Buhf4xpe.js";import"./StatusOkOutline-BBn674wO.js";import"./Divider-DNO5OI2y.js";import"./FormLabel-BcyH9HgS.js";import"./Markdown-Dd69RiPx.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-B2Trw9mJ.js";import"./TextReducer-CXi1K97e.js";import"./StatusDangerSolid1-CvSXOBl-.js";import"./Group-DXZR9jfV.js";import"./index-C1mxiEMc.js";import"./type-CR-gS43P.js";import"./colors-Pn4JZYjC.js";import"./wave-CA5Glh0A.js";import"./Dropdown-D5otA5yN.js";import"./KeyCode-D_nTN6KT.js";import"./Overflow-8LRqTPgc.js";import"./focus-rl8Tx3sL.js";import"./Loader-Y1gOuUZF.js";import"./index-BNCbYTB0.js";import"./ArrowRight-DPBBrE_M.js";import"./v4-BoP187Zn.js";import"./pickAttrs-BgtJ82nl.js";import"./Menu2-gmgzxp5q.js";const me={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!0},ge="Accordion",fe=`Компонент аккордеона. В качестве основы используется Collapse из библиотеки rc-collapse.

В заголовке аккордеона можно включать дополнительные элементы: tagBefore, indicator, tagAfter, additionalText. Каждый из них включается независимо, можно включить один или сразу несколько.`,Ae="Компонент Accordion используется для группировки связанного контента, который можно разворачивать и сворачивать. В тело аккордеона можно помещать любой контент (текст / форму и т. д.).",ue="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=8415%3A35985",be="https://pixso.net/app/design/YvaWvrS3oaOTkwbdXGoF4Q?page-id=0%3A1",I={dod:me,component:ge,description:fe,usage:Ae,designLink:ue,pixsoView:be},Be=["small","medium","large"],he={accordion:!1,additionalText:"",disabled:!1,shouldDisableActions:!0,indicatorMode:ae[0],klId:"accordion-kl-id",tagAfterMode:y[0],tagAfterLabel:"after",tagBeforeMode:y[0],tagBeforeLabel:"before",testId:"accordion-test-id",title:"Title",withBorder:!0},qe={component:l,title:"Hexa UI Components/Accordion",...de({componentName:"accordion",meta:{argTypes:{indicatorMode:{control:{type:"select"},options:ae,description:"Indicator mode (not an accordion prop)"},tagBeforeLabel:{control:{type:"text"},description:"Text of the tag before title (not an accordion prop)"},tagBeforeMode:{control:{type:"select"},options:y,description:"Mode of the tag before title (not an accordion prop)"},tagAfterLabel:{control:{type:"text"},description:"Text of the tag after title (not an accordion prop)"},tagAfterMode:{control:{type:"select"},options:y,description:"Mode of the tag after title (not an accordion prop)"},titleSize:{control:{type:"radio"},options:["small","medium","large"]}},args:he,parameters:{actions:{argTypesRegex:"^on.*"},badges:[w.stable,w.reviewedByDesign],docs:{page:le(I)},design:I.pixsoView}}})},m={render:({additionalText:o,className:n,disabled:i,title:r,titleSize:c,...a})=>e.createElement(l,{...a},e.createElement(d,{key:1,additionalText:o,className:n,disabled:i,title:r,titleSize:c},"Accordion content")),parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}}},g={render:({additionalText:o,className:n,disabled:i,title:r,titleSize:c,...a})=>p(Be.map(t=>({label:t,content:e.createElement(l,{...a},e.createElement(d,{key:1,additionalText:o,className:n,disabled:i,title:r,titleSize:t},"Accordion content"))})),!0),argTypes:{titleSize:{control:!1}},parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}}},f={render:({additionalText:o,className:n,disabled:i,title:r,titleSize:c,...a})=>p([!0,!1].map(t=>({label:`withBorder = ${t}`,content:e.createElement(l,{...a,withBorder:t},e.createElement(d,{key:1,additionalText:o,className:n,disabled:i,title:r,titleSize:c},"Accordion content"))})),!0),argTypes:{withBorder:{control:!1}},parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}}},A={render:({additionalText:o,className:n,disabled:i,title:r,titleSize:c,...a})=>p([!0,!1].map(t=>({label:`withBorder = ${t}`,content:e.createElement(l,{...a,withBorder:t},e.createElement(d,{key:1,additionalText:o,className:n,disabled:!0,title:r,titleSize:c},"Accordion content"))})),!0),argTypes:{withBorder:{control:!1},disabled:{control:!1}},parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}}},u={render:({additionalText:o,className:n,disabled:i,title:r,titleSize:c,...a})=>p([!0,!1].map(t=>({label:`withBorder = ${t}`,content:e.createElement(l,{...a,withBorder:t},e.createElement(d,{key:1,additionalText:o,className:n,disabled:i,title:r,titleSize:c},"Accordion content"))})),!0),argTypes:{withBorder:{control:!1}},args:{additionalText:"Events: 32"},parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}}},b={render:({additionalText:o,className:n,disabled:i,tagBeforeLabel:r,tagBeforeMode:c,tagAfterLabel:a,tagAfterMode:t,title:s,titleSize:ie,...ce})=>p([!0,!1].map(S=>({label:`withBorder = ${S}`,content:e.createElement(l,{...ce,withBorder:S},e.createElement(d,{key:1,additionalText:o,tagBefore:e.createElement(P,{label:r,mode:c}),tagAfter:e.createElement(P,{label:a,mode:t}),className:n,disabled:i,title:s,titleSize:ie},"Accordion content"))})),!0),argTypes:{withBorder:{control:!1}},parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode)/}},name:"Tag Before / After"},B={render:({additionalText:o,className:n,disabled:i,indicatorMode:r,title:c,titleSize:a,...t})=>p([!0,!1].map(s=>({label:`withBorder = ${s}`,content:e.createElement(l,{...t,withBorder:s},e.createElement(d,{key:1,additionalText:o,indicator:e.createElement(se,{mode:r}),className:n,disabled:i,title:c,titleSize:a},"Accordion content"))})),!0),argTypes:{withBorder:{control:!1}},parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}}},h={render:({additionalText:o,className:n,disabled:i,title:r,titleSize:c,...a})=>e.createElement(M,{gap:"separated",direction:"vertical"},e.createElement(re,{mode:"info"},"Проп elementAfter доступен только при значении withBorder = true"),p([!0,!1].map(t=>({label:`withBorder = ${t}`,content:e.createElement(l,{...a,withBorder:t},e.createElement(d,{key:1,additionalText:o,elementAfter:t?e.createElement(M,{gap:4},e.createElement(pe,null),"10/10"):void 0,className:n,disabled:i,title:r,titleSize:c},"Accordion content"))})),!0)),argTypes:{withBorder:{control:!1}},parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}}},T={render:({additionalText:o,className:n,disabled:i,title:r,titleSize:c,...a})=>e.createElement(M,{gap:"separated",direction:"vertical"},e.createElement(re,{mode:"info"},"Проп actions доступен только при значении withBorder = true"),p([!0,!1].map(t=>({label:`withBorder = ${t}`,content:e.createElement(l,{...a,withBorder:t},e.createElement(d,{key:1,additionalText:o,actions:t?[{value:"Action 1",onClick:s=>s.domEvent.stopPropagation()},{value:"Action 2",onClick:s=>s.domEvent.stopPropagation()}]:void 0,className:n,disabled:i,title:r,titleSize:c},"Accordion content"))})),!0)),argTypes:{withBorder:{control:!1}},parameters:{controls:{exclude:/(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}}},x={render:o=>e.createElement(l,{...o},e.createElement(d,{key:1,title:"Title 1"},"Accordion content 1"),e.createElement(d,{key:2,disabled:!0,title:"Title 2"},"Accordion content 2"),e.createElement(d,{key:3,title:"Title 3"},"Accordion content 3")),args:{defaultActiveKey:1},parameters:{controls:{exclude:/(expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/}}};var L,E,z;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) => {
    return <AccordionComponent {...rest}>
        <AccordionPanel key={1} additionalText={additionalText} className={className} disabled={disabled} title={title} titleSize={titleSize}>
          Accordion content
        </AccordionPanel>
      </AccordionComponent>;
  },
  parameters: {
    controls: {
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}`,...(z=(E=m.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var k,N,C;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}`,...(C=(N=g.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var v,$,V;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}`,...(V=($=f.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var D,W,_;A.parameters={...A.parameters,docs:{...(D=A.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}`,...(_=(W=A.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var K,R,U;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}`,...(U=(R=u.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var Y,H,J;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: ({
    additionalText,
    className,
    disabled,
    tagBeforeLabel,
    tagBeforeMode,
    tagAfterLabel,
    tagAfterMode,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) => renderVariants([true, false].map(withBorder => ({
    label: \`withBorder = \${withBorder}\`,
    content: <AccordionComponent {...rest} withBorder={withBorder}>
            <AccordionPanel key={1} additionalText={additionalText} tagBefore={<Tag label={tagBeforeLabel} mode={tagBeforeMode} />} tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />} className={className} disabled={disabled} title={title} titleSize={titleSize}>
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
  },
  name: 'Tag Before / After'
}`,...(J=(H=b.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var O,Q,F;B.parameters={...B.parameters,docs:{...(O=B.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: ({
    additionalText,
    className,
    disabled,
    indicatorMode,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) => renderVariants([true, false].map(withBorder => ({
    label: \`withBorder = \${withBorder}\`,
    content: <AccordionComponent {...rest} withBorder={withBorder}>
            <AccordionPanel key={1} additionalText={additionalText} indicator={<Indicator mode={indicatorMode} />} className={className} disabled={disabled} title={title} titleSize={titleSize}>
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
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}`,...(F=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:F.source}}};var G,X,Z;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) => <Space gap="separated" direction="vertical">
      <SectionMessage mode="info">Проп elementAfter доступен только при значении withBorder = true</SectionMessage>
      {renderVariants([true, false].map(withBorder => ({
      label: \`withBorder = \${withBorder}\`,
      content: <AccordionComponent {...rest} withBorder={withBorder}>
              <AccordionPanel key={1} additionalText={additionalText} elementAfter={withBorder ? <Space gap={4}><UserAccount />10/10</Space> : undefined} className={className} disabled={disabled} title={title} titleSize={titleSize}>
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
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var j,q,ee;T.parameters={...T.parameters,docs:{...(j=T.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) => <Space gap="separated" direction="vertical">
      <SectionMessage mode="info">Проп actions доступен только при значении withBorder = true</SectionMessage>
      {renderVariants([true, false].map(withBorder => ({
      label: \`withBorder = \${withBorder}\`,
      content: <AccordionComponent {...rest} withBorder={withBorder}>
              <AccordionPanel key={1} additionalText={additionalText} actions={withBorder ? [{
          value: 'Action 1',
          onClick: e => e.domEvent.stopPropagation()
        }, {
          value: 'Action 2',
          onClick: e => e.domEvent.stopPropagation()
        }] : undefined} className={className} disabled={disabled} title={title} titleSize={titleSize}>
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
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}`,...(ee=(q=T.parameters)==null?void 0:q.docs)==null?void 0:ee.source}}};var te,oe,ne;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: (args: StoryAccordionProps) => {
    return <AccordionComponent {...args}>
        <AccordionPanel key={1} title="Title 1">
          Accordion content 1
        </AccordionPanel>
        <AccordionPanel key={2} disabled title="Title 2">
          Accordion content 2
        </AccordionPanel>
        <AccordionPanel key={3} title="Title 3">
          Accordion content 3
        </AccordionPanel>
      </AccordionComponent>;
  },
  args: {
    defaultActiveKey: 1
  },
  parameters: {
    controls: {
      exclude: /(expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}`,...(ne=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const et=["Accordion","TitleSize","WithBorder","Disabled","AdditionalText","TagBeforeAfter","IndicatorBefore","ElementAfter","Actions","SingleAndMultipleMode"];export{m as Accordion,T as Actions,u as AdditionalText,A as Disabled,h as ElementAfter,B as IndicatorBefore,x as SingleAndMultipleMode,b as TagBeforeAfter,g as TitleSize,f as WithBorder,et as __namedExportsOrder,qe as default};
