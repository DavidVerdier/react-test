import React from "react";
import Form from './Form';
import ItemList from './ItemList';


class App extends React.Component {
    addArticle = (article) => {
        console.log(article);
    };

    render() {
        return (
            <div>
                <h3>Liste de courses</h3>

                <Form formTitle="Ajout des articles à acheter" addArticle={this.addArticle}/>
                <ItemList />
            </div>
        );
    }
}

export default App;
