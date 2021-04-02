import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { FC, useEffect, useState } from "react"
import Message from "../../types/message"

interface EditModalProps {
    message: Message;
    show: boolean;
    handleHide: () => void;
    handleChange: (newMessage: string) => void;
    chatroom: string;
}

const EditModal: FC<EditModalProps> = ({ message, show, handleHide, handleChange, chatroom }) => {
    const [msg, setMsg] = useState<string>(message.message)

    const onSave = () => {
        handleHide()
        handleChange(msg)
    }

    useEffect(() => {
        setMsg(message.message)
    }, [message])

    return (
        <Modal show={show} onHide={handleHide}>
            <Modal.Header closeButton>
                <Modal.Title>Edit message</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>New message</Form.Label>
                        <Form.Control value={msg} onChange={(e) => setMsg(e.currentTarget.value)} />
                        <Form.Text className="text-muted">
                            Chatroom: {chatroom} ID: {message.message_id}
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleHide}>Close</Button>
                <Button variant="primary" onClick={onSave}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditModal
