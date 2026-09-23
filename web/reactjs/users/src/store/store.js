import { create } from 'zustand'

export const useData = create((set) => ({
  name: "Ali",
  age: 20,

  printData: () => {
    alert("Hello from ZUSTAND")
  }
}))
