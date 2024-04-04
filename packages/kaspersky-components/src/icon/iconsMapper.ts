import { IconPackSizes } from '@src/icon/types'
import { IconsPackageNames } from '@src/icon'
import { SizingType } from '@design-system/types'

export interface MappedObjectInterface {
  size: IconPackSizes,
  key: IconsPackageNames,
  color?: string
}

export const iconsMapper: Record<Exclude<SizingType, 'extraLarge'>, {[key: string] :MappedObjectInterface}> = {
  extraSmall: {
    Add: {
      size: 16,
      key: 'Plus'
    },
    Bad: {
      size: 12,
      key: 'Error',
      color: '#F18983'
    },
    Cancelled: {
      size: 16,
      key: 'Cancel1'
    },
    CrossRounded: {
      size: 8,
      key: 'Close'
    },
    Danger: {
      size: 16,
      key: 'StatusDangerSolid1'
    },
    Down: {
      size: 8,
      key: 'ArrowDown'
    },
    DownSolid: {
      size: 8,
      key: 'ArrowDownSolid'
    },
    Good: {
      size: 16,
      key: 'StatusOkSolid'
    },
    Info: {
      size: 16,
      key: 'StatusInfoSolid',
      color: '#27B7FF'
    },
    InfoLabel: {
      size: 16,
      key: 'StatusInfoOutline'
    },
    Left: {
      size: 8,
      key: 'ArrowLeft'
    },
    Menu03: {
      size: 8,
      key: 'Menu'
    },
    Nothreat: {
      size: 16,
      key: 'StatusNoThreatSolid',
      color: '#999'
    },
    Ok: {
      size: 16,
      key: 'Ok',
      color: '#23D1AE'
    },
    Pending: {
      size: 12,
      key: 'Time'
    },
    Right: {
      size: 8,
      key: 'ArrowRight'
    },
    SentValidation: {
      size: 16,
      key: 'SentValidationSolid'
    },
    Unknown: {
      size: 16,
      key: 'StatusQuestionSolid'
    },
    Up: {
      size: 8,
      key: 'ArrowUp'
    },
    UpSolid: {
      size: 8,
      key: 'ArrowUpSolid'
    },
    Warning: {
      size: 12,
      key: 'Error'
    }
  },
  small: {
    AccountLogin: {
      size: 16,
      key: 'UserAccount'
    },
    Add: {
      size: 16,
      key: 'Plus'
    },
    Apple: {
      size: 16,
      key: 'AppleColor'
    },
    Arrowdown: {
      size: 16,
      key: 'ArrowDown'
    },
    Arrowdown2: {
      size: 16,
      key: 'ArrowDownCircle'
    },
    ArrowDownRounded: {
      size: 16,
      key: 'ArrowDown1'
    },
    Arrowup: {
      size: 16,
      key: 'ArrowUp'
    },
    Arrowup2: {
      size: 16,
      key: 'ArrowUpCircle'
    },
    Back: {
      size: 16,
      key: 'ArrowBack'
    },
    Box: {
      size: 16,
      key: 'DropBoxColor'
    },
    Brand: {
      size: 16,
      key: 'Star'
    },
    Category: {
      size: 16,
      key: 'QueueList'
    },
    Check: {
      size: 16,
      key: 'Ok'
    },
    Clear: {
      size: 16,
      key: 'Cross'
    },
    ClearText: {
      size: 16,
      key: 'ClearSolid'
    },
    Configure: {
      size: 16,
      key: 'Settings2'
    },
    ConnectionEthernetOff: {
      size: 16,
      key: 'ConnectionLanOff'
    },
    CrossRounded: {
      size: 8,
      key: 'Close'
    },
    Customsettings: {
      size: 16,
      key: 'CustomSettings'
    },
    Danger: {
      size: 16,
      key: 'StatusDangerSolid1',
      color: '#ED2939'
    },
    DashboardGrid: {
      size: 16,
      key: 'Grid'
    },
    DashboardPerformance: {
      size: 16,
      key: 'Speed'
    },
    DeviceNew: {
      size: 16,
      key: 'Add1'
    },
    DeviceSearch: {
      size: 16,
      key: 'Search1'
    },
    DeviceServer: {
      size: 16,
      key: 'Server'
    },
    DigitalFootprint: {
      size: 16,
      key: 'TouchId'
    },
    Down: {
      size: 16,
      key: 'ArrowDown1'
    },
    DownMini: {
      size: 16,
      key: 'ArrowDownMini'
    },
    Dribbble: {
      size: 16,
      key: 'DribbbleColor'
    },
    F: {
      size: 16,
      key: 'FacebookColor'
    },
    FileError2: {
      size: 16,
      key: 'FileSad'
    },
    Gmail: {
      size: 16,
      key: 'GmailColor'
    },
    Google: {
      size: 16,
      key: 'GoogleColor'
    },
    Heart: {
      size: 16,
      key: 'HeartSolid',
      color: '#ED2939'
    },
    Hex: {
      size: 16,
      key: 'HexColor'
    },
    Hide: {
      size: 16,
      key: 'ArrowDoubleLeft'
    },
    HistoryLogJournal: {
      size: 16,
      key: 'Backup'
    },
    Info: {
      size: 16,
      key: 'StatusInfoOutline'
    },
    IP: {
      size: 16,
      key: 'Pointer'
    },
    Left: {
      size: 16,
      key: 'ArrowLeft'
    },
    LeftMini: {
      size: 16,
      key: 'ArrowLeftMini'
    },
    Licensekey: {
      size: 16,
      key: 'LicenseKey'
    },
    LinkUnlink: {
      size: 16,
      key: 'Unlink'
    },
    Login: {
      size: 16,
      key: 'SignIn'
    },
    LogoutSignout: {
      size: 16,
      key: 'SignOut'
    },
    Maximize: {
      size: 16,
      key: 'SizeMaximize'
    },
    Menu01: {
      size: 16,
      key: 'Menu'
    },
    Menu02: {
      size: 16,
      key: 'Menu2'
    },
    Menu03: {
      size: 16,
      key: 'Menu3'
    },
    Minimize: {
      size: 16,
      key: 'SizeMinimize'
    },
    Password: {
      size: 16,
      key: 'Key'
    },
    PasswordProtected: {
      size: 16,
      key: 'PasswordProtected'
    },
    PC: {
      size: 16,
      key: 'Desktop'
    },
    Phone: {
      size: 16,
      key: 'PhoneAndroid'
    },
    Pin: {
      size: 16,
      key: 'Pointer'
    },
    Plus: {
      size: 16,
      key: 'PlusSquare'
    },
    Pricetable: {
      size: 16,
      key: 'PriceTable'
    },
    Print: {
      size: 16,
      key: 'Printer'
    },
    Question: {
      size: 16,
      key: 'StatusQuestionOutline'
    },
    Reports01: {
      size: 16,
      key: 'Reports'
    },
    Reports02: {
      size: 16,
      key: 'Reports1'
    },
    Resize: {
      size: 16,
      key: 'WindowResizeMarker'
    },
    Right: {
      size: 16,
      key: 'ArrowRight'
    },
    RightMini: {
      size: 16,
      key: 'ArrowRightMini'
    },
    Safe: {
      size: 16,
      key: 'SafeFull'
    },
    SearchRounded: {
      size: 16,
      key: 'Search'
    },
    Settings01: {
      size: 16,
      key: 'Settings21'
    },
    Settings02: {
      size: 16,
      key: 'Settings2'
    },
    Shield2: {
      size: 16,
      key: 'SecurityCheck'
    },
    StatusError: {
      size: 16,
      key: 'StatusErrorOutline'
    },
    StatusOK: {
      size: 16,
      key: 'StatusOkOutline'
    },
    Time: {
      size: 16,
      key: 'Clock'
    },
    TurnOver: {
      size: 16,
      key: 'ArrowTurnOver'
    },
    Up: {
      size: 16,
      key: 'ArrowUp1'
    },
    UpMini: {
      size: 16,
      key: 'ArrowUpMini'
    },
    UsersGroup: {
      size: 16,
      key: 'UserGroup'
    },
    // ///
    VirtualMachine: {
      size: 16,
      key: 'VirtualSwitch'
    },
    Warning: {
      size: 16,
      key: 'StatusWarningOutline',
      color: '#FA0'
    },
    Window: {
      size: 16,
      key: 'Browser'
    },
    Windowlayout: {
      size: 16,
      key: 'WindowLayout'
    }
  },
  medium: {
    Account: {
      size: 24,
      key: 'UserAccount'
    },
    Accountcheck: {
      size: 24,
      key: 'AccountProblem'
    },
    Accountinfo: {
      size: 24,
      key: 'AccountInfo'
    },
    Accounts: {
      size: 24,
      key: 'UserGroup'
    },
    Activitymonitor: {
      size: 24,
      key: 'ActivityMonitor'
    },
    Add: {
      size: 24,
      key: 'Plus'
    },
    Add2: {
      size: 24,
      key: 'Add'
    },
    AlertHigh: {
      size: 16,
      key: 'StatusLevelHigh',
      color: '#D74747'
    },
    AlertLow: {
      size: 16,
      key: 'StatusLevelLow',
      color: '#666'
    },
    AlertMedium: {
      size: 16,
      key: 'StatusLevelMedium',
      color: '#FF9D2C'
    },
    AlertTitle: {
      size: 16,
      key: 'StatusLevelEmpty',
      color: '#1E856F'
    },
    Antivirus: {
      size: 24,
      key: 'ScanRadar'
    },
    Anysensor: {
      size: 24,
      key: 'Sensor'
    },
    App: {
      size: 24,
      key: 'Browser'
    },
    AppLayout: {
      size: 24,
      key: 'WindowLayout'
    },
    Apps: {
      size: 24,
      key: 'Apps1'
    },
    AppUpdate2: {
      size: 24,
      key: 'AppUpdate'
    },
    Baby: {
      size: 24,
      key: 'Kid'
    },
    BackAndroid: {
      size: 24,
      key: 'ArrowBack'
    },
    BatteryCharge2: {
      size: 24,
      key: 'BatteryCharge'
    },
    Beartoy: {
      size: 24,
      key: 'BearToy'
    },
    Browser2: {
      size: 24,
      key: 'Web'
    },
    BrowserNewweb: {
      size: 24,
      key: 'BrowserNewWeb'
    },
    CallSMS: {
      size: 24,
      key: 'CallSms'
    },
    CameraIP: {
      size: 24,
      key: 'CameraIp'
    },
    Cancel: {
      size: 24,
      key: 'Cross'
    },
    CardSafemoney: {
      size: 24,
      key: 'CardSafeMoney'
    },
    ClockRound: {
      size: 24,
      key: 'Clock'
    },
    CloudUpload: {
      size: 24,
      key: 'Upload1'
    },
    Computer: {
      size: 24,
      key: 'Desktop'
    },
    Configure: {
      size: 24,
      key: 'CustomSettings'
    },
    ConnectionLAN: {
      size: 24,
      key: 'ConnectionEthernet'
    },
    ConnectionNoWifi: {
      size: 24,
      key: 'ConnectionWifiOff'
    },
    CrossRounded: {
      size: 24,
      key: 'Cross'
    },
    Danger: {
      size: 24,
      key: 'StatusDangerSolid1',
      color: '#ED2939'
    },
    Datacleaner: {
      size: 24,
      key: 'Clean'
    },
    Error: {
      size: 24,
      key: 'StatusErrorOutline'
    },
    FileOK: {
      size: 24,
      key: 'FileOk'
    },
    Firewall: {
      size: 24,
      key: 'DeviceFirewall'
    },
    Gesture: {
      size: 24,
      key: 'Hand'
    },
    Grid2: {
      size: 24,
      key: 'Apps'
    },
    HardDriveMonitor: {
      size: 24,
      key: 'HealthMonitor'
    },
    HistoryLogJournal: {
      size: 24,
      key: 'Backup'
    },
    Infinite: {
      size: 24,
      key: 'Perpetuity'
    },
    Info: {
      size: 24,
      key: 'StatusInfoOutline'
    },
    iPhoneandiPad: {
      size: 24,
      key: 'IPhoneiPad'
    },
    KISAndroid: {
      size: 24,
      key: 'KisAndroid'
    },
    License1: {
      size: 24,
      key: 'License'
    },
    License2: {
      size: 24,
      key: 'License1'
    },
    License3: {
      size: 24,
      key: 'License1'
    },
    LicenseKey: {
      size: 24,
      key: 'Key'
    },
    Mail1: {
      size: 24,
      key: 'Mail'
    },
    Mail2: {
      size: 24,
      key: 'MailBox'
    },
    Map: {
      size: 24,
      key: 'SafePerimeter'
    },
    Menu1: {
      size: 24,
      key: 'Menu'
    },
    Network1: {
      size: 24,
      key: 'Network'
    },
    Network2: {
      size: 24,
      key: 'Network'
    },
    Nonotification1: {
      size: 24,
      key: 'NoNotification'
    },
    Nonotification2: {
      size: 24,
      key: 'NoNotification'
    },
    NotificationBell: {
      size: 24,
      key: 'Bell'
    },
    OkCircle: {
      size: 24,
      key: 'StatusOkOutline'
    },
    Openinwindow: {
      size: 24,
      key: 'OpenInWindow'
    },
    OSAndroid: {
      size: 24,
      key: 'Android2'
    },
    OSiOS: {
      size: 24,
      key: 'Ios2'
    },
    OSmacOS: {
      size: 24,
      key: 'MacOs'
    },
    OSWindows: {
      size: 24,
      key: 'OsWindows'
    },
    PasswordProtected: {
      size: 24,
      key: 'PasswordProtected'
    },
    PhoneiPhone: {
      size: 24,
      key: 'IPhone'
    },
    Photoframe: {
      size: 24,
      key: 'PhotoFrame'
    },
    Premium: {
      size: 24,
      key: 'StatusPremiumColor'
    },
    PrivacyCleaner: {
      size: 24,
      key: 'Clean'
    },
    ProfileCustom: {
      size: 24,
      key: 'CustomSettings'
    },
    Protection: {
      size: 24,
      key: 'SecurityCheck'
    },
    QRcode: {
      size: 24,
      key: 'QrCode'
    },
    Question: {
      size: 24,
      key: 'StatusQuestionOutline',
      color: '#087BB5'
    },
    RefreshSync: {
      size: 24,
      key: 'Update'
    },
    Remotedesktop: {
      size: 24,
      key: 'RemoteDesktop'
    },
    SearchSimplified: {
      size: 24,
      key: 'Search'
    },
    Settings1: {
      size: 24,
      key: 'Settings21'
    },
    ShieldSelfdefense: {
      size: 24,
      key: 'ShieldEnforced'
    },
    Sort: {
      size: 24,
      key: 'Sort2'
    },
    SSDDrive: {
      size: 24,
      key: 'SsdDrive'
    },
    Storage: {
      size: 24,
      key: 'StorageServer'
    },
    Streamingdongle: {
      size: 24,
      key: 'StreamingDongle'
    },
    Time: {
      size: 24,
      key: 'Clock'
    },
    TouchID: {
      size: 24,
      key: 'TouchId'
    },
    TrustedAppMode: {
      size: 24,
      key: 'AppLock'
    },
    TV: {
      size: 24,
      key: 'Tv'
    },
    VPN: {
      size: 24,
      key: 'Vpn'
    },
    Warning: {
      size: 24,
      key: 'StatusWarningOutline'
    }
  },
  large: {
    AccountID: {
      size: 48,
      key: 'AccountId'
    },
    CameraIP: {
      size: 48,
      key: 'CameraIp'
    },
    HDD: {
      size: 48,
      key: 'Hdd'
    },
    iPhone: {
      size: 48,
      key: 'IPhone'
    },
    MemoryRAM: {
      size: 48,
      key: 'MemoryRam'
    },
    OK: {
      size: 48,
      key: 'Ok'
    },
    OK2: {
      size: 48,
      key: 'Ok2'
    },
    RescueDiscCD: {
      size: 48,
      key: 'RescueDiscCd'
    },
    SSD: {
      size: 48,
      key: 'Ssd'
    },
    TV: {
      size: 48,
      key: 'Tv'
    }
  }
}
