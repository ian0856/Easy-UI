import { PropType, defineComponent } from "vue";
import { TabsProps } from "./type";
import { useVModel } from "@vueuse/core"; 
import './base.scss'

export const EyTabs = defineComponent({
  name: 'EyTabs',
  props: {
    modelValue: {
      type: String as PropType<TabsProps['modelValue']>,
      required: true
    },
    options: {
      type: Array as PropType<TabsProps['options']>,
      required: true
    },
    type: {
      type: String as PropType<TabsProps['type']>,
      default: 'default'
    },
    direction: {
      type: String as PropType<TabsProps['direction']>,
      default: 'horizontal'
    }
  },
  emits: {
    'update:modelValue': (_value: string) => true,
    'change': (_value: string) => true
  },
  setup(props, { emit }) {
    const modelValue = useVModel(props, 'modelValue', emit)
    const handleChange = (value: string) => {
      modelValue.value = value
      emit('change', value)
    }
    return () => {
      return (
        <div class="ey-tabs-wrapper">
          <div class={['ey-tabs', `ey-tabs--${props.type}`]}>
          {
            props.options.map((option) => (
              <div
                class={[
                  'ey-tabs__item',
                  modelValue.value === option.value ? 'ey-tabs__item--active' : '',
                ]}
                key={option.value}
                onClick={() => handleChange(option.value)}
              >
                {option.label}
              </div>
            ))
          }
          </div>
          {
            props.type === 'default' && (
              <div class="ey-tabs__bottom-line">
                <div
                  style={{
                    width: `${100 / props.options.length}%`,
                    left: `${props.options.findIndex(opt => opt.value === modelValue.value) * (100 / props.options.length)}%`,
                  }}
                  class="ey-tabs__bottom-line__item"
                ></div>
              </div>
            )
          }
          {
            props.options.find(opt => opt.value === modelValue.value)?.content && (
              <div class="ey-tabs__content">
                {props.options.find(opt => opt.value === modelValue.value)?.content}
              </div>
            )
          }
        </div>

      )
    }
  }
})