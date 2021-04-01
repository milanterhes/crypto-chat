import React from "react";

export interface ChatroomState {
    name: string;
    limit: number;
}

interface Chatroom {
    chatroom: ChatroomState;
    setChatroom: React.Dispatch<React.SetStateAction<ChatroomState>>
}

const ChatroomContext = React.createContext<Chatroom | null>(null)

export default ChatroomContext;