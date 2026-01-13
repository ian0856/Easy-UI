import { PropType, defineComponent } from "vue";
import { TextareaProps } from "./type";
import { useVModel } from "@vueuse/core";
import './base.scss'

export const EyTextarea = defineComponent({
  name: 'EyTextarea',
  props: {
    modelValue: {
      type: String as PropType<TextareaProps['modelValue']>,
      default: ''
    },
    disabled: {
      type: Boolean as PropType<TextareaProps['disabled']>,
      default: false
    },
    placeholder: {
      type: String as PropType<TextareaProps['placeholder']>,
      default: '请输入内容'
    },
  },
  emits: {
    'update:modelValue': (_value: string) => true
  },
  setup(props, { emit }) {
    const modelValue = useVModel(props, 'modelValue', emit)
    return () => {
      return (
        <div class="ey-textarea">
          <textarea class="ey-textarea__input" value={modelValue.value} disabled={props.disabled} placeholder={props.placeholder} />
        </div>
      )
    }
  }
})