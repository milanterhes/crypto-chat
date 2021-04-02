import { ChangeEvent, FC, FormEvent, useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
interface InputBarProps {
    sendMessage: (message: string) => void
}

const InputBar: FC<InputBarProps> = ({ sendMessage }) => {
    const [msg, setMsg] = useState<string>("");


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (msg.length > 0) {
            setMsg("")
            sendMessage(msg)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setMsg(e.currentTarget.value)
    }

    return (
        <Form inline onSubmit={handleSubmit} className="bottom-0 pt-1 pb-1 position-sticky">
            <Form.Group className="col-sm-10 pl-0 pr-1" controlId="formBasicEmail">
                <Form.Control type='text' className="w-100" placeholder="Enter your message..." value={msg} onChange={handleChange} />
            </Form.Group>
            <Button className="col-sm-2" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default InputBar
