import React from 'react';
import {Button, ListGroupItem, Panel} from 'react-bootstrap';
import ClassroomActions from "../actions/ClassroomActions";
import ClassroomModal from "./classroomModal.jsx";
import DeleteModal from "./deleteModal.jsx";


class Classroom extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            modalShow: false,
            modalShowDelete: false,
        };
    }

    handleClassroomUpdate(noteData) {
        ClassroomActions.updateClassroom(noteData);
    }

    render() {

        let modalClose = () => this.setState({modalShow: false});
        let modalCloseDelete = () => this.setState({modalShowDelete: false});
        const style = { backgroundColor: this.props.color };

        return (

            <ListGroupItem href="#link1">
                {this.props.numberClassroom} аудитория

                <Button
                    bsStyle="link"
                        onClick={() => this.setState({modalShowDelete : true})}
                >
                    Удалить
                </Button>

                <Button
                    bsStyle="link"
                    onClick={() => this.setState({modalShow : true})}>
                    Изменить
                </Button>

                <ClassroomModal
                    show={this.state.modalShow}
                    onHide={modalClose}
                    onNoteAdd={this.handleClassroomUpdate}

                    numberClassroom={this.props.numberClassroom}
                    nameClassroom={this.props.nameClassroom}
                    typeOfClassroom={this.props.typeOfClassroom}
                    status={this.props.status}
                    numberOfWorkspaceForStudent={this.props.numberOfWorkspaceForStudent}
                    numberOfWorkspaceForWorkers={this.props.numberOfWorkspaceForWorkers}
                    totalNumberOfWorkspace={this.props.totalNumberOfWorkspace}
                    numberFloor={this.props.numberFloor}
                    numberHousing={this.props.numberHousing}
                    myId={this.props.myId}

                    housing={this.props.housing}
                    floors={this.props.floors}
                />

                <DeleteModal
                    show={this.state.modalShowDelete}
                    onHide={modalCloseDelete}
                    onDelete={this.props.onDelete}
                />

            </ListGroupItem>


        );
    }
};

export default Classroom;
