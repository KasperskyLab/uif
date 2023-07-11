export enum LangVariants {
  En = 'en',
  Ru = 'ru'
}

export type LangType = `${LangVariants}`

export type Localization = {
  [key in LangVariants]: Loc;
};

export interface Loc {
  translation: Translation,
}

export interface Translation {
  upload: Upload,
  severity: Severity,
}

export interface Upload {
  dropFileTitle: string,
  pasteLinkTitle: string,
  helpText: string,
  placeholder: string,
  addFiles: string,
  cancel: string,
  selectAnotherFile: string,
  enterNewURL: string,
  repeat: string,
  loadingTitle: string,
  loadingDescription: string,
  successTitle: string,
  successDescription: string,
  errorTitle: string,
  errorDescription: string,
}

export interface Severity {
  critical: string,
  low: string,
  medium: string,
  high: string,
  info: string,
  positive: string,
}

export interface Resource {
  [language: string]: ResourceLanguage,
}

export interface ResourceLanguage {
  [namespace: string]: ResourceKey,
}

export type ResourceKey = string| {[key: string]: any} | any
