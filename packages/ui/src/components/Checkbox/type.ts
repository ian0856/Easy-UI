import { OptionItem } from "../../types/OptionItem"
import { Direction } from "../../types/layout"

export interface CheckboxProps {
  value: string
  options: OptionItem[]
  direction: Direction
}