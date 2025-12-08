import { PropType, defineComponent } from "vue";
import { TagProps } from "./type";
import './base.scss';

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
    }
  },
  setup(props) {
    return () => {
      return (
        <div class="ey-tag">
          <div class="ey-tag__content">
            {props.text}
          </div>
        </div>
      )
    }
  }
})