import{T as ie}from"./Palette-CL2qD4Vl.js";import{c as le,G as v,R as r,H as de}from"./iframe-4-PRSI1I.js";import{w as me}from"./withMeta-BwOuJ6tr.js";import{b as pe,c as ue}from"./helpers-BytZKRkB.js";import{T as b,a as m}from"./TreeNav-C68B3PBX.js";import{b as he}from"./Tree-appFFBib.js";import{t as I,a as ge}from"./mocks-CihRnx9A.js";import{D as Te}from"./Dropdown-BZXGqesC.js";import{c as De}from"./CheckPoint-B8YC8fCe.js";import{o as ye}from"./Menu2-CvX9huZG.js";import{P as ke}from"./Panel-BXurV7EJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./Checkbox-C_Wci0Rq.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./useId-B0iEqS7b.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./FormLabel-CoXJxjwh.js";import"./Tag-B3SARhhR.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./index-C07DIHtC.js";import"./index-zCYDgB3k.js";import"./Radio-DUuhhrf2.js";import"./index-CsWSl5Dl.js";import"./useMergedState-5V6OeSqY.js";import"./Tree-BLyxVEuJ.js";import"./KeyCode-c5NdJp32.js";import"./pickAttrs-ACVbvRAI.js";import"./List-CY7M4ryI.js";import"./index-CJ8XlVHE.js";import"./SettingsGear-Cqb3tsn_.js";import"./Loader-CzWCOjAf.js";import"./Folder-CAOQG9V1.js";import"./Server-CkhO24b_.js";import"./isEqual-vUrjsNbx.js";import"./focus-C8_PqSex.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./Toggle-Cpn23pdP.js";import"./ArrowRight-AkM1Q671.js";const fe={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0},Ce="Tree",Ee="В качестве основы используется Tree из библиотеки Antd.",be="Компонент Tree предназначен для отображения иерархической структуры",Ie="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=30551%3A107886",xe="https://pixso.net/app/design/zAZXcBAMYbjlXMNJziZiiw",Ne={dod:fe,component:Ce,description:Ee,usage:be,designLink:Ie,pixsoView:xe};function oe(e){const t=[];for(const n of e)t.push(n.key),n.children&&t.push(...oe(n.children));return t}function se(e,t={depth:3,width:3}){const n=[];let s=0,o=0;function a(){return o>=e}function c(){return Math.random()<.5}function l(x,N){const u={key:x,isLeaf:!0,title:x};if(o++,!a()&&t.depth>N&&c()){u.isLeaf=!1,u.children=[];let L=0;for(;u.children.push(l(`${x}-${L++}`,N+1)),!(a()||t.width===L||c()););}return u}function i(){return l(`0-${s++}`,1)}for(;!a();)n.push(i());return n}const Le={DEFAULT:void 0,THREE_DOTS:r.createElement(ye,null),CHECK:r.createElement(De,null)},St={title:"Hexa UI Components/Tree",component:b,argTypes:{allowUncheck:{control:"boolean"},autoExpandParent:{control:"boolean"},blockNode:{control:"boolean"},checkChildren:{control:"boolean"},checkParents:{control:"boolean"},checkStrictly:{control:"boolean"},checkedKeys:{control:"object"},defaultCheckedKeys:{control:"object"},defaultExpandedKeys:{control:"object"},disabled:{control:"boolean"},expandedKeys:{control:"object"},invalid:{control:"boolean"},loadData:{},loadedKeys:{control:"object"},treeData:{control:"object"},showLine:{control:"boolean"},actionIcon:{control:"select",options:Array("DEFAULT","THREE_DOTS","CHECK")}},args:{klId:"tree-kl-id",testId:"tree-test-id",showLine:!1},parameters:{badges:[v.stable,v.reviewedByDesign],docs:{page:me(Ne)}}};function p({Component:e,...t}){const[n,s]=r.useState(t.checkedKeys);r.useEffect(()=>s(t.checkedKeys),[t.checkedKeys]);const o=pe(ue({...t,checkedKeys:n},["checkedKeys","defaultCheckedKeys","defaultExpandedKeys","expandedKeys"]),{onCheck:a=>s([...a])});return r.createElement(e,{...o})}const h={render:e=>r.createElement(p,{...e,Component:b}),args:{mode:"multipleChoice",treeData:I}},g={render:e=>r.createElement(p,{...e,Component:b}),args:{mode:"multipleChoice",treeData:I,showLine:!0}};function ce({Component:e,...t}){const[n,s]=r.useState([{key:"0-0",title:"0-0",checkable:!1}]),o=(a,c,l)=>a.map(i=>i.key===c?{...i,children:l}:i.children?{...i,children:o(i.children,c,l)}:i);return r.createElement(e,{...t,loadData:async a=>{var c;(c=t.loadData)==null||c.call(t,a),await new Promise(l=>setTimeout(l,2e3)),s(o(n,a.key,[{key:`${a.key}-0`,title:`${a.title}-0`},{key:`${a.key}-1`,isLeaf:!0,title:`${a.title}-1`}]))},treeData:n})}const T={render:e=>r.createElement(ce,{...e,Component:b}),args:{onActionClick:void 0,mode:"multipleChoice"},parameters:{actions:{argTypesRegex:"^(on.*|loadData)"},controls:{exclude:/(componentId|componentType|dataTestId|theme|treeData)/}}},d={render:e=>r.createElement(p,{...e,Component:m}),args:{multiple:!0,treeData:I},parameters:{controls:{exclude:/(componentId|componentType|mode|theme)/}}},D={render:e=>r.createElement(p,{...e,Component:m}),args:{treeData:I,showLine:!0}},y={...d,render:e=>{const t=r.useMemo(()=>[{key:"all",title:"all",children:se(400,{depth:3,width:10})}],[]),n=r.useMemo(()=>oe(t),[t]);return r.createElement(m,{...e,defaultExpandedKeys:n,treeData:t})},args:{checkParents:!0,multiple:!0},parameters:{controls:{exclude:/(componentId|componentType|defaultExpandedKeys|mode|theme|treeData)/}}},k={...d,render:e=>r.createElement(ce,{...e,Component:m}),args:{onActionClick:void 0,multiple:!0},parameters:{actions:{argTypesRegex:"^(on.*|loadData)"},controls:{exclude:/(componentId|componentType|dataTestId|mode|theme|treeData)/}}},ve=se(20),f={...d,render:e=>{const[t,n]=r.useState(e.treeData);return r.createElement(m,{...e,onDrop:s=>{var o;(o=e.onDrop)==null||o.call(e,s),n(he(s,t))},treeData:t})},args:{blockNode:!0,defaultExpandedKeys:["0-0","0-0-0","0-0-0-0"],draggable:!0,checkParents:!0,treeData:ve}},Ae=de(ke)`
  height: calc(100vh - 48px);
`,C={render:e=>r.createElement(Ae,{resizable:!0,resizeHandle:"right",padding:"medium"},r.createElement(p,{...e,Component:m,actionIcon:Le[e.actionIcon]})),args:{multiple:!0,treeData:ge,onActionClick:e=>alert("simple click to action. Returned node data."),renderAction:({children:e,node:t})=>t.key==="0-0"?r.createElement(r.Fragment,null,e):r.createElement("div",{onClick:n=>n.stopPropagation(),style:{position:"sticky",right:-8}},r.createElement(Te,{trigger:["click"],selectedItemsKeys:[],overlay:[{key:"edit",children:"Edit",onClick:()=>alert(`EDIT node with name ${t.title}`)},{key:"delete",children:"Delete",onClick:()=>alert(`DELETE node with name ${t.title}`)}]},e))},parameters:{actions:{argTypesRegex:"^(on.*)"},controls:{exclude:/(componentId|componentType|mode|theme)/}}},E={args:{source:{tree:le.tree}},render:e=>r.createElement(ie,{...e}),parameters:{controls:{include:/(source)/}}};var A,K,w;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <TreeWrapper {...args} Component={TreeList} />,
  args: {
    mode: 'multipleChoice',
    treeData: treeDataMock
  }
}`,...(w=(K=h.parameters)==null?void 0:K.docs)==null?void 0:w.source}}};var P,M,S;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <TreeWrapper {...args} Component={TreeList} />,
  args: {
    mode: 'multipleChoice',
    treeData: treeDataMock,
    showLine: true
  }
}`,...(S=(M=g.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var W,R,$;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(R=T.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var H,O,_;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var B,j,z;D.parameters={...D.parameters,docs:{...(B=D.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <TreeWrapper {...args} Component={TreeNav} />,
  args: {
    treeData: treeDataMock,
    showLine: true
  }
}`,...(z=(j=D.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var G,U,F;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
      exclude: /(componentId|componentType|dataTestId|mode|theme|treeData)/
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
      exclude: /(componentId|componentType|mode|theme)/
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
}`,...(ae=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const Wt=["TreeListBasic","TreeListWithLines","TreeListLoadDataAsynchronously","TreeNavBasic","TreeNavWithLines","TreeNavMultipleChoiceWithALotOfData","TreeNavLoadDataAsynchronously","TreeNavDraggable","TreeNavWithIconsInPanel","ColorTokens"];export{E as ColorTokens,h as TreeListBasic,T as TreeListLoadDataAsynchronously,g as TreeListWithLines,d as TreeNavBasic,f as TreeNavDraggable,k as TreeNavLoadDataAsynchronously,y as TreeNavMultipleChoiceWithALotOfData,C as TreeNavWithIconsInPanel,D as TreeNavWithLines,Wt as __namedExportsOrder,St as default};
