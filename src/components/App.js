import React from "react";
import './App.css';
import Formulaire from "./Formulaire";
import Message from "./Message";

class App extends React.Component {
    state = {
        messages: {},
        pseudo: this.props.match.params.pseudo
    };

    addMessage = (message) => {
         const messages = {... this.state.messages};
         messages[`message-${Date.now()}`] = message;

         this.setState({messages});
    };

    render() {
        return (
            <div className="box" >
                <div>
                    <div className="messages">
                        <Message/>
                    </div>
                </div>

                <Formulaire
                    length={150}
                    pseudo={this.state.pseudo}
                    addMessage={this.addMessage} />
            </div>
        );
    }
}

export default App;
