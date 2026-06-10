import{T as z}from"./Palette-jA6_Pfdr.js";import{b as m,R,c as H,r as i}from"./iframe-BTqAWtZ7.js";import{w as M}from"./withMeta-CcVYKngh.js";import{s as S}from"./helpers-BytZKRkB.js";import{M as n}from"./meta-Cvvos0XE.js";import{B as f}from"./Breadcrumbs-C3hO5lC2.js";import{g as w}from"./helpers-CTig38oc.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-CG1GRMfV.js";import"./StatusOkOutline-lrTYU_cr.js";import"./Dropdown-CnlNBihq.js";import"./KeyCode-Bslz2nuw.js";import"./Overflow-YfqnCquf.js";import"./focus-iTloRQcb.js";import"./type-Qe6Yz0Sh.js";import"./Loader-GevLMjlq.js";import"./index-BxRvj_MD.js";import"./Divider-KPnt62j1.js";import"./ArrowRight-BECW_anK.js";import"./v4-BoP187Zn.js";import"./Menu3-14PZSC-7.js";const h=w(),X={title:"Hexa UI Components/Breadcrumbs",component:f,argTypes:{...S(["theme"])},args:{testId:"breadcrumbs-test-id",klId:"breadcrumbs-kl-id",size:"medium",routes:h},parameters:{badges:[m.stable,m.reviewedByDesign],docs:{page:M(n)},design:n.pixsoView}},o={},t={render:e=>{const[B,T]=i.useState(h),x=i.useCallback(r=>{T(s=>e.size==="medium"?s.slice(0,r+1):s.slice(0,r))},[e.size]);return R.createElement(f,{...e,routes:B.map((r,s)=>({...r,onClick:()=>x(s)}))})}},a={args:{source:H.breadcrumbs},render:e=>R.createElement(z,{...e})};var c,u,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [routes, setRoutes] = useState<Route[]>(storyRoutes);
    const onClickHandler = useCallback(i => {
      setRoutes(routes => args.size === 'medium' ? routes.slice(0, i + 1) : routes.slice(0, i));
    }, [args.size]);
    return <Breadcrumbs {...args} routes={routes.map((route, i) => ({
      ...route,
      onClick: () => onClickHandler(i)
    }))} />;
  }
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var b,C,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    source: componentColors.breadcrumbs
  },
  render: args => <ThemedPalette {...args} />
}`,...(k=(C=a.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const Y=["WithMoreButton","WithRouting","ColorTokens"];export{a as ColorTokens,o as WithMoreButton,t as WithRouting,Y as __namedExportsOrder,X as default};
