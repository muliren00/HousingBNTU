import React from 'react';

import NotesStore from '../stores/NotesStore';
import FloorStore from '../stores/FloorStore';
import ClassroomStore from '../stores/ClassroomStore';
import HousingActions from '../actions/HousingsActions';
import FloorActions from '../actions/FloorActions';
import ClassroomActions from '../actions/ClassroomActions';

import EditTabs from './editTabs.jsx';
import AppHeader from './appHeader.jsx';
import HousingList from './housingList.jsx';

import './App.less';

// import HousingEditor from "./housingEditor";
import {PageHeader} from "react-bootstrap";
import ToolsBar from "./toolsbar.jsx";

function getStateFromFlux() {
    return {
        isLoading: NotesStore.isLoading(),
        isLoading2: FloorStore.isLoading(),
        isLoading3: ClassroomStore.isLoading(),
        notes: NotesStore.getHousings(),
        floors: FloorStore.getFloors(),
        classrooms: ClassroomStore.getClassrooms()
    };
}

const App = React.createClass({
    getInitialState() {
        return getStateFromFlux();
    },

    componentWillMount() {
        HousingActions.loadHousing();
        FloorActions.loadFloor();
        ClassroomActions.loadClassroom();

    },

    componentDidMount() {
        NotesStore.addChangeListener(this._onChange);
        FloorStore.addChangeListener(this._onChange);
        ClassroomStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange);
        FloorStore.removeChangeListener(this._onChange);
        ClassroomStore.removeChangeListener(this._onChange);
    },

    handleHousingDelete(note) {
        HousingActions.deleteHousing(note.id);
    },

    handleFloorDelete(note) {
        FloorActions.deleteFloor(note.id);
    },

    handleClassroomDelete(note) {
        ClassroomActions.deleteClassroom(note.id);
    },

    // handleHousingUpdate(note) {
    //     HousingActions.updateHousing(note.id);
    // },

    render() {
        return (
            <div className='App'>
                {/*<h2 className='App__header'>NotesApp</h2>*/}
                <AppHeader/>
                <EditTabs
                    housing={this.state.notes}
                    floors={this.state.floors}
                />
                <PageHeader>
                    <small>Список корпусов БНТУ</small>
                </PageHeader>
                {/*<ToolsBar notes={this.state.notes}/>*/}
                {/*<NoteEditor onNoteAdd={this.handleNoteAdd} />*/}
                {/*<NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />*/}

                <ToolsBar
                    notes={this.state.notes}
                    floors={this.state.floors}
                    classrooms={this.state.classrooms}
                    onHousingDelete={this.handleHousingDelete}
                    // onHousingUpdate={this.handleHousingUpdate}
                    onFloorDelete={this.handleFloorDelete}
                    onClassroomDelete={this.handleClassroomDelete}
                />


            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default App;
