export default function MobileMenu({mobileMenu}){
    return (
        <div className={!mobileMenu ? "bg-white fixed top-0 w-screen min-h-[800px] overflow-auto transform transition-[min-height] duration-600 ease-in-out origin-top md-hidden block z-10" : "bg-white fixed top-0 w-screen min-h-0 max-h-0 transform transition-[min-height] duration-600 ease-in-out origin-top overflow-auto md-hidden block z-10"}>
        <ul className="mt-20 w-screen">
                    <li className="text-orange-800 hover:border-l-4 hover:border-orange-800 hover:bg-orange-100 font-medium pt-4 pb-4 w-100 px-4"><a href="/">Acceuil</a></li>
                    <li className="text-gray-500 hover:border-l-4 hover:border-gray-500 hover:bg-gray-100 font-medium pt-4 pb-4 w-100 px-4"><a href="/">Covoiturages</a></li>
                    <li className="text-gray-500 hover:border-l-4 hover:border-gray-500 hover:bg-gray-100 font-medium pt-4 pb-4 w-100 px-4"><a href="/">Contact</a></li>
                    <li className="text-gray-500 hover:border-l-4 hover:border-gray-500 hover:bg-gray-100 font-medium pt-4 pb-4 w-100 px-4"><a href="/">
                    <span className="text-gray-500">Rechercher</span>
                    <i className="text-lg bi bi-search text-gray-500 pt-4 pb-4 w-100 px-4"></i>
                    </a></li>
                    <li className="text-gray-500 hover:border-l-4 hover:border-gray-500 hover:bg-gray-100 font-medium pt-4 pb-4 w-100 px-4"><a href="/">
                    <span className="text-gray-500 mr-2">Ajouter un trajet</span>
                    <i className="text-lgbi bi-plus-circle-fill text-gray-500"></i>
                    </a></li>
                    <li className="text-gray-500 hover:border-l-4 hover:border-gray-500 hover:bg-gray-100 font-medium pt-4 pb-4 w-100 px-4"><a href="/">
                    <span className="text-gray-500 mr-2">Connexion</span>
                    <i className="text-lg mr-2 bi bi-person-fill text-gray-500"></i>
                    </a></li>
        </ul>
    </div>
    )
}