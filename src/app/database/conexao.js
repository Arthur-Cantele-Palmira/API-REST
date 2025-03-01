import 'dotenv/config'

import mysql from 'mysql2';

class Database {
    constructor() {
        this.conexao = mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        this.conectar();
    }

    conectar() {
        this.conexao.connect((erro) => {
            if (erro) {
                console.error('Erro ao conectar ao banco de dados:', erro);
            } else {
                console.log('✅ Conexão bem-sucedida ao banco de dados.');
            }
        });
    }

    /**
     * Executa uma consulta SQL
     * @param {string} sql - Query SQL a ser executada
     * @param {Array|Object} [valores='[]'] - Parâmetros da consulta
     * @param {string} [mensagemReject='Erro ao executar a consulta'] - Mensagem de erro personalizada
     * @returns {Promise<any>}
     */
    consult(sql, valores, mensagemReject) {
        return new Promise((resolve, reject) => {
            this.conexao.query(sql, valores, (error, result) => {
                if (error) {
                    console.error('❌', mensagemReject, error)
                    return reject(mensagemReject)
                }
                resolve(result)
            })
        })
    }
}

export default new Database()
