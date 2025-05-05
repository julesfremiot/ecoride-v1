export default function MobileMenu({mobileMenu}){
    return (
        <div className={!mobileMenu ? "bg-white fixed top-0 w-screen min-h-[700px] overflow-auto transform transition-[min-height] duration-600 ease-in-out origin-top md-hidden block" : "bg-white fixed top-0 w-screen min-h-0 max-h-0 transform transition-[min-height] duration-600 ease-in-out origin-top overflow-auto md-hidden block"}>
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
    )
}