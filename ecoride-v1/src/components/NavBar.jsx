export default function NavBar(){

    return (
        <nav className="h-20 w-screen fixed top-0 shadow-lg flex items-center justify-between px-20">
            <div className="menu-wrapper">
                <div className="logo inline mr-20">Logo</div>
                <ul className="inline">
                <li className="inline-block mr-7 p-2 text-skyBlue hover:text-oceanBlue font-semibold">Acceuil</li>
                    <li className="inline-block mr-7 p-2 text-skyBlue hover:text-oceanBlue font-semibold">Covoiturages</li>
                    <li className="inline-block mr-7 p-2 text-skyBlue hover:text-oceanBlue font-semibold">Contact</li>
                </ul>
            </div>
            <div className="action-wrapper">
                <span className="text-skyBlue font-semibold hover:text-oceanBlue mr-10">
                <i className="text-2xl bi bi-search text-skyBlue mr-4"></i>
                Rechercher
                </span>
                <span className="text-skyBlue font-semibold hover:text-oceanBlue mr-10">
                <i className="text-2xl bi bi-plus-circle-fill text-skyBlue mr-4"></i>
                Ajouter un trajet
                </span>
                <span className="text-skyBlue font-semibold hover:text-oceanBlue">
                <i className="text-4xl bi bi-person-fill text-skyBlue mr-4"></i>
                </span>
            </div>
        </nav>
    )
}