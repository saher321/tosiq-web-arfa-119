import { create } from 'zustand'

export const useData = create((set) => ({
  name: "Ali",
  age: 20,
  counter: 1,

  increaseCounter: () => {
    set((state) => (
      { counter: state.counter + 1 }
    ))
  },

  printData: () => {
    alert("Hello from ZUSTAND")
  }
}))
