import React, { useState } from "react"
import NavbarContainer from "./components/nav/NavbarContainer"
import ChatRoomContainer from "./components/chat/ChatRoomContainer"
import "./theme/position.scss"
import waxChain from "./config/wax"
import RpcContext, { rpc } from "./context/RpcContext"
import { UALProvider } from 'ual-reactjs-renderer'
import { Anchor } from 'ual-anchor'
import { Wax } from '@eosdacio/ual-wax'
import ChatroomContext, { ChatroomState } from "./context/ChatroomContext"

const APP_NAME = "crypto-chat-dapp"

const anchor = new Anchor([waxChain], {
  appName: APP_NAME,
  rpc
})

const wax = new Wax([waxChain])

function App() {

  const [chatroom, setChatroom] = useState<ChatroomState>({
    name: "test",
    limit: 1
  })

  return (
    <UALProvider chains={[waxChain]} authenticators={[wax, anchor]} appName={APP_NAME}>
      <RpcContext.Provider value={rpc}>
        <ChatroomContext.Provider value={{ chatroom, setChatroom }}>
          <NavbarContainer />
          <ChatRoomContainer />
        </ChatroomContext.Provider>
      </RpcContext.Provider>
    </UALProvider>
  );
}

export default App;
