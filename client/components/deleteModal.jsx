import React from 'react';
import {Popover, Button, Modal, FormControl, Form, ControlLabel, FormGroup} from 'react-bootstrap';

import './modal.less';

class DeleteModal extends React.Component{

    constructor(props) {
        super(props);

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
                        Удаление
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    Вы уверены, что хотите произвести удаление?

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onDelete}>Удалить</Button>
                    <Button variant="light" onClick={this.props.onHide}>Отмена</Button>
                </Modal.Footer>
            </Modal>
        );
    }
};

export default DeleteModal;