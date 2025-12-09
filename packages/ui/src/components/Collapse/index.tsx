import { PropType, defineComponent } from "vue";
import { CollapseProps } from "./type";
import { useVModel } from "@vueuse/core";
import { EyButton } from "../Button";
import './base.scss';

export const EyCollapse = defineComponent({
  name: 'EyCollapse',
  props: {
    modelValue: {
      type: Boolean as PropType<CollapseProps['modelValue']>,
      default: false,
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
                <EyButton text={modelValue.value ? '折叠' : '展开'} onClick={() => { modelValue.value = !modelValue.value }} />
                <span>Easy-UI Collapse</span>
              </>
            )
          }
        </div>
        {
          modelValue.value ? (
            <div class="ey-collapse__content">
              {
                slots.content?.() ?? (
                  <div>
                    <p>Easy-UI Collapse</p>
                  </div>
                )
              }
            </div>
          ) : null
        }
      </div>
    }
  }
})