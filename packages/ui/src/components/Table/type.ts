interface ColumnProps {
  title: string
  key: string
  width?: string
  align?: 'left' | 'center' | 'right'
  fixed?: 'left' | 'right'
}

export interface DataProps {
  [key: string]: any
}

export interface TableProps {
  /** 列 */
  columns: ColumnProps[]
  /** 数据 */
  data: DataProps[]
  /** 支持复选 */
  selectable?: boolean
  /** 选择项 */
  selectedKeys?: string[]
}