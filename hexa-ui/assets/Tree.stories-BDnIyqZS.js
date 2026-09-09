import{T as ie}from"./Palette-DXL8UiT3.js";import{c as le,M as A,R as r,H as de}from"./iframe-DedYZBTA.js";import{w as pe}from"./withMeta-DvkmiJqW.js";import{b as me,c as ue}from"./helpers-BytZKRkB.js";import{t as b,a as he}from"./mocks-WzhyAzs-.js";import{D as ge}from"./Dropdown-C8Jtav0F.js";import{c as De}from"./CheckPoint-BRG14NqO.js";import{o as Te}from"./Menu2-vNCkCt-I.js";import{a as ye}from"./Tree-DIlayO6k.js";import{T as x,b as p}from"./TreeNav-BGpNkSTo.js";import{P as ke}from"./Panel-B-5YZOXo.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-ZmDutUur.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";import"./TextReducer-DfctGdJH.js";import"./SubComponents-bNxy1m5y.js";import"./TextWithTruncation-9ZCEnufi.js";import"./ArrowDownSolid-Ckv4ljMR.js";import"./ArrowRightSolid-ZNfuOHa8.js";import"./Divider-CSCFEdMt.js";import"./Badge-MGlXnKsn.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./Indicator-Bx9eTEZ-.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./StatusOkOutline-b1x4d3lq.js";import"./Grid-y5IvP__E.js";import"./Markdown-Bfn0KgDg.js";import"./index-_nYjx9Ua.js";import"./Server-CNw55YUF.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BEs9Hbuo.js";import"./useMergedState-Rc5-DXZ5.js";import"./focus-CS35CTr_.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DWYHjndK.js";import"./Toggle-B_SlzXxU.js";import"./AdditionalContent-nPPwbP5q.js";import"./HelpMessage-BT7POId6.js";import"./wave-MdFmrsKf.js";import"./FormLabel-a_agw1kt.js";import"./Tag-BKPu3-sD.js";import"./index-D9mMt9l0.js";import"./Group-3Po5iaS9.js";import"./Loader-C9846UWr.js";import"./index-DlVZRnRV.js";import"./v4-BoP187Zn.js";import"./Tree-BbkTKoxh.js";import"./pickAttrs-C2PClXaq.js";import"./List-Dn04FqKX.js";import"./SettingsGear-Cl0aLKMC.js";import"./Checkbox-CNZ65EGY.js";import"./useId-D-iZuP_C.js";import"./generateId-BXJELych.js";import"./index-RNU6oZ57.js";import"./index-B_L1GtX7.js";import"./Radio-Cpvj7bye.js";import"./index-Cgmls7nb.js";const fe={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,inBuilder:"Используется под названием «Дерево»"},Ce="Tree",Ee="В качестве основы используется Tree из библиотеки Antd.",be="Компонент Tree предназначен для отображения иерархической структуры",xe="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=30551%3A107886",Ne="https://pixso.net/app/design/zAZXcBAMYbjlXMNJziZiiw",Le={dod:fe,component:Ce,description:Ee,usage:be,designLink:xe,pixsoView:Ne};function oe(e){const t=[];for(const n of e)t.push(n.key),n.children&&t.push(...oe(n.children));return t}function se(e,t={depth:3,width:3}){const n=[];let s=0,o=0;function a(){return o>=e}function c(){return Math.random()<.5}function l(N,L){const u={key:N,isLeaf:!0,title:N};if(o++,!a()&&t.depth>L&&c()){u.isLeaf=!1,u.children=[];let v=0;for(;u.children.push(l(`${N}-${v++}`,L+1)),!(a()||t.width===v||c()););}return u}function i(){return l(`0-${s++}`,1)}for(;!a();)n.push(i());return n}const ve={DEFAULT:void 0,THREE_DOTS:r.createElement(Te,null),CHECK:r.createElement(De,null)},Wt={title:"Hexa UI Components/Tree",component:x,argTypes:{allowUncheck:{control:"boolean"},autoExpandParent:{control:"boolean"},blockNode:{control:"boolean"},checkChildren:{control:"boolean"},checkParents:{control:"boolean"},checkStrictly:{control:"boolean"},checkedKeys:{control:"object"},defaultCheckedKeys:{control:"object"},defaultExpandedKeys:{control:"object"},disabled:{control:"boolean"},expandedKeys:{control:"object"},invalid:{control:"boolean"},loadData:{},loadedKeys:{control:"object"},treeData:{control:"object"},showLine:{control:"boolean"},actionIcon:{control:"select",options:Array("DEFAULT","THREE_DOTS","CHECK")}},args:{klId:"tree-kl-id",testId:"tree-test-id",showLine:!1},parameters:{badges:[A.stable,A.reviewedByDesign],docs:{page:pe(Le)}}};function m({Component:e,...t}){const[n,s]=r.useState(t.checkedKeys);r.useEffect(()=>s(t.checkedKeys),[t.checkedKeys]);const o=me(ue({...t,checkedKeys:n},["checkedKeys","defaultCheckedKeys","defaultExpandedKeys","expandedKeys"]),{onCheck:a=>s([...a])});return r.createElement(e,{...o})}const h={render:e=>r.createElement(m,{...e,Component:x}),args:{mode:"multipleChoice",treeData:b}},g={render:e=>r.createElement(m,{...e,Component:x}),args:{mode:"multipleChoice",treeData:b,showLine:!0}};function ce({Component:e,...t}){const[n,s]=r.useState([{key:"0-0",title:"0-0",checkable:!1}]),o=(a,c,l)=>a.map(i=>i.key===c?{...i,children:l}:i.children?{...i,children:o(i.children,c,l)}:i);return r.createElement(e,{...t,loadData:async a=>{var c;(c=t.loadData)==null||c.call(t,a),await new Promise(l=>setTimeout(l,2e3)),s(o(n,a.key,[{key:`${a.key}-0`,title:`${a.title}-0`},{key:`${a.key}-1`,isLeaf:!0,title:`${a.title}-1`}]))},treeData:n})}const D={render:e=>r.createElement(ce,{...e,Component:x}),args:{onActionClick:void 0,mode:"multipleChoice"},parameters:{actions:{argTypesRegex:"^(on.*|loadData)"},controls:{exclude:/(componentType|theme|treeData)/}}},d={render:e=>r.createElement(m,{...e,Component:p}),args:{multiple:!0,treeData:b},parameters:{controls:{exclude:/(componentType|mode|theme)/}}},T={render:e=>r.createElement(m,{...e,Component:p}),args:{treeData:b,showLine:!0}},y={...d,tags:["skip-visual"],render:e=>{const t=r.useMemo(()=>[{key:"all",title:"all",children:se(400,{depth:3,width:10})}],[]),n=r.useMemo(()=>oe(t),[t]);return r.createElement(p,{...e,defaultExpandedKeys:n,treeData:t})},args:{checkParents:!0,multiple:!0},parameters:{controls:{exclude:/(componentType|defaultExpandedKeys|mode|theme|treeData)/}}},k={...d,render:e=>r.createElement(ce,{...e,Component:p}),args:{onActionClick:void 0,multiple:!0},parameters:{actions:{argTypesRegex:"^(on.*|loadData)"},controls:{exclude:/(componentType|mode|theme|treeData)/}}},Ae=se(20),f={...d,render:e=>{const[t,n]=r.useState(e.treeData);return r.createElement(p,{...e,onDrop:s=>{var o;(o=e.onDrop)==null||o.call(e,s),n(ye(s,t))},treeData:t})},args:{blockNode:!0,defaultExpandedKeys:["0-0","0-0-0","0-0-0-0"],draggable:!0,checkParents:!0,treeData:Ae}},Ke=de(ke)`
  height: calc(100vh - 48px);
`,C={render:e=>r.createElement(Ke,{resizable:!0,resizeHandle:"right",padding:"medium"},r.createElement(m,{...e,Component:p,actionIcon:ve[e.actionIcon]})),args:{multiple:!0,treeData:he,onActionClick:e=>alert("simple click to action. Returned node data."),renderAction:({children:e,node:t})=>t.key==="0-0"?r.createElement(r.Fragment,null,e):r.createElement("div",{onClick:n=>n.stopPropagation(),style:{position:"sticky",right:-8}},r.createElement(ge,{trigger:["click"],selectedItemsKeys:[],overlay:[{key:"edit",children:"Edit",onClick:()=>alert(`EDIT node with name ${t.title}`)},{key:"delete",children:"Delete",onClick:()=>alert(`DELETE node with name ${t.title}`)}]},e))},parameters:{actions:{argTypesRegex:"^(on.*)"},controls:{exclude:/(componentType|mode|theme)/}}},E={args:{source:{tree:le.tree}},render:e=>r.createElement(ie,{...e}),parameters:{controls:{include:/(source)/}}};var K,w,I;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <TreeWrapper {...args} Component={TreeList} />,
  args: {
    mode: 'multipleChoice',
    treeData: treeDataMock
  }
}`,...(I=(w=h.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var M,P,S;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <TreeWrapper {...args} Component={TreeList} />,
  args: {
    mode: 'multipleChoice',
    treeData: treeDataMock,
    showLine: true
  }
}`,...(S=(P=g.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var W,R,$;D.parameters={...D.parameters,docs:{...(W=D.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <LoadDataAsynchronously {...args} Component={TreeList} />,
  args: {
    onActionClick: undefined,
    mode: 'multipleChoice'
  },
  parameters: {
    actions: {
      argTypesRegex: '^(on.*|loadData)'
    },
    controls: {
      exclude: /(componentType|theme|treeData)/
    }
  }
}`,...($=(R=D.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var B,H,O;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <TreeWrapper {...args} Component={TreeNav} />,
  args: {
    multiple: true,
    treeData: treeDataMock
  },
  parameters: {
    controls: {
      exclude: /(componentType|mode|theme)/
    }
  }
}`,...(O=(H=d.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var _,j,z;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <TreeWrapper {...args} Component={TreeNav} />,
  args: {
    treeData: treeDataMock,
    showLine: true
  }
}`,...(z=(j=T.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var G,U,F;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...TreeNavBasic,
  // недетерминированный рендер: виртуализация большого дерева отрисовывается по-разному
  tags: ['skip-visual'],
  render: args => {
    const treeData = React.useMemo(() => {
      return [{
        key: 'all',
        title: 'all',
        children: generateTreeData(400, {
          depth: 3,
          width: 10
        })
      }];
    }, []);
    const defaultExpandedKeys = React.useMemo(() => getKeys(treeData), [treeData]);
    return <TreeNav {...args} defaultExpandedKeys={defaultExpandedKeys} treeData={treeData} />;
  },
  args: {
    checkParents: true,
    multiple: true
  },
  parameters: {
    controls: {
      exclude: /(componentType|defaultExpandedKeys|mode|theme|treeData)/
    }
  }
}`,...(F=(U=y.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var J,Y,Z;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...TreeNavBasic,
  render: args => <LoadDataAsynchronously {...args} Component={TreeNav} />,
  args: {
    onActionClick: undefined,
    multiple: true
  },
  parameters: {
    actions: {
      argTypesRegex: '^(on.*|loadData)'
    },
    controls: {
      exclude: /(componentType|mode|theme|treeData)/
    }
  }
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var V,X,Q;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...TreeNavBasic,
  render: args => {
    const [gData, setGData] = React.useState(args.treeData!);
    return <TreeNav {...args} onDrop={info => {
      args.onDrop?.(info);
      setGData(applyDropToTreeData(info, gData));
    }} treeData={gData} />;
  },
  args: {
    blockNode: true,
    defaultExpandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
    draggable: true,
    checkParents: true,
    treeData: defaultData
  }
}`,...(Q=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var q,ee,te;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <StyledPanel resizable resizeHandle="right" padding="medium">
      <TreeWrapper {...args} Component={TreeNav} actionIcon={ACTION_ICON_MAPPING[args.actionIcon as ActionIconType]} />
    </StyledPanel>,
  args: {
    multiple: true,
    treeData: treeDataMockWithIcons,
    onActionClick: nodeData => alert('simple click to action. Returned node data.'),
    renderAction: ({
      children,
      node
    }) => {
      if (node.key === '0-0') return <>{children}</>;
      return <div onClick={e => e.stopPropagation()} style={{
        position: 'sticky',
        right: -8
      }}>
          <Dropdown trigger={['click']} selectedItemsKeys={[]} overlay={[{
          key: 'edit',
          children: 'Edit',
          onClick: () => alert(\`EDIT node with name \${node.title}\`)
        }, {
          key: 'delete',
          children: 'Delete',
          onClick: () => alert(\`DELETE node with name \${node.title}\`)
        }]}>
            {children}
          </Dropdown>
        </div>;
    }
  },
  parameters: {
    actions: {
      argTypesRegex: '^(on.*)'
    },
    controls: {
      exclude: /(componentType|mode|theme)/
    }
  }
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ne,ae;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    source: {
      tree: componentColors.tree
    }
  },
  render: args => <ThemedPalette {...args} />,
  parameters: {
    controls: {
      include: /(source)/
    }
  }
}`,...(ae=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const Rt=["TreeListBasic","TreeListWithLines","TreeListLoadDataAsynchronously","TreeNavBasic","TreeNavWithLines","TreeNavMultipleChoiceWithALotOfData","TreeNavLoadDataAsynchronously","TreeNavDraggable","TreeNavWithIconsInPanel","ColorTokens"];export{E as ColorTokens,h as TreeListBasic,D as TreeListLoadDataAsynchronously,g as TreeListWithLines,d as TreeNavBasic,f as TreeNavDraggable,k as TreeNavLoadDataAsynchronously,y as TreeNavMultipleChoiceWithALotOfData,C as TreeNavWithIconsInPanel,T as TreeNavWithLines,Rt as __namedExportsOrder,Wt as default};
