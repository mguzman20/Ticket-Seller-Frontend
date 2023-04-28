import {useEffect, useState} from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { PageController } from "./PageController"
import classNames from "classnames"

export const EventDetail = ({ number, page, count, event }) => {
    const [displayDetails, setDisplayDetails] = useState(false)

    return (
        <div className="mb-2 shadow-lg rounded-lg flex-col">
            <div
                className={classNames(
                    "text-sm text-white bg-gray-700 px-4 py-2  border-b border-gray-800 flex hover:bg-gray-800",
                    "cursor-pointer",
                    displayDetails ? "rounded-t-lg" : "rounded-lg"
                )}
                onClick={() => {setDisplayDetails(!displayDetails)}}
                aria-hidden
            >
                <div className="flex w-[99%]">
                    <p>{number + (page - 1) * count + 1}. {event.name}</p>
                </div>
                <div className="flex" >
                    <ChevronDownIcon className={classNames("w-6 h-5 transition", displayDetails ? "rotate-180" : "")}/>
                </div>
            </div>
            <div className={classNames(
                "text-xs bg-gray-300 px-4 py-2 rounded-b-lg font-mono",
                displayDetails ? "flex-col" : "hidden"
            )}>
                <div>Fecha.......{event.date}</div>
                <div>Precio......${event.price}</div>
                <div>Cantidad....{event.quantity}</div>
                <div>Lugar.......{event.location}</div>
                <div>Latitud.....{event.latitude}</div>
                <div>Longuitud...{event.longitude}</div>
            </div>
        </div>
    )
}

export const EventList = () => {
    const [events, setEvents] = useState([])
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(25)

    useEffect(() => {
        fetch(`https://www.arquie0.me/events/?page=${page}&count=${count}`, { method: "GET", })
        .then(response => response.json())
        .then(data => {setEvents(data)})
    }, [page, count])

    return (
        <div className="mx-8 my-4 p-4 flex-row">
            <div className="text-xl py-1 mb-4 flex justify-center border-b-2 border-gray-800">
                LISTA DE EVENTOS EVENTS/CHILE
            </div>
            <PageController page={page} count={count} setPage={setPage} setCount={setCount} />
            {events[0] ? (
                events.map((event, number) => (
                    <div key={number}>
                        <EventDetail number={number} page={page} count={count} event={event} />
                    </div>
                ))
            ) : (
                <p>No se encontraron resultados</p>
            )}
        </div>
    )
}
