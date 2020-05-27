import React from 'react';
import {Modal,Image, Button} from 'react-bootstrap';


class ImageModal extends React.Component{

    constructor(props) {
        super(props);

        // this.state = {
        //     myId : this.props.myId,
        //     title: this.props.title,
        //     numberHousing: this.props.numberHousing,
        //     countOfFloors: this.props.countOfFloors
        // };
    }

    render() {
        return(
            <Modal
                {...this.props}
                bsSize="large"
                dialogClassName="custom-modal"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {/*Характеристики корпуса*/}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image
                        // alt={imageSrc}
                        src={require(`../image/${this.props.imageFloor}`)}
                        width="100%"
                        // height="480"
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={this.props.onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        );
    }
};

export default ImageModal;