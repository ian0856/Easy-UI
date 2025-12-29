import { VNode } from "vue"
import { Direction, OptionItem } from "../.."

type TabsType = 'default' | 'card'

interface TabItem extends OptionItem {
  content?: string | VNode 
}

export interface TabsProps {
  modelValue: string
  options: TabItem[]
  type: TabsType
  direction: Direction
}