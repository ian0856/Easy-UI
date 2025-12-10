import { VNode } from "vue";

type TriggerType = 'click' | 'hover'
export interface CollapseProps {
  modelValue: boolean,
  trigger: TriggerType
}