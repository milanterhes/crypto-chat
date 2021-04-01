import useUAL from "../../hooks/useUal"
import useUser from "../../hooks/useUser"
import Navbar from "./Navbar"

const NavbarContainer = () => {
    const { isLoggedIn, userName } = useUser()
    const { logout, showModal } = useUAL()

    return (
        <Navbar isLoggedIn={isLoggedIn} logout={logout} showModal={showModal} userName={userName} />
    )
}

export default NavbarContainer