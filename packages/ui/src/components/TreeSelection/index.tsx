import { PropType, Transition, computed, defineComponent, ref, watch } from "vue";
import { TreeNode, TreeSelectionProps } from "./type";
import { useVModel } from "@vueuse/core";
import './base.scss';
import { EyIcon } from "..";
import { getAllDescendantNodesByValue, getAllDescendantValues, getAllExpandableNodeValues } from "./utils";
import { difference, every, some, xor } from "lodash";

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
    'update:modelValue': (_value: string[]) => true,
  },
  setup(props,{emit}) {
    const modelValue = useVModel(props, 'modelValue', emit)

    // 展开/收起
    const useCollapsedState = () => {
      const collapsedKeys = ref<string[]>([])

      const update = (key: string) => {
        if(collapsedKeys.value.includes(key)) {
          collapsedKeys.value = collapsedKeys.value.filter((k) => k !== key)
        }
        else {
          collapsedKeys.value.push(key)
        }
      }

      return {
        collapsedKeys,
        update,
      }
    }


    const { collapsedKeys, update: updateCollapsedState } = useCollapsedState()

    // 根节点展开/收起所有后代节点
    const toggleAllNodes = () => {
      const treeNodeValues = getAllExpandableNodeValues(props.options)
      if(collapsedKeys.value.includes('root')) {
        collapsedKeys.value = []
      } else {
        collapsedKeys.value = xor(collapsedKeys.value, treeNodeValues, ['root'])
      }
    }

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

      const isCollapsed = computed(() => {
        return collapsedKeys.value.includes(node.value)
      })

      return (
        <div class="ey-tree-selection-tree-node">
          <div class="ey-tree-selection-tree-node__header">
          <label for={`tree-node-${node.value}`} >
            <input id={`tree-node-${node.value}`} disabled={node.disabled} type="checkbox" checked={isChecked.value} indeterminate={isIndeterminate.value} onChange={() => toggle()} />
            <span>{node.label}</span>
          </label>
          <EyIcon
            onClick={() => updateCollapsedState(node.value)}
            name={isCollapsed.value ? 'mdi:chevron-up' : 'mdi:chevron-down'}
            class="ml-auto"
            size="1.5em"
          />
          </div>
          <div
            class="ey-tree-selection-tree-node__content"
          >
            {
              isCollapsed.value ? null : (
                <div
                  style={
                    { marginLeft: `${level * 10}px` }
                  }
                >
                  {node.children?.map((child) => {
                    if(child.children) return renderTreeNode(child, level + 1)
                    else return renderLeafNode(child)
                  })}
                </div>

              )
            }
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
            <EyIcon
            onClick={toggleAllNodes}
            name={collapsedKeys.value.includes('root') ? 'mdi:chevron-up' : 'mdi:chevron-down'}

            size="1.5em"
            />
          </div>
          <Transition name="collapse">
            {
              collapsedKeys.value.includes('root') ? null : (
                <div class="ey-tree-selection__tree">
                  {props.options.map((option) => renderTreeNode(option))}
                </div>
              )
            }
          </Transition>
        </div>
      )
    }
  }
})