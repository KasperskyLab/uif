export type ImageWithPreviewType =
  | { preview: string, full: string }
  | { readonly preview: string, readonly full: string }

export type ImageSingleType = string

export type ImageType = ImageWithPreviewType | ImageSingleType
export type ScreensListWithPreviews = ImageWithPreviewType[] | readonly ImageWithPreviewType[]
export type ScreensListWithSingleImages = ImageSingleType[] | readonly ImageSingleType[]
export type ScreensListType = ScreensListWithPreviews | ScreensListWithSingleImages
export type PerPage = 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50

export type CurrentImage = string | null
export type HandleChangeCurrentImage = (image: CurrentImage) => void
export type CustomLoader = (name: string) => string | Promise<string>
export type CreateImagePath = (name: string) => string

export type Uuid = string | null
export type HandleScreenSelect = (screen: ScreenInternalState | null) => void
export type ScreenInternalState = {
  uuid: NonNullable<Uuid>,
  full: string,
  preview: string
}
export type LoadingStatus = 'loading' | 'success' | 'failure'
export type LoadingStatusWithLoader = 'outsideOfViewport' | LoadingStatus
export type ScreenInternalStateWithCustomLoad = {
  uuid: NonNullable<Uuid>,
  full: string,
  preview: string,
  previewStatus: LoadingStatusWithLoader,
  fullStatus: LoadingStatusWithLoader,
  previewSrc: string | null,
  fullSrc: string | null
}
export type HandleScreenSelectCustomLoad = (screen: ScreenInternalStateWithCustomLoad | null) => void

export type GalleryProps = {
  /**
   * An array with images.
   * Could be simple strings or objects with { preview: string, full: string } structure.
   */
  screensList: ScreensListType,
  /**
   * A name of opened full screen image. Pass it if you want to make the gallery controllable.
   */
  value?: CurrentImage,
  /**
   * «value» change handler. Pass it if you want to make the gallery controllable.
   */
  onChange?: HandleChangeCurrentImage,
  /**
   * A full path creator. For example, when image names in the «screensList»
   * ["1.png", "2.png"] need to be converted to ["https://url/1.png", "https://url/2.png"],
   * but only for the «src» attribute.
   */
  createSrc?: CreateImagePath,
  /**
   * Custom image loader. Pass it if you have special API to fetch images.
   * Accepts image name and should return string that could be accepted by «src» attribute (base64, URL.createObjectURL, etc)
   */
  handleCustomImageLoad?: CustomLoader,
  /**
   * Tooltip text for the zoom in button in the fullscreen image view.
   */
  zoomInText?: React.ReactNode,
  /**
   * Tooltip text for the zoom out button in the fullscreen image view.
   */
  zoomOutText?: React.ReactNode,
  /**
   * A text of message indicating image loading failure in the fullscreen image view.
   */
  imageLoadingFailureText?: React.ReactNode,
  /**
   * Count of screens per page.
   * Must be a multiple of 5, i.e. 5 or 10 or 15 and so on.
   * Default is 10.
   */
  screenPerPage?: PerPage,
  /**
   * Should hide pagination when there are not enough screenshots for two or more pages.
   */
  hasConditionalPaging?: boolean,
  /**
   * A selector of the root component of the app. Makes it blurry when fullscreen image is open.
   * Default value is #root. Pass null if you want to remove blur behavior.
   */
  rootSelector?: string | null,
  /**
   * Text which is displayed under icon when there is no screenshots available
   */
  noDataText?: string,
  /**
   * The number of columns
   */
  columnsNumber?: number
}
