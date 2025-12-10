import { PropType, defineComponent, Transition } from "vue";
import { CollapseProps } from "./type";
import { useVModel } from "@vueuse/core";
import './base.scss';
import { EyIcon } from "..";

export const EyCollapse = defineComponent({
  name: 'EyCollapse',
  props: {
    modelValue: {
      type: Boolean as PropType<CollapseProps['modelValue']>,
      default: false,
    },
    trigger: {
      type: String as PropType<CollapseProps['trigger']>,
      default: 'click'
    },
  },
  setup(props, {emit, slots}) {
    const modelValue = useVModel(props, 'modelValue', emit);
    return () => {
      return <div class="ey-collapse">
        <div class="ey-collapse__header">
          {
            slots.header?.() ?? (
              <>
                <EyIcon
                  size="1.5em"
                  name={modelValue.value ? 'mdi:chevron-down' : 'mdi:chevron-right'}
                  onClick={() => { if (props.trigger === 'click') { modelValue.value = !modelValue.value } }}
                  onMouseEnter={() => { if (props.trigger === 'hover') { modelValue.value = true } }}
                  onMouseLeave={() => { if (props.trigger === 'hover') { modelValue.value = false } }}
                />
                <span>Easy-UI Collapse</span>
              </>
            )
          }
        </div>
        <Transition name="collapse">
          {
            modelValue.value ? (
              <div class="ey-collapse__content">
                {
                  slots.content?.() ?? (
                    <div class="ey-collapse__content__default">
                      <p>Easy-UI Collapse</p>
                      <p>Easy-UI Collapse</p>
                      <p>Easy-UI Collapse</p>
                    </div>
                  )
                }
              </div>
            ) : null
          }
        </Transition>
      </div>
    }
  }
})