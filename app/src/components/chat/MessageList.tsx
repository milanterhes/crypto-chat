import { FC, useContext, useState } from "react"
import ChatroomContext from "../../context/ChatroomContext"
import useUser from "../../hooks/useUser"
import { editMessage } from "../../transactions/editMessage"
import Message from "../../types/message"
import ErrorToast from "../common/ErrorToast"
import ChatMessage from "./ChatMessage"
import EditModal from "./EditModal"

interface MessageListProps {
    messages: Message[]
    userName: string | null;
}

const MessageList: FC<MessageListProps> = ({ messages, userName }) => {
    const [showError, setShowError] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [editModalShow, setEditShow] = useState<boolean>(false)
    const [origMessage, setOrigMessage] = useState<Message>();
    const chatroomContext = useContext(ChatroomContext)
    const { activeUser } = useUser()

    const openEdit = (message: Message) => {
        console.log("edit", message)
        setOrigMessage(message)
        setEditShow(true)
    }

    const handleEdit = async (msg: string) => {
        if (chatroomContext && origMessage) {
            try {
                await editMessage(chatroomContext?.chatroom.name, activeUser, msg, origMessage?.message_id)
            } catch (error) {
                console.log(error)
                setShowError(true)
                setErrorMsg(error.message)
            }
        }
    }

    return (
        <div className="d-flex flex-column-reverse">
            {messages.map(msg => (
                <ChatMessage {...msg} key={msg.message_id} userName={userName} handleEdit={openEdit} />
            ))}
            {(chatroomContext && origMessage) && <EditModal
                chatroom={chatroomContext.chatroom.name}
                handleHide={() => setEditShow(false)}
                message={origMessage}
                show={editModalShow}
                handleChange={handleEdit}
            />}
            <ErrorToast show={showError} close={() => setShowError(false)} errorMsg={errorMsg} />
        </div>
    )
}
export default MessageList
