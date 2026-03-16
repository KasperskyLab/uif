const b=(r=7,a="Breadcrumb",m="breadcrumb")=>Array.from({length:r},(e,t)=>t).map(e=>({name:a+" "+(e+1),url:"#/"+m+"_"+(e+1),disabled:e===2}));export{b as g};
