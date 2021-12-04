import Express from 'express';
import SearchFiles from '../Class/SearchFiles.js';

const Routes = Express.Router();

Routes.get(
    '/',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Home', 'index.html')
    )
)

Routes.get(
    '/registro',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Register', 'index.html')
    )
)



export default Routes;