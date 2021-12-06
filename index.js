import App from "./App.js";
import mongoose from 'mongoose'

const port = process.env.PORT || 4000;

mongoose.connect('mongodb://mongo:27017/db')
    .then(() => {
        App.listen(port, () => console.log(`App listening in port ${port}`));
    })
    .catch(err => console.error(err));
