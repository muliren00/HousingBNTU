import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const FloorActions = {
    loadFloor() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_FLOORS_REQUEST
        });

        api.listFloors()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_FLOORS_SUCCESS,
                notes: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_FLOORS_FAIL,
                error: err
            })
        );
    },

    createFloor(note) {
        api.createFloor(note)
        .then(() =>
            console.log('oke create'),
            this.loadFloor()
        )
        .catch(err =>
            console.error(err)
        );
    },

    deleteFloor(noteId) {
        api.deleteFloor(noteId)
        .then(() =>
            console.log('oke delete'),
            this.loadFloor()
        )
        .catch(err =>
            console.error(err)
        );
    },

    updateFloor(noteId, note) {
        // api.deleteHousing(noteId);
        api.updateFloor(noteId, note)
            .then(() =>
                this.loadFloor()
            )
            .catch(err =>
                console.error(err)
            );
    }
};

export default FloorActions;
