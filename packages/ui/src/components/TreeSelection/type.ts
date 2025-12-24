export interface TreeNode {
  label: string
  value: string
  disabled?: boolean
  children?: TreeNode[]
}
export interface CheckboxState {
  checked: boolean
  indeterminate: boolean
}
export interface TreeSelectionProps {
  modelValue: string[]
  options: TreeNode[]
}