import{C as r,l as b,ai as n,aj as c,ak as u,al as p}from"./iframe-DedYZBTA.js";import{v as d}from"./typesHelpers-tpz7Of7L.js";const s=6,l={padding:`${s}px 12px`,height:"32px",borderRadius:"8px"},o=b(),a=e=>r`
  font-family: ${e.fontFamily};
  font-size: ${e.fontSize};
  line-height: ${e.lineHeight};
  font-weight: ${e.fontWeight};
  font-style: ${e.fontStyle};
  letter-spacing: ${e.letterSpacing};
`,i=n(c.BTR3),x=+i.lineHeight.slice(0,-2),h=r`
    height: ${l.height};
    padding: ${l.padding};
    outline: unset;
    width: 100%;

    .ant-input-suffix {
      margin-left: unset;
      margin-inline-start: 4px;
    }

    .ant-input-prefix {
      margin-right: unset;
      margin-inline-end: 4px;
    }

    // InputNumber styles
    &.hexa-ui-input-number .hexa-ui-input-number-controls {
      display: inline-grid;
    }

    // font styles
    &, & input {
      ${a(i)}
      color: ${o("enabled.color")};
      background-color: var(--bg--neutral--level_0);

      ::placeholder {
        color: ${o("enabled.placeholderColor")};
      }
    }

    // normal
    border-radius: ${l.borderRadius};
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
          ${e=>d.map(t=>t!=="default"&&`
            &.${t} {
              border-color: ${o(`${t}.border`)(e)};
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
      border-radius: ${l.borderRadius} !important;
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
`,v=r`
  &&& {
    ${h}
  }
`,g=n(u.MTR3),m=r`
  &&& input {
    ${a(g)}

    ::placeholder {
      ${a(i)}
    }
  }
  svg {
    color: ${o("enabled.color")};
  }
  &.kl6-textbox-disabled .ant-input-password-icon {
    cursor: not-allowed !important;
  }
`;r`
  border: none;
  padding: 0;
  :focus {
    box-shadow: none;
  }
`;const w=r`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  border-radius: ${l.borderRadius};
  border: 1px solid ${o("enabled.border")};
  overflow: hidden;
  transition: all 0.3s, height 0s;

  && textarea.ant-input {
    padding: 6px 12px;
    border: none;
  }

  &&&.kl6-textbox-textarea-has-counter:not([disabled]):not(:has(textarea[readonly])) {
    textarea {
      padding-bottom: ${x+s}px; 
    }
  }

  .kl6-textbox-textarea-counter {
    width: calc(100% - 17px);
    position: absolute;
    bottom: 1px;
    inset-inline-start: 1px;
    border-radius: 0 0 0 8px;
    padding-top: 4px;
    padding-bottom: 5px;
    padding-inline-start: 11px;
    transition: background-color 0.3s;
    background-color: var(--bg--neutral--level_0);
  }

  &[disabled] .kl6-textbox-textarea-counter,
  &:has(textarea[readonly]) .kl6-textbox-textarea-counter {
    display:none;
  }

  // validation status
  &:not(.kl6-textbox-disabled):not(.kl6-textbox-readonly) {
    ${e=>d.map(t=>t!=="default"&&`
      &.${t}:not(:focus-within) {
        border-color: ${o(`${t}.border`)(e)};
      }
    `).filter(Boolean)}
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
`,y=e=>p(e,{componentName:"input",defaultValues:{}});export{w as a,m as b,h as c,v as i,y as u};
