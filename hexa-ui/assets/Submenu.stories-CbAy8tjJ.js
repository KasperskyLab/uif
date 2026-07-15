import{T as G}from"./Palette-CL2qD4Vl.js";import{c as h,G as C,R as e,r as g,S as Y,a as Q,P as k,H as X}from"./iframe-4-PRSI1I.js";import{w as Z}from"./withMeta-BwOuJ6tr.js";import{C as q}from"./Warnings-i-859-qY.js";import{s as ee}from"./helpers-BytZKRkB.js";import{B as $}from"./Button-D2E54Ulj.js";import{N as te}from"./Notification-D93o_TGl.js";import{S as ne}from"./Sidebar-C9UThsQ5.js";import{T as oe}from"./Tag-B3SARhhR.js";import{T as ie}from"./Toggle-Cpn23pdP.js";import{o as re}from"./Placeholder-DoG1ulbQ.js";import{o as ae}from"./Plus-BlzhXYUb.js";import{o as se}from"./Settings-DVTUapLs.js";import{S as r}from"./Submenu-BwQtOxwE.js";import{m as ce,a as me}from"./mocks-DmJUseaP.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./Dropdown-BZXGqesC.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-vUrjsNbx.js";import"./useMergedState-5V6OeSqY.js";import"./focus-C8_PqSex.js";import"./omit-DXgDXInf.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./ArrowRight-AkM1Q671.js";import"./v4-BoP187Zn.js";import"./button-DY_DOuYn.js";import"./wave-DF9O9Ycp.js";import"./generateId-BXJELych.js";import"./Kira-BxHDJInH.js";import"./PortalWrapper-JelOD9qP.js";import"./Portal-2eAsMGG9.js";import"./useForceUpdate-CA8tDWq_.js";import"./index-B-OY55d_.js";import"./Group-D8YF7Z5T.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./FormLabel-CoXJxjwh.js";import"./CustomItem-ByLji7L_.js";import"./Menu-CTdhshoi.js";import"./Sider-CoxWa0of.js";import"./RightOutlined-DiymIenV.js";import"./ArrowRightMini-n3t_Sq3j.js";import"./useLocalization-45JHytlv.js";import"./Unpin-CY6_IcGm.js";import"./StatusOkSolid-D4PIpJ4i.js";import"./Menu2-CvX9huZG.js";const pe={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},le="Submenu",ue="Submenu — технический компонент, который используется для отображения блока вертикальной навигации в сайдбаре. Самостоятельно не используется.",de="",be="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=95706%3A276097",fe="https://pixso.net/app/design/ckWp1X9hTPd4DzSYJLe95w",I={dod:pe,component:le,description:ue,usage:de,designLink:be,pixsoView:fe},Et={title:"Hexa UI Components/Submenu",component:r,argTypes:{...ee(["theme","items","componentType"])},args:{truncateText:!1,collapseOnTextClick:!0,elementBefore:"Element before",elementAfter:"Element after",defaultActiveKey:"row-1-2",testId:"submenu-test-id",klId:"submenu-kl-id",items:ce},parameters:{badges:[C.stable,C.reviewedByDesign],docs:{page:Z(I)},design:I.pixsoView}},L=X(ne)`
  .ant-drawer-body {
    padding: 0;

    .antd-sidebar-content {
      height: 100%;
    }
  }
`,ge=n=>{const[t,o]=g.useState(!1);return e.createElement(e.Fragment,null,e.createElement($,{onClick:()=>o(!0)},"Open"),e.createElement(L,{title:"Sidebar",visible:t,onClose:()=>o(!t)},e.createElement(r,{...n})))},m={render:ge.bind({})},p={render:n=>{const[t,o]=g.useState(!1),[f,s]=g.useState("row-4-1"),c=a=>{console.log("new active key is",a),s(a)};return e.createElement(Y,{gap:"separated",direction:"vertical",align:"start"},e.createElement(q,null),e.createElement($,{onClick:()=>o(!0)},"Open"),e.createElement(L,{title:"Sidebar",visible:t,onClose:()=>o(!t)},e.createElement(r,{...n,activeKey:f,onChange:c})))}},i={"-":null,Placeholder:e.createElement(re,{klId:"submenu-row-icon"}),Plus:e.createElement(ae,{klId:"submenu-row-icon"}),Settings:e.createElement(se,{klId:"submenu-row-icon"})},w={"-":null,Toggle:e.createElement(ie,null),Tag:e.createElement(oe,{mode:"purple",size:"small"},"Tag")},l={render:({disabled:n,iconBefore:t,text:o,truncateText:f,elementAfter:s,notificationVariant:c,indicatorMode:a,badgeMode:y,badgeCount:U,badgeText:F,action:x})=>{const S=T=>({type:"row",key:"row-"+T,text:o,disabled:n,content:"This is row "+T,...t!=="-"?{iconBefore:i[t]}:{},...c==="indicator"&&a?{notification:{type:"indicator",mode:a}}:{},...c==="badge"&&y?{notification:{type:"badge",mode:y,text:F,count:U}}:{},...s?{elementAfter:w[s]}:{},...x!=="-"?{action:{onClick:()=>console.log("Row action clicked"),icon:i[x]}}:{}});return e.createElement(r,{truncateText:f,items:[S(1),S(2)]})},argTypes:{disabled:{control:{type:"boolean"},description:"Disabled state (not a submenu prop)"},iconBefore:{control:{type:"select"},options:Object.keys(i),description:"Icon before, custom icon of size 16 (not a submenu prop)"},text:{control:{type:"text"},description:"Row text (not a submenu prop)"},elementAfter:{control:{type:"select"},options:Object.keys(w),description:"Element after, custom element with maximum height of 20px (not a submenu prop)"},notificationVariant:{control:{type:"select"},options:["badge","indicator","none"],description:"Notification variant (not a submenu prop)"},indicatorMode:{control:{type:"select"},options:["new","critical","medium"],description:"Indicator mode (not a submenu prop)"},badgeMode:{control:{type:"select"},options:["new","critical"],description:"Badge mode (not a submenu prop)"},badgeCount:{control:{type:"number",min:0},description:"Badge count (not a submenu prop)"},badgeText:{control:{type:"text"},description:"Badge text (not a submenu prop)"},action:{control:{type:"select"},options:Object.keys(i),description:"Action icon, custom icon of size 16 (not a submenu prop)"}},args:{disabled:!1,iconBefore:"-",text:"Row",truncateText:!1,elementAfter:"-",notificationVariant:"none",indicatorMode:"critical",badgeMode:"critical",badgeCount:10,badgeText:void 0,action:"-"},parameters:{controls:{exclude:/(items|activeKey|defaultActiveKey|onChange|collapseOnTextClick|theme|componentType|dataTestId|componentId|elementBefore|testId|klId)/}}},u={render:({text:n,action:t})=>e.createElement(r,{items:[{type:"title",key:"title",text:n,...t!=="-"?{action:{onClick:()=>console.log("Title action clicked"),icon:i[t]}}:{}}]}),argTypes:{text:{control:{type:"text"},description:"Title text (not a submenu prop)"},action:{control:{type:"select"},options:Object.keys(i),description:"Action icon, custom icon of size 16 (not a submenu prop)"}},args:{text:"Title",action:"-"},parameters:{controls:{exclude:/(items|activeKey|defaultActiveKey|onChange|collapseOnTextClick|truncateText|theme|componentType|dataTestId|componentId|elementBefore|elementAfter|testId|klId)/}}},ye=`This story demonstrates the use of Submenu without embedded content.

The product can fully control the rendering of tab contents:
- If the SubmenuRow element does not have the content property, the component renders only the menu item.
- Inside the onClick prop, the product can render its own content or perform another action (for example, show a modal window, etc.).
`,xe=`Данный пример стори демонстрирует использование Submenu без встроенного контента.

Продукт может полностью управлять отрисовкой содержимого вкладок:
- Если у элемента SubmenuRow отсутствует свойство content, компонент рендерит только пункт меню.
- Внутри пропа onClick продукт может отрисовать собственный контент или выполнить другое действие (например, показать модальное окно и т.д.).
`,d={render:()=>e.createElement(Y,{gap:"separated",direction:"vertical",align:"start"},e.createElement(Q,{closable:!1,mode:"info"},e.createElement(k,null,ye),e.createElement(k,null,xe)),e.createElement(te,null),e.createElement(r,{items:me}))},b={args:{source:{submenu:h.submenu,submenu_item:h.submenu_item}},render:n=>e.createElement(G,{...n})};var v,A,E;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: SubmenuDefaultStory.bind({})
}`,...(E=(A=m.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var O,B,K;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState('row-4-1');
    const handleActiveKeyChange = (key: string) => {
      console.log('new active key is', key);
      setActiveKey(key);
    };
    return <Space gap="separated" direction="vertical" align="start">
        <ControllableActiveKeyInfo />
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <StyledSidebarWithSubmenu title="Sidebar" visible={isOpen} onClose={() => setIsOpen(!isOpen)}>
          <SubmenuComponent {...args} activeKey={activeKey} onChange={handleActiveKeyChange} />
        </StyledSidebarWithSubmenu>
      </Space>;
  }
}`,...(K=(B=p.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var M,R,W;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: ({
    disabled,
    iconBefore,
    text,
    truncateText,
    elementAfter,
    notificationVariant,
    indicatorMode,
    badgeMode,
    badgeCount,
    badgeText,
    action
  }) => {
    const createItem = (index: number): SubmenuItemProps => ({
      type: 'row',
      key: 'row-' + index,
      text: text,
      disabled: disabled,
      content: 'This is row ' + index,
      ...(iconBefore !== '-' ? {
        iconBefore: defaultIcons[iconBefore]
      } : {}),
      ...(notificationVariant === 'indicator' && indicatorMode ? {
        notification: {
          type: 'indicator',
          mode: indicatorMode
        }
      } : {}),
      ...(notificationVariant === 'badge' && badgeMode ? {
        notification: {
          type: 'badge',
          mode: badgeMode,
          text: badgeText,
          count: badgeCount
        }
      } : {}),
      ...(elementAfter ? {
        elementAfter: defaultElementsAfter[elementAfter]
      } : {}),
      ...(action !== '-' ? {
        action: {
          onClick: () => console.log('Row action clicked'),
          icon: defaultIcons[action]
        }
      } : {})
    });
    return <SubmenuComponent truncateText={truncateText} items={[createItem(1), createItem(2)]} />;
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean'
      },
      description: 'Disabled state (not a submenu prop)'
    },
    iconBefore: {
      control: {
        type: 'select'
      },
      options: Object.keys(defaultIcons),
      description: 'Icon before, custom icon of size 16 (not a submenu prop)'
    },
    text: {
      control: {
        type: 'text'
      },
      description: 'Row text (not a submenu prop)'
    },
    elementAfter: {
      control: {
        type: 'select'
      },
      options: Object.keys(defaultElementsAfter),
      description: 'Element after, custom element with maximum height of 20px (not a submenu prop)'
    },
    notificationVariant: {
      control: {
        type: 'select'
      },
      options: ['badge', 'indicator', 'none'],
      description: 'Notification variant (not a submenu prop)'
    },
    indicatorMode: {
      control: {
        type: 'select'
      },
      options: ['new', 'critical', 'medium'],
      description: 'Indicator mode (not a submenu prop)'
    },
    badgeMode: {
      control: {
        type: 'select'
      },
      options: ['new', 'critical'],
      description: 'Badge mode (not a submenu prop)'
    },
    badgeCount: {
      control: {
        type: 'number',
        min: 0
      },
      description: 'Badge count (not a submenu prop)'
    },
    badgeText: {
      control: {
        type: 'text'
      },
      description: 'Badge text (not a submenu prop)'
    },
    action: {
      control: {
        type: 'select'
      },
      options: Object.keys(defaultIcons),
      description: 'Action icon, custom icon of size 16 (not a submenu prop)'
    }
  },
  args: {
    disabled: false,
    iconBefore: '-',
    text: 'Row',
    truncateText: false,
    elementAfter: '-',
    notificationVariant: 'none',
    indicatorMode: 'critical',
    badgeMode: 'critical',
    badgeCount: 10,
    badgeText: undefined,
    action: '-'
  },
  parameters: {
    controls: {
      exclude: /(items|activeKey|defaultActiveKey|onChange|collapseOnTextClick|theme|componentType|dataTestId|componentId|elementBefore|testId|klId)/
    }
  }
}`,...(W=(R=l.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var P,V,j;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: ({
    text,
    action
  }) => {
    return <SubmenuComponent items={[{
      type: 'title',
      key: 'title',
      text: text,
      ...(action !== '-' ? {
        action: {
          onClick: () => console.log('Title action clicked'),
          icon: defaultIcons[action]
        }
      } : {})
    }]} />;
  },
  argTypes: {
    text: {
      control: {
        type: 'text'
      },
      description: 'Title text (not a submenu prop)'
    },
    action: {
      control: {
        type: 'select'
      },
      options: Object.keys(defaultIcons),
      description: 'Action icon, custom icon of size 16 (not a submenu prop)'
    }
  },
  args: {
    text: 'Title',
    action: '-'
  },
  parameters: {
    controls: {
      /* eslint-disable-next-line @stylistic/max-len */
      exclude: /(items|activeKey|defaultActiveKey|onChange|collapseOnTextClick|truncateText|theme|componentType|dataTestId|componentId|elementBefore|elementAfter|testId|klId)/
    }
  }
}`,...(j=(V=u.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var z,D,_;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Space gap="separated" direction="vertical" align="start">
      <SectionMessage closable={false} mode="info">
        <P>{submenuInfoWithoutContentEn}</P>
        <P>{submenuInfoWithoutContentRu}</P>
      </SectionMessage>
      <Notification />
      <SubmenuComponent items={mockedItemsWithoutContent} />
    </Space>
}`,...(_=(D=d.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var H,N,J;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    source: {
      submenu: componentColors.submenu,
      submenu_item: componentColors.submenu_item
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(J=(N=b.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};const Ot=["Submenu","SubmenuControllableActiveKey","SubmenuRow","SubmenuTitle","SubmenuWithoutContent","ColorTokens"];export{b as ColorTokens,m as Submenu,p as SubmenuControllableActiveKey,l as SubmenuRow,u as SubmenuTitle,d as SubmenuWithoutContent,Ot as __namedExportsOrder,Et as default};
