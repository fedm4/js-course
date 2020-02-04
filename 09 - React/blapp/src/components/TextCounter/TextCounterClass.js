import React from 'react';
import './TextCounter.scss';


const max = 140;
export default class TextCounterClass extends React.Component {
    state = {
        counter: 140
    }

    handleChange = (event) => {
        const chars = event.target.value.length // <textarea></textarea> => dom
        this.setState({counter: max - chars})
    }

    render() {
        //destructuring
        const { counter } = this.state;
        return (
            <div>
                <textarea onChange={this.handleChange}></textarea>
                <span id="counter">Cantidad de Caracteres: {counter}</span>
            </div>
        );
    }
}
