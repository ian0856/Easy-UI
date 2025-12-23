import { PropType, defineComponent, ref } from "vue";
import { InputProps } from "./types";
import './base.scss';
import { useVModel } from "@vueuse/core";

export const EyInput = defineComponent({
  name: 'EyInput',
  props: {
    value: {
      type: String as PropType<InputProps['value']>,
      default: ''
    },
    placeholder: {
      type: String as PropType<InputProps['placeholder']>,
      default: '请输入内容'
    },
    disabled: {
      type: Boolean as PropType<InputProps['disabled']>,
      default: false
    },
    readonly: {
      type: Boolean as PropType<InputProps['readonly']>,
      default: false
    },
    variant: {
      type: String as PropType<InputProps['variant']>,
      default: 'default'
    },
    clearable: {
      type: Boolean as PropType<InputProps['clearable']>,
      default: false
    }
  },
  emits: {
    'update:modelValue': (value: string) => true,
    'input': (value: string) => true,
    'focus': () => true,
    'blur': () => true
  },
  setup(props, { slots, emit, expose }) {
    const inputRef = ref<HTMLInputElement | null>(null);

    const handleInput = (e: Event) => {
      const value = (e.target as HTMLInputElement).value;
      emit('update:modelValue', value);
      emit('input', value);
    };

    const handleFocus = () => {
      emit('focus');
    };

    const handleBlur = () => {
      emit('blur');
    };

    const focus = () => {
      inputRef.value?.focus();
    };
    const blur = () => {
      inputRef.value?.blur();
    };

    expose({
      focus,
      blur
    });
    const value = useVModel(props, 'value', emit);
    return () => {
      return (
        <div class={`ey-input ey-input--${props.variant} flex items-center`}>
          <div class="ey-input__prefix">
            {slots.prefix?.()}
          </div>
          <input
            ref={inputRef}
            class={`ey-input__content ${props.clearable ? 'ey-input__content--clearable' : ''}`}
            value={value.value}
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={props.placeholder}
            disabled={props.disabled}
            readonly={props.readonly}
          />
        <div class="ey-input__suffix">
          {slots.suffix?.()}
        </div>
        </div>
      )
    }
  }
})