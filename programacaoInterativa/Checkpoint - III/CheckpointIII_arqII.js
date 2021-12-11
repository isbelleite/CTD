// Checkpoint III - Aluna:Isabelle de Almeida Leite - Turma 07 Noturno

let Aluno = require('./CheckpointIII_arqI');
let listaDeEstudantes = require('./estudantes');

let curso = {
    nomeDoCurso: "Programação Imperativa",
    notaDeAprovacao: 7,
    faltasMax: 5,
    estudantesLista: listaDeEstudantes,
    adicionarAluno: function(nome, faltas, notas){
        let novoAluno = new Aluno(nome, faltas, notas);
        this.estudantesLista.push(novoAluno);
    },
    alunoAprovado: function (aluno){
        if((aluno.calcularMedia() >= this.notaDeAprovacao) && (aluno.faltas < this.faltasMax) || (aluno.faltas == this.faltasMax) && (aluno.calcularMedia() >= this.notaDeAprovacao*1.10) ){
            return true;
        }
        else{
            return false;
        }
    },
    resultadosAlunos: function(){
        let resultados = this.estudantesLista.map((parametro) =>{
            return this.alunoAprovado(parametro);
        })
            return resultados;
    }
};

//teste
    //curso.adicionarAluno("Aluna nova", 0, [0,0,0]);
    //console.log(listaDeEstudantes);
    //console.log(curso.alunoAprovado(listaDeEstudantes[1]));
    //console.log(listaDeEstudantes);
    //console.log(curso.resultadosAlunos());