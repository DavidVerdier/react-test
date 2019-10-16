import React from "react";
import Form from './Form';
import ItemList from './ItemList';


class App extends React.Component {
    state = {articles : []};

    addArticle = (article) => {
        let oldArticles = this.state.articles;

        article.id = Date.now();
        let newArticles = [...oldArticles, article];
        this.setState({articles: newArticles});
    };

    render() {
        return (
            <div>
                <h3>Liste de courses</h3>

                <Form formTitle="Ajout des articles à acheter" addArticle={this.addArticle}/>
                <ItemList articles={this.state.articles}/>
            </div>
        );
    }
}

export default App;
