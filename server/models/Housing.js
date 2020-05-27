import mongoose from "mongoose";

const Schema = mongoose.Schema;

const HousingSchema = new Schema({
    title     : { type: String, required: true  },
    countOfFloors : {type: String, required: true},
    numberHousing : {type: String, required: true},
    myId      : { type: String},
    createdAt : { type: Date }
});

mongoose.model('Housing', HousingSchema);