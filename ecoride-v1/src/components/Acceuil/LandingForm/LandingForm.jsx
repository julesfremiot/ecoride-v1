import "../../../components/componentscss/landingform.css"
import landingIcon from '../../assets/landingpic.svg';
import arrowIcon from '../../assets/arrowicon.svg';

export default function LandingForm(){
    return (
        <>
            <div className="bg-orange-900 rounded-b-2xl relative top-5 mt-[60px] flex flex-col items-center py-7 shadow-md w-screen landing-form-container">
            <img src={landingIcon} alt="Landing icon" className="w-3/5 h-3/5 block" />
            <h1 className="font-semibold text-white text-3xl mt-7">Trouve ton Ecoride!</h1>
            <h2 className="font-medium text-white text-lg text-center mt-4 mb-2">Inscrit-toi et débloque<br></br> 1000+ trajets éco tout les jours.</h2>
            </div>
            <div className="bg-green-400 pb-6 w-screen rounded-b-2xl shadow-md flex flex-col items-center justify-center">
                <h3 className="text-white text-center font-medium text-3xl mt-12">Où vas-tu?</h3>
            <form className="w-10/12 bg-white rounded shadow-lg mt-4 p-8 flex flex-col">
                <label htmlFor="ville-départ" className="text-gray-900 opacity-50 text-md mb-3">De:</label>
                <input type="select" className="bg-green-100 rounded-full ps-6 py-2 !outline-none border-none form-input" placeholder="Paris"></input>
                <label htmlFor="ville-départ" className="text-gray-900 opacity-50 text-md mb-3 mt-4">À:</label>
                <input type="select" className="bg-green-100 rounded-full ps-6 py-2 !outline-none form-input border-none" placeholder="Bordeaux"></input>
                <div className="mt-5">
                    <h4 className="text-gray-700 text-lg">Date:</h4>
                    <ul className="mt-3">
                        <li className="inline text-green-400 font-medium mr-3">Aujourd'hui</li>
                        <li className="inline mr-3 text-gray-400">Demain</li>
                        <li className="inline text-gray-400">Autre <i className="bi bi-calendar-check-fill text-gray-400 text-center ms-2"></i></li>
                    </ul>
                </div>
                <div className="mt-5">
                    <h4 className="text-gray-700 text-lg">Passagers:</h4>
                    <div className="flex items-center justify-start mt-4 mb-3">
                        <button className="rounded-full bg-green-400 h-10 w-10 mr-3">1</button>
                        <button className="rounded-full bg-transparent border-[1px] border-gray-400 text-gray-400 h-10 w-10 mr-3">2</button>
                        <button className="rounded-full bg-transparent border-[1px] border-gray-400 text-gray-400 h-10 w-10 mr-3">3</button>
                        <button className="rounded-full bg-transparent border-[1px] border-gray-400 text-gray-400 h-10 w-10 mr-3">4</button>
                    </div>
                </div>
                <div className="mt-5 flex justify-center items-center">
                <input type="checkbox" className="outline-none rounded text-green-400 mr-3" value=""/>
                <label htmlFor="ville-départ" className="text-gray-600">Ecoride uniquement</label>
                </div>
                <button type="submit" className="rounded-full mt-5 py-2 text-white bg-green-400">Rechercher</button>
            </form>
            </div>
        </>
    )
}