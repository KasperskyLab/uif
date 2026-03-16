import{T as G}from"./Palette-Bcbt30O7.js";import{R as e,c as S,b as T,t as b,P as i,T as J}from"./iframe-DlY6n6Um.js";import{w as Q}from"./withDesignControls-DgiSFIU-.js";import{w as X}from"./withMeta-B77fl0Sa.js";import{S as o}from"./Warnings-DqWOugw8.js";import{r as Z}from"./StoryComponents-5Ni7_M0_.js";import{B as $}from"./Button-CgqUalcg.js";import{M as E}from"./meta-Bi9iMNKH.js";import{U as m}from"./Uploader-DYFVyYFm.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";import"./Tag-Cd3srqW9.js";import"./TextReducer-mTsc_fVR.js";import"./StatusDangerSolid1-Db-Ba1Fd.js";import"./Group-C50_emtp.js";import"./index-q41KpsCE.js";import"./type-Cyafuwrq.js";import"./colors-Cs2HIvKh.js";import"./wave-CgaPvuQn.js";import"./Divider-BzNbSw2T.js";import"./FormLabel-CKFB06hk.js";import"./Markdown-9a6sqH5b.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-D8ys_ap7.js";import"./Dropdown-WtVSJYv5.js";import"./KeyCode-B45xthVk.js";import"./Overflow-wC_Ss__i.js";import"./focus-oe9vj3c6.js";import"./Loader-BjmnRfIR.js";import"./index-CY9qp4ym.js";import"./ArrowRight-Db3Ij3DE.js";import"./v4-BoP187Zn.js";import"./button-CjggZd63.js";import"./regeneratorRuntime-ChjYfAIJ.js";import"./pickAttrs-CzltAtTh.js";import"./Upload-C_N43VAI.js";import"./StatusDangerOutlineSquare-BLZQfahy.js";import"./Menu2-BBlUvDgt.js";import"./FileItem-B90jnV4_.js";import"./useTranslation-CGS-Ff88.js";import"./UploadFull-COKC8efF.js";const Ke={title:"Hexa UI Components/Upload",component:m,...Q({componentName:"uploader",meta:{argTypes:{accept:{control:"text",description:"File types that can be accepted. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept",table:{type:{summary:"string"}}},action:{description:"Uploading URL",table:{type:{summary:"string | ((file) => string | Promise<string>)"}}},className:{control:"text",table:{type:{summary:"string"}}},description:{control:"text"},directory:{control:"boolean",description:"Support upload whole directory",table:{type:{summary:"boolean"}}},customRequest:{description:"Override the default handler for uploading",table:{type:{summary:"(options: object) => void"}}},headers:{description:"Set request headers",table:{type:{summary:"object"}}},maxCount:{control:{type:"number",min:1},table:{type:{summary:"number"}}},maxFileSize:{control:{type:"number",min:0},table:{type:{summary:"number"}}},maxTotalSize:{control:{type:"number",min:0},table:{type:{summary:"number"}}},method:{description:"The http method of upload request",table:{defaultValue:{summary:"post"},type:{summary:"string"}}},onChange:{},onDownload:{},onDownloadAll:{},onRemove:{},size:{control:{type:"inline-radio"},options:["small","medium"],table:{defaultValue:{summary:"medium"},type:{summary:"small | medium"}}}},args:{description:"Maximum 8 files, total size up to 320MB",customRequest:ee,maxCount:8,maxTotalSize:320*1024,testId:"upload-test-id",klId:"upload-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*|action)"},badges:[T.stable,T.reviewedByDesign],design:E.pixsoView,docs:{page:X(E)}}}})};function ee({file:t,onError:a,onProgress:l,onSuccess:s}){let r=0,n=!1;async function A(){for(;;){if(await new Promise(W=>setTimeout(W,500)),n)return;if(r+=Math.floor(Math.random()*15),r>20&&t.name.includes("error")){a==null||a(new Error("Something goes wrong."));return}else if(r<100)l==null||l({percent:r});else{s==null||s({});return}}}return A(),{abort(){n=!0}}}const u={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement(b,{closable:!1,mode:"info"},e.createElement(i,null,'You can simulate an upload error by selecting a file that contains the string "error" in its name.'),e.createElement(i,null,'Вы можете сэмулировать ошибку загрузки, выбрав файл, содержащий в своем имени подстроку "error".')),e.createElement(m,{...t,style:{marginTop:16}})),name:"Uploader"},d={render:t=>Z(["small","medium"].map(a=>({label:a,content:e.createElement(m,{...t,size:a})})),!0),argTypes:{size:{control:!1}}},p={...d,args:{disabled:!0}},c={render:t=>e.createElement(m,{...t}),args:{description:"1 file, size up to 100KB",maxCount:1,maxTotalSize:100*1024}},g={render:t=>{const a=e.useRef(),[l,s]=e.useState([]);return e.createElement("div",{style:{width:"100%"}},e.createElement(b,{closable:!1,mode:"info"},e.createElement(i,null,"You can disable the automatic upload by setting ",e.createElement(o,null,"manual")," prop and start the upload of the selected files manually, e.g. by click on your own button."),e.createElement(i,null,"Вы можете отключить автоматическую загрузку, установив параметр ",e.createElement(o,null,"manual"),", и начать загрузку выбранных файлов вручную, например, нажав на свою кнопку.")),e.createElement(m,{...t,ref:a,onChange:r=>{var n;s(r.fileList),(n=t.onChange)==null||n.call(t,r)},style:{marginTop:16}}),e.createElement($,{loading:l.some(r=>r.status==="uploading"),onClick:()=>a.current.upload(),style:{marginTop:16}},"Upload"))},args:{description:"The files will be uploaded to the server after clicking on the Upload button",manual:!0}};function te({children:t,style:a,...l}){return e.createElement("div",{...l,style:{border:"1px solid grey",height:520,padding:20,position:"relative",...a}},e.createElement(J,{style:{background:"white",padding:"0 5px",position:"absolute",left:0,top:0,transform:"translate(10px, -50%"}},"Container"),t)}const f={render:({fileList:t,...a})=>{const[l,s]=e.useState(t);return e.createElement("div",{style:{width:"100%"}},e.createElement(b,{closable:!1,mode:"info"},e.createElement(i,null,"You can gain full control over the file list if needed. Enable ",e.createElement(o,null,"manual"),"and pass the necessary data to ",e.createElement(o,null,"fileList")," prop. You may want it if you need",e.createElement("ul",{style:{marginBottom:0}},e.createElement("li",null,"to display data previously got from backend;"),e.createElement("li",null,"a custom handler to upload the selected files."))),e.createElement(i,null,"Вы можете самостоятельно управлять списком файлов, если необходимо. Включите ",e.createElement(o,null,"manual"),"и передайте необходимые данные в проп ",e.createElement(o,null,"fileList"),". Это может понадобится, если вам",e.createElement("ul",{style:{marginBottom:0}},e.createElement("li",null,"нужно отобразить данные ранее полученные от бэкенда;"),e.createElement("li",null,"нужен кастомный обработчик для загрузки файлов.")))),e.createElement(m,{...a,fileList:l,onChange:r=>{var n;s(r.fileList),(n=a.onChange)==null||n.call(a,r)},style:{marginTop:16}}))},args:{fileList:[{uid:"xxx_1",name:"file_name_1.png",size:500*1024*1024,status:"success"},{uid:"xxx_2",name:"file_name_2.png",percent:45,size:150*1024,status:"uploading"}],manual:!0,maxFileSize:320*1024}},y={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement(b,{closable:!1,mode:"info"},e.createElement(i,null,"You can extend the height of ",e.createElement(o,null,"Uploader")," to the height of the container by setting ",e.createElement(o,null,"fullHeight")," prop."),e.createElement(i,null,"Вы можете увеличить высоту ",e.createElement(o,null,"Uploader")," до высоты контейнера, установив параметр ",e.createElement(o,null,"fullHeight"),".")),e.createElement(te,{style:{marginTop:16}},e.createElement(m,{...t}))),args:{fullHeight:!0}},h={args:{source:{upload:S.upload,upload_header:S.upload_header,upload_file:S.upload_file}},render:t=>e.createElement(G,{...t})};var x,w,C;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var U,v,z;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => renderVariants((['small', 'medium'] as const).map(size => ({
    label: size,
    content: <Uploader {...args} size={size} />
  })), true),
  argTypes: {
    size: {
      control: false
    }
  }
}`,...(z=(v=d.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var _,M,F;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Size,
  args: {
    disabled: true
  }
}`,...(F=(M=p.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var L,P,k;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Uploader {...args} />,
  args: {
    description: '1 file, size up to 100KB',
    maxCount: 1,
    maxTotalSize: 100 * 1024
  }
}`,...(k=(P=c.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var B,R,H;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(R=g.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var Y,q,D;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(D=(q=f.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var V,O,I;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(I=(O=y.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var j,K,N;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    source: {
      upload: componentColors.upload,
      upload_header: componentColors.upload_header,
      upload_file: componentColors.upload_file
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(N=(K=h.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};const Ne=["UploaderStory","Size","Disabled","SingleFile","ManualUpload","ControlOverFileList","FullHeight","ColorTokens"];export{h as ColorTokens,f as ControlOverFileList,p as Disabled,y as FullHeight,g as ManualUpload,c as SingleFile,d as Size,u as UploaderStory,Ne as __namedExportsOrder,Ke as default};
