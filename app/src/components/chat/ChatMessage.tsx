import { FC } from "react"
import Button from "react-bootstrap/Button"
import Message from "../../types/message"
import "./ChatMessage.scss"

interface ChatMessageProps {
    message: string;
    sender: string;
    message_id: number;
    userName: string | null;
    handleEdit: (message: Message) => void;
}

const ChatMessage: FC<ChatMessageProps> = ({ message, sender, message_id, userName, handleEdit }) => {

    const isOwnMessage = userName === sender

    const senderString = isOwnMessage ? <span className="text-success">Me</span> : sender

    const renderEditButton = () => {
        if (isOwnMessage) return <Button variant="link" onClick={() => handleEdit({ message, sender, message_id })}>Edit</Button>
        return null
    }

    return (
        <div className={`d-flex flex-column text-white chatmessage-container ${isOwnMessage ? "ml-auto" : ""}`}>
            <div className='rounded bg-primary pl-4 pr-4 pb-2 pt-2'>{message}</div>
            <div className="ml-4">By: {senderString}, with ID: {message_id} {renderEditButton()}</div>
        </div>
    )
}

export default ChatMessage
