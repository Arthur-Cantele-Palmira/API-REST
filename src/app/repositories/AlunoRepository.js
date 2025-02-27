import Database from '../database/conexao.js';

class AlunoRepository {
    // CRUD
    create(aluno) {
        const sql = "INSERT INTO alunos SET ?;";
        return Database.consult(sql, aluno, 'Aluno não cadastrado!');
    }

    findAll() {
        const sql = "SELECT * FROM alunos;";
        return Database.consult(sql, [], 'Nenhum aluno encontrado!');
    }

    findById(id) {
        const sql = "SELECT * FROM alunos WHERE id=?;";
        return Database.consult(sql, [id], 'Não encontramos esse Id');
    }

    update(aluno, id) {
        const sql = "UPDATE alunos SET ? WHERE id=?;";
        return Database.consult(sql, [aluno, id], 'Aluno não foi modificado');
    }

    delete(id) {
        const sql = "DELETE FROM alunos WHERE id=?;";
        return Database.consult(sql, [id], 'Aluno não foi removido');
    }
}

export default new AlunoRepository();
