import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const HousingActions = {
    loadHousing() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_NOTES_REQUEST
        });

        api.listHousings()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_NOTES_SUCCESS,
                notes: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_NOTES_FAIL,
                error: err
            })
        );
    },

    createHousing(note) {
        api.createHousing(note)
        .then(() =>
            this.loadHousing()
        )
        .catch(err =>
            console.error(err)
        );
    },

    deleteHousing(noteId) {
        api.deleteHousing(noteId)
        .then(() =>
            this.loadHousing()
        )
        .catch(err =>
            console.error(err)
        );
    },

    updateHousing(noteId, note) {
        // api.deleteHousing(noteId);
        api.updateHousing(noteId, note)
            .then(() =>
                this.loadHousing()
            )
            .catch(err =>
                console.error(err)
            );
    }
};

export default HousingActions;
