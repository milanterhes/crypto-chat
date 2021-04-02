import { Fragment, useContext, useState } from "react"
import useUAL from "../../hooks/useUal"
import useUser from "../../hooks/useUser"
import Navbar from "./Navbar"
import ChangeChatroomModal from "./ChangeChatroomModal"
import ChatroomContext from "../../context/ChatroomContext"

const NavbarContainer = () => {
    const { isLoggedIn, userName } = useUser()
    const { logout, showModal } = useUAL()
    const chatroomContext = useContext(ChatroomContext)
    const [chatroomModal, setShowModal] = useState<boolean>(false)

    const handleChatroomChange = (newChatroom: string) => {
        if (chatroomContext?.chatroom.name !== newChatroom) {
            chatroomContext?.setChatroom(prev => ({
                limit: prev.limit,
                name: newChatroom
            }))
        }
    }

    return (
        <Fragment>
            {chatroomContext && (
                <ChangeChatroomModal
                    show={chatroomModal}
                    handleHide={() => setShowModal(false)}
                    prevChatroom={chatroomContext.chatroom.name}
                    handleChange={handleChatroomChange}
                />
            )}
            <Navbar isLoggedIn={isLoggedIn} logout={logout} showModal={showModal} userName={userName} openModal={() => setShowModal(true)} />
        </Fragment>
    )
}

export default NavbarContainer