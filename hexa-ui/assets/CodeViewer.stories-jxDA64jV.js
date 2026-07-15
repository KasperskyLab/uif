import{G as t}from"./iframe-4-PRSI1I.js";import{e as m,g as u,b as h}from"./propPresentation-CfZ5yVim.js";import{w as g}from"./withMeta-BwOuJ6tr.js";import{D as w,a as o,C as r}from"./CodeViewer-BP08VqeI.js";import{s as y}from"./resolveDesignControls-CL29RUJI.js";import{v as f}from"./typesHelpers-tpz7Of7L.js";const b={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},S="Code viewer",x="Компонент Code viewer используется в сценариях, когда нужно работать с кодом и функциями.",C="Нотации и языки по умолчанию: HTML, JSON, XML, JavaScript, JSX, TypeScript, TSX.",v="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=53702%3A194802",A="https://pixso.net/app/design/v67aCRl5t--3QSa2Az8TaQ",n={dod:b,component:S,description:x,usage:C,designLink:v,pixsoView:A},k=Object.keys(w),P=["both","x","y","none"],E=(l,p={})=>m(y[l],p),d={language:{control:"select",options:[...k]},initialValue:{control:"text"},readonly:{control:"boolean"},validationStatus:{control:"select",options:[...f]},resizable:{control:"boolean"},resizeAxis:{control:"select",options:[...P]},width:{control:"number"},height:{control:"number"},lineWrapping:{control:"boolean"},theme:E("theme")},T=`async function fetchAlerts(filters) {
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
  .catch((error) => console.error(error.message))`,V=T,M=`<html>
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
`,U=`{
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
}`,F=`<manifest xmlns:android="http://schemas.android.com/apk/res/android"
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
`,c={argTypes:h(r,d),args:{resizable:!0,resizeAxis:"both",readonly:!1,validationStatus:"default",language:"javascript",initialValue:V,width:o.width,height:o.height,linesHighlighted:["2-4","7-10","15"],testId:"code-viewer-test-id",klId:"code-viewer-kl-id"},parameters:{badges:[t.stable,t.reviewedByDesign],docs:{page:g(n)},design:n.pixsoView}},_={title:"Hexa UI Components/CodeViewer",component:r,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["codeViewerStorySettings"],...c},e={name:"Playground",parameters:{controls:{include:u(d)}}};var a,i,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(codeViewerPropPresentation)
    }
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const $=["codeViewerStorySettings","Playground"],N=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:$,codeViewerStorySettings:c,default:_},Symbol.toStringTag,{value:"Module"}));export{N as C,T as a,V as b,c,M as h,U as j,I as t,F as x,J as y};
