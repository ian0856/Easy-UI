import { defineComponent, PropType, ref, useTemplateRef, watch } from "vue";
import { SelectProps } from "./type";
import './base.scss';
import { EyInput } from "../Input";
import { EyIcon } from "../Icon";
import { EyMenu } from "../Menu";
import { onClickOutside, useVModel } from "@vueuse/core";

export const EySelect = defineComponent({
  name: 'EySelect',
  props: {
    modelValue: {
      type: [String, Array] as PropType<SelectProps['modelValue']>,
    },
    options: {
      type: Array as PropType<SelectProps['options']>,
      default: () => [],
    },
    multiple: {
      type: Boolean as PropType<SelectProps['multiple']>,
      default: false
    },
    animation: {
      type: Boolean as PropType<SelectProps['animation']>,
      default: true
    },
  },
  emits: {
    'update:modelValue': (value: string | string[]) => true
  },
  setup(props, { emit }) {
    const inputRef = ref<HTMLInputElement | null>(null);
    const isMenuVisible = ref(false);
    const menuRef = ref<HTMLElement | null>(null);

    const handleFocus = () => {
      isMenuVisible.value = true;
    };

    const handleIconClick = () => {
      isMenuVisible.value = !isMenuVisible.value
      if(isMenuVisible.value) inputRef.value?.focus();
      else inputRef.value?.blur();
    };

    const handleMenuMouseDown = (e: MouseEvent) => {
      e.preventDefault();
    };

    const ActiveArea = useTemplateRef<HTMLDivElement>('ey-select-wrapper');
    onClickOutside(ActiveArea, () => {
      isMenuVisible.value = false;
    });

    const value = useVModel(props, 'modelValue', emit, {
      defaultValue: props.multiple ? [] : ''
    });

    watch(value, () => {
      if(!props.multiple) isMenuVisible.value = false
    })

    const inputContent = (value: string | string[]) => {
      if(typeof value === 'string') return props.options.find((option) => option.value === value)?.label ?? ''
      else return value.map((v) => props.options.find((option) => option.value === v)?.label ?? '').join(', ')
    }
    
    return () => {
      return (
        <div class="ey-select" ref="ey-select-wrapper">
          <EyInput onFocus={handleFocus} readonly placeholder="请选择" ref={inputRef} value={inputContent(value.value ?? '')}>
            {{
              suffix: () => (
              <EyIcon 
                color="gray"
                onClick={handleIconClick}
                name={isMenuVisible.value ? "mdi:chevron-up" : "mdi:chevron-down"}
                size="1.7em"
                class="cursor-pointer"
              />
            )
            }}
          </EyInput>
          <div
            class="ey-select__menu-wrapper"
            ref={menuRef}
            onMousedown={handleMenuMouseDown}
          >
            {isMenuVisible.value && (
              <EyMenu options={props.options} v-model={value.value} multiple={props.multiple} />
            )}
          </div>
        </div>
      )
    }
  }
})