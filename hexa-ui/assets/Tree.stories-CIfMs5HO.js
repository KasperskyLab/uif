import{T as ie}from"./Palette-Bcbt30O7.js";import{b as K,R as r,c as de,H as pe}from"./iframe-DlY6n6Um.js";import{w as le}from"./withMeta-B77fl0Sa.js";import{b as me,c as ue}from"./helpers-BytZKRkB.js";import{b as he}from"./Tree-BQoZQl8D.js";import{T as C,t as L,b as ge,a as l}from"./mocks-BumQa1m_.js";import{P as Te}from"./Panel-CH-6-lgr.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";import"./Checkbox-lkNIXc0L.js";import"./AdditionalContent-D1SVuAXm.js";import"./HelpMessage-CfUPOaMw.js";import"./useId-4A31Gjf8.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./FormLabel-CKFB06hk.js";import"./Markdown-9a6sqH5b.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-Cd3srqW9.js";import"./TextReducer-mTsc_fVR.js";import"./StatusDangerSolid1-Db-Ba1Fd.js";import"./Group-C50_emtp.js";import"./index-q41KpsCE.js";import"./type-Cyafuwrq.js";import"./colors-Cs2HIvKh.js";import"./wave-CgaPvuQn.js";import"./Popover-D8ys_ap7.js";import"./index-DGKnGyLh.js";import"./index-BG3JBUTS.js";import"./Radio-Br6rqD2P.js";import"./index-C_Mi6W7z.js";import"./KeyCode-B45xthVk.js";import"./SettingsGear-9Bvyt4bA.js";import"./ArrowDownSolid-BE7bAzAG.js";import"./Loader-BjmnRfIR.js";import"./index-CY9qp4ym.js";import"./Tree-CEUyxcFA.js";import"./pickAttrs-CzltAtTh.js";import"./List-wDBxy9Ze.js";import"./Server-YIrZe1tb.js";const De={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0},ye="Tree",fe="В качестве основы используется Tree из библиотеки Antd.",ke="Компонент Tree предназначен для отображения иерархической структуры",be="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=30551%3A107886",xe="https://pixso.net/app/design/zAZXcBAMYbjlXMNJziZiiw",Ce={dod:De,component:ye,description:fe,usage:ke,designLink:be,pixsoView:xe};function ne(e){const t=[];for(const a of e)t.push(a.key),a.children&&t.push(...ne(a.children));return t}function se(e,t={depth:3,width:3}){const a=[];let s=0,n=0;function o(){return n>=e}function c(){return Math.random()<.5}function d(N,v){const u={key:N,isLeaf:!0,title:N};if(n++,!o()&&t.depth>v&&c()){u.isLeaf=!1,u.children=[];let E=0;for(;u.children.push(d(`${N}-${E++}`,v+1)),!(o()||t.width===E||c()););}return u}function i(){return d(`0-${s++}`,1)}for(;!o();)a.push(i());return a}const ut={title:"Hexa UI Components/Tree",component:C,argTypes:{allowUncheck:{control:"boolean"},autoExpandParent:{control:"boolean"},blockNode:{control:"boolean"},checkChildren:{control:"boolean"},checkParents:{control:"boolean"},checkStrictly:{control:"boolean"},checkedKeys:{control:"object"},defaultCheckedKeys:{control:"object"},defaultExpandedKeys:{control:"object"},disabled:{control:"boolean"},expandedKeys:{control:"object"},invalid:{control:"boolean"},loadData:{},loadedKeys:{control:"object"},treeData:{control:"object"},showLine:{control:"boolean"}},args:{klId:"tree-kl-id",testId:"tree-test-id",showLine:!1},parameters:{badges:[K.stable,K.reviewedByDesign],docs:{page:le(Ce)}}};function m({Component:e,...t}){const[a,s]=r.useState(t.checkedKeys);r.useEffect(()=>s(t.checkedKeys),[t.checkedKeys]);const n=me(ue({...t,checkedKeys:a},["checkedKeys","defaultCheckedKeys","defaultExpandedKeys","expandedKeys"]),{onCheck:o=>s([...o])});return r.createElement(e,{...n})}const h={render:e=>r.createElement(m,{...e,Component:C}),args:{mode:"multipleChoice",treeData:L}},g={render:e=>r.createElement(m,{...e,Component:C}),args:{mode:"multipleChoice",treeData:L,showLine:!0}};function ce({Component:e,...t}){const[a,s]=r.useState([{key:"0-0",title:"0-0",checkable:!1}]),n=(o,c,d)=>o.map(i=>i.key===c?{...i,children:d}:i.children?{...i,children:n(i.children,c,d)}:i);return r.createElement(e,{...t,loadData:async o=>{var c;(c=t.loadData)==null||c.call(t,o),await new Promise(d=>setTimeout(d,2e3)),s(n(a,o.key,[{key:`${o.key}-0`,title:`${o.title}-0`},{key:`${o.key}-1`,isLeaf:!0,title:`${o.title}-1`}]))},treeData:a})}const T={render:e=>r.createElement(ce,{...e,Component:C}),args:{onActionClick:void 0,mode:"multipleChoice"},parameters:{actions:{argTypesRegex:"^(on.*|loadData)"},controls:{exclude:/(componentId|componentType|dataTestId|theme|treeData)/}}},p={render:e=>r.createElement(m,{...e,Component:l}),args:{multiple:!0,treeData:L},parameters:{controls:{exclude:/(componentId|componentType|mode|theme)/}}},D={render:e=>r.createElement(m,{...e,Component:l}),args:{treeData:L,showLine:!0}},y={...p,render:e=>{const t=r.useMemo(()=>[{key:"all",title:"all",children:se(400,{depth:3,width:10})}],[]),a=r.useMemo(()=>ne(t),[t]);return r.createElement(l,{...e,defaultExpandedKeys:a,treeData:t})},args:{checkParents:!0,multiple:!0},parameters:{controls:{exclude:/(componentId|componentType|defaultExpandedKeys|mode|theme|treeData)/}}},f={...p,render:e=>r.createElement(ce,{...e,Component:l}),args:{onActionClick:void 0,multiple:!0},parameters:{actions:{argTypesRegex:"^(on.*|loadData)"},controls:{exclude:/(componentId|componentType|dataTestId|mode|theme|treeData)/}}},Le=se(20),k={...p,render:e=>{const[t,a]=r.useState(e.treeData);return r.createElement(l,{...e,onDrop:s=>{var n;(n=e.onDrop)==null||n.call(e,s),a(he(s,t))},treeData:t})},args:{blockNode:!0,defaultExpandedKeys:["0-0","0-0-0","0-0-0-0"],draggable:!0,checkParents:!0,treeData:Le}},Ne=pe(Te)`
  height: calc(100vh - 48px);
`,b={render:e=>r.createElement(Ne,{resizable:!0,resizeHandle:"right",padding:"medium"},r.createElement(m,{...e,Component:l})),args:{multiple:!0,treeData:ge},parameters:{actions:{argTypesRegex:"^(on.*)"},controls:{exclude:/(componentId|componentType|mode|theme)/}}},x={args:{source:{tree:de.tree}},render:e=>r.createElement(ie,{...e}),parameters:{controls:{include:/(source)/}}};var I,w,A;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <TreeWrapper {...args} Component={TreeList} />,
  args: {
    mode: 'multipleChoice',
    treeData: treeDataMock
  }
}`,...(A=(w=h.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var M,S,W;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <TreeWrapper {...args} Component={TreeList} />,
  args: {
    mode: 'multipleChoice',
    treeData: treeDataMock,
    showLine: true
  }
}`,...(W=(S=g.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var P,R,B;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
      exclude: /(componentId|componentType|dataTestId|theme|treeData)/
    }
  }
}`,...(B=(R=T.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var j,$,z;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <TreeWrapper {...args} Component={TreeNav} />,
  args: {
    multiple: true,
    treeData: treeDataMock
  },
  parameters: {
    controls: {
      exclude: /(componentId|componentType|mode|theme)/
    }
  }
}`,...(z=($=p.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var H,O,_;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <TreeWrapper {...args} Component={TreeNav} />,
  args: {
    treeData: treeDataMock,
    showLine: true
  }
}`,...(_=(O=D.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var G,J,U;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...TreeNavBasic,
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
      exclude: /(componentId|componentType|defaultExpandedKeys|mode|theme|treeData)/
    }
  }
}`,...(U=(J=y.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var Y,Z,V;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
      exclude: /(componentId|componentType|dataTestId|mode|theme|treeData)/
    }
  }
}`,...(V=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:V.source}}};var X,F,Q;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Q=(F=k.parameters)==null?void 0:F.docs)==null?void 0:Q.source}}};var q,ee,te;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <StyledPanel resizable resizeHandle="right" padding="medium">
      <TreeWrapper {...args} Component={TreeNav} />
    </StyledPanel>,
  args: {
    multiple: true,
    treeData: treeDataMockWithIcons
  },
  parameters: {
    actions: {
      argTypesRegex: '^(on.*)'
    },
    controls: {
      exclude: /(componentId|componentType|mode|theme)/
    }
  }
}`,...(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,oe;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const ht=["TreeListBasic","TreeListWithLines","TreeListLoadDataAsynchronously","TreeNavBasic","TreeNavWithLines","TreeNavMultipleChoiceWithALotOfData","TreeNavLoadDataAsynchronously","TreeNavDraggable","TreeNavWithIconsInPanel","ColorTokens"];export{x as ColorTokens,h as TreeListBasic,T as TreeListLoadDataAsynchronously,g as TreeListWithLines,p as TreeNavBasic,k as TreeNavDraggable,f as TreeNavLoadDataAsynchronously,y as TreeNavMultipleChoiceWithALotOfData,b as TreeNavWithIconsInPanel,D as TreeNavWithLines,ht as __namedExportsOrder,ut as default};
