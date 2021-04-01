import { FC, Fragment } from "react"
import Message from "../../types/message"
import ChatMessage from "./ChatMessage"

interface MessageListProps {
    messages: Message[]
    userName: string | null;
}

const MessageList: FC<MessageListProps> = ({ messages, userName }) => {
    return (
        <Fragment>
            {messages.map(msg => (
                <ChatMessage {...msg} key={msg.message_id} userName={userName} />
            ))}
        </Fragment>
    )
}
export default MessageList
