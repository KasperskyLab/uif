import{F as E}from"./Field-D3g66Aq-.js";import{c}from"./CustomItem-ByLji7L_.js";import{N as k}from"./Notification-D93o_TGl.js";import{r as o,R as a}from"./iframe-4-PRSI1I.js";import{I as p}from"./InputPassword-DhvDhl9J.js";import{i as y}from"./InputPassword.stories-BqbzlXnP.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-B3SARhhR.js";import"./TextReducer-JHIejSuK.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./HelpMessage-B93eXAoX.js";import"./Help-C_e3rqgL.js";import"./Menu-CTdhshoi.js";import"./Sider-CoxWa0of.js";import"./RightOutlined-DiymIenV.js";import"./ArrowRightMini-n3t_Sq3j.js";import"./useLocalization-45JHytlv.js";import"./Unpin-CY6_IcGm.js";import"./Submenu-BwQtOxwE.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./StatusOkSolid-D4PIpJ4i.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./Kira-BxHDJInH.js";import"./preload-helper-Dp1pzeXC.js";import"./useGlobalStyles-B7OAA5LN.js";import"./Button-D2E54Ulj.js";import"./Dropdown-BZXGqesC.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-vUrjsNbx.js";import"./useMergedState-5V6OeSqY.js";import"./focus-C8_PqSex.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./Toggle-Cpn23pdP.js";import"./AdditionalContent-CRQIPW1O.js";import"./ArrowRight-AkM1Q671.js";import"./button-DY_DOuYn.js";import"./IconResolver-CjN0_zDB.js";import"./Placeholder-DoG1ulbQ.js";import"./index-BQ6-O6_F.js";import"./SearchOutlined-p7LyB4Dy.js";import"./StatusNoThreadSolid-CUKz-e_F.js";import"./useThemedTextbox-Dn-Jpe9n.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BHoVbt8U.js";import"./useTranslation-jUtuSwd5.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";import"./resolveDesignControls-CL29RUJI.js";const x=[{message:"Пароль содержит от 8 до 256 символов.",validate:t=>t.length>=8&&t.length<=256},{message:`Пароль содержит символы как минимум трех групп из четырех:
- верхний регистр (A–Z);
- нижний регистр (a–z);
- цифры (0–9);
- специальные символы (@ # $ % ^ & * - _ ! + = [ ] { } | : ' , . ? / \\ \` ~ " ( ) );`,validate:t=>[/[A-Z]/.test(t),/[a-z]/.test(t),/[0-9]/.test(t),/[@#$%^&*\-_!+=[\]{}|:'",.?/\\`~"()]/.test(t)].filter(Boolean).length>=3},{message:'Пароль не содержит пробелов, символов Юникода или комбинаций "." и "@", расположенных рядом друг с другом.',validate:t=>!/[^\x20-\x7E]/.test(t)&&!t.includes(".@")&&!t.includes("@.")}],I=x.map(t=>({message:t.message,isValid:!1})),Zt={title:"Hexa UI Components/Inputs/InputPassword/Stories",component:p,tags:["!autodocs"],...y},i={render:t=>{const[e,s]=o.useState("");return a.createElement(p,{...t,value:e,onChange:s})}},n={render:t=>{const[e,s]=o.useState("kXp7*8$tE!R&2f"),[m,C]=o.useState(I);o.useEffect(()=>{C(x.map(r=>({message:r.message,isValid:r.validate?r.validate(e):!1})))},[e]);const u=o.useMemo(()=>m.every(r=>r.isValid),[m]),d=u?"success":"error";return a.createElement(E,{control:a.createElement(p,{...t,value:e,onChange:s,validationRules:m,validationStatus:d}),message:u?"Все требования к паролю выполнены":"Некорректный пароль",messageMode:d})},parameters:{design:"https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?item-id=39947:148357"}},l={render:t=>{const[e,s]=o.useState("");return a.createElement(a.Fragment,null,a.createElement(k,null),a.createElement(p,{...t,value:e,onChange:s,actions:[{tooltip:"Скопировать",icon:"Copy",onClick:()=>c("Пароль скопирован!")},{tooltip:"Сгенерировать надежный пароль",icon:"Key",onClick:()=>c("Пароль сгенерирован!")}]}))}};var g,v,V;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(h=l.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const $t=["Basic","WithValidation","WithActions"];export{i as Basic,l as WithActions,n as WithValidation,$t as __namedExportsOrder,Zt as default};
