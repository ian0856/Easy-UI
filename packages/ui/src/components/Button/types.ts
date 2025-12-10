type ButtonVariant = 'default' | 'outlined' | 'text' | 'plain'
type ButtonSize = 'small' | 'default' | 'large'
type ButtonType = 'primary' | 'default'
export interface ButtonProps {
  text?: string
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  type?: ButtonType
  class?:string

  prefixIcon?: string
  suffixIcon?: string
}

export type ButtonEmits = {
  (e: 'click'): void
  (e: 'mouseEnter'): void
  (e: 'mouseLeave'): void
  (e: 'hover'): void
}