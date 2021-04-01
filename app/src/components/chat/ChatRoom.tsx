import Container from "react-bootstrap/Container"
import "./ChatRoom.scss"
import { FC, useContext } from "react"
import MessageList from "./MessageList"
import InputBar from "./InputBar"
import { UAL } from "../../types/ual"
import { UALContext } from "ual-reactjs-renderer"

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

    const v: UAL = useContext(UALContext);

    return (
        <Container
            className="chatroom-container rounded pt-3 text-white p-2"
        >
            <MessageList messages={[...testMessages, ...testMessages, ...testMessages, ...testMessages, ...testMessages]} />
            {v.activeUser && <InputBar />}
        </Container>
    )
}

export default ChatRoom
