import{a as u}from"./StoryComponents-BWv8uEx9.js";import{T as p}from"./Tag-B3SARhhR.js";import{R as e}from"./iframe-4-PRSI1I.js";import{a as l}from"./Checkbox-C_Wci0Rq.js";import{c as b}from"./CheckboxGroup.stories-YhA2Kivk.js";import"./Divider-Cb8Cmzqg.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./TextReducer-JHIejSuK.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./preload-helper-Dp1pzeXC.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./useId-B0iEqS7b.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./index-C07DIHtC.js";import"./index-zCYDgB3k.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";import"./withMeta-BwOuJ6tr.js";import"./DocPageLayout-CZPyVaN8.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./meta-QOHxIele.js";import"./resolveDesignControls-CL29RUJI.js";const X={title:"Hexa UI Components/CheckboxGroup/Stories",component:l.Group,tags:["!autodocs"],...b},d=t=>{console.log("checked = ",t)},n={render:t=>e.createElement(u,null,e.createElement(l.Group,{componentId:"test-cb4",testId:"test-cb4",direction:"vertical",...t}),e.createElement(l.Group,{componentId:"test-cb5",testId:"test-cb5",direction:"horizontal",...t})),args:{onChange:d,options:[{label:"One",value:1},{label:"Two",value:2},{label:"Three",value:3,description:"Description in checkbox group"},{label:e.createElement("div",null,e.createElement(p,null,"Four"),"React Element",e.createElement("br",null),"with multiple lines"),value:4}]}},r={render:t=>e.createElement(l.Group,{...t}),args:{testId:"test-cb6",defaultValue:[4,5,7],onChange:d,options:[{label:e.createElement("div",null,"First React Element is enabled"),value:1},{label:e.createElement("div",null,"Second React Element is enabled"),value:2},{label:e.createElement("div",null,"Third React Element is DISABLED"),value:3,disabled:!0},{label:e.createElement("div",null,"Fourth React Element is DISABLED and checked"),value:4,disabled:!0},{label:e.createElement("div",null,"Fifth React Element is enabled and checked, but can be unchecked by user"),value:5},{label:e.createElement("div",null,"Sixth React Element is READONLY"),value:6,readonly:!0},{label:e.createElement("div",null,"Seventh React Element is READONLY and checked"),value:7,readonly:!0}]}};var o,a,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: CheckboxGroupProps) => <StoryColumn>
      <CheckboxComponent.Group componentId="test-cb4" testId="test-cb4" direction="vertical" {...args} />
      <CheckboxComponent.Group componentId="test-cb5" testId="test-cb5" direction="horizontal" {...args} />
    </StoryColumn>,
  args: {
    onChange,
    options: [{
      label: 'One',
      value: 1
    }, {
      label: 'Two',
      value: 2
    }, {
      label: 'Three',
      value: 3,
      description: 'Description in checkbox group'
    }, {
      label: <div>
            <Tag>Four</Tag>
            React Element<br />with multiple lines
          </div>,
      value: 4
    }]
  }
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var c,s,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: CheckboxGroupProps) => <CheckboxComponent.Group {...args} />,
  args: {
    testId: 'test-cb6',
    defaultValue: [4, 5, 7],
    onChange,
    options: [{
      label: <div>First React Element is enabled</div>,
      value: 1
    }, {
      label: <div>Second React Element is enabled</div>,
      value: 2
    }, {
      label: <div>Third React Element is DISABLED</div>,
      value: 3,
      disabled: true
    }, {
      label: <div>Fourth React Element is DISABLED and checked</div>,
      value: 4,
      disabled: true
    }, {
      label: <div>Fifth React Element is enabled and checked, but can be unchecked by user</div>,
      value: 5
    }, {
      label: <div>Sixth React Element is READONLY</div>,
      value: 6,
      readonly: true
    }, {
      label: <div>Seventh React Element is READONLY and checked</div>,
      value: 7,
      readonly: true
    }]
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const Z=["Basic","Customizing"];export{n as Basic,r as Customizing,Z as __namedExportsOrder,X as default};
