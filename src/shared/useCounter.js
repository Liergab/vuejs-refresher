import { ref } from 'vue'

export const useCounter = (intialState = 0) => {
  const counter = ref(intialState)

  const increment = () => counter.value++

  return { counter, increment }
}
