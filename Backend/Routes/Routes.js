import Express from 'express';
import AppController from '../Controllers/App.js';

let Router = Express.Router();

Router.get('/getMembers', AppController.getUsers);
Router.post('/setMember', AppController.setMember)

export default Router;