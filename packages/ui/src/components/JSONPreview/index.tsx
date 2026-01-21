import { PropType, defineComponent } from "vue";
import { useVModel } from "@vueuse/core";
import JSONPreviewProps from "./type";
import './base.scss';
import { StringComponent, NumberComponent } from "./_components";

export const EyJSONEditor = defineComponent({
  name: 'EyJSONEditor',
  props: {
    modelValue: {
      type: String as PropType<JSONPreviewProps['modelValue']>,
    }
  },
  emits: {
    'update:modelValue': (value: string) => true
  },
  setup(props, { emit }) {
    const modelValue = useVModel(props, 'modelValue', emit)

    const parsed = JSON.parse(modelValue.value || '{}')
    const entries = Object.entries(parsed)

    const renderStringItem = (item: Record<string, string>) => {
      return <StringComponent obj={item} />
    }

    const renderNumberItem = (item: Record<string, number>) => {
      return <NumberComponent obj={item} />
    }

    const renderItem = (item: Record<string, string | number>) => {
      if (typeof item?.key === 'string') {
        return renderStringItem(item as Record<string, string>)
      } else if (typeof item?.value === 'number') {
        return renderNumberItem(item as Record<string, number>)
      }
    }

    return () => {
      return <div>
          <div class="json-preview" >
            {
              entries.map(([key, value]) => renderItem({ key: key as string, value: value as string | number }))
            }
          </div>
        </div>
    }
  }
})