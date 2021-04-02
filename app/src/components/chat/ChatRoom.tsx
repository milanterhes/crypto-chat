import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import "./ChatRoom.scss"
import { FC, useState } from "react"
import MessageList from "./MessageList"
import InputBar from "./InputBar"
import Message from "../../types/message"
import useUser from "../../hooks/useUser"
import { sendMessage } from "../../transactions/sendMessage"
import ErrorToast from "../common/ErrorToast"
import PullToRefresh from 'react-simple-pull-to-refresh';

interface ChatRoomProps {
    messages: Message[];
    hasMore: boolean;
    increaseLimit: () => void;
    chatroom: string;
}

const ChatRoom: FC<ChatRoomProps> = ({ messages, hasMore, increaseLimit, chatroom }) => {
    const [showError, setShowError] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");

    const { isLoggedIn, userName, activeUser } = useUser();

    const handleSendMessage = async (message: string) => {
        try {
            await sendMessage(chatroom, activeUser, message)
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
            <PullToRefresh onRefresh={increaseLimit as () => Promise<any>} canFetchMore={hasMore} pullDownThreshold={5}>
                <MessageList messages={messages} userName={userName} />
            </PullToRefresh>
            {isLoggedIn && <InputBar sendMessage={handleSendMessage} />}
            <ErrorToast show={showError} close={() => setShowError(false)} errorMsg={errorMsg} />
        </Container>
    )
}

export default ChatRoom
