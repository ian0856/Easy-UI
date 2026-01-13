export type DatePickerType = 'date' | 'time' | 'datetime'

export interface DatePickerProps {
  modelValue: string
  disabled: () => void
  formatter: string
}