import "../../../components/componentscss/landingform.css"
export default function LandingForm(){
    return (
        <div className=" bg-skyBlue flex flex-col align-center p-5 mt-20 form-container w-100 rounded-b">
            <div className="bg-skyBlue w-100 rounded-t-md text-center text-white font-medium p-2">Book ton Ecoride!</div>
            <form className="w-100 bg-white align-center flex flex-col justify-center rounded-b-md p-3 shadow-md">
                <input type="text" placeholder="Ville de départ" id="ville-départ" className="p-2 border-b-2  outline-skyBlue"></input>
                <input type="text" placeholder="Ville d'arrivée" id="ville-arrivée" className="p-2 border-b-2 outline-skyBlue mt-2"></input>
                <label htmlFor="date-départ" className="text-gray-400 mt-4 ml-1 text-xs">Date de départ</label>
                <input type="date" className="p-2 border-b-2 outline-skyBlue mt-2 text-gray-400" id="date-départ"></input>
                <button type="submit" className="p-2 bg-skyBlue rounded text-white mt-5 hover:bg-indigo-800">
                <i className="text-center text-lg bi bi-search mr-3 text-white"></i>
                    Rechercher</button>
            </form>
        </div>
    )
}