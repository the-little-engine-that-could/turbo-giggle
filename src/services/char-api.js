const URL = 'futuramaapi.herokuapp.com/api/quotes';
const charApi = {
    getChars() {
        return fetch(URL)
            .then(response => response.json());
    }
};
export default charApi;