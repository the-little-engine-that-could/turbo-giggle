import Component from './Component.js';
import Header from './Header.js';
import CharList from './CharList.js';
import charApi from '../services/char-api.js';
import Loading from '../components/Loading.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const charList = new CharList({ characters: [] });
        main.appendChild(charList.render());

        const loading = new Loading({ loading: false });
        main.appendChild(loading.render());

        function loadCharacters() {
            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
            const search = searchParams.get('search');

            loading.update({ loading: true });

            charApi.getChars(search)
                .then(characters => {
                    charList.update({ characters });
                })
                
                .finally(() => {
                    loading.update({ loading: false });
                });
        }

        loadCharacters();

        window.addEventListener('hashchange', () => {
            loadCharacters();
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