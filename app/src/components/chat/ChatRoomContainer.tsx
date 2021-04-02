import { JsonRpc } from "eosjs"
import { useContext, useEffect, useState } from "react"
import ChatroomContext from "../../context/ChatroomContext";
import RpcContext from "../../context/RpcContext";
import Message from "../../types/message";
import ChatRoom from "./ChatRoom"

async function getMessages(rpc: JsonRpc,
    setMsgs: React.Dispatch<React.SetStateAction<Message[]>>,
    chatroom: string,
    limit: number,
    setHasMore: React.Dispatch<React.SetStateAction<boolean>>
) {
    const response = await rpc.get_table_rows({
        json: true,
        code: "chatexample1",
        scope: chatroom,
        table: "messages",
        limit: limit,
        reverse: true
    });

    setMsgs(response.rows)
    setHasMore(response.more)
}

const ChatRoomContainer = () => {
    const [msgs, setMsgs] = useState<Message[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const rpc = useContext(RpcContext)
    const chatroomContext = useContext(ChatroomContext)

    useEffect(() => {

        if (rpc && chatroomContext) {
            const { name, limit } = chatroomContext.chatroom
            getMessages(rpc, setMsgs, name, limit, setHasMore)

            const intervalId = setInterval(() => getMessages(rpc, setMsgs, name, limit, setHasMore), 4000)
            return () => {
                clearInterval(intervalId)
            }
        }

    }, [rpc, chatroomContext])

    const increaseLimit = () => {
        if (chatroomContext) {
            chatroomContext.setChatroom(prev => ({
                name: prev.name,
                limit: prev.limit + 5
            }))
        }
    }

    return (
        <ChatRoom messages={msgs} hasMore={hasMore} increaseLimit={increaseLimit} chatroom={chatroomContext?.chatroom.name || ""} />
    )
}

export default ChatRoomContainer
