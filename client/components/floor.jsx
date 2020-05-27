import React from 'react';
import {Grid, Row, Col, Image, Panel, Button} from 'react-bootstrap';

// import {} from '../../public/image/';
import ClassroomList from "./classroomList.jsx";
import FloorActions from "../actions/FloorActions";
import FloorModal from "./floorsModal.jsx";
import ImageModal from "./imageModal.jsx";
import "./floor.less";

class Floor extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            modalShow: false,
            modalShowImage: false,
        };
    }

    handleFloorUpdate(noteData) {
        FloorActions.updateFloor(noteData);
    }

    render() {

        let modalClose = () => this.setState({modalShow: false});
        let modalCloseImage = () => this.setState({modalShowImage: false});
        let imageSrc = `../image/${this.props.imageFloor}` ;

        return (

            <Panel eventKey={this.props.eventKey}>
                <Panel.Heading>
                    <Panel.Title toggle>
                        {this.props.numberFloor} этаж

                        <Button bsStyle="link" onClick={this.props.onDelete}> Удалить </Button>

                        <Button
                            bsStyle="link"
                            onClick={() => this.setState({modalShow : true})}>
                            Изменить
                        </Button>

                        <FloorModal
                            show={this.state.modalShow}
                            onHide={modalClose}
                            onNoteAdd={this.handleFloorUpdate}

                            numberFloor={this.props.numberFloor}
                            countOfClassrooms={this.props.countOfClassrooms}
                            department={this.props.department}
                            numberHousing={this.props.numberHousing}
                            imageFloor={this.props.imageFloor}
                            myId={this.props.myId}

                            housing={this.props.housing}

                        />
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>

                    <Grid>
                        {
                            this.props.imageFloor ?

                                <Row>

                                    <Col xs={4} md={5}>
                                        <div className={'floor-table'}>
                                            <ClassroomList
                                                classrooms={this.props.classrooms}
                                                onClassroomDelete={this.props.onClassroomDelete}

                                                housing={this.props.housing}
                                                floors={this.props.floors}
                                            />
                                        </div>

                                    </Col>

                                    <Col xs={6} md={7}>

                                        <a
                                            // bsStyle="link"
                                            onClick={() => this.setState({modalShowImage : true})}>
                                            <Image
                                                alt={imageSrc}
                                                src={require(`../image/${this.props.imageFloor}`)}
                                                // onClick={() => this.setState({modalShowImage : true})}
                                                width="100%"
                                                // height="280"
                                                // rounded
                                            />
                                        </a>

                                        <ImageModal
                                            show={this.state.modalShowImage}
                                            onHide={modalCloseImage}
                                            imageFloor={this.props.imageFloor}
                                        />
                                    </Col>


                                </Row>

                                :

                                <ClassroomList
                                    classrooms={this.props.classrooms}
                                    onClassroomDelete={this.props.onClassroomDelete}

                                    housing={this.props.housing}
                                    floors={this.props.floors}
                                />
                        }

                    </Grid>

                </Panel.Body>
            </Panel>


        );
    }
};

export default Floor;
