
const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SectionController = require('./controllers/SectionController');

const routes = express.Router();

routes.post('/sections',SectionController.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs',  OngController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete );

routes.get('/profile', ProfileController.index);

module.exports = routes;