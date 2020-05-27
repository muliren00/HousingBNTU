import React from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from "react-bootstrap";

import './editForm.less';

const ClassroomEditor = React.createClass({

    getInitialState() {
        return {
            numberClassroom: null,
            nameClassroom: '',
            typeOfClassroom: '',
            status : '',
            numberOfWorkspaceForStudent : null,
            numberOfWorkspaceForWorkers : null,
            totalNumberOfWorkspace : null,
            numberFloor: null,
            numberHousing: null
        };
    },

    handleNumberFloorChange(event) {
        this.setState({ numberFloor: event.target.value });
    },

    handleNumberClassroomChange(event) {
        this.setState({ numberClassroom: event.target.value });
    },

    handleNameClassroomChange(event) {
        this.setState({ nameClassroom: event.target.value });
    },

    handleTypeOfClassroomChange(event) {
        this.setState({ typeOfClassroom: event.target.value });
    },

    handleNumberHousingChange(event) {
        this.setState({ numberHousing: event.target.value });
    },

    handleStatusChange(event) {
        this.setState({ status: event.target.value });
    },

    handleNumberOfWorkspaceForStudentChange(event) {
        this.setState({ numberOfWorkspaceForStudent: event.target.value });
    },

    handleNumberOfWorkspaceForWorkersChange(event) {
        this.setState({ numberOfWorkspaceForWorkers: event.target.value });
    },

    handleTotalNumberOfWorkspaceChange(event) {
        this.setState({ totalNumberOfWorkspace: event.target.value });
    },

    handleClassroomAdd() {
        const newClassroom = {

            numberFloor: this.state.numberFloor,
            nameClassroom: this.state.nameClassroom,
            numberClassroom: this.state.numberClassroom,
            typeOfClassroom: this.state.typeOfClassroom,
            status : this.state.status,
            numberOfWorkspaceForStudent : this.state.numberOfWorkspaceForStudent,
            numberOfWorkspaceForWorkers : this.state.numberOfWorkspaceForWorkers,
            totalNumberOfWorkspace : this.state.totalNumberOfWorkspace,
            numberHousing: this.state.numberHousing
        };

        this.props.onNoteAdd(newClassroom);
        this.setState({ numberFloor: '', numberClassroom: '', typeOfClassroom: '', numberHousing: '', nameClassroom : '',
        status: '', numberOfWorkspaceForStudent: '', numberOfWorkspaceForWorkers: '', totalNumberOfWorkspace: '' });
    },

    handleHousingCancel() {


        this.setState({ numberFloor: '', numberClassroom: '', typeOfClassroom: '', numberHousing: '', nameClassroom : '',
            status: '', numberOfWorkspaceForStudent: '', numberOfWorkspaceForWorkers: '', totalNumberOfWorkspace: '' });
    },

    render(){
        return(
            <Form>

                <FormGroup controlId="formValidationNull" validationState={null}>
                    <ControlLabel>Название аудитории</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="название аудитории"
                        value={this.state.nameClassroom}
                        onChange={this.handleNameClassroomChange}
                    />
                </FormGroup>

                <Form componentClass="fieldset" inline>

                    <FormGroup controlId="formValidationNull" validationState={null}>
                        <ControlLabel>Номер аудитории</ControlLabel>{' '}
                        <FormControl
                            type="text"
                            placeholder="номер аудитории"
                            value={this.state.numberClassroom}
                            onChange={this.handleNumberClassroomChange}
                        />
                    </FormGroup>{' '}

                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Тип аудитории</ControlLabel>{' '}
                        <FormControl
                            componentClass="select"
                            value={this.state.typeOfClassroom}
                            onChange={this.handleTypeOfClassroomChange}
                        >
                            <option value=""></option>
                            <option value="Лекционная">Лекционная</option>
                            <option value="Лаборатория">Лаборатория</option>
                            <option value="Практическая">Практическая</option>
                            <option value="Служебная">Служебная</option>
                        </FormControl>
                    </FormGroup>{' '}

                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Статус аудитории</ControlLabel>{' '}
                        <FormControl
                            componentClass="select"
                            value={this.state.status}
                            onChange={this.handleStatusChange}
                        >
                            <option value=""></option>
                            <option value="Действующая">Действующая</option>
                            <option value="В ремонте">В ремонте</option>
                            <option value="Зарезервирована">Зарезервирована</option>
                        </FormControl>
                    </FormGroup>{' '}

                    <FormGroup controlId="formValidationNull" validationState={null}>
                        <ControlLabel>Кол-во мест учащихся</ControlLabel>{' '}
                        <FormControl
                            type="text"
                            placeholder="кол-во мест"
                            value={this.state.numberOfWorkspaceForStudent}
                            onChange={this.handleNumberOfWorkspaceForStudentChange}
                        />
                    </FormGroup>{' '}

                    <FormGroup controlId="formValidationNull" validationState={null}>
                        <ControlLabel>Кол-во мест работников</ControlLabel>{' '}
                        <FormControl
                            type="text"
                            placeholder="кол-во мест"
                            value={this.state.numberOfWorkspaceForWorkers}
                            onChange={this.handleNumberOfWorkspaceForWorkersChange}
                        />
                    </FormGroup>{' '}

                    {/*<FormGroup controlId="formValidationNull" validationState={null}>*/}
                    {/*    <ControlLabel>Общее кол-во мест</ControlLabel>{' '}*/}
                    {/*    <FormControl*/}
                    {/*        type="text"*/}
                    {/*        placeholder="общее кол-во мест"*/}
                    {/*        value={this.state.totalNumberOfWorkspace}*/}
                    {/*        onChange={this.handleTotalNumberOfWorkspaceChange}*/}
                    {/*    />*/}
                    {/*</FormGroup>{' '}*/}

                    <FormGroup controlId="formValidationNull" validationState={null}>
                        <ControlLabel>Номер этажа</ControlLabel>{' '}
                        <FormControl
                            type="text"
                            componentClass="select"
                            placeholder="номер этажа"
                            value={this.state.numberFloor}
                            onChange={this.handleNumberFloorChange}
                        >
                            <option value=''> </option>
                            {
                                this.props.floors.map(floors=>
                                    <option
                                        key={floors.id}
                                        value={floors.numberFloor}
                                    >
                                        {floors.numberFloor}
                                    </option>
                                )
                            }
                        </FormControl>
                    </FormGroup>{' '}

                    <FormGroup controlId="formValidationNull" validationState={null}>
                        <ControlLabel>Номер корпуса</ControlLabel>{' '}
                        <FormControl
                            type="text"
                            componentClass="select"
                            placeholder="номер корпуса"
                            value={this.state.numberHousing}
                            onChange={this.handleNumberHousingChange}
                        >
                            <option value=''> </option>
                            {
                                this.props.housing.map(housing =>
                                    <option
                                        key={housing.id}
                                        value={housing.numberHousing}
                                    >
                                        {housing.numberHousing}
                                    </option>
                                )
                            }
                        </FormControl>
                    </FormGroup>{' '}

                </Form>

                <Button onClick={this.handleClassroomAdd}>
                    Добавить
                </Button>

                <Button
                    onClick={this.handleHousingCancel}>Отмена
                </Button>

            </Form>

        )
    }
});

export default ClassroomEditor;