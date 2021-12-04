import App from "./App.js";
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;

mongoose.connect('mongodb://mongo:27017/db')
    .then(() => {
        App.listen(PORT, () => console.log(`App listening in port ${PORT}`));
    })
    .catch(err => console.error(err));
