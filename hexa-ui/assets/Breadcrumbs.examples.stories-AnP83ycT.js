import{T as x}from"./Palette-DXL8UiT3.js";import{r as H}from"./StoryComponents--bOGC0xv.js";import{c as W,R as i,r as c}from"./iframe-DedYZBTA.js";import{B as p}from"./Breadcrumbs-DG0vgmIh.js";import{g as T}from"./helpers-CTig38oc.js";import{b as P}from"./Breadcrumbs.stories-Bz2PGDux.js";import"./FormLabel-a_agw1kt.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-BKPu3-sD.js";import"./TextReducer-DfctGdJH.js";import"./index-D9mMt9l0.js";import"./omit-DXgDXInf.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./wave-MdFmrsKf.js";import"./Group-3Po5iaS9.js";import"./Divider-CSCFEdMt.js";import"./Dropdown-C8Jtav0F.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BEs9Hbuo.js";import"./useMergedState-Rc5-DXZ5.js";import"./focus-CS35CTr_.js";import"./ArrowRight-DWYHjndK.js";import"./Toggle-B_SlzXxU.js";import"./AdditionalContent-nPPwbP5q.js";import"./HelpMessage-BT7POId6.js";import"./Loader-C9846UWr.js";import"./index-DlVZRnRV.js";import"./v4-BoP187Zn.js";import"./Menu3-CAgzKlIF.js";import"./propPresentation-BNIeMkgM.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";import"./withMeta-DvkmiJqW.js";import"./DocPageLayout-ZmDutUur.js";import"./SubComponents-bNxy1m5y.js";import"./TextWithTruncation-9ZCEnufi.js";import"./ArrowDownSolid-Ckv4ljMR.js";import"./ArrowRightSolid-ZNfuOHa8.js";import"./Badge-MGlXnKsn.js";import"./Indicator-Bx9eTEZ-.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./StatusOkOutline-b1x4d3lq.js";import"./Grid-y5IvP__E.js";import"./Markdown-Bfn0KgDg.js";import"./index-_nYjx9Ua.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const h=T(),M=["medium","small"],Er={title:"Hexa UI Components/Breadcrumbs/Stories",component:p,tags:["!autodocs"],...P},s={args:{routes:h}},a={render:r=>{const[e,y]=c.useState(h),E=c.useCallback(o=>{y(t=>r.size==="medium"?t.slice(0,o+1):t.slice(0,o))},[r.size]);return i.createElement(p,{...r,routes:e.map((o,t)=>({...o,onClick:()=>E(t)}))})}},m={render:r=>H(M.map(e=>({label:e,content:i.createElement(p,{...r,size:e})}))),argTypes:{size:{control:!1}},args:{routes:T(5)}},n={args:{source:W.breadcrumbs},render:r=>i.createElement(x,{...r})};var u,d,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    routes: storyRoutes
  }
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,b,R;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [routes, setRoutes] = useState<Route[]>(storyRoutes);
    const onClickHandler = useCallback((i: number) => {
      setRoutes(currentRoutes => args.size === 'medium' ? currentRoutes.slice(0, i + 1) : currentRoutes.slice(0, i));
    }, [args.size]);
    return <BreadcrumbsComponent {...args} routes={routes.map((route, i) => ({
      ...route,
      onClick: () => onClickHandler(i)
    }))} />;
  }
}`,...(R=(b=a.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var C,z,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: BreadcrumbsProps) => renderVariants(breadcrumbsSizes.map(size => ({
    label: size,
    content: <BreadcrumbsComponent {...args} size={size} />
  })), true),
  argTypes: {
    size: {
      control: false
    }
  },
  args: {
    routes: generateRoutes(5)
  }
}`,...(S=(z=m.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var f,k,B;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    source: componentColors.breadcrumbs
  },
  render: args => <ThemedPalette {...args} />
}`,...(B=(k=n.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const xr=["WithMoreButton","WithRouting","Size","ColorTokens"];export{n as ColorTokens,m as Size,s as WithMoreButton,a as WithRouting,xr as __namedExportsOrder,Er as default};
