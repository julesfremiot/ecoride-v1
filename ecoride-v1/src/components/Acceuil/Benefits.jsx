import natureIcon from "../assets/natureicon2.svg"
import "../componentscss/benefits.css"

export default function Benefits(){
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="text-center p-4 first-section">
                <div className="flex items-center">
                <div className="h-24 w-24 shadow-md rounded-full benefits-pin-1 inline-block"></div>
                <h3 className="text-2xl font-bold inline-block"><span className="text-orange-500">Engagés</span><span className="text-gray-800"> envers la </span><span className="text-green-500">nature.</span></h3>
                </div>
                <p className="mt-5 text-gray-800">Déplace-toi en France en respectant au maximum l'environnement! Ecoride tente d'offrir le maximum de voyages éco-friendly. De plus pour chaque voyage, Ecoride reverse une partie des bénéfices auprès d'ONG comme <a href="https://www.wwf.fr/" className="text-orange-500">WWF.</a>
                </p>
            </div>
        </div>
    )
}