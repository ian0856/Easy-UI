import { PropType, defineComponent } from "vue"
import { ButtonProps, ButtonEmits } from "./types"
import './base.scss'
import { EyIcon } from "../Icon"

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
    },
    size: {
      type: String as PropType<ButtonProps['size']>,
      default: 'default'
    },
    type: {
      type: String as PropType<ButtonProps['type']>,
      default: 'default'
    },
    disabled: {
      type: Boolean as PropType<ButtonProps['disabled']>,
      default: false
    },
    // 支持用户自定义unocss
    class: {
      type: String as PropType<ButtonProps['class']>,
      default: ''
    },
    // 前缀 / 后缀 图标
    prefixIcon: {
      type: String as PropType<ButtonProps['prefixIcon']>,
      default: ''
    },
    suffixIcon: {
      type: String as PropType<ButtonProps['suffixIcon']>,
      default: ''
    },
  },
  emits: {
    click: () => true,
    mouseEnter: () => true,
    mouseLeave: () => true,
    hover: () => true,
  },
  setup(props, {emit, attrs }) {
    return () => {
      const handleClick = (e: MouseEvent) => {
        if (props.disabled) return;
        emit('click')
        if (attrs.onClick && typeof attrs.onClick === 'function') {
          attrs.onClick(e)
        }
      }
      
      const handleMouseEnter = (e: MouseEvent) => {
        emit('mouseEnter')
        if (attrs.onMouseEnter && typeof attrs.onMouseEnter === 'function') {
          attrs.onMouseEnter(e)
        }
      }
      
      const handleMouseLeave = (e: MouseEvent) => {
        emit('mouseLeave')
        if (attrs.onMouseLeave && typeof attrs.onMouseLeave === 'function') {
          attrs.onMouseLeave(e)
        }
      }
      
      return (
        <button 
          class={[
            'ey-btn',
            `ey-btn--variant--${props.variant}`,
            `ey-btn--size--${props.size}`,
            `ey-btn--type--${props.type}`,
            {
              'ey-btn--disabled': props.disabled
            },
            props.class
          ]}
          onClick={handleClick}
          onMouseenter={handleMouseEnter}
          onMouseleave={handleMouseLeave}
          disabled={props.disabled}
        >
          {props.prefixIcon && <EyIcon name={props.prefixIcon} size="1.2em" class="mr-2px" />}
          {props.text}
          {props.suffixIcon && <EyIcon name={props.suffixIcon} size="1.2em" class="ml-2px" />}
        </button>
      )
    }
  }
})