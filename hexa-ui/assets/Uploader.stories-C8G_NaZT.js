import{T as $}from"./Palette-CL2qD4Vl.js";import{c as E,R as e,a as b,P as s,T as ee,G as T}from"./iframe-4-PRSI1I.js";import{w as te}from"./withDesignControls-DTwO-e1q.js";import{w as ae}from"./withMeta-BwOuJ6tr.js";import{S as i}from"./Warnings-i-859-qY.js";import{r as re}from"./StoryComponents-BWv8uEx9.js";import{B as Q}from"./Button-D2E54Ulj.js";import{F as oe}from"./Field-D3g66Aq-.js";import{S as le}from"./Sidebar-C9UThsQ5.js";import{M as x}from"./meta-det7SGTC.js";import{U as m}from"./Uploader-BwXgm9zU.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./Tag-B3SARhhR.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./FormLabel-CoXJxjwh.js";import"./Dropdown-BZXGqesC.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-vUrjsNbx.js";import"./useMergedState-5V6OeSqY.js";import"./focus-C8_PqSex.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./Toggle-Cpn23pdP.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./ArrowRight-AkM1Q671.js";import"./v4-BoP187Zn.js";import"./button-DY_DOuYn.js";import"./Help-C_e3rqgL.js";import"./PortalWrapper-JelOD9qP.js";import"./Portal-2eAsMGG9.js";import"./useForceUpdate-CA8tDWq_.js";import"./regeneratorRuntime-Co2DlCyH.js";import"./pickAttrs-ACVbvRAI.js";import"./Upload-ojKDAzK2.js";import"./Delete-CDlfwLSW.js";import"./Download2-BjY7BZyL.js";import"./Menu2-CvX9huZG.js";import"./Reload-C42RAgZb.js";import"./FileItem-uuW91Cnr.js";import"./StatusDangerOutlineSquare-CLLNECtF.js";import"./useTranslation-jUtuSwd5.js";import"./UploadFull-DoKT54b-.js";const yt={title:"Hexa UI Components/Upload",component:m,...te({meta:{argTypes:{accept:{control:"text",description:"File types that can be accepted. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept",table:{type:{summary:"string"}}},action:{description:"Uploading URL",table:{type:{summary:"string | ((file) => string | Promise<string>)"}}},className:{control:"text",table:{type:{summary:"string"}}},description:{control:"text"},directory:{control:"boolean",description:"Support upload whole directory",table:{type:{summary:"boolean"}}},customRequest:{description:"Override the default handler for uploading",table:{type:{summary:"(options: object) => void"}}},headers:{description:"Set request headers",table:{type:{summary:"object"}}},maxCount:{control:{type:"number",min:1},table:{type:{summary:"number"}}},maxFileSize:{control:{type:"number",min:0},table:{type:{summary:"number"}}},maxTotalSize:{control:{type:"number",min:0},table:{type:{summary:"number"}}},method:{description:"The http method of upload request",table:{defaultValue:{summary:"post"},type:{summary:"string"}}},onChange:{},onDownload:{},onDownloadAll:{},onRemove:{},size:{control:{type:"inline-radio"},options:["small","medium"],table:{defaultValue:{summary:"medium"},type:{summary:"small | medium"}}},validationStatus:{control:{type:"inline-radio"},options:["default","error"],table:{defaultValue:{summary:"default"},type:{summary:"default | error"}}}},args:{description:"Maximum 8 files, total size up to 320MB",customRequest:ne,maxCount:8,maxTotalSize:320*1024,testId:"upload-test-id",klId:"upload-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*|action)"},badges:[T.stable,T.reviewedByDesign],design:x.pixsoView,docs:{page:ae(x)}}}})};function ne({file:t,onError:a,onProgress:o,onSuccess:l}){let r=0,n=!1;async function X(){for(;;){if(await new Promise(Z=>setTimeout(Z,500)),n)return;if(r+=Math.floor(Math.random()*15),r>20&&t.name.includes("error")){a==null||a(new Error("Something goes wrong."));return}else if(r<100)o==null||o({percent:r});else{l==null||l({});return}}}return X(),{abort(){n=!0}}}const u={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement(b,{closable:!1,mode:"info"},e.createElement(s,null,'You can simulate an upload error by selecting a file that contains the string "error" in its name.'),e.createElement(s,null,'Вы можете сэмулировать ошибку загрузки, выбрав файл, содержащий в своем имени подстроку "error".')),e.createElement(m,{...t,style:{marginTop:16}})),name:"Uploader"},d={render:t=>re(["small","medium"].map(a=>({label:a,content:e.createElement(m,{...t,size:a})}))),argTypes:{size:{control:!1}}},p={...d,args:{disabled:!0}},c={render:t=>e.createElement(m,{...t}),args:{description:"1 file, size up to 100KB",maxCount:1,maxTotalSize:100*1024}},g={render:t=>{const a=e.useRef(),[o,l]=e.useState([]);return e.createElement("div",{style:{width:"100%"}},e.createElement(b,{closable:!1,mode:"info"},e.createElement(s,null,"You can disable the automatic upload by setting ",e.createElement(i,null,"manual")," prop and start the upload of the selected files manually, e.g. by click on your own button."),e.createElement(s,null,"Вы можете отключить автоматическую загрузку, установив параметр ",e.createElement(i,null,"manual"),", и начать загрузку выбранных файлов вручную, например, нажав на свою кнопку.")),e.createElement(m,{...t,ref:a,onChange:r=>{var n;l(r.fileList),(n=t.onChange)==null||n.call(t,r)},style:{marginTop:16}}),e.createElement(Q,{loading:o.some(r=>r.status==="uploading"),onClick:()=>a.current.upload(),style:{marginTop:16}},"Upload"))},args:{description:"The files will be uploaded to the server after clicking on the Upload button",manual:!0}};function ie({children:t,style:a,...o}){return e.createElement("div",{...o,style:{border:"1px solid grey",height:520,padding:20,position:"relative",...a}},e.createElement(ee,{style:{background:"white",padding:"0 5px",position:"absolute",left:0,top:0,transform:"translate(10px, -50%"}},"Container"),t)}const f={render:({fileList:t,...a})=>{const[o,l]=e.useState(t);return e.createElement("div",{style:{width:"100%"}},e.createElement(b,{closable:!1,mode:"info"},e.createElement(s,null,"You can gain full control over the file list if needed. Enable ",e.createElement(i,null,"manual"),"and pass the necessary data to ",e.createElement(i,null,"fileList")," prop. You may want it if you need",e.createElement("ul",{style:{marginBottom:0}},e.createElement("li",null,"to display data previously got from backend;"),e.createElement("li",null,"a custom handler to upload the selected files."))),e.createElement(s,null,"Вы можете самостоятельно управлять списком файлов, если необходимо. Включите ",e.createElement(i,null,"manual"),"и передайте необходимые данные в проп ",e.createElement(i,null,"fileList"),". Это может понадобится, если вам",e.createElement("ul",{style:{marginBottom:0}},e.createElement("li",null,"нужно отобразить данные ранее полученные от бэкенда;"),e.createElement("li",null,"нужен кастомный обработчик для загрузки файлов.")))),e.createElement(m,{...a,fileList:o,onChange:r=>{var n;l(r.fileList),(n=a.onChange)==null||n.call(a,r)},style:{marginTop:16}}))},args:{fileList:[{uid:"xxx_1",name:"file_name_1.png",size:500*1024*1024,status:"success"},{uid:"xxx_2",name:"file_name_2.png",percent:45,size:150*1024,status:"uploading"}],manual:!0,maxFileSize:320*1024}},y={render:()=>{const[t,a]=e.useState([]),[o,l]=e.useState(void 0);function r(){t.length===0?l("Upload a file to conitniue"):l("Something went wrong. Try again")}return e.createElement(le,{footerLeft:e.createElement(e.Fragment,null,e.createElement(Q,{onClick:r},"Import")),size:"small",title:"Import a policy",visible:!0},e.createElement(oe,{control:e.createElement(m,{description:"Select a file to import a policy",fileList:t,manual:!0,maxCount:1,onChange:n=>{l(void 0),a(n.fileList)},validationStatus:o?"error":void 0}),message:o}))}},h={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement(b,{closable:!1,mode:"info"},e.createElement(s,null,"You can extend the height of ",e.createElement(i,null,"Uploader")," to the height of the container by setting ",e.createElement(i,null,"fullHeight")," prop."),e.createElement(s,null,"Вы можете увеличить высоту ",e.createElement(i,null,"Uploader")," до высоты контейнера, установив параметр ",e.createElement(i,null,"fullHeight"),".")),e.createElement(ie,{style:{marginTop:16}},e.createElement(m,{...t}))),args:{fullHeight:!0}},S={args:{source:{upload:E.upload,upload_header:E.upload_header,upload_file:E.upload_file}},render:t=>e.createElement($,{...t})};var v,C,w;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <div style={{
      width: '100%'
    }}>
        <SectionMessage closable={false} mode="info">
          <P>You can simulate an upload error by selecting a file that contains the string &quot;error&quot; in its name.</P>
          <P>Вы можете сэмулировать ошибку загрузки, выбрав файл, содержащий в своем имени подстроку &quot;error&quot;.</P>
        </SectionMessage>

        <Uploader {...args} style={{
        marginTop: 16
      }} />
      </div>;
  },
  name: 'Uploader'
}`,...(w=(C=u.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var U,z,F;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => renderVariants((['small', 'medium'] as const).map(size => ({
    label: size,
    content: <Uploader {...args} size={size} />
  })), true),
  argTypes: {
    size: {
      control: false
    }
  }
}`,...(F=(z=d.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var L,_,M;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...Size,
  args: {
    disabled: true
  }
}`,...(M=(_=p.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var P,k,B;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <Uploader {...args} />,
  args: {
    description: '1 file, size up to 100KB',
    maxCount: 1,
    maxTotalSize: 100 * 1024
  }
}`,...(B=(k=c.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var R,H,Y;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(Y=(H=g.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var q,V,D;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(D=(V=f.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var I,O,j;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(O=y.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var K,A,G;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    return <div style={{
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
      </div>;
  },
  args: {
    fullHeight: true
  }
}`,...(G=(A=h.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var N,W,J;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    source: {
      upload: componentColors.upload,
      upload_header: componentColors.upload_header,
      upload_file: componentColors.upload_file
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(J=(W=S.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};const ht=["UploaderStory","Size","Disabled","SingleFile","ManualUpload","ControlOverFileList","Validation","FullHeight","ColorTokens"];export{S as ColorTokens,f as ControlOverFileList,p as Disabled,h as FullHeight,g as ManualUpload,c as SingleFile,d as Size,u as UploaderStory,y as Validation,ht as __namedExportsOrder,yt as default};
