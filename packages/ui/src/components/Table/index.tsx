import { PropType, defineComponent } from "vue";
import { DataProps, TableProps } from "./type";
import './base.scss'
import { useVModel } from "@vueuse/core";

export const EyTable = defineComponent({
  name: 'EyTable',
  props: {
    columns: {
      type: Array as PropType<TableProps['columns']>,
      required: true
    },
    data: {
      type: Array as PropType<TableProps['data']>,
      required: true
    },
    selectable: {
      type: Boolean as PropType<TableProps['selectable']>,
      default: false
    },
    selectedKeys: {
      type: Array as PropType<TableProps['selectedKeys']>,
    },
  },
  emits: {
    'update:selectedRows': (_value: DataProps[]) => true
  },
  setup(props, { emit }) {
    const selectedKeys = useVModel(props, 'selectedKeys', emit, {defaultValue: []});
    const renderTableRow = (item: any, index: number) => {
      const arr = Object.entries(item)
      return (
        <>
         {
          props.selectable && (
            <td class="ey-table__body-row__cell" key="select">
              <input type="checkbox" checked={selectedKeys.value?.includes(index.toString())}/>
            </td>
          )
         }
         {
          arr.map(([key, value]) => {
            return (
              <td class="ey-table__body-row__cell" key={key}>
                {value}
              </td>
            )
          })}
        </>
      )
    }

    function selectRoot() {
      if(!selectedKeys.value || selectedKeys.value.length === 0) {
        selectedKeys.value = [...props.data.map((item, index) => index.toString())]
      } else {
        selectedKeys.value = []
      }
    }
    return () => {
      return (
        <div class="ey-table-wrapper">
          <table class="ey-table">
            <thead class="ey-table__header">
              <tr class="ey-table__header-row">
                {
                  props.selectable && (
                    <th scope="col" class="ey-table__header-row__cell" key="select">
                      <input type="checkbox" onChange={selectRoot} />
                    </th>
                  )
                }
                {
                  props.columns.map((column) => (
                    <th scope="col" class="ey-table__header-row__cell" key={column.key} style={{ width: column.width }}>
                      {column.title}
                    </th>
                  ))
                }
              </tr>
            </thead>
            <tbody class="ey-table__body">
              {
                props.data.map((item, index) => (
                  <tr class="ey-table__body-row" key={item.key}>
                   { renderTableRow(item, index)}
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      )
    }
  }
})