import{T as X}from"./Palette-DypzKIWI.js";import{b as h,R as e,c as C,r as g,S as Y,t as Z,P as k,H as $}from"./iframe-DijVn6lr.js";import{w as q}from"./withMeta-Cvuu-gnO.js";import{C as G}from"./Warnings-DvINeFpI.js";import{s as ee}from"./helpers-BytZKRkB.js";import{B as L}from"./Button-PwdEuxbx.js";import{N as te}from"./Notification-4g3d8XlB.js";import{S as ne}from"./Sidebar-CFuQDJVI.js";import{T as oe}from"./Tag-UgBikWKe.js";import{T as re}from"./Toggle-B1iun58-.js";import{l as ie}from"./Placeholder-XNkSpDe-.js";import{o as ae}from"./Plus-CtMZBh9J.js";import{r as se}from"./Settings-Ca7K_Yj0.js";import{S as i}from"./Submenu-dqxFZnAy.js";import{m as ce,a as me}from"./mocks--LXIUDlb.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-CCWRtDLv.js";import"./StatusOkOutline-rTkgZuSC.js";import"./Dropdown-D0EIrFH4.js";import"./KeyCode-Dc0kQrxh.js";import"./Overflow-DkuW95mG.js";import"./focus-C71cxy8r.js";import"./type-DN7uEUoT.js";import"./Loader-D2XHvBNY.js";import"./index-Coa4z_GS.js";import"./Divider-D-bCk8Cb.js";import"./ArrowRight-DFM_iKWt.js";import"./v4-BoP187Zn.js";import"./button-ncLxIWef.js";import"./wave-B_Kd_ldv.js";import"./generateId-BXJELych.js";import"./Kira-CEp6IDBz.js";import"./TextWithTruncation-ZpW5O1mj.js";import"./TextReducer-BIfgSXBQ.js";import"./PortalWrapper-CB39oIHY.js";import"./Portal-DepVVhUk.js";import"./useForceUpdate-C5uVaAVo.js";import"./StatusDangerSolid1-BFRjkrKA.js";import"./Group-CAP3cdvx.js";import"./index-tjmVxM9w.js";import"./colors-CLXBBt7C.js";import"./AdditionalContent-BcbE0Uii.js";import"./HelpMessage-BdtHkJwS.js";import"./FormLabel-671wf7jJ.js";import"./Markdown-DOYaVGrQ.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-CTNslkPb.js";import"./SubComponents-BYoaH9dX.js";import"./Badge-BxwbPOiG.js";import"./Indicator-C31YGlvy.js";import"./ArrowDownSolid-B6lDi2Ko.js";import"./ArrowRightSolid-x1c4h6Py.js";import"./CustomItem-BDwajboK.js";import"./Menu-DOFrB_kk.js";import"./ArrowRightMini-lc0ilx02.js";import"./useLocalization-BLHqRTJE.js";import"./Unpin-CaVgr-PT.js";import"./Sider-BteBSADV.js";import"./LeftOutlined-BGPzOr-A.js";import"./StatusOkSolid-kU5hDl8y.js";import"./Menu2-CG_lP8tl.js";const pe={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},le="Submenu",ue="Submenu — технический компонент, который используется для отображения блока вертикальной навигации в сайдбаре. Самостоятельно не используется.",de="",be="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=95706%3A276097",fe="https://pixso.net/app/design/ckWp1X9hTPd4DzSYJLe95w",I={dod:pe,component:le,description:ue,usage:de,designLink:be,pixsoView:fe},vt={title:"Hexa UI Components/Submenu",component:i,argTypes:{...ee(["theme","items","componentType"])},args:{truncateText:!1,collapseOnTextClick:!0,elementBefore:"Element before",elementAfter:"Element after",defaultActiveKey:"row-1-2",testId:"submenu-test-id",klId:"submenu-kl-id",items:ce},parameters:{badges:[h.stable,h.reviewedByDesign],docs:{page:q(I)},design:I.pixsoView}},U=$(ne)`
  .ant-drawer-body {
    padding: 0;

    .antd-sidebar-content {
      height: 100%;
    }
  }
`,ge=n=>{const[t,o]=g.useState(!1);return e.createElement(e.Fragment,null,e.createElement(L,{onClick:()=>o(!0)},"Open"),e.createElement(U,{title:"Sidebar",visible:t,onClose:()=>o(!t)},e.createElement(i,{...n})))},m={render:ge.bind({})},p={render:n=>{const[t,o]=g.useState(!1),[f,s]=g.useState("row-4-1"),c=a=>{console.log("new active key is",a),s(a)};return e.createElement(Y,{gap:"separated",direction:"vertical",align:"start"},e.createElement(G,null),e.createElement(L,{onClick:()=>o(!0)},"Open"),e.createElement(U,{title:"Sidebar",visible:t,onClose:()=>o(!t)},e.createElement(i,{...n,activeKey:f,onChange:c})))}},r={"-":null,Placeholder:e.createElement(ie,{klId:"submenu-row-icon"}),Plus:e.createElement(ae,{klId:"submenu-row-icon"}),Settings:e.createElement(se,{klId:"submenu-row-icon"})},w={"-":null,Toggle:e.createElement(re,null),Tag:e.createElement(oe,{mode:"purple",size:"small"},"Tag")},l={render:({disabled:n,iconBefore:t,text:o,truncateText:f,elementAfter:s,notificationVariant:c,indicatorMode:a,badgeMode:y,badgeCount:F,badgeText:Q,action:x})=>{const S=T=>({type:"row",key:"row-"+T,text:o,disabled:n,content:"This is row "+T,...t!=="-"?{iconBefore:r[t]}:{},...c==="indicator"&&a?{notification:{type:"indicator",mode:a}}:{},...c==="badge"&&y?{notification:{type:"badge",mode:y,text:Q,count:F}}:{},...s?{elementAfter:w[s]}:{},...x!=="-"?{action:{onClick:()=>console.log("Row action clicked"),icon:r[x]}}:{}});return e.createElement(i,{truncateText:f,items:[S(1),S(2)]})},argTypes:{disabled:{control:{type:"boolean"},description:"Disabled state (not a submenu prop)"},iconBefore:{control:{type:"select"},options:Object.keys(r),description:"Icon before, custom icon of size 16 (not a submenu prop)"},text:{control:{type:"text"},description:"Row text (not a submenu prop)"},elementAfter:{control:{type:"select"},options:Object.keys(w),description:"Element after, custom element with maximum height of 20px (not a submenu prop)"},notificationVariant:{control:{type:"select"},options:["badge","indicator","none"],description:"Notification variant (not a submenu prop)"},indicatorMode:{control:{type:"select"},options:["new","critical","medium"],description:"Indicator mode (not a submenu prop)"},badgeMode:{control:{type:"select"},options:["new","critical"],description:"Badge mode (not a submenu prop)"},badgeCount:{control:{type:"number",min:0},description:"Badge count (not a submenu prop)"},badgeText:{control:{type:"text"},description:"Badge text (not a submenu prop)"},action:{control:{type:"select"},options:Object.keys(r),description:"Action icon, custom icon of size 16 (not a submenu prop)"}},args:{disabled:!1,iconBefore:"-",text:"Row",truncateText:!1,elementAfter:"-",notificationVariant:"none",indicatorMode:"critical",badgeMode:"critical",badgeCount:10,badgeText:void 0,action:"-"},parameters:{controls:{exclude:/(items|activeKey|defaultActiveKey|onChange|collapseOnTextClick|theme|componentType|dataTestId|componentId|elementBefore|testId|klId)/}}},u={render:({text:n,action:t})=>e.createElement(i,{items:[{type:"title",key:"title",text:n,...t!=="-"?{action:{onClick:()=>console.log("Title action clicked"),icon:r[t]}}:{}}]}),argTypes:{text:{control:{type:"text"},description:"Title text (not a submenu prop)"},action:{control:{type:"select"},options:Object.keys(r),description:"Action icon, custom icon of size 16 (not a submenu prop)"}},args:{text:"Title",action:"-"},parameters:{controls:{exclude:/(items|activeKey|defaultActiveKey|onChange|collapseOnTextClick|truncateText|theme|componentType|dataTestId|componentId|elementBefore|elementAfter|testId|klId)/}}},ye=`This story demonstrates the use of Submenu without embedded content.

The product can fully control the rendering of tab contents:
- If the SubmenuRow element does not have the content property, the component renders only the menu item.
- Inside the onClick prop, the product can render its own content or perform another action (for example, show a modal window, etc.).
`,xe=`Данный пример стори демонстрирует использование Submenu без встроенного контента.

Продукт может полностью управлять отрисовкой содержимого вкладок:
- Если у элемента SubmenuRow отсутствует свойство content, компонент рендерит только пункт меню.
- Внутри пропа onClick продукт может отрисовать собственный контент или выполнить другое действие (например, показать модальное окно и т.д.).
`,d={render:()=>e.createElement(Y,{gap:"separated",direction:"vertical",align:"start"},e.createElement(Z,{closable:!1,mode:"info"},e.createElement(k,null,ye),e.createElement(k,null,xe)),e.createElement(te,null),e.createElement(i,{items:me}))},b={args:{source:{submenu:C.submenu,submenu_item:C.submenu_item}},render:n=>e.createElement(X,{...n})};var v,A,E;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(J=(N=b.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};const At=["Submenu","SubmenuControllableActiveKey","SubmenuRow","SubmenuTitle","SubmenuWithoutContent","ColorTokens"];export{b as ColorTokens,m as Submenu,p as SubmenuControllableActiveKey,l as SubmenuRow,u as SubmenuTitle,d as SubmenuWithoutContent,At as __namedExportsOrder,vt as default};
