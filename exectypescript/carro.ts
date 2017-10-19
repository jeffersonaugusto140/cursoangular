export class Carro {
    constructor(public nome: string, public potencia: number){

    }

    andar(){
        console.log(`Potência - ${this.nome}: ${this.potencia}`)
    }
}