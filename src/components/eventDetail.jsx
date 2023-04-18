import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { classNames } from "../App"

export function EventDetail({ number, page, count, event }) {
    const [displayDetails, setDisplayDetails] = useState(false)

    return (
        <div className="mb-2 shadow-lg rounded-lg flex-col">
            <div
                className={classNames(
                    "font-bold text-sm bg-teal-100 px-4 py-2  border-b border-b-teal-600 flex",
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
                "text-xs bg-teal-50 px-4 py-2 rounded-b-lg font-mono",
                displayDetails ? "flex-col" : "hidden"
            )}>
                <div>fecha.......{event.date}</div>
                <div>precio......${event.price}</div>
                <div>cantidad....{event.quantity}</div>
                <div>lugar.......{event.location}</div>
                <div>latitud.....{event.latitude}</div>
                <div>longuitud...{event.longitude}</div>
            </div>
        </div>
    )
}
