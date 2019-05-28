import Component from '../components/Component.js';

class Loading extends Component {

    renderTemplate() {
        const loading = this.props.loading;
        if(!loading) {
            return '<div></div>';
        }
        return /*html*/ `
            <div class="loading">
                <img src="../../assets/loading-animation.gif">
            </div>
        `;
    }
}

export default Loading;