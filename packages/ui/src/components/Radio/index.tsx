/// <reference types="vue/jsx" />
import { PropType, defineComponent, getCurrentInstance } from "vue";
import { RadioProps } from "./type";
import './base.scss';

let radioGroupCounter = 0

export const EyRadio = defineComponent({
  name: 'EyRadio',
  props: {
    value: {
      type: String as PropType<RadioProps['value']>,
    },
    options: {
      type: Array as PropType<RadioProps['options']>,
      default: () => [],
    },
    direction: {
      type: String as PropType<RadioProps['direction']>,
      default: 'horizontal'
    },
    variant: {
      type: String as PropType<RadioProps['variant']>,
      default: 'default'
    }
  },
  setup(props) {
    const radioName = `ey-radio-${radioGroupCounter++}`
    return () => {
      return (
        <div
          class={[
            'ey-radio-group',
            props.direction === 'horizontal' ? 'ey-radio-group--horizontal' : 'ey-radio-group--vertical',
            `ey-radio-group--${props.variant}`
          ]}
        >
          {props.options.map((option) => (
            <div class="ey-radio-group__item">
              <input type="radio" name={radioName} value={option.value} id={option.value} checked={props?.value === option.value} />
              <label for={option.value}>{option.label}</label>
            </div>
          ))}
        </div>
      )
    }
  }
})
