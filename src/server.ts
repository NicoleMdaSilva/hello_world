import * as express from 'express';

const app = express();

const port = 3000;

app.get('/', (request, response) => {
    response.send('Hello world!'); //Estamos setando o que o usuario vai receber 
});


app.get('/bsm', (request, response) => {
    response.send('Mentalidades: Persistências,Responsabilidade Pessoal, Orientação ao futuro, Mentalidade de crescimento' +
     '<br>Habilidade: Trabalho em Equipe, Atenção aos detalhes, Proatividade, Comunicação'); 
});

app.get('/objetivo', (request, response) => {
    response.send('Aprender e desenvolver banco de dados');
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});