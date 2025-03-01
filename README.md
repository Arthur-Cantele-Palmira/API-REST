# API REST de Gestão Escolar 📚

API que realiza um **CRUD** completo usando como referência um banco de dados de uma escola.

## 🛠️ REQUISITOS 
**Node.js:** v22.13.1

**GIT:**  v2.47.1

**MySQL:** ``mysql -u root -p``, para testar se está instalado.

## 💡 RECOMENDADO
**Insomnia:** Para fazer testes da API.

## ⚙️ INSTALAÇÃO
Os pacotes usados foram: *express, mysql, dotenv e nodemon* para desenvolvimento.
#### Clone:
```bash
git clone https://github.com/Arthur-Cantele-Palmira/API-REST.git
```

#### Para instalar os pacotes:  
```bash
npm install
```
## 🚀 INICIALIZAÇÃO
Para iniciar o servidor basta usar o comando:

    npm run dev

## 🔌 ENDPOINTS
1. Criar um aluno
POST /alunos
Cadastra um novo aluno.

2. Listar todos os alunos
GET /alunos
Retorna todos os alunos cadastrados.

3. Buscar um aluno pelo ID
GET /alunos/:id
Retorna os dados de um aluno específico.

4. Atualizar um aluno
PUT /alunos/:id
Atualiza os dados de um aluno existente.

5. Excluir um aluno
DELETE /alunos/:id

## 🖼️ IMAGENS
![Image](https://github.com/user-attachments/assets/4bd5ac19-c443-47ad-9d2e-c57b29b65f0e)
O banco de dados `db_escola` contém uma tabela chamada `alunos`. A tabela `alunos` possui três colunas:

- `id`: Identificador único do aluno
- `nome`: Nome do aluno
- `sala`: Sala em que o aluno está matriculado

![image](https://github.com/user-attachments/assets/d958114f-eb80-4e11-8062-af8d0e410768)
