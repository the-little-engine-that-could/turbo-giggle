import CharItem from '../src/components/CharItem.js';

const test = QUnit.test;

QUnit.module('character displays');

test('renders template from data', assert => {
    const character = {
        "character": "Bender",
        "quote": "Bite my shiny metal ass.",
        "image": "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
    }

    const charItem = new CharItem({ character });
    const render = charItem.renderTemplate();

    assert.htmlEqual(render, /*html*/ `
        <li class="char-item">
            <h2>Bender</h2>
            <img src="https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png" alt="Bender">
            <p>
                <blockquote>"Bite my shiny metal ass."</blockquote>
            </p>
        </li>
    `)
});

