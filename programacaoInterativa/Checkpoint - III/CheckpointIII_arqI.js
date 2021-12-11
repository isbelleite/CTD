// Checkpoint III - Aluna:Isabelle de Almeida Leite - Turma 07 Noturno

function Aluno(nome, faltas, notas){
    this.nome=nome;
    this.faltas=faltas;
    this.notas=notas;  
    this.calcularMedia = function(){
        let somaNotas = this.notas.reduce((acumulador, valor) =>{
            return acumulador+valor;
        });
        return somaNotas/this.notas.length;
    }
    this.somarFaltas = function(){
        return this.faltas=this.faltas+1;
    }
};

//teste
//console.log(aluno1.calcularMedia());

module.exports=Aluno;

