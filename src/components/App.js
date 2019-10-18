import React from "react";
import './App.css';

import marked from 'marked';
import {sampleText} from "../sampleText";

class App extends React.Component {
    state = {
        text: sampleText
    };

    handleChange = (event) => {
        const text = event.target.value;

        this.setState({text});
    };

    renderText = (text) => {
        const __html = marked(text, {sanitize: true});

        return {__html}
    };

    componentDidMount() {
        const text = localStorage.getItem('text');

        if (text) {
            this.setState({text});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {text} = this.state;

        localStorage.setItem('text', text);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea
                            value={this.state.text}
                            onChange={this.handleChange}
                            className="form-control"
                            rows="35"></textarea>
                    </div>
                    <div className="col-sm-6">
                        <div dangerouslySetInnerHTML={ this.renderText(this.state.text) }>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
