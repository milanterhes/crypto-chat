import { useContext, useEffect, useState } from 'react'
import { UALContext } from "ual-reactjs-renderer"
import { UAL } from '../types/ual'

const useUser = () => {
    const [userName, setName] = useState()
    const ual = useContext<UAL>(UALContext)

    if (ual === undefined) {
        throw new Error("useUser must be used within a WalletProvider")
    }

    console.log(ual.activeUser)

    useEffect(() => {
        async function setUserName() {
            if (ual.activeUser) {
                setName(await ual.activeUser.getAccountName())
            }
        }

        setUserName()
    }, [ual.activeUser])

    const isLoggedIn = ual.activeUser !== null

    return {
        userName,
        isLoggedIn
    }
}

export default useUser;
