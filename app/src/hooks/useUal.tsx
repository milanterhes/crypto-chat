import { useContext } from 'react'
import { UALContext } from 'ual-reactjs-renderer'
import { UAL } from '../types/ual'

const useUAL = () => {
    const ual = useContext<UAL>(UALContext)

    if (ual === undefined) {
        throw new Error("useUAL must be used within a WalletProvider")
    }

    const { logout, showModal } = ual

    return {
        logout, showModal
    }
}

export default useUAL;
