import React from 'react';
import Item from "./Item";
import './app.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [{"id": 1, "name": "Drucie"},
                {"id": 2, "name": "Mabelle"},
                {"id": 3, "name": "Alyce"},
                {"id": 4, "name": "Vannie"},
                {"id": 5, "name": "Beale"},
                {"id": 6, "name": "Mikaela"},
                {"id": 7, "name": "Meyer"},
                {"id": 8, "name": "Angelico"},
                {"id": 9, "name": "Brina"},
                {"id": 10, "name": "Elise"},
                {"id": 11, "name": "Karlik"},
                {"id": 12, "name": "Christiano"},
                {"id": 13, "name": "Ronald"},
                {"id": 14, "name": "Rolland"},
                {"id": 15, "name": "Paulita"},
                {"id": 16, "name": "Tally"},
                {"id": 17, "name": "Johnette"},
                {"id": 18, "name": "Evonne"},
                {"id": 19, "name": "Myrtle"},
                {"id": 20, "name": "Guillermo"}]
        };
    }

    handleRemoveClick = (id) => {
        const person = [...this.state.person];
        const index = person.findIndex(person => person.id === id);
        person.splice(index, 1);
        this.setState({
            person,
        })
    };

    render() {
        const persons = this.state.person.map(person => {
            return <Item person={person}
                         key={person.id}
                         click={this.handleRemoveClick.bind(this, person.id)}
            />
        });

        return (
            <React.Fragment>
                <ul>
                    {persons}
                </ul>
            </React.Fragment>
        )
    }
}

export default App;
