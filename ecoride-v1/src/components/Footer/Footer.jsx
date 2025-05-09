import appleIcon from "../assets/appstorebtn.svg"
import googleIcon from "../assets/googleplay.png"


export default function Footer(){


    return (
        <section className="bg-gray-900 flex justify-center flex-wrap xl:gap-32 gap-12 px-6 pt-20">
            <div className="w-[200px] text-center">
                <h5 className="text-xl text-green-300 font-semibold mb-4">Utiliser Ecoride</h5>
                <ul>
                    <a href="/"><li className="text-gray-100 leading-loose">Comment l'app fonctionne</li></a>
                    <a href="/"><li className="text-gray-100 leading-loose">Confiance et sécurité</li></a>
                    <a href="/"><li className="text-gray-100 leading-loose">Expérience</li></a>
                    <a href="/"><li className="text-gray-100 leading-loose">Évaluation</li></a>
                    <a href="/"><li className="text-gray-100 leading-loose">Assurance</li></a>
                    <a href="/"><li className="text-gray-100 leading-loose">Abonnement</li></a>
                </ul>
            </div>
            <div className="w-[200px] text-center">
                <h5 className="text-xl text-green-300 font-semibold mb-4">Notre entreprise</h5>
                <ul>
                    <a href="/"><li className="text-gray-100 leading-loose">À propos</li></a>
                    <a href="/"><li className="text-gray-100 leading-loose">Nos actions</li></a>
                    <a href="/"><li className="text-gray-100 leading-loose">Programme volontariat</li></a>
                    <a href="/"><li className="text-gray-100 leading-loose">Presse</li></a>
                    <a href="/"><li className="text-gray-100 leading-loose">Partenaires</li></a>
                    <a href="/"><li className="text-gray-100 leading-loose">Recrutement</li></a>
                    <a href="/"><li className="text-gray-100 leading-loose">Contact</li></a>
                </ul>
            </div>
            <div className="w-[200px] text-center">
                <h5 className="text-xl text-green-300 font-semibold mb-4">Légal</h5>
                <ul>
                    <a href="/"><li className="text-gray-100 leading-loose">Termes et conditions</li></a>
                    <a href="/"><li className="text-gray-100 leading-loose">Confidentialité</li></a>
                    <a href="/"><li className="text-gray-100 leading-loose">Mentions Légales</li></a>
                </ul>
            </div>
            <div className="w-[200px] text-center">
                <h5 className="text-xl text-green-300 font-semibold mb-4">Télécharge notre app</h5>
                <ul>
                    <a href="/"><img src={appleIcon} alt="Apple icon" className="h-16 mx-auto mt-5" /></a>
                    <a href="/"><img src={googleIcon} alt="Google icon" className="h-16 mx-auto mt-5" /></a>
                </ul>
            </div>
            <div className="w-screen pb-8">
                    <div className="flex justify-center gap-5 mt-5">
                        <i class="bi bi-facebook text-white text-2xl"></i>
                        <i class="bi bi-instagram text-white text-2xl"></i>
                        <i class="bi bi-twitter text-white text-2xl"></i>
                        <i class="bi bi-linkedin text-white text-2xl"></i>
                    </div>
                </div>
        </section>
    )

}