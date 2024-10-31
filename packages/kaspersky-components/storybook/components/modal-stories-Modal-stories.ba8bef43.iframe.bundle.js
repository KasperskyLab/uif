"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[9341],{"./helpers/hocs/MetaComponent/MetaDod.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.MetaDod=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_types=__webpack_require__("./helpers/hocs/MetaComponent/types.ts"),_tag=__webpack_require__("./src/tag/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const StyledTableContainer=_styledComponents.default.div.withConfig({displayName:"MetaDod__StyledTableContainer",componentId:"sc-1gxe50k-0"})(["&&&&&{width:300px;td,th,tr{background:transparent;border:none;}}"]),MetaDod=_ref=>{let{list}=_ref;const metaDodKeys=(0,_react.useMemo)((()=>Object.keys(_types.metaDod)),[]);return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:`Definition of done ${(new Date).getDate()}.${(new Date).getMonth()}.${(new Date).getFullYear()}`}),(0,_jsxRuntime.jsx)(StyledTableContainer,{children:(0,_jsxRuntime.jsxs)("table",{children:[(0,_jsxRuntime.jsx)("thead",{children:(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Point"})}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Status"})})]})}),(0,_jsxRuntime.jsx)("tbody",{children:metaDodKeys.map((key=>(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:_types.metaDod[key]}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)(_tag.Tag,{mode:list[key]?"grass":"red",children:list[key]?"ready":"need"})})]},key)))})]})})]})};exports.MetaDod=MetaDod;try{MetaDod.displayName="MetaDod",MetaDod.__docgenInfo={description:"",displayName:"MetaDod",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:'Partial<Record<"storybook" | "designTokens" | "useThemedHook" | "unitTests" | "screenshotTests" | "migration" | "apiTable" | "figmaView", boolean>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"]={docgenInfo:MetaDod.__docgenInfo,name:"MetaDod",path:"helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"})}catch(__react_docgen_typescript_loader_error){}},"./helpers/hocs/MetaComponent/types.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.metaDod=void 0;exports.metaDod={designTokens:"Дизайн токены",useThemedHook:"Использование theme hook",unitTests:"Unit tests",screenshotTests:"Screenshot tests",migration:"Описание миграции",apiTable:"api table",storybook:"storybook",figmaView:"Отображение в Фигме"}},"./helpers/hocs/MetaComponent/withMeta.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.withMeta=function withMeta(list,Component){return props=>(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Title,{children:list.component}),(0,_jsxRuntime.jsx)(_MetaDod.MetaDod,{list:list.dod}),(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Описание"}),list.description?(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.description}):"-",(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Использование"}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.usage}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:`[Дизайн](${list.designLink})`}),Component&&(0,_jsxRuntime.jsx)(Component,{...props}),(0,_jsxRuntime.jsx)(_blocks.Primary,{}),(0,_jsxRuntime.jsx)(_blocks.ArgsTable,{story:_blocks.PRIMARY_STORY}),(0,_jsxRuntime.jsx)(_blocks.Stories,{title:"Variants of View"})]})};(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/react/index.js"));var _MetaDod=__webpack_require__("./helpers/hocs/MetaComponent/MetaDod.tsx"),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js")},"./src/modal/stories/Modal.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.__namedExportsOrder=exports.WithThreeActionButtons=exports.WithScrollAndLongTitle=exports.WithLoadingAndDisableButtons=exports.WithCustomButtons=exports.CustomModalRender=exports.Basic=void 0;var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_WithThreeActionButto,_WithThreeActionButto2,_WithThreeActionButto3,_WithCustomButtons$pa,_WithCustomButtons$pa2,_WithCustomButtons$pa3,_WithScrollAndLongTit,_WithScrollAndLongTit2,_WithScrollAndLongTit3,_CustomModalRender$pa,_CustomModalRender$pa2,_CustomModalRender$pa3,_WithLoadingAndDisabl,_WithLoadingAndDisabl2,_WithLoadingAndDisabl3,_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_badges=__webpack_require__("./.storybook/badges.ts"),_withMeta=__webpack_require__("./helpers/hocs/MetaComponent/withMeta.tsx"),_storybookHelpers=__webpack_require__("./helpers/storybookHelpers.ts"),_Modal=__webpack_require__("./src/modal/Modal.tsx"),_meta=_interopRequireDefault(__webpack_require__("./src/modal/__meta__/meta.json")),_actionButton=__webpack_require__("./src/action-button/index.ts"),_button=__webpack_require__("./src/button/index.ts"),_2=__webpack_require__("./node_modules/@kaspersky/icons/16/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const defaultText="This is place holder text. The basic dialog for modals should contain only valuable and \nrelevant information. Simplify dialogs by removing unnecessary elements or content that \ndoes not support user tasks. If you find that the number of required elements for your design \nare making the dialog excessively large, then try a different design solution. ",defaultIcon=(0,_jsxRuntime.jsx)(_2.Placeholder,{klId:"button-icon"}),meta={title:"Molecules/Modal",component:_Modal.Modal,argTypes:{firstButtonText:{control:{type:"text"}},firstButtonMode:{control:{type:"select"},options:["primary","secondary","tertiary","dangerFilled","dangerOutlined"]},secondButtonText:{control:{type:"text"}},secondButtonMode:{control:{type:"select"},options:["primary","secondary","tertiary","dangerFilled","dangerOutlined"]},thirdButtonText:{control:{type:"text"}},thirdButtonMode:{control:{type:"select"},options:["primary","secondary","tertiary","dangerFilled","dangerOutlined"]},...(0,_storybookHelpers.sbHideControls)(["theme","actions","withOverlay","noIcon"])},args:{header:"Modal dialog",content:defaultText,mode:"default",size:"small",firstButtonText:"OK",firstButtonMode:"primary",secondButtonText:"Cancel",secondButtonMode:"secondary",thirdButtonText:"Cancel",thirdButtonMode:"secondary",testId:"modal-test-id",klId:"modal-kl-id"},parameters:{storySource:{source:"import React, { useState } from 'react';\nimport styled from 'styled-components';\nimport { badges } from '@sb/badges';\nimport { Meta, StoryObj } from '@storybook/react';\nimport { withMeta } from '@helpers/hocs/MetaComponent/withMeta';\nimport { sbHideControls } from '@helpers/storybookHelpers';\nimport { Modal } from '../Modal';\nimport { ModalProps } from '../types';\nimport MetaData from '../__meta__/meta.json';\nimport { ActionButton } from '@src/action-button';\nimport { Button } from '@src/button';\nimport { Placeholder } from '@kaspersky/icons/16';\nimport { ButtonModeActual as ButtonMode } from '@src/button/types';\nconst defaultText = `This is place holder text. The basic dialog for modals should contain only valuable and \nrelevant information. Simplify dialogs by removing unnecessary elements or content that \ndoes not support user tasks. If you find that the number of required elements for your design \nare making the dialog excessively large, then try a different design solution. `;\nconst defaultIcon = <Placeholder klId='button-icon' />;\ntype WithButtonProps = {\n  firstButtonText: string;\n  secondButtonText: string;\n  thirdButtonText: string;\n  firstButtonMode: ButtonMode;\n  secondButtonMode: ButtonMode;\n  thirdButtonMode: ButtonMode;\n} & ModalProps;\nconst meta: Meta<WithButtonProps> = {\n  title: 'Molecules/Modal',\n  component: Modal,\n  argTypes: {\n    firstButtonText: {\n      control: {\n        type: 'text'\n      }\n    },\n    firstButtonMode: {\n      control: {\n        type: 'select'\n      },\n      options: ['primary', 'secondary', 'tertiary', 'dangerFilled', 'dangerOutlined']\n    },\n    secondButtonText: {\n      control: {\n        type: 'text'\n      }\n    },\n    secondButtonMode: {\n      control: {\n        type: 'select'\n      },\n      options: ['primary', 'secondary', 'tertiary', 'dangerFilled', 'dangerOutlined']\n    },\n    thirdButtonText: {\n      control: {\n        type: 'text'\n      }\n    },\n    thirdButtonMode: {\n      control: {\n        type: 'select'\n      },\n      options: ['primary', 'secondary', 'tertiary', 'dangerFilled', 'dangerOutlined']\n    },\n    ...sbHideControls(['theme', 'actions', 'withOverlay', 'noIcon'])\n  },\n  args: {\n    header: 'Modal dialog',\n    content: defaultText,\n    mode: 'default',\n    size: 'small',\n    firstButtonText: 'OK',\n    firstButtonMode: 'primary',\n    secondButtonText: 'Cancel',\n    secondButtonMode: 'secondary',\n    thirdButtonText: 'Cancel',\n    thirdButtonMode: 'secondary',\n    testId: 'modal-test-id',\n    klId: 'modal-kl-id'\n  },\n  parameters: {\n    badges: [badges.stable, badges.needsDesignReview],\n    docs: {\n      page: withMeta(MetaData)\n    },\n    design: MetaData.figmaView\n  }\n};\nexport default meta;\ntype Story = StoryObj<WithButtonProps>;\nconst ModalDefaultStory = (args: WithButtonProps) => {\n  const {\n    firstButtonText,\n    firstButtonMode,\n    secondButtonText,\n    secondButtonMode,\n    ...rest\n  } = args;\n  const [isModalOpen, setIsModalOpen] = useState(false);\n  const showModal = () => {\n    setIsModalOpen(true);\n  };\n  const handleOk = () => {\n    setIsModalOpen(false);\n  };\n  const handleCancel = () => {\n    setIsModalOpen(false);\n  };\n  const ActionsButtons: ModalProps['actions'] = {\n    FIRST_ACTION: {\n      text: firstButtonText,\n      mode: firstButtonMode,\n      onClick: handleOk\n    },\n    SECOND_ACTION: {\n      text: secondButtonText,\n      mode: secondButtonMode,\n      onClick: handleCancel\n    }\n  };\n  return <>\n      <Button onClick={showModal}>\n        Open Modal\n      </Button>\n      <Modal {...rest} visible={isModalOpen} actions={ActionsButtons} onCancel={handleCancel} />\n    </>;\n};\nexport const Basic: Story = {\n  render: ModalDefaultStory.bind({})\n};\nexport const WithThreeActionButtons: Story = {\n  render: (args: WithButtonProps) => {\n    const {\n      firstButtonText,\n      firstButtonMode,\n      secondButtonText,\n      secondButtonMode,\n      thirdButtonText,\n      thirdButtonMode,\n      ...rest\n    } = args;\n    const [isModalOpen, setIsModalOpen] = useState(false);\n    const showModal = () => {\n      setIsModalOpen(true);\n    };\n    const handleOk = () => {\n      setIsModalOpen(false);\n    };\n    const handleCancel = () => {\n      setIsModalOpen(false);\n    };\n    const ActionsButtons: ModalProps['actions'] = {\n      FIRST_ACTION: {\n        text: firstButtonText,\n        mode: firstButtonMode,\n        onClick: handleOk\n      },\n      SECOND_ACTION: {\n        text: secondButtonText,\n        mode: secondButtonMode,\n        onClick: handleCancel\n      },\n      THIRD_ACTION: {\n        text: thirdButtonText,\n        mode: thirdButtonMode,\n        onClick: handleCancel\n      }\n    };\n    return <>\n        <Button onClick={showModal}>\n          Open Modal\n        </Button>\n        <Modal {...rest} visible={isModalOpen} actions={ActionsButtons} onCancel={handleCancel} />\n      </>;\n  }\n};\nexport const WithCustomButtons: Story = {\n  render: (args: WithButtonProps) => {\n    const {\n      firstButtonText,\n      firstButtonMode,\n      secondButtonText,\n      secondButtonMode,\n      thirdButtonText,\n      thirdButtonMode,\n      ...rest\n    } = args;\n    const [isModalOpen, setIsModalOpen] = useState(false);\n    const showModal = () => {\n      setIsModalOpen(true);\n    };\n    const handleCancel = () => {\n      setIsModalOpen(false);\n    };\n    return <>\n        <Button onClick={showModal}>\n          Open Modal\n        </Button>\n        <Modal {...rest} visible={isModalOpen} onCancel={handleCancel} />\n      </>;\n  },\n  args: {\n    content: 'Buttons are used for backwards compatibility, when using custom buttons it is recommended not to use actions prop',\n    customButtons: Array.from({\n      length: 12\n    }).map((_, index) => ({\n      onClick: () => alert(index),\n      text: index.toString()\n    }))\n  }\n};\nexport const WithScrollAndLongTitle: Story = {\n  render: ModalDefaultStory.bind({}),\n  args: {\n    header: 'Long long long long long long long long long long modal dialog title',\n    content: Array(20).join(defaultText)\n  }\n};\nexport const CustomModalRender: Story = {\n  render: (args: ModalProps) => {\n    const [isModalOpen, setIsModalOpen] = useState(false);\n    const showModal = () => {\n      setIsModalOpen(true);\n    };\n    const handleCancel = () => {\n      setIsModalOpen(false);\n    };\n    const ModalContent = styled.div`\n      & {\n        position: relative;\n        pointer-events: auto;\n  \n        .modal-video-close-button {\n          position: absolute;\n          top: 10px;\n          right: 10px;\n        }\n      }\n    `;\n    return <>\n        <Button onClick={showModal}>\n          Open Modal\n        </Button>\n        <Modal {...args} visible={isModalOpen} modalRender={() => <ModalContent>\n              <ActionButton onClick={handleCancel} className=\"modal-video-close-button\" mode=\"filledInverted\" size=\"large\" />\n              <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/J0Hx0Pmfjb0?si=q6pOcK3TNrHBlnI0\" title=\"YouTube video player\" frameBorder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowFullScreen></iframe>\n            </ModalContent>} onCancel={handleCancel} />\n      </>;\n  }\n};\nexport const WithLoadingAndDisableButtons: Story = {\n  render: (args: WithButtonProps) => {\n    const {\n      firstButtonText,\n      firstButtonMode,\n      secondButtonText,\n      secondButtonMode,\n      thirdButtonText,\n      thirdButtonMode,\n      ...rest\n    } = args;\n    const [isModalOpen, setIsModalOpen] = useState(false);\n    const showModal = () => {\n      setIsModalOpen(true);\n    };\n    const handleOk = () => {\n      setIsModalOpen(false);\n    };\n    const handleCancel = () => {\n      setIsModalOpen(false);\n    };\n    const ActionsButtons: ModalProps['actions'] = {\n      FIRST_ACTION: {\n        text: firstButtonText,\n        mode: firstButtonMode,\n        loading: true,\n        onClick: handleOk\n      },\n      SECOND_ACTION: {\n        text: secondButtonText,\n        mode: secondButtonMode,\n        disabled: true,\n        iconAfter: defaultIcon,\n        onClick: handleCancel\n      }\n    };\n    return <>\n        <Button onClick={showModal}>\n          Open Modal\n        </Button>\n        <Modal {...rest} visible={isModalOpen} actions={ActionsButtons} onCancel={handleCancel} />\n      </>;\n  }\n};\nBasic.parameters = {\n  ...Basic.parameters,\n  docs: {\n    ...Basic.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: ModalDefaultStory.bind({})\\n}\",\n      ...Basic.parameters?.docs?.source\n    }\n  }\n};\nWithThreeActionButtons.parameters = {\n  ...WithThreeActionButtons.parameters,\n  docs: {\n    ...WithThreeActionButtons.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: WithButtonProps) => {\\n    const {\\n      firstButtonText,\\n      firstButtonMode,\\n      secondButtonText,\\n      secondButtonMode,\\n      thirdButtonText,\\n      thirdButtonMode,\\n      ...rest\\n    } = args;\\n    const [isModalOpen, setIsModalOpen] = useState(false);\\n    const showModal = () => {\\n      setIsModalOpen(true);\\n    };\\n    const handleOk = () => {\\n      setIsModalOpen(false);\\n    };\\n    const handleCancel = () => {\\n      setIsModalOpen(false);\\n    };\\n    const ActionsButtons: ModalProps['actions'] = {\\n      FIRST_ACTION: {\\n        text: firstButtonText,\\n        mode: firstButtonMode,\\n        onClick: handleOk\\n      },\\n      SECOND_ACTION: {\\n        text: secondButtonText,\\n        mode: secondButtonMode,\\n        onClick: handleCancel\\n      },\\n      THIRD_ACTION: {\\n        text: thirdButtonText,\\n        mode: thirdButtonMode,\\n        onClick: handleCancel\\n      }\\n    };\\n    return <>\\n        <Button onClick={showModal}>\\n          Open Modal\\n        </Button>\\n        <Modal {...rest} visible={isModalOpen} actions={ActionsButtons} onCancel={handleCancel} />\\n      </>;\\n  }\\n}\",\n      ...WithThreeActionButtons.parameters?.docs?.source\n    }\n  }\n};\nWithCustomButtons.parameters = {\n  ...WithCustomButtons.parameters,\n  docs: {\n    ...WithCustomButtons.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: WithButtonProps) => {\\n    const {\\n      firstButtonText,\\n      firstButtonMode,\\n      secondButtonText,\\n      secondButtonMode,\\n      thirdButtonText,\\n      thirdButtonMode,\\n      ...rest\\n    } = args;\\n    const [isModalOpen, setIsModalOpen] = useState(false);\\n    const showModal = () => {\\n      setIsModalOpen(true);\\n    };\\n    const handleCancel = () => {\\n      setIsModalOpen(false);\\n    };\\n    return <>\\n        <Button onClick={showModal}>\\n          Open Modal\\n        </Button>\\n        <Modal {...rest} visible={isModalOpen} onCancel={handleCancel} />\\n      </>;\\n  },\\n  args: {\\n    content: 'Buttons are used for backwards compatibility, when using custom buttons it is recommended not to use actions prop',\\n    customButtons: Array.from({\\n      length: 12\\n    }).map((_, index) => ({\\n      onClick: () => alert(index),\\n      text: index.toString()\\n    }))\\n  }\\n}\",\n      ...WithCustomButtons.parameters?.docs?.source\n    }\n  }\n};\nWithScrollAndLongTitle.parameters = {\n  ...WithScrollAndLongTitle.parameters,\n  docs: {\n    ...WithScrollAndLongTitle.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: ModalDefaultStory.bind({}),\\n  args: {\\n    header: 'Long long long long long long long long long long modal dialog title',\\n    content: Array(20).join(defaultText)\\n  }\\n}\",\n      ...WithScrollAndLongTitle.parameters?.docs?.source\n    }\n  }\n};\nCustomModalRender.parameters = {\n  ...CustomModalRender.parameters,\n  docs: {\n    ...CustomModalRender.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: ModalProps) => {\\n    const [isModalOpen, setIsModalOpen] = useState(false);\\n    const showModal = () => {\\n      setIsModalOpen(true);\\n    };\\n    const handleCancel = () => {\\n      setIsModalOpen(false);\\n    };\\n    const ModalContent = styled.div`\\n      & {\\n        position: relative;\\n        pointer-events: auto;\\n  \\n        .modal-video-close-button {\\n          position: absolute;\\n          top: 10px;\\n          right: 10px;\\n        }\\n      }\\n    `;\\n    return <>\\n        <Button onClick={showModal}>\\n          Open Modal\\n        </Button>\\n        <Modal {...args} visible={isModalOpen} modalRender={() => <ModalContent>\\n              <ActionButton onClick={handleCancel} className=\\\"modal-video-close-button\\\" mode=\\\"filledInverted\\\" size=\\\"large\\\" />\\n              <iframe width=\\\"560\\\" height=\\\"315\\\" src=\\\"https://www.youtube.com/embed/J0Hx0Pmfjb0?si=q6pOcK3TNrHBlnI0\\\" title=\\\"YouTube video player\\\" frameBorder=\\\"0\\\" allow=\\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\\" allowFullScreen></iframe>\\n            </ModalContent>} onCancel={handleCancel} />\\n      </>;\\n  }\\n}\",\n      ...CustomModalRender.parameters?.docs?.source\n    }\n  }\n};\nWithLoadingAndDisableButtons.parameters = {\n  ...WithLoadingAndDisableButtons.parameters,\n  docs: {\n    ...WithLoadingAndDisableButtons.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: WithButtonProps) => {\\n    const {\\n      firstButtonText,\\n      firstButtonMode,\\n      secondButtonText,\\n      secondButtonMode,\\n      thirdButtonText,\\n      thirdButtonMode,\\n      ...rest\\n    } = args;\\n    const [isModalOpen, setIsModalOpen] = useState(false);\\n    const showModal = () => {\\n      setIsModalOpen(true);\\n    };\\n    const handleOk = () => {\\n      setIsModalOpen(false);\\n    };\\n    const handleCancel = () => {\\n      setIsModalOpen(false);\\n    };\\n    const ActionsButtons: ModalProps['actions'] = {\\n      FIRST_ACTION: {\\n        text: firstButtonText,\\n        mode: firstButtonMode,\\n        loading: true,\\n        onClick: handleOk\\n      },\\n      SECOND_ACTION: {\\n        text: secondButtonText,\\n        mode: secondButtonMode,\\n        disabled: true,\\n        iconAfter: defaultIcon,\\n        onClick: handleCancel\\n      }\\n    };\\n    return <>\\n        <Button onClick={showModal}>\\n          Open Modal\\n        </Button>\\n        <Modal {...rest} visible={isModalOpen} actions={ActionsButtons} onCancel={handleCancel} />\\n      </>;\\n  }\\n}\",\n      ...WithLoadingAndDisableButtons.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{basic:{startLoc:{col:28,line:127},endLoc:{col:1,line:129},startBody:{col:28,line:127},endBody:{col:1,line:129}},"with-three-action-buttons":{startLoc:{col:45,line:130},endLoc:{col:1,line:175},startBody:{col:45,line:130},endBody:{col:1,line:175}},"with-custom-buttons":{startLoc:{col:40,line:176},endLoc:{col:1,line:210},startBody:{col:40,line:176},endBody:{col:1,line:210}},"with-scroll-and-long-title":{startLoc:{col:45,line:211},endLoc:{col:1,line:217},startBody:{col:45,line:211},endBody:{col:1,line:217}},"custom-modal-render":{startLoc:{col:40,line:218},endLoc:{col:1,line:249},startBody:{col:40,line:218},endBody:{col:1,line:249}},"with-loading-and-disable-buttons":{startLoc:{col:51,line:250},endLoc:{col:1,line:293},startBody:{col:51,line:250},endBody:{col:1,line:293}}}},badges:[_badges.badges.stable,_badges.badges.needsDesignReview],docs:{page:(0,_withMeta.withMeta)(_meta.default)},design:_meta.default.figmaView}};exports.default=meta;const ModalDefaultStory=args=>{const{firstButtonText,firstButtonMode,secondButtonText,secondButtonMode,...rest}=args,[isModalOpen,setIsModalOpen]=(0,_react.useState)(!1),handleCancel=()=>{setIsModalOpen(!1)},ActionsButtons={FIRST_ACTION:{text:firstButtonText,mode:firstButtonMode,onClick:()=>{setIsModalOpen(!1)}},SECOND_ACTION:{text:secondButtonText,mode:secondButtonMode,onClick:handleCancel}};return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_button.Button,{onClick:()=>{setIsModalOpen(!0)},children:"Open Modal"}),(0,_jsxRuntime.jsx)(_Modal.Modal,{...rest,visible:isModalOpen,actions:ActionsButtons,onCancel:handleCancel})]})},Basic=exports.Basic={render:ModalDefaultStory.bind({})},WithThreeActionButtons=exports.WithThreeActionButtons={render:args=>{const{firstButtonText,firstButtonMode,secondButtonText,secondButtonMode,thirdButtonText,thirdButtonMode,...rest}=args,[isModalOpen,setIsModalOpen]=(0,_react.useState)(!1),handleCancel=()=>{setIsModalOpen(!1)},ActionsButtons={FIRST_ACTION:{text:firstButtonText,mode:firstButtonMode,onClick:()=>{setIsModalOpen(!1)}},SECOND_ACTION:{text:secondButtonText,mode:secondButtonMode,onClick:handleCancel},THIRD_ACTION:{text:thirdButtonText,mode:thirdButtonMode,onClick:handleCancel}};return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_button.Button,{onClick:()=>{setIsModalOpen(!0)},children:"Open Modal"}),(0,_jsxRuntime.jsx)(_Modal.Modal,{...rest,visible:isModalOpen,actions:ActionsButtons,onCancel:handleCancel})]})}},WithCustomButtons=exports.WithCustomButtons={render:args=>{const{firstButtonText,firstButtonMode,secondButtonText,secondButtonMode,thirdButtonText,thirdButtonMode,...rest}=args,[isModalOpen,setIsModalOpen]=(0,_react.useState)(!1);return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_button.Button,{onClick:()=>{setIsModalOpen(!0)},children:"Open Modal"}),(0,_jsxRuntime.jsx)(_Modal.Modal,{...rest,visible:isModalOpen,onCancel:()=>{setIsModalOpen(!1)}})]})},args:{content:"Buttons are used for backwards compatibility, when using custom buttons it is recommended not to use actions prop",customButtons:Array.from({length:12}).map(((_,index)=>({onClick:()=>alert(index),text:index.toString()})))}},WithScrollAndLongTitle=exports.WithScrollAndLongTitle={render:ModalDefaultStory.bind({}),args:{header:"Long long long long long long long long long long modal dialog title",content:Array(20).join(defaultText)}},CustomModalRender=exports.CustomModalRender={render:args=>{const[isModalOpen,setIsModalOpen]=(0,_react.useState)(!1),handleCancel=()=>{setIsModalOpen(!1)},ModalContent=_styledComponents.default.div.withConfig({displayName:"Modalstories__ModalContent",componentId:"sc-2mzhkh-0"})(["&{position:relative;pointer-events:auto;.modal-video-close-button{position:absolute;top:10px;right:10px;}}"]);return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_button.Button,{onClick:()=>{setIsModalOpen(!0)},children:"Open Modal"}),(0,_jsxRuntime.jsx)(_Modal.Modal,{...args,visible:isModalOpen,modalRender:()=>(0,_jsxRuntime.jsxs)(ModalContent,{children:[(0,_jsxRuntime.jsx)(_actionButton.ActionButton,{onClick:handleCancel,className:"modal-video-close-button",mode:"filledInverted",size:"large"}),(0,_jsxRuntime.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/J0Hx0Pmfjb0?si=q6pOcK3TNrHBlnI0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]}),onCancel:handleCancel})]})}},WithLoadingAndDisableButtons=exports.WithLoadingAndDisableButtons={render:args=>{const{firstButtonText,firstButtonMode,secondButtonText,secondButtonMode,thirdButtonText,thirdButtonMode,...rest}=args,[isModalOpen,setIsModalOpen]=(0,_react.useState)(!1),handleCancel=()=>{setIsModalOpen(!1)},ActionsButtons={FIRST_ACTION:{text:firstButtonText,mode:firstButtonMode,loading:!0,onClick:()=>{setIsModalOpen(!1)}},SECOND_ACTION:{text:secondButtonText,mode:secondButtonMode,disabled:!0,iconAfter:defaultIcon,onClick:handleCancel}};return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_button.Button,{onClick:()=>{setIsModalOpen(!0)},children:"Open Modal"}),(0,_jsxRuntime.jsx)(_Modal.Modal,{...rest,visible:isModalOpen,actions:ActionsButtons,onCancel:handleCancel})]})}};Basic.parameters={...Basic.parameters,docs:{...null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs,source:{originalSource:"{\n  render: ModalDefaultStory.bind({})\n}",...null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source}}},WithThreeActionButtons.parameters={...WithThreeActionButtons.parameters,docs:{...null===(_WithThreeActionButto=WithThreeActionButtons.parameters)||void 0===_WithThreeActionButto?void 0:_WithThreeActionButto.docs,source:{originalSource:"{\n  render: (args: WithButtonProps) => {\n    const {\n      firstButtonText,\n      firstButtonMode,\n      secondButtonText,\n      secondButtonMode,\n      thirdButtonText,\n      thirdButtonMode,\n      ...rest\n    } = args;\n    const [isModalOpen, setIsModalOpen] = useState(false);\n    const showModal = () => {\n      setIsModalOpen(true);\n    };\n    const handleOk = () => {\n      setIsModalOpen(false);\n    };\n    const handleCancel = () => {\n      setIsModalOpen(false);\n    };\n    const ActionsButtons: ModalProps['actions'] = {\n      FIRST_ACTION: {\n        text: firstButtonText,\n        mode: firstButtonMode,\n        onClick: handleOk\n      },\n      SECOND_ACTION: {\n        text: secondButtonText,\n        mode: secondButtonMode,\n        onClick: handleCancel\n      },\n      THIRD_ACTION: {\n        text: thirdButtonText,\n        mode: thirdButtonMode,\n        onClick: handleCancel\n      }\n    };\n    return <>\n        <Button onClick={showModal}>\n          Open Modal\n        </Button>\n        <Modal {...rest} visible={isModalOpen} actions={ActionsButtons} onCancel={handleCancel} />\n      </>;\n  }\n}",...null===(_WithThreeActionButto2=WithThreeActionButtons.parameters)||void 0===_WithThreeActionButto2||null===(_WithThreeActionButto3=_WithThreeActionButto2.docs)||void 0===_WithThreeActionButto3?void 0:_WithThreeActionButto3.source}}},WithCustomButtons.parameters={...WithCustomButtons.parameters,docs:{...null===(_WithCustomButtons$pa=WithCustomButtons.parameters)||void 0===_WithCustomButtons$pa?void 0:_WithCustomButtons$pa.docs,source:{originalSource:"{\n  render: (args: WithButtonProps) => {\n    const {\n      firstButtonText,\n      firstButtonMode,\n      secondButtonText,\n      secondButtonMode,\n      thirdButtonText,\n      thirdButtonMode,\n      ...rest\n    } = args;\n    const [isModalOpen, setIsModalOpen] = useState(false);\n    const showModal = () => {\n      setIsModalOpen(true);\n    };\n    const handleCancel = () => {\n      setIsModalOpen(false);\n    };\n    return <>\n        <Button onClick={showModal}>\n          Open Modal\n        </Button>\n        <Modal {...rest} visible={isModalOpen} onCancel={handleCancel} />\n      </>;\n  },\n  args: {\n    content: 'Buttons are used for backwards compatibility, when using custom buttons it is recommended not to use actions prop',\n    customButtons: Array.from({\n      length: 12\n    }).map((_, index) => ({\n      onClick: () => alert(index),\n      text: index.toString()\n    }))\n  }\n}",...null===(_WithCustomButtons$pa2=WithCustomButtons.parameters)||void 0===_WithCustomButtons$pa2||null===(_WithCustomButtons$pa3=_WithCustomButtons$pa2.docs)||void 0===_WithCustomButtons$pa3?void 0:_WithCustomButtons$pa3.source}}},WithScrollAndLongTitle.parameters={...WithScrollAndLongTitle.parameters,docs:{...null===(_WithScrollAndLongTit=WithScrollAndLongTitle.parameters)||void 0===_WithScrollAndLongTit?void 0:_WithScrollAndLongTit.docs,source:{originalSource:"{\n  render: ModalDefaultStory.bind({}),\n  args: {\n    header: 'Long long long long long long long long long long modal dialog title',\n    content: Array(20).join(defaultText)\n  }\n}",...null===(_WithScrollAndLongTit2=WithScrollAndLongTitle.parameters)||void 0===_WithScrollAndLongTit2||null===(_WithScrollAndLongTit3=_WithScrollAndLongTit2.docs)||void 0===_WithScrollAndLongTit3?void 0:_WithScrollAndLongTit3.source}}},CustomModalRender.parameters={...CustomModalRender.parameters,docs:{...null===(_CustomModalRender$pa=CustomModalRender.parameters)||void 0===_CustomModalRender$pa?void 0:_CustomModalRender$pa.docs,source:{originalSource:'{\n  render: (args: ModalProps) => {\n    const [isModalOpen, setIsModalOpen] = useState(false);\n    const showModal = () => {\n      setIsModalOpen(true);\n    };\n    const handleCancel = () => {\n      setIsModalOpen(false);\n    };\n    const ModalContent = styled.div`\n      & {\n        position: relative;\n        pointer-events: auto;\n  \n        .modal-video-close-button {\n          position: absolute;\n          top: 10px;\n          right: 10px;\n        }\n      }\n    `;\n    return <>\n        <Button onClick={showModal}>\n          Open Modal\n        </Button>\n        <Modal {...args} visible={isModalOpen} modalRender={() => <ModalContent>\n              <ActionButton onClick={handleCancel} className="modal-video-close-button" mode="filledInverted" size="large" />\n              <iframe width="560" height="315" src="https://www.youtube.com/embed/J0Hx0Pmfjb0?si=q6pOcK3TNrHBlnI0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>\n            </ModalContent>} onCancel={handleCancel} />\n      </>;\n  }\n}',...null===(_CustomModalRender$pa2=CustomModalRender.parameters)||void 0===_CustomModalRender$pa2||null===(_CustomModalRender$pa3=_CustomModalRender$pa2.docs)||void 0===_CustomModalRender$pa3?void 0:_CustomModalRender$pa3.source}}},WithLoadingAndDisableButtons.parameters={...WithLoadingAndDisableButtons.parameters,docs:{...null===(_WithLoadingAndDisabl=WithLoadingAndDisableButtons.parameters)||void 0===_WithLoadingAndDisabl?void 0:_WithLoadingAndDisabl.docs,source:{originalSource:"{\n  render: (args: WithButtonProps) => {\n    const {\n      firstButtonText,\n      firstButtonMode,\n      secondButtonText,\n      secondButtonMode,\n      thirdButtonText,\n      thirdButtonMode,\n      ...rest\n    } = args;\n    const [isModalOpen, setIsModalOpen] = useState(false);\n    const showModal = () => {\n      setIsModalOpen(true);\n    };\n    const handleOk = () => {\n      setIsModalOpen(false);\n    };\n    const handleCancel = () => {\n      setIsModalOpen(false);\n    };\n    const ActionsButtons: ModalProps['actions'] = {\n      FIRST_ACTION: {\n        text: firstButtonText,\n        mode: firstButtonMode,\n        loading: true,\n        onClick: handleOk\n      },\n      SECOND_ACTION: {\n        text: secondButtonText,\n        mode: secondButtonMode,\n        disabled: true,\n        iconAfter: defaultIcon,\n        onClick: handleCancel\n      }\n    };\n    return <>\n        <Button onClick={showModal}>\n          Open Modal\n        </Button>\n        <Modal {...rest} visible={isModalOpen} actions={ActionsButtons} onCancel={handleCancel} />\n      </>;\n  }\n}",...null===(_WithLoadingAndDisabl2=WithLoadingAndDisableButtons.parameters)||void 0===_WithLoadingAndDisabl2||null===(_WithLoadingAndDisabl3=_WithLoadingAndDisabl2.docs)||void 0===_WithLoadingAndDisabl3?void 0:_WithLoadingAndDisabl3.source}}};exports.__namedExportsOrder=["Basic","WithThreeActionButtons","WithCustomButtons","WithScrollAndLongTitle","CustomModalRender","WithLoadingAndDisableButtons"]},"./src/modal/__meta__/meta.json":module=>{module.exports=JSON.parse('{"dod":{"designTokens":true,"useThemedHook":true,"unitTests":true,"screenshotTests":false,"migration":true,"apiTable":true,"storybook":true,"designLink":true,"figmaView":true},"component":"Modal","description":"Компонент Modal – это диалоговое окно, открывающееся поверх страницы или сайдбара.","usage":"Компонент Modal используется для отображения какой-либо информации или для подтверждения действия без перехода на другую страницу.","designLink":"https://www.figma.com/file/9hiN2DbkqbxbhR9EWRI1VK/B2B-UI-KIT?node-id=1063%3A4745","figmaView":"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9hiN2DbkqbxbhR9EWRI1VK%2F01-%255BB2B%255D-Hexa-UI-Components%3Ftype%3Ddesign%26node-id%3D31330%253A116977%26mode%3Ddev"}')}}]);