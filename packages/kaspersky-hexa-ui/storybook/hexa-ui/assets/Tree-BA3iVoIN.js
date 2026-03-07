import{a2 as H,a0 as O,a3 as U,u as M,R as s,A as Y,H as V}from"./iframe-zz6a49H8.js";import{S,C as $}from"./Checkbox-CLDGkQjT.js";import{R as J}from"./Radio-Be_5Z3PZ.js";import{l as Q}from"./SettingsGear-BNA7541v.js";import{t as X}from"./ArrowDownSolid-DU27KX-r.js";import{L as Z}from"./Loader-Y1gOuUZF.js";import{T as ee}from"./Tree-Doq3QtyM.js";const N=e=>`linear-gradient(to right, rgba(0, 0, 0, 0) 0%, ${e} 75%);`,x=H(U.BTR3),te=O`
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
    
    ${S} {
      padding-top: 3px;
      
      + ${S} {
        padding-top: 0;
      }
    }
  }
`;function T(e,t){if(!e.children)return!1;for(const n of e.children)if(!t.has(n.key)||T(n,t))return!0;return!1}function E(e,t,n,r){if(t){if(n.add(e.key),r.delete(e.key),!e.children)return;for(const o of e.children)E(o,t,n,r)}else T(e,n)?r.add(e.key):n.add(e.key)}function B(e,t,n,r){if(n.delete(e.key),r.delete(e.key),!(!t||!e.children))for(const o of e.children)B(o,t,n,r)}function ne(e){const t={},n=r=>{if(r.children)for(const o of r.children)t[o.key]=r,n(o)};return e&&e.forEach(n),t}function re(e){const t={},n=r=>{var o;t[r.key]=r,(o=r.children)==null||o.forEach(n)};return e&&e.forEach(n),t}function A(e,t){if(!t)return{checked:[],halfChecked:[]};const n=re(e),r=[],o=[];for(const d of t)n[d]&&(T(n[d],new Set(t))?o.push(d):r.push(d));return{checked:r,halfChecked:o}}function R(e,t,n){function r(o){if(n){if(t.has(o.key))return!0}else if(!t.has(o.key)&&e.key!==o.key)return!0;const d=o.children||[];for(let m=0;m<d.length;m++){const f=d[m];if(r(f))return!0}return!1}return r(e)}function he(e,t){const n=e.node.key,r=e.dragNode.key,o=e.node.pos.split("-"),d=e.dropPosition-Number(o[o.length-1]),m=(i,p,b)=>{for(let l=0;l<i.length;l++){if(i[l].key===p)return b(i[l],l,i);i[l].children&&m(i[l].children,p,b)}},f=[...t];let h;if(m(f,r,(i,p,b)=>{b.splice(p,1),h=i}),!e.dropToGap)m(f,n,i=>{i.children=i.children||[],i.children.unshift(h)});else if((e.node.props.children||[]).length>0&&e.node.props.expanded&&d===1)m(f,n,i=>{i.children=i.children||[],i.children.unshift(h)});else{let i=[],p;m(f,n,(b,l,q)=>{i=q,p=l}),d===-1?i.splice(p,0,h):i.splice(p+1,0,h)}return f}const ae=({checked:e,disabled:t,invalid:n})=>s.createElement(s.Fragment,null,s.createElement($,{className:"kl-v6-checkbox-icon-normal",checked:e,disabled:t,invalid:n}),s.createElement($,{className:"kl-v6-checkbox-icon-indeterminate",disabled:t,indeterminate:!0,invalid:n})),oe=({checked:e,disabled:t,invalid:n,testId:r})=>s.createElement(J,{disabled:t,value:e?"1":"2",invalid:n,testId:r,options:[{label:"",value:"1"}]}),j=({checkable:e,checked:t,disabled:n,multiple:r,invalid:o,...d})=>e===!1?null:r?s.createElement(ae,{checked:t,disabled:n,invalid:o}):s.createElement(oe,{checked:t,disabled:n,invalid:o,testId:d["data-testid"]?`${d["data-testid"]}-radio`:void 0}),I=V(({className:e})=>s.createElement("span",{className:e},s.createElement(Z,{size:"small"})))`
  width: 0;
  height: 0;
  display: block;

  > .ant-spin {
    transform: translate(calc(-100% - 4px), -1px);
  }
`,ie=V(ee)`
  ${te}

  .ant-tree-icon__customize:has(${I}:last-child) {
    width: 0;
    margin-right: -4px;
  }
`,se=({checkChildren:e=!0,checkStrictly:t=!1,checkable:n=!1,checkedKeys:r,defaultCheckedKeys:o,disabled:d=!1,draggable:m=!1,invalid:f=!1,multiple:h=!0,onCheck:i,onActionClick:p,selectable:b=!1,treeData:l,allowUncheck:q=!0,checkParents:D=!1,showLine:W=!1,interactive:z=!1,..._})=>{const{testAttributes:L}=M(_),y=s.useMemo(()=>ne(l),[l]),[v,K]=s.useState(()=>A(l,o)),F=s.useMemo(()=>h?t?r:v:[...v.checked,...v.halfChecked],[h,t,v,r]);s.useEffect(()=>{t||!r||K(A(l,r))},[t,r,l]);const G=(g,w)=>{const c=new Set(v.checked),u=new Set(v.halfChecked),k=w.node;if(w.checked&&!u.has(k.key))if(!h)c.clear(),u.clear(),E(k,!1,c,u);else{E(k,e,c,u);let a=y[k.key];if(D)for(;a;)c.delete(a.key),u.delete(a.key),R(a,c,!1)?u.add(a.key):c.add(a.key),a=y[a.key];else for(;a&&(u.has(a.key)&&!T(a,c));)c.add(a.key),u.delete(a.key),a=y[a.key]}else{if(!q)return;B(k,e,c,u);let a=y[k.key];if(D)for(;a;)c.delete(a.key),R(a,c,!0)?u.add(a.key):u.delete(a.key),a=y[a.key];else for(;a&&(u.has(a.key)&&!T(a,c));)c.add(a.key),u.delete(a.key),a=y[a.key]}const C=Array.from(c),P=Array.from(u);K({checked:C,halfChecked:P}),i&&i([...C,...P],w)};return s.createElement(ie,{draggable:m,checkStrictly:!0,checkable:n,interactive:z,checkedKeys:F,disabled:d,icon:g=>s.createElement(s.Fragment,null,g.loading&&s.createElement(I,null),s.createElement(j,{...g,disabled:g.disabled||d,multiple:h,invalid:f})),invalid:f,onCheck:t?i:G,selectable:b,showIcon:n,switcherIcon:s.createElement(X,null),treeData:l,titleRender:g=>{const w=c=>{c.stopPropagation(),p==null||p(g)};return s.createElement("span",{className:"hexa-ui-tree-node-title"},s.createElement("span",null,g.title),p&&g._action!==!1&&s.createElement(Y,{className:"hexa-ui-tree-node-action",icon:s.createElement(Q,null),onClick:w}))},...L,..._,showLine:W,motion:!1})};j.__docgenInfo={description:"",methods:[],displayName:"TreeNodeCheckIcon",props:{checkable:{required:!1,tsType:{name:"boolean"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};se.__docgenInfo={description:"@deprecated Use TreeList or TreeNav instead",methods:[],displayName:"Tree",props:{theme:{required:!1,tsType:{name:"ThemeKey"},description:"Custom theme"},treeData:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`BaseDataNode & {
  _action?: boolean,
  children?: DataNode[]
}`,elements:[{name:"BaseDataNode"},{name:"signature",type:"object",raw:`{
  _action?: boolean,
  children?: DataNode[]
}`,signature:{properties:[{key:"_action",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"DataNode"}],raw:"DataNode[]",required:!1}}]}}]}],raw:"DataNode[]"},description:`The treeNodes data Array, if set it then you need not construct children TreeNode.
(key should be unique across the whole array)`},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether disabled the tree",defaultValue:{value:"false",computed:!1}},draggable:{required:!1,tsType:{name:"union",raw:"DraggableFn | boolean | DraggableConfig",elements:[{name:"signature",type:"function",raw:"(node: DataNode) => boolean",signature:{arguments:[{type:{name:"intersection",raw:`BaseDataNode & {
  _action?: boolean,
  children?: DataNode[]
}`,elements:[{name:"BaseDataNode"},{name:"signature",type:"object",raw:`{
  _action?: boolean,
  children?: DataNode[]
}`,signature:{properties:[{key:"_action",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"DataNode"}],raw:"DataNode[]",required:!1}}]}}]},name:"node"}],return:{name:"boolean"}}},{name:"boolean"},{name:"DraggableConfig"}]},description:"Specifies whether this Tree or the node is draggable",defaultValue:{value:"false",computed:!1}},showLine:{required:!1,tsType:{name:"boolean"},description:"Show tree line",defaultValue:{value:"false",computed:!1}},checkChildren:{required:!1,tsType:{name:"boolean"},description:"Whether to check children if the parent node is checked. Has no effect if checkStrictly is true",defaultValue:{value:"true",computed:!1}},checkParents:{required:!1,tsType:{name:"boolean"},description:"Whether to check/half check/uncheck parents if the node is checked. Has no effect if checkStrictly is true",defaultValue:{value:"false",computed:!1}},checkStrictly:{required:!1,tsType:{name:"boolean"},description:"Check treeNode precisely; parent treeNode and children treeNodes are not associated",defaultValue:{value:"false",computed:!1}},onCheck:{required:!1,tsType:{name:"signature",type:"function",raw:"(checkedKeys: Key[], e: TreeCheckEvent) => void | undefined",signature:{arguments:[{type:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},name:"checkedKeys"},{type:{name:"signature",type:"object",raw:`{
  checked: boolean,
  halfCheckedKeys: [],
  event: Record<string, string>,
  checkedNodes: Record<string, string>[],
  node: { checked: boolean, key: string }
}`,signature:{properties:[{key:"checked",value:{name:"boolean",required:!0}},{key:"halfCheckedKeys",value:{name:"tuple",raw:"[]",elements:[],required:!0}},{key:"event",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!0}},{key:"checkedNodes",value:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"}],raw:"Record<string, string>[]",required:!0}},{key:"node",value:{name:"signature",type:"object",raw:"{ checked: boolean, key: string }",signature:{properties:[{key:"checked",value:{name:"boolean",required:!0}},{key:"key",value:{name:"string",required:!0}}]},required:!0}}]}},name:"e"}],return:{name:"union",raw:"void | undefined",elements:[{name:"void"},{name:"undefined"}]}}},description:"Callback function for when the onCheck event occurs"},checkedKeys:{required:!1,tsType:{name:"union",raw:"string[] | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"undefined"}]},description:"Specifies the keys of the checked treeNodes"},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(newExpandedKeys: string[], info: { node: EventDataNode, expanded: boolean }) => void | undefined",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"newExpandedKeys"},{type:{name:"signature",type:"object",raw:"{ node: EventDataNode, expanded: boolean }",signature:{properties:[{key:"node",value:{name:"EventDataNode",required:!0}},{key:"expanded",value:{name:"boolean",required:!0}}]}},name:"info"}],return:{name:"union",raw:"void | undefined",elements:[{name:"void"},{name:"undefined"}]}}},description:"Callback function for when a treeNode is expanded or collapsed"},expandedKeys:{required:!1,tsType:{name:"union",raw:"string[] | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"undefined"}]},description:"Specifies the keys of the expanded treeNodes"},onLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"(newExpandedKeys: string[]) => void | undefined",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"newExpandedKeys"}],return:{name:"union",raw:"void | undefined",elements:[{name:"void"},{name:"undefined"}]}}},description:"Callback function for when a treeNode is loaded by loadData function"},loadedKeys:{required:!1,tsType:{name:"union",raw:"string[] | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"undefined"}]},description:"Specifies the keys of the loaded treeNodes by loadData function"},autoExpandParent:{required:!1,tsType:{name:"boolean"},description:"Whether to automatically expand a parent treeNode"},onDragStart:{required:!1,tsType:{name:"signature",type:"function",raw:"(info: NodeDragEventParams) => void",signature:{arguments:[{type:{name:"NodeDragEventParams"},name:"info"}],return:{name:"void"}}},description:"Callback function for when the onDragStart event occurs"},onDragEnter:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  info: NodeDragEventParams & {
    expandedKeys: Key[]
  }
) => void`,signature:{arguments:[{type:{name:"intersection",raw:`NodeDragEventParams & {
  expandedKeys: Key[]
}`,elements:[{name:"NodeDragEventParams"},{name:"signature",type:"object",raw:`{
  expandedKeys: Key[]
}`,signature:{properties:[{key:"expandedKeys",value:{name:"Array",elements:[{name:"Key"}],raw:"Key[]",required:!0}}]}}]},name:"info"}],return:{name:"void"}}},description:"Callback function for when the onDragEnter event occurs"},onDragOver:{required:!1,tsType:{name:"signature",type:"function",raw:"(info: NodeDragEventParams) => void",signature:{arguments:[{type:{name:"NodeDragEventParams"},name:"info"}],return:{name:"void"}}},description:"Callback function for when the onDragOver event occurs"},onDragLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"(info: NodeDragEventParams) => void",signature:{arguments:[{type:{name:"NodeDragEventParams"},name:"info"}],return:{name:"void"}}},description:"Callback function for when the onDragLeave event occurs"},onDragEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(info: NodeDragEventParams) => void",signature:{arguments:[{type:{name:"NodeDragEventParams"},name:"info"}],return:{name:"void"}}},description:"Callback function for when the onDragEnd event occurs"},onDrop:{required:!1,tsType:{name:"signature",type:"function",raw:"(info: NodeDropEventParams) => void",signature:{arguments:[{type:{name:"intersection",raw:`NodeDragEventParams & {
  dragNode: EventDataNode,
  dragNodesKeys: Key[],
  dropPosition: number,
  dropToGap: boolean
}`,elements:[{name:"NodeDragEventParams"},{name:"signature",type:"object",raw:`{
  dragNode: EventDataNode,
  dragNodesKeys: Key[],
  dropPosition: number,
  dropToGap: boolean
}`,signature:{properties:[{key:"dragNode",value:{name:"EventDataNode",required:!0}},{key:"dragNodesKeys",value:{name:"Array",elements:[{name:"Key"}],raw:"Key[]",required:!0}},{key:"dropPosition",value:{name:"number",required:!0}},{key:"dropToGap",value:{name:"boolean",required:!0}}]}}]},name:"info"}],return:{name:"void"}}},description:"Callback function for when the onDrop event occurs"},onActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: DataNode) => void",signature:{arguments:[{type:{name:"intersection",raw:`BaseDataNode & {
  _action?: boolean,
  children?: DataNode[]
}`,elements:[{name:"BaseDataNode"},{name:"signature",type:"object",raw:`{
  _action?: boolean,
  children?: DataNode[]
}`,signature:{properties:[{key:"_action",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"DataNode"}],raw:"DataNode[]",required:!1}}]}}]},name:"node"}],return:{name:"void"}}},description:"Callback function for when the onClick event occurs on settings button"},defaultCheckedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},description:"Specify the keys of the default checked treeNodes"},defaultExpandedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},description:"Specify the keys of the default expanded treeNodes"},blockNode:{required:!1,tsType:{name:"boolean"},description:"Whether treeNode fill remaining horizontal space"},allowUncheck:{required:!1,tsType:{name:"boolean"},description:"Whether user can uncheck an item",defaultValue:{value:"true",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Config virtual scroll height. Will not support horizontal scroll when enable this"},virtual:{required:!1,tsType:{name:"boolean"},description:"Disable virtual scroll when set to false"},invalid:{required:!1,tsType:{name:"boolean"},description:"Is invalid",defaultValue:{value:"false",computed:!1}},interactive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checkable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disableNodeBg:{required:!1,tsType:{name:"boolean"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},icon:{required:!1,tsType:{name:"TreeProps['icon']",raw:"TreeProps['icon']"},description:""}}};export{I as S,se as T,j as a,he as b,te as t};
