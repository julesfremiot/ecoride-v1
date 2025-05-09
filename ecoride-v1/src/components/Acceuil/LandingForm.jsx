import "../componentscss/landingform.css"
import { useState } from "react"

export default function LandingForm(){
    const [activeDate, setDate] = useState("");
    const [passengerNumber, setPassenger] = useState("");

    return (
        <>
            <div className="bg-green-700 pb-10 w-screen rounded-b-2xl shadow-md flex flex-col items-center justify-center">
                <p className="text-white text-center font-bold text-3xl mt-12">Où vas-tu?</p>
            <form className="w-11/12 bg-white rounded shadow-lg mt-4 p-8 flex flex-col">
                <label htmlFor="ville-depart" className="text-gray-900 opacity-50 text-md mb-3">De:</label>
                <input type="select" className="bg-green-100 rounded-full ps-6 py-2 !outline-none border-none form-input" placeholder="Paris" id="ville-depart"></input>
                <label htmlFor="ville-arrivee" className="text-gray-900 opacity-50 text-md mb-3 mt-4">À:</label>
                <input type="select" className="bg-green-100 rounded-full ps-6 py-2 !outline-none form-input border-none" placeholder="Bordeaux" id="ville-arrivee"></input>
                <div className="mt-5">
                    <p className="text-gray-700 text-lg">Date:</p>
                    <ul className="mt-3">
                        <li className={activeDate === "today" ? "inline mr-3 text-green-500 font-medium" : "inline mr-3 text-gray-400"} onClick={() => {setDate("today")}}>Aujourd'hui</li>
                        <li className={activeDate === "tomorrow" ? "inline mr-3 text-green-500 font-medium" : "inline mr-3 text-gray-400"} onClick={() => {setDate("tomorrow")}}>Demain</li>
                        <li className=
                        {activeDate === "other-date" ? "inline text-green-500 font-medium" : "inline text-gray-400"} 
                        onClick={() => {setDate("other-date")}}>Autre <i 
                        className={activeDate === "other-date" ? "bi bi-calendar-check-fill text-green-500 text-center ms-2" 
                        : "bi bi-calendar-check-fill text-gray-400 text-center ms-2"}>
                        </i></li>
                    </ul>
                </div>
                <div className="mt-5">
                    <h4 className="text-gray-700 text-lg">Passagers:</h4>
                    <div className="flex items-center justify-start mt-4 mb-3">
                        <button type="button" onClick={() => {setPassenger("1")}}
                        className={passengerNumber === "1" ? "rounded-full bg-green-400 h-10 w-10 mr-3" 
                        : "rounded-full bg-transparent border-[1px] border-gray-400 text-gray-400 h-10 w-10 mr-3"}>1</button>
                        <button type="button" onClick={() => {setPassenger("2")}}
                        className={passengerNumber === "2" ? "rounded-full bg-green-400 h-10 w-10 mr-3" 
                            : "rounded-full bg-transparent border-[1px] border-gray-400 text-gray-400 h-10 w-10 mr-3"}>2</button>
                        <button type="button" onClick={() => {setPassenger("3")}}
                        className={passengerNumber === "3" ? "rounded-full bg-green-400 h-10 w-10 mr-3" 
                            : "rounded-full bg-transparent border-[1px] border-gray-400 text-gray-400 h-10 w-10 mr-3"}>3</button>
                        <button type="button" onClick={() => {setPassenger("4")}}
                        className={passengerNumber === "4" ? "rounded-full bg-green-400 h-10 w-10 mr-3" 
                            : "rounded-full bg-transparent border-[1px] border-gray-400 text-gray-400 h-10 w-10 mr-3"}>4</button>
                    </div>
                </div>
                <div className="mt-5 flex justify-center items-center">
                <input type="checkbox" className="outline-none rounded text-green-400 mr-3" value=""/>
                <label htmlFor="ville-départ" className="text-gray-600">Ecoride uniquement</label>
                </div>
                <button type="button" className="rounded-full mt-5 py-2 text-white bg-green-500 hover:bg-green-800">Rechercher</button>
            </form>
            </div>
        </>
    )
}