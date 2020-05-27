import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _classrooms = [];
let _loadingError = null;
let _isLoading = true;

function formatClassroom(note) {
    return {
        id: note._id,
        numberClassroom : note.numberClassroom,
        nameClassroom: note.nameClassroom,
        typeOfClassroom : note.typeOfClassroom,
        status : note.status,
        numberOfWorkspaceForStudent : note.numberOfWorkspaceForStudent,
        numberOfWorkspaceForWorkers : note.numberOfWorkspaceForWorkers,
        totalNumberOfWorkspace : note.totalNumberOfWorkspace,
        numberHousing : note.numberHousing,
        numberFloor : note.numberFloor,
    };
}

const TasksStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getClassrooms() {
        return _classrooms;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_CLASSROOMS_REQUEST: {
            _isLoading = true;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_CLASSROOMS_SUCCESS: {
            _isLoading = false;
            _classrooms = action.notes.map( formatClassroom );
            _loadingError = null;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_CLASSROOMS_FAIL: {
            _loadingError = action.error;

            TasksStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default TasksStore;
