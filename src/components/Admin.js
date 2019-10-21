import React, {Component} from 'react';
import AjouterRecette from "./AjouterRecette";
import recettes from "../recettes";
import AdminForm from "./AdminForm";
class Admin extends Component {
    render() {
        const {recettes, ajouterRecette, updateRecette, chargerExemple, deleteRecette} = this.props;

        return (
            <div className="card">
                <AjouterRecette ajouterRecette={ajouterRecette} />
                {
                    Object.keys(recettes)
                        .map((key) => {
                            return <AdminForm
                                key={key}
                                id={key}
                                updateRecette={updateRecette}
                                deleteRecette={deleteRecette}
                                recettes={recettes}
                            />
                        })
                }
                <footer>
                    <button onClick={chargerExemple}>Remplir</button>
                </footer>
            </div>

        );
    }
}

export default Admin;
