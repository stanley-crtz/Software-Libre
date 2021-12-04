const { Schema, model } = require('mongoose')

const MembersScheme = model('members', new Schema({
    name: {
        type: String,
        required: [true, "Ingrese un nombre"],
    }
}))

export default MembersScheme