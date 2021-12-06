import Express from 'express';
import SearchFiles from '../Class/SearchFiles.js';

const Route = Express.Router();

Route.get(
    '/',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Home', 'index.html')
    )
)

Route.get(
    '/registro',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Register', 'index.html')
    )
)



export default Route;