import React from 'react';
import {ListGroup, PanelGroup} from 'react-bootstrap';
import Floor from './floor.jsx';


class FloorList extends React.Component{



    render(){

        let classroomsNew = [];

        return(
            <PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="0">
                {
                    this.props.floors.sort((a, b) => +a.numberFloor > +b.numberFloor ? 1 : -1).map(floors =>
                        <Floor
                            key={floors.id}
                            eventKey={floors.id}

                            // link={'9'}
                            numberFloor={floors.numberFloor}
                            classrooms={classroomsNew = this.props.classrooms.filter(classroom =>
                                classroom.numberFloor == floors.numberFloor &&
                                classroom.numberHousing == floors.numberHousing
                            )}

                            myId={floors.id}
                            numberHousing={floors.numberHousing}
                            countOfClassrooms={floors.countOfClassrooms}
                            department={floors.department}
                            imageFloor={floors.imageFloor.split('\\')[floors.imageFloor.split('\\').length-1]}

                            onDelete={this.props.onFloorDelete.bind(null, floors)}
                            onClassroomDelete={this.props.onClassroomDelete}

                            housing={this.props.housing}
                            floors={this.props.floors}
                        />
                    )
                }
            </PanelGroup>
        )
    }
}

export default FloorList;
