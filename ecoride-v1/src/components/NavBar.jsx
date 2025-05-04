import { useState } from "react"
import "../componentscss/navbar.css";

export default function NavBar(){

    const [mobileMenu, openMenu] = useState(false);

    return (
        <>
        <nav className="h-20 w-screen fixed top-0 shadow-lg flex items-center justify-between lg:px-20 md:px-5 bg-white">
            <div className="flex px-10 w-screen items-center justify-between md:hidden">
                <div>
                <span>Logo</span>
                </div>
                <i onClick={() => {openMenu(prevState => !prevState)}} className={mobileMenu ? "bi bi-list  text-skyBlue font-bold text-3xl rounded px-1 block" : "bi bi-x text-skyBlue font-bold text-4xl rounded px-1 block"}></i>

            </div>
            <div className="menu-wrapper hidden md:block">
                <div className="logo inline lg:mr-20 md:mr-5">Logo</div>
                <ul className="inline">
                <li className="inline-block mr-7 p-2 text-skyBlue hover:text-indigo-800 font-semibold">Acceuil</li>
                    <li className="inline-block mr-7 p-2 text-skyBlue hover:text-indigo-800 font-semibold">Covoiturages</li>
                    <li className="inline-block mr-7 p-2 text-skyBlue hover:text-indigo-800 font-semibold">Contact</li>
                </ul>
            </div>
            <div className="action-wrapper hidden md:flex items-center justify-evenly">
                <span className="font-semibold md:mr-3 lg:mr-10 group">
                <i className="text-2xl bi bi-search text-skyBlue md:mr-2 lg:mr-4 group-hover:text-indigo-800"></i>
                <span className="text-skyBlue group-hover:text-indigo-800">Rechercher</span>
                </span>
                <span className="font-semibold md:mr-3 lg:mr-10 group">
                <i className="text-2xl bi bi-plus-circle-fill text-skyBlue md:mr-2 lg:mr-4 group-hover:text-indigo-800"></i>
                <span className="text-skyBlue group-hover:text-indigo-800">Ajouter un trajet</span>
                </span>
                <span className=" font-semibold group">
                <i className="text-4xl bi bi-person-fill text-skyBlue md:mr-2 lg:mr-4 group-hover:text-indigo-800"></i>
                <i className="bi bi-chevron-up group-hover:text-indigo-800 text-skyBlue text-xl"></i>
                </span>
            </div>
        </nav>
        <div>
            <div className={!mobileMenu ? "fixed top-20 max-h-[500px] w-screen md:hidden transition-all duration-700 overflow-hidden origin-top ease-in-out" : "z-30 fixed top-20 max-h-0 w-screen md:hidden transition-all duration-700 overflow-hidden origin-top ease-in-out"}>
                <ul className="w-screen text-center">
                    <li className="bg-white pt-4 pb-3 font-medium text-skyBlue border-b-2">Acceuil</li>
                    <li className="bg-white pt-4 pb-3 font-medium text-skyBlue border-b-2">Covoiturages</li>
                    <li className="bg-white pt-4 pb-3 font-medium text-skyBlue border-b-2">Contact</li>
                    <li className="bg-skyBlue p-4 font-medium text-white border-b-2 hover:bg-indigo-800">
                        <i className="bi bi-search text-white text-xl mr-3"></i>
                        Rechercher
                    </li>
                    <li className="bg-skyBlue p-4 font-medium text-white border-b-2 hover:bg-indigo-800">
                        <i className="bi bi-plus-circle-fill text-white text-xl mr-3"></i>
                        Ajouter un trajet
                    </li>
                    <li className="bg-skyBlue p-4 font-medium text-white border-b-2 hover:bg-indigo-800">
                        <i className="bi bi-person-fill text-white text-xl mr-3"></i>
                        Connexion
                    </li>
                </ul>
            </div> 
        </div>
        <div className="w-screen bg-slate-600 mt-20">test</div>
    </>
    )
}