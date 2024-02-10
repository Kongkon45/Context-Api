import { useContext } from "react"
import { UsersContext } from "../Context/UsersContext"
export const CustomHook = ()=>{
    return useContext(UsersContext)
} 