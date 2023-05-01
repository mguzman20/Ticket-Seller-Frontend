import React, { useState, useContext, useEffect } from "react"
import LogingSubmitForm from "../components/LogingSubmitForm"
import { Navbar } from "../components/Navbar"
import { AccountContext } from "../components/Account"
import { EventList } from "../components/EventList"


export const MainPage = () => {
    const [status, setStatus] = useState(false)
    const [email, setEmail] = useState()
    const { getSession, logout } = useContext(AccountContext)
    const [reload, setReload] = useState(false)

    const endSesion = () => {
        logout()
        setStatus(false)
    }

    useEffect(() => {
        getSession()
            .then((session) => {
                setStatus(true)
                setEmail(session.idToken.payload.email)
                console.log("Session:", session)
            })
            .catch((err) => console.error(err))
    }, [getSession, reload, email])

    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar status={status} endSesion={endSesion} reload={reload} setReload={setReload}/>
            </div>
            {status ? <EventList email={email}/> : <LogingSubmitForm setStatus={setStatus}/>}
        </div>
    )
}
