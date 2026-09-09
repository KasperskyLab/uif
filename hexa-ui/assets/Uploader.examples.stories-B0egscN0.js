import{T as A}from"./Palette-DXL8UiT3.js";import{S as o}from"./Warnings-HAXwamkf.js";import{r as G}from"./StoryComponents--bOGC0xv.js";import{B as q}from"./Button-Dn3YNhT7.js";import{F as J}from"./Field-DDFvGKqW.js";import{c as S,R as e,a as E,P as m,T as N}from"./iframe-DedYZBTA.js";import{U as s}from"./Uploader-CYtRJ9rM.js";import{u as Q}from"./Uploader.stories-C23M8s7P.js";import{S as W}from"./Sidebar-t3wS3LLT.js";import"./Tag-BKPu3-sD.js";import"./TextReducer-DfctGdJH.js";import"./index-D9mMt9l0.js";import"./omit-DXgDXInf.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./wave-MdFmrsKf.js";import"./Group-3Po5iaS9.js";import"./FormLabel-a_agw1kt.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-CSCFEdMt.js";import"./Dropdown-C8Jtav0F.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BEs9Hbuo.js";import"./useMergedState-Rc5-DXZ5.js";import"./focus-CS35CTr_.js";import"./ArrowRight-DWYHjndK.js";import"./Toggle-B_SlzXxU.js";import"./AdditionalContent-nPPwbP5q.js";import"./HelpMessage-BT7POId6.js";import"./Loader-C9846UWr.js";import"./index-DlVZRnRV.js";import"./v4-BoP187Zn.js";import"./button-D1isEG_A.js";import"./Help-CNwaf6Dz.js";import"./Markdown-Bfn0KgDg.js";import"./index-_nYjx9Ua.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./regeneratorRuntime-D6qV2PU5.js";import"./pickAttrs-C2PClXaq.js";import"./Upload-DbIY1HSO.js";import"./Delete-27yiPRcg.js";import"./Download2-CuwAL7pw.js";import"./Menu2-vNCkCt-I.js";import"./Reload-DfpUPU2e.js";import"./FileItem-DxEC4fKm.js";import"./useTranslation-od-Kmf1k.js";import"./propPresentation-BNIeMkgM.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";import"./meta-DGlVGJ6F.js";import"./PortalWrapper-CRoUwEST.js";import"./Portal-CZOHXnhR.js";import"./useForceUpdate-3wDUnL8Y.js";import"./TextWithTruncation-9ZCEnufi.js";const Ze={title:"Hexa UI Components/Uploader/Stories",component:s,tags:["!autodocs"],...Q},d={render:t=>G(["small","medium"].map(a=>({label:a,content:e.createElement(s,{...t,size:a})}))),argTypes:{size:{control:!1}}},c={...d,args:{disabled:!0}},p={render:t=>e.createElement(s,{...t}),args:{description:"1 file, size up to 100KB",maxCount:1,maxTotalSize:100*1024}},u={render:t=>{const a=e.useRef(),[l,n]=e.useState([]);return e.createElement("div",{style:{width:"100%"}},e.createElement(E,{closable:!1,mode:"info"},e.createElement(m,null,"You can disable the automatic upload by setting ",e.createElement(o,null,"manual")," prop and start the upload of the selected files manually, e.g. by click on your own button."),e.createElement(m,null,"Вы можете отключить автоматическую загрузку, установив параметр ",e.createElement(o,null,"manual"),", и начать загрузку выбранных файлов вручную, например, нажав на свою кнопку.")),e.createElement(s,{...t,ref:a,onChange:r=>{var i;n(r.fileList),(i=t.onChange)==null||i.call(t,r)},style:{marginTop:16}}),e.createElement(q,{loading:l.some(r=>r.status==="uploading"),onClick:()=>a.current.upload(),style:{marginTop:16}},"Upload"))},args:{description:"The files will be uploaded to the server after clicking on the Upload button",manual:!0}};function X({children:t,style:a,...l}){return e.createElement("div",{...l,style:{border:"1px solid grey",height:520,padding:20,position:"relative",...a}},e.createElement(N,{style:{background:"white",padding:"0 5px",position:"absolute",left:0,top:0,transform:"translate(10px, -50%"}},"Container"),t)}const g={render:({fileList:t,...a})=>{const[l,n]=e.useState(t);return e.createElement("div",{style:{width:"100%"}},e.createElement(E,{closable:!1,mode:"info"},e.createElement(m,null,"You can gain full control over the file list if needed. Enable ",e.createElement(o,null,"manual"),"and pass the necessary data to ",e.createElement(o,null,"fileList")," prop. You may want it if you need",e.createElement("ul",{style:{marginBottom:0}},e.createElement("li",null,"to display data previously got from backend;"),e.createElement("li",null,"a custom handler to upload the selected files."))),e.createElement(m,null,"Вы можете самостоятельно управлять списком файлов, если необходимо. Включите ",e.createElement(o,null,"manual"),"и передайте необходимые данные в проп ",e.createElement(o,null,"fileList"),". Это может понадобится, если вам",e.createElement("ul",{style:{marginBottom:0}},e.createElement("li",null,"нужно отобразить данные ранее полученные от бэкенда;"),e.createElement("li",null,"нужен кастомный обработчик для загрузки файлов.")))),e.createElement(s,{...a,fileList:l,onChange:r=>{var i;n(r.fileList),(i=a.onChange)==null||i.call(a,r)},style:{marginTop:16}}))},args:{fileList:[{uid:"xxx_1",name:"file_name_1.png",size:500*1024*1024,status:"success"},{uid:"xxx_2",name:"file_name_2.png",percent:45,size:150*1024,status:"uploading"}],manual:!0,maxFileSize:320*1024}},f={render:()=>{const[t,a]=e.useState([]),[l,n]=e.useState(void 0);function r(){t.length===0?n("Upload a file to conitniue"):n("Something went wrong. Try again")}return e.createElement(W,{footerLeft:e.createElement(e.Fragment,null,e.createElement(q,{onClick:r},"Import")),size:"small",title:"Import a policy",visible:!0},e.createElement(J,{control:e.createElement(s,{description:"Select a file to import a policy",fileList:t,manual:!0,maxCount:1,onChange:i=>{n(void 0),a(i.fileList)},validationStatus:l?"error":void 0}),message:l}))}},y={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement(E,{closable:!1,mode:"info"},e.createElement(m,null,"You can extend the height of ",e.createElement(o,null,"Uploader")," to the height of the container by setting ",e.createElement(o,null,"fullHeight")," prop."),e.createElement(m,null,"Вы можете увеличить высоту ",e.createElement(o,null,"Uploader")," до высоты контейнера, установив параметр ",e.createElement(o,null,"fullHeight"),".")),e.createElement(X,{style:{marginTop:16}},e.createElement(s,{...t}))),args:{fullHeight:!0}},h={args:{source:{upload:S.upload,upload_header:S.upload_header,upload_file:S.upload_file}},render:t=>e.createElement(A,{...t})};var T,b,x;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => renderVariants((['small', 'medium'] as const).map(size => ({
    label: size,
    content: <Uploader {...args} size={size} />
  })), true),
  argTypes: {
    size: {
      control: false
    }
  }
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var C,v,U;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Size,
  args: {
    disabled: true
  }
}`,...(U=(v=c.parameters)==null?void 0:v.docs)==null?void 0:U.source}}};var F,L,_;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <Uploader {...args} />,
  args: {
    description: '1 file, size up to 100KB',
    maxCount: 1,
    maxTotalSize: 100 * 1024
  }
}`,...(_=(L=p.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var z,w,P;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const ref = React.useRef<any>();
    const [files, setFiles] = React.useState<UploadFile[]>([]);
    return <div style={{
      width: '100%'
    }}>
        <SectionMessage closable={false} mode="info">
          <P>
            You can disable the automatic upload by setting <StyledTag>manual</StyledTag> prop and start
            the upload of the selected files manually, e.g. by click on your own button.
          </P>
          <P>
            Вы можете отключить автоматическую загрузку, установив параметр <StyledTag>manual</StyledTag>,
            и начать загрузку выбранных файлов вручную, например, нажав на свою кнопку.
          </P>
        </SectionMessage>
        <Uploader {...args} ref={ref} onChange={info => {
        setFiles(info.fileList);
        args.onChange?.(info);
      }} style={{
        marginTop: 16
      }} />
        <Button loading={files.some(x => x.status === 'uploading')} onClick={() => ref.current.upload()} style={{
        marginTop: 16
      }}>
          Upload
        </Button>
      </div>;
  },
  args: {
    description: 'The files will be uploaded to the server after clicking on the Upload button',
    manual: true
  }
}`,...(P=(w=u.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var k,B,H;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: ({
    fileList,
    ...args
  }) => {
    const [files, setFiles] = React.useState<UploadFile[] | undefined>(fileList);
    return <div style={{
      width: '100%'
    }}>
        <SectionMessage closable={false} mode="info">
          <P>
            You can gain full control over the file list if needed. Enable <StyledTag>manual</StyledTag>
            and pass the necessary data to <StyledTag>fileList</StyledTag> prop. You may want it if you need
            <ul style={{
            marginBottom: 0
          }}>
              <li>to display data previously got from backend;</li>
              <li>a custom handler to upload the selected files.</li>
            </ul>
          </P>
          <P>
            Вы можете самостоятельно управлять списком файлов, если необходимо. Включите <StyledTag>manual</StyledTag>
            и передайте необходимые данные в проп <StyledTag>fileList</StyledTag>. Это может понадобится,
            если вам
            <ul style={{
            marginBottom: 0
          }}>
              <li>нужно отобразить данные ранее полученные от бэкенда;</li>
              <li>нужен кастомный обработчик для загрузки файлов.</li>
            </ul>
          </P>
        </SectionMessage>

        <Uploader {...args} fileList={files} onChange={info => {
        setFiles(info.fileList);
        args.onChange?.(info);
      }} style={{
        marginTop: 16
      }} />
      </div>;
  },
  args: {
    fileList: [{
      uid: 'xxx_1',
      name: 'file_name_1.png',
      size: 500 * 1024 * 1024,
      status: 'success'
    }, {
      uid: 'xxx_2',
      name: 'file_name_2.png',
      percent: 45,
      size: 150 * 1024,
      status: 'uploading'
    }],
    manual: true,
    maxFileSize: 320 * 1024
  }
}`,...(H=(B=g.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var M,R,Y;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = React.useState<UploadFile[]>([]);
    const [error, setError] = React.useState<string | undefined>(undefined);
    function onSubmit() {
      if (files.length === 0) {
        setError('Upload a file to conitniue');
      } else {
        setError('Something went wrong. Try again');
      }
    }
    return <Sidebar footerLeft={<>
            <Button onClick={onSubmit}>Import</Button>
          </>} size="small" title="Import a policy" visible>
        <Field control={<Uploader description="Select a file to import a policy" fileList={files} manual maxCount={1} onChange={info => {
        setError(undefined);
        setFiles(info.fileList);
      }} validationStatus={error ? 'error' : undefined} />} message={error} />
      </Sidebar>;
  }
}`,...(Y=(R=f.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var I,V,O;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '100%'
  }}>
      <SectionMessage closable={false} mode="info">
        <P>
          You can extend the height of <StyledTag>Uploader</StyledTag> to the height of the container by
          setting <StyledTag>fullHeight</StyledTag> prop.
        </P>
        <P>
          Вы можете увеличить высоту <StyledTag>Uploader</StyledTag> до высоты контейнера, установив
          параметр <StyledTag>fullHeight</StyledTag>.
        </P>
      </SectionMessage>
      <Container style={{
      marginTop: 16
    }}>
        <Uploader {...args} />
      </Container>
    </div>,
  args: {
    fullHeight: true
  }
}`,...(O=(V=y.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var D,K,j;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    source: {
      upload: componentColors.upload,
      upload_header: componentColors.upload_header,
      upload_file: componentColors.upload_file
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(j=(K=h.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};const $e=["Size","Disabled","SingleFile","ManualUpload","ControlOverFileList","Validation","FullHeight","ColorTokens"];export{h as ColorTokens,g as ControlOverFileList,c as Disabled,y as FullHeight,u as ManualUpload,p as SingleFile,d as Size,f as Validation,$e as __namedExportsOrder,Ze as default};
