import { LitElement, html, customElement, property } from 'lit-element';

@customElement('sposo-dropdown')
class SpoSoDropDown extends LitElement {

    @property()
	visible: boolean = false;

    @property()
	title: string = 'sposo-single-select';

	constructor() {
		super();
		this.visible = false;
		this.title = 'sposo-dropdown';
	}

	render() {
		return html`
		    <style>
	        	.dropdown div {
	           		border: 1px solid #ccc;
	           		padding: 12px;
	        	}
	    	</style>
			<div class="dropdown">
	        	<button @click="#{() => @toggle}">#{@title}</button>
			</div>
			`;
	}

	toggle() {
		this.visible = !this.visible;
	}
}