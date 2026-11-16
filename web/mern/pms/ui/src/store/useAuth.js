import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useAuth = create(
    persist(
        (set) => ({
            loggedInUser: null,
            token: null,
            isAuthenticated: false,

            login: (loggedInUser, token) => {
                set({
                    loggedInUser,
                    token,
                    isAuthenticated: true
                })
            },
            logout: () => {
                set({
                    loggedInUser: null,
                    token: null,
                    isAuthenticated: false,
                })
            }
        }), 
    {
        name: "pms-auth0",
        storage: createJSONStorage(() => localStorage)
    })
)

