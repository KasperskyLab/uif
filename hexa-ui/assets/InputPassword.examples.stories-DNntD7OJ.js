import{F as E}from"./Field-DDFvGKqW.js";import{c}from"./CustomItem-Y0uyui3-.js";import{r as s,R as a}from"./iframe-DedYZBTA.js";import{I as p}from"./InputPassword-C-5Li4PE.js";import{i as k}from"./InputPassword.stories-B1Y3crgY.js";import{N as y}from"./Notification-z-FH90IU.js";import"./Help-CNwaf6Dz.js";import"./FormLabel-a_agw1kt.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-BKPu3-sD.js";import"./TextReducer-DfctGdJH.js";import"./index-D9mMt9l0.js";import"./omit-DXgDXInf.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./wave-MdFmrsKf.js";import"./Group-3Po5iaS9.js";import"./Markdown-Bfn0KgDg.js";import"./index-_nYjx9Ua.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./HelpMessage-BT7POId6.js";import"./Menu-D-9EhFFp.js";import"./Sider-BrE3ju6i.js";import"./RightOutlined-DqJ4jJl3.js";import"./ArrowRightMini-zdpqicP8.js";import"./Submenu-DH5AzpW9.js";import"./SubComponents-bNxy1m5y.js";import"./TextWithTruncation-9ZCEnufi.js";import"./ArrowDownSolid-Ckv4ljMR.js";import"./ArrowRightSolid-ZNfuOHa8.js";import"./Divider-CSCFEdMt.js";import"./Badge-MGlXnKsn.js";import"./Indicator-Bx9eTEZ-.js";import"./StatusOkSolid-OcpnRZV_.js";import"./useTranslation-od-Kmf1k.js";import"./NotificationService-srLTRq3q.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./useGlobalStyles-DdWamh97.js";import"./Button-Dn3YNhT7.js";import"./Dropdown-C8Jtav0F.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BEs9Hbuo.js";import"./useMergedState-Rc5-DXZ5.js";import"./focus-CS35CTr_.js";import"./ArrowRight-DWYHjndK.js";import"./Toggle-B_SlzXxU.js";import"./AdditionalContent-nPPwbP5q.js";import"./Loader-C9846UWr.js";import"./index-DlVZRnRV.js";import"./button-D1isEG_A.js";import"./index-DTSNSACu.js";import"./SearchOutlined-DnINVVX9.js";import"./useThemedTextbox-CnXfBV1i.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Su5-ronh.js";import"./IconResolver-DW8XVFKA.js";import"./Placeholder-DXWNW80D.js";import"./propPresentation-BNIeMkgM.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";import"./resolveDesignControls-CFhBuB_d.js";const x=[{message:"Пароль содержит от 8 до 256 символов.",validate:t=>t.length>=8&&t.length<=256},{message:`Пароль содержит символы как минимум трех групп из четырех:
- верхний регистр (A–Z);
- нижний регистр (a–z);
- цифры (0–9);
- специальные символы (@ # $ % ^ & * - _ ! + = [ ] { } | : ' , . ? / \\ \` ~ " ( ) );`,validate:t=>[/[A-Z]/.test(t),/[a-z]/.test(t),/[0-9]/.test(t),/[@#$%^&*\-_!+=[\]{}|:'",.?/\\`~"()]/.test(t)].filter(Boolean).length>=3},{message:'Пароль не содержит пробелов, символов Юникода или комбинаций "." и "@", расположенных рядом друг с другом.',validate:t=>!/[^\x20-\x7E]/.test(t)&&!t.includes(".@")&&!t.includes("@.")}],I=x.map(t=>({message:t.message,isValid:!1})),Mt={title:"Hexa UI Components/Inputs/InputPassword/Stories",component:p,tags:["!autodocs"],...k},i={render:t=>{const[e,o]=s.useState("");return a.createElement(p,{...t,value:e,onChange:o})}},n={render:t=>{const[e,o]=s.useState("kXp7*8$tE!R&2f"),[m,C]=s.useState(I);s.useEffect(()=>{C(x.map(r=>({message:r.message,isValid:r.validate?r.validate(e):!1})))},[e]);const u=s.useMemo(()=>m.every(r=>r.isValid),[m]),d=u?"success":"error";return a.createElement(E,{control:a.createElement(p,{...t,value:e,onChange:o,validationRules:m,validationStatus:d}),message:u?"Все требования к паролю выполнены":"Некорректный пароль",messageMode:d})},parameters:{design:"https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?item-id=39947:148357"}},l={render:t=>{const[e,o]=s.useState("");return a.createElement(a.Fragment,null,a.createElement(y,null),a.createElement(p,{...t,value:e,onChange:o,actions:[{tooltip:"Скопировать",icon:"Copy",onClick:()=>c("Пароль скопирован!")},{tooltip:"Сгенерировать надежный пароль",icon:"Key",onClick:()=>c("Пароль сгенерирован!")}]}))}};var g,v,V;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('');
    return <InputPassword {...args} value={value} onChange={setValue} />;
  }
}`,...(V=(v=i.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var f,S,R;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('kXp7*8$tE!R&2f');
    const [validationResult, setValidationResult] = useState(defaultInputPasswordValidationResult);
    useEffect(() => {
      setValidationResult(inputPasswordValidationRules.map(rule => ({
        message: rule.message,
        isValid: rule.validate ? rule.validate(value) : false
      })));
    }, [value]);
    const isValid = useMemo(() => validationResult.every(r => r.isValid), [validationResult]);
    const validationStatus = isValid ? 'success' : 'error';
    return <Field control={<InputPassword {...args} value={value} onChange={setValue} validationRules={validationResult} validationStatus={validationStatus} />} message={isValid ? 'Все требования к паролю выполнены' : 'Некорректный пароль'} messageMode={validationStatus} />;
  },
  parameters: {
    design: 'https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?item-id=39947:148357'
  }
}`,...(R=(S=n.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var P,h,w;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('');
    return <>
        <Notification />
        <InputPassword {...args} value={value} onChange={setValue} actions={[{
        tooltip: 'Скопировать',
        icon: 'Copy',
        onClick: () => clickHandler('Пароль скопирован!')
      }, {
        tooltip: 'Сгенерировать надежный пароль',
        icon: 'Key',
        onClick: () => clickHandler('Пароль сгенерирован!')
      }]} />
      </>;
  }
}`,...(w=(h=l.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const Yt=["Basic","WithValidation","WithActions"];export{i as Basic,l as WithActions,n as WithValidation,Yt as __namedExportsOrder,Mt as default};
