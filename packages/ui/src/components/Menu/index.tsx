import { PropType, computed, defineComponent } from "vue";
import { MenuProps } from "./type";
import { useVModel } from "@vueuse/core";
import './base.scss';
import { resolveItemOrArray } from "../../utils/resloveItemOrArray";
import { EyErrorMessage } from "../ErrorMessage";

export const EyMenu = defineComponent({
  name: 'EyMenu',
  props: {
    options: {
      type: Array as PropType<MenuProps['options']>,
      default: () => [],
    },
    modelValue: {
      type: [Array, String] as PropType<MenuProps['modelValue']>,
    },
    class: {
      type: String as PropType<MenuProps['class']>,
      default: '',
    },
    multiple: {
      type: Boolean as PropType<MenuProps['multiple']>,
      default: false,
    },
  },
  emits: {
    'update:modelValue': (value: string[] | string) => true,
  },
  setup(props, { emit }) {
    /** 错误处理 */
    if(props.modelValue && props.multiple && !Array.isArray(props.modelValue)) {
      return () => {
        return <EyErrorMessage text="多选菜单的关联数据必须为数组" />
      }
    }
    if(props.modelValue && !props.multiple && typeof props.modelValue !== 'string') {
      return () => {
        return <EyErrorMessage text="单选菜单的关联数据必须为字符串" />
      }
    }

    const modelValues = computed(() => resolveItemOrArray<string>(props.modelValue ?? []))

    const updateModelValues = (value: string) => {
      const isExist = modelValues.value.includes(value)
      if(!props.multiple) {
        if(isExist) return
        emit('update:modelValue', value)
      }
      else {
        if(isExist) {
          const newValues = modelValues.value.filter((v) => v !== value)
          emit('update:modelValue', newValues)
        } else {
          modelValues.value.push(value);
          emit('update:modelValue', modelValues.value);
        } 
        
      }
    }
    
    return () => {
      return (
        <div class={['ey-menu__wrapper', props.class]}>
          {props.options.map((option) => (
            <div
              class={[
                'ey-menu__wrapper__item',
                modelValues.value.includes(option.value) ? 'ey-menu__wrapper__item--active' : ''
              ]}
              key={option.value}
              onClick={() => updateModelValues(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )
    }
  }
})