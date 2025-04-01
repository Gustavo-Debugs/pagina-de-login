import express from 'express';


const app = express();

app.get('/usuarios', (request, response) =>{
  res.send('ok, deu bom')
})

app.listen(3000)


/*
  1) tipo de rota / metodo HTTP
  2) ENDEREÇO DA ROTA
*/