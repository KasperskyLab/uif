import{T as re}from"./Palette-oU4WYbWy.js";import{b as A,R as e,c as ae,r as h,H as le,A as de}from"./iframe-zz6a49H8.js";import{w as ie}from"./withMeta-CjSZnBk7.js";import{s as ce}from"./helpers-BytZKRkB.js";import{b as w,B}from"./Button-Djh220XQ.js";import{l as ue}from"./Placeholder-Bv52avk_.js";import{M as p}from"./Modal-msj0Wrmn.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Buhf4xpe.js";import"./StatusOkOutline-BBn674wO.js";import"./Dropdown-D5otA5yN.js";import"./KeyCode-D_nTN6KT.js";import"./Overflow-8LRqTPgc.js";import"./focus-rl8Tx3sL.js";import"./type-CR-gS43P.js";import"./Loader-Y1gOuUZF.js";import"./index-BNCbYTB0.js";import"./Divider-DNO5OI2y.js";import"./ArrowRight-DPBBrE_M.js";import"./v4-BoP187Zn.js";import"./button-nrifPwP7.js";import"./wave-CA5Glh0A.js";import"./StatusWarningOutline-DZEZTt6V.js";import"./PortalWrapper-CaqowjBr.js";import"./Portal-BrF8T4Qt.js";import"./pickAttrs-BgtJ82nl.js";const pe={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},me="Modal",Me="Компонент Modal – это диалоговое окно, открывающееся поверх страницы или сайдбара.",he="Компонент Modal используется для отображения какой-либо информации или для подтверждения действия без перехода на другую страницу.",Be="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=31330%3A116977",ge="https://pixso.net/app/design/8mRvyvvdXtAEOVomS6hfwQ",v={dod:pe,component:me,description:Me,usage:he,designLink:Be,pixsoView:ge},se=`This is place holder text. The basic dialog for modals should contain only valuable and 
relevant information. Simplify dialogs by removing unnecessary elements or content that 
does not support user tasks. If you find that the number of required elements for your design 
are making the dialog excessively large, then try a different design solution. `,fe=e.createElement(ue,{klId:"button-icon"}),Ye={title:"Hexa UI Components/Modal",component:p,argTypes:{firstButtonText:{control:{type:"text"}},firstButtonMode:{control:{type:"select"},options:w},secondButtonText:{control:{type:"text"}},secondButtonMode:{control:{type:"select"},options:w},thirdButtonText:{control:{type:"text"}},thirdButtonMode:{control:{type:"select"},options:w},...ce(["theme","actions"])},args:{header:"Modal dialog",content:se,mode:"default",size:"small",firstButtonText:"OK",firstButtonMode:"primary",secondButtonText:"Cancel",secondButtonMode:"secondary",thirdButtonText:"Cancel",thirdButtonMode:"secondary",testId:"modal-test-id",klId:"modal-kl-id"},parameters:{badges:[A.stable,A.reviewedByDesign],docs:{page:ie(v)},design:v.pixsoView}},S=t=>{const{firstButtonText:o,firstButtonMode:s,secondButtonText:l,secondButtonMode:r,...i}=t,[M,a]=h.useState(!1),c=()=>{a(!0)},n=()=>{a(!1)},d=()=>{a(!1)},u={FIRST_ACTION:{text:o,mode:s,onClick:n},SECOND_ACTION:{text:l,mode:r,onClick:d}};return e.createElement(e.Fragment,null,e.createElement(B,{onClick:c},"Open Modal"),e.createElement(p,{...i,visible:M,actions:u,onCancel:d}))},g={render:S.bind({})},f={render:t=>e.createElement(p,{...t,visible:!0})},C={render:t=>{const{firstButtonText:o,firstButtonMode:s,secondButtonText:l,secondButtonMode:r,thirdButtonText:i,thirdButtonMode:M,...a}=t,[c,n]=h.useState(!1),d=()=>{n(!0)},u=()=>{n(!1)},m=()=>{n(!1)},y={FIRST_ACTION:{text:o,mode:s,onClick:u},SECOND_ACTION:{text:l,mode:r,onClick:m},THIRD_ACTION:{text:i,mode:M,onClick:m}};return e.createElement(e.Fragment,null,e.createElement(B,{onClick:d},"Open Modal"),e.createElement(p,{...a,visible:c,actions:y,onCancel:m}))}},T={render:t=>{const{firstButtonText:o,firstButtonMode:s,secondButtonText:l,secondButtonMode:r,thirdButtonText:i,thirdButtonMode:M,...a}=t,[c,n]=h.useState(!1),d=()=>{n(!0)},u=()=>{n(!1)};return e.createElement(e.Fragment,null,e.createElement(B,{onClick:d},"Open Modal"),e.createElement(p,{...a,visible:c,onCancel:u}))},args:{content:"Buttons are used for backwards compatibility, when using custom buttons it is recommended not to use actions prop",customButtons:Array.from({length:12}).map((t,o)=>({onClick:()=>alert(o),text:o.toString()}))}},O={render:S.bind({}),args:{header:"Long long long long long long long long long long modal dialog title",content:Array(20).join(se)}},x={render:t=>{const[o,s]=h.useState(!1),l=()=>{s(!0)},r=()=>{s(!1)},i=le.div`
      & {
        position: relative;
        pointer-events: auto;
  
        .modal-video-close-button {
          position: absolute;
          top: 10px;
          right: 10px;
        }
      }
    `;return e.createElement(e.Fragment,null,e.createElement(B,{onClick:l},"Open Modal"),e.createElement(p,{...t,visible:o,modalRender:()=>e.createElement(i,null,e.createElement(de,{onClick:r,className:"modal-video-close-button",mode:"filledInverted",size:"large"}),e.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/J0Hx0Pmfjb0?si=q6pOcK3TNrHBlnI0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})),onCancel:r}))}},b={render:t=>{const{firstButtonText:o,firstButtonMode:s,secondButtonText:l,secondButtonMode:r,thirdButtonText:i,thirdButtonMode:M,...a}=t,[c,n]=h.useState(!1),d=()=>{n(!0)},u=()=>{n(!1)},m=()=>{n(!1)},y={FIRST_ACTION:{text:o,mode:s,loading:!0,onClick:u},SECOND_ACTION:{text:l,mode:r,disabled:!0,iconAfter:fe,onClick:m}};return e.createElement(e.Fragment,null,e.createElement(B,{onClick:d},"Open Modal"),e.createElement(p,{...a,visible:c,actions:y,onCancel:m}))}},I={render:S.bind({}),args:{closable:!1}},k={args:{source:ae.modal},render:t=>e.createElement(re,{...t})};var E,N,_;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: ModalDefaultStory.bind({})
}`,...(_=(N=g.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var D,W,F;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args: WithButtonProps) => {
    return <Modal {...args} visible />;
  }
}`,...(F=(W=f.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var R,H,P;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args: WithButtonProps) => {
    const {
      firstButtonText,
      firstButtonMode,
      secondButtonText,
      secondButtonMode,
      thirdButtonText,
      thirdButtonMode,
      ...rest
    } = args;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const ActionsButtons: ModalProps['actions'] = {
      FIRST_ACTION: {
        text: firstButtonText,
        mode: firstButtonMode,
        onClick: handleOk
      },
      SECOND_ACTION: {
        text: secondButtonText,
        mode: secondButtonMode,
        onClick: handleCancel
      },
      THIRD_ACTION: {
        text: thirdButtonText,
        mode: thirdButtonMode,
        onClick: handleCancel
      }
    };
    return <>
        <Button onClick={showModal}>
          Open Modal
        </Button>
        <Modal {...rest} visible={isModalOpen} actions={ActionsButtons} onCancel={handleCancel} />
      </>;
  }
}`,...(P=(H=C.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var L,V,j;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: WithButtonProps) => {
    const {
      firstButtonText,
      firstButtonMode,
      secondButtonText,
      secondButtonMode,
      thirdButtonText,
      thirdButtonMode,
      ...rest
    } = args;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return <>
        <Button onClick={showModal}>
          Open Modal
        </Button>
        <Modal {...rest} visible={isModalOpen} onCancel={handleCancel} />
      </>;
  },
  args: {
    content: 'Buttons are used for backwards compatibility, when using custom buttons it is recommended not to use actions prop',
    customButtons: Array.from({
      length: 12
    }).map((_, index) => ({
      onClick: () => alert(index),
      text: index.toString()
    }))
  }
}`,...(j=(V=T.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var J,K,Y;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: ModalDefaultStory.bind({}),
  args: {
    header: 'Long long long long long long long long long long modal dialog title',
    content: Array(20).join(defaultText)
  }
}`,...(Y=(K=O.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var q,z,Q;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: (args: ModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const ModalContent = styled.div\`
      & {
        position: relative;
        pointer-events: auto;
  
        .modal-video-close-button {
          position: absolute;
          top: 10px;
          right: 10px;
        }
      }
    \`;
    return <>
        <Button onClick={showModal}>
          Open Modal
        </Button>
        <Modal {...args} visible={isModalOpen} modalRender={() => <ModalContent>
              <ActionButton onClick={handleCancel} className="modal-video-close-button" mode="filledInverted" size="large" />
              <iframe width="560" height="315" src="https://www.youtube.com/embed/J0Hx0Pmfjb0?si=q6pOcK3TNrHBlnI0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </ModalContent>} onCancel={handleCancel} />
      </>;
  }
}`,...(Q=(z=x.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var U,X,Z;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: (args: WithButtonProps) => {
    const {
      firstButtonText,
      firstButtonMode,
      secondButtonText,
      secondButtonMode,
      thirdButtonText,
      thirdButtonMode,
      ...rest
    } = args;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const ActionsButtons: ModalProps['actions'] = {
      FIRST_ACTION: {
        text: firstButtonText,
        mode: firstButtonMode,
        loading: true,
        onClick: handleOk
      },
      SECOND_ACTION: {
        text: secondButtonText,
        mode: secondButtonMode,
        disabled: true,
        iconAfter: defaultIcon,
        onClick: handleCancel
      }
    };
    return <>
        <Button onClick={showModal}>
          Open Modal
        </Button>
        <Modal {...rest} visible={isModalOpen} actions={ActionsButtons} onCancel={handleCancel} />
      </>;
  }
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var G,$,ee;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: ModalDefaultStory.bind({}),
  args: {
    closable: false
  }
}`,...(ee=($=I.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,oe;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    source: componentColors.modal
  },
  render: args => <ThemedPalette {...args} />
}`,...(oe=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const qe=["Basic","WithoutFooter","WithThreeActionButtons","WithCustomButtons","WithScrollAndLongTitle","CustomModalRender","WithLoadingAndDisableButtons","NonClosable","ColorTokens"];export{g as Basic,k as ColorTokens,x as CustomModalRender,I as NonClosable,T as WithCustomButtons,b as WithLoadingAndDisableButtons,O as WithScrollAndLongTitle,C as WithThreeActionButtons,f as WithoutFooter,qe as __namedExportsOrder,Ye as default};
