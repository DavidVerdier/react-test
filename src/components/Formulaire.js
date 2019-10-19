import React, {Component} from 'react';

class Formulaire extends Component {
    state = {
        message: '',
        length: this.props.length
    };

    createMessage = () => {
        const {addMessage, pseudo, length} = this.props;

        const message = {
            pseudo,
            message: this.state.message
        };

        addMessage(message);

        // reset
        this.setState({message: '', length})
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.createMessage();
    };

    handleChange = (event) => {
        const message = event.target.value;
        const length = this.props.length - message.length;

        this.setState({message, length});
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
                    maxLength={this.props.length}
                />
                <div className="info">
                    {this.state.length} caractères restant
                </div>
                <button type='submit'>Envoyer</button>
            </form>
        );
    }
}

export default Formulaire;
