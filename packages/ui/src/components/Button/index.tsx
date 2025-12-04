/// <reference types="vue/jsx" />
import { PropType, defineComponent } from "vue"
import { ButtonProps } from "./types"
// 样式统一在 histoire-setup.tsx 中通过 index.css 引入

export const EyButton = defineComponent({
  name: 'EyButton',
  props: {
    text: {
      type: String as PropType<ButtonProps['text']>,
      default: 'Easy-UI'
    },
    variant: {
      type: String as PropType<ButtonProps['variant']>,
      default: 'default'
    }
  },
  setup(props, { attrs }) {
    return () => {
      const externalClass = attrs.class 
        ? (Array.isArray(attrs.class) ? attrs.class.join(' ') : String(attrs.class))
        : ''
      return (
        <button class={`ey-btn ey-btn--${props.variant} ${externalClass}`.trim()}>
          {props.text}
        </button>
      )
    }
  }
})