const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

const agendamentoController = require('./controllers/agendamentoController');


app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));


app.get('/', agendamentoController.getIndexView);
app.post('/agendar_consulta', agendamentoController.postAgendarConsulta);

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando em http://localhost:'+PORT);
});