import {useEffect, useState} from 'react'
import { EventDetail } from "./eventDetail"

export const EventList = () => {
    const [events, setEvents] = useState([])

    const url = window.location
    const params = new URL(url)
    const page = params.searchParams.get("page") || 1
    const count = params.searchParams.get("count") || 25

    useEffect(() => {
        fetch(`/events/?page=${page}&count=${count}`, { method: 'GET', })
        .then(response => response.json())
        .then(data => {setEvents(data)})
    }, [page, count])

    return (
        <div className='mx-8 my-8 p-4 flex-row'>
            <div className='text-xl py-1 mb-4 flex justify-center border-b-2 border-teal-700'>
                LISTA DE EVENTOS EVENTS/CHILE
            </div>
            {events[0] && (
                <div className='p-2 font-semibold'>
                Mostrando resultados del {(page - 1) * count + 1} al {(page) * count}
                </div>
            )}
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
