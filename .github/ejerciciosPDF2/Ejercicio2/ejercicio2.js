import {LitElement, html, css} from "lit";

export class myTabla extends LitElement{
   
    constructor(){
        super();
        this.country="";
        this.id="";
        this.dataid="";
        this.datadialcode="";

    }

    static get styles(){
        return css `
            li {
                width: 6rem;
                height: 3rem;
            }
        `;
    }


    render(){
        return html `
        
            <ul>
                <li id="C1" data-id="US" data-dial-code="1" @click= "${this.alertCountryUSA}">USA</li>
                <li id="C2" data-id="CA" data-dial-code="1" @click= "${this.alertCountryCanada}">Canada</li>
                <li id="C3" data-id="FF" data-dial-code="3" @click= "${this.alertCountryFrance}">France</li>

            </ul>
        `;
    }

    alertCountryUSA(){
        this.country = this.shadowRoot.getElementById("C1");
        this.id = this.country.getAttribute("id");
        this.dataid = this.country.getAttribute("data-id");
        this.datadialcode = this.country.getAttribute("data-dial-code");
        alert(`Elemento seleccionado: \n ID elemento: ${this.id} \nISO ID: ${this.dataid}\nDial Code:: ${this.datadialcode}`);
        
    }

    alertCountryCanada(){
        this.country = this.shadowRoot.getElementById("C2");
        this.id = this.country.getAttribute("id");
        this.dataid = this.country.getAttribute("data-id");
        this.datadialcode = this.country.getAttribute("data-dial-code");
        alert(`Elemento seleccionado: \n ID elemento: ${this.id} \nISO ID: ${this.dataid}\nDial Code:: ${this.datadialcode}`);
        
    }
    alertCountryFrance(){
        this.country = this.shadowRoot.getElementById("C3");
        this.id = this.country.getAttribute("id");
        this.dataid = this.country.getAttribute("data-id");
        this.datadialcode = this.country.getAttribute("data-dial-code");
        alert(`Elemento seleccionado: \n ID elemento: ${this.id} \nISO ID: ${this.dataid}\nDial Code:: ${this.datadialcode}`);
        
    }
}