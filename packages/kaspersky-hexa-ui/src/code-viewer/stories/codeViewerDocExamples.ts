export const javascriptExample = `async function fetchAlerts(filters) {
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
  .catch((error) => console.error(error.message))`

export const basicExample = javascriptExample

export const htmlExample = `<html>
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
`

export const jsonExample = `{
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
}`

export const xmlExample = `<manifest xmlns:android="http://schemas.android.com/apk/res/android"
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
`

export const tsxExample = `import React, { FC, useState } from "react";

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
`

export const yaraExample = `rule SuspiciousScript
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
`

/** setupCode для react-live в CodeViewer.documentation.mdx */
export const codeViewerLanguageExampleSetupCode = `
const javascriptSample = ${JSON.stringify(javascriptExample)};
const jsonSample = ${JSON.stringify(jsonExample)};
const yaraSample = ${JSON.stringify(yaraExample)};
`

export const codeViewerInitialValueExampleSetupCode = `
const javascriptSample = ${JSON.stringify(javascriptExample)};
`

export const codeViewerVisualExamplesSetupCode = `
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
`
