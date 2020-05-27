import React from 'react';
import {Popover, Button, Modal, FormControl, Form, ControlLabel, FormGroup} from 'react-bootstrap';

import './modal.less';

class FloorModal extends React.Component{

    constructor(props) {
        super(props);

        this.handleNumberFloorChange = this.handleNumberFloorChange.bind(this);
        this.handleNumberHousingChange = this.handleNumberHousingChange.bind(this);
        this.handleCountOfClassroomsChange = this.handleCountOfClassroomsChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handleImageFloorChange = this.handleImageFloorChange.bind(this);

        this.handleFloorAdd = this.handleFloorAdd.bind(this);

        this.state = {
            myId : this.props.myId,
            numberFloor: this.props.numberFloor,
            countOfClassrooms : this.props.countOfClassrooms,
            department : this.props.department,
            numberHousing: this.props.numberHousing,
            imageFloor: this.props.imageFloor,

        };
    }


    handleNumberFloorChange(event) {
        this.setState({ numberFloor: event.target.value });
    }

    handleNumberHousingChange(event) {
        this.setState({ numberHousing: event.target.value });
    }

    handleCountOfClassroomsChange(event) {
        this.setState({ countOfClassrooms: event.target.value });
    }

    handleDepartmentChange(event) {
        this.setState({ department: event.target.value });
    }


    handleImageFloorChange(event) {
        this.setState({ imageFloor: event.target.value });
    }

    handleFloorAdd() {
        const newFloor = {
            myId : this.state.myId,
            numberFloor: this.state.numberFloor,
            countOfClassrooms : this.state.countOfClassrooms,
            department : this.state.department,
            numberHousing: this.state.numberHousing,
            imageFloor: this.state.imageFloor,

        };

        this.props.onNoteAdd(newFloor);
        // this.setState({ title: '', numberHousing: '', countOfFloors: ''});
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

                            <Form >

                                <FormGroup controlId="formValidationNull" validationState={null}>
                                    <ControlLabel>Название кафедры</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Название кафедры"
                                        // value={housing.title}
                                        value={this.state.department}
                                        onChange={this.handleDepartmentChange}
                                    />
                                </FormGroup>

                                <FormGroup controlId="formValidationNull" validationState={null}>
                                    <ControlLabel>Номер этажа</ControlLabel>{' '}
                                    <FormControl
                                        type="text"
                                        placeholder="Номер этажа"
                                        value={this.state.numberFloor}
                                        onChange={this.handleNumberFloorChange}
                                    />
                                </FormGroup>{' '}

                                <FormGroup controlId="formValidationNull" validationState={null}>
                                    <ControlLabel>Количество аудиторий</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Количество аудиторий"
                                        // value={housing.title}
                                        value={this.state.countOfClassrooms}
                                        onChange={this.handleCountOfClassroomsChange}
                                    />
                                </FormGroup>

                                <FormGroup controlId="formValidationNull" validationState={null}>
                                    <ControlLabel>Номер корпуса</ControlLabel>{' '}
                                    <FormControl
                                        componentClass="select"
                                        placeholder="номер корпуса"
                                        value={this.state.numberHousing}
                                        onChange={this.handleNumberHousingChange}
                                    >
                                        <option value=''></option>
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

                                <FormGroup controlId="formValidationNull" validationState={null}>
                                    <ControlLabel>Схема этажа</ControlLabel>{' '}
                                    <input
                                        type="file"
                                        accept="image/*"

                                        value={this.state.imageFloor}
                                        onChange={this.handleImageFloorChange}
                                    />
                                </FormGroup>{' '}

                            </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleFloorAdd}>Сохранить</Button>
                    <Button variant="light" onClick={this.props.onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        );
    }
};

export default FloorModal;