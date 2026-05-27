import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

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
  let users;

  if (req.query.email || req.query.name || req.query.password) {
    users = await prisma.user.findMany({
      where: {
        email: req.query.email || undefined,
        name: req.query.name || undefined,
        password: req.query.password || undefined,
      },
    });
  } else {
    users = await prisma.user.findMany();
  }

  res.status(200).json(users);
});

app.put("/usuarios/:id", async (req, res) => {
  await prisma.user.update({
    where: {
      id: Number(req.params.id),
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
      id: Number(req.params.id),
    },
  });

  res.status(200).json({ message: "Usuario deletado com sucesso" });
});

app.listen(3000);
