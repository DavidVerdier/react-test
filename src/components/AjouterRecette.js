import React, {Component} from 'react';

class AjouterRecette extends Component {
    state = {
        nom: '',
        image: '',
        ingredients: '',
        instructions: ''
    };

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const recette = {...this.state};
        this.props.ajouterRecette(recette);

        // reset
        Object.keys(recette).forEach(item =>
        {
            recette[item] = '';
        });

        this.setState({ ...recette })
    };

    render() {
        return (
            <div className="card">
                <form className="admin-form ajouter-recette" onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.name}
                        name="nom" type="text" placeholder="Nom de la recette"/>
                    <input
                        onChange={this.handleChange}
                        value={this.state.image}
                        name="image" type="text"  placeholder="Nom de l'image"/>
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.ingredients}
                        name="ingredients" rows="3"  placeholder="Liste des ingredients"/>
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.instructions}
                        name="instructions" rows="15"  placeholder="Liste des instructions"/>

                    <button type='submit'>+ Ajouter une recette</button>
                </form>
            </div>
        );
    }
}

export default AjouterRecette;
