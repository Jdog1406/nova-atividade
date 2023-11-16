class Pessoa {
    _idade = 0;

    constructor(nome) {
        this.nome = nome;
    }

    get idade() {
        return this._idade;
    }

    set idade(novaIdade) {
        if (novaIdade < 0) {
            throw new Error("A idade não pode ser um número negativo.");
        }
        this._idade = novaIdade;
    }
}

class Aluno extends Pessoa {
    constructor(nome, id) {
        super(nome);
        this.id = id;
    }
}

let p1 = new Aluno("Everaldo", 8);

try {
    p1.idade = 32;
    console.log(`${p1.nome} tem ${p1.idade} anos e matrícula ${p1.id}`);
} catch (error) {
    console.error(`Erro: ${error.message}`);
}


