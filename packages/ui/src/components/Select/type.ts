import { OptionItem } from "../../types/OptionItem"

export interface SelectItem extends OptionItem {
  disabled?: boolean
}

export interface SelectProps {
  modelValue?: string | string[]
  options?: SelectItem[]
  multiple?: boolean
  animation?: boolean
}