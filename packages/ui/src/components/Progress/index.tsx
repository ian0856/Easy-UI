import { PropType, defineComponent } from "vue";
import { ProgressProps } from "./type";
import './base.scss';

export const EyProgress = defineComponent({
  name: 'EyProgress',
  props: {
    modelValue: {
      type: Number as PropType<ProgressProps['modelValue']>,
      default: 0
    },
    showPercent: {
      type: Boolean as PropType<ProgressProps['showPercent']>,
      default: false
    },
    color: {
      type: String as PropType<ProgressProps['color']>,
      default: 'aquamarine'
    }
  },
  setup(props) {
    return () => {
      return (
        <div class="ey-progress__wrapper">
          <div class="ey-progress">
            <div class="ey-progress__bar" style={{ width: `${props.modelValue}%`, backgroundColor: props.color }}>
            </div>
          </div>
          {props.showPercent ? (
            <span class="ey-progress__percent">{props.modelValue}%</span>
          ) : null}
        </div>
      )
    }
  }
})