import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import "./ChatRoom.scss"
import { FC } from "react"
import MessageList from "./MessageList"
import InputBar from "./InputBar"
import Message from "../../types/message"
import useUser from "../../hooks/useUser"

interface ChatRoomProps {
    messages: Message[];
    hasMore: boolean;
    increaseLimit: () => void;
}

const ChatRoom: FC<ChatRoomProps> = ({ messages, hasMore, increaseLimit }) => {

    const { isLoggedIn, userName } = useUser();

    return (
        <Container
            className="chatroom-container rounded pt-3 text-white p-2"
        >
            {hasMore && <Button onClick={increaseLimit}>Load more</Button>}
            <MessageList messages={messages} userName={userName} />
            {isLoggedIn && <InputBar />}
        </Container>
    )
}

export default ChatRoom
