import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json()); // Middleware para analisar o corpo da requisição como JSON

app.post("/usuarios", async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    },
  });

  res.status(201).json(req.body);
});

app.get("/usuarios", async (req, res) => {
  let users = []

  if(req.query){
    users = await prisma.user.findMany({
      where: {
        email: req.query.email,
        name: req.query.name,
        password: req.query.password
      }
    })
  } else {
    users = await prisma.user.findMany();
  }
  
   
  res.status(200).json(users);
});

app.put("/usuarios/:id", async (req, res) => {
  await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    },
  });

  res.status(201).json(req.body);
});

app.delete("/usuarios/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  })

  res.status(200).json({ message: 'Usuario deletado com sucesso' });
});

app.listen(3000);

/*

 - criar um usuario
 - listar usuarios
 - editar usuario
 - deletar usuario
 
  
 - usuario:  gustavooliv196
 - Senha: *14882010Gus

*/
