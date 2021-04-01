import NavbarContainer from "./components/nav/NavbarContainer"
import ChatRoom from "./components/chat/ChatRoom"
import "./theme/position.scss"
import waxChain from "./config/wax"

import { UALProvider } from 'ual-reactjs-renderer'
import { Anchor } from 'ual-anchor'
import { Wax } from '@eosdacio/ual-wax'

const APP_NAME = "crypto-chat-dapp"

const anchor = new Anchor([waxChain], {
  appName: APP_NAME,
})

const wax = new Wax([waxChain])

console.log(anchor, wax)

function App() {

  return (
    <UALProvider chains={[waxChain]} authenticators={[wax, anchor]} appName={APP_NAME}>
      <NavbarContainer />
      <ChatRoom />
    </UALProvider>
  );
}

export default App;
