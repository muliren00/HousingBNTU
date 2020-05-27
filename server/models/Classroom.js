import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ClassroomSchema = new Schema({

    numberClassroom : {type: Number, required: true },
    nameClassroom : {type: String},
    typeOfClassroom : {type: String},
    status : {type: String},
    numberOfWorkspaceForStudent : {type: Number},
    numberOfWorkspaceForWorkers : {type: Number},
    totalNumberOfWorkspace : {type: Number},
    numberHousing : {type: Number, required: true },
    numberFloor : {type: Number, required: true },


});

mongoose.model('Classroom', ClassroomSchema);