import{C as t,D as s,a1 as i,ao as b,ap as c,aq as p}from"./iframe-4-PRSI1I.js";import{v as u}from"./typesHelpers-tpz7Of7L.js";const d=6,r={padding:`${d}px 12px`,height:"32px",borderRadius:"8px"},o=s(),l=e=>t`
  font-family: ${e.fontFamily};
  font-size: ${e.fontSize};
  line-height: ${e.lineHeight};
  font-weight: ${e.fontWeight};
  font-style: ${e.fontStyle};
  letter-spacing: ${e.letterSpacing};
`,n=i(b.BTR3),x=+n.lineHeight.slice(0,-2),h=t`
    height: ${r.height};
    padding: ${r.padding};
    outline: unset;
    width: 100%;

    // font styles
    &, & input {
      ${l(n)}
      color: ${o("enabled.color")};
      background-color: var(--bg--neutral--level_0);

      ::placeholder {
        color: ${o("enabled.placeholderColor")};
      }
    }

    // normal
    border-radius: ${r.borderRadius};
    background-color: var(--bg--neutral--level_0);
    border: 1px solid ${o("enabled.border")};
    box-shadow: unset;

    // hover
    &:hover {
      border-color: ${o("hover.border")};
    }

    // active & focus
    &:focus-visible,
    &:not(input):has(:focus-visible) {
      box-shadow: ${o("focus.boxShadow")};
      border-color: ${o("enabled.border")};
    }

    &:not(.kl6-textbox-disabled):not(.kl6-textbox-readonly) {
      &, &:hover, &:active {
        &:is(input, textarea):not(:focus-visible),
        &:not(input):not(:has(:focus-visible)) {
          ${e=>u.map(a=>a!=="default"&&`
            &.${a} {
              border-color: ${o(`${a}.border`)(e)};
            }
          `).filter(Boolean)}
        }
      }
    }

    // disabled & readonly
    &.kl6-textbox-disabled, &.kl6-textbox-readonly {
      background-color: var(--bg--neutral--level_2);
      color: ${o("disabled.color")};
      border: 1px solid ${o("disabled.border")};

      &:hover {
        border-color: ${o("disabled.border")};
      }

      svg {
        color: ${o("disabled.color")};
      }

      &, & input {
        color: ${o("disabled.color")};

        ::placeholder {
          color: ${o("disabled.color")};
        }
      }

      & input {
        background-color: transparent;
      }
    }

    &.kl6-textbox-readonly {
      color: ${o("readonly.color")};

      &:focus-within {
        box-shadow: none;
      }

      &, & input {
        color: ${o("readonly.color")};

        &::placeholder {
          color: ${o("readonly.color")};
        }
      }
    }

    // other
    & .ant-input-group-addon {
      padding: 0;
    }

    & .ant-input-group-wrapper {
      border-radius: ${r.borderRadius} !important;
    }

    // Fix Autocomplete Styles in WebKit Browsers
    // https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/
    & {
      --autofill-color: ${o("enabled.color")};
      --autifill-bg-color: var(--bg--neutral--level_0);

      [readonly],
      :disabled {
        --autofill-color: ${o("disabled.color")};
        --autifill-bg-color: var(--bg--neutral--level_2);
      }

      :-webkit-autofill,
      :-webkit-autofill:hover,
      :-webkit-autofill:focus {
        -webkit-text-fill-color: var(--autofill-color);
        caret-color: var(--autofill-color);

        -webkit-box-shadow: 0 0 0 1000px var(--autifill-bg-color) inset !important;
        box-shadow: 0 0 0 1000px var(--autifill-bg-color) inset !important;
        transition: background-color 5000s ease-in-out 0s;
      }
    }
`,v=t`
  &&& {
    ${h}
  }
`,g=i(c.MTR3),m=t`
  &&& input {
    ${l(g)}

    ::placeholder {
      ${l(n)}
    }
  }
  svg {
    color: ${o("enabled.color")};
  }
  &.kl6-textbox-disabled .ant-input-password-icon {
    cursor: not-allowed !important;
  }
`,w=t`
  .ant-input-number-input {
    padding: unset;
    height: unset;
  }
  
  .ant-input-number-input-wrap {
    padding-right: 16px;
  }

  .ant-input-number-handler-wrap {
    opacity: 1;
    display: block;
    background: transparent;
    margin-right: 12px;
    width: max-content;
    border: none;
    
    &:hover {
      .ant-input-number-handler {
        height: 50% !important;
      }
    }
    
    .ant-input-number-handler {
      border: none;
      color: ${o("enabled.color")};
      
      &:active {
        background: transparent;
      }
    }
  }
  
  &.kl6-textbox-disabled, &.kl6-textbox-readonly {
    .ant-input-number-handler {
      cursor: not-allowed;
      color: ${o("disabled.color")};
    }
  } 
`;t`
  border: none;
  padding: 0;
  :focus {
    box-shadow: none;
  }
`;const y=t`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  border-radius: ${r.borderRadius};
  border: 1px solid ${o("enabled.border")};
  overflow: hidden;
  transition: all 0.3s, height 0s;

  && textarea.ant-input {
    padding: 6px 12px;
    border: none;
  }

  &&&.kl6-textbox-textarea-has-counter:not([disabled]):not(:has(textarea[readonly])) {
    textarea {
      padding-bottom: ${x+d}px; 
    }
  }

  .kl6-textbox-textarea-counter {
    width: calc(100% - 17px);
    position: absolute;
    bottom: 1px;
    left: 1px;
    border-radius: 0 0 0 8px;
    padding-top: 4px;
    padding-bottom: 5px;
    padding-left: 11px;
    transition: background-color 0.3s;
    background-color: var(--bg--neutral--level_0);
  }

  &[disabled] .kl6-textbox-textarea-counter,
  &:has(textarea[readonly]) .kl6-textbox-textarea-counter {
    display:none;
  }

  // hover
  &:hover {
    border-color: ${o("hover.border")};
  }
  
  // active & focus
  &:focus-visible,
  &:has(textarea:focus-visible) {
    box-shadow: ${o("focus.boxShadow")};
    border-color: ${o("enabled.border")};
  }
`,k=e=>p(e,{componentName:"input",defaultValues:{}});export{m as a,y as b,h as c,w as d,v as i,k as u};
