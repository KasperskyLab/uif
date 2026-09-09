import{M as o}from"./iframe-DedYZBTA.js";import{e as u,g,b as h}from"./propPresentation-BNIeMkgM.js";import{w as y}from"./withMeta-DvkmiJqW.js";import{D as S,a as n,C as c}from"./CodeViewer-BmyiNSrY.js";import{s as f}from"./resolveDesignControls-CFhBuB_d.js";import{v as w}from"./typesHelpers-tpz7Of7L.js";const b={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},v="Code viewer",C="Компонент Code viewer используется в сценариях, когда нужно работать с кодом и функциями.",x="Нотации и языки по умолчанию: HTML, JSON, XML, JavaScript, JSX, TypeScript, TSX.",$="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=53702%3A194802",O="https://pixso.net/app/design/v67aCRl5t--3QSa2Az8TaQ",i={dod:b,component:v,description:C,usage:x,designLink:$,pixsoView:O},V=Object.keys(S),k=["both","x","y","none"],A=(p,m={})=>u(f[p],m),l={language:{control:"select",options:[...V]},initialValue:{control:"text"},readonly:{control:"boolean"},validationStatus:{control:"select",options:[...w]},resizable:{control:"boolean"},resizeAxis:{control:"select",options:[...k]},width:{control:"number"},height:{control:"number"},lineWrapping:{control:"boolean"},theme:A("theme")},t=`async function fetchAlerts(filters) {
  const params = new URLSearchParams(filters)
  const response = await fetch(\`/api/alerts?\${params}\`)

  if (!response.ok) {
    throw new Error(\`Request failed: \${response.status}\`)
  }

  const payload = await response.json()
  return payload.items.map((item) => ({
    id: item.id,
    severity: item.severity,
    title: item.title,
    detectedAt: new Date(item.detectedAt)
  }))
}

fetchAlerts({ severity: 'high', limit: 50 })
  .then((alerts) => console.log(\`Loaded \${alerts.length} alerts\`))
  .catch((error) => console.error(error.message))`,E=t,M=`<html>
  <head>
    <title>Href Attribute Example</title>
  </head>
  <body>
    <h1>Href Attribute Example</h1>
    <p>
      <a href="https://www.freecodecamp.org/contribute/">The freeCodeCamp Contribution Page</a> shows you how and where you can contribute to freeCodeCamp's community and growth.
    </p>
  </body>
</html>
`,P=`{
  "widget": {
    "debug": "on",
    "window": {
      "title": "Sample Konfabulator Widget",
      "name": "main_window",
      "width": 500,
      "height": 500
    },
    "text": {
      "data": "Click Here",
      "size": 36,
      "style": "bold",
      "name": "text1",
      "hOffset": 250,
      "vOffset": 100,
      "alignment": "center",
      "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
  }
}`,U=`<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.javatpoint.hello"
    android:versionCode="1"
    android:versionName="1.0" >

    <uses-sdk
        android:minSdkVersion="8"
        android:targetSdkVersion="15" />

    <application
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme" >
        <activity
            android:name=".MainActivity"
            android:label="@string/title_activity_main" >
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
`,I=`import React, { FC, useState } from "react";

interface Props {
  title: string;
  initialCount: number;
}

const FunctionalCounter: FC<Props> = ({ title, initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const add = (factor = 1) => {
    setCount(count + factor);
  };

  return (
    <div>
      <h1>{title}</h1>
      <h2>{count}</h2>
      <button onClick={() => add()}>+</button>
      <button onClick={() => add(-1)}>-</button>
    </div>
  );
};

export default FunctionalCounter;
`,J=`rule SuspiciousScript
{
    meta:
        description = "Detects suspicious script execution patterns"
        author = "Security Team"
        severity = "high"

    strings:
        $powershell = "powershell.exe" nocase
        $encoded = /-[Ee]ncoded[Cc]ommand/
        $download = "DownloadString" nocase
        $hidden = "-WindowStyle Hidden" nocase

    condition:
        $powershell and ($encoded or $download) and $hidden
}
`,F=`
const javascriptSample = ${JSON.stringify(t)};
const jsonSample = ${JSON.stringify(P)};
const yaraSample = ${JSON.stringify(J)};
`,R=`
const javascriptSample = ${JSON.stringify(t)};
`,W=`
const editableSample = ${JSON.stringify(`function formatSeverity(severity) {
  return severity.toUpperCase()
}`)};
const readonlySample = ${JSON.stringify(`const alert = {
  id: 'alert-042',
  severity: 'high'
}`)};
const validationSample = ${JSON.stringify(`{
  "rule": "suspicious-script",
  "enabled": true
}`)};
const resizeSample = ${JSON.stringify(`const panel = {
  minWidth: 400,
  minHeight: 200
}`)};
const highlightedSample = ${JSON.stringify(`function calculateRisk(score) {
  if (score >= 80) {
    return 'high'
  }

  return 'normal'
}`)};
const completionSample = ${JSON.stringify(`{
  "severity": "high",
  "status": "new"
}`)};
const customLanguageSample = ${JSON.stringify(`{
  "rule": "network-connection",
  "action": "alert"
}`)};
const onChangeSample = ${JSON.stringify(`const alert = {
  title: 'Suspicious activity',
  severity: 'high'
}`)};
`,d={argTypes:h(c,l),args:{resizable:!0,resizeAxis:"both",readonly:!1,validationStatus:"default",language:"javascript",initialValue:E,width:n.width,height:n.height,linesHighlighted:["2-4","7-10","15"],testId:"code-viewer-test-id",klId:"code-viewer-kl-id"},parameters:{badges:[o.stable,o.reviewedByDesign],docs:{page:y(i)},design:i.pixsoView}},N={title:"Hexa UI Components/CodeViewer",component:c,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["codeViewerStorySettings"],...d},e={name:"Playground",parameters:{controls:{include:g(l)}}};var a,s,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(codeViewerPropPresentation)
    }
  }
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const T=["codeViewerStorySettings","Playground"],Q=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:T,codeViewerStorySettings:d,default:N},Symbol.toStringTag,{value:"Module"}));export{Q as C,F as a,E as b,d as c,R as d,W as e,M as h,P as j,I as t,U as x,J as y};
