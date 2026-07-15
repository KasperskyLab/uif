import{R as t,S as h,T as y,r as s,H as I,a2 as v,G as D}from"./iframe-4-PRSI1I.js";import{w as C}from"./withDesignControls-DTwO-e1q.js";import{w as G}from"./withMeta-BwOuJ6tr.js";import{T as H}from"./Textbox-Dh9d3MYi.js";import{P as A}from"./FormLabel-CoXJxjwh.js";import{T as a}from"./Tag-B3SARhhR.js";import{L as E}from"./LockGroup-Cy53Yh7Z.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./useGlobalStyles-B7OAA5LN.js";import"./index-BQ6-O6_F.js";import"./omit-DXgDXInf.js";import"./SearchOutlined-p7LyB4Dy.js";import"./button-DY_DOuYn.js";import"./wave-DF9O9Ycp.js";import"./useMergedState-5V6OeSqY.js";import"./useThemedTextbox-Dn-Jpe9n.js";import"./typesHelpers-tpz7Of7L.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./useClassNamedTextbox-BHoVbt8U.js";import"./InputNumber-DjFWqf89.js";import"./KeyCode-c5NdJp32.js";import"./DownOutlined-Dw9vwDGv.js";import"./ArrowUpMicro-CYNyv5Qa.js";import"./InputPassword-DhvDhl9J.js";import"./Button-D2E54Ulj.js";import"./Dropdown-BZXGqesC.js";import"./isEqual-vUrjsNbx.js";import"./focus-C8_PqSex.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./Toggle-Cpn23pdP.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./ArrowRight-AkM1Q671.js";import"./v4-BoP187Zn.js";import"./IconResolver-CjN0_zDB.js";import"./Placeholder-DoG1ulbQ.js";import"./StatusNoThreadSolid-CUKz-e_F.js";import"./StatusOkSolid-D4PIpJ4i.js";import"./useTranslation-jUtuSwd5.js";import"./index-B-OY55d_.js";import"./Group-D8YF7Z5T.js";import"./Unlock2-NvaAxZhy.js";import"./StatusWarningSolid-y7bEFQLk.js";const V={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},R="LockGroup",W="Компонент, показывающий статус распространения и наследования настроек по иерархии серверов",O="Замок открыт — редактировать связанные с замком настройки можно, замок закрыт — редактирование распространяемой настройки запрещено",_="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=112315%3A375167",M="https://pixso.net/app/design/y1rTfOAVY5_kEIL9zCuTjw",l={dod:V,component:R,description:W,usage:O,designLink:_,pixsoView:M},P=["warning"],Y=I.div`
  width: 100%;
`,j={options:Object.keys(v).filter(e=>["H6","H5","H4"].includes(e)),control:{type:"inline-radio"}},Qt={title:"Hexa UI Components/LockGroup",component:E,...C({meta:{args:{title:"Title",titleLevel:"H6",statusIcon:"warning",statusTooltip:"Attention"},argTypes:{titleLevel:{...j},title:{control:"text"},statusText:{control:"text"},informationText:{control:"text"},statusIcon:{control:"select",options:[...P,null]}},parameters:{badges:[D.stable],docs:{page:G(l)},design:l.pixsoView}}})},p=e=>{const[b,m]=s.useState(!1),[w,S]=s.useState("12345");return s.useEffect(()=>{m(!!e.isLockClosed)},[e.isLockClosed]),t.createElement(Y,null,t.createElement(E,{...e,isLockClosed:b,onLockChange:i=>m(i)},t.createElement(H,{value:w,onChange:i=>S(String(i))})))},o={render:p.bind({}),args:{title:"Title",isGroupDisabled:!1,isLockDisabled:!1,statusText:"statusText"}},r={render:p.bind({}),args:{informationText:()=>t.createElement(y,null,"Information text with ",t.createElement("a",null,"Information link"))}},n={render:p.bind({}),args:{titleElementAfter:t.createElement(h,{gap:"dependent"},t.createElement(a,null,"Windows"),t.createElement(a,null,"Mac"),t.createElement(A,{content:t.createElement(t.Fragment,null,"Some content")},t.createElement(a,null,"Linux (Overwritten)")))}};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: StoryDefaultRender.bind({}),
  args: {
    title: 'Title',
    isGroupDisabled: false,
    isLockDisabled: false,
    statusText: 'statusText'
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var f,T,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: StoryDefaultRender.bind({}),
  args: {
    informationText: () => <Text>Information text with <a>Information link</a></Text>
  }
}`,...(g=(T=r.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var x,k,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: StoryDefaultRender.bind({}),
  args: {
    titleElementAfter: <Space gap="dependent">
        <Tag>Windows</Tag>
        <Tag>Mac</Tag>
        <Popover content={<>Some content</>}>
          <Tag>Linux (Overwritten)</Tag>
        </Popover>
      </Space>
  }
}`,...(L=(k=n.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const Zt=["LockGroup","WithInformationText","ElementAfter"];export{n as ElementAfter,o as LockGroup,r as WithInformationText,Zt as __namedExportsOrder,Qt as default};
