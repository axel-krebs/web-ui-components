import {LitElement,customElement,html,css} from 'lit-element';

@customElement('ss-dropdown')
class SpoSoDropDown extends LitElement {

    static get properties() {
        return {
            visible: {type: Boolean},
            title: {type: String},
            selectedItems: {type: Array}
        };
    }

	render() {

	    // for convenience pre-process the selected items
	    const itemTemplates = [];
        for (const item of this.selectedItems) {
            var tempResult = html`
                <tr><td>${item}</td></tr>
            `;
            itemTemplates.push(tempResult);
        }
		return html`
		    <style>
	        	.dropdown div {
	           		border: 1px solid #ccc;
	           		padding: 12px;
	        	}
	        	.selected_table {
	        	    border: 1px solid #ccc;
	        	}
	    	</style>
			<div class="dropdown">
			   <table class="selected_table">
			        <thead>
			            <tr>
			                <td><ss-tooltip text="Tool-Tip!">${this.title}</ss-tooltip></td>
			            </tr>
			        </thead>
			        ${itemTemplates}
			        <tfoot>
			            <tr>
			                <td>
			                    <button @click="${() => this.toggle()}">${this.title}</button>
			                </td>
			            </tr>
			        </tfoot>
			   </table>
			</div>
			`;
	}

	toggle() {
	 this.visible = !this.visible;
	}

	showTooltip(tt){
	    alert('Tool-Tip: ' + tt);
	}

}