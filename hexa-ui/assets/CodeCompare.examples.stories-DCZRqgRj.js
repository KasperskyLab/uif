import{R as r,r as n}from"./iframe-DedYZBTA.js";import{C as te}from"./CodeCompare-DvaQ5C8C.js";import{c as ie}from"./CodeCompare.stories-DaQcrGOq.js";import{g as o,a as e}from"./codeCompareStoryData-CvfggvGe.js";import{G as ae,a as t}from"./Grid-y5IvP__E.js";import{H as B}from"./HelpMessage-BT7POId6.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-C8Jtav0F.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BEs9Hbuo.js";import"./useMergedState-Rc5-DXZ5.js";import"./focus-CS35CTr_.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DWYHjndK.js";import"./Toggle-B_SlzXxU.js";import"./AdditionalContent-nPPwbP5q.js";import"./type-8et6jEI2.js";import"./wave-MdFmrsKf.js";import"./FormLabel-a_agw1kt.js";import"./Tag-BKPu3-sD.js";import"./TextReducer-DfctGdJH.js";import"./index-D9mMt9l0.js";import"./colors-BWEb3wBP.js";import"./Group-3Po5iaS9.js";import"./Divider-CSCFEdMt.js";import"./Loader-C9846UWr.js";import"./index-DlVZRnRV.js";import"./v4-BoP187Zn.js";import"./SettingsGear-Cl0aLKMC.js";import"./useTranslation-od-Kmf1k.js";import"./Select-xZT8Da8H.js";import"./useGlobalStyles-DdWamh97.js";import"./index-SJNK96pD.js";import"./addEventListener-XwZ_2C5f.js";import"./Portal-CZOHXnhR.js";import"./regeneratorRuntime-D6qV2PU5.js";import"./pickAttrs-C2PClXaq.js";import"./List-Dn04FqKX.js";import"./IconSearch-tU4SVZjn.js";import"./Indicator-Bx9eTEZ-.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Checkbox-CNZ65EGY.js";import"./useId-D-iZuP_C.js";import"./generateId-BXJELych.js";import"./index-RNU6oZ57.js";import"./index-B_L1GtX7.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";import"./ExpandAll-CQoV-QHD.js";import"./propPresentation-BNIeMkgM.js";import"./withMeta-DvkmiJqW.js";import"./DocPageLayout-ZmDutUur.js";import"./SubComponents-bNxy1m5y.js";import"./TextWithTruncation-9ZCEnufi.js";import"./ArrowDownSolid-Ckv4ljMR.js";import"./ArrowRightSolid-ZNfuOHa8.js";import"./Badge-MGlXnKsn.js";import"./StatusOkOutline-b1x4d3lq.js";import"./Markdown-Bfn0KgDg.js";import"./index-_nYjx9Ua.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const C=s=>{const[T,X]=n.useState(s.oldVersion),[Y,Z]=n.useState(s.newVersion),[ee,oe]=n.useState(s.oldValue),[re,se]=n.useState(s.newValue),ne=(w,y)=>{X(w),Z(y),oe(o(w)),se(o(y))};return r.createElement(te,{...s,oldVersion:T,newVersion:Y,oldValue:ee,newValue:re,onVersionChange:ne})},wo={title:"Hexa UI Components/CodeCompare/Stories",component:C,tags:["!autodocs"],...ie},i={args:{oldVersion:e()[0],newVersion:e()[1],options:e(),oldValue:o(e()[0]),newValue:o(e()[1])}},a={render:()=>{const s={oldVersion:e()[0],newVersion:e()[1],options:e(),oldValue:o(e()[0]),newValue:o(e()[8])};return r.createElement(ae,{layout:{cols:["140px 6fr"]},layoutProperty:{gap:32,alignItems:"center"}},r.createElement(t,null,r.createElement(B,{text:"compareMode = unified"})),r.createElement(t,null,r.createElement(C,{...s,compareMode:"unified"})),r.createElement(t,null,r.createElement(B,{text:"compareMode = split"})),r.createElement(t,null,r.createElement(C,{...s,compareMode:"split"})))}},p={args:{oldVersion:void 0,newVersion:void 0,options:e()}},V={args:{oldVersion:e()[0],newVersion:e()[6],options:e(),oldValue:o(e()[0]),newValue:o(e()[6])}},d={args:{oldVersion:e()[4],newVersion:e()[5],options:e(),oldValue:o(e()[4]),newValue:o(e()[5])}},m={args:{oldVersion:e()[6],newVersion:e()[1],options:e().slice(4),rightOptions:e().slice(0,-7),oldValue:o(e()[6]),newValue:o(e()[1])}},l={args:{oldVersion:e()[0],newVersion:e()[7],options:e(),loading:!0,oldValue:o(e()[0]),newValue:o(e()[7])}},g={args:{oldVersion:e()[0],newVersion:e()[1],options:e(),loading:!0,oldValue:o(e()[0]),newValue:o(e()[1])}},c={tags:["skip-visual"],args:{oldVersion:e()[2],newVersion:e()[3],options:e(),oldValue:o(e()[2]),newValue:o(e()[3])}},u={args:{oldVersion:e()[0],newVersion:e()[1],options:e(),oldValue:o(e()[0]),newValue:o(e()[1]),readOnly:!0}};var S,E,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[1],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[1])
  }
}`,...(f=(E=i.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var M,G,I;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const props: CodeCompareProps = {
      oldVersion: getVersions()[0],
      newVersion: getVersions()[1],
      options: getVersions(),
      oldValue: getCodeByVersion(getVersions()[0]),
      newValue: getCodeByVersion(getVersions()[8])
    };
    return <Grid layout={{
      cols: ['140px 6fr']
    }} layoutProperty={{
      gap: 32,
      alignItems: 'center'
    }}>
        <GridItem>
          <HelpMessage text="compareMode = unified" />
        </GridItem>
        <GridItem>
          <CodeCompareVersionWrapper {...props} compareMode="unified" />
        </GridItem>
        <GridItem>
          <HelpMessage text="compareMode = split" />
        </GridItem>
        <GridItem>
          <CodeCompareVersionWrapper {...props} compareMode="split" />
        </GridItem>
      </Grid>;
  }
}`,...(I=(G=a.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var h,x,O;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    oldVersion: undefined,
    newVersion: undefined,
    options: getVersions()
  }
}`,...(O=(x=p.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var v,R,H;V.parameters={...V.parameters,docs:{...(v=V.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[6],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[6])
  }
}`,...(H=(R=V.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var W,L,N;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[4],
    newVersion: getVersions()[5],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[4]),
    newValue: getCodeByVersion(getVersions()[5])
  }
}`,...(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var P,k,q;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[6],
    newVersion: getVersions()[1],
    options: getVersions().slice(4),
    rightOptions: getVersions().slice(0, -7),
    oldValue: getCodeByVersion(getVersions()[6]),
    newValue: getCodeByVersion(getVersions()[1])
  }
}`,...(q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var _,U,$;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[7],
    options: getVersions(),
    loading: true,
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[7])
  }
}`,...($=(U=l.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var b,j,z;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[1],
    options: getVersions(),
    loading: true,
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[1])
  }
}`,...(z=(j=g.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var A,D,F;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  // Слишком большая сторя, => большой таймаут
  tags: ['skip-visual'],
  args: {
    oldVersion: getVersions()[2],
    newVersion: getVersions()[3],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[2]),
    newValue: getCodeByVersion(getVersions()[3])
  }
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[1],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[1]),
    readOnly: true
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const yo=["CodeCompare","CompareMode","NoValues","EqualValues","EmptyValues","RightOptions","NoValuesLoading","LoadingWithCode","ManyChanges","Readonly"];export{i as CodeCompare,a as CompareMode,d as EmptyValues,V as EqualValues,g as LoadingWithCode,c as ManyChanges,p as NoValues,l as NoValuesLoading,u as Readonly,m as RightOptions,yo as __namedExportsOrder,wo as default};
