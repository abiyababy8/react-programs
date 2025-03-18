import { React, useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import { addToHistory, deleteVideo } from '../services/allApi';
import { toast } from 'react-toastify';
function VideoCard({ displayVideo, setDeleteVideoStatus }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
        setShow(true);
        const { caption, embeddedLink } = displayVideo
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth() + 1
        const day = today.getDate()
        const hour = String(today.getHours()).padStart(2, '0')
        const minute = String(today.getMinutes()).padStart(2, '0')
        const timeValue = day  + '-'  + month  + '-' + year + ' ' + hour + ':' +  minute
        console.log(timeValue)
        const history = {
            caption,
            embeddedLink,
            timeStamp: timeValue
        }
        await addToHistory(history)
    }
    const removeVideo = async (id) => {
        const response = await deleteVideo(id)
        console.log('Delete Response:')
        console.log(response)
        if (response.status == 200) {
            toast.success(`${displayVideo.caption} Successfully Deleted`)
            setDeleteVideoStatus(response)
        }
        else {
            toast.error('Something Wrong')
        }
    }
    const dragStarted=(e,id)=>{
        console.log(`video with id ${id} started dragging`)
        e.dataTransfer.setData('videoId',id)
    }
    return (
        <>
            <Card style={{ width: '14rem', height: '14rem',margin:'0.5rem'}} className='text-dark' draggable onDragStart={(e)=>dragStarted(e,displayVideo.id)}>
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