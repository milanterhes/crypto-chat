import { JsonRpc } from "eosjs"
import { useContext, useEffect, useState } from "react"
import ChatroomContext from "../../context/ChatroomContext";
import RpcContext from "../../context/RpcContext";
import Message from "../../types/message";
import ChatRoom from "./ChatRoom"

async function getMessages(rpc: JsonRpc, setMsgs: React.Dispatch<React.SetStateAction<Message[]>>, chatroom: string, limit: number) {
    const response = await rpc.get_table_rows({
        json: true,
        code: "chatexample1",
        scope: chatroom,
        table: "messages",
        limit: limit
    });

    setMsgs(response.rows)
}

const ChatRoomContainer = () => {
    const [msgs, setMsgs] = useState<Message[]>([]);
    const rpc = useContext(RpcContext)
    const chatroomContext = useContext(ChatroomContext)

    useEffect(() => {

        if (rpc && chatroomContext) {
            const { name, limit } = chatroomContext.chatroom
            getMessages(rpc, setMsgs, name, limit)

            const intervalId = setInterval(() => getMessages(rpc, setMsgs, name, limit), 2000)
            return () => {
                clearInterval(intervalId)
            }
        }

    }, [rpc])

    console.log(chatroomContext?.chatroom)

    return (
        <ChatRoom messages={msgs} />
    )
}

export default ChatRoomContainer
