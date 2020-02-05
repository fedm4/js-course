import React from 'react';
import Axios from 'axios';

export default class ListaApi extends React.Component {
    state = {
        data: []
    }

    componentDidMount = async () => {
        try{
            const response = await Axios.get('https://jsonplaceholder.typicode.com/todos');
            this.setState({data: response.data});
        }catch(err) {
            console.log(err);
        }
    }

    render() {
        return (
            <ul className={this.props.prop1}>
                {this.state.data.map(item => {
                    return <li>{item.title}</li>
                })}
            </ul>
        );
    }
}
