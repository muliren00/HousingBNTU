import React, {useState} from 'react';
import {ListGroup, Pagination} from 'react-bootstrap';
import Classroom from './classroom.jsx';
import AppPagination from "./appPagination.jsx";


class ClassroomList extends React.Component{

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         activePage: page ? page : 1
    //     };
    // }

    // handleNextPage(activePage) {
    //     this.setState({ activePage });
    //     // fetch data for the next page
    // }


    render(){

        // const totalPages = 12;

        return(

            <div className='container mt-5'>

                <ListGroup>
                    {
                        this.props.classrooms.sort((a, b) => +a.numberClassroom > +b.numberClassroom ? 1 : -1).map( classroom =>
                            <Classroom
                                key={classroom.id}
                                numberClassroom={classroom.numberClassroom}
                                onDelete={this.props.onClassroomDelete.bind(null, classroom)}

                                nameClassroom={classroom.nameClassroom}
                                typeOfClassroom={classroom.typeOfClassroom}
                                status={classroom.status}
                                numberOfWorkspaceForStudent={classroom.numberOfWorkspaceForStudent}
                                numberOfWorkspaceForWorkers={classroom.numberOfWorkspaceForWorkers}
                                totalNumberOfWorkspace={classroom.numberOfWorkspaceForStudent + classroom.numberOfWorkspaceForWorkers}
                                numberFloor={classroom.numberFloor}
                                numberHousing={classroom.numberHousing}
                                myId={classroom.id}

                                housing={this.props.housing}
                                floors={this.props.floors}
                            />
                        )
                    }

                </ListGroup>

                {/*{items}*/}

                {/*{totalPages > 1 &&*/}
                {/*<div className='pull-right'>*/}
                {/*    <AppPagination*/}
                {/*        totalPages={totalPages}*/}
                {/*        currentPage={this.state.activePage}*/}
                {/*        onChange={this.handleNextPage}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*}*/}

            </div>

        )
    }
}

export default ClassroomList;
