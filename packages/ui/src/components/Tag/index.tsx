import { PropType, defineComponent, ref } from "vue";
import { TagProps } from "./type";
import './base.scss';
import { EyIcon } from "..";
import { useVModel } from "@vueuse/core";

export const EyTag = defineComponent({
  name: 'EyTag',
  props: {
    text: {
      type: String as PropType<TagProps['text']>,
      default: 'Easy-UI'
    },
    closable: {
      type: Boolean as PropType<TagProps['closable']>,
      default: false
    },
    color: {
      type: String as PropType<TagProps['color']>,
      default: '#409eff'
    },
  },
  emits: {
    'close': (_text: string) => true,
  },
  setup(props, {emit}) {
    const show = ref(true)
    const handleClose = () => {
      show.value = false
      emit('close', props.text)
    }
  
    
    return () => {
      return (
        show.value && (
          <div class="ey-tag"
            onClick={handleClose}
          >
            <span class="truncate" title={props.text}>
              {props.text}
            </span>
            {
              props.closable ? (
                <EyIcon class="ml-4px" name="mdi:close-circle" size="16px" onClick={handleClose} />
              ) : null
            }
          </div>
        )
      )
    }
  }
})