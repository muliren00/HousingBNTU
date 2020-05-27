import React from 'react';
import {Button, Modal, FormControl, Form, ControlLabel, FormGroup} from 'react-bootstrap';

import './modal.less';

class ClassroomModal extends React.Component{

    constructor(props) {
        super(props);

        this.handleNumberFloorChange = this.handleNumberFloorChange.bind(this);
        this.handleNumberHousingChange = this.handleNumberHousingChange.bind(this);
        this.handleTypeOfClassroomChange = this.handleTypeOfClassroomChange.bind(this);
        this.handleNameClassroomChange = this.handleNameClassroomChange.bind(this);
        this.handleNumberClassroomChange = this.handleNumberClassroomChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleNumberOfWorkspaceForStudentChange = this.handleNumberOfWorkspaceForStudentChange.bind(this);
        this.handleNumberOfWorkspaceForWorkersChange = this.handleNumberOfWorkspaceForWorkersChange.bind(this);
        this.handleTotalNumberOfWorkspaceChange = this.handleTotalNumberOfWorkspaceChange.bind(this);

        this.handleClassroomAdd = this.handleClassroomAdd.bind(this);

        this.state = {
            myId : this.props.myId,
            numberClassroom: this.props.numberClassroom,
            nameClassroom: this.props.nameClassroom,
            typeOfClassroom: this.props.typeOfClassroom,
            status : this.props.status,
            numberOfWorkspaceForStudent : this.props.numberOfWorkspaceForStudent,
            numberOfWorkspaceForWorkers : this.props.numberOfWorkspaceForWorkers,
            totalNumberOfWorkspace : this.props.totalNumberOfWorkspace,
            numberFloor: this.props.numberFloor,
            numberHousing: this.props.numberHousing

        };
    }


    handleNumberFloorChange(event) {
        this.setState({ numberFloor: event.target.value });
    }

    handleNumberHousingChange(event) {
        this.setState({ numberHousing: event.target.value });
    }

    handleTypeOfClassroomChange(event) {
        this.setState({ typeOfClassroom: event.target.value });
    }

    handleNameClassroomChange(event) {
        this.setState({ nameClassroom: event.target.value });
    }


    handleNumberClassroomChange(event) {
        this.setState({ numberClassroom: event.target.value });
    }

    handleStatusChange(event) {
        this.setState({ status: event.target.value });
    }

    handleNumberOfWorkspaceForStudentChange(event) {
        this.setState({ numberOfWorkspaceForStudent: event.target.value });
    }

    handleNumberOfWorkspaceForWorkersChange(event) {
        this.setState({ numberOfWorkspaceForWorkers: event.target.value });
    }

    handleTotalNumberOfWorkspaceChange(event) {
        this.setState({ totalNumberOfWorkspace: event.target.value });
    }

    handleClassroomAdd() {
        const newClassroom = {
            myId : this.state.myId,
            numberClassroom: this.state.numberClassroom,
            nameClassroom: this.state.nameClassroom,
            typeOfClassroom: this.state.typeOfClassroom,
            status : this.state.status,
            numberOfWorkspaceForStudent : this.state.numberOfWorkspaceForStudent,
            numberOfWorkspaceForWorkers : this.state.numberOfWorkspaceForWorkers,
            totalNumberOfWorkspace : this.state.totalNumberOfWorkspace,
            numberFloor: this.state.numberFloor,
            numberHousing: this.state.numberHousing

        };

        this.props.onNoteAdd(newClassroom);
    }

    render() {
        return(
            <Modal
                {...this.props}
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Характеристики этажа
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {
                        this.state.typeOfClassroom !== 'Служебная'
                        ?
                            <Form >

                                <FormGroup controlId="formValidationNull" validationState={null}>
                                    <ControlLabel>Название аудитории</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="название аудитории"
                                        value={this.state.nameClassroom}
                                        onChange={this.handleNameClassroomChange}
                                    />
                                </FormGroup>

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
                                </FormGroup>


                                <FormGroup controlId="formValidationNull" validationState={null}>
                                    <ControlLabel>Кол-во мест работников</ControlLabel>{' '}
                                    <FormControl
                                        type="text"
                                        placeholder="кол-во мест"
                                        value={this.state.numberOfWorkspaceForWorkers}
                                        onChange={this.handleNumberOfWorkspaceForWorkersChange}
                                    />
                                </FormGroup>{' '}

                                <FormGroup controlId="formValidationNull" validationState={null}>
                                    <ControlLabel>Общее кол-во мест</ControlLabel>{' '}
                                    <FormControl
                                        type="text"
                                        placeholder="общее кол-во мест"
                                        value={this.state.totalNumberOfWorkspace}
                                        onChange={this.handleTotalNumberOfWorkspaceChange}
                                    />
                                </FormGroup>{' '}

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
                            :

                            <Form >

                                <FormGroup controlId="formValidationNull" validationState={null}>
                                    <ControlLabel>Название аудитории</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="название аудитории"
                                        value={this.state.nameClassroom}
                                        onChange={this.handleNameClassroomChange}
                                    />
                                </FormGroup>

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
                                    <ControlLabel>Кол-во мест работников</ControlLabel>{' '}
                                    <FormControl
                                        type="text"
                                        placeholder="кол-во мест"
                                        value={this.state.numberOfWorkspaceForWorkers}
                                        onChange={this.handleNumberOfWorkspaceForWorkersChange}
                                    />
                                </FormGroup>{' '}


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
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClassroomAdd}>Сохранить</Button>
                    <Button variant="light" onClick={this.props.onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        );
    }
};

export default ClassroomModal;