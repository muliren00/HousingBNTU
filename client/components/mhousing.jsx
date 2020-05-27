import React from 'react';
import {Panel, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import './mhousing.less';
import FloorList from './floorList.jsx';
import HousingModal from "./housingModal.jsx";
import HousingActions from "../actions/HousingsActions";
import ClassroomActions from "../actions/ClassroomActions";

class Mhousing extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            modalShow: false,
        };
    }

    handleHousingAdd(noteData) {
        HousingActions.updateHousing(noteData);
    }

    render() {
        let modalClose = () => this.setState({modalShow: false});

        return (
            <Panel eventKey={this.props.eventKey}>
                <Panel.Heading>
                    <Panel.Title toggle>
                        №{this.props.numberHousing} "{this.props.nameHousing}"
                        <Button bsStyle="link" onClick={this.props.onDelete}> Удалить </Button>
                        {/*<span className='Note__del-icon' onClick={this.props.onDelete}> × </span>*/}
                        <Button
                            bsStyle="link"
                            onClick={() => this.setState({modalShow : true})}>
                            Свойства
                        </Button>
                        <HousingModal

                            show={this.state.modalShow}
                            onHide={modalClose}
                            onNoteAdd={this.handleHousingAdd}

                            title={this.props.nameHousing}
                            numberHousing={this.props.numberHousing}
                            countOfFloors={this.props.countOfFloors}
                            myId={this.props.myId}
                        />
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    <FloorList

                        classrooms={this.props.classrooms}
                        onFloorDelete={this.props.onFloorDelete}
                        onClassroomDelete={this.props.onClassroomDelete}

                        housing={this.props.housing}
                        floors={this.props.floors}
                    />


                </Panel.Body>
            </Panel>

        );
    }
};

export default Mhousing;
