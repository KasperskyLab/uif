import{w as Se}from"./withMeta-FY6bIYTP.js";import{R as h}from"./iframe-C54-I-iN.js";import{C as Be,a as We}from"./CounterChart-CKZhnNe_.js";import{D as Ee,a as we}from"./TextTruncateWithPopup-BlhaZ82M.js";import"./Link-B6aRyTdF.js";import"./index-LUg1m9AG.js";import"./preload-helper-C1FmrZbK.js";import"./clsx-B-dksMZM.js";import"./toInteger-DWltlFOm.js";import"./toNumber-BFWmeo_E.js";import"./toString-CaMIQdMU.js";const qe={designTokens:!0,unitTests:!1,screenshotTests:!1,storybook:!0,pixsoView:!0},He="CounterChart",Ae="CounterChart - компонент для отображения значения с визуальной индикацией тренда. Используется для представления динамики показателя, например: рост/падение, изменения метрики, разницы по сравнению с прошлым периодом. Может использоваться как полноценный тренд-компонент с направлением (стрелкой), либо как акцентное число без трендовой информации",Te="https://pixso.net/app/design/Nm37XP3kqM_HJPFAXaciuw?file_type=10&icon_type=1&page-id=2544%3A49898",Pe="https://pixso.net/app/design/LaTmaWE_JObQIc6YZuYaWw?page-id=156%3A193943",ye={dod:qe,component:He,usage:Ae,designLink:Te,pixsoView:Pe},Ce=Object.keys(We),Fe={title:"Charts/CounterChart",component:Be,args:{data:{value:4412,metric:""},width:we,height:Ee},argTypes:{width:{control:{type:"range",min:100,max:1e3,step:10}},height:{control:{type:"range",min:100,max:1e3,step:10}},size:{control:"select",options:Ce,description:"Фиксированный размер CounterChart. Если задан, меняет высоту, типографику value/prefix/suffix/description/previousValue и внутренние отступы.",table:{category:"Layout"}}},parameters:{docs:{page:Se(ye)}}},e={args:{data:{metric:"description",value:4412,previousValue:3200},width:240},render:x=>h.createElement("div",{style:{display:"grid",gap:24}},Ce.map(V=>h.createElement("div",{key:V,style:{width:x.width}},h.createElement(Be,{...x,size:V}))))},a={args:{data:{metric:"",value:1e3,previousValue:1400},biggerBetter:!1}},r={args:{data:{metric:"",value:1e3,previousValue:1400},biggerBetter:!0}},t={args:{data:{metric:"",value:1e3,previousValue:400},biggerBetter:!0}},i={args:{data:{metric:"",value:1e3,previousValue:400},biggerBetter:!1}},o={args:{data:{metric:"",value:1e3,previousValue:1e3},biggerBetter:!1}},s={args:{data:{metric:"",value:71650726357978,previousValue:98721390582},biggerBetter:!1}},u={args:{data:{metric:"",value:71650726357978,previousValue:98721390582},biggerBetter:!1,width:300}},n={args:{data:{metric:"",value:71650726357978,previousValue:98721390582},biggerBetter:!1,width:500}},c={args:{data:{metric:"",value:71650726357978,previousValue:98721390582},biggerBetter:!1,width:700}},d={args:{data:{metric:"description",value:551,previousValue:442},biggerBetter:!0}},l={args:{data:{metric:"description",value:551,previousValue:442},biggerBetter:!0,color:"var(--color-marina300)"}},p={args:{data:{metric:"Cupidatat occaecat consectetur incididunt commodo excepteur aute adipisicing labore velit mollit. Dolore anim cupidatat laboris officia ea fugiat cillum cillum. Enim adipisicing cupidatat voluptate cupidatat et qui excepteur. Magna labore laboris amet aute sit laboris pariatur aliquip nostrud eu et dolor labore. Tempor nostrud occaecat do commodo incididunt ad enim adipisicing consequat nisi velit do dolor ea. Cupidatat dolore est ea ut esse.",value:551,previousValue:442},biggerBetter:!0}},m={args:{data:{metric:"Cupidatat occaecat consectetur incididunt commodo excepteur aute adipisicing labore velit mollit. Dolore anim cupidatat laboris officia ea fugiat cillum cillum. Enim adipisicing cupidatat voluptate cupidatat et qui excepteur. Magna labore laboris amet aute sit laboris pariatur aliquip nostrud eu et dolor labore. Tempor nostrud occaecat do commodo incididunt ad enim adipisicing consequat nisi velit do dolor ea. Cupidatat dolore est ea ut esse.",value:551,previousValue:442},biggerBetter:!0,width:500}},g={args:{data:{metric:"description",value:551,previousValue:442},biggerBetter:!0,prefix:"$"}},v={args:{data:{metric:"description",value:551,previousValue:442},biggerBetter:!0,suffix:"%"}},b={args:{data:{metric:"description",value:551,previousValue:442},biggerBetter:!0,prefix:"$",suffix:"%"}},f={args:{data:{metric:"Cupidatat occaecat consectetur incididunt commodo excepteur aute adipisicing labore velit mollit. Dolore anim cupidatat laboris officia ea fugiat cillum cillum. Enim adipisicing cupidatat voluptate cupidatat et qui excepteur. Magna labore laboris amet aute sit laboris pariatur aliquip nostrud eu et dolor labore. Tempor nostrud occaecat do commodo incididunt ad enim adipisicing consequat nisi velit do dolor ea. Cupidatat dolore est ea ut esse.",value:71650726357978,previousValue:98721390582},biggerBetter:!0,prefix:"$",suffix:"%"}};var B,C,S;e.parameters={...e.parameters,docs:{...(B=e.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    data: {
      metric: 'description',
      value: 4412,
      previousValue: 3200
    },
    width: 240
  },
  render: args => <div style={{
    display: 'grid',
    gap: 24
  }}>
      {chartSizes.map(size => <div key={size} style={{
      width: args.width
    }}>
          <CounterChart {...args} size={size} />
        </div>)}
    </div>
}`,...(S=(C=e.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var W,E,w;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 1000,
      previousValue: 1400
    },
    biggerBetter: false
  }
}`,...(w=(E=a.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var q,H,A;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 1000,
      previousValue: 1400
    },
    biggerBetter: true
  }
}`,...(A=(H=r.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var T,P,y;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 1000,
      previousValue: 400
    },
    biggerBetter: true
  }
}`,...(y=(P=t.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var D,N,_;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 1000,
      previousValue: 400
    },
    biggerBetter: false
  }
}`,...(_=(N=i.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var L,M,z;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 1000,
      previousValue: 1000
    },
    biggerBetter: false
  }
}`,...(z=(M=o.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var k,R,$;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 71650726357978,
      previousValue: 98721390582
    },
    biggerBetter: false
  }
}`,...($=(R=s.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var I,O,F;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 71650726357978,
      previousValue: 98721390582
    },
    biggerBetter: false,
    width: 300
  }
}`,...(F=(O=u.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var U,G,J;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 71650726357978,
      previousValue: 98721390582
    },
    biggerBetter: false,
    width: 500
  }
}`,...(J=(G=n.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Y,Z;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 71650726357978,
      previousValue: 98721390582
    },
    biggerBetter: false,
    width: 700
  }
}`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var j,Q,K;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    data: {
      metric: 'description',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true
  }
}`,...(K=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};var ee,ae,re;l.parameters={...l.parameters,docs:{...(ee=l.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    data: {
      metric: 'description',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true,
    color: 'var(--color-marina300)'
  }
}`,...(re=(ae=l.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ie,oe;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    data: {
      metric: 'Cupidatat occaecat consectetur incididunt commodo excepteur aute adipisicing labore velit mollit. Dolore anim cupidatat laboris officia ea fugiat cillum cillum. Enim adipisicing cupidatat voluptate cupidatat et qui excepteur. Magna labore laboris amet aute sit laboris pariatur aliquip nostrud eu et dolor labore. Tempor nostrud occaecat do commodo incididunt ad enim adipisicing consequat nisi velit do dolor ea. Cupidatat dolore est ea ut esse.',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true
  }
}`,...(oe=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var se,ue,ne;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    data: {
      metric: 'Cupidatat occaecat consectetur incididunt commodo excepteur aute adipisicing labore velit mollit. Dolore anim cupidatat laboris officia ea fugiat cillum cillum. Enim adipisicing cupidatat voluptate cupidatat et qui excepteur. Magna labore laboris amet aute sit laboris pariatur aliquip nostrud eu et dolor labore. Tempor nostrud occaecat do commodo incididunt ad enim adipisicing consequat nisi velit do dolor ea. Cupidatat dolore est ea ut esse.',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true,
    width: 500
  }
}`,...(ne=(ue=m.parameters)==null?void 0:ue.docs)==null?void 0:ne.source}}};var ce,de,le;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    data: {
      metric: 'description',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true,
    prefix: '$'
  }
}`,...(le=(de=g.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var pe,me,ge;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    data: {
      metric: 'description',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true,
    suffix: '%'
  }
}`,...(ge=(me=v.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ve,be,fe;b.parameters={...b.parameters,docs:{...(ve=b.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    data: {
      metric: 'description',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true,
    prefix: '$',
    suffix: '%'
  }
}`,...(fe=(be=b.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var he,xe,Ve;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    data: {
      metric: 'Cupidatat occaecat consectetur incididunt commodo excepteur aute adipisicing labore velit mollit. Dolore anim cupidatat laboris officia ea fugiat cillum cillum. Enim adipisicing cupidatat voluptate cupidatat et qui excepteur. Magna labore laboris amet aute sit laboris pariatur aliquip nostrud eu et dolor labore. Tempor nostrud occaecat do commodo incididunt ad enim adipisicing consequat nisi velit do dolor ea. Cupidatat dolore est ea ut esse.',
      value: 71650726357978,
      previousValue: 98721390582
    },
    biggerBetter: true,
    prefix: '$',
    suffix: '%'
  }
}`,...(Ve=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:Ve.source}}};const Ue=["Sizes","WithPreviousValueLessAndBetter","WithPreviousValueLessAndWorse","WithPreviousValueBiggerAndBetter","WithPreviousValueBiggerAndWorse","WithPreviousValueEqual","HugeNumbersNoExplicitWidth","HugeNumbers300","HugeNumbers500","HugeNumbers700","Description","ExplicitColor","HugeDescriptionNoExplicitWidth","HugeDescription500","WithPrefix","WithSuffix","WithPrefixAndSuffix","HugeNumbersWithPrefixAndSuffix"];export{d as Description,l as ExplicitColor,m as HugeDescription500,p as HugeDescriptionNoExplicitWidth,u as HugeNumbers300,n as HugeNumbers500,c as HugeNumbers700,s as HugeNumbersNoExplicitWidth,f as HugeNumbersWithPrefixAndSuffix,e as Sizes,g as WithPrefix,b as WithPrefixAndSuffix,t as WithPreviousValueBiggerAndBetter,i as WithPreviousValueBiggerAndWorse,o as WithPreviousValueEqual,a as WithPreviousValueLessAndBetter,r as WithPreviousValueLessAndWorse,v as WithSuffix,Ue as __namedExportsOrder,Fe as default};
