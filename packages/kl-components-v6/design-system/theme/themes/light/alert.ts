import { AlertColorConfig, AlertMode, AlertType } from '../../../../src/alert/types'
import { ComponentThemeContext } from '../config'

const alertInitialColors = ({ colors }: ComponentThemeContext): Record<AlertMode, AlertColorConfig> => ({
  info: {
    icon: {
      color: colors.criticalitystatuses.low
    },
    mode: {
      normal: {
        background: colors.surface.coldgrey,
        color: colors.textIconsElements.primary,
        borderColor: colors.criticalitystatuses.low
      }
    }
  },
  success: {
    icon: {
      color: colors.criticalitystatuses.positive
    },
    mode: {
      normal: {
        background: colors.surface.emerald,
        color: colors.textIconsElements.primary,
        borderColor: colors.criticalitystatuses.positive
      }
    }
  },
  error: {
    icon: {
      color: colors.criticalitystatuses.critical
    },
    mode: {
      normal: {
        background: colors.surface.red,
        color: colors.textIconsElements.primary,
        borderColor: colors.criticalitystatuses.critical
      }
    }
  },
  warning: {
    icon: {
      color: colors.criticalitystatuses.medium
    },
    mode: {
      normal: {
        background: colors.surface.yellow,
        color: colors.textIconsElements.primary,
        borderColor: colors.criticalitystatuses.medium
      }
    }
  },
  infoAccent: {
    icon: {
      color: colors.criticalitystatuses.info
    },
    mode: {
      normal: {
        background: colors.surface.purple,
        color: colors.textIconsElements.primary,
        borderColor: colors.criticalitystatuses.info
      }
    }
  }
})

export const alert = ({ colors }: ComponentThemeContext): Record<AlertMode, Record<AlertType, AlertColorConfig>> => ({
  info: {
    sectionMessage: {
      icon: {
        ...alertInitialColors({ colors }).info.icon
      },
      mode: {
        ...alertInitialColors({ colors }).info.mode
      }
    },
    alert: {
      icon: {
        ...alertInitialColors({ colors }).info.icon
      },
      mode: {
        ...alertInitialColors({ colors }).info.mode
      }
    }

  },
  success: {
    sectionMessage: {
      icon: {
        ...alertInitialColors({ colors }).success.icon
      },
      mode: {
        ...alertInitialColors({ colors }).success.mode
      }
    },
    alert: {
      icon: {
        ...alertInitialColors({ colors }).success.icon
      },
      mode: {
        ...alertInitialColors({ colors }).success.mode,
        normal: {
          ...alertInitialColors({ colors }).success.mode.normal,
          background: colors.surface.grass
        }
      }
    }

  },
  error: {
    sectionMessage: {
      icon: {
        ...alertInitialColors({ colors }).error.icon
      },
      mode: {
        ...alertInitialColors({ colors }).error.mode
      }
    },
    alert: {
      icon: {
        ...alertInitialColors({ colors }).error.icon
      },
      mode: {
        ...alertInitialColors({ colors }).error.mode,
        normal: {
          ...alertInitialColors({ colors }).error.mode.normal,
          background: colors.surface.orange
        }
      }
    }
  },
  warning: {
    sectionMessage: {
      icon: {
        ...alertInitialColors({ colors }).warning.icon
      },
      mode: {
        ...alertInitialColors({ colors }).warning.mode
      }
    },
    alert: {
      icon: {
        ...alertInitialColors({ colors }).warning.icon
      },
      mode: {
        ...alertInitialColors({ colors }).warning.mode
      }
    }
  },
  infoAccent: {
    sectionMessage: {
      icon: {
        ...alertInitialColors({ colors }).infoAccent.icon
      },
      mode: {
        ...alertInitialColors({ colors }).infoAccent.mode
      }
    },
    alert: {
      icon: {
        ...alertInitialColors({ colors }).infoAccent.icon
      },
      mode: {
        ...alertInitialColors({ colors }).infoAccent.mode
      }
    }
  }
})
