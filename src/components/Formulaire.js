import React, {Component} from 'react';

class Formulaire extends Component {
    state = {
        message: ''
    };

    createMessage = () => {
        const {addMessage, pseudo} = this.props;

        const message = {
            pseudo,
            message: this.state.message
        };

        addMessage(message);

        // reset
        this.setState({message: ''})
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.createMessage();
    };

    handleChange = (event) => {
        const message = event.target.value;

        this.setState({message});
    };

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="form">
                <textarea
                    onChange={this.handleChange}
                    value={this.state.message}
                    required
                    maxLength="140"
                />
                <div className="info">
                    140
                </div>
                <button type='submit'>Envoyer</button>
            </form>
        );
    }
}

export default Formulaire;
