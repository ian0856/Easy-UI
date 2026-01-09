import { defineComponent } from "vue"
import './style.scss'

export const Calendar = defineComponent({
  name: 'Calendar',
  setup() {
    return () => {
      return (
        <div class="calendar">Calendar</div>
      )
    }
  }
})