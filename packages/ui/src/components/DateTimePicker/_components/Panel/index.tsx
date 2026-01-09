import { defineComponent } from "vue"
import './style.scss'
import { Calendar } from "../Calendar"
import { TimeScroll } from "../TimeScroll"

export const Panel = defineComponent({
  name: 'Panel',
  setup() {
    return () => {
      return (
        <div class="panel">
          <Calendar />
          <TimeScroll />
        </div>
      )
    }
  }
})