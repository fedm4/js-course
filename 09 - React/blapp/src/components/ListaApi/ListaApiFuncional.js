import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const ListaApiFuncional = props => {

   const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        console.log("Se ejecuta useEffect");
    }, [flag]);
    const handleClick = props => {
        setFlag(!flag);
    } 
    useEffect(()=>{
        getFromApi();
    },[]);

    const getFromApi = async () => {
        try{
            const res = await Axios.get('https://jsonplaceholder.typicode.com/todos');
            setData(res.data);
        }catch(err) {
            console.log(err);
        }
    }

    if(!props.seRenderiza) {
        return null;
    }
    return (
        <div>
            <button onClick={handleClick}>Change!</button> {flag?"true":"false"}
            <ul className={props.prop1}>
                {data.map(item => {
                    return <li>{item.title}</li>
                })}
            </ul>
        </div>
    );
}

export default ListaApiFuncional;