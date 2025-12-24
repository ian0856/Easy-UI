import { CheckboxState, TreeNode } from "./type";
import _ from 'lodash'

function findTreeNode(value: string, options: TreeNode[]): TreeNode | undefined {
  for (const node of options) {
    if (node.value === value) {
      return node
    }
    if (node.children && node.children.length > 0) {
      const found = findTreeNode(value, node.children)
      if (found) {
        return found
      }
    }
  }
  return undefined
}

// 根据子节点value获取父节点
function getTreeNodeByChildValue (value: string, options: TreeNode[]) {
  // 所有父节点
  const treeNodes = options.filter(item => item.children)
  

}

function getAllChildrenNodeValues (treeNode: TreeNode, values: string[] = []) {
  if(!treeNode || !treeNode.children) return values

  function resolveChild (child: TreeNode) {
    if(!child) return

    values.push(child.value)

    if(child.children && child.children.length > 0) {
      _.forEach(child.children, (c: TreeNode) => {
        resolveChild(c)
      })
    }
  }

  _.forEach(treeNode.children, (child: TreeNode) => {
    resolveChild(child)
  })

  return values
}



// 管理选择框状态
export function useCheckboxState (value: string, selectedKeys: string[], options: TreeNode[]) {
  const TreeNodeItem = findTreeNode(value, options)

  if(TreeNodeItem?.children) {
    const allChildrenValues = getAllChildrenNodeValues(TreeNodeItem)

    const selectedChildrenValues = selectedKeys.filter(item => allChildrenValues.includes(item))

    const isIndeterminate = selectedChildrenValues.length > 0 && selectedChildrenValues.length < allChildrenValues.length
    const isChecked = selectedChildrenValues.length === allChildrenValues.length

    const toggle = () => {
      if(isIndeterminate || isChecked) {
        selectedKeys = _.difference(selectedKeys, [...allChildrenValues, value])
      }
      else {
        selectedKeys = [...selectedKeys, ...allChildrenValues, value]
      }
      return selectedKeys
    }

    return {
      isChecked,
      isIndeterminate,
      toggle
    }
  }

  const isChecked = selectedKeys.includes(value)

  const toggle = () => {
    if(isChecked) {
      selectedKeys = _.difference(selectedKeys, [value])
    }
    else {
      selectedKeys = [...selectedKeys, value]
    }
    return selectedKeys
  }

  return {
    isChecked,
    toggle
  }
}