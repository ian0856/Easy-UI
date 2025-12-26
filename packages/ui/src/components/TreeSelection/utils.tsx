import { TreeNode } from "./type"

// 获取所有后代节点values
export function getAllDescendantValues(options: TreeNode[]) : string[] {
  const descendantValues: string[] = []
  const traverse = (node: TreeNode) => {
    if(node.children && node.children.length > 0) {
      node.children.forEach(child => traverse(child))
    }
    else {
      descendantValues.push(node.value)
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

// 获取所有树节点的 values
export function getAllExpandableNodeValues(options: TreeNode[]): string[] {
  const expandableValues: string[] = []
  const traverse = (node: TreeNode) => {
    if (node.children && node.children.length > 0) {
      expandableValues.push(node.value)
      node.children.forEach(child => traverse(child))
    }
  }
  options.forEach(option => traverse(option))
  return expandableValues
}

// 根据树节点value获取树节点
export function findTreeNodeByValue(options: TreeNode[], value: string): TreeNode | undefined {
  for (const node of options) {
    if (node.value === value) {
      return node
    }
    if (node.children && node.children.length > 0) {
      const found = findTreeNodeByValue(node.children, value)
      if (found) {
        return found
      }
    }
  }
  return undefined
}
// 新增子节点
export function addChildNode(
  options: TreeNode[], 
  rootValue: string,
  childNode: TreeNode
) {
  const targetNode = findTreeNodeByValue(options, rootValue)
  if (!targetNode) {
    return
  }
  if(!targetNode.children) {
    targetNode.children = [childNode]
  }
  targetNode.children.push(childNode)
  return options
}