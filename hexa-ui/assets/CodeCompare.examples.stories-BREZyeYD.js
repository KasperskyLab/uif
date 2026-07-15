import{G as oe,a as n}from"./Grid-CDQgOgKy.js";import{H as y}from"./HelpMessage-B93eXAoX.js";import{R as r,r as t}from"./iframe-4-PRSI1I.js";import{C as re}from"./CodeCompare-BhVtyiAO.js";import{c as se}from"./CodeCompare.stories-CSpkScwT.js";import{g as o,a as e}from"./codeCompareStoryData-CvfggvGe.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-BZXGqesC.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-vUrjsNbx.js";import"./useMergedState-5V6OeSqY.js";import"./focus-C8_PqSex.js";import"./omit-DXgDXInf.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./TextReducer-JHIejSuK.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./index-C0IykO9V.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Toggle-Cpn23pdP.js";import"./AdditionalContent-CRQIPW1O.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-B3SARhhR.js";import"./index-B-OY55d_.js";import"./colors-DQ3Fg32p.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./ArrowRight-AkM1Q671.js";import"./v4-BoP187Zn.js";import"./ExpandUp-W56KOn6Z.js";import"./SettingsGear-Cqb3tsn_.js";import"./useTranslation-jUtuSwd5.js";import"./Select-Bfc69stS.js";import"./useGlobalStyles-B7OAA5LN.js";import"./index-8yXvUTGn.js";import"./addEventListener-DmCE5wjQ.js";import"./Portal-2eAsMGG9.js";import"./regeneratorRuntime-Co2DlCyH.js";import"./pickAttrs-ACVbvRAI.js";import"./List-CY7M4ryI.js";import"./Checkbox-C_Wci0Rq.js";import"./useId-B0iEqS7b.js";import"./generateId-BXJELych.js";import"./index-C07DIHtC.js";import"./index-zCYDgB3k.js";import"./IconSearch-P_ay4iUp.js";import"./Indicator-D1HJCmfp.js";import"./SearchActive-BuIUfH-Q.js";import"./blocks-yA_hxWl_.js";import"./ExpandAll-DF0CNyNo.js";import"./propPresentation-CfZ5yVim.js";import"./withMeta-BwOuJ6tr.js";import"./DocPageLayout-CZPyVaN8.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./resolveDesignControls-CL29RUJI.js";const u=s=>{const[F,J]=t.useState(s.oldVersion),[K,Q]=t.useState(s.newVersion),[T,X]=t.useState(s.oldValue),[Y,Z]=t.useState(s.newValue),ee=(C,w)=>{J(C),Q(w),X(o(C)),Z(o(w))};return r.createElement(re,{...s,oldVersion:F,newVersion:K,oldValue:T,newValue:Y,onVersionChange:ee})},lo={title:"Hexa UI Components/CodeCompare/Stories",component:u,tags:["!autodocs"],...se},i={args:{oldVersion:e()[0],newVersion:e()[1],options:e(),oldValue:o(e()[0]),newValue:o(e()[1])}},a={render:()=>{const s={oldVersion:e()[0],newVersion:e()[1],options:e(),oldValue:o(e()[0]),newValue:o(e()[8])};return r.createElement(oe,{layout:{cols:["140px 6fr"]},layoutProperty:{gap:32,alignItems:"center"}},r.createElement(n,null,r.createElement(y,{text:"compareMode = unified"})),r.createElement(n,null,r.createElement(u,{...s,compareMode:"unified"})),r.createElement(n,null,r.createElement(y,{text:"compareMode = split"})),r.createElement(n,null,r.createElement(u,{...s,compareMode:"split"})))}},p={args:{oldVersion:void 0,newVersion:void 0,options:e()}},V={args:{oldVersion:e()[0],newVersion:e()[6],options:e(),oldValue:o(e()[0]),newValue:o(e()[6])}},m={args:{oldVersion:e()[4],newVersion:e()[5],options:e(),oldValue:o(e()[4]),newValue:o(e()[5])}},d={args:{oldVersion:e()[6],newVersion:e()[1],options:e().slice(4),rightOptions:e().slice(0,-7),oldValue:o(e()[6]),newValue:o(e()[1])}},l={args:{oldVersion:e()[0],newVersion:e()[7],options:e(),loading:!0,oldValue:o(e()[0]),newValue:o(e()[7])}},g={args:{oldVersion:e()[0],newVersion:e()[1],options:e(),loading:!0,oldValue:o(e()[0]),newValue:o(e()[1])}},c={args:{oldVersion:e()[2],newVersion:e()[3],options:e(),oldValue:o(e()[2]),newValue:o(e()[3])}};var B,E,S;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[1],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[1])
  }
}`,...(S=(E=i.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var f,M,G;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(G=(M=a.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var I,h,x;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    oldVersion: undefined,
    newVersion: undefined,
    options: getVersions()
  }
}`,...(x=(h=p.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var H,O,W;V.parameters={...V.parameters,docs:{...(H=V.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[6],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[6])
  }
}`,...(W=(O=V.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var v,L,N;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[4],
    newVersion: getVersions()[5],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[4]),
    newValue: getCodeByVersion(getVersions()[5])
  }
}`,...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var R,P,q;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[6],
    newVersion: getVersions()[1],
    options: getVersions().slice(4),
    rightOptions: getVersions().slice(0, -7),
    oldValue: getCodeByVersion(getVersions()[6]),
    newValue: getCodeByVersion(getVersions()[1])
  }
}`,...(q=(P=d.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var _,U,$;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[7],
    options: getVersions(),
    loading: true,
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[7])
  }
}`,...($=(U=l.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var b,j,k;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[1],
    options: getVersions(),
    loading: true,
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[1])
  }
}`,...(k=(j=g.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var z,A,D;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[2],
    newVersion: getVersions()[3],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[2]),
    newValue: getCodeByVersion(getVersions()[3])
  }
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const go=["CodeCompare","CompareMode","NoValues","EqualValues","EmptyValues","RightOptions","NoValuesLoading","LoadingWithCode","ManyChanges"];export{i as CodeCompare,a as CompareMode,m as EmptyValues,V as EqualValues,g as LoadingWithCode,c as ManyChanges,p as NoValues,l as NoValuesLoading,d as RightOptions,go as __namedExportsOrder,lo as default};
