import AlunoRepository from '../repositories/AlunoRepository.js'

class AlunoController {

    async index(req, res) {
        const row = await AlunoRepository.findAll()
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await AlunoRepository.findById(id)
        res.json(row)
    }

    async store(req, res) {
        const aluno = req.body
        const row = await AlunoRepository.create(aluno)
        res.json(row)
    }

    async update(req, res) {
        const aluno = req.body
        const id = req.params.id
        const row = await AlunoRepository.update(aluno, id)
        res.json(row)
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await AlunoRepository.delete(id)
        res.json(row)
    }

}

//Padrão Singleton
export default new AlunoController()