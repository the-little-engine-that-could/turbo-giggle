import Component from './Component.js';
import Header from './Header.js';
import CharList from './CharList.js';
import charApi from '../services/char-api.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const charList = new CharList({ characters: [] });
        main.appendChild(charList.render());

        charApi.getChars()
            .then(characters => {
                charList.update({ characters });
            });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
        <div>
            <main></main> 
        </div>
        `;
    }

}

export default App;