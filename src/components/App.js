import React from "react";
import Form from './Form';
import ItemList from './ItemList';


class App extends React.Component {
    render() {
        return (
            <div>
                <h3>Liste de courses</h3>

                < Form />
                < ItemList />
            </div>
        );
    }
}

export default App;
