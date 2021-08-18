import { ChatEngine } from "react-chat-engine";

import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

import "./App.css";

const App = () => {
    if(!localStorage.getItem("username")) return <LoginForm />
    return (
        <ChatEngine 
            height="100vh" 
            projectID="b008118b-3523-4a6a-876b-c69240573572"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
        />
    )
}

export default App;