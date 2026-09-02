export const inputMaskPresets = [
  'None',
  'Date',
  'Number',
  'Phone',
  'Pattern',
  'Email',
  'IP',
  'MAC'
] as const

export type InputMaskPreset = typeof inputMaskPresets[number]

export const getInputMaskOptions = (preset: InputMaskPreset) => ({
  Date: {
    mask: Date,
    lazy: false,
    overwrite: true,
    autofix: true
  },
  Number: {
    mask: Number
  },
  Phone: {
    mask: '+7 (000) 000-00-00',
    lazy: false,
    overwrite: true,
    autofix: true
  },
  Pattern: {
    mask: '{#}000[aaa]/NIC-`*[**]',
    lazy: false,
    overwrite: true,
    autofix: true
  },
  Email: {
    mask: 'NAME@HOST.CODE',
    blocks: {
      NAME: { mask: /^[a-zA-Z0-9_\-.]*$/ },
      HOST: { mask: /^[a-zA-Z0-9_-]*$/ },
      CODE: { mask: /^[a-zA-Zs.]{1,8}$/ }
    }
  },
  None: undefined,
  IP: {
    mask: 'NUM.NUM.NUM.NUM',
    blocks: {
      NUM: {
        mask: /^[0-9]{1,3}$/
      }
    }
  },
  MAC: {
    mask: 'MACAD:MACAD:MACAD:MACAD',
    blocks: {
      MACAD: { mask: /^[0-9a-f]{1,2}$/ }
    },
    overwrite: true,
    autofix: true
  }
}[preset])
