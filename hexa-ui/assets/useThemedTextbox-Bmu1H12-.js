import{a0 as t,a1 as s,a2 as i,a3 as c,a4 as b,a5 as p}from"./iframe-DlY6n6Um.js";import{v as u}from"./typesHelpers-tpz7Of7L.js";const d=6,r={padding:`${d}px 12px`,height:"32px",borderRadius:"8px"},o=s(),n=e=>t`
  font-family: ${e.fontFamily};
  font-size: ${e.fontSize};
  line-height: ${e.lineHeight};
  font-weight: ${e.fontWeight};
  font-style: ${e.fontStyle};
  letter-spacing: ${e.letterSpacing};
`,l=i(c.BTR3),x=+l.lineHeight.slice(0,-2),g=t`
    height: ${r.height};
    padding: ${r.padding};
    outline: unset;
    width: 100%;

    // font styles
    &, & input {
      ${n(l)}
      color: ${o("enabled.color")};
      background-color: ${o("enabled.background")};

      ::placeholder {
        color: ${o("enabled.placeholderColor")};
      }
    }

    // normal
    border-radius: ${r.borderRadius};
    background-color: ${o("enabled.background")};
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
      background-color: ${o("disabled.background")};
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
      --autifill-bg-color: ${o("enabled.background")};

      [readonly],
      :disabled {
        --autofill-color: ${o("disabled.color")};
        --autifill-bg-color: ${o("disabled.background")};
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
`,k=t`
  &&& {
    ${g}
  }
`,h=i(b.MTR3),m=t`
  &&& input {
    ${n(h)}

    ::placeholder {
      ${n(l)}
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
  
  textarea {
    padding: 6px 12px;
  }

  &&&.kl6-textbox-textarea-has-counter {
    textarea {
      padding-bottom: ${x+d}px; 
    }
  }

  .kl6-textbox-textarea-counter {
    width: calc(100% - 20px);
    position: absolute;
    bottom: 1px;
    left: 1px;
    border-radius: 8px;
    padding-top: 4px;
    padding-bottom: 5px;
    padding-left: 11px;
    transition: background-color 0.3s;
    background-color: ${o("enabled.background")};
  }

  &[disabled] .kl6-textbox-textarea-counter {
    background-color: ${o("disabled.background")};
  }
`,v=e=>p(e,{componentName:"input",defaultValues:{}});export{g as a,w as b,m as c,y as d,k as i,v as u};
