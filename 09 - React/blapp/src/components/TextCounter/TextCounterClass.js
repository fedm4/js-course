import React from 'react';
import './TextCounter.scss';


const max = 140;
export default class TextCounterClass extends React.Component {
    constructor(props) {
        super(props)
        console.log("constructor");
        // hago algo en el constructor
    }
    state = {
        counter: 140,
        apiRes: null
    }

    handleChange = (event) => {
        const chars = event.target.value.length // <textarea></textarea> => dom
        this.setState({counter: max - chars})
    }

    componentDidMount() {
        console.log("did mount")
        // hago algo en el momento que se termino de montar 
        // mi componente

        //FETCH
        this.setState({apiRes: "RES"});
    }

    render() {
        // hago algo en el render
        //destructuring
        const { counter } = this.state;
        console.log("render");
        return (
            <div>
                <textarea onChange={this.handleChange}></textarea>
                <span id="counter">Cantidad de Caracteres: {counter}</span>
            </div>
        );
    }
}
