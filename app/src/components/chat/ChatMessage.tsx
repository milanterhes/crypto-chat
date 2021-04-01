import { FC } from "react"
import "./ChatMessage.scss"

interface ChatMessageProps {
    message: string;
    sender: string;
    message_id: number;
    userName: string | null;
}

const ChatMessage: FC<ChatMessageProps> = ({ message, sender, message_id, userName }) => {

    const isOwnMessage = userName === sender

    const senderString = isOwnMessage ? <span className="text-success">Me</span> : sender

    return (
        <div className={`d-flex flex-column chatmessage-container ${isOwnMessage && "ml-auto"}`}>
            <div className='rounded bg-primary pl-4 pr-4 pb-2 pt-2'>{message}</div>
            <div className="ml-4">By: {senderString}, with ID: {message_id}</div>
        </div>
    )
}

export default ChatMessage
