import{M as m,r as t,R as s,H as L}from"./iframe-DedYZBTA.js";import{g as f,c as C}from"./propPresentation-BNIeMkgM.js";import{T as x}from"./Textbox-B-hgsSTM.js";import{M as S}from"./meta-BHPHLtV4.js";import{L as c}from"./LockGroup-BO_GeyOJ.js";const b=["warning"],I=["none",...b],T={title:"Заголовок",titleLevel:"H6",statusText:"Настройка доступна для редактирования",informationText:"Изменение настройки влияет на связанные элементы.",statusIcon:"warning",statusTooltip:"Внимание",isLockClosed:!1,isLockDisabled:!1,isLockStatusNotDefined:!1,isGroupDisabled:!1,isHideLock:!1,isHideControl:!1,isStandalone:!1,isChildrenOutlined:!1},d={isLockClosed:{control:"boolean",description:"Состояние замка и переключателя"},isLockDisabled:{control:"boolean",description:"Отключает переключатель замка"},isLockStatusNotDefined:{control:"boolean",description:"Показывает неопределённый статус и отключает переключатель"},isGroupDisabled:{control:"boolean",description:"Отключает дочерние элементы группы"},isHideLock:{control:"boolean",description:"Скрывает иконку замка"},isHideControl:{control:"boolean",description:"Скрывает блок статуса и переключатель"},isStandalone:{control:"boolean",description:"Показывает только блок управления замком"},isChildrenOutlined:{control:"boolean",description:"Добавляет рамку вокруг дочерних элементов"},title:{control:"text",description:"Заголовок группы"},titleLevel:{control:"select",description:"Уровень типографики заголовка",options:["H6","H5","H4"]},statusText:{control:"text",description:"Текст рядом с переключателем"},informationText:{control:"text",description:"Содержимое информационной подсказки"},statusIcon:{control:"select",description:"Иконка статуса перед замком",options:[...I]},statusTooltip:{control:"text",description:"Текст подсказки для иконки статуса"}},y=L.div`
  width: 100%;
`,G={argTypes:C(d),args:T,parameters:{badges:[m.stable],design:S.pixsoView}},H={title:"Hexa UI Components/LockGroup",component:c,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["lockGroupStorySettings"],...G},o={name:"Playground",render:({statusIcon:n,...e})=>{const[u,r]=t.useState(!1),[p,k]=t.useState("12345");return t.useEffect(()=>{r(!!e.isLockClosed)},[e.isLockClosed]),s.createElement(y,null,s.createElement(c,{...e,isLockClosed:u,onLockChange:r,statusIcon:n==="none"?void 0:n},s.createElement(x,{value:p,onChange:g=>k(String(g))})))},parameters:{controls:{include:f(d),sort:"none"}}};var a,l,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Playground',
  render: ({
    statusIcon,
    ...args
  }) => {
    const [isLockClosed, setIsLockClosed] = useState(false);
    const [textValue, setTextValue] = useState('12345');
    useEffect(() => {
      setIsLockClosed(!!args.isLockClosed);
    }, [args.isLockClosed]);
    return <Wrapper>
        <LockGroupComponent {...args} isLockClosed={isLockClosed} onLockChange={setIsLockClosed} statusIcon={statusIcon === 'none' ? undefined : statusIcon}>
          <Textbox value={textValue} onChange={value => setTextValue(String(value))} />
        </LockGroupComponent>
      </Wrapper>;
  },
  parameters: {
    controls: {
      include: getControlsInclude(lockGroupPropPresentation),
      sort: 'none'
    }
  }
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const P=["Playground"],O=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:P,default:H},Symbol.toStringTag,{value:"Module"}));export{O as L};
