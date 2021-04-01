import Container from "react-bootstrap/Container"
import "./ChatRoom.scss"
import { FC } from "react"
import MessageList from "./MessageList"
import InputBar from "./InputBar"
import Message from "../../types/message"
import useUser from "../../hooks/useUser"

interface ChatRoomProps {
    messages: Message[]
}

const ChatRoom: FC<ChatRoomProps> = ({ messages }) => {

    const { isLoggedIn, userName } = useUser();

    return (
        <Container
            className="chatroom-container rounded pt-3 text-white p-2"
        >
            <MessageList messages={messages} userName={userName} />
            {isLoggedIn && <InputBar />}
        </Container>
    )
}

export default ChatRoom
