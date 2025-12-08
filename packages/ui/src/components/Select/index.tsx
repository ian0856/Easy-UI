import { defineComponent, PropType } from "vue";
import { SelectProps } from "./type";
import './base.scss';

export const EySelect = defineComponent({
  name: 'EySelect',
  props: {
    value: {
      type: String as PropType<SelectProps['value']>,
    },
    options: {
      type: Array as PropType<SelectProps['options']>,
      default: () => [],
    },
    multiple: {
      type: Boolean as PropType<SelectProps['multiple']>,
      default: false
    },
  },
  setup(props) {
    return () => {
      return (
        <div class="ey-select">
          <select class="ey-select__content" multiple={props.multiple} value={props.value}>
          {props.options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        </div>
      )
    }
  }
})