import React from 'react';

import {ListGroupItem, PanelGroup} from 'react-bootstrap';
import Mhousing from './mhousing.jsx';
import FloorActions from '../actions/FloorActions';

import './NotesGrid.less';


class HousingList extends React.Component{


    render() {

        let floorsNew = [];
        return (
            <div>

                <PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="0">

                    {
                        this.props.notes.map(note =>

                            <Mhousing
                                key={note.id}
                                eventKey={note.id}
                                nameHousing={note.title}
                                myId={note.id}
                                numberHousing={note.numberHousing}
                                countOfFloors={note.countOfFloors}

                                housing={this.props.notes}
                                floors={floorsNew =  this.props.floors.filter(floor => floor.numberHousing == note.numberHousing)}
                                classrooms={this.props.classrooms}


                                onDelete={this.props.onHousingDelete.bind(null, note)}
                                // onUpdated={this.props.onHousingUpdate.bind(null, note)}
                                onFloorDelete={this.props.onFloorDelete}
                                onClassroomDelete={this.props.onClassroomDelete}
                            />

                        )
                    }
                </PanelGroup>
            </div>


        );
    }
};

export default HousingList;
