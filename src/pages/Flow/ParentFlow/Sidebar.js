import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import logo from '../../../assets/logo.png'
import LogoutButton from "../../../components/LogoutButton";


export default function Sidebar() {
    return (
        <div >
            <div>
                <Helmet>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" />
                </Helmet>
            </div>

            <div>
                <div className=" h-screen bg-blue-400 shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl border border-blue-500">

                    <img src={logo}
                        alt="logo" className="w-10 h-10 mx-auto mb-5 rounded-full border-none" />

                    <ul>
                        <li className="block cursor-pointer p-2 hover:bg-white hover:text-gray-300">
                            <Link to="#">
                                <i className="w-8 fas fa-search p-2 bg-blue-700 rounded-full mx-2"></i>

                            </Link>
                        </li>
                        <li className="block cursor-pointer p-2 hover:bg-white hover:text-gray-300">
                            <Link className="" to="#">
                                <span className="w-8 mb-5 relative">
                                    <i className="w-8 fas fa-file-alt p-2 bg-blue-700 rounded-full mx-2"></i>
                                    <span className="absolute right-0 top-0 -mt-2 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full"></span>
                                </span>

                            </Link>
                        </li>
                        <li className="block cursor-pointer p-2 hover:bg-white hover:text-gray-300">
                            <Link className="" to="#">
                                <i className="w-8 fas fa-paper-plane p-2 bg-blue-700 rounded-full mx-2"></i>

                            </Link>
                        </li>
                        <li className="block cursor-pointer p-2 hover:bg-white hover:text-gray-300">
                            <Link className="" to="#">
                                <i className="w-8 fas fa-search p-2 bg-blue-700 rounded-full mx-2"></i>

                            </Link>
                        </li>
                        <li className="block cursor-pointer p-2 hover:bg-white hover:text-gray-300">
                            <Link className="" to="#">
                                <i className="w-8 fas fa-search p-2 bg-blue-700 rounded-full mx-2"></i>

                            </Link>
                        </li>
                    </ul>
                    <div>
                        <LogoutButton/>
                    </div>

                </div>
            </div>

        </div>
    )
}