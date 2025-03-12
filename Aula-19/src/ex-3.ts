class Carro {
    constructor(
        private marca: string, 
        private modelo: string, 
        private ano: number
    ) {}

    detalhes(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }    
}

const celta = new Carro('Celta', 'Celta Preto', 1999);
console.log(celta.detalhes());