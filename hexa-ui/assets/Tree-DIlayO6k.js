import{C as j,ai as Y,aj as J,u as Q,R as i,A as X,H as z}from"./iframe-DedYZBTA.js";import{T as Z}from"./Tree-BbkTKoxh.js";import{r as ee}from"./SettingsGear-Cl0aLKMC.js";import{t as te}from"./ArrowDownSolid-Ckv4ljMR.js";import{S as P,a as L}from"./Checkbox-CNZ65EGY.js";import{L as ne}from"./Loader-C9846UWr.js";import{R as ae}from"./Radio-Cpvj7bye.js";const N=e=>`linear-gradient(to right, rgba(0, 0, 0, 0) 0%, ${e} 75%);`,x=Y(J.BTR3),re=j`
  && {
    background: none;
    border: none;
    border-radius: 8px;

    &.ant-tree-show-line {
      .anticon-file {
        opacity: 0;
      }

      .ant-tree-switcher-noop {
        position: relative;

        &:before {
          content: '';
          display: block;
          position: absolute;
          height: 1px;
          top: 11px;
          left: -2px;
          right: 6px;
          border-bottom: 1px solid var(--level--bg--line--enabled);
        }
      }

      .ant-tree-indent-unit:last-of-type {
          &:after {
            content: '';
            position: absolute;
            display: block;
            width: 7px;
            height: 1px;
            top: 11px;
            left: 9px;
            bottom: 0;
            background-color: var(--level--bg--line--enabled);
          }
        }
    }

    &.ant-tree-focused {
      background: transparent;
    }

    .ant-tree-drop-indicator {
      display: none;
    }
    
    .ant-tree-list .ant-tree-node-content-wrapper .ant-tree-title {
      font-family: ${x.fontFamily};
      font-size: ${x.fontSize};
      line-height: ${x.lineHeight};
      font-weight: ${x.fontWeight};
      font-style: ${x.fontStyle};
      letter-spacing: ${x.letterSpacing};
      flex: 1;
      display: flex;
    }

    .ant-tree-list .ant-tree-node-content-wrapper:hover,
    .ant-tree-list .ant-tree-node-selected {
      background-color: transparent;
    }

    .ant-tree-node-content-wrapper {
      padding-left: 3px;
      cursor: ${e=>e.disableNodeBg?"default":"pointer"};
      flex: 1;
      display: flex;
    }

    .ant-tree-checkbox + .ant-tree-node-content-wrapper {
      padding: 0;
      cursor: pointer;
    }

    .ant-tree-draggable-icon,
    .ant-tree-switcher-icon {
      opacity: 1;
      color: var(--action_button--icon--ghost--enabled);
    }

    .ant-tree-switcher {
      width: 22px;
      padding-right: 4px;
      background: none;
    }

    .ant-tree-switcher-loading-icon {
      display: none;
    }

    .ant-tree-list {
      .ant-tree-treenode {
        width: 100%;
      }
    }

    .ant-tree-list-holder-inner .ant-tree-treenode {
      gap: 2px;
    }

    .ant-tree-treenode {
      position: relative;
      padding: 2px;
      border-radius: 8px;
      border: 2px solid transparent;
      background: none;
      
      &:has(.ant-tree-drop-indicator) {
        &:after {
          height: 4px;
          display: block;
          content: '';
          background-color: var(--focus--stroke);
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
        }

        &.drag-over-gap-top:after {
          bottom: unset;
          top: -2px;
        }
      }

      &:not(.ant-tree-treenode-selected):not(.ant-tree-treenode-checkbox-checked) {
        .ant-tree-title {
          color: var(--tree--text--enabled);
        }

        ${e=>e.interactive&&`
          &:hover {
            background-color: var(--submenu_item--bg--hover);
          }

          &:active {
            background-color: var(--submenu_item--bg--active);
          }
        `}

        &.ant-tree-treenode-active {
          border-color: var(--focus--stroke);
          background: none;

          .ant-tree-node-content-wrapper {
            background: transparent;
          }
        }

        &.ant-tree-treenode-disabled {
          background: none;

          .ant-tree-iconEle,
          .ant-tree-title {
            color: var(--tree--text--disabled);
          }
        }
      }

      &.ant-tree-treenode-selected,
      &.ant-tree-treenode-checkbox-checked {
        .ant-tree-title {
          color: var(--tree--text--enabled);
        }

        &:hover .ant-tree-title {
          color: ${e=>e.disableNodeBg?"var(--tree--text--enabled)":"var(--tree--text--hover)"};
        }

        &:active .ant-tree-title {
          color: ${e=>e.disableNodeBg?"var(--tree--text--enabled)":"var(--tree--text--active)"};
        }

        &.ant-tree-treenode-active {
          border-color: var(--focus--stroke);
          background-color: transparent;

          .ant-tree-title {
            color: var(--tree--text--enabled);
          }

          .ant-tree-node-content-wrapper {
            background: transparent;
          }
        }

        &.ant-tree-treenode-disabled {
          &, &:hover, &:active {
            background-color: transparent;

            .ant-tree-iconEle,
            .ant-tree-title {
              color: var(--tree--text--disabled);
            }
          }
        }
      }

      &.ant-tree-treenode-checkbox-checked {
        background-color: var(--submenu_item--bg--enabled);
        .ant-tree-title, .ant-tree-iconEle > svg {
          color: var(--tree--text--enabled);
        }

        ${e=>e.interactive&&`
          &:hover {
            background-color: var(--submenu_item--bg--hover);
            .ant-tree-title, .ant-tree-iconEle > svg {
              color: var(--tree--text--hover);
            }
          }

          &:active {
            background-color: var(--submenu_item--bg--active);
            .ant-tree-title, .ant-tree-iconEle > svg {
              color: var(--tree--text--active);
            }
          }
        `}
      }

      &.ant-tree-treenode-selected {
        background-color: var(--submenu_item--bg--enabled_selected);
        .ant-tree-title, .ant-tree-iconEle > svg {
          color: var(--submenu_item--text--enabled_selected);
        }

        &:hover {
          background-color: var(--submenu_item--bg--hover_selected);
          .ant-tree-title, .ant-tree-iconEle > svg {
            color: var(--submenu_item--text--hover_selected);
          }
        }

        &:active {
          background-color: var(--submenu_item--bg--active_selected);
          .ant-tree-title, .ant-tree-iconEle > svg {
            color: var(--submenu_item--text--active_selected);
          }
        }
      }

      .ant-tree-indent {

        .ant-tree-indent-unit {
          width: 18px;

          &:before {
            top: -8px;
            right: 9px;
            bottom: -7px;
            border-color: var(--level--bg--line--enabled);
          }
        }

        .ant-tree-indent-unit.ant-tree-indent-unit-end {
          width: 18px;

          &:before {
            position: absolute;
            display: block;
            content: '';
            top: -8px;
            right: 9px;
            bottom: -7px;
            border-color: var(--level--bg--line--enabled);
          }
        }

        
      }

      & .ant-tree-indent {
        &:has(.ant-tree-indent-unit-end.ant-tree-indent-unit-start) {
         .ant-tree-indent-unit-end:not(.ant-tree-indent-unit-start):not(:last-child) {
            &:before {
              opacity: 0;
            }
          }
        }
      }

      &.ant-tree-treenode-leaf-last .ant-tree-indent {
        .ant-tree-indent-unit:not(.ant-tree-indent-unit-end:last-of-type).ant-tree-indent-unit-end {
          &:before {
            opacity: 0;
          }
        }

        &:has(.ant-tree-indent-unit-end + .ant-tree-indent-unit:not(.ant-tree-indent-unit-end)) {
          .ant-tree-indent-unit-end {
            &:before {
              opacity: 1;
            }
          }
        }

        
        .ant-tree-indent-unit-start ~ .ant-tree-indent-unit-end {
          &:before {
            opacity: 1;
          }
        }

        .ant-tree-indent-unit:last-child.ant-tree-indent-unit-end,
        .ant-tree-indent-unit:last-child.ant-tree-indent-unit-start:not(:first-child) {
          &:before {
            bottom: 12px;
          }
        }
      }

      &.dragging {
        background-color: transparent !important;

        .ant-tree-title {
          color: var(--tree--text--enabled);
        }

        & > * {
          opacity: 0;
        }

        &:after {
          display: none;
        }
      }

      &:not(.ant-tree-treenode-draggable) .ant-tree-draggable-icon {
        opacity: 0.5;
      }

      &[draggable="true"] {
        .ant-tree-indent-unit {
          &:before {
            top: -10px;
            right: 6px;
          }

          &:last-of-type {
            &:after {
              left: 12px;
            }
          }
        }

        .ant-tree-indent-unit.ant-tree-indent-unit-end {
          &:before {
            right: 6px;
          }
        }
      }

      .ant-tree-switcher-icon {
        transform: rotate(0) translateY(-1px);
        transition: transform 0.25s ease-in-out;
      }

      &.ant-tree-treenode-switcher-close {
        .ant-tree-switcher {
          .ant-tree-switcher-icon {
            transform: rotate(-90deg) translate(1px, 0);
          }
        }
      }

      .ant-tree-switcher-leaf-line {
        &:before {
          bottom: -2px;
          right: 8px;
          top: -8px;
          border-color: var(--level--bg--line--enabled);
        }

        &:after {
          display: none;
        }
      }

      &.ant-tree-treenode-leaf-last {
        .ant-tree-switcher-leaf-line {
          &:before {
            top: -8px !important;
            height: 23px !important;
          }
        }
      }

      &.ant-tree-treenode-checkbox-indeterminate .kl-v6-checkbox-icon-normal,
      &:not(.ant-tree-treenode-checkbox-indeterminate)
        .kl-v6-checkbox-icon-indeterminate {
        display: none;
      }

      .ant-radio-group {
        transform: translateY(2px);
      }

      .hexa-ui-tree-node-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        white-space: pre;

        & > span {
          margin-right: 4px;
        }

        .hexa-ui-tree-node-action {
          opacity: 0;
          position: sticky;
          right: -8px;
          padding: 4px 4px 4px 2px;
          transition: none;

          ::before {
            display: block;
            content: '';
            position: absolute;
            height: 100%;
            left: -8px;
            width: 10px;
          }
        }
      }

      &.ant-tree-treenode:hover .hexa-ui-tree-node-action {
        opacity: 1;
        background-color: var(--submenu_item--bg--hover);
        ::before {
          background: ${N("var(--submenu_item--bg--hover)")};
        }
      }

      &.ant-tree-treenode:active .hexa-ui-tree-node-action {
        background-color: var(--submenu_item--bg--active);
        ::before {
          background: ${N("var(--submenu_item--bg--active)")};
        }
      }

      &.ant-tree-treenode.ant-tree-treenode-selected .hexa-ui-tree-node-action {
        background-color: var(--submenu_item--bg--hover_selected);
        ::before {
          background: ${N("var(--submenu_item--bg--hover_selected)")};
        }
      }

      &.ant-tree-treenode.ant-tree-treenode-selected:active .hexa-ui-tree-node-action {
        background-color: var(--submenu_item--bg--active_selected);
        ::before {
          background: ${N("var(--submenu_item--bg--active_selected)")};
        }
      }

      &.ant-tree-treenode.ant-tree-treenode-disabled .hexa-ui-tree-node-action {
        background-color: var(--submenu_item--bg--enabled);
        ::before {
          background: ${N("var(--submenu_item--bg--enabled)")};
        }
      }
    }

    .ant-tree-checkbox {
      margin: 0 0 0 -16px;
      padding: 0;
      transform: translate(19px, 2px);
      opacity: 0;
    }

    .ant-tree-iconEle:not(:empty) + .ant-tree-title {
      padding-left: 4px;
    }

    .ant-tree-node-content-wrapper .ant-tree-iconEle {
      width: 16px;
      height: 16px;

      > svg {
        margin: 4px 0 2px 0;
      }

      .ant-checkbox {
        top: 2px;
      }
    }

    .ant-checkbox-wrapper {
      & + .kl-v6-checkbox-icon-indeterminate {
        margin-left: 0;
      }
    }

    .ant-checkbox-checked::after {
      border: none;
    }
    
    ${P} {
      padding-top: 3px;
      
      + ${P} {
        padding-top: 0;
      }
    }
  }
`;function _(e,t){if(!e.children)return!1;for(const n of e.children)if(!t.has(n.key)||_(n,t))return!0;return!1}function C(e,t,n,a){if(t){if(n.add(e.key),a.delete(e.key),!e.children)return;for(const o of e.children)C(o,t,n,a)}else _(e,n)?a.add(e.key):n.add(e.key)}function A(e,t,n,a){if(n.delete(e.key),a.delete(e.key),!(!t||!e.children))for(const o of e.children)A(o,t,n,a)}function oe(e){const t={},n=a=>{if(a.children)for(const o of a.children)t[o.key]=a,n(o)};return e&&e.forEach(n),t}function le(e){const t={},n=a=>{var o;t[a.key]=a,(o=a.children)==null||o.forEach(n)};return e&&e.forEach(n),t}function R(e,t){if(!t)return{checked:[],halfChecked:[]};const n=le(e),a=[],o=[];for(const c of t)n[c]&&(_(n[c],new Set(t))?o.push(c):a.push(c));return{checked:a,halfChecked:o}}function B(e,t,n){function a(o){if(n){if(t.has(o.key))return!0}else if(!t.has(o.key)&&e.key!==o.key)return!0;const c=o.children||[];for(let f=0;f<c.length;f++){const m=c[f];if(a(m))return!0}return!1}return a(e)}function ye(e,t){const n=e.node.key,a=e.dragNode.key,o=e.node.pos.split("-"),c=e.dropPosition-Number(o[o.length-1]),f=(l,p,y)=>{for(let s=0;s<l.length;s++){if(l[s].key===p)return y(l[s],s,l);l[s].children&&f(l[s].children,p,y)}},m=[...t];let h;if(f(m,a,(l,p,y)=>{y.splice(p,1),h=l}),!e.dropToGap)f(m,n,l=>{l.children=l.children||[],l.children.unshift(h)});else if((e.node.props.children||[]).length>0&&e.node.props.expanded&&c===1)f(m,n,l=>{l.children=l.children||[],l.children.unshift(h)});else{let l=[],p;f(m,n,(y,s,V)=>{l=V,p=s}),c===-1?l.splice(p,0,h):l.splice(p+1,0,h)}return m}const ie=({checked:e,disabled:t,invalid:n})=>i.createElement(i.Fragment,null,i.createElement(L,{className:"kl-v6-checkbox-icon-normal",checked:e,disabled:t,invalid:n}),i.createElement(L,{className:"kl-v6-checkbox-icon-indeterminate",disabled:t,indeterminate:!0,invalid:n})),de=({checked:e,disabled:t,invalid:n,testId:a})=>i.createElement(ae,{disabled:t,value:e?"1":"2",invalid:n,testId:a,options:[{label:"",value:"1"}]}),D=({checkable:e,checked:t,disabled:n,multiple:a,invalid:o,...c})=>e===!1?null:a?i.createElement(ie,{checked:t,disabled:n,invalid:o}):i.createElement(de,{checked:t,disabled:n,invalid:o,testId:c["data-testid"]?`${c["data-testid"]}-radio`:void 0}),q=z(({className:e})=>i.createElement("span",{className:e},i.createElement(ne,{size:"small"})))`
  width: 0;
  height: 0;
  display: block;

  > .ant-spin {
    transform: translate(calc(-100% - 4px), -1px);
  }
`,ce=z(Z)`
  ${re}

  .ant-tree-icon__customize:has(${q}:last-child) {
    width: 0;
    margin-right: -4px;
  }
`,W=({checkChildren:e=!0,checkStrictly:t=!1,checkable:n=!1,checkedKeys:a,defaultCheckedKeys:o,disabled:c=!1,draggable:f=!1,invalid:m=!1,multiple:h=!0,onCheck:l,onActionClick:p,selectable:y=!1,treeData:s,allowUncheck:V=!0,checkParents:S=!1,showLine:H=!1,interactive:M=!1,renderAction:E,actionIcon:F=i.createElement(ee,null),...K})=>{const{testAttributes:G}=Q(K),g=i.useMemo(()=>oe(s),[s]),[v,T]=i.useState(()=>R(s,o)),O=i.useMemo(()=>h?t?a:v:[...v.checked,...v.halfChecked],[h,t,v,a]);i.useEffect(()=>{t||!a||T(R(s,a))},[t,a,s]);const U=(b,w)=>{const d=new Set(v.checked),u=new Set(v.halfChecked),k=w.node;if(w.checked&&!u.has(k.key))if(!h)d.clear(),u.clear(),C(k,!1,d,u);else{C(k,e,d,u);let r=g[k.key];if(S)for(;r;)d.delete(r.key),u.delete(r.key),B(r,d,!1)?u.add(r.key):d.add(r.key),r=g[r.key];else for(;r&&(u.has(r.key)&&!_(r,d));)d.add(r.key),u.delete(r.key),r=g[r.key]}else{if(!V)return;A(k,e,d,u);let r=g[k.key];if(S)for(;r;)d.delete(r.key),B(r,d,!0)?u.add(r.key):u.delete(r.key),r=g[r.key];else for(;r&&(u.has(r.key)&&!_(r,d));)d.add(r.key),u.delete(r.key),r=g[r.key]}const $=Array.from(d),I=Array.from(u);T({checked:$,halfChecked:I}),l&&l([...$,...I],w)};return i.createElement(ce,{draggable:f,checkStrictly:!0,checkable:n,interactive:M,checkedKeys:O,disabled:c,icon:b=>i.createElement(i.Fragment,null,b.loading&&i.createElement(q,null),i.createElement(D,{...b,disabled:b.disabled||c,multiple:h,invalid:m})),onCheck:t?l:U,selectable:y,showIcon:n,switcherIcon:i.createElement(te,null),treeData:s,titleRender:b=>{const w=u=>{u.stopPropagation(),p==null||p(b)},d=(E||p)&&b._action!==!1&&i.createElement(X,{className:"hexa-ui-tree-node-action",icon:F,onClick:w});return i.createElement("span",{className:"hexa-ui-tree-node-title"},i.createElement("span",null,b.title),(E==null?void 0:E({node:b,children:d}))||d)},...G,...K,showLine:H,motion:!1})};try{D.displayName="TreeNodeCheckIcon",D.__docgenInfo={description:"",displayName:"TreeNodeCheckIcon",props:{checkable:{defaultValue:{value:"false"},description:"",name:"checkable",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},multiple:{defaultValue:{value:"true"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{q.displayName="Spinner",q.__docgenInfo={description:"",displayName:"Spinner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{W.displayName="Tree",W.__docgenInfo={description:"",displayName:"Tree",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},loadData:{defaultValue:null,description:"Load data asynchronously",name:"loadData",required:!1,type:{name:"((treeNode: EventDataNode) => Promise<void>)"}},icon:{defaultValue:null,description:"Custom treeNode icon",name:"icon",required:!1,type:{name:"ReactNode | ((props: AntTreeNodeProps) => ReactNode)"}},onSelect:{defaultValue:null,description:"Callback function for when the onSelect event occurs",name:"onSelect",required:!1,type:{name:'((selectedKeys: Key[], info: { event: "select"; selected: boolean; node: EventDataNode; selectedNodes: (DataNode | BasicDataNode)[]; nativeEvent: MouseEvent; }) => void)'}},showIcon:{defaultValue:null,description:"Shows an icon before a TreeNode's title. There is no default for this",name:"showIcon",required:!1,type:{name:"boolean"}},selectedKeys:{defaultValue:null,description:"Specifies the keys of the selected treeNodes",name:"selectedKeys",required:!1,type:{name:"Key[]"}},treeData:{defaultValue:null,description:`The treeNodes data Array, if set it then you need not construct children TreeNode.
(key should be unique across the whole array)`,name:"treeData",required:!1,type:{name:"DataNode[]"}},disabled:{defaultValue:{value:"false"},description:"Whether disabled the tree",name:"disabled",required:!1,type:{name:"boolean"}},draggable:{defaultValue:{value:"false"},description:"Specifies whether this Tree or the node is draggable",name:"draggable",required:!1,type:{name:"boolean | DraggableFn | DraggableConfig"}},showLine:{defaultValue:{value:"false"},description:"Show tree line",name:"showLine",required:!1,type:{name:"boolean"}},checkChildren:{defaultValue:{value:"true"},description:"Whether to check children if the parent node is checked. Has no effect if checkStrictly is true",name:"checkChildren",required:!1,type:{name:"boolean"}},checkParents:{defaultValue:{value:"false"},description:"Whether to check/half check/uncheck parents if the node is checked. Has no effect if checkStrictly is true",name:"checkParents",required:!1,type:{name:"boolean"}},checkStrictly:{defaultValue:{value:"false"},description:"Check treeNode precisely; parent treeNode and children treeNodes are not associated",name:"checkStrictly",required:!1,type:{name:"boolean"}},onCheck:{defaultValue:null,description:"Callback function for when the onCheck event occurs",name:"onCheck",required:!1,type:{name:"((checkedKeys: Key[] | { checked: Key[]; halfChecked: Key[]; }, e: TreeCheckEvent) => void)"}},checkedKeys:{defaultValue:null,description:"Specifies the keys of the checked treeNodes",name:"checkedKeys",required:!1,type:{name:"Key[]"}},onExpand:{defaultValue:null,description:"Callback function for when a treeNode is expanded or collapsed",name:"onExpand",required:!1,type:{name:"((newExpandedKeys: Key[], info: { node: EventDataNode; expanded: boolean; nativeEvent: MouseEvent; }) => void)"}},expandedKeys:{defaultValue:null,description:"Specifies the keys of the expanded treeNodes",name:"expandedKeys",required:!1,type:{name:"Key[]"}},onLoad:{defaultValue:null,description:"Callback function for when a treeNode is loaded by loadData function",name:"onLoad",required:!1,type:{name:'((loadedKeys: Key[], info: { event: "load"; node: EventDataNode; }) => void)'}},loadedKeys:{defaultValue:null,description:"Specifies the keys of the loaded treeNodes by loadData function",name:"loadedKeys",required:!1,type:{name:"Key[]"}},autoExpandParent:{defaultValue:null,description:"Whether to automatically expand a parent treeNode",name:"autoExpandParent",required:!1,type:{name:"boolean"}},onDragStart:{defaultValue:null,description:"Callback function for when the onDragStart event occurs",name:"onDragStart",required:!1,type:{name:"((info: NodeDragEventParams) => void)"}},onDragEnter:{defaultValue:null,description:"Callback function for when the onDragEnter event occurs",name:"onDragEnter",required:!1,type:{name:"((info: NodeDragEventParams & { expandedKeys: Key[]; }) => void)"}},onDragOver:{defaultValue:null,description:"Callback function for when the onDragOver event occurs",name:"onDragOver",required:!1,type:{name:"((info: NodeDragEventParams) => void)"}},onDragLeave:{defaultValue:null,description:"Callback function for when the onDragLeave event occurs",name:"onDragLeave",required:!1,type:{name:"((info: NodeDragEventParams) => void)"}},onDragEnd:{defaultValue:null,description:"Callback function for when the onDragEnd event occurs",name:"onDragEnd",required:!1,type:{name:"((info: NodeDragEventParams) => void)"}},onDrop:{defaultValue:null,description:"Callback function for when the onDrop event occurs",name:"onDrop",required:!1,type:{name:"((info: NodeDropEventParams) => void)"}},onActionClick:{defaultValue:null,description:"Callback function for when the onClick event occurs on settings button",name:"onActionClick",required:!1,type:{name:"((node: DataNode) => void)"}},renderAction:{defaultValue:null,description:"Custom render action. Children is ActionButton(Gear)",name:"renderAction",required:!1,type:{name:"(({ children, node }: PropsWithChildren<{ node: DataNode; }>) => void)"}},actionIcon:{defaultValue:{value:"<SettingsGear />"},description:"Custom action icon. Default is <SettingsGear />",name:"actionIcon",required:!1,type:{name:"ReactNode"}},defaultCheckedKeys:{defaultValue:null,description:"Specify the keys of the default checked treeNodes",name:"defaultCheckedKeys",required:!1,type:{name:"Key[]"}},defaultExpandedKeys:{defaultValue:null,description:"Specify the keys of the default expanded treeNodes",name:"defaultExpandedKeys",required:!1,type:{name:"Key[]"}},blockNode:{defaultValue:null,description:"Whether treeNode fill remaining horizontal space",name:"blockNode",required:!1,type:{name:"boolean"}},allowUncheck:{defaultValue:{value:"true"},description:"Whether user can uncheck an item",name:"allowUncheck",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"Config virtual scroll height. Will not support horizontal scroll when enable this",name:"height",required:!1,type:{name:"number"}},virtual:{defaultValue:null,description:"Disable virtual scroll when set to false",name:"virtual",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"Is invalid",name:"invalid",required:!1,type:{name:"boolean"}},interactive:{defaultValue:{value:"false"},description:"",name:"interactive",required:!1,type:{name:"boolean"}},checkable:{defaultValue:{value:"false"},description:"",name:"checkable",required:!1,type:{name:"boolean"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},disableNodeBg:{defaultValue:null,description:"",name:"disableNodeBg",required:!1,type:{name:"boolean"}},multiple:{defaultValue:{value:"true"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{q as S,W as T,ye as a,D as b,re as t};
