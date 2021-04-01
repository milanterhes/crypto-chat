import { FC, FormEvent } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const InputBar: FC = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <Form inline onSubmit={handleSubmit} className="bottom-0 pt-1 pb-1 position-sticky">
            <Form.Group className="col-sm-10 pl-0 pr-1" controlId="formBasicEmail">
                <Form.Control type='text' className="w-100" placeholder="Enter your message..." />
            </Form.Group>
            <Button className="col-sm-2" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default InputBar
