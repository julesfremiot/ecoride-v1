import natureIcon from "../assets/natureicon2.svg"
import "../componentscss/benefits.css"

export default function Benefits(){
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <h2 className="text-4xl font-extrabold text-center p-2 text-green-500 mb-4">Pourquoi tu vas adorer Ecoride</h2>
            <div className="text-center p-4 first-section">
                <div className="h-32 w-32 rounded-full benefits-pin-1 inline-block mb-4 shadow-md"></div>
                <h3 className="text-2xl font-bold inline-block"><span className="text-orange-500">Engagés</span><span className="text-gray-800"> envers la </span><span className="text-green-500">nature.</span></h3>
                <p className="mt-5 text-gray-800">Déplace-toi en France en respectant au maximum l'environnement! 89% des voyages Ecoride sont à bord d'un véhicule éléctrique ou hybride. De plus pour chaque voyage, Ecoride reverse une partie des bénéfices auprès d'ONG comme <a href="https://www.wwf.fr/" className="text-orange-500">WWF.</a>
                </p>
            </div>
            <span className=" w-10/12 border-b-[1px] border-gray-200 h-[1px] mt-4 mb-2"></span>
            <div className="text-center p-4 first-section">
            <div className="h-32 w-32 rounded-full benefits-pin-2 inline-block mb-4 shadow-md"></div>
                <h3 className="text-2xl font-bold inline-block"><span className="text-orange-500">Profites</span><span className="text-gray-800"> d'un voyage </span><span className="text-green-500">silencieux.</span></h3>
                <p className="mt-5 text-gray-800">Grâce à notre sélection rigoureuse, nos chauffeurs vous offrent une expérience de voyage écologique, moderne et silencieuse. Terminé les trajets interminables avec un autoradio en panne et des fenêtres à manivelle !</p>
            </div>
            <span className=" w-10/12 border-b-[1px] border-gray-200 h-[1px] mt-4 mb-2"></span>
            <div className="text-center p-4 first-section">
                <div className="h-32 w-32 rounded-full benefits-pin-3 inline-block mb-4 shadow-md"></div>
                <h3 className="text-2xl font-bold inline-block"><span className="text-orange-500">Plus loin</span><span className="text-gray-800"> plus </span><span className="text-green-500">économique.</span></h3>
                <p className="mt-5 text-gray-800">Envie d’aller plus loin ? Profitez de nos trajets longue distance à petit prix, sans compromis sur la sécurité. Voyager loin n’a jamais été aussi simple, sûr et économique.
                </p>
            </div>
        </div>
    )
}