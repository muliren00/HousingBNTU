import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FloorSchema = new Schema({

    numberFloor : {type: Number, required: true },
    countOfClassrooms : {type: Number, required: true },
    department : {type: String},
    numberHousing : {type: Number, required: true },
    imageFloor: {type: String}
});

mongoose.model('Floor', FloorSchema);