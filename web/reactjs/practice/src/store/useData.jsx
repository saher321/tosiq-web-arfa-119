import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const useData = create(
    persist(
        (set, get) => ({
        APP_NAME: "Practice app",  

        greetings: () => {
            console.log("Hello from ZUSTAND")
        },
        saveInfo: (data) => {
            set({
                data
            })
        },
        showData: () => {
            get({
                
            })
        }
    }), {
        name: "practice-app",
        storage: createJSONStorage(() => localStorage)
    }
    )
)

export default useData