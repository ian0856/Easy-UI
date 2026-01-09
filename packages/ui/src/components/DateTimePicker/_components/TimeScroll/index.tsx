import { defineComponent } from "vue"

export const TimeScroll = defineComponent({
  name: 'TimeScroll',
  setup() {
    return () => {
      return (
        <div class="time-scroll">TimeScroll</div>
      )
    }
  }
})