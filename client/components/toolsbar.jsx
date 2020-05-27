import React from 'react';
import {Navbar, FormControl, FormGroup, Button, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap'
import './toolsbar.less';
import SearchPlugin from "./searchPlugin.jsx";
import HousingList from "./housingList.jsx";
import HousingActions from "../actions/HousingsActions";
import FloorActions from "../actions/FloorActions";
import ClassroomActions from "../actions/ClassroomActions";

class ToolsBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.filterList = this.filterList.bind(this);
        this.sortMyArray = this.sortMyArray.bind(this);
    }

    componentWillReceiveProps() {
        this.setState({items: this.props.notes});
    }

    filterList(text) {
        let filteredList = this.props.notes.filter(function (item) {
            return (
                item.title.toLowerCase().search(text.target.value.toLowerCase()) !== -1
                ||
                item.numberHousing.search(text.target.value) !== -1
            );
        });
        this.setState({items: filteredList});
    }

    sortMyArray(sortBy) {
        let sortList = this.state.items;
        sortList.sort((a, b) => {
            if (sortBy === 'numberHousing') {
                return +a.numberHousing > +b.numberHousing ? 1 : -1;
            } else if (sortBy === 'title') {
                return a.title > b.title ? 1 : -1
            } else if (sortBy === 'countOfFloors') {
                return +a.countOfFloors < +b.countOfFloors ? 1 : -1;
            }
        });

        this.setState({items: sortList})
    };

    render() {
        return (
            <div>
                <Navbar className={'tools'}>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>

                            <FormGroup>
                                <FormControl
                                    type="text"
                                    placeholder="поиск"
                                    onChange={this.filterList}
                                />
                            </FormGroup>{' '}


                            <FormGroup>
                                <ButtonToolbar>
                                    <FormControl
                                        componentClass="select"
                                        placeholder="Сортировка"
                                        onChange={(e) => {
                                            this.sortMyArray(e.target.value)
                                        }}
                                    >
                                        <option selected>Сортировка</option>
                                        <option value="numberHousing">По номеру</option>
                                        <option value="title">По названию</option>
                                        <option value="countOfFloors">По вместимости</option>
                                    </FormControl>
                                </ButtonToolbar>
                            </FormGroup>{' '}


                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>

                <HousingList
                    notes={this.state.items}
                    floors={this.props.floors}
                    classrooms={this.props.classrooms}
                    onHousingDelete={this.props.onHousingDelete}
                    onFloorDelete={this.props.onFloorDelete}
                    onClassroomDelete={this.props.onClassroomDelete}
                />
            </div>

        )
    }
}

export default ToolsBar;