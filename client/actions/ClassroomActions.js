import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const ClassroomActions = {
    loadClassroom() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_CLASSROOMS_REQUEST
        });

        api.listClassrooms()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_CLASSROOMS_SUCCESS,
                notes: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_CLASSROOMS_FAIL,
                error: err
            })
        );
    },

    createClassroom(note) {
        api.createClassroom(note)
        .then(() =>
            console.log('oke create'),
            this.loadClassroom()
        )
        .catch(err =>
            console.error(err)
        );
    },

    deleteClassroom(noteId) {
        api.deleteClassroom(noteId)
        .then(() =>
            console.log('oke delete'),
            this.loadClassroom()
        )
        .catch(err =>
            console.error(err)
        );
    },

    updateClassroom(noteId, note) {
        // api.deleteHousing(noteId);
        api.updateClassroom(noteId, note)
            .then(() =>
                this.loadClassroom()
            )
            .catch(err =>
                console.error(err)
            );
    }
};

export default ClassroomActions;
