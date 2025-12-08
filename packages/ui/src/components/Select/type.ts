import { OptionItem } from "../../types/OptionItem"

export interface SelectProps {
  value?: string
  options?: OptionItem[]
  multiple?: boolean
}