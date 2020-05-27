import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Housing';
import {number} from "prop-types";

const Housing = mongoose.model('Housing');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listHousings(id) {
    return Housing.find();
}

export function createHousing(data) {
    const housing = new Housing({
        title: data.title,
        myId: data.myId,
        countOfFloors : data.countOfFloors,
        numberHousing : data.numberHousing,
        createdAt: new Date()
    });

    return housing.save();
}

export function deleteHousing(id) {
    return Housing.findById(id).deleteOne();
}

export function updateHousing(data, id) {

    // const housing = {
    //     title: data.title,
    //     countOfFloors : data.countOfFloors,
    //     numberHousing : data.numberHousing,
    // };

    return Housing.findOneAndUpdate(
        {_id: data.myId},
        {$set:
                {
                    title: data.title,
                    countOfFloors : data.countOfFloors,
                    numberHousing : data.numberHousing
                }
        },
        function(err, result){

            console.log(data.myId);

        }
        );
}

