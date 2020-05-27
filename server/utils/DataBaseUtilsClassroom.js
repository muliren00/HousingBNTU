import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Classroom';

const Classroom = mongoose.model('Classroom');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listClassrooms(id) {
    return Classroom.find();
}

export function createClassroom(data) {
    const classroom = new Classroom({
        numberClassroom : data.numberClassroom,
        nameClassroom : data.nameClassroom,
        typeOfClassroom : data.typeOfClassroom,
        status : data.status,
        numberOfWorkspaceForStudent : data.numberOfWorkspaceForStudent,
        numberOfWorkspaceForWorkers : data.numberOfWorkspaceForWorkers,
        totalNumberOfWorkspace : data.totalNumberOfWorkspace,
        numberHousing : data.numberHousing,
        numberFloor : data.numberFloor,

    });

    return classroom.save();
}

export function deleteClassroom(id) {
    return Classroom.findById(id).remove();
}

export function updateClassroom(data) {

    return Classroom.findOneAndUpdate(
        {_id: data.myId},
        {$set:
                {
                    numberClassroom: data.numberClassroom,
                    nameClassroom: data.nameClassroom,
                    typeOfClassroom: data.typeOfClassroom,
                    status : data.status,
                    numberOfWorkspaceForStudent : data.numberOfWorkspaceForStudent,
                    numberOfWorkspaceForWorkers : data.numberOfWorkspaceForWorkers,
                    totalNumberOfWorkspace : data.totalNumberOfWorkspace,
                    numberFloor: data.numberFloor,
                    numberHousing: data.numberHousing

                }
        },
        function(err, result){

            console.log(data.myId);

        }
    );
}

