import { TreeNode } from "./type"

// 获取所有后代节点values
export function getAllDescendantValues(options: TreeNode[]) : string[] {
  const descendantValues: string[] = []
  const traverse = (node: TreeNode) => {
    descendantValues.push(node.value)
    if(node.children && node.children.length > 0) {
      node.children.forEach(child => traverse(child))
    }
  }
  options.forEach(option => traverse(option))
  return descendantValues
}

// 根据树节点value获取所有后代节点
export function getAllDescendantNodesByValue(options: TreeNode[], value: string) : string[] {
  const findTreeNodeByValue = (nodeList: TreeNode[]): TreeNode | undefined => {
    for (const node of nodeList) {
      if (node.value === value) {
        return node
      }
      if (node.children && node.children.length > 0) {
        const found = findTreeNodeByValue(node.children)
        if (found) {
          return found
        }
      }
    }
    return undefined
  }

  const targetNode = findTreeNodeByValue(options)
  if (!targetNode) {
    return []
  }

  const result = getAllDescendantValues(targetNode.children || [])
  return result
}