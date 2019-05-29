import Component from './Component.js';


class CharItem extends Component {

    renderTemplate() {
        const character = this.props.character;
        return /*html*/ `
            <li class="char-item">
                <h2>${character.character}</h2>
                <img src="${character.image}" alt="${character.character}">
                <p>
                    <blockquote>"${character.quote}"</blockquote>
                </p>
            </li>
        `;
    }
}

export default CharItem;