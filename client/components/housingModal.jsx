import React from 'react';
import {Popover, Button, Modal, FormControl, Form, ControlLabel, FormGroup} from 'react-bootstrap';

import './modal.less';

class HousingModal extends React.Component{
// const HousingModal = React.createClass( {

    constructor(props) {
        super(props);

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleNumberHousingChange = this.handleNumberHousingChange.bind(this);
        this.handleCountOfFloorsChange = this.handleCountOfFloorsChange.bind(this);
        this.handleHousingAdd = this.handleHousingAdd.bind(this);

        this.state = {
            myId : this.props.myId,
            title: this.props.title,
            numberHousing: this.props.numberHousing,
            countOfFloors: this.props.countOfFloors
        };
    }


    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleNumberHousingChange(event) {
        this.setState({ numberHousing: event.target.value });
    }

    handleCountOfFloorsChange(event) {
        this.setState({ countOfFloors: event.target.value });
    }

    handleHousingAdd() {
        const newHousing = {
            myId : this.state.myId,
            title: this.state.title,
            numberHousing: this.state.numberHousing,
            countOfFloors: this.state.countOfFloors
        };

        this.props.onNoteAdd(newHousing);
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
                        Характеристики корпуса
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                            <Form >

                                {/*<FormGroup controlId="formValidationNull" validationState={null}>*/}
                                {/*    <ControlLabel>id</ControlLabel>*/}
                                {/*    <FormControl*/}
                                {/*        type="text"*/}
                                {/*        placeholder="id"*/}
                                {/*        // value={housing.title}*/}
                                {/*        value={this.state.myId}*/}
                                {/*        onChange={this.handleTitleChange}*/}
                                {/*    />*/}
                                {/*</FormGroup>*/}

                                <FormGroup controlId="formValidationNull" validationState={null}>
                                    <ControlLabel>Название корпуса</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="название корпуса"
                                        // value={housing.title}
                                        value={this.state.title}
                                        onChange={this.handleTitleChange}
                                    />
                                </FormGroup>

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

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleHousingAdd}>Изменить</Button>
                    <Button variant="light" onClick={this.props.onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        );
    }
};

export default HousingModal;
// render(<HousingModal />);