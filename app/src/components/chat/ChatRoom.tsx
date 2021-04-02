import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Toast from "react-bootstrap/Toast"
import "./ChatRoom.scss"
import { FC, useState } from "react"
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
    const [showError, setShowError] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");

    const { isLoggedIn, userName, activerUser } = useUser();

    const handleSendMessage = async (message: string) => {
        try {
            await sendMessage(chatroom, activerUser, message)
        } catch (error) {
            console.log(error)
            setShowError(true)
            setErrorMsg(error.message)
        }
    }

    return (
        <Container
            className="chatroom-container rounded pt-3 p-2"
        >
            {hasMore && <Button onClick={increaseLimit}>Load more</Button>}
            <MessageList messages={messages} userName={userName} />
            {isLoggedIn && <InputBar sendMessage={handleSendMessage} />}
            <div
                aria-live="polite"
                aria-atomic="true"
                className="position-relative toast-container"
            ></div>
            <Toast className="position-absolute top-0 right-0 mr-1 mt-1"
                show={showError}
                onClose={() => setShowError(false)}>
                <Toast.Header>
                    <strong className="mr-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>{errorMsg}</Toast.Body>
            </Toast>
        </Container>
    )
}

export default ChatRoom
