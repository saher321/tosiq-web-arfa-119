import React from 'react'
import { APP_NAME_UC } from '../utils/common'
import { BriefcaseBusiness, ListTodo, LogOut, Users, UsersRound } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router'
import toast from 'react-hot-toast'
const RoleBasedLayout = ({children}) => {

    const navigate = useNavigate()

    const links = [
        { url: "/customers", text: "Customers", icon: Users},
        { url: "/projects", text: "Projects", icon: BriefcaseBusiness},
        { url: "/employees", text: "Employees", icon: UsersRound},
        { url: "/tasks", text: "Tasks", icon: ListTodo},
    ]

    const handleLogout = async () => {
        toast.success("Account has been loggedout")
        navigate("/auth/login", {replace: true})
    }
    
    return (
        <div className='max-w-6xl mx-auto my-5'>
            <div className='flex items-center justify-between'>
                <div className="p-3 rounded-full shadow text-teal-800 italic font-bold">{APP_NAME_UC}</div>
                <div className="p-3 rounded-full shadow">
                    <nav className="flex gap-5">
                        {
                            links.map((link, i) => {
                                const Icon = link.icon
                                return (
                                    <NavLink key={i}
                                    className="flex items-center gap-2 hover:bg-teal-800 p-2 rounded-full hover:text-white"
                                    >
                                        <Icon size={20}/>
                                        <span>
                                            {link.text}
                                        </span>
                                    </NavLink>
                                )
                            })
                        }
                    </nav>
                </div>
                <div className="p-3 rounded-full shadow">
                    <button onClick={handleLogout} className='bg-white shadow hover:bg-red-600 hover:text-white rounded-full p-2 '>
                        <LogOut size={16} />
                    </button>
                </div>
            </div>
            <main className="my-5">
                {children}
            </main>
        </div>
    )
}

export default RoleBasedLayout
