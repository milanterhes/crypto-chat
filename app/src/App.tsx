import { Fragment } from 'react'
import NavBar from "./components/NavBar"
import ChatRoom from "./components/chat/ChatRoom"
import "./theme/position.scss"

function App() {

  return (
    <Fragment>
      <NavBar />
      <ChatRoom />
    </Fragment>
  );
}

export default App;
