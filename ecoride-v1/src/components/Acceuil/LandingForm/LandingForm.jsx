import "../../../components/componentscss/landingform.css"
import landingIcon from '../../assets/landingpic.svg';
export default function LandingForm(){
    return (
        <div className="bg-orange-400 rounded-b-2xl mt-20 flex flex-col items-center py-7">
        <img src={landingIcon} alt="Landing icon" className="w-2/4 h-2/4 block" />
        <p className="font-semibold text-white text-2xl mt-7">Trouve ton Ecoride!</p>
        <p className="font-medium text-white text-lg text-center mt-4 mb-2">Inscrit-toi et débloque<br></br> 1000+ trajets éco tout les jours.</p>
        </div>
    )
}