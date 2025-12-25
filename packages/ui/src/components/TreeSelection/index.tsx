import { PropType, computed, defineComponent } from "vue";
import { TreeNode, TreeSelectionProps } from "./type";
import { useVModel } from "@vueuse/core";
import './base.scss';
import { EyIcon } from "..";
import { getAllDescendantNodesByValue, getAllDescendantValues } from "./utils";
import { difference, every, some } from "lodash";

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

    // 根选择器
    const useRootCheckboxState = () => {
      const descendantValues = getAllDescendantValues(props.options)
      
      const isChecked = computed(() => {
        return modelValue.value.length === descendantValues.length
      })

      const isIndeterminate = computed(() => {
        return modelValue.value.length > 0 && modelValue.value.length < descendantValues.length
      })

      const toggle = () => {
        // 1. isChecked.value === false
        if(!isChecked.value) {
          modelValue.value = [...new Set([...modelValue.value,  ...descendantValues])]
        }
        else modelValue.value = []
      }
      return {
        isChecked,
        isIndeterminate,
        toggle,
      }
    }

    // 渲染叶子节点
    const renderLeafNode = (
      node: TreeNode,
    ) => {
      const getLeafNodeCheckboxState = () => {
        const isChecked = computed(() => {
          return modelValue.value.includes(node.value)
        })

        const toggle = () => {
          if(!isChecked.value) {
            modelValue.value = [...new Set([...modelValue.value, node.value])]
          }
          else {
            modelValue.value = difference(modelValue.value, [node.value])
          }
        }

        return {
          isChecked,
          toggle,
        }
      }
      const { isChecked, toggle } = getLeafNodeCheckboxState()
      return (
        <label class="ey-tree-selection-leaf-node" for={`leaf-node-${node.value}`}>
          <input
          disabled={node.disabled}
          type="checkbox"
          id={`leaf-node-${node.value}`}
          checked={isChecked.value}
          style={node.disabled ? { 'opacity': 0.5 } as any : {}}
          onChange={() => {
            toggle()
          }
          } />
          <span>{node.label}</span>
        </label>
      )
    }

    // 渲染树节点
    const renderTreeNode = (
      node: TreeNode,
      level: number = 1
    ) => {
      const getTreeNodeCheckboxState = () => {
        const descendantValues = getAllDescendantNodesByValue(props.options, node.value)

        const isChecked = computed(() => {
          return every(descendantValues, value => modelValue.value.includes(value) )
        })
        const isIndeterminate = computed(() => {
          return !isChecked.value && some(modelValue.value, value => descendantValues.includes(value))
        })

        const toggle = () => {
          if(!isChecked.value)
            modelValue.value = [...new Set([...modelValue.value,  ...descendantValues])]
            
          else modelValue.value = difference(modelValue.value, descendantValues)
        }

        return {
          isChecked,
          isIndeterminate,
          toggle,
        }
      }
      const { isChecked, isIndeterminate, toggle } = getTreeNodeCheckboxState()
      return (
        <div class="ey-tree-selection-tree-node">
          <label for={`tree-node-${node.value}`} class="ey-tree-selection-tree-node__header" >
            <input id={`tree-node-${node.value}`} disabled={node.disabled} type="checkbox" checked={isChecked.value} indeterminate={isIndeterminate.value} onChange={() => toggle()} />
            <span>{node.label}</span>
            <EyIcon name="mdi:chevron-down" class="ml-auto" size="1.5em" />
          </label>
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

    const { isChecked, isIndeterminate, toggle } = useRootCheckboxState()


    return () => {
      return (
        <div class="ey-tree-selection">
          <div class="ey-tree-selection__root">
            <label for="root">
              <input id="root" type="checkbox" checked={isChecked.value} indeterminate={isIndeterminate.value} onChange={() => toggle()} />
              <span>Root</span>
            </label>
          </div>
          <div class="ey-tree-selection__tree">
            {props.options.map((option) => renderTreeNode(option))}
          </div>
        </div>
      )
    }
  }
})