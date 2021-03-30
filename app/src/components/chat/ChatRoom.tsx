import Container from "react-bootstrap/Container"
import "./ChatRoom.scss"
import { FC } from "react"
import MessageList from "./MessageList"
import InputBar from "./InputBar"

const testMessages = [
    {
        sender: "milanterhes",
        date: new Date(),
        message: "Test message"
    },
    {
        sender: "milanterhes",
        date: new Date(),
        message: "See a chat history which auto refreshes every few seconds and pulls new messages from the blockchain See a chat history which auto refreshes every few seconds and pulls new messages from the blockchain"
    }
]

const ChatRoom: FC = () => {

    return (
        <Container
            className="chatroom-container rounded pt-3 text-white p-2"
        >
            <MessageList messages={[...testMessages]} />
            <InputBar />
        </Container>
    )
}

export default ChatRoom
