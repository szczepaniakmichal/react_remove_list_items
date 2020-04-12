import React from 'react';
import Item from "./Item";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [
                {
                    id: 1,
                    name: 'Staś',
                },
                {
                    id: 2,
                    name: 'Nel',
                },
                {
                    id: 3,
                    name: 'kot Filemon',
                },
                {
                    id: 4,
                    name: 'Reksio',
                },
            ]
        };
    }

    handleRemoveClick = (e) => {
        const person = [...this.state.person].filter(person => person.id !== e);
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
