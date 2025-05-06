import landingIcon from '../assets/landingpic.svg';

export default function landingSection(){
    return (
        <>
            <div className="bg-orange-900 rounded-b-2xl relative top-5 mt-[60px] flex flex-col items-center py-7 shadow-md w-screen landing-form-container">
            <img src={landingIcon} alt="Landing icon" className="w-3/5 h-3/5 block" />
            <h1 className="text-white font-bold text-3xl mt-7">Trouve ton Ecoride!</h1>
            <h2 className="font-medium text-white text-lg text-center mt-4 mb-2">Inscrit-toi et débloque<br></br> 1000+ trajets éco tout les jours.</h2>
            </div>
        </>
    )
}