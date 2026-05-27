# 🔐 Página de Login

Sistema de login e cadastro com front-end em React e back-end em Node.js + Prisma + SQLite.

---

## 🚀 Como rodar

### 1. Back-end (API)

```bash
cd API
npm install
npm start
```

O servidor roda em `http://localhost:3000`.

### 2. Front-end

```bash
cd "cadastro de usuarios"
npm install
npm run dev
```

Acessar em `http://localhost:5173`.

### 3. Ver o banco de dados

```bash
cd API
npx prisma studio
```

Abrir `http://localhost:5555`.

---

## 📦 Tecnologias

| Camada     | Tecnologia                  |
| ---------- | --------------------------- |
| Front-end  | React 19, Vite              |
| Back-end   | Node.js, Express 5          |
| Banco      | SQLite via Prisma ORM       |
| Ícones     | FontAwesome                 |

---

## 🧱 Rotas da API

| Método | Rota              | Descrição              |
| ------ | ----------------- | ---------------------- |
| POST   | `/usuarios`       | Criar novo usuário     |
| GET    | `/usuarios`       | Listar usuários        |
| GET    | `/usuarios?email=&password=` | Buscar usuário |
| PUT    | `/usuarios/:id`   | Atualizar usuário      |
| DELETE | `/usuarios/:id`   | Deletar usuário        |

---

## ✨ Funcionalidades

- Alternância animada entre Sign In e Sign Up
- Cadastro de usuário com nome, email e senha
- Login com validação via API
- Feedback visual de sucesso/erro
- Banco SQLite local (sem instalação de servidor)

---

## 🛠️ Melhorias futuras

- Hash de senhas (bcrypt)
- Sessão/JWT para autenticação
- Responsividade mobile
- Validação de campos no front
- Deploy em produção com MongoDB Atlas
