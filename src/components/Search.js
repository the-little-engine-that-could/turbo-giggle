import Component from './Component.js';

class Search extends Component {

    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');
        console.log(form);

        form.addEventListener('submit', event => {
            event.preventDefault();
            const searchParams = new URLSearchParams();
            searchParams.set('search', input.value);
            console.log(searchParams);
            window.location.hash = searchParams.toString();
        });

        window.addEventListener('hashchange', () => {
            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
            const search = searchParams.get('search');
            input.value = search;
            console.log('event fires');
        });
        
        return form;
    }

    renderTemplate() {
        return /*html*/ `
            <form>
                <input id="search-bar" type="text">
                <button>Search</button>
            </form>
        `;
    }
}

export default Search;