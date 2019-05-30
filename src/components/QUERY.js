const QUERY = {
    parse(queryString) {
        const searchParams = new URLSearchParams(queryString);
        const object = {};
        
        searchParams.forEach((value, key) => {
            object[key] = value;
        });
    
        return object;
    },

    stringify(queryProps) {
        const searchParams = new URLSearchParams();

        Object.keys(queryProps).forEach(key => {
            searchParams.set(key, queryProps[key]);
        });

        queryProps = searchParams.toString();

        return queryProps;
    }
};
export default QUERY;

// const keys = Object.keys(queryProps);
// keys.forEach(key => {
//     const value = queryProps[key];
//     searchParams.set(key, value);
// });