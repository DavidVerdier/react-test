import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class Connexion extends Component {
    state = {
        pseudo: '',
        goToChat: false
    };

    handleChange = (event) => {
        const pseudo = event.target.value;
        this.setState({pseudo});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({goToChat : true});
        console.log(this.state);
    };

    render() {
        if (this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
        }

        return (
            <div className="connexionBox">
                <form
                    onSubmit={this.handleSubmit}
                    className="connexion"
                >
                    <input
                        value={this.state.pseudo}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="pseudo"
                        required
                    />

                    <button type="submit">Chatter</button>
                </form>
            </div>
        );
    }
}

export default Connexion;
