import { FC, Fragment } from "react"
import Message from "../../types/message"
import ChatMessage from "./ChatMessage"

interface MessageListProps {
    messages: Message[]
}

const MessageList: FC<MessageListProps> = ({ messages }) => {
    return (
        <Fragment>
            {messages.map((msg, idx) => (
                //TODO: Get better key
                <ChatMessage {...msg} key={idx} />
            ))}
        </Fragment>
    )
}
export default MessageList
