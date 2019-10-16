import React from 'react';

const ItemList = (props) => {
    return (
        <div>
            <ul>
                {
                    props.articles.map(article => <li key={article.id}>{article.quantity} {article.name}</li>)
                }
            </ul>
        </div>
    );
};

export default ItemList;
