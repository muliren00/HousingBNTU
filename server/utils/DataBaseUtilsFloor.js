import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Floor';

const Floor = mongoose.model('Floor');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listFloors(id) {
    return Floor.find();
}

export function createFloor(data) {
    const floor = new Floor({
        numberFloor : data.numberFloor,
        countOfClassrooms : data.countOfClassrooms,
        department : data.department,
        numberHousing : data.numberHousing,
        imageFloor: data.imageFloor

    });

    return floor.save();
}

export function deleteFloor(id) {
    return Floor.findById(id).remove();
}

export function updateFloor(data) {

    return Floor.findOneAndUpdate(
        {_id: data.myId},
        {$set:
                {
                    numberFloor: data.numberFloor,
                    countOfClassrooms : data.countOfClassrooms,
                    department : data.department,
                    numberHousing: data.numberHousing,
                    imageFloor: data.imageFloor,

                }
        },
        function(err, result){

            console.log(data.myId);

        }
    );
}

