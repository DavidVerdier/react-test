import React, {Component} from 'react';
import AjouterRecette from "./AjouterRecette";
import recettes from "../recettes";
import AdminForm from "./AdminForm";
import firebase from "firebase/app";
import 'firebase/auth';
import base, {firebaseApp} from "../base";
import Login from "./Login";

class Admin extends Component {
    state = {
        uid: null,
        chef: null
    };

    handleAuth = async (authData) => {
        const box = await base.fetch(this.props.pseudo, {context: this});

        if (!box.chef) {
            await base.post(`${this.props.pseudo}/chef`, {data: authData.user.uid});
        }

        this.setState({
            uid: authData.user.uid,
            chef: box.chef || authData.user.uid
        });
    };

    authenticate = () => {
        const provider = new firebase.auth.FacebookAuthProvider();

        firebaseApp
            .auth()
            .signInWithPopup(provider)
            .then(this.handleAuth);
    };

    logout = async () => {
        await firebase.auth().signOut();
        this.setState({uid: null});
    };

    render() {
        const {recettes, ajouterRecette, updateRecette, chargerExemple, deleteRecette} = this.props;

        const logout = <button onClick={this.logout}>Déconnexion</button>

        if (!this.state.uid) {
            return <Login authenticate={this.authenticate} />
        }

        if (this.state.uid !== this.state.chef) {
            return (
                <div>
                    <p>Tu n'est pas le chef de cette boite</p>
                    { logout }
                </div>
            );
        }

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
                    { logout }
                    <button onClick={chargerExemple}>Remplir</button>
                </footer>
            </div>

        );
    }
}

export default Admin;
