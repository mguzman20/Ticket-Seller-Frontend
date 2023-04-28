import {useEffect, useState} from "react"
import { EventDetail } from "./EventDetail"
import { PageController } from "./PageController"

export const EventList = () => {
    const [events, setEvents] = useState([])
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(25)

    useEffect(() => {
        fetch(`arquie0.me/events/?page=${page}&count=${count}`, { method: "GET", })
        .then(response => response.json())
        .then(data => {setEvents(data)})
    }, [page, count])

    return (
        <div className="mx-8 my-8 p-4 flex-row">
            <div className="text-xl py-1 mb-4 flex justify-center border-b-2 border-teal-700">
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
