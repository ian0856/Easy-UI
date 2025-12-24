import { PropType, defineComponent } from "vue";
import { TreeNode, TreeSelectionProps } from "./type";
import { useVModel } from "@vueuse/core";
import './base.scss';
import { EyIcon } from "..";
import { useCheckboxState } from "./utils";
export const EyTreeSelection = defineComponent({
  name: 'EyTreeSelection',
  props: {
    modelValue: {
      type: Array as PropType<TreeSelectionProps['modelValue']>,
      default: () => [],
    },
    options: {
      type: Array as PropType<TreeSelectionProps['options']>,
      default: () => [],
    },
  },
  emits: {
    'update:modelValue': (value: string[]) => true,
  },
  setup(props,{emit}) {
    const modelValue = useVModel(props, 'modelValue', emit)

    // 渲染叶子节点
    const renderLeafNode = (node: TreeNode) => {
      const { isChecked, toggle } = useCheckboxState(node.value, modelValue.value, props.options)
      return (
        <div class="ey-tree-selection-leaf-node">
          <input type="checkbox" checked={isChecked} onChange={() => modelValue.value = toggle()} />
          <span>{node.label}</span>
        </div>
      )
    }

    // 渲染树节点
    const renderTreeNode = (node: TreeNode, level: number = 1) => {
      const { isChecked, isIndeterminate, toggle } = useCheckboxState(node.value, modelValue.value, props.options)
      return (
        <div class="ey-tree-selection-tree-node">
          <div class="ey-tree-selection-tree-node__header">
            <input type="checkbox" checked={isChecked} indeterminate={isIndeterminate} onChange={() => modelValue.value = toggle()} />
            <span>{node.label}</span>
            <EyIcon name="mdi:chevron-down" class="ml-auto" size="1.5em" />
          </div>
          <div
            class="ey-tree-selection-tree-node__content"
            style={
              { marginLeft: `${level * 10}px` }
            }
          >
            {node.children?.map((child) => {
              if(child.children) return renderTreeNode(child, level + 1)
              else return renderLeafNode(child)
            })}
          </div>
        </div>
      )
    }


    return () => {
      return (
        <div class="ey-tree-selection">
          {props.options.map((option) => renderTreeNode(option))}
        </div>
      )
    }
  }
})