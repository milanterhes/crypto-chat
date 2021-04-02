import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { FC, useEffect, useState } from "react"

interface ChangeChatroomProps {
    show: boolean;
    handleHide: () => void;
    handleChange: (newChatroom: string) => void;
    prevChatroom: string;
}

const ChangeChatroomModal: FC<ChangeChatroomProps> = ({ show, handleHide, handleChange, prevChatroom }) => {
    const [chatroom, setChatroom] = useState<string>(prevChatroom)

    const onSave = () => {
        handleHide()
        handleChange(chatroom)
    }

    useEffect(() => {
        setChatroom(prevChatroom)
    }, [prevChatroom])

    return (
        <Modal show={show} onHide={handleHide}>
            <Modal.Header closeButton>
                <Modal.Title>Change chat room</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>New chat room</Form.Label>
                        <Form.Control value={chatroom} onChange={(e) => setChatroom(e.currentTarget.value)} />
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

export default ChangeChatroomModal
