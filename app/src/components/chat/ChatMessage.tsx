import { FC } from "react"
import "./ChatMessage.scss"

interface ChatMessageProps {
    message: string;
    sender: string;
    date: Date;
}

const ChatMessage: FC<ChatMessageProps> = ({ message, sender, date }) => {
    return (
        <div className="d-flex flex-column chatmessage-container">
            <div className='rounded bg-primary pl-4 pr-4 pb-2 pt-2'>{message}</div>
            <div className="ml-4">By: {sender}, at {date.toLocaleString()}</div>
        </div>
    )
}

export default ChatMessage
