import React from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button, FieldGroup } from "react-bootstrap";

import './editForm.less';
import FileUpload from "./fileUpload.jsx";

const FloorEditor = React.createClass({

    getInitialState() {
        return {
            numberFloor: null,
            countOfClassrooms: null,
            department: '',
            numberHousing: null,
            imageFloor: ''
        };
    },

    handleNumberFloorChange(event) {
        this.setState({ numberFloor: event.target.value });
    },

    handleCountOfClassroomsChange(event) {
        this.setState({ countOfClassrooms: event.target.value });
    },

    handleDepartmentChange(event) {
        this.setState({ department: event.target.value });
    },

    handleNumberHousingChange(event) {
        this.setState({ numberHousing: event.target.value });
    },

    handleImageFloorChange(event) {
        this.setState({ imageFloor: event.target.value });
    },

    handleFloorAdd() {
        const newHousing = {

            numberFloor: this.state.numberFloor,
            countOfClassrooms: this.state.countOfClassrooms,
            department: this.state.department,
            numberHousing: this.state.numberHousing,
            imageFloor: this.state.imageFloor
        };

        this.props.onNoteAdd(newHousing);
        this.setState({ numberFloor: '', countOfClassrooms: '', department: '', numberHousing: '', imageFloor: ''});
    },

    handleHousingCancel() {


        this.setState({ numberFloor: '', countOfClassrooms: '', department: '', numberHousing: '', imageFloor: ''});
    },

    render(){
        return(
            <Form>

                <FormGroup controlId="formValidationNull" validationState={null}>
                    <ControlLabel>Название кафедры</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="название кафедры"
                        value={this.state.department}
                        onChange={this.handleDepartmentChange}
                    />
                </FormGroup>

                <Form componentClass="fieldset" inline>
                    <FormGroup controlId="formValidationNull" validationState={null}>
                        <ControlLabel> Кол-во аудиторий</ControlLabel>{' '}
                        <FormControl
                            type="text"
                            placeholder="кол-во аудиторий"
                            value={this.state.countOfClassrooms}
                            onChange={this.handleCountOfClassroomsChange}
                        />
                    </FormGroup>{'  '}


                    {/*<FileUpload/>*/}

                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel> Номер этажа</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="номер этажа"
                            value={this.state.numberFloor}
                            onChange={this.handleNumberFloorChange}
                        />

                    </FormGroup>{'  '}


                    <FormGroup controlId="formValidationNull" validationState={null}>
                        <ControlLabel> Номер корпуса</ControlLabel>{' '}
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
                    </FormGroup>{'  '}

                    <FormGroup controlId="formControlsFile" validationState={null}>
                        <ControlLabel> Схeма этажа</ControlLabel>{' '}
                        <input
                            type="file"
                            accept="image/*"

                            value={this.state.imageFloor}
                            onChange={this.handleImageFloorChange}
                        />
                    </FormGroup>{'  '}

                </Form>

                <Button
                    onClick={this.handleFloorAdd}>Добавить
                </Button>

                <Button
                    onClick={this.handleHousingCancel}>Отмена
                </Button>

            </Form>

        )
    }
});

export default FloorEditor;