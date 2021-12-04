import App from "./App.js";
import mongoose from 'mongoose'

const PORT = process.env.PORT || 4000;

mongoose.connect('mongodb://mongo:27017/db')
    .then(() => {
        App.listen(PORT, () => console.log(`App listening in port ${PORT}`));
    })
    .catch(err => console.error(err));
