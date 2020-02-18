import React, {useContext} from 'react';
import Rss from './rss.svg';
import './Card.css';
import ThemeContext from '../../ThemeContext';

const Card = props => {
    const {theme} = useContext(ThemeContext);
    return (
        <section className={`card ${theme}`}>
            <header className="card-header" style={
                {
                    backgroundImage: `url(${props.headerImgUrl})`
                }
            }>
            </header>
            <article className="card-article">
                <header><h1>{props.title}</h1></header>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus ex non dui dictum aliquet. Aliquam vitae molestie dolor, at.</p>
                <a className="rss-link" href="#">
                    <img className="rss" src={Rss} />
                </a>
            </article>
        </section>
    );
};

export default Card;