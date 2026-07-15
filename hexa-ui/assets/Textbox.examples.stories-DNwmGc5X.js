import{T as B}from"./Palette-CL2qD4Vl.js";import{F}from"./Field-D3g66Aq-.js";import{c as b}from"./CustomItem-ByLji7L_.js";import{N as Z}from"./Notification-D93o_TGl.js";import{c as W,R as o,r as s}from"./iframe-4-PRSI1I.js";import{M as K}from"./migrationInputPassword-nIE-qw6m.js";import{T as n}from"./Textbox-Dh9d3MYi.js";import{t as X}from"./Textbox.stories-CWAJPftF.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-B3SARhhR.js";import"./TextReducer-JHIejSuK.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./HelpMessage-B93eXAoX.js";import"./Help-C_e3rqgL.js";import"./Menu-CTdhshoi.js";import"./Sider-CoxWa0of.js";import"./RightOutlined-DiymIenV.js";import"./ArrowRightMini-n3t_Sq3j.js";import"./useLocalization-45JHytlv.js";import"./Unpin-CY6_IcGm.js";import"./Submenu-BwQtOxwE.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./StatusOkSolid-D4PIpJ4i.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./Kira-BxHDJInH.js";import"./preload-helper-Dp1pzeXC.js";import"./useGlobalStyles-B7OAA5LN.js";import"./index-BQ6-O6_F.js";import"./SearchOutlined-p7LyB4Dy.js";import"./button-DY_DOuYn.js";import"./useMergedState-5V6OeSqY.js";import"./useThemedTextbox-Dn-Jpe9n.js";import"./typesHelpers-tpz7Of7L.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./useClassNamedTextbox-BHoVbt8U.js";import"./InputNumber-DjFWqf89.js";import"./KeyCode-c5NdJp32.js";import"./DownOutlined-Dw9vwDGv.js";import"./ArrowUpMicro-CYNyv5Qa.js";import"./InputPassword-DhvDhl9J.js";import"./Button-D2E54Ulj.js";import"./Dropdown-BZXGqesC.js";import"./isEqual-vUrjsNbx.js";import"./focus-C8_PqSex.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./Toggle-Cpn23pdP.js";import"./AdditionalContent-CRQIPW1O.js";import"./ArrowRight-AkM1Q671.js";import"./IconResolver-CjN0_zDB.js";import"./Placeholder-DoG1ulbQ.js";import"./StatusNoThreadSolid-CUKz-e_F.js";import"./useTranslation-jUtuSwd5.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";import"./resolveDesignControls-CL29RUJI.js";const j=e=>({Date:{mask:Date,lazy:!1,overwrite:!0,autofix:!0},Number:{mask:Number},Phone:{mask:"+7 (000) 000-00-00",lazy:!1,overwrite:!0,autofix:!0},Pattern:{mask:"{#}000[aaa]/NIC-`*[**]",lazy:!1,overwrite:!0,autofix:!0},Email:{mask:"NAME@HOST.CODE",blocks:{NAME:{mask:/^[a-zA-Z0-9_\-\.]*$/},HOST:{mask:/^[a-zA-Z0-9_\-]*$/},CODE:{mask:/^[a-zA-Zs\.]{1,8}$/}}},None:void 0,IP:{mask:"NUM.NUM.NUM.NUM",blocks:{NUM:{mask:/^[0-9]{1,3}$/}}},MAC:{mask:"MACAD:MACAD:MACAD:MACAD",blocks:{MACAD:{mask:/^[0-9a-f]{1,2}$/}},lazy:!1,overwrite:!0,autofix:!0}})[e],H=[{message:"Пароль содержит от 8 до 256 символов.",validate:e=>e.length>=8&&e.length<=256},{message:`Пароль содержит символы как минимум трех групп из четырех:
- верхний регистр (A–Z);
- нижний регистр (a–z);
- цифры (0–9);
- специальные символы (@ # $ % ^ & * - _ ! + = [ ] { } | : ' , . ? / \\ \` ~ " ( ) );`,validate:e=>[/[A-Z]/.test(e),/[a-z]/.test(e),/[0-9]/.test(e),/[@#$%^&*\-_!+=[\]{}|:'",.?/\\`~"()]/.test(e)].filter(Boolean).length>=3},{message:'Пароль не содержит пробелов, символов Юникода или комбинаций "." и "@", расположенных рядом друг с другом.',validate:e=>!/[^\x20-\x7E]/.test(e)&&!e.includes(".@")&&!e.includes("@.")}],q=H.map(e=>({message:e.message,isValid:!1})),pt={title:"Hexa UI Components/Inputs/Textbox/Stories",component:n,tags:["!autodocs"],...X},l={args:{showClearButton:!1}},m={render:({mask:e,...t})=>o.createElement(n.Masked,{maskOptions:j(e),...t}),argTypes:{mask:{control:{type:"select"},options:["None","Date","Number","Phone","Pattern","Email","IP","MAC"]}}},u={render:e=>{const[t,a]=s.useState();return o.createElement(n.Number,{...e,value:t,onChange:r=>a(r)})},args:{value:void 0},argTypes:{min:{control:"number",description:"The min value"},max:{control:"number",description:"The max value"},integerOnly:{control:"boolean",description:"Allow input of integers only"},allowEmpty:{control:"boolean",description:"Allow input have not the value"}}},p={render:e=>{const[t,a]=s.useState("");return o.createElement(n.Password,{...e,value:t,onChange:r=>a(r)})}},c={render:e=>{const[t,a]=s.useState("kXp7*8$tE!R&2f"),[r,U]=s.useState(q);s.useEffect(()=>{U(H.map(i=>({message:i.message,isValid:i.validate?i.validate(t):!1})))},[t]);const x=s.useMemo(()=>r.every(i=>i.isValid),[r]),v=x?"success":"error";return o.createElement(F,{control:o.createElement(n.Password,{...e,value:t,onChange:a,validationRules:r,validationStatus:v}),message:x?"Все требования к паролю выполнены":"Некорректный пароль",messageMode:v})},parameters:{design:K.pixsoView}},d={render:e=>{const[t,a]=s.useState("");return o.createElement(o.Fragment,null,o.createElement(Z,null),o.createElement(n.Password,{...e,value:t,onChange:a,actions:[{tooltip:"Скопировать",icon:"Copy",onClick:()=>b("Пароль скопирован!")},{tooltip:"Сгенерировать надежный пароль",icon:"Key",onClick:()=>b("Пароль сгенерирован!")}]}))}},g={args:{source:W.input_text},render:e=>o.createElement(B,{...e})};var k,f,T;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    showClearButton: false
  }
}`,...(T=(f=l.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var P,C,V;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: ({
    mask,
    ...args
  }: TextboxMaskedPropsForStory) => <Textbox.Masked maskOptions={getMaskOptions(mask)} {...args} />,
  argTypes: {
    mask: {
      control: {
        type: 'select'
      },
      options: ['None', 'Date', 'Number', 'Phone', 'Pattern', 'Email', 'IP', 'MAC']
    }
  }
}`,...(V=(C=m.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var w,h,M;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: TextboxNumberProps) => {
    const [value, setValue] = useState<TextboxNumberProps['value']>();
    return <Textbox.Number {...args} value={value} onChange={valueNumber => setValue(valueNumber)} />;
  },
  args: {
    value: undefined
  },
  argTypes: {
    min: {
      control: 'number',
      description: 'The min value'
    },
    max: {
      control: 'number',
      description: 'The max value'
    },
    integerOnly: {
      control: 'boolean',
      description: 'Allow input of integers only'
    },
    allowEmpty: {
      control: 'boolean',
      description: 'Allow input have not the value'
    }
  }
}`,...(M=(h=u.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var S,A,N;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('');
    return <Textbox.Password {...args} value={value} onChange={nextValue => setValue(nextValue)} />;
  }
}`,...(N=(A=p.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var E,y,R;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('kXp7*8$tE!R&2f');
    const [validationResult, setValidationResult] = useState(defaultValidationResult);
    useEffect(() => {
      setValidationResult(validationRules.map(rule => ({
        message: rule.message,
        isValid: rule.validate ? rule.validate(value) : false
      })));
    }, [value]);
    const isValid = useMemo(() => validationResult.every(r => r.isValid), [validationResult]);
    const validationStatus = isValid ? 'success' : 'error';
    return <Field control={<Textbox.Password {...args} value={value} onChange={setValue} validationRules={validationResult} validationStatus={validationStatus} />} message={isValid ? 'Все требования к паролю выполнены' : 'Некорректный пароль'} messageMode={validationStatus} />;
  },
  parameters: {
    design: MigrationInputPasswordData.pixsoView
  }
}`,...(R=(y=c.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var D,O,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('');
    return <>
        <Notification />
        <Textbox.Password {...args} value={value} onChange={setValue} actions={[{
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
}`,...(z=(O=d.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var $,I,_;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    source: componentColors.input_text
  },
  render: args => <ThemedPalette {...args} />
}`,...(_=(I=g.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const ct=["Basic","MaskedTextbox","NumberTextbox","PasswordTextbox","PasswordWithValidation","PasswordWithActions","ColorTokens"];export{l as Basic,g as ColorTokens,m as MaskedTextbox,u as NumberTextbox,p as PasswordTextbox,d as PasswordWithActions,c as PasswordWithValidation,ct as __namedExportsOrder,pt as default};
