import  Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { appContext } from "../../../App";

const AirCoverModal = () => {
    const { showAirCoverModal, setShowAirCoverModal} = useContext(appContext);
    const handleHide = () => {
        setShowAirCoverModal(false);
    }
    return (
        <Modal show={showAirCoverModal} onHide={handleHide} >
            <Modal.Header closeButton>Test</Modal.Header>
        </Modal>
    )

}

export default AirCoverModal;