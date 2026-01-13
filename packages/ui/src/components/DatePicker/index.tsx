import { PropType, Transition, computed, defineComponent, ref, watch } from "vue";
import { DatePickerProps } from "./type";
import { EyInput } from "../Input";
import { EyButton, EyIcon } from "..";
import dayjs from "dayjs";
import { useVModel } from "@vueuse/core";
import { useCalendarArray } from "./utils";
import { useBaseInfo } from "./utils";
import './base.scss'

export const EyDatePicker = defineComponent({
  name: 'EyDateTimePicker',
  props: {
    modelValue: {
      type: String as PropType<DatePickerProps['modelValue']>,
      default: dayjs().format('YYYY-MM-DD')
    },
    formatter: {
      type: String as PropType<DatePickerProps['formatter']>,
      default: 'YYYY-MM-DD'
    }
  },
  emits: {
    'update:modelValue': (_value: string) => true
  },
  setup(props, { emit }) {
    const modelValue = useVModel(props, 'modelValue', emit)

    const visible = ref(false)

    const {
      defaultYear,
      lastYear,
      nextYear,
      defaultMonth,
      lastMonth,
      nextMonth,
    } = useBaseInfo(dayjs(modelValue.value).year(), dayjs(modelValue.value).month() + 1);

    const { array } = useCalendarArray(defaultYear, defaultMonth);

    /** 当前选中的日期 */
    const currentDay = ref(dayjs(modelValue.value).date())

    /** 当前选中日期的星期数 */
    const currentWeek = computed(() => dayjs(modelValue.value).day())
    const update = () => {
      modelValue.value = dayjs(`${defaultYear.value}-${defaultMonth.value}-${currentDay.value}`).format('YYYY-MM-DD')
    }

    /** 跳转到今天 */
    const toToday = () => {
      defaultYear.value = dayjs().year()
      defaultMonth.value = dayjs().month() + 1
      currentDay.value = dayjs().date()
      update()
    }

    /** 确定 */
    const close = () => {
      visible.value = false
    }

    const disabled = computed(() => {
      return dayjs(`${defaultYear.value}-${defaultMonth.value}-${currentDay.value}`).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')
    })
    const weeks = ['日', '一', '二', '三', '四', '五', '六']
    return () => {
      return (
        <div class="ey-date-picker-wrapper">
          <EyInput value={modelValue.value} disabled>
            {{
              suffix: () => <EyIcon name="mdi:calendar" size="1.5em" class="mr-5px cursor-pointer" onClick={() => visible.value = !visible.value} />
            }}
          </EyInput>
          <Transition name="calendar">
            {
              visible.value && (
                <div class="calendar">
                  <div class="calendar__header">
                    <EyIcon name="mdi:chevron-double-left" size={20} onClick={() => lastYear(update)} />
                    <EyIcon name="mdi:chevron-left" size={20} onClick={() => lastMonth(update)} />
                    <span>{defaultYear.value} - {defaultMonth.value}</span>
                    <EyIcon name="mdi:chevron-right" size={20} onClick={() => nextMonth(update)} />
                    <EyIcon name="mdi:chevron-double-right" size={20} onClick={() => nextYear(update)} />
                  </div>
                  <div class="calendar__body">
                    <div class="calendar__body__week">
                      {
                        weeks.map((item, index) => (<span class={["calendar__body__week__item", currentWeek.value === index ? 'calendar__body__week__item--active' : '']} key={item}>{item}</span>))
                      }
                    </div>
                    <div class="calendar__body__days">
                      {
                        array.value.map((item, index) =>
                        (
                          <div key={index} class="week-items-wrapper">
                            {item.map(item => (
                              <span
                                key={item.day}
                                onClick={() => {
                                  if (item.type === 'current') {
                                    currentDay.value = Number(item.day);
                                    update();
                                  }
                                }}
                                class={[
                                  'calendar__item',
                                  currentDay.value === item.day && item.type === 'current' ? 'calendar__item--active' : '',
                                  item.type !== 'current' ? 'calendar__item--disabled' : ''
                                ]}
                              >
                                {item.day}
                              </span>
                            ))}
                          </div>
                        )
                        )
                      }
                    </div>
                  </div>
                  <div class="calendar__footer">
                    <EyButton text="今天" onClick={toToday} type="primary" disabled={disabled.value} />
                    <EyButton text="关闭" onClick={close} type="primary" />
                  </div>
                </div>
              )
            }

          </Transition>
        </div>
      )
    }
  }
})