import Mongo from 'mongoose'

const MembersScheme = Mongo.model('members', new Mongo.Schema({
    name: {
        type: String,
        required: [true, "Ingrese un nombre"],
    }
}))

export default MembersScheme