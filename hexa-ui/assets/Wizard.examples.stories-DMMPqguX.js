import{B as I}from"./Button-Dn3YNhT7.js";import{F as T}from"./index-BzNJfH8u.js";import{r as l,R as o}from"./iframe-DedYZBTA.js";import{W as p}from"./Wizard-CP9WQKMO.js";import"./Dropdown-C8Jtav0F.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BEs9Hbuo.js";import"./useMergedState-Rc5-DXZ5.js";import"./focus-CS35CTr_.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DWYHjndK.js";import"./Toggle-B_SlzXxU.js";import"./AdditionalContent-nPPwbP5q.js";import"./HelpMessage-BT7POId6.js";import"./type-8et6jEI2.js";import"./wave-MdFmrsKf.js";import"./FormLabel-a_agw1kt.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-BKPu3-sD.js";import"./TextReducer-DfctGdJH.js";import"./index-D9mMt9l0.js";import"./colors-BWEb3wBP.js";import"./Group-3Po5iaS9.js";import"./Divider-CSCFEdMt.js";import"./Loader-C9846UWr.js";import"./index-DlVZRnRV.js";import"./v4-BoP187Zn.js";import"./button-D1isEG_A.js";import"./Field-DDFvGKqW.js";import"./Help-CNwaf6Dz.js";import"./Markdown-Bfn0KgDg.js";import"./index-_nYjx9Ua.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Textbox-B-hgsSTM.js";import"./useGlobalStyles-DdWamh97.js";import"./InputMasked-Bbhb0bxg.js";import"./input-CAqmA_rE.js";import"./index-Chjiymov.js";import"./useThemedTextbox-CnXfBV1i.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Su5-ronh.js";import"./InputNumber-ZzYxxSm4.js";import"./index-DTSNSACu.js";import"./SearchOutlined-DnINVVX9.js";import"./InputPassword-C-5Li4PE.js";import"./StatusOkSolid-OcpnRZV_.js";import"./useTranslation-od-Kmf1k.js";import"./IconResolver-DW8XVFKA.js";import"./Placeholder-DXWNW80D.js";import"./ToggleButtonGroup-D4of78Bd.js";import"./ToggleButton-t01FaFnT.js";import"./generateId-BXJELych.js";import"./imaskDateOptionsGenerator-CuWnnqgb.js";import"./Uploader-CYtRJ9rM.js";import"./regeneratorRuntime-D6qV2PU5.js";import"./pickAttrs-C2PClXaq.js";import"./Upload-DbIY1HSO.js";import"./Delete-27yiPRcg.js";import"./Download2-CuwAL7pw.js";import"./Menu2-vNCkCt-I.js";import"./Reload-DfpUPU2e.js";import"./FileItem-DxEC4fKm.js";import"./Status-DG_v2bke.js";import"./Indicator-Bx9eTEZ-.js";import"./Checkbox-CNZ65EGY.js";import"./useId-D-iZuP_C.js";import"./index-RNU6oZ57.js";import"./index-B_L1GtX7.js";import"./SegmentedButton-B-fNJlic.js";import"./CodeViewer-BmyiNSrY.js";import"./ResizeInput-Bwz4NNbm.js";import"./StatusWarningSolid-BBMHc-36.js";import"./TimeInput-nsHDph6x.js";import"./RangePicker-DbMw3oSo.js";import"./RangeSeparator-DPMyZRJ-.js";import"./WithGlobalStyles-Dptm3X0S.js";import"./dateFns-Dx1vzaFu.js";import"./useThemedPicker-D5D4Rfgc.js";import"./ArrowRightMini-zdpqicP8.js";import"./index-SJNK96pD.js";import"./addEventListener-XwZ_2C5f.js";import"./Portal-CZOHXnhR.js";import"./Calendar-Bhrbz6cn.js";import"./Select-xZT8Da8H.js";import"./List-Dn04FqKX.js";import"./IconSearch-tU4SVZjn.js";import"./Radio-Cpvj7bye.js";import"./index-Cgmls7nb.js";import"./Search-D_lTkfoh.js";import"./StatusOkSolid-DqMfjLAK.js";import"./Modal-BClO_RqC.js";import"./PortalWrapper-CRoUwEST.js";import"./StatusOkOutline-b1x4d3lq.js";import"./Sidebar-t3wS3LLT.js";import"./useForceUpdate-3wDUnL8Y.js";import"./TextWithTruncation-9ZCEnufi.js";const u=o.createElement("div",{style:{textAlign:"right"}},"Footer Text Element"),C=()=>{const[e,r]=l.useState(!0),[i,s]=l.useState(""),[t,a]=l.useState(),n=b=>{/^\d+$/.test(b)?(r(!0),a(void 0)):(r(!1),a("Should contain only numbers")),s(b)};return[{name:"Step 1",onNext:()=>e,render:()=>o.createElement("div",null,"Step 1 content",o.createElement(T,{labelPosition:"before",items:[{label:"textbox with validation",message:t,control:{component:"textbox",placeholder:"hello",value:i,onChange:n,validationStatus:e?"default":"error"}},{label:"textbox-password",control:{component:"textbox-password"}}]}))},{name:"Step 2",render:()=>o.createElement("div",null,"Step 2 content")},{name:"Step 3",description:"Long long long long long long long long description",render:()=>o.createElement("div",null,"Step 3 content")},{name:"Step 4",description:"Description",render:()=>o.createElement("div",null,"Step 4 content")}]},St={title:"Hexa UI Components/Wizard/Stories",component:p,tags:["!autodocs"]},m={render:e=>{const r=C(),i=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(p,{view:"page",...e,steps:r,onFinish:i,onCancel:s,footerAdditionalElement:u})}},c={render:e=>{const r=C(),i=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(p,{view:"page",...e,steps:r,isVertical:!0,onFinish:i,onCancel:s,footerAdditionalElement:u})}},d={render:e=>{const[r,i]=l.useState(!1),s=C(),t=()=>{var n;(n=e.onFinish)==null||n.call(e),i(!1)},a=()=>{var n;(n=e.onCancel)==null||n.call(e),i(!1)};return o.createElement(o.Fragment,null,o.createElement(I,{onClick:()=>i(!0)},"Open wizard"),o.createElement(p,{view:"sidebar",...e,steps:s,sidebar:{title:"Wizard in sidebar",onClose:()=>i(!1),visible:r,zIndex:e["sidebar.zIndex"]},onFinish:t,onCancel:a,footerAdditionalElement:u}))},argTypes:{"sidebar.zIndex":{control:{type:"number"}}}},h={render:e=>{const[r,i]=l.useState(!1),s=C(),t=()=>{var n;(n=e.onFinish)==null||n.call(e),i(!1)},a=()=>{var n;(n=e.onCancel)==null||n.call(e),i(!1)};return o.createElement(o.Fragment,null,o.createElement(I,{onClick:()=>i(!0)},"Open wizard"),o.createElement(p,{view:"modal",...e,steps:s,modal:{title:"My title",visible:r},onFinish:t,onCancel:a,footerAdditionalElement:u}))}};var F,f,S;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const steps = useStepsWithValidation();
    const handleFinish = () => {
      args.onFinish?.();
      alert('Finished');
    };
    const handleCancel = () => {
      args.onCancel?.();
      alert('Cancelled');
    };
    return <WizardComponent view="page" {...args} steps={steps} onFinish={handleFinish} onCancel={handleCancel} footerAdditionalElement={footerText} />;
  }
}`,...(S=(f=m.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var x,E,V;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const steps = useStepsWithValidation();
    const handleFinish = () => {
      args.onFinish?.();
      alert('Finished');
    };
    const handleCancel = () => {
      args.onCancel?.();
      alert('Cancelled');
    };
    return <WizardComponent view="page" {...args} steps={steps} isVertical onFinish={handleFinish} onCancel={handleCancel} footerAdditionalElement={footerText} />;
  }
}`,...(V=(E=c.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var v,z,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [visible, setVisible] = useState(false);
    const steps = useStepsWithValidation();
    const handleFinish = () => {
      args.onFinish?.();
      setVisible(false);
    };
    const handleCancel = () => {
      args.onCancel?.();
      setVisible(false);
    };
    return <>
        <Button onClick={() => setVisible(true)}>Open wizard</Button>
        <WizardComponent view="sidebar" {...args} steps={steps} sidebar={{
        title: 'Wizard in sidebar',
        onClose: () => setVisible(false),
        visible,
        zIndex: args['sidebar.zIndex']
      }} onFinish={handleFinish} onCancel={handleCancel} footerAdditionalElement={footerText} />
      </>;
  },
  argTypes: {
    'sidebar.zIndex': {
      control: {
        type: 'number'
      }
    }
  }
}`,...(w=(z=d.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var W,A,y;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const [visible, setVisible] = useState(false);
    const steps = useStepsWithValidation();
    const handleFinish = () => {
      args.onFinish?.();
      setVisible(false);
    };
    const handleCancel = () => {
      args.onCancel?.();
      setVisible(false);
    };
    return <>
        <Button onClick={() => setVisible(true)}>Open wizard</Button>
        <WizardComponent view="modal" {...args} steps={steps} modal={{
        title: 'My title',
        visible
      }} onFinish={handleFinish} onCancel={handleCancel} footerAdditionalElement={footerText} />
      </>;
  }
}`,...(y=(A=h.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};const xt=["Page","PageVertical","Sidebar","Modal"];export{h as Modal,m as Page,c as PageVertical,d as Sidebar,xt as __namedExportsOrder,St as default};
