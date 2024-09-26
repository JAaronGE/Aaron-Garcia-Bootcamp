export class MyCalculator extends HTMLElement{
    constructor(){
        super();
        this.texto1='';
        this.texto2='';
        this.counter=0;
        this.valor1=0;
        this.valor2=0;
        this.button1=null;
        this.button2=null;
        this.button3=null;
        this.button4=null;
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    

    render(){
        this.shadowRoot.innerHTML = `
        <h1>Calculator</h1>
        <span> ${this.counter} </span>
        <input type="text" id ="input1"> </input>
        <input type="text" id ="input2"> </input>
        <button id="suma"> Suma </button>
        <button id="Resta"> Resta </button>
        <button id="Multiplicacion">Multiplicacion</button>
        <button id="Division">Division</button>
        `;
        this.inputt1 = this.shadowRoot.getElementById("input1");
        this.inputt2 = this.shadowRoot.getElementById("input2");
        this.button1 = this.shadowRoot.getElementById("suma");
        this.button2 = this.shadowRoot.getElementById("Resta");
        this.button3 = this.shadowRoot.getElementById("Multiplicacion");
        this.button4 = this.shadowRoot.getElementById("Division");


        //funciones

        this.inputt1.addEventListener('input',(ev)=>{
            this.texto1 += ev.data;
            this.valor1 = Number(this.texto1);
            console.log(this.texto1,this.valor1);
        });

        this.inputt2.addEventListener('input',(ev)=>{
            this.texto2 += ev.data;
            this.valor2 = Number(this.texto2);
            console.log(this.texto2,this.valor2);
        });

        this.button1.addEventListener('click', () =>{
            this.counter=this.valor1+this.valor2
            console.log(this.counter)
            this.texto1=0;
            this.texto2=0;
            this.render();
        });
        this.button2.addEventListener('click', () =>{
            this.counter=this.valor1-this.valor2
            this.texto1=0;
            this.texto2=0;
            this.render();
        });
        this.button3.addEventListener('click', () =>{
            this.counter=this.valor1*this.valor2
            this.texto1=0;
            this.texto2=0;
            this.render();
        });
        this.button4.addEventListener('click', () =>{
            this.counter=this.valor1/this.valor2
            this.texto1=0;
            this.texto2=0;
            this.render();
        });      
    }
}