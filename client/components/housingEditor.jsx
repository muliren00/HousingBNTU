import React from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from "react-bootstrap";

import './editForm.less';

const HousingEditor = React.createClass({

    getInitialState() {
        return {
            title: '',
            numberHousing: null,
            countOfFloors: null
        };
    },


    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    },

    handleNumberHousingChange(event) {
        this.setState({ numberHousing: event.target.value });
    },

    handleCountOfFloorsChange(event) {
        this.setState({ countOfFloors: event.target.value });
    },

    handleHousingAdd() {
        const newHousing = {
            title: this.state.title,
            numberHousing: this.state.numberHousing,
            countOfFloors: this.state.countOfFloors
        };

        this.props.onNoteAdd(newHousing);
        this.setState({ title: '', numberHousing: '', countOfFloors: ''});
    },

    handleHousingCancel() {


        this.setState({ title: '', numberHousing: '', countOfFloors: ''});
    },

    render(){
        return(
            <Form>

                <FormGroup controlId="formValidationNull" validationState={null}>
                    <ControlLabel>Название корпуса</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="название корпуса"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                </FormGroup>

                <Form componentClass="fieldset" inline>
                    <FormGroup controlId="formValidationNull" validationState={null}>
                        <ControlLabel>Номер корпуса</ControlLabel>{' '}
                        <FormControl
                            type="text"
                            placeholder="номер корпуса"
                            value={this.state.numberHousing}
                            onChange={this.handleNumberHousingChange}
                        />
                    </FormGroup>{' '}

                    <FormGroup controlId="formValidationNull" validationState={null}>
                        <ControlLabel>Кол-во этажей</ControlLabel>{' '}
                        <FormControl
                            type="text"
                            placeholder="кол-во этажей"
                            value={this.state.countOfFloors}
                            onChange={this.handleCountOfFloorsChange}
                        />
                    </FormGroup>{' '}

                </Form>

                <Button
                        onClick={this.handleHousingAdd}>Добавить
                </Button>

                <Button
                    onClick={this.handleHousingCancel}>Отмена
                </Button>

            </Form>

        )
    }
});

export default HousingEditor;