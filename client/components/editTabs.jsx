import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import HousingEditor from './housingEditor.jsx';
import FloorEditor from './floorEditor.jsx';
import HousingActions from "../actions/HousingsActions";
import FloorActions from '../actions/FloorActions';
import ClassroomEditor from "./classroomEditor.jsx";
import ClassroomActions from '../actions/ClassroomActions';


class EditTabs extends React.Component{

    constructor(props){
        super(props);
    }

    handleHousingAdd(noteData) {
        HousingActions.createHousing(noteData);
    }

    handleFloorAdd(noteData) {
        FloorActions.createFloor(noteData);
    }

    handleClassroomAdd(noteData) {
        ClassroomActions.createClassroom(noteData);
    }

    render(){
        return(
            <Tabs defaultActiveKey={0} animation={false} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Новый корпус">
                    <HousingEditor
                        onNoteAdd={this.handleHousingAdd}
                    />
                </Tab>
                <Tab eventKey={2} title="Новый этаж">
                    <FloorEditor
                        onNoteAdd={this.handleFloorAdd}
                        housing={this.props.housing}
                    />
                </Tab>
                <Tab eventKey={3} title="Новая аудитория">
                    <ClassroomEditor
                        onNoteAdd = {this.handleClassroomAdd}
                        housing = {this.props.housing}
                        floors = {this.props.floors}
                    />
                </Tab>
                <Tab eventKey={4} title="-"> </Tab>
            </Tabs>
        )
    }
}

export default EditTabs;