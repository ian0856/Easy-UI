import { computed, defineComponent, PropType, ref, Teleport } from "vue";
import { ModalProps } from "./type";
import './base.scss';
import { EyOverlay } from "../Overlay";
import { useVModel } from "@vueuse/core";
import { EyButton, EyIcon } from "..";

export const EyModal = defineComponent({
  name: 'EyModal',
  props: {
    title: {
      type: String as PropType<ModalProps['title']>,
    },
    modelValue: {
      type: Boolean as PropType<ModalProps['modelValue']>,
      default: false
    },
    fullscreen: {
      type: Boolean as PropType<ModalProps['fullscreen']>,
      default: false
    },
    closeable: {
      type: Boolean as PropType<ModalProps['closeable']>,
      default: true
    },
    fullscreenToggle: {
      type: Boolean as PropType<ModalProps['fullscreenToggle']>,
      default: true
    },
    /** 布局相关 */
    size: {
      type: String as PropType<ModalProps['size']>,
      default: 'default'
    },
    height: {
      type: String as PropType<ModalProps['height']>,
      default: '500px'
    },
    width: {
      type: String as PropType<ModalProps['width']>,
      default: '500px'
    },
    offsetLeft: {
      type: String as PropType<ModalProps['offsetLeft']>,
    },
    offsetTop: {
      type: String as PropType<ModalProps['offsetTop']>,
    },
  },
  emits: {
    'update:modelValue': (value: boolean) => true
  },
  setup(props, { emit, slots }) {
    const modelValue = useVModel(props, 'modelValue', emit)

    const fullScreen = ref(props.fullscreen)
    const actionIcon = computed(() => fullScreen.value ? 'mdi:fullscreen-exit' : 'mdi:fullscreen')
    const toggleIcon = () => {
      fullScreen.value = !fullScreen.value
    }
    return () => {
      return (
        modelValue.value ? (
          <Teleport to="body">
            <EyOverlay>
            {{
              default: () => (
                <div class={[
                  'ey-modal',
                  fullScreen.value ? 'ey-modal--fullscreen' : ['ey-modal--default', `ey-modal--default__${props.size}`],
                ]}>
                  <header class="flex items-center justify-between">
                    <h2>{props.title ?? 'Easy-UI Modal'}</h2>
                    <div class="flex items-center gap-4px">
                      <EyIcon class="cursor-pointer" name={actionIcon.value} size="1.7em" onClick={toggleIcon} />
                      <EyIcon class="cursor-pointer" name="mdi:close" size="1.7em" onClick={() => { modelValue.value = false }} />
                    </div>
                  </header>
                  <main>
                    {slots.default?.()}
                  </main>
                  <footer>
                    {slots.footer?.() ?? (
                      <div class="flex gap-8px justify-end">
                        <EyButton text="关闭" onClick={() => { modelValue.value = false }} />
                        <EyButton text="确认" type="primary" onClick={() => { modelValue.value = false }} />
                      </div>
                    )}
                  </footer>
                </div>
              )
            }}
            </EyOverlay>
          </Teleport>
        ) : null
      )
    }
  }
})