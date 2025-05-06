import { useState } from "react"
import "../componentscss/navbar.css";
import MobileMenu from "./MobileMenu"
import carIcon from "../assets/carfront.svg"

export default function NavBar(){

    const [mobileMenu, openMenu] = useState(true);

    return (
        <>
    <nav className="z-20 h-20 w-screen fixed top-0 shadow-lg flex items-center justify-between xl:px-20 lg:px-10 md:px-5 bg-white ">
        <div className="flex px-10 w-screen items-center justify-between md:hidden">
            <div>
            <span className="text-xl text-green-700 font-bold">Eco<span className="text-orange-700">ride</span></span>
            </div>
            <i onClick={() => { openMenu(prevState => !prevState); }} className={mobileMenu ? "bi bi-list text-green-500 font-bold text-3xl rounded px-1 block" : "bi bi-x text-green-500 font-bold text-4xl rounded px-1 block"}></i>
        </div>
        <div className="menu-wrapper hidden md:block">
            <div className="logo inline xl:mr-20 lg:mr-10 md:mr-5">Ecoride</div>
            <ul className="inline">
                <li className="inline-block xl:mr-16 lg:mr-7 md:mr-4 text-skyBlue hover:text-indigo-800 font-semibold"><a href="/">Acceuil</a></li>
                <li className="inline-block xl:mr-16 lg:mr-7 md:mr-4 text-skyBlue hover:text-indigo-800 font-semibold"><a href="/">Covoiturages</a></li>
                <li className="inline-block lg:mr-7 md:mr-4 text-skyBlue hover:text-indigo-800 font-semibold"><a href="/">Contact</a></li>
            </ul>
        </div>
        <div className="action-wrapper hidden md:flex items-center justify-evenly">
            <a href="/">
                <span className="font-semibold md:mr-3 lg:mr-10 group">
                    <i className="text-2xl bi bi-search text-skyBlue md:mr-2 lg:mr-4 group-hover:text-indigo-800"></i>
                    <span className="text-skyBlue group-hover:text-indigo-800">Rechercher</span>
                </span>
            </a>
            <a href="/">
                <span className="font-semibold md:mr-3 lg:mr-10 group">
                    <i className="text-2xl bi bi-plus-circle-fill text-skyBlue md:mr-2 lg:mr-4 group-hover:text-indigo-800"></i>
                    <span className="text-skyBlue group-hover:text-indigo-800">Ajouter un trajet</span>
                </span>
            </a>
            <a>
                <span className="font-semibold group">
                    <i className="text-4xl bi bi-person-fill text-skyBlue md:mr-2 lg:mr-4 group-hover:text-indigo-800"></i>
                    <i className="bi bi-chevron-up text-skyBlue text-xl relative transform rotate-45"></i>
                </span>
            </a>
        </div>
    </nav>
    <MobileMenu mobileMenu={mobileMenu}/>
</>

    )
}