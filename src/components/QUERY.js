const QUERY = {
    parse(queryString) {
        //query will be: serach=shiny
        // create a new URLSearchParams object passing in query
        const searchParams = new URLSearchParams(queryString);
        
        const object = {};
        
        searchParams.forEach((value, key) => {
            object[key] = value;
        });
    
        return object;
    
    },

    stringify(queryProps) {
        //need empty searchparams
        const searchParams = new URLSearchParams();

        Object.keys(queryProps).forEach(key => {
            searchParams.set(key, queryProps[key]);
        });
        console.log(Object.keys(queryProps));

        //set key and value
        // searchParams.set('search', 'shiny');
        // searchParams.set('page', '1');
        
        //stringify it
        queryProps = searchParams.toString();
        
        //return string
        return queryProps;
    }
};
export default QUERY;