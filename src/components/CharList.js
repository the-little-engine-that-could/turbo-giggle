import Component from './Component.js';
import CharItem from './CharItem.js';

class CharList extends Component {

    render() {
        const list = this.renderDOM();

        this.props.characters.forEach(character => {
            const charItem = new CharItem({ character });
            console.log('item', charItem);
            list.appendChild(charItem.render());
        });

        return list;
    }
  
    renderTemplate() {
        return /*html*/ `
            <ul class="list">


            </ul>
        `;
    }
}

export default CharList;