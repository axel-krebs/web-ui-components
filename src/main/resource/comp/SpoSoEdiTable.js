import {LitElement,customElement,html,css} from 'lit-element';

@customElement('ss-table')
export default class SpoSoEdiTable extends LitElement {

    items = [];

    static addItem(item){
        this.items.push(item);
        this.requestUpdate();
    }

    static removeItem(item){
        this.items.remove(item);
        this.requestUpdate();
    }

    constructor() {
        super();
        this.emptyMessage = 'No items selected.';
    }

    static get properties() {
        return {
            emptyMessage: {type: String},
            items: {type: Array}
        };
    }

    static get styles() {
        return css`
            .table_style {
                width: 100%;
                border: solid 1px silver;
            }
        `;
    }

    render() {
        return html`
            <table class="table_style">
                <thead>
                    <tr>
                        <td>HEAD</td>
                    </tr>
                </thead>
                <tbody>
                ${this.items.length > 0 ?
                     this.items.forEach(
                         (item) => html`
                             <tr>
                                 <td>${item}</td>
                             </tr>
                         `) : html`<tr><td>${this.emptyMessage}</td></tr>`
                }
                </tbody>
                <tfoot>
                    <tr>
                        <td>ACTIONS!</td>
                    </tr>
                </tfoot>
            </table>
        `;
    }
}
