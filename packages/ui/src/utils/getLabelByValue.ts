import { flatten } from "lodash";
import { TreeNode } from "../components/TreeSelection/type";
import { OptionItem } from "../types/OptionItem";

export function getLabelByValue<T extends OptionItem>(options: T[], values: string): string {
  return options.find(option => option.value === values)?.label || ''
}
