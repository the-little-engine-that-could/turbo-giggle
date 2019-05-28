import Component from './Component.js';

class CharList extends Component {

    render() {
        const list = this.renderDOM();
        return list;
    }


    renderTemplate() {
        return /*html*/ `
            <ul>
                <li>
                    <h2>Bender</h2>
                    <img src="https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png" alt="Bender">
                    <p>
                        <blockquote>"Bite my shiny metal ass."</blockquote>
                    </p>
                </li>
                <li>
                    <h2>Leela</h2>
                    <img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/leela.png" alt="Leela">
                    <p>
                        <blockquote>"...at least here you'll be treated with dignity. Now strip naked and get on\nthe probulator."</blockquote>
                    </p>
                </li>
                <li>
                    <h2>Fry</h2>
                    <img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png" alt="Fry">
                    <p>
                        <blockquote>"...it's what seperates humans and robots from animals and animal robots."</blockquote>
                    </p>
                </li>

            </ul>
        `;
    }
}

export default CharList;