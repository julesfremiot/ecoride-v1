import { useState } from "react"

export default function NavBar(){

    const [mobileMenu, openMenu] = useState(false);

    return (
        <>
        <nav className="h-20 w-screen fixed top-0 shadow-lg flex items-center justify-between lg:px-20 md:px-5">
            <div className="flex px-10 w-screen items-center justify-between md:hidden">
                <div>
                <span>Logo</span>
                </div>
                <i onClick={() => {openMenu(prevState => !prevState)}} className={mobileMenu ? "bi bi-list  text-skyBlue font-bold text-3xl rounded px-1 block" : "bi bi-x text-skyBlue font-bold text-4xl rounded px-1 block"}></i>

            </div>
            <div className="menu-wrapper hidden md:block">
                <div className="logo inline lg:mr-20 md:mr-5">Logo</div>
                <ul className="inline">
                <li className="inline-block mr-7 p-2 text-skyBlue hover:text-oceanBlue font-semibold">Acceuil</li>
                    <li className="inline-block mr-7 p-2 text-skyBlue hover:text-oceanBlue font-semibold">Covoiturages</li>
                    <li className="inline-block mr-7 p-2 text-skyBlue hover:text-oceanBlue font-semibold">Contact</li>
                </ul>
            </div>
            <div className="action-wrapper hidden md:flex items-center justify-evenly">
                <span className="text-skyBlue font-semibold hover:text-oceanBlue md:mr-3 lg:mr-10">
                <i className="text-2xl bi bi-search text-skyBlue md:mr-2 lg:mr-4"></i>
                Rechercher
                </span>
                <span className="text-skyBlue font-semibold hover:text-oceanBlue md:mr-3 lg:mr-10">
                <i className="text-2xl bi bi-plus-circle-fill text-skyBlue md: mr-2 lg:mr-4"></i>
                Ajouter un trajet
                </span>
                <span className="text-skyBlue xs:block font-semibold hover:text-oceanBlue">
                <i className="text-4xl bi bi-person-fill text-skyBlue md:mr-2 lg:mr-4"></i>
                </span>
            </div>
        </nav>
        <div>
         {!mobileMenu? 
            <div className="w-screen mt-20 md:hidden">
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
                        Ajouter trajet
                    </li>
                    <li className="bg-skyBlue p-4 font-medium text-white border-b-2 hover:bg-indigo-800">
                        <i className="bi bi-person-fill text-white text-xl mr-3"></i>
                        Connexion
                    </li>
                </ul>
            </div> 
            : <></>}
        </div>
    </>
    )
}