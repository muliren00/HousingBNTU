import React, {useState} from 'react';
import axios from 'axios';

import AppPagination from './appPagination.jsx';
import ClassroomList from './classroomList.jsx';



class PaginationClassroomList extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            classrooms: [],
            loading: false,
            currentPage: 1,
            postsPerPage: 5
        };

    }

    componentDidMount() {
        const getPosts = async () => {
            this.setState({ loading: true });
            const results = this.props.classrooms;
            this.setState({ classrooms: results});
            this.setState({ loading: false });
        };

        getPosts();
    }

    render(){

        const { currentPage, postsPerPage, classrooms, loading } = this.state;

        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = classrooms.slice(indexOfFirstPost, indexOfLastPost);

        const paginate = pageNum => this.setState({ currentPage: pageNum });

        const nextPage = () => this.setState({ currentPage: currentPage + 1 });

        const prevPage = () => this.setState({ currentPage: currentPage - 1 });

        return(

            <div className='container mt-5'>

                <ClassroomList
                    classrooms={currentPosts}
                    loading={loading}

                    // onClassroomDelete={this.props.onClassroomDelete}
                    // housing={this.props.housing}
                    // floors={this.props.floors}
                />

                <AppPagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />

            </div>


        )
    }
}

export default PaginationClassroomList;
