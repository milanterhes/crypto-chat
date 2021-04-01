import { FC } from "react"
import Message from "../../types/message"
import ChatMessage from "./ChatMessage"

interface MessageListProps {
    messages: Message[]
    userName: string | null;
}

const MessageList: FC<MessageListProps> = ({ messages, userName }) => {
    return (
        <div className="d-flex flex-column-reverse">
            {messages.map(msg => (
                <ChatMessage {...msg} key={msg.message_id} userName={userName} />
            ))}
        </div>
    )
}
export default MessageList
