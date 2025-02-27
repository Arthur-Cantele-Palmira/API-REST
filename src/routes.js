import { Router } from 'express'
import AlunoController from './app/controllers/AlunoController.js'

const router = Router()

router.post('/alunos', AlunoController.store)
router.get('/alunos', AlunoController.index)
router.get('/alunos/:id', AlunoController.show)
router.put('/alunos/:id', AlunoController.update)
router.delete('/alunos/:id', AlunoController.delete)

export default router