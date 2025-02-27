import express from 'express'
import routes from './routes.js'

const app = express()

app.use(routes)

app.use(express.json()) //No express, ler body com JSON

export default app
