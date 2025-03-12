import { React, useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import { deleteVideo } from '../services/allApi';
import { toast } from 'react-toastify';
function VideoCard({ displayVideo }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const removeVideo = async (id) => {
        const response = await deleteVideo(id)
        console.log('Delete REsponse:')
        console.log(response)
        if (response.status == 200) {
            toast.success(`${displayVideo.caption} Successfully Deleted`)
        }
        else {
            toast.error('Something Wrong')
        }
    }
    return (
        <>
            <Card style={{ width: '14rem', height: '14rem' }} className='text-dark'>
                <Card.Img variant="top" src={displayVideo.thumbnailUrl} height={'150px'} onClick={handleShow} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title onClick={handleShow}>{displayVideo.caption.slice(0, 12)}..</Card.Title>
                        <Button variant="danger" onClick={() => removeVideo(displayVideo.id)} style={{ height: '36px' }}><i className="fa-solid fa-trash"></i></Button>
                    </div>
                </Card.Body>
            </Card>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton className='bg-dark text-light'>
                    <Modal.Title>{displayVideo.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark text-light'>
                    <iframe width="100%" height="400px" src={displayVideo.embeddedLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer className='bg-dark text-light'>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default VideoCard