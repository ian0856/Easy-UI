import { PropType, defineComponent } from "vue";
import { DateTimePickerProps } from "./type";
import { EyInput } from "../Input";
import { EyIcon } from "..";
import dayjs from "dayjs";
import { Panel } from "./_components/Panel";

export const EyDateTimePicker = defineComponent({
  name: 'EyDateTimePicker',
  props: {
    modelValue: {
      type: String as PropType<DateTimePickerProps['modelValue']>,
      default: dayjs().format('YYYY-MM-DD')
    },
    type: {
      type: String as PropType<DateTimePickerProps['type']>,
      default: 'date'
    },
    formatter: {
      type: String as PropType<DateTimePickerProps['formatter']>,
      default: 'YYYY-MM-DD'
    }
  },
  emits: {
    'update:modelValue': (value: string) => true
  },
  setup(props,{emit}) {
    return () => {
      return (
        <div class="ey-datetime-picker-wrapper">
          <EyInput value={props.modelValue} disabled>
          {{
            suffix: () => <EyIcon name="mdi:calendar" size="1.5em" class="mr-5px cursor-pointer" />
          }}
        </EyInput>
        <Panel />
        </div>
      )
    }
  }
})