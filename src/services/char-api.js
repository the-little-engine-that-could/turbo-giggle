const URL = 'https://futuramaapi.herokuapp.com/api/quotes';

const charApi = {
    getChars(search) {
        let url = URL;

        if(search) {
            const searchParams = new URLSearchParams();
            searchParams.set('search', search);
            const query = searchParams.toString();
            url = `${URL}?${query}`;

        }
        return fetch(url)
            .then(response => response.json());
    }
};

export default charApi;