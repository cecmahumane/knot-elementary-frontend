import React from "react"
// import { Link, useParams } from "react-router-dom"

export default function Admin() {
    return (
        <nav className="bg-blue-500 flex justify-between items-center pl-10 pr-10 text-white text-xl h-20 ">
            <div className="ml-20">
                <button className="px-4 py-3 m-4 border-2 text-black rounded-full bg-white hover:bg-gray-200">Teachers</button>
                <button className="px-4 py-3 m-4 border-2 text-black rounded-full bg-white hover:bg-gray-200">Parents</button>
            </div>
            <div class="bg-blue-700 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white">VG</div>
        </nav>
    )
}