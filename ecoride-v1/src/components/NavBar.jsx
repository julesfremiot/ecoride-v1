import { useState } from "react"
import "../componentscss/navbar.css";

export default function NavBar(){

    const [mobileMenu, openMenu] = useState(false);

    return (
        <>
    <nav className="z-20 h-20 w-screen fixed top-0 shadow-lg flex items-center justify-between xl:px-20 lg:px-10 md:px-5 bg-white ">
        <div className="flex px-10 w-screen items-center justify-between md:hidden">
            <div>
                <span>Logo</span>
            </div>
            <i onClick={() => { openMenu(prevState => !prevState); }} className={mobileMenu ? "bi bi-list text-skyBlue font-bold text-3xl rounded px-1 block" : "bi bi-x text-skyBlue font-bold text-4xl rounded px-1 block"}></i>
        </div>
        <div className="menu-wrapper hidden md:block">
            <div className="logo inline xl:mr-20 lg:mr-10 md:mr-5">Logo</div>
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
    <div className={!mobileMenu ? "bg-white fixed top-0 w-screen min-h-[400px] overflow-auto transform transition-[min-height] duration-600 ease-in-out origin-top" : "bg-white fixed top-0 w-screen min-h-0 max-h-0 transform transition-[min-height] duration-300 ease-in-out origin-top overflow-auto"}>
        <ul className="mt-20 text-center px-5">
                    <li className="text-skyBlue font-semibold border-b-2 pt-4 pb-2"><a href="/">Acceuil</a></li>
                    <li className="text-skyBlue font-semibold border-b-2 p-2"><a href="/">Covoiturages</a></li>
                    <li className="text-skyBlue font-semibold border-b-2 p-2"><a href="/">Contact</a></li>
                    <li className="text-skyBlue font-semibold border-b-2 p-2"><a href="/">
                    <i className="text-lg mr-2 bi bi-search text-skyBlue"></i>
                    <span className="text-skyBlue">Rechercher</span>
                    </a></li>
                    <li className="text-skyBlue font-semibold border-b-2 p-2"><a href="/">
                    <i className="text-lg mr-2 bi bi-plus-circle-fill text-skyBlue"></i>
                    <span className="text-skyBlue">Ajouter un trajet</span>
                    </a></li>
                    <li className="text-skyBlue font-semibold border-b-2 p-2"><a href="/">
                    <i className="text-lg mr-2 bi bi-person-fill text-skyBlue"></i>
                    <span className="text-skyBlue">Connexion</span>
                    </a></li>
        </ul>
    </div>
    <div className="bg-black h-20 mt-20">test</div>
</>

    )
}