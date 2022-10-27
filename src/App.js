import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                        /*addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}*//>}/>
                    <Route path="/dialogs/*" element={<Dialogs
                        dialogsData={props.state.dialogsPage.dialogsData}
                        messagesData={props.state.dialogsPage.messagesData}
                        newMessageText={props.state.dialogsPage.newMessageText}
                        dispatch={props.dispatch}
                        /*sendMessage={props.sendMessage}
                        updateNewMessageText={props.updateNewMessageText}*/
                    />}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
