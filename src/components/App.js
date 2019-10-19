import React from "react";
import './App.css';
import Formulaire from "./Formulaire";
import Message from "./Message";

class App extends React.Component {
    render() {
        return (
            <div className="box" >
                <div>
                    <div className="messages">
                        <Message/>
                    </div>
                </div>

                <Formulaire />
            </div>
        );
    }
}

export default App;
