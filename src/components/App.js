import Component from './Component.js';
import Header from './Header.js';
import CharList from './CharList.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        console.log(dom);
        const charList = new CharList({});
        main.appendChild(charList.render());

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