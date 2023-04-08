import React from "react"
import { Outlet } from "react-router-dom"
import AdminHeader from "../pages/Flow/Admin"

export default function Layout() {
    return (
        <div>
            <AdminHeader/>
            <main>
                <Outlet />
            </main>
          
        </div>
    )
}