const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissão: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const Paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const Vanessa: Pessoa = {
    nome: 'Vanessa',
   idade: 23,
   profissao: Profissao.Desenvolvedora
}

const Maria: Pessoa = {
    nome: 'Maria',
   idade: 23,
   profissao: Profissao.Desenvolvedora
}

const Jessica: Estudante = {
    nome: 'Jessica',    
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'programação']
}

const monica: Estudante = {
    nome: 'monica',    
    idade: 28,
    materias: ['Matemática discreta', 'programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('-', item);
    }
}

listar(monica.materias)