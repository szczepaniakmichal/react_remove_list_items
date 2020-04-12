import React from "react";
import './item.css'

class Item extends React.Component {

    render() {
        return (
            <React.Fragment>
                <li>
                    {this.props.person.name}
                </li>
                <button
                    onClick={this.props.click}
                >usuń
                </button>
            </React.Fragment>

        )
    }
}

export default Item;
