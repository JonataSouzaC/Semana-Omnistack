
const express = require('express');
const routes = require('./routes');
const cors = requires('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
	
	GET: Buscar/listar uma informação do back-end
	POST: Criar uma informação no back-end
	PUT: Alterar uma informação no back-end
	DELETE: Deletar uma informação no back-end
*/

/*
	Tipos de parametros:
	Query Params: Parametros nomeados enviados na rota após "?" (filtros, paginação)
	Route Params: Parametros utilizados para identificar recursos
	Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
*/


app.listen(3333);
