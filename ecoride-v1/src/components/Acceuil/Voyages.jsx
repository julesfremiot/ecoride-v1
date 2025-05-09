import voyageIcon from "../assets/linevoyages.svg"

export default function Voyages(){

    return (
        <>
            <div className="w-screen pt-10 bg-green-950 z-0 flex flex-col gap-4 items-center pb-8 rounded-b-2xl shadow-md relative top-5">
                <h3 className="text-4xl font-extrabold p-4 text-green-400 mb-4 mt-4 text-center">Des milliers de voyages tout les jours.</h3>
                <p className="text-gray-100 text-center font-sm">Où vas-tu aujourd'hui?</p>
                <div className="bg-white flex rounded w-10/12 py-4 shadow-md mt-6">
                    <div className="flex pl-4">
                    <img src={voyageIcon} alt="Landing icon" className="h-16 mr-3" />
                        <div className="flex flex-col justify-between w-16">
                            <p className="leading-none text-gray-500">Paris</p>
                            <p className="leading-none text-gray-500">Bordeaux</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-start ml-10 w-20">
                        <p className="leading-none text-gray-500">À partir de:</p>
                        <p 
                        className="hover:translate-x-6 transform transition duration-300 ease-in-out text-2xl leading-none font-bold text-green-500 h-6 hover:text-green-700">
                        8€<i 
                        className="bi bi-arrow-right text-xl ml-4"></i></p>
                    </div>
                </div>
                <div className="bg-white flex rounded w-10/12 py-4 shadow-md mt-6">
                    <div className="flex pl-4">
                    <img src={voyageIcon} alt="Landing icon" className="h-16 mr-3" />
                        <div className="flex flex-col justify-between w-16">
                            <p className="leading-none text-gray-500">Lille</p>
                            <p className="leading-none text-gray-500">Rouen</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-start ml-10 w-20">
                        <p className="leading-none text-gray-500">À partir de:</p>
                        <p 
                        className="hover:translate-x-6 transform transition duration-300 ease-in-out text-2xl leading-none font-bold text-green-500 h-6 hover:text-green-700">
                        12€<i 
                        className="bi bi-arrow-right text-xl ml-4"></i></p>
                    </div>
                </div>
                <div className="bg-white flex rounded w-10/12 py-4 shadow-md mt-6">
                    <div className="flex pl-4">
                    <img src={voyageIcon} alt="Landing icon" className="h-16 mr-3" />
                        <div className="flex flex-col justify-between w-16">
                            <p className="leading-none text-gray-500">Marseille</p>
                            <p className="leading-none text-gray-500">Nice</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-start ml-10 w-20">
                        <p className="leading-none text-gray-500">À partir de:</p>
                        <p className="hover:translate-x-6 transform transition duration-300 ease-in-out text-2xl leading-none font-bold text-green-500 h-6 hover:text-green-700">16€<i className="bi bi-arrow-right text-xl ml-4"></i></p>
                    </div>
                </div>
                <div className="bg-white flex rounded w-10/12 py-4 shadow-md mt-6">
                    <div className="flex pl-4">
                    <img src={voyageIcon} alt="Landing icon" className="h-16 mr-3" />
                        <div className="flex flex-col justify-between w-16">
                            <p className="leading-none text-gray-500">Reims</p>
                            <p className="leading-none text-gray-500">Nantes</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-start ml-10 w-20">
                        <p className="leading-none text-gray-500">À partir de:</p>
                        <p className="hover:translate-x-6 transform transition duration-300 ease-in-out text-2xl leading-none font-bold text-green-500 h-6 hover:text-green-700">10€<i className="bi bi-arrow-right text-xl ml-4"></i></p>
                    </div>
                </div>
                <button type="button" className="text-sm bg-orange-600 hover:bg-orange-800 font-semibold shadow-md rounded text-white p-3 mt-6">Découvre nos itinéraires populaires</button>
            </div>
        </>
    )

}