import { OptionItem } from "../../types/OptionItem"

export interface MenuProps {
  options: MenuItem[]
  modelValue?: string[] | string
  class: string
  multiple: boolean
}

export interface MenuItem extends OptionItem {
  label: string
  value: string
  disabled?: boolean
}