import React, { useState, useContext, useEffect } from "react"
import LogingSubmitForm from "../components/LogingSubmitForm"
import { Navbar } from "../components/Navbar"
import { AccountContext } from "../components/Account"
import { EventList } from "../components/EventList"


export const MainPage = () => {
    const [status, setStatus] = useState(false)
    const { getSession, logout } = useContext(AccountContext)

    const endSesion = () => {
        logout()
        setStatus(false)
    }

    useEffect(() => {
        getSession()
            .then((session) => {
                console.log("Session:", session)
            })
            .catch((err) => console.error(err))
    }, [getSession])

    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar status={status} endSesion={endSesion}/>
            </div>
            {status ? <EventList /> : <LogingSubmitForm setStatus={setStatus}/>}
        </div>
    )
}
