import React from 'react';

import {ListGroupItem, PanelGroup} from 'react-bootstrap';
import Mhousing from './mhousing.jsx';
import FloorActions from '../actions/FloorActions';

import './NotesGrid.less';
import SearchPlugin from "./searchPlugin.jsx";
import HousingList from "./housingList";


class SearchHousing extends React.Component{

    constructor(props){
        super(props);
        this.state = { items: this.props.notes};

        this.filterList = this.filterList.bind(this);
    }

    filterList(text){
        var filteredList = this.props.notes.filter(function(item){
            return (
                item.title.toLowerCase().search(text.toLowerCase())!== -1
                ||
                item.numberHousing.search(text)!== -1
            );
        });
        this.setState({items: filteredList});
    }

    render() {

        let floorsNew = [];
        return (
            <div>
                <SearchPlugin filter={this.filterList} />

                <HousingList
                    notes={this.state.notes}
                    floors={this.state.floors}
                    classrooms={this.state.classrooms}
                    onHousingDelete={this.handleHousingDelete}
                    // onHousingUpdate={this.handleHousingUpdate}
                    onFloorDelete={this.handleFloorDelete}
                    onClassroomDelete={this.handleClassroomDelete}
                />
                    {
                        this.state.items.sort((a, b) => +a.numberHousing > +b.numberHousing ? 1 : -1).map(note =>

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
            </div>

        );
    }
}

export default SearchHousing;
