export type DateTimePickerType = 'date' | 'time' | 'datetime'

export interface DateTimePickerProps {
  modelValue: string
  type: DateTimePickerType
  disabled: () => void
  formatter: string
}