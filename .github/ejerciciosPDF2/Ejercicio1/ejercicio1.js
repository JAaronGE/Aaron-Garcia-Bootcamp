import {LitElement, html,css} from "lit";

export class myTabla extends LitElement {

    constructor(){
        super();
        this.personaArr = [
            {
                "personId":123,
                "name":"jhon",
                "city": "melbourne",
                "phoneNo":"123456789"
            },
            {
                "personId":124,
                "name":"Amelia",
                "city": "Sydney",
                "phoneNo":"123456789"
            },
            {
                "personId":125,
                "name":"Emily",
                "city": "Perth",
                "phoneNo":"123456789"
            },
            {
                "personId":126,
                "name":"Abraham",
                "city": "Perth",
                "phoneNo":"123456789"
            }

        ];
    }

    static get styles(){
        return css `
            td {
                width: 6rem;
                height: 3rem;
            }
        `;
    }

    render(){
        return html`
            <table>
                <tr>
                    <td>personId</td>
                    <td>name</td></td>
                    <td>city</td>
                    <td>phoneNo</td> 
                </tr>

                <tr>
                    <td>${this.personaArr[0].personId}</td>
                    <td>${this.personaArr[0].name}</td>
                    <td>${this.personaArr[0].city}</td>
                    <td>${this.personaArr[0].phoneNo}</td>
                </tr>

                <tr>
                    <td>${this.personaArr[1].personId}</td>
                    <td>${this.personaArr[1].name}</td>
                    <td>${this.personaArr[1].city}</td>
                    <td>${this.personaArr[1].phoneNo}</td>
                </tr>

                <tr>
                    <td>${this.personaArr[2].personId}</td>
                    <td>${this.personaArr[2].name}</td>
                    <td>${this.personaArr[2].city}</td>
                    <td>${this.personaArr[2].phoneNo}</td>
                </tr>

                <tr>
                    <td>${this.personaArr[3].personId}</td>
                    <td>${this.personaArr[3].name}</td>
                    <td>${this.personaArr[3].city}</td>
                    <td>${this.personaArr[3].phoneNo}</td>
                </tr>

            </table>
        `;
    }


}