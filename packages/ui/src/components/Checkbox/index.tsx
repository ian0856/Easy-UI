import { defineComponent, PropType } from "vue";
import { CheckboxProps } from "./type";
import './base.scss';

export const EyCheckbox = defineComponent({
  name: 'EyCheckbox',
  props: {
    value: {
      type: String as PropType<CheckboxProps['value']>,
    },
    options: {
      type: Array as PropType<CheckboxProps['options']>,
      default: () => [],
    },
    direction: {
      type: String as PropType<CheckboxProps['direction']>,
      default: 'horizontal'
    },
  },
  setup(props) {
    return () => {
      return (
        <div class={[
          'ey-checkbox',
          props.direction === 'horizontal' ? 'ey-checkbox--horizontal' : 'ey-checkbox--vertical'
        ]}>
          {
            props.options.map((option) => (
              <div class="ey-checkbox__item">
                <input type="checkbox" value={option.value} checked={props.value === option.value} />
                <label>{option.label}</label>
              </div>
            ))
          }
        </div>
      )
    }
  }
})