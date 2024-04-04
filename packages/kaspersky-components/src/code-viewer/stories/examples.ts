export const basicExample = 'console.log("Hello, World!")'

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
