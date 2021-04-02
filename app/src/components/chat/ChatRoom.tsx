import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import "./ChatRoom.scss"
import { FC } from "react"
import MessageList from "./MessageList"
import InputBar from "./InputBar"
import Message from "../../types/message"
import useUser from "../../hooks/useUser"
import { sendMessage } from "../../transactions/sendMessage"

interface ChatRoomProps {
    messages: Message[];
    hasMore: boolean;
    increaseLimit: () => void;
    chatroom: string;
}

const ChatRoom: FC<ChatRoomProps> = ({ messages, hasMore, increaseLimit, chatroom }) => {

    const { isLoggedIn, userName, activerUser } = useUser();

    const handleSendMessage = async (message: string) => {
        await sendMessage(chatroom, activerUser, message)
    }

    return (
        <Container
            className="chatroom-container rounded pt-3 text-white p-2"
        >
            {hasMore && <Button onClick={increaseLimit}>Load more</Button>}
            <MessageList messages={messages} userName={userName} />
            {isLoggedIn && <InputBar sendMessage={handleSendMessage} />}
        </Container>
    )
}

export default ChatRoom
