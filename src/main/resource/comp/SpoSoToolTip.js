import {LitElement,customElement,html,css} from 'lit-element';
import {generateContainerID} from '../common.js';

@customElement('ss-tooltip')
export default class SpoSoToolTip extends LitElement {

    OFFSET_TOP = 3;

    @generateContainerID(1000000)
    genID;

    constructor() {
        super();
        this.text = "";
        this.ttVisible = false;
        this.contID = "sposo-cont-" + this.genID;
    }

    static get properties() {
        return {
            text: {type: String},
            ttVisible: {type: Boolean},
            calcLeft: {type: Number},
            calcTop: {type: Number}
        }
    }

    static get styles() {
        return css`
            .sposo-tooltip-source {
                display: inline;
            }
            .sposo-tooltip-display {
                position: absolute;
                border-style: solid;
                border-color: blue;
                background-color: silver;
            }
        `;
    }

    updated(changedProperties) {
        var contEl = this.shadowRoot.getElementById(this.contID);
        var ttEl = contEl.nextElementSibling;
        var coord = contEl.getBoundingClientRect();
        this.calcTop = coord.y - ttEl.offsetHeight - this.OFFSET_TOP;
        this.calcLeft = coord.left + coord.width;
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('mouseover', (evt) => {
            this.showTooltip(true);
        });
        this.addEventListener('mouseout', (evt) => {
            this.showTooltip(false);
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('mouseover');
        this.removeEventListener('mouseout');
    }

    showTooltip(isVisible){
        this.ttVisible = isVisible;
    }

    render() {
        return html`
            <div class="sposo-tooltip-source" id="${this.contID}">
                <slot></slot>
            </div>
            <div class="sposo-tooltip-display"
                style="${this.ttVisible ?
                    css`display: inline; left: ${this.calcLeft}px; top: ${this.calcTop}px;}` :
                    css`display: none;`}">${this.text}</div>
        `;
    }

}