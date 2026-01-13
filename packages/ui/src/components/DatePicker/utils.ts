import dayjs from "dayjs";
import { ComputedRef, Ref, computed, ref } from "vue";

export function useBaseInfo(year?:number, month?: number){
  const defaultYear = ref(year ?? dayjs().year());
  const defaultMonth = ref(month ?? dayjs().month() + 1);

  const lastYear = (callback: () => void) => {
    defaultYear.value = defaultYear.value - 1;
    callback();
  }
  const nextYear = (callback: () => void) => {
    defaultYear.value = defaultYear.value + 1;
    callback();
  }

  const lastMonth = (callback: () => void) => {
    if(defaultMonth.value === 1) {
      defaultYear.value = defaultYear.value - 1;
      defaultMonth.value = 12;
      return
    }
    defaultMonth.value = defaultMonth.value - 1;
    callback();
  }
  const nextMonth = (callback: () => void) => {
    if(defaultMonth.value === 12) {
      defaultYear.value = defaultYear.value + 1;
      defaultMonth.value = 1;
      return
    } 
    defaultMonth.value = defaultMonth.value + 1;
    callback();
  }
  return {
    defaultMonth,
    lastMonth,
    nextMonth,
    defaultYear,
    lastYear,
    nextYear,
  }
}

export function useCalendarArray(
  year: Ref<number>,
  month: Ref<number>,
) {
  const array = computed(() => {
    const result = new Array(6).fill(0).map(() => new Array(7).fill(0).map(() => ({ day: 0, type: 'current' as 'prev' | 'current' | 'next' })))
    // 本月第一日是星期几
    const firstDay = dayjs(`${year.value}-${month.value}-01`).day()
    // 本月天数
    const days = dayjs(`${year.value}-${month.value}-01`).endOf('month').date()
    
    // 填充数组 从array[0][firstDay]开始填充
    for(let i = 0; i < days; i++) {
      const row = Math.floor((firstDay + i) / 7);
      const col = (firstDay + i) % 7;
      result[row][col] = { day: i + 1, type: 'current' };
    }

    // 补全数组 -- 0 -> 上月的日期
    for(let i = 0; i < firstDay; i++) {
      const prevMonthDays = dayjs(`${year.value}-${month.value}-01`).subtract(1, 'month').endOf('month').date();
      result[0][firstDay - i - 1] = { 
        day: prevMonthDays - i, 
        type: 'prev' 
      };
    }
    
    // 补全数组 -- 0 -> 下月的日期
    for(let i = firstDay + days; i < 42; i++) {
      result[Math.floor(i / 7)][i % 7] = { 
        day: i - firstDay - days + 1, 
        type: 'next' 
      };
    }

    return result
  })
  return {
    array
  }
}