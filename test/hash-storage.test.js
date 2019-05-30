import QUERY from '../src/components/QUERY.js';
const test = QUnit.test;

QUnit.module('Hash Storage');

const hashStorage = {
    get() {
        const hash = window.location.hash.slice(1);
        // string to go to object , parse
        const hashObj = QUERY.parse(hash);
        // return object
        return hashObj;
    },

    set(queryProps) {
        // object in, string out > stringify
        // we have hashObj
        const currentLocation = this.get();
        
        Object.assign(currentLocation, queryProps);

        // we need to update hashObj's page 1 with page 2 using
        // Obejct.assign

        // store page 2 key/value pair into an object

        const newWindow = QUERY.stringify(currentLocation);
        window.location.hash = newWindow;
        
        // return string
    }
};

test('reads window location hash as object', assert => {
    // arrange
    window.location.hash = 'search=shiny&page=1';
    const expected = {
        search: 'shiny',
        page: '1'
    };

    // act
    const result = hashStorage.get();

    // assert
    assert.deepEqual(result, expected);
});

test('sets window location with new props', assert => {
    // arrange
    window.location.hash = '';
    const queryProps = {
        search: 'shiny',
        page: '1'
    };
    const expected = 'search=shiny&page=1';

    // act
    hashStorage.set(queryProps);
    const result = window.location.hash.slice(1);

    // assert
    assert.equal(result, expected);
});

test('only sets new props on location', assert => {
    // arrange
    window.location.hash = 'search=shiny&page=1';
    const queryProps = {
        page: '2'
    };
    const expected = 'search=shiny&page=2';

    // act
    hashStorage.set(queryProps);
    const result = window.location.hash.slice(1);

    // assert
    assert.equal(result, expected);
});