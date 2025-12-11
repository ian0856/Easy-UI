type ModalSize = 'small' | 'default' | 'large'

export interface ModalProps {
  title?: string
  modelValue: boolean
  /** 全屏展示 */
  fullscreen?: boolean
  /** 关闭按钮 */
  closeable?: boolean
  /** 确认按钮 */
  confirmButton?: string
  /** 取消按钮 */
  cancelButton?: string
  /** 确认按钮点击事件 */
  confirmButtonClick?: () => void
  /** 取消按钮点击事件 */
  cancelButtonClick?: () => void
  /** 全屏/缩小 按钮 */
  fullscreenToggle?: boolean

  /** 尺寸 */
  size?: ModalSize
  /** 自定义高度 */
  height?: string
  /** 自定义宽度 */
  width?: string

  /** 偏移量 */
  offsetLeft?: string
  offsetTop?: string
}