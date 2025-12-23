import { PropType, defineComponent } from "vue";
import { ErrorMessageProps } from "./type";

export const EyErrorMessage = defineComponent({
  name: 'EyErrorMessage',
  props: {
    text: {
      type: String as PropType<ErrorMessageProps['text']>,
      required: true
    }
  },
  setup(props) {
    return () => {
      return (
        <div class="color-red text-sm">
          {props.text}
        </div>
      )
    }
  }
})