import { PropType, defineComponent, Teleport, Transition, watch } from "vue";
import { ToastProps } from "./type";
import { useVModel } from "@vueuse/core";
import './base.scss'

export const EyToast = defineComponent({
  name: 'EyToast',
  props: {
    message: {
      type: String as PropType<ToastProps['message']>,
      default: 'Hello From Easy-UI Toast'
    },
    modelValue: {
      type: Boolean as PropType<ToastProps['modelValue']>,
      default: false
    },
    duration: {
      type: Number as PropType<ToastProps['duration']>,
      default: 1000
    }
  },
  emits: {
    'update:modelValue': (value: boolean) => true
  },
  setup(props, { emit }) {
    const modelValue = useVModel(props, 'modelValue', emit)
    let timer: ReturnType<typeof setTimeout> | null = null

    watch(() => modelValue.value, (newValue) => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      
      if (newValue) {
        timer = setTimeout(() => {
          modelValue.value = false
          timer = null
        }, props.duration)
      }
    }, { immediate: true })

    return () => {
      return (
            <Teleport to="body">
              <Transition name="toast">
                {modelValue.value ? (
                  <div class="ey-toast">
                    {props.message}
                  </div>
                ) : null}
              </Transition>
            </Teleport>
      )
    }
  }
})