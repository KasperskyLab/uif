import{C as j,a1 as Y,ao as J,w as Q,R as l,A as X,H as z}from"./iframe-4-PRSI1I.js";import{S as P,a as L}from"./Checkbox-C_Wci0Rq.js";import{R as Z}from"./Radio-DUuhhrf2.js";import{T as ee}from"./Tree-BLyxVEuJ.js";import{r as te}from"./SettingsGear-Cqb3tsn_.js";import{t as ne}from"./TextWithTruncation-BuGmQSH-.js";import{L as ae}from"./Loader-CzWCOjAf.js";const _=e=>`linear-gradient(to right, rgba(0, 0, 0, 0) 0%, ${e} 75%);`,x=Y(J.BTR3),re=j`
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
          background: ${_("var(--submenu_item--bg--hover)")};
        }
      }

      &.ant-tree-treenode:active .hexa-ui-tree-node-action {
        background-color: var(--submenu_item--bg--active);
        ::before {
          background: ${_("var(--submenu_item--bg--active)")};
        }
      }

      &.ant-tree-treenode.ant-tree-treenode-selected .hexa-ui-tree-node-action {
        background-color: var(--submenu_item--bg--hover_selected);
        ::before {
          background: ${_("var(--submenu_item--bg--hover_selected)")};
        }
      }

      &.ant-tree-treenode.ant-tree-treenode-selected:active .hexa-ui-tree-node-action {
        background-color: var(--submenu_item--bg--active_selected);
        ::before {
          background: ${_("var(--submenu_item--bg--active_selected)")};
        }
      }

      &.ant-tree-treenode.ant-tree-treenode-disabled .hexa-ui-tree-node-action {
        background-color: var(--submenu_item--bg--enabled);
        ::before {
          background: ${_("var(--submenu_item--bg--enabled)")};
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
`;function E(e,t){if(!e.children)return!1;for(const n of e.children)if(!t.has(n.key)||E(n,t))return!0;return!1}function C(e,t,n,a){if(t){if(n.add(e.key),a.delete(e.key),!e.children)return;for(const o of e.children)C(o,t,n,a)}else E(e,n)?a.add(e.key):n.add(e.key)}function H(e,t,n,a){if(n.delete(e.key),a.delete(e.key),!(!t||!e.children))for(const o of e.children)H(o,t,n,a)}function oe(e){const t={},n=a=>{if(a.children)for(const o of a.children)t[o.key]=a,n(o)};return e&&e.forEach(n),t}function ie(e){const t={},n=a=>{var o;t[a.key]=a,(o=a.children)==null||o.forEach(n)};return e&&e.forEach(n),t}function R(e,t){if(!t)return{checked:[],halfChecked:[]};const n=ie(e),a=[],o=[];for(const c of t)n[c]&&(E(n[c],new Set(t))?o.push(c):a.push(c));return{checked:a,halfChecked:o}}function W(e,t,n){function a(o){if(n){if(t.has(o.key))return!0}else if(!t.has(o.key)&&e.key!==o.key)return!0;const c=o.children||[];for(let f=0;f<c.length;f++){const h=c[f];if(a(h))return!0}return!1}return a(e)}function ge(e,t){const n=e.node.key,a=e.dragNode.key,o=e.node.pos.split("-"),c=e.dropPosition-Number(o[o.length-1]),f=(i,p,g)=>{for(let s=0;s<i.length;s++){if(i[s].key===p)return g(i[s],s,i);i[s].children&&f(i[s].children,p,g)}},h=[...t];let m;if(f(h,a,(i,p,g)=>{g.splice(p,1),m=i}),!e.dropToGap)f(h,n,i=>{i.children=i.children||[],i.children.unshift(m)});else if((e.node.props.children||[]).length>0&&e.node.props.expanded&&c===1)f(h,n,i=>{i.children=i.children||[],i.children.unshift(m)});else{let i=[],p;f(h,n,(g,s,N)=>{i=N,p=s}),c===-1?i.splice(p,0,m):i.splice(p+1,0,m)}return h}const le=({checked:e,disabled:t,invalid:n})=>l.createElement(l.Fragment,null,l.createElement(L,{className:"kl-v6-checkbox-icon-normal",checked:e,disabled:t,invalid:n}),l.createElement(L,{className:"kl-v6-checkbox-icon-indeterminate",disabled:t,indeterminate:!0,invalid:n})),de=({checked:e,disabled:t,invalid:n,testId:a})=>l.createElement(Z,{disabled:t,value:e?"1":"2",invalid:n,testId:a,options:[{label:"",value:"1"}]}),D=({checkable:e,checked:t,disabled:n,multiple:a,invalid:o,...c})=>e===!1?null:a?l.createElement(le,{checked:t,disabled:n,invalid:o}):l.createElement(de,{checked:t,disabled:n,invalid:o,testId:c["data-testid"]?`${c["data-testid"]}-radio`:void 0}),V=z(({className:e})=>l.createElement("span",{className:e},l.createElement(ae,{size:"small"})))`
  width: 0;
  height: 0;
  display: block;

  > .ant-spin {
    transform: translate(calc(-100% - 4px), -1px);
  }
`,ce=z(ee)`
  ${re}

  .ant-tree-icon__customize:has(${V}:last-child) {
    width: 0;
    margin-right: -4px;
  }
`,B=({checkChildren:e=!0,checkStrictly:t=!1,checkable:n=!1,checkedKeys:a,defaultCheckedKeys:o,disabled:c=!1,draggable:f=!1,invalid:h=!1,multiple:m=!0,onCheck:i,onActionClick:p,selectable:g=!1,treeData:s,allowUncheck:N=!0,checkParents:S=!1,showLine:A=!1,interactive:U=!1,renderAction:q,actionIcon:F=l.createElement(te,null),...T})=>{const{testAttributes:G}=Q(T),y=l.useMemo(()=>oe(s),[s]),[k,I]=l.useState(()=>R(s,o)),M=l.useMemo(()=>m?t?a:k:[...k.checked,...k.halfChecked],[m,t,k,a]);l.useEffect(()=>{t||!a||I(R(s,a))},[t,a,s]);const O=(b,w)=>{const d=new Set(k.checked),u=new Set(k.halfChecked),v=w.node;if(w.checked&&!u.has(v.key))if(!m)d.clear(),u.clear(),C(v,!1,d,u);else{C(v,e,d,u);let r=y[v.key];if(S)for(;r;)d.delete(r.key),u.delete(r.key),W(r,d,!1)?u.add(r.key):d.add(r.key),r=y[r.key];else for(;r&&(u.has(r.key)&&!E(r,d));)d.add(r.key),u.delete(r.key),r=y[r.key]}else{if(!N)return;H(v,e,d,u);let r=y[v.key];if(S)for(;r;)d.delete(r.key),W(r,d,!0)?u.add(r.key):u.delete(r.key),r=y[r.key];else for(;r&&(u.has(r.key)&&!E(r,d));)d.add(r.key),u.delete(r.key),r=y[r.key]}const K=Array.from(d),$=Array.from(u);I({checked:K,halfChecked:$}),i&&i([...K,...$],w)};return l.createElement(ce,{draggable:f,checkStrictly:!0,checkable:n,interactive:U,checkedKeys:M,disabled:c,icon:b=>l.createElement(l.Fragment,null,b.loading&&l.createElement(V,null),l.createElement(D,{...b,disabled:b.disabled||c,multiple:m,invalid:h})),invalid:h,onCheck:t?i:O,selectable:g,showIcon:n,switcherIcon:l.createElement(ne,null),treeData:s,titleRender:b=>{const w=u=>{u.stopPropagation(),p==null||p(b)},d=(q||p)&&b._action!==!1&&l.createElement(X,{className:"hexa-ui-tree-node-action",icon:F,onClick:w});return l.createElement("span",{className:"hexa-ui-tree-node-title"},l.createElement("span",null,b.title),(q==null?void 0:q({node:b,children:d}))||d)},...G,...T,showLine:A,motion:!1})};try{D.displayName="TreeNodeCheckIcon",D.__docgenInfo={description:"",displayName:"TreeNodeCheckIcon",props:{checkable:{defaultValue:{value:"false"},description:"",name:"checkable",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},multiple:{defaultValue:{value:"true"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{V.displayName="Spinner",V.__docgenInfo={description:"",displayName:"Spinner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{B.displayName="Tree",B.__docgenInfo={description:"",displayName:"Tree",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},treeData:{defaultValue:null,description:`The treeNodes data Array, if set it then you need not construct children TreeNode.
(key should be unique across the whole array)`,name:"treeData",required:!1,type:{name:"DataNode[]"}},disabled:{defaultValue:{value:"false"},description:"Whether disabled the tree",name:"disabled",required:!1,type:{name:"boolean"}},draggable:{defaultValue:{value:"false"},description:"Specifies whether this Tree or the node is draggable",name:"draggable",required:!1,type:{name:"boolean | DraggableFn | DraggableConfig"}},showLine:{defaultValue:{value:"false"},description:"Show tree line",name:"showLine",required:!1,type:{name:"boolean"}},checkChildren:{defaultValue:{value:"true"},description:"Whether to check children if the parent node is checked. Has no effect if checkStrictly is true",name:"checkChildren",required:!1,type:{name:"boolean"}},checkParents:{defaultValue:{value:"false"},description:"Whether to check/half check/uncheck parents if the node is checked. Has no effect if checkStrictly is true",name:"checkParents",required:!1,type:{name:"boolean"}},checkStrictly:{defaultValue:{value:"false"},description:"Check treeNode precisely; parent treeNode and children treeNodes are not associated",name:"checkStrictly",required:!1,type:{name:"boolean"}},onCheck:{defaultValue:null,description:"Callback function for when the onCheck event occurs",name:"onCheck",required:!1,type:{name:"((checkedKeys: Key[], e: TreeCheckEvent) => void)"}},checkedKeys:{defaultValue:null,description:"Specifies the keys of the checked treeNodes",name:"checkedKeys",required:!1,type:{name:"string[]"}},onExpand:{defaultValue:null,description:"Callback function for when a treeNode is expanded or collapsed",name:"onExpand",required:!1,type:{name:"((newExpandedKeys: string[], info: { node: EventDataNode; expanded: boolean; }) => void)"}},expandedKeys:{defaultValue:null,description:"Specifies the keys of the expanded treeNodes",name:"expandedKeys",required:!1,type:{name:"string[]"}},onLoad:{defaultValue:null,description:"Callback function for when a treeNode is loaded by loadData function",name:"onLoad",required:!1,type:{name:"((newExpandedKeys: string[]) => void)"}},loadedKeys:{defaultValue:null,description:"Specifies the keys of the loaded treeNodes by loadData function",name:"loadedKeys",required:!1,type:{name:"string[]"}},autoExpandParent:{defaultValue:null,description:"Whether to automatically expand a parent treeNode",name:"autoExpandParent",required:!1,type:{name:"boolean"}},onDragStart:{defaultValue:null,description:"Callback function for when the onDragStart event occurs",name:"onDragStart",required:!1,type:{name:"((info: NodeDragEventParams) => void)"}},onDragEnter:{defaultValue:null,description:"Callback function for when the onDragEnter event occurs",name:"onDragEnter",required:!1,type:{name:"((info: NodeDragEventParams & { expandedKeys: Key[]; }) => void)"}},onDragOver:{defaultValue:null,description:"Callback function for when the onDragOver event occurs",name:"onDragOver",required:!1,type:{name:"((info: NodeDragEventParams) => void)"}},onDragLeave:{defaultValue:null,description:"Callback function for when the onDragLeave event occurs",name:"onDragLeave",required:!1,type:{name:"((info: NodeDragEventParams) => void)"}},onDragEnd:{defaultValue:null,description:"Callback function for when the onDragEnd event occurs",name:"onDragEnd",required:!1,type:{name:"((info: NodeDragEventParams) => void)"}},onDrop:{defaultValue:null,description:"Callback function for when the onDrop event occurs",name:"onDrop",required:!1,type:{name:"((info: NodeDropEventParams) => void)"}},onActionClick:{defaultValue:null,description:"Callback function for when the onClick event occurs on settings button",name:"onActionClick",required:!1,type:{name:"((node: DataNode) => void)"}},renderAction:{defaultValue:null,description:"Custom render action. Children is ActionButton(Gear)",name:"renderAction",required:!1,type:{name:"(({ children, node }: PropsWithChildren<{ node: DataNode; }>) => void)"}},actionIcon:{defaultValue:{value:"<SettingsGear />"},description:"Custom action icon. Default is <SettingsGear />",name:"actionIcon",required:!1,type:{name:"ReactNode"}},defaultCheckedKeys:{defaultValue:null,description:"Specify the keys of the default checked treeNodes",name:"defaultCheckedKeys",required:!1,type:{name:"Key[]"}},defaultExpandedKeys:{defaultValue:null,description:"Specify the keys of the default expanded treeNodes",name:"defaultExpandedKeys",required:!1,type:{name:"Key[]"}},blockNode:{defaultValue:null,description:"Whether treeNode fill remaining horizontal space",name:"blockNode",required:!1,type:{name:"boolean"}},allowUncheck:{defaultValue:{value:"true"},description:"Whether user can uncheck an item",name:"allowUncheck",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"Config virtual scroll height. Will not support horizontal scroll when enable this",name:"height",required:!1,type:{name:"number"}},virtual:{defaultValue:null,description:"Disable virtual scroll when set to false",name:"virtual",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"Is invalid",name:"invalid",required:!1,type:{name:"boolean"}},interactive:{defaultValue:{value:"false"},description:"",name:"interactive",required:!1,type:{name:"boolean"}},checkable:{defaultValue:{value:"false"},description:"",name:"checkable",required:!1,type:{name:"boolean"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},disableNodeBg:{defaultValue:null,description:"",name:"disableNodeBg",required:!1,type:{name:"boolean"}},multiple:{defaultValue:{value:"true"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{V as S,B as T,D as a,ge as b,re as t};
